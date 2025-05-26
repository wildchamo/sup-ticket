"use client";
import { useRef, useState, useEffect } from "react";

import classes from "./styles.module.css";
import { createSupabaseBrowserClient } from "../../../../../supabase-utils/browser-client";

import { getRandomHexString } from "../../../../../utils/randomString";

export function TicketComments({ ticket, initialComments, tenant }) {
  const commentRef = useRef(null);
  const fileInputRef = useRef(null);

  const supabase = createSupabaseBrowserClient();

  const [fileList, setFileList] = useState(/** @type {FileList} */ ([]));

  const [comments, setComments] = useState(initialComments || []);

  const deleteComment = async (commentId) => {
    try {
      const { error } = await supabase
        .from("comments")
        .delete()
        .eq("id", commentId);

      if (error) throw error;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel("comments")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "comments",
          filter: `ticket=eq.${ticket}`,
        },
        (payload) => {
          console.log("Realtime event:", payload);
          if (payload.eventType === "INSERT") {
            setComments((prev) => [...prev, payload.new]);
          }
          if (payload.eventType === "DELETE") {
            setComments((prev) => prev.filter((c) => c.id !== payload.old.id));
          }
          if (payload.eventType === "UPDATE") {
            setComments((prev) =>
              prev.map((c) => (c.id === payload.new.id ? payload.new : c))
            );
          }
        }
      )
      .subscribe((status) => console.log("connection status", status));

    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <footer>
      <h3>Comments</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const comment_text = commentRef.current.value.trim();

          if (!comment_text) return alert("Please enter a comment");

          commentRef.disabled = true;

          let uploadPromise = Promise.resolve();

          const fileArray = Array.from(fileList);

          if (fileList.length) {
            uploadPromise = Promise.all(
              fileArray.map((file) =>
                supabase.storage
                  .from("comment-attachments")
                  .upload(
                    [tenant, ticket, getRandomHexString(), file.name].join("/"),
                    file
                  )
              )
            );
          }

          uploadPromise.then((fileUploads) => {
            supabase
              .from("comments")
              .insert({
                ticket,
                comment_text,
              })
              .select("*")
              .single()
              .then(({ error, data: commentData }) => {
                commentRef.current.value = "";
                commentRef.disabled = false;
                fileInputRef.current.value = "";

                setFileList([]);

                if (error) return alert("Error adding comment");

                if (fileUploads) {
                  supabase
                    .from("comment_attachments")
                    .insert(
                      fileUploads.map((file) => ({
                        comment: commentData.id,
                        file_path: file.data.path,
                      }))
                    )
                    .then();
                }
              })

              .catch((error) => {
                console.error(error);
              });
          });
        }}
      >
        <textarea ref={commentRef} placeholder="Add a comment" />
        <label htmlFor="file">
          <input
            type="file"
            id="file"
            name="file"
            multiple
            ref={fileInputRef}
            onChange={(e) => {
              setFileList(e.target.files);
            }}
          />
        </label>
        <button type="submit">Add comment</button>
      </form>

      {comments.map((comment) => (
        <article key={comment.id} className={classes.comment}>
          <strong>{comment.author_name} </strong>
          <time>{new Date(comment.created_at).toLocaleString("en-US")}</time>
          <p>{comment.comment_text}</p>
        </article>
      ))}
      <section>We have {comments.length} comments.</section>
    </footer>
  );
}

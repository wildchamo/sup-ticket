"use client";
import { useRef, useState, useEffect } from "react";

import classes from "./styles.module.css";
import { createSupabaseBrowserClient } from "../../../../../supabase-utils/browser-client";
export function TicketComments({ ticket, initialComments }) {
  const commentRef = useRef(null);
  const supabase = createSupabaseBrowserClient();

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
      .subscribe();

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

          console.log(comment_text);
          if (!comment_text) return alert("Please enter a comment");
          commentRef.disabled = true;
          supabase
            .from("comments")
            .insert({
              ticket,
              comment_text,
            })
            .then(() => {
              commentRef.current.value = "";
              commentRef.disabled = false;
            })
            .catch((error) => {
              console.error(error);
            });
        }}
      >
        <textarea ref={commentRef} placeholder="Add a comment" />
        <button type="submit">Add comment</button>
      </form>

      {comments.map((comment) => (
        <article key={comment.id} className={classes.comment}>
          <strong>{comment.author_name} </strong>
          <time>{new Date(comment.created_at).toLocaleString("en-US")}</time>
          <p>{comment.comment_text}</p>
          <button
            onClick={() => deleteComment(comment.id)}
            style={{
              backgroundColor: "#ff4444",
              color: "white",
              padding: "4px 8px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "0.8rem",
              marginTop: "8px",
            }}
          >
            Delete Comment
          </button>
        </article>
      ))}
      <section>We have {comments.length} comments.</section>
    </footer>
  );
}

"use client";
import { useRef } from "react";

import classes from "./styles.module.css";
import { createSupabaseBrowserClient } from "../../../../../supabase-utils/browser-client";
export function TicketComments({ ticket, initialComments }) {
  const commentRef = useRef(null);
  const supabase = createSupabaseBrowserClient();

  const comments = initialComments || [];

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
        </article>
      ))}
      <section>We have {comments.length} comments.</section>
    </footer>
  );
}

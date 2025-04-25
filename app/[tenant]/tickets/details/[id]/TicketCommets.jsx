"use client";
import { useRef } from "react";
const comments = [
  {
    author: "Dave",
    date: "2027-01-01",
    content: "This is a comment from Dave",
  },
  {
    author: "Alice",
    date: "2027-01-02",
    content: "This is a comment from Alice",
  },
];

import classes from "./styles.module.css";
export function TicketComments() {
  const commentRef = useRef(null);
  return (
    <footer>
      <h3>Comments</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
      >
        <textarea ref={commentRef} placeholder="Add a comment" />
        <button type="submit">Add comment</button>
      </form>

      <section>
        {comments.map((comment) => (
          <article key={comment.date} className={classes.comment}>
            <strong>{comment.author} </strong>
            <time>{comment.date}</time>
            <p>{comment.content}</p>
          </article>
        ))}
      </section>
      <section>We have {comments.length} comments.</section>
    </footer>
  );
}

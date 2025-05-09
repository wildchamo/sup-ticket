"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";
import { useRef } from "react";

export default function CreateTicket() {
  const supabase = createBrowserClient();
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = ticketTitleRef.current.value;
          const description = ticketDescriptionRef.current.value;

          if (title.trim().length > 4 && description.trim().length > 9) {
            // process form
          } else {
            alert(
              "A title must have at least 5 chars and a description must at least contain 10"
            );
          }
        }}
      >
        <input ref={ticketTitleRef} placeholder="Add a title" />
        <textarea ref={ticketDescriptionRef} placeholder="Add a comment" />
        <button type="submit">Create ticket now</button>
      </form>
    </article>
  );
}

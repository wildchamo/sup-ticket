"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { urlPath } from "../../../../utils/url-helpers";

export default function CreateTicket({ tenant }) {
  const [isLoading, setIsLoading] = useState(false);
  const supabase = createBrowserClient();
  const router = useRouter();

  useEffect(() => {
    router.prefetch(urlPath(`/tickets/details/[id]`));
  }, [router]);

  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <article>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          const title = ticketTitleRef.current.value;
          const description = ticketDescriptionRef.current.value;

          if (title.trim().length > 4 && description.trim().length > 9) {
            supabase
              .from("tickets")
              .insert({
                title,
                description,
                tenant,
              })
              .select()
              .single()
              .then(({ error, data }) => {
                if (error) {
                  setIsLoading(false);
                  alert("Could not create ticket");
                  console.error(error);
                } else {
                  router.push(urlPath(`/tickets/details/${data.id}`, tenant));
                }
              });
          } else {
            alert(
              "A title must have at least 5 chars and a description must at least contain 10"
            );
          }
        }}
      >
        <input
          ref={ticketTitleRef}
          placeholder="Add a title"
          disabled={isLoading}
        />
        <textarea
          ref={ticketDescriptionRef}
          placeholder="Add a comment"
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading} aria-busy={isLoading}>
          Create ticket now
        </button>
      </form>
    </article>
  );
}

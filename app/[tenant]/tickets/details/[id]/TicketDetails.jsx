"use client";

import { useRouter } from "next/navigation";
import { TicketComments } from "./TicketCommets";
import classes from "./styles.module.css";
import { createSupabaseBrowserClient } from "../../../../../supabase-utils/browser-client";
import { urlPath } from "../../../../../utils/url-helpers";
import { AssigneeSelect } from "../../../../../components/AssigneeSelect";

const TicketDetails = ({
  id,
  ticketStatus,
  isAuthor,
  author_name,
  dateString,
  title,
  description,
  tenant,
  assignee,
  initialComments,
}) => {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  return (
    <article className={classes.ticketDetails}>
      <header>
        <div className="grid">
          <div>
            <strong>#{id}</strong> -{" "}
            <strong className={classes.ticketStatusGreen}>
              {ticketStatus}
            </strong>
          </div>

          <AssigneeSelect
            tenant={tenant}
            onValueChanged={(v) => {
              supabase
                .from("tickets")
                .update({
                  assignee: v,
                })
                .eq("id", id)
                .then(() => router.refresh());
            }}
            initialValue={assignee}
          />

          {isAuthor && (
            <button
              role="button"
              className={classes.littledanger}
              onClick={() => {
                supabase
                  .from("tickets")
                  .delete()
                  .eq("id", id)
                  .then(() => {
                    router.push(urlPath("/tickets", tenant));
                  });
              }}
            >
              Delete ticket
            </button>
          )}
        </div>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>{author_name}</strong> at <time>{dateString}</time>
        </small>
        <h2>{title}</h2>
      </header>
      <section>{description}.</section>

      <TicketComments ticket={id} initialComments={initialComments} />
    </article>
  );
};

export default TicketDetails;

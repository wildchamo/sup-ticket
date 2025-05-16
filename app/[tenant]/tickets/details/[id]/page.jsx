import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "../../../../../supabase-utils/server-client";
import classes from "./styles.module.css";
import { TicketComments } from "./TicketCommets";
import { TICKET_STATUS } from "../../../../../utils/constants";

export default async function TicketDetailsPage({ params }) {
  const supabase = await createSupabaseServerClient();
  const { id } = await params;

  const { data: ticket, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error) return notFound();

  const { created_at, title, description, created_by, status, author_name } =
    ticket;

  const dateString = new Date(created_at).toLocaleString("en-US");
  const ticketStatus = TICKET_STATUS[status];

  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong>#{id}</strong> -{" "}
        <strong className={classes.ticketStatusGreen}>{ticketStatus}</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>{author_name}</strong> at <time>{dateString}</time>
        </small>
        <h2>{title}</h2>
      </header>
      <section>{description}.</section>

      <TicketComments />
    </article>
  );
}

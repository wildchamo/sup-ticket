import { createSupabaseServerClient } from "../../../../../supabase-utils/server-client";
import classes from "./styles.module.css";
import { TicketComments } from "./TicketCommets";

export default async function TicketDetailsPage({ params }) {
  const supabase = await createSupabaseServerClient();
  const { id } = await params;

  const { data: ticket, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("id", Number(id))
    .single();

  console.log(ticket);

  return (
    <article className={classes.ticketDetails}>
      <header>
        <strong>#{id}</strong> -{" "}
        <strong className={classes.ticketStatusGreen}>{ticket.status}</strong>
        <br />
        <small className={classes.authorAndDate}>
          Created by <strong>AuthorName</strong> at{" "}
          <time>{new Date(ticket.created_at).toISOString()}</time>
        </small>
        <h2>{ticket.title}</h2>
      </header>
      <section>{ticket.description}.</section>

      <TicketComments />
    </article>
  );
}

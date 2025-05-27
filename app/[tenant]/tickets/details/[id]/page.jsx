import { notFound } from "next/navigation";
import { createSupabaseServerClient } from "../../../../../supabase-utils/server-client";
import { TICKET_STATUS } from "../../../../../utils/constants";
import TicketDetails from "./TicketDetails";

export default async function TicketDetailsPage({ params }) {
  const supabase = await createSupabaseServerClient();
  const { id, tenant } = await params;

  const { data: ticket, error } = await supabase
    .from("tickets")
    .select("*, comments (*, comment_attachments (*) )")
    .order("created_at", { ascending: true, foreignTable: "comments" })
    .eq("id", Number(id))
    .single();

  if (error) return notFound();

  const {
    created_at,
    title,
    description,
    created_by,
    status,
    author_name,
    assignee,
    assignee_name,
    comments,
  } = ticket;

  const dateString = new Date(created_at).toLocaleString("en-US");
  const ticketStatus = TICKET_STATUS[status];

  const supabase_user_id = (await supabase.auth.getUser()).data.user.id;

  const { data: serviceUser } = await supabase
    .from("service_users")
    .select("id")
    .eq("supabase_user", supabase_user_id)
    .single();

  const isAuthor = serviceUser.id === ticket.created_by;

  return (
    <TicketDetails
      id={id}
      ticketStatus={ticketStatus}
      isAuthor={isAuthor}
      author_name={author_name}
      dateString={dateString}
      title={title}
      description={description}
      tenant={tenant}
      assignee={assignee}
      initialComments={comments}
    />
  );
}

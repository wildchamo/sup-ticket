import Link from "next/link";
import { urlPath } from "../../../utils/url-helpers";
import { createSupabaseServerClient } from "../../../supabase-utils/server-client";
import { TICKET_STATUS } from "../../../utils/constants";

export const dynamic = "force-dynamic";

export async function TicketList({ tenant, searchParams }) {
  let { page = 1, search } = await searchParams;

  if (Number.isInteger(Number(page)) && Number(page) > 0) {
    page = Number(page);
  } else {
    page = 1;
  }
  const numberOfTicketsOnPage = 6;

  const supabase = await createSupabaseServerClient();

  let countStatement = supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  let ticketsStatement = supabase.from("tickets").select().eq("tenant", tenant);

  const startingPoint = (page - 1) * numberOfTicketsOnPage;

  const searchValue = search?.trim();

  if (searchValue) {
    countStatement = countStatement.textSearch("title", searchValue);
    ticketsStatement = ticketsStatement.textSearch("title", searchValue);
  }

  ticketsStatement = ticketsStatement
    .order("status", { ascending: true })
    .order("created_at", { ascending: false })
    .range(startingPoint, startingPoint + 5);

  const { count } = await countStatement;
  const { data: tickets, error } = await ticketsStatement;

  const moreRows = count - page * numberOfTicketsOnPage > 0;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th></th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>
                {" "}
                <Link href={urlPath(`/tickets/details/${ticket.id}`, tenant)}>
                  {" "}
                  {ticket.title}{" "}
                </Link>
              </td>
              <td>{TICKET_STATUS[ticket.status]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: "flex" }}>
        {page > 1 && (
          <Link role="button" href={{ query: { page: page - 1 } }}>
            Previous page
          </Link>
        )}
        {moreRows && (
          <Link
            style={{ marginLeft: "auto" }}
            role="button"
            href={{ query: { page: page + 1 } }}
          >
            Next page
          </Link>
        )}
      </div>
    </>
  );
}

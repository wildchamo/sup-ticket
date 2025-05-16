import Link from "next/link";
import { urlPath } from "../../../utils/url-helpers";
import { createSupabaseServerClient } from "../../../supabase-utils/server-client";
import { TICKET_STATUS } from "../../../utils/constants";

export async function TicketList({ tenant, searchParams }) {
  let { page = 1 } = await searchParams;

  if (Number.isInteger(Number(page)) && Number(page) > 0) {
    page = Number(page);
  } else {
    page = 1;
  }

  const supabase = await createSupabaseServerClient();

  console.log(page);

  const startingPoint = (page - 1) * 6;

  const { data: tickets, error } = await supabase
    .from("tickets")
    .select("*")
    .eq("tenant", tenant)
    .range(startingPoint, startingPoint + 5);

  const { count } = await supabase
    .from("tickets")
    .select("*", { count: "exact", head: true })
    .eq("tenant", tenant);

  const moreRows = count - page * 6 > 0;
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

import { TicketList } from "./TicketList";

export default async function TicketPage({ params, searchParams }) {
  const { tenant } = await params;
  return (
    <div>
      <h1>Ticket List</h1>
      <TicketList tenant={tenant} searchParams={searchParams}></TicketList>
    </div>
  );
}

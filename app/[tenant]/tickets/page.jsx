import { Suspense } from "react";
import { TicketList } from "./TicketList";
import { TicketFilters } from "./TicketFilters";
export const dynamic = "force-dynamic";
export default async function TicketPage({ params, searchParams }) {
  const { tenant } = await params;
  return (
    <div>
      <h1>Ticket List</h1>
      <TicketFilters tenant={tenant} />
      <Suspense
        fallback={<div aria-busy="true">Loading tickets...</div>}
        key={JSON.stringify(searchParams)}
      >
        <TicketList tenant={tenant} searchParams={searchParams}></TicketList>
      </Suspense>
    </div>
  );
}

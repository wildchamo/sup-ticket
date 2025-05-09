import TicketForm from "./TicketForm";
export default async function NewTicketPage({ params }) {
  const { tenant } = await params;
  return (
    <div>
      <h3>Create a new ticket</h3>
      <TicketForm tenant={tenant}></TicketForm>
    </div>
  );
}

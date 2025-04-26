import Nav from "./Nav";
import TenantName from "./TenantName";

export default async function TicketsLayout(pageProps) {
  const { params } = await pageProps;
  const { tenant } = await params;

  console.log(tenant);
  return (
    <main className="container">
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName tenantName={tenant || ""} /> <Nav tenant={tenant} />
      </section>
      <section>{pageProps.children}</section>
    </main>
  );
}

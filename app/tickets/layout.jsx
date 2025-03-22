import Nav from "./Nav";
import TenantName from "./TenantName";

export default function TicketsLayout(pageProps) {
  return (
    <main className="container">
      <section style={{ borderBottom: "1px solid gray" }}>
        <TenantName></TenantName>
        <Nav></Nav>
      </section>
      <section>{pageProps.children}</section>
    </main>
  );
}

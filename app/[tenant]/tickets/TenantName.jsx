import { createSupabaseServerClient } from "../../../supabase-utils/server-client";

export default async function TenantName(props) {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("tenants")
    .select("name")
    .eq("id", props.tenant)
    .single();

  console.log("TenantName", data, error);

  let tenantName = data?.name || "Unknown";

  return (
    <header style={{ marginBottom: "10px" }}>
      <div
        style={{
          borderLeft: "4px solid orange",
          display: "block",
          padding: "4px 10px",
          fontSize: "1.1em",
        }}
      >
        Ticket System
        <strong style={{ marginLeft: "1ex" }}>{tenantName}</strong>
      </div>
    </header>
  );
}

import { Login } from "./Login";
import { getSupabaseAdminClient } from "../../supabase-utils/admin-client";
import { notFound } from "next/navigation";

export default async function LoginPage({ searchParams, params }) {
  const supabase = await getSupabaseAdminClient();

  const { tenant } = await params;

  const { formType } = await searchParams;

  const { data, error } = await supabase
    .from("tenants")
    .select("*")
    .eq("id", tenant)
    .single();

  const tenantName = data?.name;

  if (error) {
    notFound();
  }

  return <Login formType={formType} tenant={tenant} tenantName={tenantName} />;
}

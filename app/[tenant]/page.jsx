import { Login } from "./Login";
import { createSupabaseServerClient } from "../../supabase-utils/server-client";
import { notFound } from "next/navigation";

export default async function LoginPage({ searchParams, params }) {
  const supabase = await createSupabaseServerClient();

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

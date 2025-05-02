import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "../../../../supabase-utils/admin-client";
import { buildUrl } from "../../../../utils/url-helpers";

export async function POST(request, { params }) {
  const isNonEmptyString = (value) =>
    typeof value === "string" && value.trim().length > 0;
  const emailRegex = /^\S+@\S+$/; // simple front@back regex

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const { tenant } = await params;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !emailRegex.test(email) ||
    !isNonEmptyString(password)
  ) {
    return NextResponse.redirect(buildUrl("/error", tenant, request), 302);
  }

  const [, emailHost] = email.split("@");

  const supabaseAdmin = getSupabaseAdminClient();
  const { data, error } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("id", tenant)
    .eq("domain", emailHost)
    .single();

  const safeEmailString = encodeURIComponent(email);

  if (error) {
    return NextResponse.redirect(
      buildUrl(
        `/error?type=register_mail_mismatch&email=${safeEmailString}`,
        tenant,
        request
      ),
      302
    );
  }

  console.log("Tenant data:", data);

  return Response.json({ email, password, tenant, emailHost });
}

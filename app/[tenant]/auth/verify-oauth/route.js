import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { NextResponse } from "next/server";
import { buildUrl } from "../../../../utils/url-helpers";

export async function GET(request, { params }) {
  const url = new URL(request.url);
  const supabase = await createSupabaseServerClient();
  const { data: sessionData, error: sessionError } =
    await supabase.auth.exchangeCodeForSession(url.searchParams.get("code"));

  console.log("sessionData", sessionData);
  console.log("sessionError", sessionError);

  if (sessionError) {
    return NextResponse.redirect(
      buildUrl("/error?type=login-failed", params.tenant, request)
    );
  }
  return NextResponse.json({ session: sessionData.session });
}

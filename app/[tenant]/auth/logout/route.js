import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { NextResponse } from "next/server";
import { buildUrl } from "../../../../utils/url-helpers";
export async function GET(request, { params }) {
  const newUrl = buildUrl("/", await params.tenant, request);
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  return NextResponse.redirect(newUrl);
}

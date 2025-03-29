import { createSupabaseServerClient } from "@/supabase-utils/server-client";

import { NextResponse } from "next/server";
export async function GET(request) {
  const supabase = createSupabaseServerClient();
  supabase.auth.signOut();
  return NextResponse.redirect(new URL("/", request.url));
}

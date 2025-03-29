import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/supabase-utils/server-client";

export async function POST(request) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const userData = data?.user;
  if (error || !userData) {
    return NextResponse.redirect(new URL("/error?type=login-failed"), {
      status: 401,
    });
  }

  return NextResponse.redirect(new URL("/tickets", request.url), {
    status: 302,
  });
}

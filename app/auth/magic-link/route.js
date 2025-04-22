import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/supabase-utils/server-client";

export async function POST(request) {
  const formData = await request.formData();

  const email = formData.get("email");

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false },
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magicLink", request.url),
      {
        status: 302,
      }
    );
  }

  const thanksUrl = new URL("/magic-thanks", request.url);

  return NextResponse.redirect(thanksUrl, {
    status: 302,
  });
}

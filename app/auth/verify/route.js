import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");

  const supabase = createSupabaseServerClient();
  const { error } = await supabase.auth.verifyOtp({
    type: "magiclink",
    token_hash: hashed_token,
  });

  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=invalid_magiclink", request.url),
      {
        status: 302,
      }
    );
  } else {
    return NextResponse.redirect(new URL("/tickets", request.url));
  }
}


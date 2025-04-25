import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");
  const type = searchParams.get("type") ;

  const supabase = await createSupabaseServerClient();


  console.log(new URL(request.url), type, hashed_token, typeof type);

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
    if (type =="recovery") {
      return NextResponse.redirect(
        new URL("/tickets/change-password", request.url),
      );
    } else {
      return NextResponse.redirect(new URL("/tickets", request.url));
    }  }
}


import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { NextResponse } from "next/server";
import { buildUrl } from "../../../../utils/url-helpers";

export async function GET(request, { params }) {
  const { tenant } = await params;
  const { searchParams } = new URL(request.url);
  const hashed_token = searchParams.get("hashed_token");
  const type = searchParams.get("type");

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.verifyOtp({
    type: type === "signup" ? "signup" : "magiclink",
    token_hash: hashed_token,
  });

  if (error) {
    return NextResponse.redirect(
      buildUrl("/error?type=invalid_magiclink", tenant, request),
      {
        status: 302,
      }
    );
  } else {
    if (type == "recovery") {
      return NextResponse.redirect(
        buildUrl("/tickets/change-password", tenant, request)
      );
    } else {
      return NextResponse.redirect(buildUrl("/tickets", tenant, request));
    }
  }
}

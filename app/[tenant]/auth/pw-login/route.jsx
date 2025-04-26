import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/supabase-utils/server-client";
import { buildUrl } from "../../../../utils/url-helpers";

export async function POST(request, { params }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const supabase = await createSupabaseServerClient();

  console.log(supabase);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  const userData = data?.user;
  if (error || !userData) {
    return NextResponse.redirect(
      buildUrl("/error?type=login-failed", await params.tenant, request.url),
      {
        status: 302,
      }
    );
  }

  return NextResponse.redirect(
    buildUrl("/tickets", await params.tenant, request.url),
    {
      status: 302,
    }
  );
}

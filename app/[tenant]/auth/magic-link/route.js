import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/supabase-utils/admin-client";

import nodemailer from "nodemailer";
import { buildUrl } from "../../../../utils/url-helpers";

export async function POST(request, { params }) {
  const formData = await request.formData();

  const email = formData.get("email");

  const { tenant } = await params;

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const supabaseAdmin = await getSupabaseAdminClient();

  const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
    {
      email,
      type: "magiclink",
    }
  );

  const user = linkData.user;

  if (error || !user.app_metadata?.tenants.includes(tenant)) {
    return NextResponse.redirect(
      buildUrl("/error?type=magicLink", tenant, request.url),
      {
        status: 302,
      }
    );
  }

  const { hashed_token } = linkData.properties;

  const mainUrl = `/auth/verify?hashed_token=${hashed_token}${
    type ? "&type=" + type : ""
  }`;
  const constructedLink = buildUrl(mainUrl, tenant, request);

  const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 54325,
  });

  const subject = type === "recovery" ? "Password Recovery" : "Magic Link";

  const emailBody =
    type === "recovery"
      ? `
    <h1>Hi there, this is a password recovery email!</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to recover.</p>
    `
      : `
    <h1>Hi there, this is a custom magic link email!</h1>
    <p>Click <a href="${constructedLink.toString()}">here</a> to log 
      in.</p>
    `;

  await transporter.sendMail({
    from: "Your Company <your@mail.whatever>",
    to: email,
    subject: subject,
    html: emailBody,
  });

  const thanksUrl = buildUrl("/magic-thanks", tenant, request);

  return NextResponse.redirect(thanksUrl, {
    status: 302,
  });
}

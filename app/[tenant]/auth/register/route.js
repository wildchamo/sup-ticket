export async function POST(request, { params }) {
  const isNonEmptyString = (value) =>
    typeof value === "string" && value.trim().length > 0;
  const emailRegex = /^\S+@\S+$/; // simple front@back regex

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const tenant = params.tenant;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !emailRegex.test(email) ||
    !isNonEmptyString(password)
  ) {
    return NextResponse.redirect(buildUrl("/error", tenant, request), 302);
  }

  const [, emailHost] = email.split("@");

  return Response.json({ email, password, tenant, emailHost });
}

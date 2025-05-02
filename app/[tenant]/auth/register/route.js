export async function POST(request, { params }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const tenant = params.tenant;
  return Response.json({ email, password, tenant });
}

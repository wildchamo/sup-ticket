import { Login } from "./Login";

export default async function LoginPage({ searchParams, params }) {
  const { formType } = await searchParams;

  const { tenant } = await params;

  return <Login formType={formType} tenant={tenant} />;
}

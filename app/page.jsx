import { Login } from "./Login";

export default async function LoginPage({ searchParams }) {
  const { formType } = await searchParams;

  return <Login formType={formType} />;
}

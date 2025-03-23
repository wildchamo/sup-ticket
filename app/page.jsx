import { Login } from "./Login";

export default async function LoginPage({ searchParams }) {
  const { magicLink } = await searchParams;

  const wantsMagicLink = magicLink === "yes";
  return <Login isPasswordLogin={!wantsMagicLink} />;
}

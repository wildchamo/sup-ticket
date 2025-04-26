import Link from "next/link";
import { urlPath } from "../../../utils/url-helpers";
export default async function ErrorPage({ searchParams, params }) {
  const knownErrors = ["login-failed", "magicLink", "invalid_magiclink"];
  const { type } = await searchParams;
  const { tenant } = await params;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Ooops!</h1>
      {type === "login-failed" && (
        <strong>Login was not successfull, sorry.</strong>
      )}

      {type === "magicLink" && (
        <strong>
          Could not send a magic link. Maybe you had a typo in your E-Mail?
        </strong>
      )}

      {type === "invalid_magiclink" && (
        <strong>
          The magic link was invalid. Maybe it expired? Please request a new
          one.
        </strong>
      )}
      {!knownErrors.includes(type) && (
        <strong>
          Something went wrong. Please try again or contact support.
        </strong>
      )}
      <br />
      <br />
      <Link role="button" href={urlPath("/", tenant)}>
        Go back.
      </Link>
    </div>
  );
}

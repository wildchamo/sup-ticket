import Link from "next/link";
import { urlPath } from "../../../utils/url-helpers";
export default async function ErrorPage({ searchParams, params }) {
  const knownErrors = [
    "login-failed",
    "magicLink",
    "invalid_magiclink",
    "register_mail_mismatch",
    "register_unknown",
    "register_mail_exists",
  ];
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
      {type === "register_mail_mismatch" && (
        <strong>
          You are not legitimated to register an account
          <span>
            {searchParams.email ? " with " + searchParams.email : ""}.
          </span>
        </strong>
      )}

      {type === "register_mail_exists" && (
        <strong>
          There is already an account registered with &nbsp;
          <u>{searchParams.email}</u>.
        </strong>
      )}
      {type === "register_unknown" && (
        <strong>
          Sorry but an unknown error occurred when trying to create an account.
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

import Link from "next/link";
import { urlPath } from "../../../utils/url-helpers";
export default async function MagicLinkSuccessPage({ params }) {
  const { tenant } = await params;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Magic on its way!</h1>
      Thanks! You should get a link to login in a few seconds.
      <br />
      <br />
      <Link role="button" href={(urlPath("/"), tenant)}>
        Go back.
      </Link>
    </div>
  );
}

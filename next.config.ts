import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  redirects: async () => [
    {
      source: "/:tenant/logout",
      destination: "/:tenant/auth/logout",
      permanent: true
    }
  ]
};

export default nextConfig;

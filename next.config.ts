import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  redirects: async () => [
    {
      source: "/logout",
      destination: "/auth/logout",
      permanent: true
    }
  ]
};

export default nextConfig;

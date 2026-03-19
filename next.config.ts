import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "k72.ca",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;

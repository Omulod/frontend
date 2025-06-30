import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
      },
      {
        hostname: "backend.omulod.com",
      },
    ],
  },
};

export default nextConfig;

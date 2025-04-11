import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demos.themeselection.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;

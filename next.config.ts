import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/lumina-audio",
  images: { unoptimized: true },
};

export default nextConfig;

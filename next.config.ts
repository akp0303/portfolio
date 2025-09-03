import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },

  // Fordi GitHub Pages hoster under /portfolio (dit reponavn):
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
};

export default nextConfig;

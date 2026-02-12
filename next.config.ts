import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
  images: { unoptimized: true },
};

export default nextConfig;

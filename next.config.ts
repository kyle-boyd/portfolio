import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  output: "export",
  // Empty when using custom domain (e.g. kyleboyd.design); /portfolio for username.github.io/portfolio/
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === "production" ? "/portfolio" : ""),
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH != null ? (process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/` : "") : (process.env.NODE_ENV === "production" ? "/portfolio/" : ""),
  images: { unoptimized: true },
};

export default nextConfig;

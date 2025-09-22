import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  webpack: (config: any) => {
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
};

export default nextConfig;

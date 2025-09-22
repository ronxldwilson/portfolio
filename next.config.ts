import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true, // Enable new App Router (required for Next 13+)
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false, path: false };
    return config;
  },
};

export default nextConfig;

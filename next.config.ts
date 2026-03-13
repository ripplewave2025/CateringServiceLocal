import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default nextConfig;

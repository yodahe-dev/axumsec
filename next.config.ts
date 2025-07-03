import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ skip ESLint during `next build`
  },
};

export default nextConfig;

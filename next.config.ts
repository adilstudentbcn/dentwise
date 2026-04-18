import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Database Fix: Required for Prisma 7 + Next 15 */
  serverExternalPackages: ["@prisma/client", "pg"],

  /* 2. Image Fix: Allows your doctor avatars to load */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
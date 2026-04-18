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
      {
        protocol: "https",
        hostname: "ui-avatars.com", // Add this line if you used UI Avatars
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com", // Add this line if you used DiceBear
      }
    ],
    unoptimized: true,
  },
};

export default nextConfig;
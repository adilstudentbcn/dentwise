import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This tells Turbopack not to try and "bundle" these for the browser
  serverExternalPackages: ["@prisma/client", "pg"],
};

export default nextConfig;
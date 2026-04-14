import "dotenv/config";
import { defineConfig } from "@prisma/config"; // Ensure the '@' is there

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // This tells Prisma to look at your .env file for the variable
    url: process.env.DATABASE_URL, 
  },
});
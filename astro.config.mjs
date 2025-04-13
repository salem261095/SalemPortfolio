import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import path from 'path';
import react from '@astrojs/react';

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});

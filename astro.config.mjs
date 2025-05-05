import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import path from 'path';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://www.salem-des.com/",
  output: "static",
  adapter: vercel(),
  integrations: [react(), sitemap()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
});

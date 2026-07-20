// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import react from "@astrojs/react";


import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  base: process.env.PUBLIC_BASE ?? '/',

  server: {
      port: 3000
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()],
  adapter: cloudflare(),
});
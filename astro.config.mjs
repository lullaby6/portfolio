// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


import react from "@astrojs/react";


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
});
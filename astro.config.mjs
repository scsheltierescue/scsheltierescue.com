// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://scsheltierescue.com',
  integrations: [icon(), sitemap()],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://scsheltierescue.com',
  integrations: [react(), tailwind(), icon(), sitemap()],
  output: 'hybrid',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  },
  vite: {
    build: {
      sourcemap: true,
    },
    define: {
      'process.env.PETFINDER_API_CLIENT_ID': JSON.stringify(process.env.PETFINDER_API_CLIENT_ID),
      'process.env.PETFINDER_API_SECRET': JSON.stringify(process.env.PETFINDER_API_SECRET)
    }
  },
});
// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'hybrid',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  },
  vite: {
    define: {
      'process.env.PETFINDER_API_CLIENT_ID': JSON.stringify(process.env.PETFINDER_API_CLIENT_ID),
      'process.env.PETFINDER_API_SECRET': JSON.stringify(process.env.PETFINDER_API_SECRET)
    }
  },
});
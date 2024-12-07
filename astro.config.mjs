// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'static',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService()
  },
  vite: {
    build: {
      sourcemap: false, // NOTE: Temporarily Disabling (Issues with Astro 5.0/Vite 6.0)
    },
    define: {
      'process.env.PETFINDER_API_CLIENT_ID': JSON.stringify(process.env.PETFINDER_API_CLIENT_ID),
      'process.env.PETFINDER_API_SECRET': JSON.stringify(process.env.PETFINDER_API_SECRET)
    }
  },
});
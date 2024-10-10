// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: 'hybrid',
  adapter: cloudflare(),
  vite: {
    define: {
      'process.env.PETFINDER_API_SECRET': JSON.stringify(process.env.PETFINDER_API_SECRET)
    }
  },
});
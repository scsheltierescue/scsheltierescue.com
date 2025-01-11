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
  output: 'static',
  adapter: cloudflare(),
  image: {
    service: passthroughImageService(),
  },
  vite: {
    build: {
      sourcemap: true,
    },
    resolve: {
      // Temporary Workaround
      // SEE: https://github.com/withastro/adapters/pull/436#issuecomment-2525190557
      //
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      //
      // @ts-expect-error this is a workaround, ignoring any ts errors
      alias: import.meta.env.PROD && {
        'react-dom/server': 'react-dom/server.edge',
      },
    },
    define: {
      'process.env.PETFINDER_API_CLIENT_ID': JSON.stringify(process.env.PETFINDER_API_CLIENT_ID),
      'process.env.PETFINDER_API_SECRET': JSON.stringify(process.env.PETFINDER_API_SECRET),
    },
  },
});

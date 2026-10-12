'use strict';

const userAgent = process.env.npm_config_user_agent ?? '';

if (!userAgent.startsWith('pnpm/')) {
  console.error('This project requires pnpm. Run `corepack enable`, then `pnpm install`.');
  process.exit(1);
}

# Contributing

Thank you for contributing to the South Carolina Sheltie Rescue website.

---

# Development Setup

Clone the repository:

```
git clone git@github.com:scsheltierescue/scsheltierescue.com.git
cd scsheltierescue.com
```

Install dependencies:

```
pnpm install
```

Start the development server:

```
pnpm dev
```

Open:

```
http://localhost:4321
```

---

# Linting

Run ESLint:

```
pnpm lint
```

---

# Production Build

To verify the production build:

```
pnpm build
```

Preview the build:

```
pnpm preview
```

---

# Updating Astro

To upgrade Astro and its official integrations:

```
pnpm dlx @astrojs/upgrade
```

This command:

- updates `astro`
- updates official integrations
- warns about breaking changes

After upgrading always run:

```
pnpm install
pnpm build
pnpm lint
```

to verify everything works.

---

# Updating Dependencies

Most dependency updates are handled automatically via **Renovate**.

If updating manually:

```
pnpm update
```

Then verify:

```
pnpm build
pnpm lint
```

---

# Pull Requests

1. Create a branch
2. Make your changes
3. Verify the build locally
4. Open a PR

Example commit messages:

```
feat: add adoptable dogs page
fix: correct layout issue on mobile
chore: update dependencies
```

---

# Deployment

Deployment is automatic via **Cloudflare Pages**.

Every push to `main` triggers:

1. dependency install
2. Astro build
3. deployment
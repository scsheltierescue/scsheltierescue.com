<h1 align="center">
  <img src="https://raw.githubusercontent.com/scsheltierescue/scsheltierescue.com/main/public/favicon-512x512.png" alt="SCSR Logo" width="250" height="250">
  <br>
  <a href="https://scsheltierescue.com/">South Carolina Sheltie Rescue</a>
</h1>

South Carolina Sheltie Rescue is a volunteer-run non-profit dedicated to rescuing and rehoming Shetland Sheepdogs across South Carolina.

## 🧰 Tech Stack

- **Astro**
- **React**
- **TailwindCSS**
- **Cloudflare Pages**

## 🚀 Project Structure

The main project directories and configuration files are:

```text
/
├── public/
│   ├── _headers
│   └── static site assets
├── src/
│   ├── components/
│   ├── icons/
│   ├── images/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── eslint.config.js
├── package.json
├── tsconfig.json
└── wrangler.toml
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Shared Astro and React components live in `src/components/`.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                                  |
| `pnpm dev`                 | Starts the local development server at `localhost:4321` |
| `pnpm check`               | Runs linting, TypeScript checks, and a production build |
| `pnpm lint`                | Runs ESLint                                             |
| `pnpm type-check`          | Runs TypeScript without emitting files                  |
| `pnpm build`               | Checks and builds the production site into `./dist/`    |
| `pnpm preview`             | Previews the production build locally                   |
| `pnpm audit`               | Checks dependencies for known vulnerabilities           |
| `pnpm astro -- --help`     | Displays Astro CLI help                                  |

## 🚢 Deployment

Automatic deployment using [Cloudflare](https://www.cloudflare.com/) Pages

Every push to `main` builds and deploys the site automatically.

## 🤝 Contributing

See **CONTRIBUTING.md** for development setup and maintenance instructions.

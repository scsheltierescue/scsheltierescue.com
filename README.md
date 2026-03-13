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

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## 🚢 Deployment

Automatic deployment using [Cloudflare](https://www.cloudflare.com/) Pages

Every push to `main` builds and deploys the site automatically.

## 🤝 Contributing

See **CONTRIBUTING.md** for development setup and maintenance instructions.
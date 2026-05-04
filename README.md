# tars-site

Marketing site for [TARS](https://github.com/devlikebear/tars) — a self-hosted AI agent runtime.

Deployed at **https://tars.marvin-42.com** via Cloudflare Pages.

## Stack

- SvelteKit 2 + Svelte 5 (runes)
- TypeScript
- Tailwind CSS v4
- `@sveltejs/adapter-static` (fully prerendered)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output → ./build (static)
npm run preview  # preview the built output
npm run check    # svelte-check + tsc
```

## Deploy

Cloudflare Pages auto-deploys from `main`:

- Build command: `npm run build`
- Output directory: `build`
- Node version: 20

## Design tokens

Tokens mirror the TARS console (`frontend/console/src/app.css` in the main repo) — warm amber `#e09145`, dark surfaces, Outfit/DM Sans/JetBrains Mono. Keep them in sync when the console design evolves.

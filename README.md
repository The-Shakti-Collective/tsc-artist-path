# The Artist Path

Landing site for the TSC Artist Path accelerator — hosted at [theartistpath.in](https://theartistpath.in).

Part of the TSC Platform monorepo (`apps/artist-path`). Deployed from the standalone repo [The-Shakti-Collective/tsc-artist-path](https://github.com/The-Shakti-Collective/tsc-artist-path).

## Local dev

From monorepo root:

```bash
pnpm install
pnpm --filter @tsc/artist-path dev
```

Open [http://localhost:3010](http://localhost:3010).

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (production: `https://theartistpath.in`) |
| `NEXT_PUBLIC_APPLY_URL` | External application form URL for Apply Now buttons |
| `NEXT_PUBLIC_TSC_WEBSITE_URL` | Link back to TSC main site |

## Vercel deploy

1. Import `The-Shakti-Collective/tsc-artist-path` in Vercel.
2. Framework preset: Next.js (root is repo root — no monorepo root directory needed).
3. Set env vars above for Production.
4. Add custom domain `theartistpath.in` (+ `www` if desired).

## TSC Website link

The main website (`apps/website`) links Artist Path to `https://theartistpath.in` via `NEXT_PUBLIC_ARTIST_PATH_URL`.

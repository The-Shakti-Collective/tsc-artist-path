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

## Application submissions

Built-in form at `/apply` posts to Platform API `POST /api/public/artist-path/applications`. Responses are stored in PostgreSQL (`ArtistPathApplication`) and visible in CoreKnot Admin → Artist Path when `VITE_TSC_API_URL` points at the Platform API.

**Vercel env (artist-path site):**

| Variable | Purpose |
|----------|---------|
| `TSC_API_URL` | Platform API base, e.g. `https://api.theshakticollective.in/api` |
| `ARTIST_PATH_WEBHOOK_SECRET` | Must match Platform API `ARTIST_PATH_WEBHOOK_SECRET` |

**Platform API** also needs `TSC_DEFAULT_ORG_ID` and `ARTIST_PATH_WEBHOOK_SECRET`. Run migration `20250615000000_artist_path_applications` on Neon before prod submissions.

## Vercel deploy

1. Import `The-Shakti-Collective/tsc-artist-path` in Vercel.
2. Framework preset: Next.js (root is repo root — no monorepo root directory needed).
3. Set env vars above for Production.
4. Add custom domain `theartistpath.in` (+ `www` if desired).

## TSC Website link

The main website (`apps/website`) links Artist Path to `https://theartistpath.in` via `NEXT_PUBLIC_ARTIST_PATH_URL`.

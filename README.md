# The Artist Path

Landing site for the TSC Artist Path accelerator — hosted at [theartistpath.in](https://theartistpath.in).

Part of the TSC Platform monorepo (`website/tsc-artist-path`). Deployed from the standalone repo [The-Shakti-Collective/tsc-artist-path](https://github.com/The-Shakti-Collective/tsc-artist-path).

## Local dev

Create **`.env.local`** (gitignored). Copy env blocks from **`website/shared/SEO-ANALYTICS-ENTITY-GUIDE.md`** in the monorepo workspace (local-only — not on GitHub).

```bash
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010) (or your configured port).

## Application submissions

Apply CTAs link to the TSC Website wizard at `https://theshakticollective.in/artist-path`. That form posts to Platform API `POST /api/public/artist-path/applications`. Responses land in PostgreSQL (`ArtistPathApplication`) and show in CoreKnot Admin → Artist Path when `VITE_TSC_API_URL` points at the Platform API.

`/apply` on this site redirects to the main-site form.

**TSC Website (Vercel) env** for Artist Path handoff: `TSC_API_URL`, `ARTIST_PATH_WEBHOOK_SECRET`, `NEXT_PUBLIC_ARTIST_PATH_URL` — see local shared guide and [TSC-Website docs/INTEGRATION.md](../TSC-Website/docs/INTEGRATION.md).

**Platform API** also needs `TSC_DEFAULT_ORG_ID` and `ARTIST_PATH_WEBHOOK_SECRET`. Run migration `20250615000000_artist_path_applications` on Neon before prod submissions.

## Vercel deploy

1. Import `The-Shakti-Collective/tsc-artist-path` in Vercel.
2. Framework preset: Next.js (repo root — not monorepo).
3. Uses **npm** (`package-lock.json` + `vercel.json` installCommand). Do not use `pnpm install` on this standalone repo.
4. Set env vars in Vercel (copy from local shared guide).
5. Add custom domain `theartistpath.in` (+ `www` if desired).

## TSC Website link

The main website links Artist Path to `https://theartistpath.in` via `NEXT_PUBLIC_ARTIST_PATH_URL`.

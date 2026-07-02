# Analytics & privacy — TSC public websites

Shared setup for **[theshakticollective.in](https://theshakticollective.in)** (`TSC-Website`) and **[theartistpath.in](https://theartistpath.in)** (`tsc-artist-path`).

| Concern | TSC Website | Artist Path |
| --- | --- | --- |
| Google Analytics 4 | Yes (`G-ELS1RTKC4G`) | No (main site only) |
| Microsoft Clarity | Yes | Yes |
| On-site privacy policy | `/privacy` | `/privacy` |
| Footer disclosure | Short summary → Privacy Policy | Same pattern |

Policies are **TSC marketing-site** legal copy — not CoreKnot / `tsccoreknot.com/privacy`.

---

## Environment variables

Copy the committed `.env.example` in each repo to `.env.local` (gitignored).

### TSC Website (`.env.example`)

```bash
NEXT_PUBLIC_SITE_URL=https://theshakticollective.in
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ELS1RTKC4G
NEXT_PUBLIC_CLARITY_PROJECT_ID=<from-clarity-dashboard>
NEXT_PUBLIC_PRIVACY_POLICY_URL=https://theshakticollective.in/privacy
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=<browser-key-restricted-to-domain>
NEXT_PUBLIC_ARTIST_PATH_URL=https://theartistpath.in
```

### Artist Path (`.env.example`)

```bash
NEXT_PUBLIC_SITE_URL=https://theartistpath.in
NEXT_PUBLIC_CLARITY_PROJECT_ID=<from-clarity-dashboard>
NEXT_PUBLIC_PRIVACY_POLICY_URL=https://theartistpath.in/privacy
NEXT_PUBLIC_TSC_WEBSITE_URL=https://theshakticollective.in
NEXT_PUBLIC_APPLY_URL=https://theshakticollective.in/artist-path
```

### Vercel (production)

Set the same `NEXT_PUBLIC_*` keys under **Project → Settings → Environment Variables** for Production (and Preview if desired).

Sync Clarity + privacy URLs to both Vercel projects (run from TSC-Website repo):

```bash
cd website/TSC-Website
node scripts/set-clarity-env.mjs
```

That script also sets `NEXT_PUBLIC_GA_MEASUREMENT_ID` on `tsc-website`.

---

## Google Analytics 4 (TSC Website only)

Implemented in the **TSC-Website** repo only. See that repo’s `docs/ANALYTICS_AND_PRIVACY.md` for full file list and code.

Measurement ID: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ELS1RTKC4G`

---

## Microsoft Clarity (both sites)

### Files (this repo)

| File | Role |
| --- | --- |
| `src/lib/clarity.ts` | Init + page tags |
| `src/lib/clarityDisclosure.ts` | Footer + privacy-page disclosure text |
| `src/components/analytics/clarity-analytics.tsx` | App Router pathname tracking |
| `src/components/site-footer.tsx` | Footer disclosure → `/privacy` |

### `lib/clarityDisclosure.ts`

```ts
export const CLARITY_SITE_DISCLOSURE = {
  summary:
    'We use analytics, including Microsoft Clarity, to understand how visitors use our site and to improve our products and marketing.',
  privacyLinkLabel: 'Privacy Policy',
} as const;
```

---

## Privacy policy (`/privacy`)

| File | Role |
| --- | --- |
| `src/lib/privacyPolicyContent.ts` | Policy sections (Artist Path program scope) |
| `src/app/privacy/page.tsx` | Public route |
| `src/lib/config.ts` | `privacyPolicyUrl` defaults to `/privacy` |

Footer Clarity line and policy content live on **this** site — not CoreKnot.

---

## Checklist (new environment)

- [ ] Copy `.env.example` → `.env.local`
- [ ] Set `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- [ ] Set `NEXT_PUBLIC_PRIVACY_POLICY_URL=https://theartistpath.in/privacy`
- [ ] Smoke: `/privacy` 200, footer Privacy Policy link works

Canonical full doc (includes GA + Maps): **TSC-Website** `docs/ANALYTICS_AND_PRIVACY.md` in the monorepo or [TSC-Website](https://github.com/RaghavSobti37/TSC-Website) on GitHub.

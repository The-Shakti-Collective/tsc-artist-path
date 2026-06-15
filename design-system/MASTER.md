# The Artist Path — Design System (MASTER)

Source: UI UX Pro Max skill (Storytelling + Soft UI + Bento) + TSC Brand Book.

## Pattern
Hero-centric landing with feature-rich sections, social-proof structure, repeated CTAs.

## Style
Soft UI evolution — rounded 2xl surfaces, subtle elevation, 200ms transitions, organic spacing.

## Colors (TSC Brand — do not replace)

| Role | Name | Hex |
|------|------|-----|
| **Primary (backgrounds)** | Red oxide | `#88281c` |
| **Secondary (buttons, chrome)** | Peacock | `#08525f` |
| Deep teal | body copy on cream | `#083d3a` |
| Sea foam | button hover, icons | `#126d5e` |
| Cream | light buttons, text on dark | `#ffecd1` |
| Pumpkin | step badges, accents | `#b74b02` |
| Mustard | warm accent | `#ad6517` |
| Burgundy | background gradient mid | `#6d2034` |
| Espresso | background gradient deep | `#592314` |
| Cream wash BG | — | `#fcf8f2` |
| Peacock soft | tinted surfaces | `#e8f3f5` |
| Red oxide soft | tinted surfaces | `#f9ebe9` |

**Brand assets:** `public/brand/artist-path-mark.png` (icon), `public/brand/artist-path-lockup.png` (mark + wordmark). Use `ArtistPathLogo` component.

**Usage:** Red oxide (+ burgundy/espresso gradient) for hero and dark bands. Peacock for Apply CTAs; cream for alt buttons on dark. Pumpkin, mustard, and sea foam for badges, icons, and accents on cream sections. Deep teal for body copy — do not collapse the palette to only red + peacock.

## Typography
- Display: Space Grotesk (headings)
- Body: DM Sans (long-form)

## Effects
- Cards: `shadow-soft` (peacock-tinted)
- Hover: color/border/shadow only — no layout shift
- Motion: respect `prefers-reduced-motion`

## Anti-patterns (avoid)
- Low-contrast cream-on-cream text
- Emoji as icons — use Lucide
- Missing `cursor-pointer` on interactive elements
- Sticky nav flush to viewport edge — use floating shell
- Overusing red oxide on small UI — reserve for large background bands

## Checklist
- [ ] Text contrast ≥ 4.5:1 on cream backgrounds (`text-brand-teal-deep` / slate-600+)
- [ ] All clickables: pointer + hover feedback
- [ ] Responsive: 375, 768, 1024, 1440
- [ ] Content strings from `content.ts` / `siteConfig` — layout only changes

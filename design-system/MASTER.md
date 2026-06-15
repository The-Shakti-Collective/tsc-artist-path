# The Artist Path — Design System (MASTER)

Source: UI UX Pro Max skill (Storytelling + Soft UI + Bento) + TSC Brand Book.

## Pattern
Hero-centric landing with feature-rich sections, social-proof structure, repeated CTAs.

## Style
Soft UI evolution — rounded 2xl surfaces, subtle elevation, 200ms transitions, organic spacing.

## Colors (TSC Brand — do not replace)
| Role | Hex |
|------|-----|
| Deep teal | `#083d3a` |
| Sea foam | `#126d5e` |
| Teal mid | `#08525f` |
| Cream | `#ffecd1` |
| Pumpkin CTA | `#b74b02` |
| Cream wash BG | `#fcf8f2` |

## Typography
- Display: Space Grotesk (headings)
- Body: DM Sans (long-form)

## Effects
- Cards: `shadow-[0_4px_24px_-8px_rgba(8,61,58,0.12)]`
- Hover: color/border/shadow only — no layout shift
- Motion: respect `prefers-reduced-motion`

## Anti-patterns (avoid)
- Low-contrast cream-on-cream text
- Emoji as icons — use Lucide
- Missing `cursor-pointer` on interactive elements
- Sticky nav flush to viewport edge — use floating shell

## Checklist
- [ ] Text contrast ≥ 4.5:1 on cream backgrounds (`text-brand-teal-deep` / slate-600+)
- [ ] All clickables: pointer + hover feedback
- [ ] Responsive: 375, 768, 1024, 1440
- [ ] Content strings from `content.ts` / `siteConfig` — layout only changes

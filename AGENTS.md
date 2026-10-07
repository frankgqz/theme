# AGENTS.md — theme (gqz family design system)

Source of truth for the shared theme. Repo: github.com/frankgqz/theme · dev
copy: C:\Code\craft\theme. Consumers: **pickleball** (curl-sync via postinstall
— Turbopack can't import CSS from git-hosted npm packages) and **gqz** (npm
package `@gqz/theme`, lockfile-pinned → update ritual `npm update @gqz/theme`
+ push; small 'dark'/'sky' → 'night'/'bubble' renames pending there).

## Architecture (tiered palette)
- ! Tier 1 = 7 primitives per theme in `theme.ts` (`bg, surface, text, muted,
  accent, accent2, sparkle`) — the ONLY typed colors. `make()` derives every
  semantic field (buttons = accent→accent2 gradient, glow from sparkle,
  shadows from bg).
- ! Tier 2 in `theme.css`: `--c1..--c7` primitives → `--theme-*` semantics
  derived via `color-mix`, incl. `--theme-accent-soft`/`--theme-accent-strong`
  (the -300 / -700 shade family).
- Themes: wood 🍂 autumn · night 🌙 metal (JetBrains Mono, sharp 6–8px radius)
  · bubble 🫧 pastel/rainbow (round 20–24px) · matcha 🍵 Fraunces serif
  (14–18px). Radius is per-theme mood.
- Cookie `gqz-theme` (name stable); values renamed dark→night / sky→bubble
  with legacy mapping in `storage.ts` — keep that pattern when renaming again.
- Fonts load via Google Fonts `@import` at the top of theme.css (JetBrains
  Mono, Fraunces).

## Conventions
- ! Synced files may import only relative siblings or react — a `@gqz/theme`
  import inside them re-enters the broken Turbopack CSS resolution.
- ! `theme.css` stays at the repo ROOT (package exports + the raw sync URL
  depend on it).
- Consumers pick changes up via their rituals (pickleball: any `npm install`;
  gqz: `npm update @gqz/theme` + push). Verify with `npm run build` there.
- -> gqz still uses old theme names — do the rename at its next update ritual.

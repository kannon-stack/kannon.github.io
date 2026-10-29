# Copilot instructions for kannon.github.io

This repository is Dylan Borgen's AGKBUILDS portfolio: a one-page React site built with Vite and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. It is served at https://www.agkbuilds.com/.

## Layout

- `client/index.html`: page title, meta tags and font loading (Inter and JetBrains Mono).
- `client/src/pages/Home.tsx`: the whole page. Projects, the experience timeline and recognition live in the typed arrays at the top of the file. Change content there rather than in the markup.
- `client/src/index.css`: every color, font and spacing token sits on `:root`, and all component styles live here. Plain CSS, no Tailwind.
- `client/src/App.tsx`: routes (`/` and a NotFound fallback) using `wouter`.
- `DESIGN.md`: the visual system. Follow it for any new section or page.

## Rules

- Use the CSS tokens (`var(--signal)`, `var(--surface)` and so on). Never hard-code a hex color in a component.
- Signal green (`--signal`) is only for active states, the primary call to action, status dots and key proof points.
- Keep the pointer effects pointer-only, and turn them off under `prefers-reduced-motion` or `pointer: coarse`, as `Home.tsx` already does.
- Keep it accessible: decorative layers get `aria-hidden="true"`, interactive elements keep a visible focus ring, and body text keeps at least 4.5:1 contrast.
- Keep the site static. There's no server, no database and no form backend; the contact section uses `mailto:` and `tel:` links.
- Use the Vite base (`import.meta.env.BASE_URL`) for asset paths, never a hard-coded `/kannon.github.io/`. The deploy workflow sets the base for whichever address Pages uses.
- Don't commit `dist/` or `node_modules/`.
- Résumé facts (dates, employers, places) must match `DylanBorgenResume2026`. Don't invent clients, awards or numbers.

## Checking your work

- Run `npm run build`. It type-checks with `tsc` and then builds; both must pass.
- To preview, run `npm run preview` and open http://localhost:4173/. Take Playwright screenshots of visual changes at desktop (1440px) and phone (375px) widths, include them in the pull request, and check there's no horizontal scrolling on phones.

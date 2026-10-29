# AGKBUILDS · Dylan Borgen

Personal portfolio for Dylan Borgen, owner of AGKBuilds in San Antonio, TX. Live at https://www.agkbuilds.com/.

React 19, Vite and TypeScript, deployed to GitHub Pages by GitHub Actions. The design system is in [DESIGN.md](DESIGN.md).

## Develop

```bash
npm install
npm run dev       # local dev server
npm run build     # type check + production build into dist/
npm run preview   # serve the production build at http://localhost:4173/
```

Page content lives in the arrays at the top of `client/src/pages/Home.tsx`; theme tokens live in `client/src/index.css`.

Pushing to `main` deploys the site.

# DESIGN.md: AGKBUILDS personal website (Manus build)

## Source
- URL: https://www.agkbuilds.com/ (this repository)
- Capture date: 2026-10-29
- Evidence: `Home.tsx` (page markup and content), `AGKBUILDS personal website plan.md` (design direction), `AGKBUILDS website outcomes.md`, and `DylanBorgenResume2026.docx`, all from the Manus download.
- The original Manus `index.css` was never exported. These tokens were first inferred from the plan, and the rebuild then adopted them. **`client/src/index.css` is now the source of truth.** If a value here disagrees with it, the CSS wins; update this file to match.

## Reference Screenshot
None committed yet. Once the site is live, capture one with:
`firecrawl scrape "https://www.agkbuilds.com/" --full-page-screenshot -o ".firecrawl/agkbuilds-screenshot.png"`
Then embed the image here, and treat it as the reference for layout and density.

## Design Summary
Neo-terminal editorial: a near-black "system log" canvas, one acid-green signal color, bone-white editorial type and monospace metadata labels. The page is a one-page dossier with a fixed utility rail, asymmetric bento modules and wide timeline bands, not a centered marketing stack. Motion is quiet and structural. Recreate the restraint: green is rare and means "active" or "important".

## Design Tokens

### Colors
| Role | Value | Status |
|---|---|---|
| `--signal` (brand, active states, key CTAs, proof points) | `#B8F23A` | observed (plan) |
| `--canvas` (page background) | `#0A0B09` | in index.css |
| `--surface` (cards, panels) | `#121410` | in index.css |
| `--surface-raised` (hover, hero card) | `#191C16` | in index.css |
| `--text` (bone white) | `#ECE8DD` | in index.css |
| `--text-muted` | `#9A9C90` | in index.css |
| `--mint` (secondary system state) | `#8FE3B8` | in index.css |
| `--olive` (tertiary / dim state) | `#6E7A3A` | in index.css |
| `--line` (borders, grid lines) | `rgba(236,232,221,0.10)` | in index.css |

Project accent classes from the code (`accent-lime`, `-mint`, `-amber`, `-purple`, `-blue`, `-pink`), as set in index.css: lime `#B8F23A`, mint `#8FE3B8`, amber `#F2B33A`, purple `#B59CF5`, blue `#7DB7F5`, pink `#F59CC8`. Use an accent only on its card's number, visual mark and tag. Never use one for body text.

### Typography
- Two families: **Inter** for body copy, and **JetBrains Mono** for labels, metrics, metadata and the wordmark, both loaded from Google Fonts in `client/index.html`.
- H1: very large (about `clamp(3.5rem, 9vw, 8.5rem)`), tight tracking (about `-0.04em`), line-height about 0.92, three short lines. One line is outline-only (`.h1-outline`, transparent fill with a 1px bone stroke), and the last line is in signal green with a blinking `_`.
- H2: about `clamp(2.25rem, 5vw, 4.5rem)`, with a muted second clause in a `<span>`.
- H3/H4 (cards): about 1.5–2rem, and a `<br>` splits each heading into a statement plus a muted or italic tail.
- Labels and kickers: mono, about 0.72rem, uppercase, wide tracking (about `0.12em`), and `//` or `[index]` prefixes.
- Body: about 1rem/1.6, max 60ch, in `--text-muted` on dark surfaces.

### Spacing And Layout
- Section rhythm: `.section-pad`, `clamp(5rem, 10vw, 9rem)` vertical.
- Container: wide (about 1400px) with a 24–48px gutter. Content stays left-aligned against a strict grid.
- Bento: a CSS grid with 12 columns on desktop. The main card spans about 7 columns and 2 rows, and the signal, location, stack and note cards fill the rest. It collapses to one column under about 760px.
- Projects: a 3-column grid on desktop, 2 on tablet and 1 on mobile.
- Radius: small and technical: 4px (tags), 6–8px (buttons, tiles), 12px (cards), 16px (contact panel). Borders are 1px `--line`, and hover lifts a card a few px with a slightly brighter border instead of a heavy shadow.
- Background texture: a faint grid overlay (`.hero-grid`) and drifting glyph columns (`.matrix-glyphs`).

## Components
- **Header / utility rail**: a fixed bar containing:
  - the wordmark: a lime `_` cursor block, then `AGK` regular, `BUILDS` bold, and a `TX // 01` mono stamp
  - nav links with mono indices (`Work 01`, `About 02`, and so on)
  - a mobile menu toggle with `aria-expanded`
  - a status pill with a pulsing green dot ("IT / web / repair / field work")
- **Hero**:
  - Background layers: the glyph columns, a cursor-tracking radial glow (`--pointer-x/y`), and the grid overlay.
  - Copy: the eyebrow `>_ owner / IT consultant / san antonio`, the three-line H1, the intro paragraph, a primary button and an arrow text link.
  - On the right, a tilting card (`--hero-rotate-x/y`, 0.035deg per % of pointer travel, so at most about 1.75deg) with `SYSTEM ONLINE` and `LIVE` labels and a `v.01` footer.
  - A bottom scroll cue with a line and a page counter (`001 / 005`).
- **Buttons**: the primary is a solid signal-green fill with near-black text and a trailing arrow icon. Secondary actions are a bone text link with an arrow, or an outline pill (`.copy-button`) with an icon.
- **Section label**: a mono index chip (`01`) plus a label, with a right-aligned uppercase heading note.
- **Bento cards**: an icon tile, a `// 01 / KICKER`, a two-part heading and a foot row with a counter and a CTA. Variants:
  - an orbit graphic (rings around `AGK`)
  - a location card
  - a tag list (icon plus short label)
  - a pull-quote card with a big `"` and a mono caption
- **Project card**: a top row with the number, kind and an up-right arrow, then a visual panel with a big glyph mark (`//`, `[]`, `<>`, `✳`, `↗`, `∞`) over a grid, then the title, description and a date tag. The accent color comes from its class.
- **Timeline row**: a 4-column band (year, marker dot with the first one active and green, title/scope/detail, `0N` index) separated by 1px lines.
- **Recognition card**: an icon, a kicker, a title, detail text and a state pill with a dot.
- **Contact panel**: a full-width dark panel with glyph columns behind it, a section label, the H2 "Need a fix? / Let's talk.", the primary mailto button, outline pills for the phone number and "copy email" (with copied feedback), and a side column with a large bracket glyph and a short note.
- **Footer**: the wordmark, the copyright line, an email icon and `BACK TO TOP`.

## Page Patterns
- Section order: header, hero (`#top`), statement band, About bento (`#about`), Selected work ×6 (`#work`), Experience timeline (`#experience`), Talks/awards/signal (`#recognition`), Contact (`#contact`), footer.
- Each section opens with a `SectionLabel` indexed 00–05 and a heading note, which keeps the "dossier" feel.
- Motion timing:
  - 900ms hero entrance
  - 160–220ms card hover
  - glyph columns loop in 10–18s with staggered negative delays
  - a blinking cursor
- Under `prefers-reduced-motion` or `pointer: coarse`, all pointer effects and drift stop.
- Routes: `/` and `/404` only, listed in `client/public/manus-routes.json`.

## Content Style
- Voice: direct, observant and lightly wry, as in "I make the complicated part legible." The first person comes from Dylan.
- Headlines are short declaratives with a turn: "Useful is a skill. *Range is the advantage.*"
- Microcopy reads like a terminal: `SYSTEM ONLINE`, `// CURRENT SIGNAL`, `operating principle / 001`.
- CTAs are plain and specific: "See selected work", "Start a conversation", "Need a fix? Let's talk."
- Copy density is low: about 1–3 sentences per card, and facts come from the résumé.

## Agent Build Instructions
1. The stack is React 19, Vite 7, TypeScript and `lucide-react` icons, with plain CSS (no Tailwind). The Vite root is `client/` and output goes to `dist/`. Keep all page content in the typed arrays at the top of `Home.tsx` (`projects`, `experience`, `recognition`).
2. Define every token above as CSS custom properties on `:root` in `index.css`. Never hard-code a hex value in a component.
3. Keep signal green for active states, the primary CTA, the H1 last line, status dots and the first timeline marker. Nowhere else.
4. Keep the pointer effects pointer-only, and turn them off under reduced motion or a coarse pointer, as the existing `useEffect` does.
5. Build new pages or sections from the same parts: a `SectionLabel`, a heading note, bento or grid cards with mono kickers, and 1px line separators.
6. Keep it accessible:
   - Decorative layers get `aria-hidden="true"`.
   - Nav links stay plain anchors.
   - Interactive elements keep visible focus rings in signal green.
   - Body text must stay at least 4.5:1 against the canvas.
7. When hosting under a subpath (GitHub Pages project site), set Vite `base` **and** the wouter `<Router base>` to the same path.

## Rerun Inputs
workflow: firecrawl-website-design-clone
source_url: https://www.agkbuilds.com/
target_stack: React 19 + Vite 7 + TypeScript + plain CSS
output: DESIGN.md

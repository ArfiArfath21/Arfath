# Arfath
My Personal Portfolio Site

# Arfath Portfolio (Next.js)

Modern, dark-first portfolio for Arfath Ahmed Syed. App Router, TypeScript, Tailwind, and accessible micro‑interactions.

## Run locally

1. Node 18+ recommended.
2. Install deps:
   - npm: `npm install`
3. Dev server:
   - `npm run dev` then open http://localhost:3000

## Structure

- `src/app` — routes, layout, SEO, sitemap/robots
- `src/components` — UI primitives and layout
- `src/content` — JSON content (`projects.json`, `profile.json`)
- `public/` — images, favicons, `resume.pdf`

## Notes

- `/writing` redirects to https://theblogorithm.com (see `next.config.mjs`).
- Add `public/resume.pdf` to enable the resume download/preview.
- Update `src/content/projects.json` and `profile.json` as content grows.
- Analytics: Plausible script is included in `src/app/layout.tsx`.
- Colors and radii follow Plan.md; fonts via `next/font`.

## Roadmap

- Add framer‑motion for section/page transitions.
- Dynamic OG images per case study.
- Build `/work/[slug]` once content is ready.


# MMX Dance Studio — Website

A one-page marketing site for MMX Dance Studio (Coimbatore), built with React + Vite and deployed to Netlify.

## Stack

- **React 18 + Vite** — no router (single page, anchor-nav only), no state library.
- **Plain CSS** — design tokens/reset/typography in `src/index.css`, CSS Modules per component.
- **react-icons** — the only runtime dependency beyond React itself.
- Signup form submissions write directly into a Google Sheet via a Google Apps Script Web App (see `google-apps-script/`).

## Project structure

```
src/
├── App.jsx, main.jsx, index.css
├── assets/            # optimized images actually used by the site
├── data/content.js    # all copy, nav links, and structured content — single source of truth
├── components/
│   ├── ui/             # Button, SectionHeading, Placeholder, Container, IconIndex
│   ├── layout/          # Header, Footer
│   └── sections/        # Hero, StatsBar, ProgramsOffer, FeaturedVideos, FounderAbout,
│                         # CrewAchievements, Testimonials, StartsHereCta, SignupForm
└── utils/richText.jsx  # renders content.js's { gold: '...' } accent-span format
google-apps-script/     # the Sheet-writing script + its deploy steps (README inside)
```

## Getting started

```
npm install
npm run dev
```

## Environment variables

Copy `.env.example` to `.env` and set:

- `VITE_SHEETS_WEBAPP_URL` — the deployed Google Apps Script Web App URL that the
  "Join Our Dance Crew" form posts to. See `google-apps-script/README.md` for how
  to set this up from scratch.

Set the same variable in Netlify (Site settings → Environment variables) before
a production deploy that needs the form to work.

## Deployment

Netlify, configured via `netlify.toml` (`npm run build` → `dist/`). No redirects
or serverless functions are needed — the signup form posts directly to Google
from the browser.

## Notes

- Nav links (Home/About/Gallery/Contact) are provisional anchor-scrolls to
  sections on this single page — About/Gallery/Contact don't have their own
  pages yet.
- All copy, stats, program cards, testimonials, and the signup form's field
  list live in `src/data/content.js` — start there for any content change.

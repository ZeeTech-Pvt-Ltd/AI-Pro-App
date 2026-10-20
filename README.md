# AI Pro App

AI Pro App is an Australian market insights, analytics and education website,
built with **Next.js App Router**, React, Tailwind CSS and Lucide icons. Every
route is prerendered at build time with `output: 'export'`, so production is a
plain static site.

## Getting started

```bash
npm install     # install dependencies
npm run dev     # dev server at http://127.0.0.1:5173
npm run build   # static export into /out
```

After `npm run build`, serve the `out/` folder with any static server, or deploy
the repository to Vercel (the project is detected automatically). `npm start` is
not used for the exported site.

## Stack

- Next.js 16 App Router with `output: 'export'` and `trailingSlash: false`
- React 19 (JavaScript)
- Tailwind CSS 3 with the AI Pro App design tokens
- Lucide React icons
- `next/font` self-hosted Inter (body) and Space Grotesk (headings)

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/how-it-works` | How It Works |
| `/features` | Features |
| `/reviews` | Reviews |
| `/about-us` | About Us |
| `/faq` | FAQ |
| `/contact` | Contact Us |
| `/privacy-policy` | Privacy Policy |
| `/cookie-policy` | Cookie Policy |
| `/terms-and-conditions` | Terms & Conditions |
| `/risk-disclosure` | Risk Disclosure |
| `/disclaimer` | Disclaimer |
| `/thank-you` | Registration confirmation, noindex |

Unknown paths render `app/not-found.jsx` and return a real 404 status.

## Project structure

```
app/
  layout.jsx              root layout: fonts, Header/Footer, LegalProvider, GA4
  globals.css             Tailwind layers and design tokens
  page.jsx                homepage
  <route>/page.jsx        one file per route
  not-found.jsx           404
src/
  components/             shared header, footer, sections and form
  data/                   legal docs, FAQs, per-route SEO config
  lib/metadata.js         maps the SEO config onto Next Metadata
  *Page.jsx               page content components
public/
  favicon.svg, og-cover.png, site.webmanifest, sitemap.xml, robots.txt
  home1img.webp, reviews/reviewer-*.jpg
vercel.json               legacy redirects and the Content Security Policy
```

## Key behaviours

- **Registration form**: one client component on `/` and `/contact`. It posts
  JSON (`Content-Type: application/json`) to the relay with the offer name
  `AI-Pro-App-Site`, validates names, email, phone in E.164 and consent, and
  includes an off-screen honeypot. On success it routes to `/thank-you`.
- **Static export**: no API routes, server actions, middleware or ISR. The form
  talks to the external relay directly from the browser.
- **Analytics**: GA4 `G-00EHNDSXTT` is loaded once from the root layout with
  `next/script`; Google Search Console verification is set in root metadata.
- **Legal content**: `src/data/legal.js` is the single source for the footer
  links, the legal dialog and the standalone legal pages.
- **Reviews**: sample cards are clearly labelled as samples. Replace the
  `REVIEWS` array in `src/components/ReviewsSlider.jsx` with real,
  permissioned reviews when they are available.

## Deployment

- `vercel.json` holds the legacy `.html` redirects and the CSP header. Vercel
  serves `/about-us` from `about-us.html` without a trailing slash.
- `public/_redirects` mirrors the redirects for Netlify or Cloudflare Pages.
- `public/sitemap.xml` lists the 12 indexable routes. `/thank-you` and the 404
  page are intentionally excluded.
- `public/robots.txt` allows crawling and does not block `/thank-you`, so
  crawlers can read its noindex tag.

## Before launch

1. Review the legal copy in `src/data/legal.js` with a qualified professional.
2. Confirm the relay endpoint and offer name in
   `src/components/RegistrationForm.jsx`.
3. Replace the sample reviews with real, permissioned feedback.

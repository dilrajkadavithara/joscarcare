# Jos Car Care — Astro Site

Static-rendered Astro site for **www.joscarcare.com**. Generates 36 pages from shared templates and content data files. Deploys to Vercel.

---

## What's in here

```
site/
├── package.json                  Astro 5 + sitemap integration
├── astro.config.mjs              Site config, sitemap output
├── tsconfig.json                 TypeScript paths
├── public/
│   ├── robots.txt                Search engine directives
│   ├── media/                    CGI hero + service tile images
│   └── real-photos/              Real workshop photos
├── src/
│   ├── styles/global.css         Design tokens + all shared styles
│   ├── data/
│   │   ├── site.ts               Site-wide config (name, phone, address, rating)
│   │   ├── services.ts           11 services with snapshots, tiers, descriptions
│   │   ├── areas.ts              9 areas with local context
│   │   ├── reviews.ts            5 GBP reviews + ribbon rotation quotes
│   │   ├── serviceLocations.ts   19 service-area combinations to generate
│   │   ├── combos.ts             12 city-hub / comparison / bundle pages
│   │   └── blogs.ts              3 long-form blog posts
│   ├── layouts/BaseLayout.astro  HTML head, schema, scripts
│   ├── components/               Header, Footer, TrustRibbon, FinalCTA, Stars, WhatsAppCTA
│   └── pages/
│       ├── index.astro                      Homepage
│       ├── [service-location].astro         Generates 19 SL pages
│       ├── [combo].astro                    Generates 12 combo + hub pages
│       ├── blog/index.astro                 Blog index
│       ├── blog/[post].astro                Generates 3 blog post pages
│       ├── reviews.astro                    /reviews
│       ├── about.astro                      /about
│       └── contact.astro                    /contact (Visit page)
```

**Total pages built: 38** (36 SEO pages + blog index + 1 homepage). Plus auto-generated `/sitemap-index.xml` and `/sitemap-0.xml`.

---

## Build it on your machine

### 1. Install Node.js (one-time)

If you don't have Node.js: https://nodejs.org → download LTS → install. Tick "Add to PATH" if asked.

Verify in a terminal: `node --version` should print v18 or higher.

### 2. Install project dependencies

Open Command Prompt or PowerShell, navigate to this folder:

```
cd "C:\Kochi digital business\clients\Jos_Car_Care\channels\13_Website\site"
npm install
```

First run takes 1–2 minutes. Downloads ~300 MB of build tooling into `node_modules/`.

### 3. Preview locally (optional)

```
npm run dev
```

Opens `http://localhost:4321` with hot reload. You can navigate every page, click through internal links, see the actual styles. Stop with `Ctrl+C`.

### 4. Build for production

```
npm run build
```

Generates a static `dist/` folder with all 38 pages as plain HTML, CSS, and assets. About 30 seconds.

### 5. Preview the production build (optional but recommended)

```
npm run preview
```

Serves `dist/` exactly as Vercel would. Verify everything still works.

---

## Deploy to Vercel

### Easiest path — drag and drop

1. Go to <https://vercel.com> → Sign up / Log in (free tier is fine)
2. Click **Add New → Project → Deploy without Git**
3. Drag the entire **`dist/`** folder (created by `npm run build`) into the upload area
4. Click **Deploy**
5. Vercel gives you a temporary URL like `joscarcare-xyz.vercel.app`

### Wire up `www.joscarcare.com`

Once deployed:
1. In Vercel project → **Settings → Domains**
2. Add `www.joscarcare.com` and `joscarcare.com`
3. Vercel shows DNS records to set
4. Go to your domain registrar (where you bought joscarcare.com)
5. Add the records Vercel showed:
   - `CNAME` for `www` → `cname.vercel-dns.com`
   - `A` for `@` (apex) → `76.76.21.21`
6. Wait 15 minutes – 4 hours for DNS propagation
7. Vercel auto-issues SSL certificate. Done.

See `../domain_decision.md` for the full DNS plan.

### Better path — connect to GitHub (for future updates)

1. Push this `site/` folder to a GitHub repo
2. In Vercel → **Add New → Project → Import from GitHub**
3. Select the repo
4. Click **Deploy**
5. Every git push from now on triggers an automatic redeploy

---

## After deployment

### Submit to Google Search Console

1. Go to <https://search.google.com/search-console>
2. Add property → URL prefix → `https://www.joscarcare.com`
3. Verify (Vercel adds the verification meta tag if you ask it to, OR use DNS verification)
4. Submit sitemap: `https://www.joscarcare.com/sitemap-index.xml`

### Connect to GBP listing

In Jos's Google Business Profile dashboard, set the Website field to `https://www.joscarcare.com`. The GBP "Website" field is currently empty per the audit — this fixes that.

### Set up GA4 (optional)

When ready: add the GA4 script tag to `BaseLayout.astro`. We left this out of v1 to keep launch fast.

---

## How to update content

### Change a service description, price, or image

Edit `src/data/services.ts`. Change the field for the relevant service. Run `npm run build`. Redeploy.

### Add a new area

Edit `src/data/areas.ts`. Add a new entry. If you want it to have dedicated SL pages, add entries to `src/data/serviceLocations.ts`. Run `npm run build`.

### Update reviews after Jos gets new ones

Edit `src/data/reviews.ts`. Add new reviews to the array. Run `npm run build`. The homepage testimonial block, `/reviews` page, and ribbon rotation quotes all update automatically.

### Update phone number or address

Edit `src/data/site.ts`. Single source of truth — header, footer, contact card, schema markup all read from there.

### Change a blog post

Edit `src/data/blogs.ts`. Body is HTML inside a template literal — paragraphs, headings, callouts, pull quotes all in one place.

---

## What was deliberately kept out of v1

These are explicit non-decisions, by design — not oversights:

- **GA4 / Search Console verification meta tags** — added when Jos signs up
- **OG image** — needs a hero photo asset; placeholder for now
- **Specific coating brand names** — generic language until Jos confirms which products he stocks
- **Specific tier pricing beyond the GBP-listed "Starts at" figures** — needs Jos confirmation
- **Justdial sibling cross-linking** — entity question unresolved; we don't reference *Jos & Co Car Painting* anywhere
- **Window tinting service** — flagged in GBP as a possible 13th service; not included until confirmed
- **Bike detailing** — same; phase 2 if Jos confirms

Each of these is structurally easy to add — see `site_plan.md` §0 (Decisions log) and §6 (Dependency flag summary) in the parent folder.

---

## Performance and SEO baseline

Per `page_template.md` §13:
- HTML < 30 KB per page · CSS < 20 KB · JS < 5 KB (no framework runtime, no GSAP, no Three.js — Astro is zero-JS by default)
- Hero images ~100 KB each (already-optimized WebP from `media/hero_slides/`)
- Lighthouse target: ≥ 92 mobile across all four categories

Schema markup is comprehensive and validates in the Google Rich Results Test:
- Homepage: `Organization` + `WebSite` + `LocalBusiness` + `AutomotiveBusiness` with `aggregateRating` + `BreadcrumbList`
- Service-location pages: `Service` + `BreadcrumbList` + `FAQPage`
- City hubs: `Service` (with all 9 `areaServed`) + `BreadcrumbList`
- Combo pages: `Article` + `BreadcrumbList`
- Blog posts: `Article` (with author, dates, image) + `BreadcrumbList`
- /reviews: `LocalBusiness` with `aggregateRating` + nested `Review` items + `BreadcrumbList`

Star ratings render directly into Google search results once the schema indexes (typically 1–2 weeks after Search Console submission).

---

## Quick troubleshooting

**`npm install` fails with permission error (Windows):** Run terminal as Administrator, or skip global cache: `npm install --no-fund --no-audit`.

**`npm run build` fails with `Cannot find module 'astro'`:** `npm install` didn't complete. Run again, wait for completion.

**Pages render but images don't show:** The `public/media/` and `public/real-photos/` folders should be inside `site/`. Verify with `dir public` (Windows) or `ls public/` (Mac/Linux).

**Local server runs but pages 404:** Make sure you ran `npm run dev` from inside the `site/` folder, not the parent `13_Website/` folder.

---

## File counts at a glance

- **38 pages** in `dist/` after build
- **3 layouts/components** to maintain (BaseLayout, Header, Footer, TrustRibbon)
- **6 data files** that drive all content
- **All tier specifics, prices, warranties** live in `services.ts` — single edit propagates everywhere

To add 11 more service-location pages later (when Jos confirms more services), add entries to `serviceLocations.ts`. The catch-all template generates them automatically. No new component code needed.

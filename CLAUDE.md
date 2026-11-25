# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static marketing website for Articella Primary Care (Frisco, TX). Pure HTML + CSS + vanilla ES6 JavaScript — **no build step, no bundler, no package manager, no backend**. The browser runs the source directly. Everything shippable lives in `dist/`; the repo root holds only docs (`README.md`, `ARTICELLA_DESIGN_PLAN.md`) and this file.

The contact form, care guide, and booking handoff are design previews only — not wired to any messaging, AI, or scheduling backend.

## Running

From the repo root:

```bash
cd dist
python -m http.server 8000   # Windows; use python3 on macOS/Linux
```

Open `http://localhost:8000/`. There are no tests, no lint, and no build. "Deploying" means serving `dist/` from any static host. Editing a file + refreshing the browser is the entire dev loop — the server reads from disk live.

Routing is URL-hash based (`/#/about`, `/#/services`, `/#/service/womens-health`), so refresh works on any plain static server and no server-side rewrites are needed.

## Architecture — the parts that require reading multiple files

**Single global scope, no modules.** The three scripts in `dist/index.html` load with `defer` in this exact order, and the order is load-bearing:

```
service-pages.js  →  app.js  →  demo.js
```

None of them use `import`/`export` or an IIFE wrapper (except `service-pages.js`). They share one global namespace, so later files can see and **mutate** objects defined by earlier ones. This mutation is the core mechanism of the site — see `demo.js` below.

**`app.js` is the application.** It defines:
- `pages[]` — the valid route keys.
- `path()` — parses `location.hash` into a route key.
- A set of render functions (`home`, `about`, `providersPage`, `servicesPage`, `memberships`, etc.), each returning an HTML string.
- `renderers` — a **plain global object mapping route key → render function**. This is the central dispatch table.
- `render()` — the heart of the app: `app.innerHTML = renderers[path()]()`, then it also updates `document.title`, the `<meta name=description>`, active nav state, and scroll position for that route.
- Wiring: `window.addEventListener('hashchange', render)` then an initial `render()`.

Page content is authored as **template-literal HTML strings**, not separate `.html` files or a templating library. Small helpers (`link`, `book`, `faq`, `pageHero`, `cta`) compose these strings. Shared data (e.g. `providers[]`, the `photo` asset map) sit at the top of `app.js`.

**`service-pages.js` provides the service sub-pages.** It assigns `window.ServiceExperience`, an IIFE exposing `{ render, title(), description() }` driven by a `data` map keyed by service slug (women's-health, diabetes, heart, preventive, medicare, thyroid). `app.js` plugs it in via `renderers.service = ServiceExperience.render`, and `render()` reads `ServiceExperience.title()/description()` to set the title/meta for `#/service/<slug>` routes. The slug is the 2nd hash segment, parsed inside `service-pages.js`.

**`demo.js` turns the full site into the "client presentation edition."** It runs *after* `app.js`, so `renderers` and all the page functions already exist. It then **reassigns entries in the global `renderers` map**:
- `renderers[''] = demoHome` (a polished home wrapper around `home()`)
- `renderers.about` = a bespoke restored About page
- **every other route is overwritten with `demoPlaceholder(key)`** — a "taking shape" placeholder — via `Object.keys(renderers).forEach(...)`.
- It calls `render()` again at the end to repaint with the overridden map.

So on branches that include `demo.js`, only Home and About are "finished"; all other routes intentionally show placeholders. To change what the demo exposes, edit the override block at the bottom of `demo.js` — not `app.js`.

**CSS is layered by load order, not scoped.** `index.html` links ~12 stylesheets; `styles.css` is the base and the later files (`site-polish.css`, `service-redesign.css`, `demo.css`) act as override layers that win by cascade position. When restyling, prefer adding to the appropriate later layer over editing the base, and keep the `<link>` order intact.

## Branches

- **`main`** — the complete site (all routes fully built). No `demo.js`/`demo.css`.
- **`demo`** — the client-presentation edition: adds `demo.js` + `demo.css` (wired into `index.html`) which override `renderers` so only Home and About are live and the rest are placeholders.
- **`akhil-dev`** — enhancement branch cut from `demo`.

The functional difference between `main` and `demo` is almost entirely the presence of `demo.js` and its `renderers` overrides. When a change should appear on the full site, confirm which branch you're on — a route edited in `app.js` will still be masked by `demo.js`'s placeholder on demo-derived branches.

## Conventions

- Author new page content as a function returning an HTML string, then register it in `renderers` (and add its key to `pages[]`). Follow the existing helper vocabulary (`link`, `book`, `faq`, `cta`, `pageHero`).
- Images live in `dist/assets/` and are referenced by relative path; prefer `.webp` and add `loading="lazy"` for below-the-fold media (the codebase already does this).
- Clinical copy, provider details, insurance participation, pricing, and image usage require client approval before any production use — treat placeholder/demo copy as unconfirmed.

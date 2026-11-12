# Articella website redesign preview

This repository contains the current frontend design concept for Articella Primary Care. It is a static website: the pages, interactions, and responsive styles run in the browser without a build step or package installation.

## Technology

| Part | Used for |
| --- | --- |
| HTML5 | Page shell, navigation, dialogs, accessible controls, and content structure |
| CSS3 | Responsive layouts, typography, transitions, and visual effects |
| Vanilla JavaScript (ES6+) | Hash based page navigation, service pages, menus, tabs, FAQs, profile dialogs, and the guided care preview |
| SVG | Logo and interface icons |
| WebP, PNG, JPG | Photography and other images |

Google Fonts provides DM Sans and Platypi. There is no React, TypeScript, Node.js application, database, or backend API in this preview.

## Run locally

From the repository root:

```bash
cd dist
python3 -m http.server 8000
```

Open `http://localhost:8000/`. The website uses URL hash routes such as `/#/about`, `/#/services`, and `/#/service/womens-health`, so refreshing a page works with any basic static server.

## Project layout

- `dist/index.html`: document shell, header, footer, dialogs, and linked styles/scripts.
- `dist/app.js`: primary pages and browser interactions.
- `dist/service-pages.js`: six individual service pages and their interactions.
- `dist/*.css`: base, page-specific, and responsive visual styles.
- `dist/assets/`: images, logos, and SVG assets.
- `ARTICELLA_DESIGN_PLAN.md`: design and content planning notes.

## Team workflow

Create a branch for each change, open a pull request, and review the page in a desktop and mobile browser. Keep the deployed `dist/` folder self-contained. Avoid committing credentials or patient information. The contact form, care guide, and booking handoff are design previews; they are not connected to a production messaging, AI, or scheduling backend. Clinical copy, provider details, insurance participation, pricing, and image usage need client approval before a production launch.

## Deployment

Serve the contents of `dist/` from a static host. This GitHub copy intentionally excludes the existing Sites hosting identity and deployment metadata. Updating this repository alone will not automatically update the current preview URL until a deployment workflow is connected.

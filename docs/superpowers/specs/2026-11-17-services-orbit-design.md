# Services orbit — home section redesign

Date: 2026-11-17 · Branch: akhil-dev

## Intent / why
Replace the home page's "Care for every chapter" section (`.intro-section` in
`home()`) with the animated **services orbit** from the reference export, re-skinned
to Articella's real design system. The orbit is a more distinctive, memorable way to
present the six primary-care services than the current static tile row.

## Scope (decided with user)
- The orbit becomes the **entire** section: heading + two flanking panels + six
  orbiting services around a spinning 3D center.
- **Dropped:** the 3 service tiles, the "Popular reasons to visit" finder, and the
  01/02/03 approach row. (User chose "orbit replaces whole section.")
- **Motion:** full fidelity — auto-cycling highlight + 3D spinning center, pause on
  hover/focus, hover takes over the center, `prefers-reduced-motion` freezes to a
  steady state.

## Non-goals / anti-goals
- Not touching any other home section or any other page.
- Not changing the six service pages themselves, nav, or routing.
- Not introducing the reference's off-brand palette (`#00008B`, teal `#2B8EAA`,
  generic greys) — that would fail the "use our design system" requirement.
- No new build step, framework, or dependency (static site stays static).

## Approach (how it gets built — my calls)
Single sensible approach; the reference *is* the chosen design, the user handed me
the integration.

1. **New scoped stylesheet `dist/services-orbit.css`**, linked last-ish in
   `index.html` (CSS-layering convention). Styles scoped to `.service-orbit` so they
   never collide with the site's `.button`/`.section`/`:root`.
2. **Render as a string, not a runtime script.** The home section is injected via
   `app.innerHTML`, where `<script>` tags do not execute. So I add a
   `servicesOrbit()` helper in `app.js` that returns the full orbit HTML — the six
   `<li>` labels and the six layered-SVG center objects expanded at string-build
   time (JS `map`, same pattern as `faq()`/`providers`). Pure CSS drives the
   animation afterward; no DOM-stamping script needed. Replace the `.intro-section`
   template in `home()` with `${servicesOrbit()}`.
3. **Real routes, not `#` stubs:** services → `#/service/womens-health`,
   `diabetes-care`, `heart-health`, `preventive-care`, `medicare`, `thyroid-care`.
   Left panel "Explore all services" → `#/services`; right panel "Membership
   options" → `#/memberships`.
4. **Use the site's real buttons** (`.button button-dark`, `.button button-outline`)
   rather than the reference's scoped button clones — more consistent with the
   design system.

## Token re-skin (reference → Articella)
| Reference | → Articella |
|---|---|
| brand `#00008B` | `--navy #10265d` |
| brand-hover `#1A1AA0` | `--blue #284b9b` |
| accent teal `#2B8EAA` (center highlight) | `--blue #284b9b` (drop teal; center reads navy→blue) |
| brand-subtle / surfaces | `--ice #eaf3f5`, `--warm #f5f4ef`, `#fff`, `--line #dce4ed` |
| text-primary `#1F2633` | `--ink #16213d` |
| text-secondary `#4E5869` | `--muted #65718a` |
| heading Platypi | Platypi (already the loaded brand serif; matches neighbors) |
| body Helvetica/DM Sans | site `--sans` stack |
Background halo re-skinned to a subtle navy→blue glow fading into `--ice`/white.

## What's left to the builder
- Final exact radii/spacing tuning to sit well among the demo-home sections.
- Confirm heading font matches the adjacent demo sections (use Platypi if they do).

## Verification
Run the static server, open `#/` on `akhil-dev`, and confirm: orbit renders with six
services; labels auto-cycle and the center object spins in 3D; hover a service →
center swaps to it and others dim; colors are navy/blue (no `#00008B`/teal);
tablet stacks panels, phone shows a 2-col grid with the ring hidden; reduced-motion
freezes cleanly. Screenshot for a visual check.

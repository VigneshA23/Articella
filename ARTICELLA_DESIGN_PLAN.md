# Articella website redesign — presentation plan and observation coverage

**Private presentation concept · 9 November 2026**

## The proposal in one minute

Rebuild the patient experience around Articella's established identity, **“Start Early. Stay Well.”** The site should quickly answer four questions: What care is offered? Who provides it? What will it cost or will insurance apply? How do I book? The demo shows a premium editorial design, authentic provider portraits from Articella's site, simplified navigation, and clear paths to care. It is a front-end concept; production integrations and clinical content require approval.

## Patient journey

1. **Understand:** A high-impact hero introduces personalized primary care in Frisco and makes Book and Call/Text visible.
2. **Trust:** A compact trust strip and real care-team portraits establish who provides the care.
3. **Choose:** Three care paths, eight grouped services, membership comparison and insurance guidance help visitors decide.
4. **Act:** Booking actions, new-patient steps, clinic details and the patient portal guide the next move.
5. **Stay connected:** Approved articles, videos, events, reviews and newsletter consent can support ongoing engagement.

## Page-level design and behavior

| Page / component | Team observations addressed | Demo treatment | Production dependency |
|---|---|---|---|
| Global brand | Plain design, inconsistent typography/color, cartoon imagery, weak hierarchy | Official Articella logo, recognizable blue, Platypi editorial serif, clean sans, layered patterns, responsive premium layouts and real provider portraits | Verify the original Brand Book; its uploaded PDF has a broken cross-reference and could not be rendered. Photography guidance in the PRD conflicts with the request for authentic photography. |
| Desktop/mobile navigation | Hidden desktop links, sandwich animation, Portal and Book buried | Horizontal desktop nav; compact animated mobile menu; Patient Portal in both; Book header and mobile Book/Call bar; plain labels and Patient Resources dropdown | Final sitemap; the demo links to the current portal and Healow destinations, which the clinic must reconfirm before launch |
| Home hero | Weak brand promise, excess text, generic imagery | One-screen offer, “Start Early. Stay Well.”, Book and Call/Text, HD illustrative consultation image and subtle brand orbit | Client approval of stock image and final clinical copy |
| Home proof and care | Long accordions, eight stacked blocks | Four concise trust points; three visual care paths; provider photo carousel with booking action; values compressed to three lines | Same-week availability and insurance language to be checked |
| Home reviews | Real social proof buried | Two testimonials reproduced from the current site in a new source-labeled presentation layout | Consent, review platform/source and permission to reuse in production |
| Home content and location | Blog preview, insurance, map, newsletter | Editorial preview, payer examples with verification caveat, Frisco location action, newsletter preview | Approved content, current payer network, map provider and opt-in service |
| About / founding story | Oversized hero, long repeated story, loose core values | Short mission, founder portrait, tighter values and three-stage story timeline | Founder biography and milestone sign-off |
| Providers | Static team image, weak profiles | Three individual portrait cards and detailed profile modals with roles and booking action; data structure ready for a CMS-driven carousel | Approved photos, credentials, languages, profile copy, staff editing and individual scheduling links |
| Primary Care | Service list is difficult to scan | Three groups: Prevent, Treat, Coordinate; eight expandable service details with audience, visit expectation and booking prompt; compact FAQ | Clinical review of service scope and FAQs |
| Concierge Care | Confusing old and new plans | Essential $79/month and Premier $129/month, comparison table, separate one-time visit tab ($79/$99/$149), cancellation and lab FAQs | Resolve contradictions about labs, EKG, blood draws, annual vs monthly wellness wording, HSA/FSA and the legacy plans; approve prices and legal terms |
| New Patients | Missing practical onboarding | Three-step journey, first-visit checklist, link to insurance and directions | Actual forms, appointment rules, supported languages and clinic instructions |
| Insurance & Billing | No clear standalone explanation | Dedicated page, verification steps, self-pay vs membership distinction, payer names from Articella's February 2026 update | Confirm current networks, Medicare variants, copays, payment methods and permissions for logos |
| FAQs | Difficult to find answers | Homepage FAQ plus dedicated patient FAQ covering booking, coverage, telehealth, portal and plans | Clinical and operations approval |
| Insights & Events | Dated covers, weak categories, stale events | Filterable article/video/news cards, links to care, and newsletter preview | Approved article assets, clinician videos, dates, archive rules and consent flow |
| Locations & Contact | Unclear map, inconsistent access details | Frisco address, listed hours, call/text/email, directions, map embed, general enquiry form interface | Verify address/hours; connect CRM; test delivery, consent and privacy before collecting data |
| Chatbot | Need simple self-service | Quiet floating informational guide for services, plans, hours and booking; no free-form PHI collection | Approved FAQ content, escalation route, privacy/vendor review if expanded |
| Portal, privacy, terms | Secure portal and legal copy | Current secure portal handoff and links to existing legal pages, with no credential or payment collection | Verified portal destination and legal documents |
| Performance/SEO/mobile | Slow media, routing, inconsistent headings, touch targets | Small static build, lazy-loaded secondary images, per-route title and meta description, responsive CSS, reduced-motion support | Image licensing and compression, mobile device QA, Core Web Vitals, sitemap/schema, redirects and analytics review |
| Admin maintenance | Teammates asked staff to update doctors, plans, insurance and articles | Front-end data structures show the content types and presentation | CMS implementation, roles, editorial workflow and publishing controls |
| US/local relevance | Separate US context requested in audit | Frisco, Texas location and US insurance/Medicare guidance integrated where patients use them | Confirm business scope before adding a separate national page |
| Footer and sister brand | Preserve useful footer, NAP, MedSpa handling | Quick links, phone/email/address/hours, current social links, portal, privacy, sister-brand label | Verify social profiles, email address and final external links |

## Design decisions to present

- Keep the recognizable Articella blue identity and tagline. This is a redesign of the experience, not a new clinic brand.
- Use real Articella clinician photos where available. The hero and supporting imagery are optimized illustrative placeholders from Unsplash until the client supplies approved HD clinic photography. The hero image is by Vitaly Gariev; supporting images are temporary.
- Use a short route to care on the homepage. Detailed services and pricing live on their own pages, reducing repetition.
- Treat pricing and payer information as **draft / verify** until operational sign-off. The supplied membership document conflicts with the live site and with itself on several inclusions.
- Keep the patient portal and booking handoffs prominent. The demo links to destinations visible on Articella’s current site; reconfirm them before the new site launches.
- Keep chatbot and general enquiry examples informational. The demo neither sends nor stores patient messages.

## Implementation sequence

1. **Content and decisions:** Sign off the sitemap; brand assets; photos; provider biographies; services; insurance matrix; two new plans; legal text; booking and portal destinations.
2. **Design:** Approve homepage, provider cards, service details, plan comparison, new-patient journey and mobile states.
3. **Build:** Choose CMS/platform based on editable content, existing WordPress/Cloudflare constraints, integration needs and maintenance ownership. Implement reusable components and editor roles.
4. **Integrate:** Connect Healow/patient portal, enquiry CRM, verified location map, approved review source, analytics and newsletter provider.
5. **Launch QA:** Accessibility, responsive device testing, performance, SEO metadata/schema/redirects, consent and privacy review, booking/link tests, content and network verification, then staged release.

## Presentation walkthrough

Home → care team carousel → Primary Care expandable services → Concierge comparison and one-time tab → New Patients → Insurance & Billing → Insights/FAQ → Contact/booking concept. Show desktop first, then mobile navigation and the sticky Book/Call action. Close with the approval/dependency list above.

## Sources reviewed

Articella current site and Mission/Contact/Primary Care pages; Website Enhancement PRD; both Articella Observations documents; Page Wise Observations; Akhil Nallapu website audit; Evolve competitor observations; Concierge Care draft; consolidated plan; prior pasted feedback. The Brand Book PDF was supplied but cannot be independently rendered from the damaged file.

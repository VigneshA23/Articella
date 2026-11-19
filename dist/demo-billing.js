/* Insurance and Billing page (#/insurance). Loaded after demo-patients.js (reuses npIcon and the .np-hero pattern)
   and before demo.js, which registers demoInsurance as the route renderer.
   Insurer data (listedPlans) and the search/select behaviour (selectPlan, #planSearch) come from app.js;
   this page keeps their element ids so those handlers drive the gallery and the guide. */
Object.assign(npIcons, {
  search:'<circle cx="14" cy="14" r="9"/><path d="m21 21 7 7"/>',
  wallet:'<rect x="4" y="8" width="24" height="18" rx="3"/><path d="M4 13h24M21 19h3"/><path d="M8 8l12-4 2 4"/>',
  member:'<circle cx="16" cy="11" r="5"/><path d="M6 27c1.5-5 5.5-8 10-8s8.5 3 10 8"/><path d="m22 6 2 2 4-4"/>',
  link:'<path d="M13 19 19 13M11 15l-3 3a4.2 4.2 0 0 0 6 6l3-3M21 17l3-3a4.2 4.2 0 0 0-6-6l-3 3"/>'
});

const ibChecks = ['Your exact plan or product', 'The Articella clinician you will see', 'Whether that clinician is in network', 'Your copay for this visit', 'How much of your deductible is left'];

const ibWays = [
  ['shield', 'Using insurance', 'Start with the insurers above, then confirm your benefits for the specific clinician and visit. The team can help you verify them.', '<a class="np-action" href="tel:+12148726502">Ask the team to check <span aria-hidden="true">→</span></a>'],
  ['wallet', 'Asking about self-pay', 'No insurance, or a high deductible? Ask for current self-pay pricing and what is included before you book.', '<a class="np-action" href="tel:+12148726502">Ask about self-pay <span aria-hidden="true">→</span></a>'],
  ['member', 'Considering membership', 'A concierge membership is a care arrangement, separate from insurance. Review the written terms before you join.', '<a class="np-action" href="#/memberships">Compare memberships <span aria-hidden="true">→</span></a>']
];

const ibQuestions = [
  'Is my exact plan in network with this clinician?',
  'Is the visit or service I need covered?',
  'What will my copay and deductible be?',
  'Do I need a referral or prior authorization?'
];

const demoInsurance = () => `<div class="demo-page np-page ib-page">
  <section class="np-hero ib-hero"><div class="np-hero-copy"><h1>Coverage questions,<br><em>made clear.</em></h1><p>See the insurers Articella works with, then confirm your exact plan before your visit.</p><div class="svc-actions"><button class="button button-dark" type="button" data-scroll-target="ibPlans">See accepted insurers</button><a class="demo-text-link" href="tel:+12148726502">Call or text (214) 872-6502</a></div></div><div class="np-hero-media"><img src="assets/insurance-conversation.webp" alt="Illustrative conversation about insurance at a clinic front desk" fetchpriority="high"></div></section>

  <section class="svc-section ib-plans" id="ibPlans" aria-labelledby="ibPlansTitle"><div class="svc-heading"><h2 id="ibPlansTitle">Insurance we accept</h2></div>
    <div class="ib-explorer">
      <div class="ib-gallery-wrap">
        <label class="ib-search"><span class="ib-search-icon">${npIcon('search')}</span><span class="sr-only">Search insurers</span><input id="planSearch" type="search" placeholder="Search by insurer name" autocomplete="off"></label>
        <div class="ib-gallery" id="planList">${listedPlans.map((p,i)=>`<button class="ib-card" type="button" data-plan-name="${p.name.toLowerCase()}" data-plan-index="${i}" aria-pressed="${i===0?'true':'false'}"><span class="ib-logo"><img src="assets/${p.logo}" alt=""></span><span class="ib-card-name">${p.name}</span><small>${p.detail}</small><span class="ib-tick" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span></button>`).join('')}</div>
        <p id="planEmpty" class="ib-empty" hidden>No listed insurer matches that search. Call the team to ask about your plan.</p>
      </div>
      <aside class="ib-guide" id="planDetail" aria-live="polite">
        <h3 id="planDetailTitle">${listedPlans[0].name}</h3>
        <p class="ib-company" id="planDetailCompany">${listedPlans[0].company}</p>
        <a id="planDetailLink" class="ib-official" href="${listedPlans[0].website}" target="_blank" rel="noopener noreferrer">${npIcon('link')}Visit the official website</a>
        <div class="ib-ask"><strong>A question for Articella</strong><p id="planDetailText">${listedPlans[0].note}</p></div>
        <div class="ib-check"><strong>Before your visit, check</strong><ul>${ibChecks.map(c=>`<li>${c}</li>`).join('')}</ul></div>
        <a class="button svc-end-button ib-call" href="tel:+12148726502">Call to confirm coverage</a>
      </aside>
    </div>
  </section>

  <section class="svc-section ib-pay" id="ibPay" aria-labelledby="ibPayTitle"><div class="svc-heading"><h2 id="ibPayTitle">Ways to pay</h2></div>
    <div class="ib-ways">${ibWays.map(([ic,t,d,a])=>`<article class="ib-way"><span class="svc-card-icon">${npIcon(ic)}</span><h3>${t}</h3><p>${d}</p>${a}</article>`).join('')}</div>
    <div class="ib-questions"><div class="ib-questions-head"><h3>Four questions to ask before you call</h3><p>Coverage can change by network, service and clinician. Have these ready for the office and your insurer.</p></div><ol>${ibQuestions.map(q=>`<li><span class="ib-q-mark" aria-hidden="true">?</span>${q}</li>`).join('')}</ol></div>
  </section>
</div>`;

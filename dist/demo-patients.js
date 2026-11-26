/* New Patients page (#/new-patients). Loaded before demo.js, which registers demoNewPatients as the route renderer.
   Uses only helpers from app.js (book). The checklist progress is handled by the shared [data-prep] listener in app.js. */
const npIcons = {
  heart:'<path d="M16 27 5.5 16.5a7 7 0 0 1 10-10l.5.5.5-.5a7 7 0 0 1 10 10L16 27Z"/><path d="M7 16h5l2-3 3 6 2-3h6"/>',
  calendar:'<rect x="4" y="6" width="24" height="22" rx="3"/><path d="M10 3v6m12-6v6M4 14h24m-18 6h6"/>',
  plan:'<rect x="7" y="5" width="18" height="23" rx="3"/><path d="M12 5V3h8v2M12 14h8m-8 5h5"/>',
  shield:'<path d="M16 3 27 7v8c0 7-4.5 11-11 14C9.5 26 5 22 5 15V7l11-4Z"/><path d="m11 16 3.5 3.5L21 13"/>',
  pin:'<path d="M16 29s-9-8.5-9-15a9 9 0 0 1 18 0c0 6.5-9 15-9 15Z"/><circle cx="16" cy="14" r="3.2"/>',
  parking:'<rect x="5" y="5" width="22" height="22" rx="4"/><path d="M12 22V10h5a3.5 3.5 0 0 1 0 7h-5"/>',
  clock:'<circle cx="16" cy="16" r="12"/><path d="M16 8v8l5 3"/>',
  phone:'<path d="M7 4h4l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v4a3 3 0 0 1-3 3C13 25 5 17 4 7a3 3 0 0 1 3-3Z"/>',
  idcard:'<rect x="3" y="7" width="26" height="18" rx="3"/><circle cx="11" cy="15" r="3"/><path d="M7 22c.8-2 2.4-3 4-3s3.2 1 4 3M19 13h6m-6 4h6"/>',
  card:'<rect x="3" y="7" width="26" height="18" rx="3"/><path d="M3 13h26M8 20h6"/>',
  pill:'<path d="M12.5 4.5a6.5 6.5 0 0 1 9.2 9.2l-8 8a6.5 6.5 0 0 1-9.2-9.2l8-8Z"/><path d="m9.5 9.5 8.5 8.5"/>',
  folder:'<path d="M4 8a2 2 0 0 1 2-2h7l3 3h10a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z"/><path d="M12 17h8m-8 4h5"/>'
};
const npIcon = (name) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${npIcons[name]||''}</svg>`;

const npMapsUrl = 'https://maps.app.goo.gl/eYzfh2MTMinwqH428';

const npTrust = [
  ['calendar','Same-week visits','are often available'],
  ['shield','Most major insurance','plans accepted'],
  ['parking','Easy parking','at our Frisco office']
];

const npSteps = [
  ['heart','Choose a care option','Browse primary care services and the people who provide them.','<a class="np-action" href="#/services">Explore services <span aria-hidden="true">→</span></a>'],
  ['calendar','Find a time','Use the appointment button, or call or text the Frisco office.','<button type="button" class="np-action book-trigger">Appointment options <span aria-hidden="true">→</span></button>'],
  ['plan','Get ready','Bring a few essentials and the questions that matter to you.','<button type="button" class="np-action" data-scroll-target="npChecklist">View checklist <span aria-hidden="true">→</span></button>']
];

const npChecklist = [
  ['idcard','Photo identification','For check-in and account verification.'],
  ['card','Insurance card, if using coverage','Confirm your specific plan and network ahead of time.'],
  ['pill','Medication and allergy list','Include prescriptions, supplements and recent changes.'],
  ['folder','Records and questions','Bring relevant records and what you want to discuss.']
];

const npFacts = [
  ['pin','Address','10234 Coit Rd, Suite 100<br>Frisco, TX 75035'],
  ['clock','Hours','Mon to Fri, 8:30 AM to 4:30 PM<br>Sat, 8:30 AM to 12:00 PM<br>Sun, closed'],
  ['parking','Parking','Easy parking at the Frisco office. Allow a few minutes to check in.'],
  ['phone','Phone','<a class="call-btn" href="tel:+12148726502">Call or text (214) 872-6502</a>']
];

const demoNewPatients = () => `<div class="demo-page np-page">
  <section class="np-hero"><div class="np-hero-copy"><h1>A warm welcome,<br><em>before you arrive.</em></h1><p>Plan your first visit in three simple steps, then find the front door with ease.</p><div class="svc-actions">${book('Book appointment')}<a class="demo-text-link" href="${npMapsUrl}" target="_blank" rel="noopener">Get directions</a></div><p class="np-note">Appointment availability and coverage are confirmed by the practice.</p></div><div class="np-hero-media"><img src="assets/resource-arrival.webp" alt="Illustrative welcome at a primary care reception desk" fetchpriority="high"></div></section>
  <div class="np-trust-wrap"><ul class="np-trust">${npTrust.map(([ic,a,b])=>`<li><span class="np-trust-icon">${npIcon(ic)}</span><span><strong>${a}</strong>${b}</span></li>`).join('')}</ul></div>
  <section class="svc-section np-steps-section" id="npSteps" aria-labelledby="npStepsTitle"><div class="svc-heading"><h2 id="npStepsTitle">Three steps to your first visit</h2></div><ol class="np-steps">${npSteps.map(([ic,t,d,act])=>`<li><span class="svc-card-icon">${npIcon(ic)}</span><h3>${t}</h3><p>${d}</p>${act}</li>`).join('')}</ol></section>
  <section class="svc-section np-check" id="npChecklist" aria-labelledby="npCheckTitle"><div class="np-check-wrap"><div class="np-check-head"><h2 id="npCheckTitle">First visit checklist</h2><p>Check off what you have ready. Your selections stay in this browser and are never sent to the clinic.</p><div class="np-meter"><div class="np-meter-track"><span id="prepBar"></span></div><strong id="prepProgress" aria-live="polite">0 of ${npChecklist.length} ready</strong></div></div><div class="np-items">${npChecklist.map(([ic,t,d])=>`<label class="np-item"><input type="checkbox" data-prep><span class="np-item-icon">${npIcon(ic)}</span><span class="np-item-text"><b>${t}</b><small>${d}</small></span><span class="np-box" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg></span></label>`).join('')}</div></div></section>
  <section class="svc-section np-arrival" id="npArrival" aria-labelledby="npArrivalTitle"><div class="svc-heading"><h2 id="npArrivalTitle">Arrival information</h2></div><div class="np-arrival-wrap"><div class="np-facts">${npFacts.map(([ic,t,d])=>`<div class="np-fact"><span class="svc-card-icon">${npIcon(ic)}</span><div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div><aside class="np-help"><h3>Need a hand before you arrive?</h3><p>The front desk can help with scheduling, coverage and portal access.</p><div class="np-help-actions"><a class="button svc-end-button" href="tel:+12148726502">Call or text (214) 872-6502</a><a class="svc-end-link" href="${npMapsUrl}" target="_blank" rel="noopener">Get directions</a></div></aside></div></section>
</div>`;

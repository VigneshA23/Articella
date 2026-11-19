/* Client presentation edition. The complete site remains on the main branch. */
const demoIcon = (name) => ({heart:'<path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/>',shield:'<path d="M12 2 20 5v6c0 5-3 8-8 11-5-3-8-6-8-11V5l8-3Z"/><path d="m8 12 3 3 5-6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',people:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 21v-2a6 6 0 0 1 12 0v2m0-6a5 5 0 0 1 6 5v1"/>',spark:'<path d="M12 2c1 5 3 8 8 10-5 1-7 4-8 10-1-6-3-9-8-10 5-2 7-5 8-10Z"/>',pin:'<path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12Z"/><circle cx="12" cy="10" r="2.5"/>'}[name]||'');
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${demoIcon(name)}</svg>`;
const demoHome = () => `<div class="demo-page demo-full-home">${home()}</div>`;
const demoAbout = () => `<div class="demo-page demo-about">
  <section class="demo-hero demo-about-hero"><div class="demo-hero-copy"><span class="demo-kicker"><span class="kicker-line"></span> ABOUT ARTICELLA</span><h1>A place to feel <em>known.</em></h1><p>Articella was founded on a simple belief: good care begins when we make time to truly understand a person.</p><div class="demo-hero-actions"><button class="button button-dark" type="button" data-scroll-target="our-story">Our story</button><button class="demo-text-link" type="button" data-scroll-target="our-team">Meet the team</button></div></div><div class="demo-hero-media"><img src="assets/about-conversation.webp" alt="Physician listening to a patient in a calm consultation"><div class="demo-photo-caption"><span>ARTICELLA · FRISCO</span><strong>Thoughtful care, rooted in connection.</strong></div></div></section>
  <section class="demo-mission demo-section"><span class="demo-kicker">OUR MISSION</span><h2>To create a sanctuary<br>for lifelong wellness.</h2><p>That means seeing beyond a symptom, making the next step easier to understand, and giving prevention a place in every care conversation.</p></section>
  <section class="demo-story demo-section" id="our-story"><div class="demo-story-image"><img src="assets/about-team-work.webp" loading="lazy" alt="Care team discussing a plan together"></div><div class="demo-story-copy"><span class="demo-kicker">HOW ARTICELLA BEGAN</span><h2>Medicine with<br><em>more room for meaning.</em></h2><p>Dr. Rahul Singh saw how often care felt rushed and disconnected, with prevention pushed aside. He founded Articella to bring the science of medicine and the soul of care back together.</p><p>Even the name speaks to that purpose. Articella draws from a medieval medical compendium, a reminder that knowledge grows through learning and human connection.</p><div class="demo-story-signature"><img src="assets/rahul.jpg" alt="Dr. Rahul Singh"><span><strong>Dr. Rahul Singh</strong><small>Founder · MD, MMM, FACP</small></span></div></div></section>
  <section class="demo-values demo-section"><div class="demo-section-heading"><span class="demo-kicker">WHAT GUIDES US</span><h2>Three principles.<br>One way of caring.</h2></div><div class="demo-value-grid"><article><span>${icon('heart')}</span><h3>Empathy</h3><p>Listen closely. Respect each person’s circumstances, questions, and hopes.</p></article><article><span>${icon('shield')}</span><h3>Transparency</h3><p>Explain the reason for a recommendation and make choices easier to understand.</p></article><article><span>${icon('spark')}</span><h3>Excellence</h3><p>Bring clinical knowledge, thoughtfulness, and continuous learning into care.</p></article></div></section>
  <section class="demo-team demo-section" id="our-team"><div class="demo-section-heading"><span class="demo-kicker">THE ARTICELLA TEAM</span><h2>Get to know the people.</h2><p>From clinical care to the first welcome at the front desk, each person plays a part in the patient experience.</p></div><div class="demo-team-grid demo-about-team">${[['rahul.jpg','Dr. Rahul Singh','Physician · Founder',0],['sylaza.webp','Dr. Sylaza Kantamneni','Physician · Internal Medicine',1],['anupa.webp','Anupa Adhikari','Nurse Practitioner',2],['meghna.jpg','Meghna Nagpal, MBBS','Practice Manager',3],['trish.jpg','Trish Stafford','Front Desk Coordinator',4]].map(([img,n,r,i])=>`<article class="demo-person"><div class="demo-person-photo"><img src="assets/${img}" loading="lazy" alt="${n}"></div><div class="demo-person-meta"><div><h3>${n}</h3><p>${r}</p></div><button class="demo-person-link" data-team-profile="${i}">Learn more</button></div></article>`).join('')}</div></section>
  <section class="demo-local demo-section"><div><span class="demo-kicker">RIGHT HERE IN FRISCO</span><h2>Care with a sense of place.</h2><p>Articella is a local practice built for ongoing conversations. Find us in Frisco, ask a practical question, or take the first step toward a visit.</p><div class="demo-hero-actions">${book('Book an appointment')}<a href="tel:+12148726502" class="demo-text-link">Call or text the team</a></div></div><div class="demo-local-image"><img src="assets/care-interior.webp" loading="lazy" alt="Welcoming, naturally lit care space"></div></section>
</div>`;
const demoLabels = {providers:'Providers',services:'Services',service:'Service',memberships:'Memberships','new-patients':'New Patients',insurance:'Insurance & Billing',insights:'Insights & Events',faq:'FAQs',locations:'Locations',contact:'Contact',portal:'Patient Portal',privacy:'Privacy',terms:'Terms'};
const demoPlaceholder = (key) => `<div class="demo-page"><section class="demo-placeholder"><span class="demo-kicker">ARTICELLA · ${demoLabels[key]||'EXPLORE'}</span><div class="demo-placeholder-mark" aria-hidden="true"></div><h1>${demoLabels[key]||'This page'} is taking shape.</h1><p>We’re preparing this part of the Articella experience. For this presentation, explore the finished Home and About pages.</p><div><a class="button button-dark" href="#/">Explore Home</a><a class="demo-text-link" href="#/about">Read our story</a></div></section></div>`;
const svcIcons = {
  preventive:'<path d="M16 3 27 7v8c0 7-4.5 11-11 14C9.5 26 5 22 5 15V7l11-4Z"/><path d="m11 16 3.5 3.5L21 13"/>',
  womens:'<circle cx="16" cy="12" r="7"/><path d="M16 19v9m-5-4.5h10"/>',
  heart:'<path d="M16 27 5.5 16.5a7 7 0 0 1 10-10l.5.5.5-.5a7 7 0 0 1 10 10L16 27Z"/><path d="M7 16h5l2-3 3 6 2-3h6"/>',
  diabetes:'<path d="M16 3C12 9 8 14 8 19a8 8 0 0 0 16 0c0-5-4-10-8-16Z"/><path d="M13 20h6m-3-3v6"/>',
  thyroid:'<path d="M16 11c-2.5-4-8-5-10-1.5-2.5 5 1.5 13 7 14.5l3-3 3 3c5.5-1.5 9.5-9.5 7-14.5-2-3.5-7.5-2.5-10 1.5Z"/><path d="M16 11v10"/>',
  medicare:'<rect x="7" y="5" width="18" height="23" rx="3"/><path d="M12 11h8m-8 5h8m-8 5h4m5-1 2 2 4-4"/>',
  phone:'<path d="M7 4h4l2 6-3 2a14 14 0 0 0 7 7l2-3 6 2v4a3 3 0 0 1-3 3C13 25 5 17 4 7a3 3 0 0 1 3-3Z"/>',
  calendar:'<rect x="4" y="6" width="24" height="22" rx="3"/><path d="M10 3v6m12-6v6M4 14h24m-18 6h6"/>',
  door:'<path d="M6 28V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v22M3 28h26"/><circle cx="17" cy="17" r="1.2"/>'
};
const svcIcon = (name) => `<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${svcIcons[name]}</svg>`;
const svcList = [
  ['preventive','Preventive care','preventive-care','Checkups, screenings, vaccines and a plan for staying well.'],
  ['womens','Women’s health','womens-health','Screenings, birth control, menopause and everyday questions.'],
  ['heart','Heart health','heart-health','Blood pressure, cholesterol and a clear view of your risk.'],
  ['diabetes','Diabetes care','diabetes-care','Monitoring, medicines and steady follow-up over time.'],
  ['thyroid','Thyroid care','thyroid-care','Symptoms, lab testing and next steps you can follow.'],
  ['medicare','Medicare visits','medicare','Annual wellness visits and help with coverage questions.']
];
const svcSteps = [
  ['calendar','Pick a time','Book online, or call or text (214) 872-6502. Same-week visits are often available.'],
  ['phone','We confirm the visit','The team checks the visit type and answers questions about coverage.'],
  ['door','Come in','Visit us at 10234 Coit Rd, Suite 100 in Frisco. Bring your medications and questions.']
];
const svcFaqs = [
  ['Can I ask which visit is appropriate?','Yes. <a href="tel:+12148726502">Call or text the team</a> to talk through the type of appointment you are looking for.'],
  ['Do you offer virtual visits?','Telehealth is listed among the current services. Appointment availability and eligible visit types should be confirmed with the clinic.'],
  ['How can I see whether my insurance is accepted?','Review the Insurance & Billing page and confirm your specific plan with the practice before your visit.']
];
const svcDetailsAccordion = (items) => `<div class="cat-list" data-faq-accordion>${items.map(([t,who,exp],i)=>{const pid='svcdp'+i,tid='svcdt'+i;return `<div class="cat-item"><h3 class="cat-h"><button type="button" class="cat-trigger" id="${tid}" aria-expanded="false" aria-controls="${pid}"><span class="cat-text"><span class="cat-title">${t}</span><span class="cat-sub">${who}</span></span><span class="cat-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></span></button></h3><div class="cat-panel" id="${pid}" role="region" aria-labelledby="${tid}"><div class="cat-panel-inner"><p><strong>What to expect</strong>${exp}</p><button type="button" class="svc-ask book-trigger">Ask about a visit <span aria-hidden="true">→</span></button></div></div></div>`;}).join('')}</div>`;
const demoServices = () => `<div class="demo-page svc-page">
  <section class="svc-hero"><div class="svc-hero-copy"><h1>Primary care,<br><em>made simple.</em></h1><p>Checkups, ongoing condition care and same-week visits with one team in Frisco, Texas.</p><div class="svc-actions">${book('Book appointment')}<a class="demo-text-link" href="tel:+12148726502">Call or text (214) 872-6502</a><a class="demo-text-link" href="#/providers">Meet the clinicians</a></div><p class="svc-hero-note">Visit types and appointment availability are confirmed by the practice.</p></div><div class="svc-hero-media"><img src="assets/home-primary-care-2026.webp" alt="Illustrative clinician talking with a patient during a primary care visit" fetchpriority="high"></div></section>
  <section class="svc-section svc-pathways" id="svcPathways" aria-labelledby="svcPathwaysTitle"><div class="svc-heading"><h2 id="svcPathwaysTitle">The right care for<br><em>this moment.</em></h2></div><div class="svc-paths">${services.map((item,i)=>`<article class="svc-path"><div class="svc-path-photo"><img src="${['assets/care-prevention.jpg','assets/care-treatment.jpg','assets/care-followup.jpg'][i]}" loading="lazy" alt="${['Illustrative preventive health check','Illustrative patient discussing a concern with a clinician','Illustrative clinical follow-up conversation'][i]}"></div><div class="svc-path-body"><h3>${item[1]}</h3><p>${item[2]}</p><button type="button" class="svc-path-link" data-scroll-target="svcDetails">See visit types <span aria-hidden="true">→</span></button></div></article>`).join('')}</div></section>
  <section class="svc-section svc-details" id="svcDetails" aria-labelledby="svcDetailsTitle"><div class="svc-details-wrap"><div class="svc-details-head"><h2 id="svcDetailsTitle">Explore the details</h2><p class="svc-faq-sub">Open a service for who it may help and what to discuss with the practice.</p></div>${svcDetailsAccordion(serviceDetails)}<div class="svc-help-card"><div><h3>Need help choosing?</h3><p>Start with a conversation. The team can help you identify the right appointment type and confirm current availability.</p></div><button class="button svc-end-button book-trigger" type="button">Ask about an appointment</button></div></div></section>
  <section class="svc-section" id="svcList"><div class="svc-heading"><h2>What we help with</h2></div><div class="svc-grid">${svcList.map(([ic,t,slug,d])=>`<a class="svc-card" href="#/service/${slug}"><span class="svc-card-icon">${svcIcon(ic)}</span><h3>${t}</h3><p>${d}</p><span class="svc-card-link">Learn more <span aria-hidden="true">→</span></span></a>`).join('')}</div><p class="svc-also"><strong>Also available:</strong> sick visits, telehealth, labs and referrals, immunizations, and men’s health.</p></section>
  <section class="svc-section svc-booking"><div class="svc-heading"><h2>Booking is simple</h2></div><ol class="svc-steps">${svcSteps.map(([ic,t,d])=>`<li><span class="svc-card-icon">${svcIcon(ic)}</span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol></section>
  <section class="svc-section svc-faq-section" id="svcFaq" aria-labelledby="svcFaqTitle"><div class="svc-faq-wrap"><div class="svc-faq-head"><h2 id="svcFaqTitle">FAQs</h2><p class="svc-faq-sub">Everything you need to know before you book</p><p class="svc-faq-contact">Can’t find what you’re looking for? Reach out to the <a href="tel:+12148726502">Articella team</a> at (214) 872-6502 for assistance.</p></div>${faqAccordion(svcFaqs)}</div></section>
  <section class="svc-end-section"><div class="svc-end"><div><h2>Not sure where to start?</h2><p>Tell us what is on your mind. The team will help you choose the right visit.</p></div><div class="svc-actions"><button class="button svc-end-button book-trigger" type="button">Book appointment</button><a class="svc-end-link" href="tel:+12148726502">Call or text the team</a></div></div></section>
</div>`;
renderers['']=demoHome;renderers.about=()=>`<div class="about-restored">${about()}</div>`;
Object.keys(renderers).forEach(key=>{if(key!==''&&key!=='about'&&key!=='service')renderers[key]=()=>demoPlaceholder(key)});
renderers.services=demoServices;renderers['new-patients']=demoNewPatients;renderers.insurance=demoInsurance;renderers.contact=()=>`<div class="contact-restored">${contact()}</div>`;
render();

/* Stories rotator: one review at a time, cross-fading on an interval. Re-queries the DOM each tick so it survives route re-renders. */
(function(){
  function setActive(rot,next){
    var cards=[].slice.call(rot.querySelectorAll('.review-card'));
    if(!cards.length)return;
    next=((next%cards.length)+cards.length)%cards.length;
    cards.forEach(function(c,i){c.classList.toggle('is-active',i===next);});
    var dots=rot.parentElement?rot.parentElement.querySelectorAll('.review-dots button'):[];
    [].forEach.call(dots,function(d,i){d.classList.toggle('is-active',i===next);});
  }
  function current(rot){
    var cards=[].slice.call(rot.querySelectorAll('.review-card'));
    var i=cards.findIndex(function(c){return c.classList.contains('is-active');});
    return i<0?0:i;
  }
  setInterval(function(){
    var rot=document.querySelector('.demo-full-home .stories-rotator');
    if(!rot||rot.matches(':hover'))return;
    if(rot.querySelectorAll('.review-card').length<2)return;
    setActive(rot,current(rot)+1);
  },4500);
  document.addEventListener('click',function(e){
    var btn=e.target.closest&&e.target.closest('.review-dots button');
    if(!btn)return;
    var wrap=btn.closest('.stories-center');
    var rot=wrap&&wrap.querySelector('.stories-rotator');
    if(!rot)return;
    var dots=[].slice.call(btn.parentElement.children);
    setActive(rot,dots.indexOf(btn));
  });
})();

/* FAQ accordion: single-open toggle. Delegated on document so it survives route re-renders. The whole row is a <button>, so keyboard (Enter/Space) and aria-expanded come for free. */
document.addEventListener('click',function(e){
  var btn=e.target.closest&&e.target.closest('.faq-trigger,.cat-trigger');
  if(!btn)return;
  var item=btn.closest('.faq-item,.cat-item');
  var acc=btn.closest('[data-faq-accordion]');
  var wasOpen=item.classList.contains('is-open');
  if(acc){[].forEach.call(acc.querySelectorAll('.faq-item.is-open,.cat-item.is-open'),function(it){
    it.classList.remove('is-open');
    var b=it.querySelector('.faq-trigger,.cat-trigger');
    if(b)b.setAttribute('aria-expanded','false');
  });}
  if(!wasOpen){item.classList.add('is-open');btn.setAttribute('aria-expanded','true');}
});

/* Category rows (Explore the details): with a real pointer, hovering a row reveals it and leaving the list closes it.
   Touch uses tap (the shared handler above), keyboard users open a row by focusing it. One row is open at a time. */
(function(){
  var mq=window.matchMedia?window.matchMedia('(hover:hover) and (pointer:fine)'):{matches:false};
  function setOpen(item,on){
    item.classList.toggle('is-open',on);
    var b=item.querySelector('.cat-trigger');
    if(b)b.setAttribute('aria-expanded',on?'true':'false');
  }
  function openOnly(item){
    var list=item.closest('.cat-list');
    if(list)[].forEach.call(list.querySelectorAll('.cat-item.is-open'),function(it){if(it!==item)setOpen(it,false);});
    setOpen(item,true);
  }
  document.addEventListener('mouseover',function(e){
    if(!mq.matches||!e.target.closest)return;
    var item=e.target.closest('.cat-item');
    if(item&&!item.classList.contains('is-open'))openOnly(item);
  });
  document.addEventListener('mouseout',function(e){
    if(!mq.matches||!e.target.closest)return;
    var list=e.target.closest('.cat-list');
    if(!list||list.contains(e.relatedTarget))return;
    if(list.querySelector('.cat-trigger:focus-visible'))return;
    [].forEach.call(list.querySelectorAll('.cat-item.is-open'),function(it){setOpen(it,false);});
  });
  document.addEventListener('focusin',function(e){
    var t=e.target;
    if(t.matches&&t.matches('.cat-trigger:focus-visible'))openOnly(t.closest('.cat-item'));
  });
  /* On hover devices a click only keeps the row open; it must not toggle it shut. Runs before the shared handler. */
  document.addEventListener('click',function(e){
    var btn=e.target.closest&&e.target.closest('.cat-trigger');
    if(!btn||!mq.matches)return;
    e.stopImmediatePropagation();
    openOnly(btn.closest('.cat-item'));
  },true);
})();

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
renderers['']=demoHome;renderers.about=()=>`<div class="about-restored">${about()}</div>`;
Object.keys(renderers).forEach(key=>{if(key!==''&&key!=='about')renderers[key]=()=>demoPlaceholder(key)});
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
  var btn=e.target.closest&&e.target.closest('.faq-trigger');
  if(!btn)return;
  var item=btn.closest('.faq-item');
  var acc=btn.closest('[data-faq-accordion]');
  var wasOpen=item.classList.contains('is-open');
  if(acc){[].forEach.call(acc.querySelectorAll('.faq-item.is-open'),function(it){
    it.classList.remove('is-open');
    var b=it.querySelector('.faq-trigger');
    if(b)b.setAttribute('aria-expanded','false');
  });}
  if(!wasOpen){item.classList.add('is-open');btn.setAttribute('aria-expanded','true');}
});

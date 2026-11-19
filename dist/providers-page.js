/* Providers page. Provider data below is the single source: add an entry and the gallery + profile are generated.
   Content comes from the original Providers page on main. Each photo is rendered once (in the gallery); profiles are text-led. */
(() => {
  const ic = {
    prev: '<path d="m15 5-7 7 7 7"/>',
    next: '<path d="m9 5 7 7-7 7"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4V5Z"/><path d="M8 9.5h8M8 12.5h5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16 9.5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M8 3v4M16 3v4M3.5 10h17"/>'
  };
  const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic[n]}</svg>`;

  // Brand-book pattern (p.18): concentric arches. Drawn as an SVG so it scales without loss.
  const pattern = () => `<svg class="pv-pattern" viewBox="0 0 760 900" fill="none" stroke="currentColor" stroke-width="12" aria-hidden="true">${Array.from({ length: 11 }, (_, i) => { const r = 24 * (i + 1); return `<path d="M${300 - r} 900V280A${r} ${r} 0 0 1 ${300 + r} 280V900"/>`; }).join("")}</svg>`;

  const team = [
    { id: 'doctor-rahul-singh', img: 'assets/rahul.jpg', pos: '50% 20%', name: 'Dr. Rahul Singh', cred: 'MD, MMM, FACP', title: 'Founder · Internal Medicine',
      blurb: 'Prevention and long-term care',
      lead: 'A physician and healthcare leader whose approach puts prevention and the long-term relationship in focus.',
      areas: ['Preventive care', 'Long-term wellness', 'Physician-led relationships'],
      facts: [['Experience', 'More than 15 years'], ['Background', 'Clinical care and healthcare leadership']],
      more: ['MGM Medical College, Navi Mumbai. Residency and internship at the University of Maryland Midtown Campus. Master’s in Medical Management from Carnegie Mellon University.', 'Experience as a clinician, mentor and leader.'] },
    { id: 'doctor-sylaza-kantamneni', img: 'assets/sylaza.webp', pos: '50% 25%', name: 'Dr. Sylaza Kantamneni', cred: 'MD', title: 'Board-certified · Internal Medicine',
      blurb: 'Adult primary care and chronic care',
      lead: 'Adult primary care grounded in preventive care, chronic condition management and patient education.',
      areas: ['Adult primary care', 'Prevention', 'Chronic conditions'],
      facts: [['Experience', 'More than 18 years'], ['Care focus', 'Adult primary care · Prevention · Chronic conditions']],
      more: ['JJM Medical College. Board-certified Internal Medicine physician with more than 18 years of experience.', 'An approach built on open communication and helping adults understand decisions about their health.'] },
    { id: 'doctor-anupa-adhikari', img: 'assets/anupa.webp', pos: '50% 22%', name: 'Anupa Adhikari', cred: 'AGACNP-BC', title: 'Nurse Practitioner · Adult-Gerontology Acute Care',
      blurb: 'Hospital and critical care background',
      lead: 'A nurse practitioner with experience spanning hospital and critical care settings and an interest in wellness.',
      areas: ['Patient education', 'Wellness support'],
      facts: [['Experience', 'Nearly 10 years'], ['Background', 'Hospital · Critical care · Wellness']],
      more: ['Master’s degree from the University of Texas at Arlington. Experience in hospital, critical care and aesthetic settings.', 'Visit types and scheduling availability are confirmed with the practice.'] }
  ];

  const card = (p, i) => `<li class="pv-card" role="group" aria-roledescription="slide"><button type="button" data-pv-open="${i}" aria-haspopup="dialog" aria-label="View profile: ${p.name}">
    <span class="pv-card-photo"><img src="${p.img}" alt="${p.name}" loading="lazy" style="object-position:${p.pos}"></span>
    <span class="pv-card-body"><b>${p.name}</b><em>${p.title}</em><small>${p.blurb}</small><span class="pv-card-link">View profile ${svg('arrow')}</span></span></button></li>`;

  const profile = p => `<div class="pv-m-photo"><img src="${p.img}" alt="${p.name}" style="object-position:${p.pos}"></div>
    <div class="pv-m-copy"><div class="pv-topline">${p.title}</div><h2 id="pv-m-title">${p.name}</h2><div class="pv-cred">${p.cred}</div>
      <p class="pv-lead">${p.lead}</p>
      <ul class="pv-areas" aria-label="Areas of focus">${p.areas.map(a => `<li>${a}</li>`).join('')}</ul>
      <dl class="pv-facts">${p.facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl>
      <div class="pv-bio"><h4>Education &amp; background</h4>${p.more.map(t => `<p>${t}</p>`).join('')}</div>
      <div class="pv-actions"><button type="button" class="button button-dark book-trigger">Ask about an appointment</button><a class="pv-link" href="tel:+12148726502">${svg('phone')}Call the practice</a></div></div>`;

  const page = () => `<div class="demo-page pv">
    <section class="pv-hero">
            <div class="pv-hero-copy"><span class="demo-kicker"><span class="kicker-line"></span> YOUR CARE TEAM / FRISCO</span>
        <h1>Meet the people<br><em>behind your care.</em></h1>
        <p>Thoughtful, continuous care starts with people who take the time to know you. Get to know the clinicians at Articella before you ask about an appointment.</p></div>
      ${pattern()}
    </section>
    <section class="pv-gallery" id="pv-gallery" aria-labelledby="pv-gallery-h" tabindex="-1">
      <div class="pv-gallery-head" data-reveal><div><span class="demo-kicker">MEET OUR CARE TEAM</span><h2 id="pv-gallery-h">A closer look at your clinicians.</h2></div>
        <div class="pv-ctrl"><span class="pv-count" aria-live="polite"></span><button type="button" class="pv-nav" data-pv-dir="-1" aria-label="Previous clinicians">${svg('prev')}</button><button type="button" class="pv-nav" data-pv-dir="1" aria-label="Next clinicians">${svg('next')}</button></div></div>
      <ul class="pv-track" aria-roledescription="carousel" aria-label="Articella clinicians" tabindex="0">${team.map(card).join('')}</ul>
    </section>
    <dialog class="pv-modal" id="pvModal" aria-labelledby="pv-m-title"><button type="button" class="pv-m-close" aria-label="Close profile">${svg('x')}</button><div class="pv-m-body"></div></dialog>
    <section class="pv-help"><div class="pv-help-head" data-reveal><span class="demo-kicker">NOT SURE WHERE TO START?</span><h2>Choose a conversation,<br><em>then a time.</em></h2><p>Tell the office what you are looking for. The team can confirm the suitable clinician and available visit types. This page does not recommend care.</p>
      <a class="button button-light" href="tel:+12148726502">Talk to Our Team</a></div>
      <ol>${[['Read a profile', 'Learn who is on the clinical team and what they focus on.', 'check'], ['Tell the office what you need', 'Call or text and describe the kind of visit you are seeking.', 'chat'], ['Confirm a clinician and time', 'The team will check availability before your visit.', 'cal']].map(([h, t, i], k) => `<li data-reveal style="--i:${k}"><span class="pv-ico">${svg(i)}</span><small>0${k + 1}</small><h3>${h}</h3><p>${t}</p></li>`).join('')}</ol></section>
    <section class="pv-cta"><div data-reveal><h2>Your next step can be a simple one.</h2><p>Book a visit or reach the office. We’ll help from there.</p></div>
      <div class="pv-cta-actions" data-reveal style="--i:1"><button type="button" class="button button-dark book-trigger">Book an Appointment</button><a class="pv-link" href="tel:+12148726502">${svg('phone')}Call or Text</a></div></section>
  </div>`;

  const reduce = () => matchMedia('(prefers-reduced-motion:reduce)').matches;

  function init() {
    const root = document.querySelector('.pv'); if (!root) return;
    const els = [...root.querySelectorAll('[data-reveal]')];
    if (!('IntersectionObserver' in window) || reduce()) els.forEach(e => e.classList.add('is-in'));
    else { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .15, rootMargin: '0px 0px -6% 0px' }); els.forEach(e => io.observe(e)); }

    const track = root.querySelector('.pv-track'), prev = root.querySelector('[data-pv-dir="-1"]'), next = root.querySelector('[data-pv-dir="1"]'), count = root.querySelector('.pv-count');
    const cards = [...track.children];
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      prev.disabled = track.scrollLeft <= 2; next.disabled = track.scrollLeft >= max;
      root.querySelector(".pv-count").hidden = max <= 0;
      const mid = track.scrollLeft + track.clientWidth / 2;
      const cur = cards.findIndex(c => c.offsetLeft + c.offsetWidth > mid - 1);
      count.textContent = `${Math.max(cur, 0) + 1} / ${cards.length}`;
    };
    const step = () => (cards[1] ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth);
    root.querySelectorAll('.pv-nav').forEach(b => b.addEventListener('click', () => track.scrollBy({ left: step() * +b.dataset.pvDir, behavior: reduce() ? 'auto' : 'smooth' })));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    addEventListener('resize', update);
    track.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); track.scrollBy({ left: step() * (e.key === 'ArrowRight' ? 1 : -1), behavior: reduce() ? 'auto' : 'smooth' }); } });
    update();

    // Profile pop-up. The photo is rendered inside the dialog only while it is open.
    const dlg = root.querySelector(".pv-modal"), body = dlg.querySelector(".pv-m-body"); let opener = null;
    const open = (i, from) => { opener = from; body.innerHTML = profile(team[i]); dlg.scrollTop = 0; document.documentElement.classList.add("pv-lock"); dlg.showModal(); };
    const close = () => { if (!dlg.open) return; dlg.classList.add("is-closing"); const done = () => { dlg.classList.remove("is-closing"); dlg.close(); }; reduce() ? done() : setTimeout(done, 180); };
    root.addEventListener("click", e => { const t = e.target.closest("[data-pv-open]"); if (t) open(+t.dataset.pvOpen, t); });
    dlg.addEventListener("click", e => { if (e.target === dlg || e.target.closest(".pv-m-close") || e.target.closest(".book-trigger")) close(); });
    dlg.addEventListener("cancel", e => { e.preventDefault(); close(); });
    dlg.addEventListener("close", () => { document.documentElement.classList.remove("pv-lock"); body.innerHTML = ""; if (opener && !document.querySelector("dialog[open]")) opener.focus(); });
  }

  renderers.providers = () => { setTimeout(init, 0); return page(); };
  if ((location.hash || '').replace(/^#\/?/, '').split(/[/?]/)[0] === 'providers') render();
})();

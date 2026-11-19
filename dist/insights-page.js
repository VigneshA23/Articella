/* Insights & Events page. `items` is the single data source: add an entry and the featured slot, grid, filters,
   search and recent posts all update. Only the three entries below come from articella.com/blog (all dated Feb 9, 2026).
   Photos are Unsplash stock (free licence), not Articella photography. */
(() => {
  const PAGE = 6;          // cards per "Load more" step
  const RECENT_MIN = 6;    // Recent posts only appears once the library is big enough to need it
  const types = { insight: 'Insights', news: 'News', event: 'Events' };
  const items = [
    { type: 'insight', featured: true, title: 'Preventive Screenings: What You Need and When',
      excerpt: 'An overview of key checkups and immunizations, based on age, sex, and health risks.',
      date: '2026-02-09', url: 'https://www.articella.com/preventive-screenings-what-you-need-and-when/',
      img: 'assets/insights-screenings.jpg', alt: 'A stethoscope resting on a clinic bed', cta: 'Read Article',
      keywords: 'prevention checkups immunizations vaccines screening health risks' },
    { type: 'news', title: 'Now Accepting More Insurance Plans',
      excerpt: 'The practice has expanded the insurance plans it accepts, adding carriers such as Aetna and Cigna.',
      date: '2026-02-09', url: 'https://www.articella.com/now-accepting-more-insurance-plans/',
      img: 'assets/insights-insurance.jpg', alt: 'Three people laughing together over a laptop at a table', cta: 'Read More',
      keywords: 'insurance coverage aetna cigna plans billing' },
    { type: 'event', title: 'Free Wellness Q&A This Saturday',
      excerpt: 'Dr. Singh leads a free community health session at the Frisco Library.',
      date: '2026-02-09', url: 'https://www.articella.com/free-wellness-qa-this-saturday/',
      img: 'assets/insights-event.jpg', alt: 'Friends in conversation around a table', cta: 'View Details',
      keywords: 'community wellness q&a frisco library dr singh free session', note: 'Event announcement' }
  ];

  const fmt = d => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const ic = {
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/>',
    arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>'
  };
  const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic[n]}</svg>`;
  // Brand-book pattern: concentric arches.
  const pattern = () => `<svg class="ins-pattern" viewBox="0 0 760 900" fill="none" stroke="currentColor" stroke-width="12" aria-hidden="true">${Array.from({ length: 11 }, (_, i) => { const r = 24 * (i + 1); return `<path d="M${300 - r} 900V280A${r} ${r} 0 0 1 ${300 + r} 280V900"/>`; }).join('')}</svg>`;

  const meta = it => `<span class="ins-tag">${types[it.type]}</span><span class="ins-date">${it.note ? it.note + ' · ' : ''}${fmt(it.date)}</span>`;
  const card = it => `<article class="ins-card" data-reveal><a class="ins-card-link" href="${it.url}" target="_blank" rel="noopener" aria-label="${it.title} (opens articella.com)"><div class="ins-img"><img src="${it.img}" alt="${it.alt}" loading="lazy"></div><div class="ins-card-body"><div class="ins-meta">${meta(it)}</div><h3>${it.title}</h3><p>${it.excerpt}</p><span class="ins-more">${it.cta} ${svg('arrow')}</span></div></a></article>`;
  const recent = () => {
    const list = [...items].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);
    return `<aside class="ins-recent"><h2>Recent posts</h2>${list.map(it => `<a href="${it.url}" target="_blank" rel="noopener"><img src="${it.img}" alt="" loading="lazy"><span><b>${it.title}</b><small>${fmt(it.date)}</small></span></a>`).join('')}</aside>`;
  };

  const page = () => {
    const f = items.find(i => i.featured) || items[0];
    return `<div class="ins-page" id="insPage">
<section class="ins-hero">${pattern()}<div class="ins-hero-copy"><span class="ins-kicker">PATIENT RESOURCES</span><h1>Insights, News &amp; Wellness Tips</h1><p>Thoughtful health information, practice updates, and community events to help you stay informed and take an active role in your wellness journey.</p></div><div class="ins-hero-img"><img src="assets/insights-hero.jpg" alt="Friends standing arm in arm looking out over hills at sunset"></div></section>
<section class="ins-featured" data-reveal><div class="ins-featured-card"><div class="ins-featured-img"><img src="${f.img}" alt="${f.alt}"></div><div class="ins-featured-copy"><span class="ins-kicker">FEATURED</span><div class="ins-meta">${meta(f)}</div><h2>${f.title}</h2><p>${f.excerpt} Talk with your clinician about what is right for you.</p></div></div></section>
<section class="ins-library" id="insLibrary"><div class="ins-toolbar"><div class="ins-filters" role="group" aria-label="Filter by category">${['all', ...Object.keys(types)].map((k, i) => `<button type="button" data-ins-type="${k}" aria-pressed="${i === 0}" class="${i === 0 ? 'active' : ''}">${k === 'all' ? 'All' : types[k]}</button>`).join('')}</div><label class="ins-search">${svg('search')}<input id="insSearch" type="search" placeholder="Search articles and events" aria-label="Search articles and events" autocomplete="off"></label></div>
<p class="ins-count" id="insCount" aria-live="polite"></p>
<div class="ins-layout"><div class="ins-main"><div class="ins-grid" id="insGrid"></div>
<div class="ins-empty" id="insEmpty" hidden><h3>Nothing matches yet.</h3><p>Try a different word or category.</p><button type="button" class="ins-reset" data-ins-reset>${svg('x')} Reset search and filters</button></div>
<div class="ins-loadmore" id="insMoreWrap" hidden><button type="button" id="insMore">Load more</button></div></div>${items.length >= RECENT_MIN ? recent() : ''}</div></section>
<section class="ins-cta" data-reveal><div><h2>Questions about your care?</h2><p>Our Frisco team is happy to help you find the right next step.</p></div><div class="ins-cta-actions"><button type="button" class="button button-dark book-trigger">Explore appointments</button><a class="ins-call" href="tel:+12148726502">${svg('phone')} Call or text (214) 872-6502</a></div></section>
</div>`;
  };

  function init() {
    const root = document.getElementById('insPage');
    if (!root) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const st = { type: 'all', q: '', shown: PAGE };
    const grid = root.querySelector('#insGrid'), empty = root.querySelector('#insEmpty'), wrap = root.querySelector('#insMoreWrap'), count = root.querySelector('#insCount');
    const featured = items.find(i => i.featured) || items[0];

    const io = !reduce && 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
    const reveal = scope => scope.querySelectorAll('[data-reveal]:not(.in)').forEach(el => io ? io.observe(el) : el.classList.add('in'));

    function draw(animate) {
      const q = st.q.trim().toLowerCase();
      const pool = items.filter(i => (st.type === 'all' || i.type === st.type) && (!q || `${i.title} ${i.excerpt} ${i.keywords} ${types[i.type]}`.toLowerCase().includes(q)));
      // The featured piece already sits above the grid, so hide it there until the reader narrows the view.
      const list = st.type === 'all' && !q ? pool.filter(i => i !== featured) : pool;
      const apply = () => {
        grid.innerHTML = list.slice(0, st.shown).map(card).join('');
        empty.hidden = list.length > 0;
        wrap.hidden = list.length <= st.shown;
        count.textContent = `${list.length} ${list.length === 1 ? 'item' : 'items'}`;
        reveal(grid);
        grid.classList.remove('is-out');
      };
      if (animate && !reduce) { grid.classList.add('is-out'); setTimeout(apply, 160); } else apply();
    }
    const setType = t => { st.type = t; st.shown = PAGE; root.querySelectorAll('[data-ins-type]').forEach(b => { const on = b.dataset.insType === t; b.classList.toggle('active', on); b.setAttribute('aria-pressed', on); }); draw(true); };

    root.addEventListener('click', e => {
      const t = e.target.closest('[data-ins-type]'); if (t) return setType(t.dataset.insType);
      if (e.target.closest('#insMore')) { st.shown += PAGE; return draw(false); }
      if (e.target.closest('[data-ins-reset]')) { st.q = ''; root.querySelector('#insSearch').value = ''; setType('all'); }
    });
    root.querySelector('#insSearch').addEventListener('input', e => { st.q = e.target.value; st.shown = PAGE; draw(false); });
    reveal(root); draw(false);
  }

  renderers.insights = () => { setTimeout(init, 0); return page(); };
  if ((location.hash || '').replace(/^#\/?/, '').split(/[/?]/)[0] === 'insights') render();
})();

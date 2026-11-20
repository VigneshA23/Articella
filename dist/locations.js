/* Locations page. Loaded after memberships.js so it replaces the older locations renderer.
   Nav, footer and booking dialog are the site's own. Styles live in locations.css, scoped to .loc-page. */
(() => {
const locationsPage = () => `<div class="loc-page">
<section class="loc"><div class="lw locgrid"><aside class="lcard">
 <div class="leyebrow">Our location</div>
 <h1>Visit us in <span>Frisco</span></h1>
 <p class="addr"><b>10234 Coit Rd, Suite 100</b>Frisco, TX 75035</p>
 <div class="lstatus" id="st"><i></i><span>Checking hours…</span></div>
 <div class="acts"><a class="lbtn" id="dir" target="_blank" rel="noopener" href="#">Get directions</a><a class="lbtn o" href="tel:+12148726502">Call (214) 872-6502</a></div>
 <p class="mail"><a href="mailto:care@articella.com">care@articella.com</a></p>
 <div class="hrs" id="hrs"><b class="lt" data-r="0">Mon – Fri</b><span data-r="0">8:30 AM – 4:30 PM</span><b class="lt" data-r="1">Saturday</b><span data-r="1">8:30 AM – 12:00 PM</span><b class="lt" data-r="2">Sunday</b><span data-r="2">Closed</span></div>
 <div class="from"><p>Where are you coming from?</p><div class="chips" id="chips"></div><div id="info"></div></div>
 <div class="soon"><span>More Articella locations are coming soon.</span><a href="#expand" data-loc-scroll="expand">Get notified</a></div>
</aside><div class="stage">
<svg id="map" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Map of Frisco, Texas showing the Articella clinic and routes from nearby cities">
 <defs>
  <pattern id="hs" width="15" height="24" patternUnits="userSpaceOnUse"><rect x="2" y="3" width="10" height="7" rx="1.2" fill="#e8eaf3"/><rect x="2" y="14" width="10" height="7" rx="1.2" fill="#e8eaf3"/></pattern>
  <clipPath id="vp"><rect width="1600" height="900"/></clipPath>
 </defs>
 <rect x="-200" y="-200" width="2000" height="1300" fill="#f1f2f8"/>
 <g id="view">
  <g id="cells"></g>
  <g id="nature"></g>
  <g id="roads"></g>
  <g id="shields"></g>
  <g id="places"></g>
  <g id="labels"></g>

  <g id="routeG"><path id="rcase" d=""/><path id="route" d=""/><g id="rflag" display="none"><circle r="6" fill="#fff" stroke="#00008B" stroke-width="3"/></g></g>
  <g id="cities"></g>
  <g id="clinic" transform="translate(1145 258)">
   <rect x="-44" y="-52" width="88" height="42" rx="3" fill="#dfe2f5" stroke="#b8bde0" stroke-width="1.5"/>
   <rect x="-58" y="-8" width="116" height="0" />
   <rect x="52" y="-50" width="56" height="34" rx="2" fill="#e8eaf3" stroke="#d0d4e6"/><g stroke="#fff" stroke-width="1.6"><path d="M62 -50v34M72 -50v34M82 -50v34M92 -50v34"/></g>
   <circle class="lring" r="30" cy="-30"/><circle class="lring" r="30" cy="-30" style="animation-delay:2.4s"/>
   <g class="pin"><path d="M0 0C-12-17-19-27-19-38a19 19 0 1 1 38 0c0 11-7 21-19 38z" fill="#00008B" stroke="#fff" stroke-width="2.5"/><circle cy="-38" r="12" fill="#fff"/><path d="M-2.6-45h5.2v4.8h4.8v5.2h-4.8v4.8h-5.2v-4.8h-4.8v-5.2h4.8z" fill="#00008B"/></g>
   <g class="pcard" transform="translate(30 -66)"><rect width="210" height="52" rx="8" fill="#fff" stroke="#d6d9ea" /><text x="12" y="22" font-size="13.5" font-weight="700" fill="#11111e">Articella Primary Care</text><text id="pst" x="12" y="40" font-size="12" font-weight="600" fill="#16794a">Open now</text></g>
  </g>
 </g>
</svg>
<div class="zoom"><button id="zin" aria-label="Zoom in">+</button><button id="zout" aria-label="Zoom out">−</button><button id="zre" aria-label="Reset" style="font-size:15px">⌖</button></div>
<div class="leg"><i></i><span>1 mi</span></div>
<div class="attr">Simplified map · approximate locations</div>
</div></div></section>

<section class="sec"><div class="lw">
 <div class="lrv"><div class="leyebrow">Getting here</div><h2>An easy drive from anywhere in Collin County</h2><p class="llead">Find us at 10234 Coit Rd, Suite 100 in Frisco, a short drive from Preston Road and the Dallas North Tollway.</p></div>
 <div class="three lrv">
  <div class="tile"><svg viewBox="0 0 32 32"><path d="M5 20l2-7a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 7v5h-3v-2H8v2H5z"/><circle cx="10" cy="19" r="1.4"/><circle cx="22" cy="19" r="1.4"/></svg><h3>By car</h3><p>Head to 10234 Coit Rd, Suite 100.</p></div>
  <div class="tile"><svg viewBox="0 0 32 32"><rect x="5" y="5" width="22" height="22" rx="4"/><path d="M13 22V10h4.5a3.5 3.5 0 0 1 0 7H13"/></svg><h3>Parking</h3><p>On-site parking steps from the front entrance.</p></div>
  <div class="tile"><svg viewBox="0 0 32 32"><circle cx="16" cy="8" r="2.6"/><path d="M16 12v7l5 6M16 19l-5 6M9 14h14"/></svg><h3>Accessibility</h3><p>Step-free entrance and accessible exam rooms.</p></div>
 </div>
</div></section>

<section class="sec" id="expand" style="padding-top:20px"><div class="lw">
 <div class="lrv"><div class="leyebrow">What's next</div><h2>We're growing across Texas</h2><p class="llead">Frisco is just the beginning. We're planning to open more Articella locations so physician-led, preventive primary care is closer to where you live.</p></div>
 <div class="three lrv">
  <div class="tile now"><span class="bdg">Open now</span><h3>Frisco</h3><p>Our first clinic, with longer visits and a physician who knows you.</p></div>
  <div class="tile nxt"><span class="bdg">Coming soon</span><h3>Our next location</h3><p>Details to be announced.</p></div>
  <div class="tile nxt"><span class="bdg">Planned</span><h3>More to come</h3><p>We're looking at additional communities across the Dallas area.</p></div>
 </div>
 <form class="nf lrv" id="nf"><div><b>Be the first to know</b><span>Get an email when a new Articella location opens.</span></div><input type="email" required placeholder="Your email address" aria-label="Email address"><button class="lbtn" type="submit">Notify me</button></form>
</div></section>
</div>`;

function initLocations() {
  const page = document.querySelector('.loc-page');
  if (!page || page.dataset.ready) return;
  page.dataset.ready = '1';

  /* ---- replace once confirmed ---- */
  const CFG = {tz: 'America/Chicago', query: 'Articella Primary Care, 10234 Coit Rd, Frisco, TX 75035', hours: {1: [8.5, 16.5], 2: [8.5, 16.5], 3: [8.5, 16.5], 4: [8.5, 16.5], 5: [8.5, 16.5], 6: [8.5, 12]}};
  const $ = id => document.getElementById(id);
  $('dir').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(CFG.query);

  /* open now */
  (function () {
    const p = new Intl.DateTimeFormat('en-US', {timeZone: CFG.tz, weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false}).formatToParts(new Date());
    const g = t => p.find(x => x.type === t).value, wd = {Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6}[g('weekday')], h = (+g('hour') % 24) + (+g('minute')) / 60;
    const f = x => { const h = Math.floor(x), m = x % 1 ? '30' : '00'; return (h % 12 || 12) + ':' + m + ' ' + (h < 12 ? 'AM' : 'PM'); }, T = CFG.hours[wd];
    let t, open = false;
    if (T && h >= T[0] && h < T[1]) { open = true; t = 'Open now · closes ' + f(T[1]); }
    else if (T && h < T[0]) t = 'Closed · opens today at ' + f(T[0]);
    else { let d = wd, a = 0; do { d = (d + 1) % 7; a++; } while (!CFG.hours[d] && a < 8); t = 'Closed · opens ' + (a === 1 ? 'tomorrow' : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d]) + ' at ' + f(CFG.hours[d][0]); }
    const s = $('st'); s.className = 'lstatus' + (open ? '' : ' c'); s.querySelector('span').textContent = t;
    const ps = $('pst'); ps.textContent = open ? 'Open · closes ' + f(T[1]) : 'Closed'; ps.setAttribute('fill', open ? '#16794a' : '#9c3d2b');
    const row = wd >= 1 && wd <= 5 ? 0 : wd === 6 ? 1 : 2;
    document.querySelectorAll('#hrs [data-r="' + row + '"]').forEach(e => { e.style.fontWeight = '700'; e.style.color = '#11111e'; });
  })();

  /* ---- map ---- */
  const NS = 'http://www.w3.org/2000/svg';
  function rng(s) { return () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
  function rounded(p, r) { let d = `M${p[0][0]} ${p[0][1]}`; for (let i = 1; i < p.length - 1; i++) { const a = p[i - 1], b = p[i], c = p[i + 1], l1 = Math.hypot(b[0] - a[0], b[1] - a[1]), l2 = Math.hypot(c[0] - b[0], c[1] - b[1]), rr = Math.min(r, l1 / 2, l2 / 2), u = [(b[0] - a[0]) / l1, (b[1] - a[1]) / l1], v = [(c[0] - b[0]) / l2, (c[1] - b[1]) / l2]; d += ` L${b[0] - u[0] * rr} ${b[1] - u[1] * rr} Q${b[0]} ${b[1]} ${b[0] + v[0] * rr} ${b[1] + v[1] * rr}`; } const l = p[p.length - 1]; return d + ` L${l[0]} ${l[1]}`; }
  const E = (t, a, h) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); if (h) e.innerHTML = h; return e; };

  /* residential superblocks between the real arterials */
  const X = [-400, 520, 760, 1010, 1280, 1480, 2100], Y = [-300, 110, 210, 300, 466, 610, 1200], R = rng(21), cells = $('cells');
  for (let i = 0; i < X.length - 1; i++) for (let j = 0; j < Y.length - 1; j++) {
    const x0 = X[i] + 13, x1 = X[i + 1] - 13, y0 = Y[j] + 13, y1 = Y[j + 1] - 13, w = x1 - x0, h = y1 - y0; if (w < 30 || h < 30) continue;
    const id = 'c' + i + j; $('map').querySelector('defs').appendChild(E('clipPath', {id}, `<rect x="${x0}" y="${y0}" width="${w}" height="${h}"/>`));
    const g = E('g', {'clip-path': `url(#${id})`}); g.appendChild(E('rect', {x: x0, y: y0, width: w, height: h, fill: 'url(#hs)'}));
    let d = '', curvy = R() > .45;
    if (!curvy) { const s = 44 + R() * 14; for (let x = x0 + s * .6; x < x1; x += s) { if (R() > .14) { const a = y0 + (R() > .7 ? R() * h * .4 : 0), b = y1 - (R() > .7 ? R() * h * .4 : 0); d += `M${x.toFixed(1)} ${a.toFixed(1)}V${b.toFixed(1)}`; } } for (let y = y0 + s * .9; y < y1; y += s * 1.35) { if (R() > .2) { const a = x0 + (R() > .7 ? R() * w * .4 : 0), b = x1 - (R() > .7 ? R() * w * .4 : 0); d += `M${a.toFixed(1)} ${y.toFixed(1)}H${b.toFixed(1)}`; } } }
    else { const n = Math.round((w * h) / 9000) + 3; for (let k = 0; k < n; k++) { let x = x0 + R() * w, y = y0 + R() * h, a = R() * 6.28; d += `M${x.toFixed(1)} ${y.toFixed(1)}`; for (let q = 0; q < 3; q++) { a += (R() - .5) * 1.7; const L = 34 + R() * 60, nx = x + Math.cos(a) * L, ny = y + Math.sin(a) * L, cx = x + Math.cos(a - .5) * L * .6, cy = y + Math.sin(a - .5) * L * .6; d += `Q${cx.toFixed(1)} ${cy.toFixed(1)} ${nx.toFixed(1)} ${ny.toFixed(1)}`; x = nx; y = ny; } g.appendChild(E('circle', {cx: x.toFixed(1), cy: y.toFixed(1), r: 4.5, fill: '#fff'})); } }
    g.appendChild(E('path', {d, stroke: '#fff', 'stroke-width': curvy ? 3 : 2.8, fill: 'none', 'stroke-linecap': 'round'})); cells.appendChild(g);
  }

  /* water + green */
  const nat = $('nature');
  nat.appendChild(E('path', {d: 'M-20 -20H250C275 18 245 58 205 78C150 100 70 92 -20 124Z', fill: '#bcd3f0'}));
  nat.appendChild(E('path', {d: 'M240 330C330 318 420 350 470 410C520 470 600 478 680 500S840 520 900 580S1000 650 1040 700', fill: 'none', stroke: '#c8dbf3', 'stroke-width': 6, 'stroke-linecap': 'round'}));
  [['M548 128H742Q750 128 750 136V196Q750 204 742 204H556Q548 204 548 196Z'], ['M1064 330C1110 318 1200 322 1236 346C1262 372 1250 420 1206 436C1150 452 1088 440 1062 408C1046 384 1046 346 1064 330Z'], ['M60 340C120 318 250 322 300 360C330 396 300 440 240 448C160 460 80 440 56 400C44 376 44 352 60 340Z'], ['M1330 640C1380 628 1450 640 1470 690C1480 730 1440 760 1380 756C1330 750 1300 700 1330 640Z']].forEach(([d]) => nat.appendChild(E('path', {d, fill: '#d9e8d2'})));

  /* roads: straight section-line roads like the real grid, with a curved SH 121 */
  const ROADS = [
    {id: 'rdnt', n: 'Dallas North Tollway', t: 'fw', p: [[520, -300], [520, 1200]], lab: [.16, .62]},
    {id: 'r121', n: 'Sam Rayburn Tollway', t: 'fw', p: [[-400, 860], [420, 810], [800, 770], [1180, 720], [1400, 640], [2100, 350]], lab: [.36, .9], r: 120},
    {id: 'r289', n: 'Preston Road', t: 'ar', p: [[1010, -300], [1010, 1200]], lab: [.1, .34]},
    {id: 'r380', n: 'University Drive', t: 'ar', p: [[-400, 110], [2100, 110]], lab: [.3, .76]},
    {id: 'rele', n: 'Eldorado Pkwy', t: 'a2', p: [[-400, 300], [2100, 300]], lab: [.12, .7]},
    {id: 'rmain', n: 'Main Street', t: 'a2', p: [[-400, 466], [2100, 466]], lab: [.16, .78]},
    {id: 'rwar', n: 'Warren Pkwy', t: 'a2', p: [[-400, 610], [1500, 610]], lab: [.28, .5]},
    {id: 'rcoi', n: 'Coit Road', t: 'a2', p: [[1145, -300], [1145, 1200]], lab: [.08, .4]},
    {id: 'rcus', n: 'Custer Road', t: 'a2', p: [[1280, -300], [1280, 1200]], lab: [.22, .74]},
    {id: 'rleg', n: 'Legacy Drive', t: 'co', p: [[760, -300], [760, 1200]], lab: [.3, .85]},
    {id: 'rind', n: 'Independence Pkwy', t: 'co', p: [[1480, -300], [1480, 610]], lab: [.3]},
    {id: 'rsto', n: 'Stonebrook Pkwy', t: 'co', p: [[-400, 210], [2100, 210]], lab: [.4]}];
  const ST = {fw: [['#dcb554', 18], ['#f8dc90', 13]], ar: [['#c3c8df', 15], ['#fff', 11]], a2: [['#cbd0e3', 12.5], ['#fff', 9]], co: [['#d5d9e8', 9], ['#fff', 6]]};
  const rg = $('roads'), lg = $('labels');
  [['co', 0], ['a2', 0], ['ar', 0], ['fw', 0]].forEach(([t]) => { ROADS.filter(r => r.t === t).forEach(r => { const d = rounded(r.p, r.r || 60); ST[t].forEach(([c, w]) => rg.appendChild(E('path', {d, class: 'rd', stroke: c, 'stroke-width': w})));
    const hid = E('path', {id: r.id, d}); hid.setAttribute('fill', 'none'); rg.appendChild(hid); }); });

  /* freeway centre line */
  ROADS.filter(r => r.t === 'fw').forEach(r => rg.appendChild(E('path', {d: rounded(r.p, r.r || 60), class: 'rd', stroke: '#e6c46c', 'stroke-width': 1, 'stroke-dasharray': '12 10'})));
  ROADS.forEach(r => (r.lab || []).forEach(o => lg.appendChild(E('text', {class: 'rl halo', 'text-anchor': 'middle'}, `<textPath href="#${r.id}" startOffset="${o * 100}%">${r.n}</textPath>`))));
  /* shields */
  [[170, 110, '380'], [1010, 250, '289'], [140, 842, '121'], [1560, 567, '121'], [1550, 110, '380']].forEach(([x, y, n]) => $('shields').appendChild(E('g', {transform: `translate(${x} ${y})`}, `<rect x="-14" y="-9" width="28" height="18" rx="5" fill="#fff" stroke="#6b7190" stroke-width="1.4"/><text text-anchor="middle" y="4.5" font-size="11" font-weight="700" fill="#262a3f" font-family="Inter">${n}</text>`)));
  /* places */
  const pl = $('places');
  [[560, 538, 120, 56, 'The Star'], [900, 672, 98, 56, 'Stonebriar Centre'], [1070, 420, 0, 0, ''], [1320, 520, 92, 60, 'Toyota Stadium']].forEach(([x, y, w, h, n]) => { if (!w) return; pl.appendChild(E('rect', {x, y, width: w, height: h, rx: 3, fill: '#e3e6f2', stroke: '#cdd1e4'})); pl.appendChild(E('text', {class: 'poi halo', x: x + w / 2, y: y + h + 16, 'text-anchor': 'middle'}, n)); });
  pl.appendChild(E('text', {class: 'poi halo', x: 1150, y: 388, 'text-anchor': 'middle'}, 'Frisco Commons Park'));
  pl.appendChild(E('text', {class: 'poi halo', x: 648, y: 170, 'text-anchor': 'middle'}, 'Grand Park'));
  pl.appendChild(E('text', {class: 'poi halo', x: 178, y: 392, 'text-anchor': 'middle'}, 'Golf course'));
  pl.appendChild(E('text', {class: 'poi halo', x: 90, y: 48, 'text-anchor': 'middle', style: 'fill:#4f7fb8;font-style:italic'}, 'Lake Lewisville'));
  pl.appendChild(E('rect', {x: 1040, y: 482, width: 74, height: 30, rx: 3, fill: '#e3e6f2', stroke: '#cdd1e4'})); pl.appendChild(E('text', {class: 'poi halo', x: 1077, y: 530, 'text-anchor': 'middle'}, 'Frisco Square'));
  [[620, 360, 52, 40], [620, 400, 52, 30], [790, 330, 60, 40], [780, 520, 70, 40], [420, 330, 50, 50], [860, 150, 80, 30], [1160, 560, 70, 40]].forEach(([x, y, w, h]) => pl.appendChild(E('rect', {x, y, width: w, height: h, rx: 2, fill: '#e8eaf3', stroke: '#d3d6e6'})));
  pl.appendChild(E('text', {class: 'ar halo', x: 260, y: 262, 'text-anchor': 'middle'}, 'Frisco'));
  pl.appendChild(E('text', {class: 'ar halo', x: 1180, y: 700, 'text-anchor': 'middle', transform: 'rotate(-18 1180 700)'}, ''));

  /* cities and routes */
  const C = {
    prosper: {n: 'Prosper', m: 14, via: 'Preston Road and Stonebrook Pkwy', pts: [[1010, 40], [1010, 210], [1145, 210], [1145, 258]], lx: 14, ly: 5},
    elm: {n: 'Little Elm', m: 20, via: 'University Drive and Coit Road', pts: [[520, 50], [520, 110], [1145, 110], [1145, 258]], lx: 14, ly: 5},
    mck: {n: 'McKinney', m: 22, via: 'University Drive and Coit Road', pts: [[1480, 48], [1480, 110], [1145, 110], [1145, 258]], lx: -14, ly: 5, end: 1},
    allen: {n: 'Allen', m: 16, via: 'Custer Road and Eldorado Pkwy', pts: [[1280, 780], [1280, 300], [1145, 300], [1145, 258]], lx: 14, ly: 5},
    plano: {n: 'Plano', m: 15, via: 'Coit Road', pts: [[1145, 845], [1145, 258]], lx: 14, ly: 5},
    colony: {n: 'The Colony', m: 19, via: 'Eldorado Pkwy and Coit Road', pts: [[540, 300], [1145, 300], [1145, 258]], lx: 0, ly: -16, mid: 1},
    lewis: {n: 'Lewisville', m: 21, via: 'Sam Rayburn, the Tollway and Eldorado Pkwy', pts: [[520, 799], [520, 300], [1145, 300], [1145, 258]], lx: 14, ly: 5}};
  const cg = $('cities'), ch = $('chips'), route = $('route'), rcase = $('rcase'), rflag = $('rflag');
  Object.entries(C).forEach(([k, c]) => {
    const s = c.pts[0], g = E('g', {class: 'city', tabindex: 0, transform: `translate(${s[0]} ${s[1]})`}); g.dataset.k = k;
    g.innerHTML = `<circle class="hit" r="22"/><circle class="dt" r="4.5"/><text class="halo" x="${c.lx}" y="${c.ly}" ${c.end ? 'text-anchor="end"' : ''} ${c.mid ? 'text-anchor="middle"' : ''}>${c.n}</text>`;
    g.addEventListener('click', () => pick(k)); g.addEventListener('keydown', e => { if (e.key === 'Enter') pick(k); }); cg.appendChild(g);
    const b = document.createElement('button'); b.textContent = c.n; b.dataset.k = k; b.onclick = () => pick(k); ch.appendChild(b);
  });
  function pick(k) {
    const c = C[k], d = rounded(c.pts, 30); route.setAttribute('d', d); rcase.setAttribute('d', d); const L = route.getTotalLength();
    [route, rcase].forEach(e => { e.style.transition = 'none'; e.style.strokeDasharray = L; e.style.strokeDashoffset = L; }); route.getBoundingClientRect();
    [route, rcase].forEach(e => { e.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(.45,0,.2,1)'; e.style.strokeDashoffset = 0; });
    const s = c.pts[0]; rflag.setAttribute('transform', `translate(${s[0]} ${s[1]})`); rflag.setAttribute('display', '');
    document.querySelectorAll('.city').forEach(g => g.classList.toggle('on', g.dataset.k === k)); ch.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.k === k));
    $('info').innerHTML = `From <b>${c.n}</b> via ${c.via}`;
  }
  setTimeout(() => { if (document.body.contains(svg)) pick('plano'); }, 1300);

  /* zoom + pan */
  const svg = $('map'), view = $('view'); const PX0 = innerWidth < 900 ? -300 : -250; let k = 1, px = PX0, py = 0;
  const ap = () => { const mx = Math.abs(k - 1) * 800 + 300, my = Math.abs(k - 1) * 450; px = Math.max(-mx, Math.min(mx, px)); py = Math.max(-my, Math.min(my, py)); view.setAttribute('transform', `translate(${800 + px} ${450 + py}) scale(${k}) translate(-800 -450)`); };
  const z = f => { k = Math.max(.7, Math.min(2.4, k * f)); ap(); };
  ap();
  $('zin').onclick = () => z(1.3); $('zout').onclick = () => z(.77); $('zre').onclick = () => { k = 1; px = PX0; py = 0; ap(); };
  let dr = null; svg.addEventListener('pointerdown', e => { if (e.target.closest('.city')) return; dr = {x: e.clientX, y: e.clientY, px, py}; svg.classList.add('drag'); svg.setPointerCapture(e.pointerId); });
  svg.addEventListener('pointermove', e => { if (!dr) return; const s = svg.getScreenCTM().a; px = dr.px + (e.clientX - dr.x) / s; py = dr.py + (e.clientY - dr.y) / s; ap(); });
  const en = () => { dr = null; svg.classList.remove('drag'); }; svg.addEventListener('pointerup', en); svg.addEventListener('pointercancel', en);
  svg.addEventListener('wheel', e => { if (e.ctrlKey || e.metaKey) { e.preventDefault(); z(e.deltaY < 0 ? 1.1 : .9); } }, {passive: false});

  /* "Get notified" scrolls to the signup section (a plain #expand link would change the route) */
  page.querySelectorAll('[data-loc-scroll]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); const t = document.getElementById(a.dataset.locScroll); if (t) t.scrollIntoView({behavior: 'smooth'}); }));

  $('nf').addEventListener('submit', e => { e.preventDefault(); e.target.innerHTML = '<div><b>Thank you.</b><span>We\'ll email you when a new location opens.</span></div>'; });
  /* reveal */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .12});
  page.querySelectorAll('.lrv').forEach(e => io.observe(e));
}

renderers.locations = locationsPage;
addEventListener('hashchange', () => { if (path() === 'locations') initLocations(); });
render();
initLocations();
})();

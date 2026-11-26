/* Memberships page. Loaded after demo.js so it replaces the placeholder renderer.
   Nav, footer and booking dialog are the site's own; the closing CTA reuses the site's "Right here in Frisco" section. */
(() => {
const memberships = () => `<div class="mem-page"><div class="mem-wrap">

<section class="mhero" id="memTop">
  <div class="waves"><svg class="l" viewBox="0 0 400 700" preserveAspectRatio="none"></svg><svg class="r" viewBox="0 0 400 700" preserveAspectRatio="none"></svg></div>
  <div class="inner" id="memHeroInner">
    <h1><span class="w">Flexible</span> <span class="w">Care</span> <span class="w it">Membership</span> <span class="w">Plans</span></h1>
    <p class="sub">A physician-led approach centered on longer conversations and preventive care. Choose a monthly concierge membership, or simply book a one-time visit.</p>
    <button class="chev" type="button" aria-label="Scroll to plans" data-scroll-target="memPlans"><svg viewBox="0 0 44 26" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4l19 18L41 4"/></svg></button>
  </div>
</section>

<section class="pricing" id="memPlans">
  <div class="switch"><div id="memSw"><span class="pillbg" id="memPill"></span><button type="button" class="on" data-k="mem">Monthly memberships</button><button type="button" data-k="one">One-time visits</button></div></div>
  <div id="memFan" class="fan c2"></div>
  <p class="fine" id="memFine"></p>
</section>

<section class="band" id="memBand">
  <div class="mem-eyebrow">What every membership includes</div>
  <h2>Care that is always within reach, and never rushed</h2>
  <div class="rule"></div>
  <div class="cols">
    <div class="col"><svg viewBox="0 0 64 64"><path d="M8 14h40a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H26l-10 9v-9H8a4 4 0 0 1-4-4V18a4 4 0 0 1 4-4z"/><path d="M14 28h8l3-7 5 14 4-9h8"/><path d="M44 46h6l6 5v-5h2a4 4 0 0 0 4-4V26"/></svg><h3>24/7 Access</h3><p>Unlimited physician access by text, phone or video, any time you need it.</p></div>
    <div class="col"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="24"/><path d="M32 16v16l11 7"/><path d="M32 8v3M32 53v3M8 32h3M53 32h3"/></svg><h3>Unhurried Visits</h3><p>Guaranteed 30 to 45 minute appointments with no waiting room delays.</p></div>
    <div class="col"><svg viewBox="0 0 64 64"><rect x="8" y="12" width="48" height="44" rx="6"/><path d="M8 26h48M20 6v10M44 6v10"/><path d="M22 40l7 7 13-14"/></svg><h3>Same-Day Booking</h3><p>Same-day or next-day appointments, plus specialist referral coordination.</p></div>
    <div class="col"><svg viewBox="0 0 64 64"><path d="M32 54S8 40 8 24a12 12 0 0 1 24-4 12 12 0 0 1 24 4c0 16-24 30-24 30z"/><path d="M14 30h9l4-8 6 16 4-8h13"/></svg><h3>Prevention First</h3><p>An annual wellness exam, EKG and a personalized preventive care plan.</p></div>
  </div>
</section>

<section class="compare">
  <div class="mem-eyebrow">Compare plans</div>
  <h2 class="rv">Essential and Premier, side by side</h2>
  <div class="mem-card rv">
    <table>
      <thead><tr><th></th><th><div class="pn">Essential Care</div><div class="pp">$79 / month</div></th><th class="hl"><div class="pn">Premier Care</div><div class="pp">$129 / month</div></th></tr></thead>
      <tbody>
        <tr><td>Unlimited 24/7 physician access (text, phone, video)</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>In-person / tele visits per year</td><td><b>5</b></td><td class="hl"><b>10</b></td></tr>
        <tr><td>Same-day or next-day appointments</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Guaranteed 30 to 45 minute appointments, no wait</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Comprehensive annual wellness exam and EKG</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Personalized wellness and preventive care plan</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Complimentary in-office blood draws</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Specialist referral coordination</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>Preferred pricing on imaging and radiology referrals</td><td><span class="ck">✓</span></td><td class="hl"><span class="ck">✓</span></td></tr>
        <tr><td>In-house lab tests</td><td><span class="tag">Add on</span></td><td class="hl"><span class="ck">✓</span></td></tr>
      </tbody>
    </table>
  </div>
</section>

<section class="approach">
  <div class="mem-eyebrow">The Articella approach</div>
  <h2 class="rv">A physician-led practice built around you</h2>
  <div class="arow rv">
    <div class="quote">
      <div class="ring"><svg class="t" viewBox="0 0 260 260"><defs><path id="memCirc" d="M130,130 m-104,0 a104,104 0 1,1 208,0 a104,104 0 1,1 -208,0"/></defs><text><textPath href="#memCirc">Physician-led · Preventive care · Unhurried visits · </textPath></text></svg><div class="q">“</div></div>
      <div class="qbody">
        <div class="slide on"><div class="lab">Longer conversations</div><blockquote>Visits with room to ask questions. Every appointment is guaranteed 30 to 45 minutes, with no wait times, so nothing feels rushed.</blockquote></div>
        <div class="slide"><div class="lab">Preventive care</div><blockquote>Prevention comes first. Each member receives a comprehensive annual wellness exam, an EKG and a personalized plan for the year ahead.</blockquote></div>
        <div class="slide"><div class="lab">Direct access</div><blockquote>Your physician is one message away, with unlimited 24/7 access by text, phone or video, and same-day or next-day appointments.</blockquote></div>
        <div class="who"><div class="mono">A</div><div><b>Articella Primary Care</b><span>Concierge care · Frisco, TX</span></div>
          <div class="arrows"><button type="button" id="memPrev" aria-label="Previous"><svg viewBox="0 0 24 24"><path d="M19 12H5m6-6l-6 6 6 6"/></svg></button><button type="button" id="memNext" aria-label="Next"><svg viewBox="0 0 24 24"><path d="M5 12h14m-6-6l6 6-6 6"/></svg></button></div></div>
      </div>
    </div>
    <div class="stat"><h3>24/7<br>Physician Access</h3><div class="avs"><img src="assets/rahul.jpg" alt="Dr. Rahul Singh" loading="lazy"><img src="assets/sylaza.webp" alt="Dr. Sylaza Kantamneni" loading="lazy"><img src="assets/anupa.webp" alt="Anupa Adhikari" loading="lazy"></div><p>Caring, physician-led support that helps you feel safe, calm and well.</p></div>
  </div>
</section>

</div></div>
<div class="demo-page"><section class="demo-local demo-section"><div><span class="demo-kicker">RIGHT HERE IN FRISCO</span><h2>Care with a sense of place.</h2><p>Articella is a local practice built for ongoing conversations. Find us in Frisco, ask a practical question, or take the first step toward a visit.</p><div class="demo-hero-actions"><button class="button button-dark book-trigger">Book an appointment <span aria-hidden="true"></span></button><a href="tel:+12148726502" class="demo-text-link call-btn">Call or text the team</a></div></div><div class="demo-local-image"><img src="assets/care-interior.webp" loading="lazy" alt="Welcoming, naturally lit care space"></div></section></div>`;

/* plan data */
const L = a => a.map(i => '<li' + (i.startsWith('+') ? ' class="add"' : '') + '>' + i.replace(/^\+/, '') + '</li>').join('');
const P = c => `<div class="mplan${c.rec ? ' rec' : ''}">${c.rec ? '<span class="mbadge">★ Recommended</span>' : ''}<h3>${c.n}</h3><div class="cat">${c.cat}</div><div class="mprice">${c.p}<small>${c.u}</small></div><hr><ul>${L(c.l)}</ul><button type="button" class="btn book-trigger">${c.b}</button></div>`;
const ESS = ['Unlimited 24/7 physician access (text, phone, video)','5 in-person or tele visits per year','Same-day or next-day appointments','Guaranteed 30 to 45 minute visits, no wait','Annual wellness exam and EKG','Personalized preventive care plan','Complimentary in-office blood draws','Specialist referral coordination','Preferred imaging and radiology pricing','+In-house lab tests as an add-on'];
const PRE = ['Everything in Essential Care','10 in-person or tele visits per year','In-house annual wellness screening with these tests, when clinically appropriate','CBC and Comprehensive Metabolic Panel','Lipid panel and HbA1c','Thyroid panel (TSH, Free T4)','Vitamin D, urinalysis and vitamin B12','Annual EKG and in-office blood draws for the included screening tests'];
const SICK = ['Comprehensive physical examination','Evaluation of one acute medical issue','Electronic prescription routing to your preferred pharmacy','Official academic absence note (when medically appropriate)','Free secure portal follow-up for 7 days regarding the same illness','+Any recommended health tests (payment is due at the time of service)'];
const V = {
  mem: {cls:'c2', cards:[
    {n:'Essential Care',cat:'Monthly concierge membership',p:'$79',u:'/ per month',b:'Join Essential Care',l:ESS},
    {n:'Premier Care',cat:'Monthly concierge membership',p:'$129',u:'/ per month',b:'Join Premier Care',l:PRE,rec:1}],
    fine:'A $150 cancellation fee applies if a membership is cancelled before completing 6 months. Tests and services outside inclusions are billed separately.'},
  one: {cls:'c3', cards:[
    {n:'Student / Senior Citizen Sick Visit',cat:'One-time visit · self-pay',p:'$79',u:'/ per visit',b:'Book a Sick Visit',l:SICK},
    {n:'Standard Self-Pay Sick Visit',cat:'One-time visit · self-pay',p:'$99',u:'/ per visit',b:'Book a Sick Visit',l:SICK,rec:1},
    {n:'Standard Wellness Check-Up',cat:'One-time preventive visit',p:'$149',u:'/ one time',b:'Book a Check-Up',l:['Comprehensive physician consultation and physical examination','Vital signs assessment (blood pressure, heart rate, respiratory rate and temperature)','Height, weight and Body Mass Index (BMI) evaluation','Basic hearing screening','Laboratory tests','EKG with interpretation','Personalized preventive recommendations','+Vitamin D testing, extra $30']}],
    fine:'Recommended health tests are payable at the time of service. No membership required for one-time visits.'}
};

let io, slideTimer, scrollBound = false;
function initMemberships() {
  const root = document.querySelector('.mem-page');
  if (!root) return;
  clearInterval(slideTimer);
  io && io.disconnect();

  /* hero wave lines */
  root.querySelectorAll('.waves svg').forEach(svg => {
    let h = '';
    for (let i = 0; i < 22; i++) {
      const o = i * 9, a = i * 3.2;
      h += '<path d="M' + (-20 + o * .2) + ' 120 C ' + (120 + a) + ' ' + (220 + o * .6) + ', ' + (60 + o) + ' ' + (430 + a) + ', ' + (300 + o * .4) + ' ' + (520 + o * .2) + ' S 380 640, 430 720"/>';
    }
    svg.innerHTML = h;
  });

  /* hero fade on scroll */
  if (!scrollBound) {
    scrollBound = true;
    addEventListener('scroll', () => {
      const hi = document.getElementById('memHeroInner');
      if (!hi) return;
      const p = Math.min(scrollY / 520, 1);
      hi.style.opacity = 1 - p * .7;
      hi.style.transform = 'translateY(' + (p * 36) + 'px)';
    }, {passive: true});
  }

  /* reveal on scroll */
  io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold: .18});
  root.querySelectorAll('.rv,#memBand').forEach(el => io.observe(el));

  /* plans switcher */
  const fan = document.getElementById('memFan'), sw = document.getElementById('memSw'), pill = document.getElementById('memPill');
  let cur = 'mem', seen = false;
  const movePill = () => { const b = sw.querySelector('button.on'); pill.style.left = b.offsetLeft + 'px'; pill.style.width = b.offsetWidth + 'px'; };
  const show = k => {
    cur = k; const v = V[k];
    fan.className = 'fan ' + v.cls; fan.innerHTML = v.cards.map(P).join('');
    document.getElementById('memFine').textContent = v.fine;
    sw.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.k === k));
    movePill();
    if (seen) { void fan.offsetWidth; requestAnimationFrame(() => requestAnimationFrame(() => fan.classList.add('in'))); }
  };
  sw.addEventListener('click', e => { const b = e.target.closest('button'); if (b && b.dataset.k !== cur) show(b.dataset.k); });
  show('mem');
  requestAnimationFrame(movePill);
  new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { seen = true; fan.classList.add('in'); o.disconnect(); } }, {threshold: .25}).observe(fan);

  /* approach carousel */
  const sl = [...root.querySelectorAll('.slide')]; let si = 0;
  const go = n => { sl[si].classList.remove('on'); si = (n + sl.length) % sl.length; sl[si].classList.add('on'); };
  document.getElementById('memPrev').onclick = () => go(si - 1);
  document.getElementById('memNext').onclick = () => go(si + 1);
  slideTimer = setInterval(() => { if (document.querySelector('.mem-page')) go(si + 1); else clearInterval(slideTimer); }, 9000);
}

renderers.memberships = memberships;
addEventListener('resize', () => { const b = document.querySelector('#memSw button.on'), p = document.getElementById('memPill'); if (b && p) { p.style.left = b.offsetLeft + 'px'; p.style.width = b.offsetWidth + 'px'; } });
addEventListener('hashchange', () => { if (path() === 'memberships') initMemberships(); });
render();
initMemberships();
})();

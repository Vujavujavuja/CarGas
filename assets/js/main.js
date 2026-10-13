(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- i18n ---------- */
  const EN = {
    'skip': 'Skip to content',
    'announce': 'Car Gas turns 20 — thank you for being with us since 2006.',
    'nav.fuels': 'Fuels',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.location': 'Location',
    'cta.call': 'Call us',
    'cta.directions': 'Get directions',
    'cta.reviews': 'Google reviews',
    'hero.status': 'Open now · 24/7',
    'hero.title': 'Fuel on the E-70,<br>day and night.',
    'hero.lead': 'Car Gas is a filling station in Banatski Karlovac, on the road between Pančevo and Vršac. Euro diesel, unleaded 95, LPG and CNG — non-stop since 2006.',
    'wall.title': 'Everything your car needs, in one place',
    'wall.lpg': 'Autogas (LPG)',
    'wall.cng': 'Methane (CNG)',
    'wall.open': 'Always open',
    'wall.rating': 'Google rating',
    'rail.title': 'Everything you need on the road.',
    'rail.c1': 'CNG methane<br>for gas vehicles',
    'rail.c2': 'LPG autogas<br>and euro diesel',
    'rail.c3': 'Bagged ice,<br>always cold',
    'rail.c4': 'On your way to<br>the Deliblato Sands',
    'rail.c5': '20 years<br>of Car Gas',
    'statement': 'Since 2006 we have been fuelling our neighbours from Banat, truck drivers and everyone travelling the E-70 — day and night, no breaks, with the same smile.',
    'band.chip': 'Banatski Karlovac',
    'band.title': 'On the main road between<br>Pančevo and Vršac.',
    'band.cta': 'See the map',
    'fuels.title': 'Four fuels.<br>One stop.',
    'fuels.dizel': 'Diesel to the European EN 590 standard for cars, vans, trucks and farm machinery.',
    'fuels.bmb': 'Unleaded petrol, 95 octane — the standard for every modern petrol engine.',
    'fuels.tngTitle': 'LPG · autogas',
    'fuels.tng': 'Liquefied petroleum gas for vehicles with an LPG conversion. Cheaper driving, every day.',
    'fuels.cngTitle': 'CNG · methane',
    'fuels.cng': 'Compressed natural gas for methane-powered vehicles — available every day, around the clock.',
    'fuels.note': 'For current fuel prices, call us on +381 13 652 865.',
    'feat.ice.title': 'Ice for the road',
    'feat.ice.text': 'Bags of ice straight from the freezer at the station — for your cooler, picnic or celebration.',
    'feat.nature.title': 'Gateway to the Deliblato Sands',
    'feat.nature.text': 'Fill up before a trip to Devojački Bunar and the largest sandy area in Europe.',
    'loc.title': 'Where we are',
    'loc.address': 'Address',
    'loc.municipality': 'Alibunar municipality, Serbia',
    'loc.hours': 'Opening hours',
    'loc.hoursVal': 'Every day, 0–24<br><span class="muted">including holidays</span>',
    'loc.phone': 'Phone',
    'close.call': 'Call us',
    'close.ig': 'Follow us',
    'foot.tag': 'Filling station on the E-70 · Banatski Karlovac · since 2006.',
    'foot.visit': 'Visit us',
    'foot.open': 'Open 24/7',
    'foot.contact': 'Contact',
    'foot.photos': 'Photos:'
  };
  const META = {
    sr: { lang: 'sr-Latn', title: document.title },
    en: { lang: 'en', title: 'Car Gas — 24/7 filling station on the E-70 · Banatski Karlovac' }
  };

  const textNodes = [...document.querySelectorAll('[data-i18n]')];
  const htmlNodes = [...document.querySelectorAll('[data-i18n-html]')];
  const SR = {};
  textNodes.forEach(el => { SR[el.dataset.i18n] = el.textContent; });
  htmlNodes.forEach(el => { SR[el.dataset.i18nHtml] = el.innerHTML; });

  const store = {
    get() { try { return localStorage.getItem('cargas-lang'); } catch { return null; } },
    set(v) { try { localStorage.setItem('cargas-lang', v); } catch { /* storage unavailable */ } }
  };

  function setLang(lang) {
    const dict = lang === 'en' ? EN : SR;
    textNodes.forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
    htmlNodes.forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    document.documentElement.lang = META[lang].lang;
    document.title = META[lang].title;
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const map = document.querySelector('[data-map]');
    if (map) {
      const hl = lang === 'en' ? 'en' : 'sr-Latn';
      const src = map.src.replace(/hl=[^&]+/, 'hl=' + hl);
      if (src !== map.src) map.src = src;
    }
    splitWords();
    store.set(lang);
  }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Scroll-reveal statement ---------- */
  const statement = document.querySelector('.reveal-words');
  let words = [];
  function splitWords() {
    if (!statement) return;
    const text = statement.textContent.trim();
    statement.innerHTML = text.split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
    words = [...statement.querySelectorAll('.w')];
    paintWords();
  }
  function paintWords() {
    if (!words.length) return;
    const r = statement.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    const n = reduced ? words.length : Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  }

  /* ---------- Nav state ---------- */
  const nav = document.getElementById('nav');
  const hero = document.querySelector('.hero');
  function paintNav() {
    const limit = hero ? hero.offsetTop + hero.offsetHeight - 80 : 200;
    nav.classList.toggle('is-solid', window.scrollY > limit);
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { paintNav(); paintWords(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', () => { paintNav(); paintWords(); });

  /* ---------- Tabs ---------- */
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function selectTab(tab, focus) {
    tabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls'));
      panel.hidden = !on;
      panel.classList.toggle('is-active', on);
    });
    if (focus) tab.focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => selectTab(t));
    t.addEventListener('keydown', e => {
      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      e.preventDefault();
      selectTab(tabs[(i + d + tabs.length) % tabs.length], true);
    });
  });
  document.querySelectorAll('[data-fuel-link]').forEach(a => a.addEventListener('click', () => {
    const t = tabs.find(x => x.dataset.tab === a.dataset.fuelLink);
    if (t) selectTab(t);
  }));

  /* ---------- Rail ---------- */
  const track = document.querySelector('.rail__track');
  document.querySelectorAll('[data-rail]').forEach(b => b.addEventListener('click', () => {
    const card = track.querySelector('.card');
    const step = card ? card.getBoundingClientRect().width + 12 : 400;
    track.scrollBy({ left: step * Number(b.dataset.rail), behavior: reduced ? 'auto' : 'smooth' });
  }));

  /* ---------- Fade-in ---------- */
  const fades = document.querySelectorAll('.wall__grid li, .card, .h-lg, .panels, .feature, .facts, .location__map, .closing__card, .band__inner');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    fades.forEach((el, i) => { el.classList.add('fade'); el.style.transitionDelay = `${(i % 6) * 60}ms`; io.observe(el); });
  }

  /* ---------- Init ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  const saved = store.get();
  const initial = saved || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'sr');
  setLang(initial === 'en' ? 'en' : 'sr');
  paintNav();
})();

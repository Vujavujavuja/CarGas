(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- i18n: Serbian is the default; English only when chosen ---------- */
  const EN = {
    'skip': 'Skip to content',
    'announce': '20 years of Car Gas — thank you to all our friends and partners',
    'nav.fuels': 'Fuels',
    'nav.delivery': 'Delivery',
    'nav.shop': 'Shop',
    'nav.team': 'Our team',
    'nav.locations': 'Locations',
    'cta.directions': 'Get directions',
    'cta.delivery': 'Fuel delivery',
    'hero.status': 'Open 24/7 · Nemanjina BB, Banatski Karlovac',
    'hero.title': 'Fuel quality you can count on for&nbsp;20&nbsp;years.',
    'hero.lead': 'A filling station on the E-70 main road — 60 km from Belgrade, 25 km from Vršac. Euro diesel, ADI diesel, unleaded 95, LPG and CNG, every day 0–24.',
    'wall.title': 'At the Car Gas station we offer',
    'wall.euro': 'Euro diesel',
    'wall.adi': 'ADI diesel',
    'wall.lpg': 'Autogas (LPG)',
    'wall.cng': 'Methane',
    'wall.open': 'Open',
    'del.eyebrow': 'Fuel delivery',
    'del.title': 'We deliver fuel to your address.',
    'del.lead': 'Farmers, transport is free and we tailor the price to your needs — the more litres, the lower the price.',
    'del.c1': 'Free transport to your address',
    'del.c2': 'Price by agreement, based on quantity',
    'del.c3': 'Call or message us on Viber, WhatsApp or Messenger',
    'del.call': 'Call',
    'statement': 'We know that trucks and farm machinery need easy access. Our station has a wide, open approach with no tight turns or obstacles.',
    'trio.1': 'Tractors',
    'trio.2': 'Combines',
    'trio.3': 'Trucks',
    'cng.title': 'Looking for a more economical fuel? CNG is the smart choice.',
    'cng.lead': 'The only filling station with CNG between Pančevo and Vršac — available 24/7. Lower fuel costs, a cleaner environment and a quieter engine.',
    'night.title': 'Open at night, too.',
    'night.text': 'All approaches to the station and the car wash are well lit and under video surveillance, so you can use our services at any hour. Your safety matters to us.',
    'fuels.title': 'Fuel for every vehicle.',
    'fuels.tDiesel': 'Diesel',
    'fuels.dizelTitle': 'Euro diesel and ADI diesel',
    'fuels.dizel': 'For cars, trucks and farm machinery. In late autumn we switch to winter fuel, which stops diesel from gelling and makes cold starts easier.',
    'fuels.bmb': 'Unleaded petrol for every modern petrol engine — in Banatski Karlovac and in Ilandža.',
    'fuels.tngTitle': 'LPG · autogas',
    'fuels.tng': 'Liquefied petroleum gas — economical and widely available. A lower price than other fuels and lower harmful emissions.',
    'fuels.cngTitle': 'CNG · methane',
    'fuels.cng': 'Methane for CNG vehicles, available 24/7 — for cars, vans and trucks.',
    'fuels.note': 'For fuel prices, call <a href="tel:+38113652865">+381 13 652 865</a> or <a href="tel:+38163317785">+381 63 317 785</a>.',
    'shop.title': 'Everything in one place.',
    'shop.c0': 'A place to take a break',
    'shop.c0t': 'Coffee and refreshing drinks, a comfortable place to sit, clean facilities and free Wi-Fi.',
    'shop.c1': 'Coffee to go',
    'shop.c1t': 'You came for fuel — treat yourself to a coffee break too.',
    'shop.c2': 'Oils and lubricants',
    'shop.c2t': 'Engine oils and lubricants from well-known brands.',
    'shop.c3': 'Wipers and fluid',
    'shop.c3t': 'Wiper blades in all types and sizes — you\'ll find the right ones for your car.',
    'shop.c4': 'Bagged ice',
    'shop.c4t': 'Always cold — for your cooler, picnic or celebration.',
    'shop.c5': 'Sweets and small gifts',
    'shop.c5t': 'It\'s not where a gift is bought that matters, but the thought behind it.',
    'shop.c6': 'Self-service car wash',
    'shop.c6t': 'Open and lit 24h. No booking, no waiting — wash your vehicle whenever it suits you.',
    'shop.c7': 'Trailer rental',
    'shop.c7t': 'For a day, a weekend, a week or longer. Bookings on +381 63 317 785.',
    'team.title': 'The Car Gas team.',
    'team.lead': 'This year we celebrated 20 years in business. Thank you to all our friends and partners who took the time to celebrate with us.',
    'team.f1': '20 years of Car Gas · Devojački Bunar, 2026',
    'team.f2': 'Our team, 2025',
    'team.f3': 'Celebrating a successful 2024',
    'team.f4': 'The team together again',
    'tips.title': 'Tips for drivers.',
    'tips.more': 'More on Instagram ↗',
    'tips.1': 'Winter fuel — when and why it changes',
    'tips.2': 'Do you need a fuel additive in winter?',
    'tips.3': 'What if you fill up with the wrong fuel?',
    'tips.4': 'Diesel or petrol — which is better?',
    'tips.5': 'Is CNG a good choice for winter?',
    'tips.6': 'When to switch from winter to summer tyres',
    'loc.title': 'Two locations.',
    'loc.address': 'Address',
    'loc.hours': 'Hours',
    'loc.fuels': 'Fuels',
    'loc.phone': 'Phone',
    'loc.bkHours': 'Every day, 0–24',
    'loc.ilHours': 'Every day, 7–19',
    'close.station': 'Station · 0–24',
    'close.delivery': 'Fuel delivery · Viber · WhatsApp',
    'close.ig': 'Follow us',
    'foot.tag': 'Filling stations · Banatski Karlovac and Ilandža · since 2006.',
    'foot.bk': 'Open 24/7',
    'foot.il': 'Every day 7–19',
    'foot.contact': 'Contact',
    'foot.photos': 'Photos and video: Car Gas'
  };
  const META = {
    sr: { lang: 'sr-Latn', title: document.title },
    en: { lang: 'en', title: 'Car Gas — 24/7 filling station · Banatski Karlovac, Serbia' }
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

  function setLang(lang, remember) {
    const dict = lang === 'en' ? EN : SR;
    textNodes.forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.textContent = v; });
    htmlNodes.forEach(el => { const v = dict[el.dataset.i18nHtml]; if (v != null) el.innerHTML = v; });
    document.documentElement.lang = META[lang].lang;
    document.title = META[lang].title;
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    const map = document.querySelector('[data-map]');
    if (map) {
      const src = map.src.replace(/hl=[^&]+/, 'hl=' + (lang === 'en' ? 'en' : 'sr-Latn'));
      if (src !== map.src) map.src = src;
    }
    splitWords();
    if (remember) store.set(lang);
  }
  document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang, true)));

  /* ---------- Scroll-reveal statement ---------- */
  const statement = document.querySelector('.reveal-words');
  let words = [];
  function splitWords() {
    if (!statement) return;
    statement.innerHTML = statement.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(' ');
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

  /* ---------- Videos: play only while visible ---------- */
  const videos = [...document.querySelectorAll('video.autoplay')];
  if (!reduced && 'IntersectionObserver' in window) {
    const vio = new IntersectionObserver(entries => entries.forEach(e => {
      const v = e.target;
      if (e.isIntersecting) {
        if (v.preload === 'none') v.preload = 'auto';
        const p = v.play();
        if (p && p.catch) p.catch(() => { /* autoplay blocked: poster stays */ });
      } else {
        v.pause();
      }
    }), { threshold: 0.25 });
    videos.forEach(v => vio.observe(v));
  }

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

  /* ---------- Rail ---------- */
  const track = document.querySelector('.rail__track');
  document.querySelectorAll('[data-rail]').forEach(b => b.addEventListener('click', () => {
    const card = track.querySelector('.card');
    const step = card ? card.getBoundingClientRect().width + 12 : 340;
    track.scrollBy({ left: step * Number(b.dataset.rail), behavior: reduced ? 'auto' : 'smooth' });
  }));

  /* ---------- Fade-in ---------- */
  const fades = document.querySelectorAll('.wall__grid li, .delivery__media > *, .trio figure, .band__text, .band__photo, .night__main, .night__side, .panels, .card, .team__grid figure, .tip, .loc, .map, .closing__card');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px' });
    fades.forEach((el, i) => { el.classList.add('fade'); el.style.transitionDelay = `${(i % 6) * 60}ms`; io.observe(el); });
  }

  /* ---------- Init ---------- */
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  setLang(store.get() === 'en' ? 'en' : 'sr', false);
  paintNav();
})();

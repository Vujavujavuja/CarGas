# Car Gas — cargas.rs

Website for **CAR GAS d.o.o.**, the 24/7 filling station on the E-70 in Banatski Karlovac (Alibunar municipality).
Plain static HTML/CSS/JS, no build step. Serbian (Latin) by default, English via the SR/EN toggle.

```
index.html          single-page site (content + schema.org GasStation data)
404.html            not-found page
assets/css/style.css
assets/js/main.js   language switch, tabs, card rail, scroll effects
assets/img/         logo, photos (WebP), hero.jpg for social previews
CNAME               cargas.rs (GitHub Pages custom domain)
```

Preview locally: `npx http-server .` and open http://localhost:8080.

## Business facts used (and where they came from)

| Fact | Source |
|---|---|
| Nemanjina bb, 26320 Banatski Karlovac; on the E-70 | Google Maps listing, PlanPlus, company registry |
| Coordinates 45.05306, 21.00816 (plus code 3235+67) | Google Maps |
| Open 24 hours / "Otvoreno 24/7" | Google Maps + Car Gas Instagram post (31 Dec 2025) |
| Phone +381 13 652865 | Google Maps, PlanPlus |
| Rating 4.5 on Google | Google Maps (Oct 2026) |
| Evro dizel, BMB 95, TNG, CNG | Company registry + Instagram + CNG dispenser photo on Google Maps |
| Bagged ice sold at the station | Instagram post (20 Apr 2026, Banatski Karlovac) |
| 20 years in business, founded 05.04.2006 | Instagram post (16 Jun 2026) + company registry |
| Email cargas.pa@hotmail.com | eKapija company directory — **please confirm it's still read** |

Fuel prices are intentionally not on the site (they change weekly).

## Photo credits

- Hero / highway: Florian Steciuk — Unsplash License
- Station at night: Hans Eiskonen — Unsplash License
- Deliblatska peščara (pescara-1/2/3): Jovana Askrabic — Unsplash License
- Deliblatska peščara (pescara-4): Jovan Vasiljević — Unsplash License
- Logo, ice freezer, 20-year celebration: Car Gas Instagram (@car_gas_2024)

To swap in real station photos, replace the files in `assets/img/` keeping the same names
(WebP, ~1600 px wide).

## Domain: cargas.rs

As of 13 Oct 2026 the RNIDS whois reports **"Domain name cargas.rs is available!"**
(the old `cargas.co.rs` has lapsed too).

.rs domains can only be bought through an RNIDS-accredited registrar
(full list: https://www.rnids.rs/en/accredited-registrars). Typical 2026 prices for one year:

| Registrar | .rs / year |
|---|---|
| Registracija.rs | ~2,100 RSD |
| unlimited.rs | ~2,150 RSD |
| NETcom / mint.rs | ~2,300 RSD |
| Metoda | ~2,400 RSD |
| BeoHosting | ~2,500 RSD |

Register it in the company's name (CAR GAS d.o.o., with PIB and matični broj) so the business owns it.
Activation usually takes 1–2 working days.

## Going live (GitHub Pages, free)

1. Merge this branch into `main`.
2. GitHub → repo **Settings → Pages** → Source: *Deploy from a branch*, Branch: `main` / `(root)`.
3. Custom domain: `cargas.rs` (already in `CNAME`), then tick **Enforce HTTPS** once the certificate is issued.
4. At the registrar, set these DNS records:

| Type | Name | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | vujavujavuja.github.io |

DNS changes usually propagate within a few hours.

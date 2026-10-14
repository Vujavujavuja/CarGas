# Car Gas — cargas.rs

Website for **CAR GAS d.o.o.**, the 24/7 filling station on the E-70 in Banatski Karlovac (Alibunar municipality).
Plain static HTML/CSS/JS, no build step. Serbian (Latin) is always the default; English only when a visitor picks EN.

```
index.html          single-page site (content + schema.org GasStation data)
404.html            not-found page
assets/css/style.css
assets/js/main.js   language switch, tabs, card rail, scroll effects
assets/img/         logo, photos (WebP), og.jpg for social previews
assets/video/       short muted loops (MP4 + WebM)
CNAME               cargas.rs (GitHub Pages custom domain)
```

Preview locally: `npx http-server .` and open http://localhost:8080.

## Content sources

All photos and videos come from the Car Gas Instagram account (@car_gas_2024, 72 of 73 posts reviewed),
and the copy is based on the business's own captions. Videos are trimmed, muted loops (MP4 + WebM).

| Fact on the site | Source |
|---|---|
| Nemanjina BB, Banatski Karlovac · open 24/7 | Instagram captions, Google Maps |
| Ilandža, Miloša Crnjanskog BB · every day 7–19 · Evro dizel, BMB 95 | Instagram (17 Jan 2025, 12 May 2025) |
| Evro dizel, ADI dizel, BMB 95, TNG, CNG | Instagram (4 Mar 2025) |
| Free fuel delivery, price by quantity, 063 317 785 (Viber/WhatsApp/Messenger) | Instagram (Aug 2024 – Nov 2025) |
| Wide access for trucks and farm machinery | Instagram (12 Feb 2025) |
| "Only filling station with CNG from Pančevo to Vršac" | Instagram (17 Oct 2024) — **confirm it's still true** |
| 60 km from Belgrade, 25 km from Vršac | Instagram video (30 Aug 2024) |
| Lit and video-monitored at night | Instagram (28 Aug 2024) |
| Coffee, clean facilities, free Wi-Fi | Instagram (27 Aug 2024) |
| Self-service car wash, open and lit 24h | Instagram (29 Oct 2024) |
| Trailer rental | Instagram (23 Aug 2024, 6 Nov 2024) |
| Oils, wipers, ice, sweets | Instagram posts and videos |
| 20 years in business (founded 2006) | Instagram (16 Jun 2026), company registry |
| Station phone 013 652 865 | Google Maps |
| Email cargas.pa@hotmail.com | eKapija directory — **confirm it's still read** |

Driver-tip cards link to the original Instagram posts. Fuel prices are not on the site.

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

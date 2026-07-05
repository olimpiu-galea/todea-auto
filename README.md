# TODEA AUTO-MOTO — Site refăcut

Site de prezentare Next.js (static export) pentru școala de șoferi TODEA AUTO-MOTO din Dej.

## Rulare locală

```bash
npm install
npm run dev
```

Deschide http://localhost:3000

## Build producție

```bash
npm run build
```

Output static în folderul `out/` — gata de upload pe hosting (Vercel, Netlify, Cloudflare Pages).

## Pagini

- `/` — Acasă (hero, stats, hartă interactivă permis, servicii, categorii, recenzii, FAQ)
- `/categorii` — Overview categorii
- `/categorii/motociclete|autoturisme|camioane|autobuze` — Detalii complete + prețuri
- `/inscriere-online` — Formular interactiv WhatsApp
- `/despre-noi` — Poveste, valori, recenzii
- `/contact` — Contact + hartă + formular WhatsApp
- `/politica-de-confidentialitate`, `/politica-cookies`, `/termeni-si-conditii`

## Elemente interactive

1. **Drumul până la permis** — hartă SVG pe homepage (pași clickabili)
2. **Formular WhatsApp** — wizard multi-pas pe Contact și Înscriere Online

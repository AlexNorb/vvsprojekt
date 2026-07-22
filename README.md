# VVS Projekt – Hemsida

Modern hemsida för VVS Projekt, byggd med [Astro](https://astro.build) och [Tailwind CSS v4](https://tailwindcss.com).

## 🚀 Kom igång

```bash
npm install
npm run dev       # Starta dev-server (http://localhost:4321)
npm run build     # Bygg för produktion
npm run preview   # Förhandsgranska produktion lokalt
```

## 📁 Projektstruktur

```
├── src/
│   ├── config.ts          ← Central konfiguration (företagsinfo, kontakt, SEO)
│   ├── components/        ← Astro-komponenter
│   ├── content/           ← Content Collections (tjänster, projekt)
│   ├── layouts/           ← Sidlayouter
│   ├── pages/             ← Routade sidor
│   ├── styles/            ← Global CSS + Tailwind config
│   └── assets/            ← Bilder, fonter, loggor
├── public/                ← Statiska filer (favicon, robots.txt, fonter)
├── BRANDING.md            ← Färger, typografi, UI-stilar
├── TODO.md                ← Att göra innan lansering
├── cloudflareworker-template.js  ← Mall för kontaktformulär-backend
└── astro.config.mjs       ← Astro-konfiguration
```

## ⚙️ Konfiguration

All företagsinformation finns samlad i **`src/config.ts`**. Uppdatera denna fil med dina riktiga uppgifter:

- Företagsnamn, org.nr, adress
- Telefon, e-post
- Sociala medier, Google Reviews
- Serviceområden
- SEO-metadata

Se [TODO.md](./TODO.md) för fullständig checklista.

## 🎨 Design

- **Primärfärg**: Blå (`#003ca6`)
- **Accentfärg**: Koppar (`#c17f59`)
- **Typografi**: Inter (brödtext) + Bank Gothic Light (rubriker)

Se [BRANDING.md](./BRANDING.md) för detaljer.

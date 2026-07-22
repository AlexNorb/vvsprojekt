# VVS Projekt – Att Göra Innan Lansering

Denna checklista innehåller allt som behöver fixas innan hemsidan kan gå live.

---

## 🔑 Kritiskt (Måste göras)

### Företagsinformation
Uppdatera `src/config.ts` med riktiga uppgifter:

- [ ] **Företagsnamn** (`legalName`) – Juridiskt namn (t.ex. "VVS Projekt i Uddevalla AB")
- [ ] **Organisationsnummer** (`orgNr`)
- [ ] **Kontaktperson** (`contactPerson`) – Namn på den som ska visas på hemsidan
- [ ] **Telefonnummer** (`phone.display` och `phone.href`)
- [ ] **E-postadress** (`email.display` och `email.href`)
- [ ] **Adress** (`address.street`, `postalCode`, `city`, `full`)
- [ ] **Serviceområden** (`serviceAreas`) – Kommuner ni verkar i
- [ ] **Ort för SEO** (`seo.geoPlacename`)

### Sociala Medier & Google
Uppdatera `src/config.ts`:

- [ ] **Facebook-URL** (`social.facebook`)
- [ ] **Instagram-URL** (`social.instagram`)
- [ ] **Google Reviews-URL** (`social.googleReview`) – skapa Google Business Profile först

### Kontaktformulär (Cloudflare Worker)
- [ ] Skapa konto på [Resend.com](https://resend.com) och hämta API-nyckel
- [ ] Verifiera avsändardomän (`vvsprojekt.se`) i Resend Dashboard
- [ ] Skapa ny Cloudflare Worker med koden i `cloudflareworker-template.js`
- [ ] Konfigurera `RESEND_API_KEY` som environment variable i Cloudflare
- [ ] Uppdatera `from` och `to` i worker-koden
- [ ] Deploy workern och kopiera URL:en
- [ ] Uppdatera `contactFormEndpoint` i `src/config.ts` med Worker-URL:en

---

## 📸 Innehåll (Bör göras)

### Bilder
- [ ] **Hero-bild** – Byt `src/assets/images/hero/hero-right.JPG` mot en VVS-relaterad bild
- [ ] **Profilbild** – Lägg till en riktig profilbild (uppdatera `About.astro`)
- [ ] **OG-bild** – Skapa `public/images/og-image.jpeg` (1200×630px) för sociala delningar
- [ ] **Favicon** – Byt `public/favicon.svg` till VVS Projekt-logga
- [ ] **Tjänstebilder** – Ersätt Unsplash-platshållarbilder med riktiga foton i `src/content/services/`
- [ ] **Projektbilder** – Ersätt platshållarbilder med riktiga projektfoton

### Texter
- [ ] **Omdömen** – Ersätt platshållar-omdömen i `ReviewsBanner.astro` med riktiga
- [ ] **Projekt** – Ersätt platshållar-projekt med riktiga referensprojekt
- [ ] **Om Oss** – Finjustera texten med personlig information

### Logotyp
- [ ] **Skapa riktig logga** – Nuvarande är en textbaserad platshållare (SVG)
- [ ] Uppdatera `LogoTitle.astro` och `LogoName.astro` med den riktiga loggan

---

## 🌐 Deploy & SEO (Efter lansering)

- [ ] Konfigurera domän (`vvsprojekt.se`) med hosting
- [ ] Registrera & verifiera i [Google Search Console](https://search.google.com/search-console)
- [ ] Skapa [Google Business Profile](https://business.google.com) (viktigast för lokal SEO!)
- [ ] Skicka in till lokala kataloger (Eniro, Hitta.se)
- [ ] Konfigurera Google Analytics (valfritt)
- [ ] SSL-certifikat (automatiskt med Cloudflare Pages / GitHub Pages)

---

## 🚀 Framtida Förbättringar

- [ ] Blogg-sektion för SEO (tips om värmepumpar, badrumsrenovering etc.)
- [ ] Cookie consent (GDPR) om analytics aktiveras
- [ ] Bokningskalender (Calendly eller liknande)
- [ ] Prisberäknare för värmepumpar

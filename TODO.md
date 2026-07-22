# VVS Projekt – Status & Att Göra-lista

Dokumentation över vad som har genomförts och vad som återstår innan lansering av **vvsprojekt.se**.

---

## ✅ Genomfört idag

- [x] **Projektstruktur & Rebranding**: Omvandlat hela Elprojekt-mallen till VVS Projekt (Astro 5 + Tailwind v4).
- [x] **Central Konfiguration (`src/config.ts`)**: Skapat central konfigurationsfil där all företagsdata hanteras på ett ställe.
- [x] **Rensning av Känslig Data**: Tagit bort alla personuppgifter, koder, API-referenser och gamla Elprojekt-filer.
- [x] **Nya VVS-Tjänster (6 st)**: Skapat innehåll för Värmepumpar, Badrumsrenovering, Rör & Avlopp, Vattenburen Värme, Service & Underhåll och Köksrenovering VVS.
- [x] **Nya VVS-Projekt (3 st)**: Skapat projektstrukturer för villavärmepump, badrumsrenovering och industrirör.
- [x] **Logotyper & Favicon**: Lagt in `full_logo.svg` i Navbar/Footer, `icon_logo.svg` som `favicon.svg` samt justerat vänsterlinjering i headern.
- [x] **Bilder & Optimering**: Lagt in alla riktiga bild-assets i `src/assets/images/` och konfigurerat Astros automatiska WebP-komprimering.
- [x] **Serviceområden**: Uppdaterat till Tjörn • Orust • Stenungsund • Uddevalla • Kungälv i hela källkoden och SEO-metadata.
- [x] **Accentfärg**: Testat och ställt in accentfärg `#C75746`.
- [x] **Git & GitHub Repository**: Skapat publikt GitHub-repository ([https://github.com/AlexNorb/vvsprojekt](https://github.com/AlexNorb/vvsprojekt)) och pushat källkoden till branchen `main`.
- [x] **GitHub Actions Fix**: Löste undermapps 404-felet i `astro.config.mjs` för GitHub Pages (`base: '/vvsprojekt/'`).

---

## 🔑 Kritiskt (Återstår inför lansering)

### 1. Företagsinformation
Uppdatera följande fält i `src/config.ts`:

- [ ] **Företagsnamn** (`legalName`) – Juridiskt bolagsnamn (t.ex. "VVS Projekt i Uddevalla AB")
- [ ] **Organisationsnummer** (`orgNr`)
- [ ] **Kontaktperson** (`contactPerson`) – Namn som visas på Om oss-sektionen
- [ ] **Telefonnummer** (`phone.display` och `phone.href`)
- [ ] **E-postadress** (`email.display` och `email.href`)
- [ ] **Fysisk Adress** (`address.street`, `postalCode`, `city`, `full`)

### 2. Sociala Medier & Google Business
Uppdatera i `src/config.ts`:

- [ ] **Facebook-URL** (`social.facebook`)
- [ ] **Instagram-URL** (`social.instagram`)
- [ ] **Google Reviews-URL** (`social.googleReview`)

### 3. Kontaktformulär (Backend)
- [ ] Skapa konto på [Resend.com](https://resend.com) och hämta API-nyckel.
- [ ] Verifiera avsändardomän (`vvsprojekt.se`) i Resend Dashboard.
- [ ] Skapa ny Cloudflare Worker med koden från `cloudflareworker-template.js`.
- [ ] Lägg till `RESEND_API_KEY` som miljövariabel i Cloudflare Worker settings.
- [ ] Uppdatera `from` och `to` i worker-koden med riktiga mailadresser.
- [ ] Klistra in den färdiga Worker-URL:en i `contactFormEndpoint` i `src/config.ts`.

---

## 📸 Innehåll & Grafik (Återstår)

- [ ] **Profilbild**: Lägg till profilbild på om-oss sektionen om du vill ersätta bildplatshållaren.
- [ ] **OG-bild**: Skapa `public/images/og-image.jpeg` (1200×630px) för snygga länkkort vid delning i sociala medier.
- [ ] **Projekt & Omdömen**: Ersätt platshållar-omdömen och exempelprojekt med riktiga kundreferenser när sådana finns.

---

## 🌐 Domän & GitHub Pages (Inställning)

- [ ] **Aktivera GitHub Pages Deployment**:
  Gå till [https://github.com/AlexNorb/vvsprojekt/settings/pages](https://github.com/AlexNorb/vvsprojekt/settings/pages) och ändra **Source** från *"Deploy from a branch"* till **"GitHub Actions"**.
- [ ] **Koppla egen domän (`vvsprojekt.se`)**:
  När du har köpt domänen, ange den under **Custom domain** i GitHub Pages inställningar och peka DNS-poster hos din registrar.

---

## 🚀 Framtida Utveckling

- [ ] Bloggsektion för SEO (artiklar om värmepumpar, ROT-avdrag, badrumstips)
- [ ] GDPR Cookie Consent-banner vid aktivering av Google Analytics
- [ ] Bokningskalender (t.ex. Calendly-integration för hembesök)

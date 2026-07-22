/**
 * =======================================================
 *  VVS PROJEKT – Central Konfiguration
 * =======================================================
 *
 *  All företagsinformation samlas här. Uppdatera värdena
 *  nedan och hela siten uppdateras automatiskt.
 *
 *  Platshållare är markerade med "TODO" – fyll i dessa
 *  med riktiga uppgifter innan lansering.
 * =======================================================
 */

export const siteConfig = {
  /** Företagets visningsnamn (versaler, för logga & headings) */
  brandName: "VVS PROJEKT",

  /** Företagets juridiska namn */
  legalName: "TODO Företagsnamn AB",

  /** Organisationsnummer */
  orgNr: "TODO-xxxxxx-xxxx",

  /** Webbplatsens domän (utan trailing slash) */
  domain: "https://vvsprojekt.se",

  /** Kontaktperson */
  contactPerson: "TODO Namn",

  /** Telefonnummer */
  phone: {
    /** Visningsformat */
    display: "TODO-XXX XX XX",
    /** tel:-länk (utan mellanslag, med landskod) */
    href: "tel:+46XXXXXXXXX",
  },

  /** E-postadress */
  email: {
    display: "TODO@vvsprojekt.se",
    href: "mailto:TODO@vvsprojekt.se",
  },

  /** Fysisk adress */
  address: {
    street: "TODO Gatuadress",
    postalCode: "TODO XX XX",
    city: "TODO Ort",
    /** Hela adressen som en sträng (för kopiering) */
    full: "TODO Gatuadress, TODO XX XX TODO Ort",
  },

  /** Sociala medier & review-länkar */
  social: {
    facebook: "#", // TODO: Fyll i Facebook-URL
    instagram: "#", // TODO: Fyll i Instagram-URL
    googleReview: "#", // TODO: Fyll i Google Review-URL
  },

  /** Serviceområden (kommuner) */
  serviceAreas: [
    "TODO Kommun 1",
    "TODO Kommun 2",
    "TODO Kommun 3",
  ],

  /** SEO-metadata */
  seo: {
    defaultDescription:
      "Lokal rörläggare och värmepumpsinstallatör. Personlig service och moderna VVS-lösningar – värmepumpar, badrumsrenovering, rör & avlopp. Starta ditt nästa VVS Projekt nu!",
    geoRegion: "SE-O", // Västra Götaland
    geoPlacename: "TODO Ort",
  },

  /** Schema.org strukturerad data */
  schema: {
    type: "Plumber" as const,
    serviceTypes: [
      "Värmepump",
      "Badrumsrenovering",
      "Rörläggning",
      "Avlopp",
      "Golvvärme",
      "Vattenburen värme",
      "Köksrenovering VVS",
      "VVS-service",
      "Stambyten",
      "Vattenläcka",
    ],
    priceRange: "$$",
  },

  /** Kontaktformulär – Cloudflare Worker endpoint */
  contactFormEndpoint: "TODO_CLOUDFLARE_WORKER_URL",

  /** Systerbolag / Partners */
  partners: {
    byggprojekt: {
      name: "Byggprojekt",
      url: "https://byggprojekt.se/",
    },
    elprojekt: {
      name: "Elprojekt",
      url: "https://elprojekt.nu/",
    },
  },
} as const;

/** Typexport för enkel användning */
export type SiteConfig = typeof siteConfig;

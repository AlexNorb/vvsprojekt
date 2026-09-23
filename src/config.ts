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
  brandName: "VVSPROJEKT",

  /** Företagets juridiska namn */
  legalName: "VVSProjekt i Uddevalla AB",

  /** Organisationsnummer */
  orgNr: "559592-2583",

  /** Webbplatsens domän (utan trailing slash) */
  domain: "https://vvsprojekt.se",

  /** Kontaktperson */
  contactPerson: "Kalle",

  /** Telefonnummer */
  phone: {
    /** Visningsformat */
    display: "073-678 51 81",
    /** tel:-länk (utan mellanslag, med landskod) */
    href: "tel:+46736785181",
  },

  /** E-postadress */
  email: {
    display: "info@vvsprojekt.se",
    href: "mailto:info@vvsprojekt.se",
  },

  /** Fysisk adress */
  address: {
    street: "Friggavägen 6",
    postalCode: "451 76",
    city: "Uddevalla",
    /** Hela adressen som en sträng (för kopiering) */
    full: "Friggavägen 6, 451 76 Uddevalla",
  },

  /** Sociala medier & review-länkar */
  social: {
    facebook: "#", // TODO: Fyll i Facebook-URL
    instagram: "#", // TODO: Fyll i Instagram-URL
    googleReview: "#", // TODO: Fyll i Google Review-URL
  },

  /** Serviceområden (kommuner) */
  serviceAreas: [
    "Tjörn",
    "Orust",
    "Stenungsund",
    "Uddevalla",
    "Kungälv",
  ],

  /** SEO-metadata */
  seo: {
    defaultDescription:
      "Auktoriserad VVS-installatör i Tjörn, Orust, Stenungsund, Uddevalla & Kungälv. Kompletta lösningar inom värmepumpar, badrumsrenovering, rördragning och service. Kontakta oss för offert.",
    geoRegion: "SE-O", // Västra Götaland
    geoPlacename: "Tjörn, Orust, Stenungsund, Uddevalla, Kungälv",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "5",
    },
  },

  /** Kontaktformulär – Cloudflare Worker endpoint */
  contactFormEndpoint: "https://vvsprojekt-resend.allecc.workers.dev/",

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

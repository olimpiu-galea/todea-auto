import { CATEGORY_GROUPS, FAQ_ITEMS } from "@/lib/content-data";
import { siteConfig } from "@/lib/site-config";

const BASE = siteConfig.url;

export function buildJsonLdGraph() {
  const offers = CATEGORY_GROUPS.flatMap((group) =>
    group.sections
      .filter((s) => s.price)
      .map((s) => ({
        "@type": "Offer" as const,
        name: s.title,
        description: s.details?.[0] ?? group.summary,
        category: group.title,
        url: `${BASE}${group.href}#${s.id}`,
        price: s.price!.replace(/[^\d.]/g, ""),
        priceCurrency: "RON",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
      }))
  );

  const drivingSchool = {
    "@type": "DrivingSchool",
    "@id": `${BASE}/#organization`,
    name: siteConfig.name,
    alternateName: ["Todea Auto Moto", "Todea Auto", "Școală de șoferi Todea Dej"],
    legalName: siteConfig.legalName,
    description: `${siteConfig.description} / ${siteConfig.descriptionEn}`,
    url: BASE,
    telephone: siteConfig.phoneDisplay,
    image: `${BASE}/logo-full.webp`,
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/logo-full.webp`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: "Cluj",
      postalCode: "405200",
      addressCountry: "RO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.1417651,
      longitude: 23.8769804,
    },
    hasMap: siteConfig.googleMaps,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [siteConfig.facebook, siteConfig.googleMaps],
    areaServed: [
      { "@type": "City", name: "Dej" },
      { "@type": "AdministrativeArea", name: "Cluj" },
      { "@type": "Country", name: "Romania" },
    ],
    knowsLanguage: ["ro", "en"],
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Bank transfer, Installments",
    priceRange: "$$",
    foundingLocation: {
      "@type": "Place",
      name: "Dej, Romania",
    },
    makesOffer: offers,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneDisplay,
        contactType: "customer service",
        availableLanguage: ["Romanian", "English"],
        areaServed: "RO",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: ["ro-RO", "en"],
    publisher: { "@id": `${BASE}/#organization` },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Contact via WhatsApp",
      target: `https://wa.me/${siteConfig.phone}`,
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${BASE}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const service = {
    "@type": "Service",
    "@id": `${BASE}/#service`,
    name: "Driver education / Școală de șoferi",
    serviceType: "Driving school training",
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "City", name: "Dej" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "License categories / Categorii de permis",
      itemListElement: CATEGORY_GROUPS.map((group, i) => ({
        "@type": "OfferCatalog",
        position: i + 1,
        name: group.title,
        url: `${BASE}${group.href}`,
        itemListElement: group.sections.map((s, j) => ({
          "@type": "Offer",
          position: j + 1,
          name: s.title,
          price: s.price?.replace(/[^\d.]/g, ""),
          priceCurrency: "RON",
          url: `${BASE}${group.href}#${s.id}`,
        })),
      })),
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [drivingSchool, website, service, faqPage],
  };
}

export const siteConfig = {
  name: "TODEA AUTO-MOTO",
  legalName: "TODEA-AUTO MOTO SRL",
  tagline: "Școală auto de top în Dej",
  description:
    "Școală de șoferi din Dej — pregătire practică și teoretică pentru categoriile A, A1, A2, B, BE, C, CE, D. Instructori calmi, program flexibil.",
  phone: "40767083669",
  phoneDisplay: "+40 767 083 669",
  phoneLocal: "0767 083 669",
  url: "https://www.todea-auto.ro",
  address: {
    street: "Strada 1 Mai Nr 6 ET:1",
    city: "Dej",
    country: "România",
    full: "Strada 1 Mai Nr 6 ET:1, Dej, România",
  },
  hours: "Luni – Sâmbătă: 08:00 – 18:00",
  facebook: "https://www.facebook.com/todea.auto.moto",
  /** Profil Google Maps — Todea Auto Moto */
  googleMaps:
    "https://www.google.com/maps/place/Todea+Auto+Moto/@47.1417651,23.8744055,17z/data=!3m1!4b1!4m6!3m5!1s0x4749b9dbdb319179:0x725b6f82069e8a42!8m2!3d47.1417651!4d23.8769804!16s%2Fg%2F11t5_20xp5",
  categories: "A, A1, A2, A1 automat, B, BE, B automat, B96, C, CE, D",
  stats: {
    students: "500+",
    fleet: "5000+",
  },
};

export function whatsappUrl(text?: string) {
  const msg = encodeURIComponent(
    text ??
      "Bună ziua! Sunt interesat(ă) de cursurile școlii TODEA AUTO-MOTO din Dej. Aș dori mai multe informații."
  );
  return `https://wa.me/${siteConfig.phone}?text=${msg}`;
}

export function telUrl() {
  return `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`;
}

export function mapsUrl() {
  return siteConfig.googleMaps;
}

/** Embed iframe — același profil Maps ca googleMaps */
export function mapsEmbedUrl() {
  return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730!2d23.8769804!3d47.1417651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4749b9dbdb319179%3A0x725b6f82069e8a42!2sTodea%20Auto%20Moto!5e0!3m2!1sro!2sro!4v1!5m2!1sro!2sro";
}

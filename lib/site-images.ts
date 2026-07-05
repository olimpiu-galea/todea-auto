export type SiteImage = { src: string; alt: string };

export type CategoryImage = {
  /** Card + category page hero icon */
  cardSrc: string;
  /** Open Graph / social preview */
  heroSrc: string;
  alt: string;
};

/** Homepage hero — mașină școală TODEA */
export const MAIN_HERO_IMAGE: SiteImage = {
  src: "/images/Todea-auto.webp",
  alt: "Mașină școală TODEA AUTO-MOTO — permis categoria B Dej",
};

/** Servicii — mapping 1:1 cu site-ul original (flipbox back images) */
export const SERVICE_IMAGES: Record<string, string> = {
  "Pregătire teoretică (Sala)": "/images/sala-curs.webp",
  "Program flexibil": "/images/todea-graph2.webp",
  "Pregătire practică auto": "/images/todea-graph4.webp",
  "Categorii auto și moto": "/images/todea-graph1.webp",
  "Instructori experimentați": "/images/todea-graph5.webp",
  "Suport până la examen": "/images/sala.webp",
};

/** Categorii — iconiță vehicul pe gradient (card + hero pagină) */
export const CATEGORY_IMAGES: Record<string, CategoryImage> = {
  motociclete: {
    cardSrc: "/images/icons/moto.png",
    heroSrc: "/images/categories/motociclete-hero.webp",
    alt: "Motociclete — categorii A, A1, A2",
  },
  autoturisme: {
    cardSrc: "/images/icons/auto.png",
    heroSrc: "/images/categories/autoturisme-hero.webp",
    alt: "Autoturisme — permis categoria B, BE, B96",
  },
  camioane: {
    cardSrc: "/images/icons/truck.png",
    heroSrc: "/images/categories/camioane-hero.webp",
    alt: "Camioane — categorii C, CE",
  },
  autobuze: {
    cardSrc: "/images/icons/bus.png",
    heroSrc: "/images/categories/autobuze-hero.webp",
    alt: "Autobuze — categoria D",
  },
};

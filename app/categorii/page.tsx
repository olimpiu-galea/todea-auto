import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_GROUPS } from "@/lib/content-data";
import { CATEGORY_IMAGES } from "@/lib/site-images";
import styles from "./categorii.module.css";

export const metadata: Metadata = {
  title: "Categorii permis — TODEA AUTO-MOTO Dej",
  description:
    "Categorii disponibile: motociclete (A, A1, A2), autoturisme (B, BE, B96), camioane (C, CE), autobuze (D).",
  alternates: { canonical: "/categorii" },
};

export default function CategoriiPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>Categorii disponibile</h1>
          <p>Informații și oferte pentru auto, moto, camioane și autobuze.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {CATEGORY_GROUPS.map((g) => {
              const img = CATEGORY_IMAGES[g.slug];
              return (
                <Link key={g.slug} href={g.href} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <img
                      src={img.cardSrc}
                      alt={img.alt}
                      className={`${styles.img} ${styles.imgIcon}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className={styles.body}>
                    <h2>{g.title}</h2>
                    <p>{g.summary}</p>
                    <span className={styles.arrow}>Detalii →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

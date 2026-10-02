import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { siteConfig, telUrl, whatsappUrl, mapsUrl, mapsEmbedUrl, mailUrl } from "@/lib/site-config";
import styles from "./contact.module.css";

const WhatsAppWizard = dynamic(() => import("@/components/WhatsAppWizard"), {
  loading: () => <div className={styles.wizardPlaceholder} aria-hidden />,
});
export const metadata: Metadata = {
  title: "Contact — TODEA AUTO-MOTO Dej",
  description:
    "Contactează școala de șoferi TODEA AUTO-MOTO din Dej. Telefon, WhatsApp, program Luni–Sâmbătă 08:00–18:00.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Suntem aici să te ajutăm să obții permisul rapid și în siguranță. Îți răspundem la
            întrebări, îți explicăm pașii de înscriere și îți oferim toate detaliile de care ai
            nevoie.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.info}>
            <h2>Mai multe informații</h2>
            <p className={styles.hours}>{siteConfig.hours}</p>

            <div className={styles.cards}>
              <a href={telUrl()} className={styles.card}>
                <span className={styles.cardIcon}>📞</span>
                <span className={styles.cardLabel}>Sună acum</span>
                <span className={styles.cardValue}>{siteConfig.phoneLocal}</span>
              </a>
              <a href={whatsappUrl()} className={styles.card} target="_blank" rel="noopener noreferrer">
                <span className={styles.cardIcon}>💬</span>
                <span className={styles.cardLabel}>Scrie pe WhatsApp</span>
                <span className={styles.cardValue}>{siteConfig.phoneLocal}</span>
              </a>
              <a
                href={mailUrl("Informații TODEA AUTO-MOTO")}
                className={styles.card}
              >
                <span className={styles.cardIcon}>✉️</span>
                <span className={styles.cardLabel}>Trimite email</span>
                <span className={styles.cardValue}>{siteConfig.email}</span>
              </a>
              <a href={mapsUrl()} className={styles.card} target="_blank" rel="noopener noreferrer">
                <span className={styles.cardIcon}>📍</span>
                <span className={styles.cardLabel}>Adresă</span>
                <span className={styles.cardValue}>{siteConfig.address.street}</span>
              </a>
            </div>

            <div className={styles.mapWrap}>
              <iframe
                title="Locația TODEA AUTO-MOTO pe Google Maps"
                src={mapsEmbedUrl()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.map}
              />
            </div>
          </div>

          <div className={styles.formSide}>
            <h2>Formular interactiv WhatsApp</h2>
            <p className={styles.formLead}>
              Alege opțiunile tale și trimite mesajul direct pe WhatsApp — fără așteptare, fără
              formular clasic.
            </p>
            <WhatsAppWizard />
          </div>
        </div>
      </section>
    </main>
  );
}

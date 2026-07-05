import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politica cookies — TODEA AUTO-MOTO",
  alternates: { canonical: "/politica-cookies" },
};

export default function CookiesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>Politica de cookies</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container prose ${styles.prose}`}>
          <p>
            Site-ul nostru folosește cookie-uri pentru a-ți oferi o experiență cât mai bună și
            rapidă. Cookie-urile necesare sunt stocate automat în browserul tău, deoarece sunt
            esențiale pentru funcționarea de bază a site-ului.
          </p>

          <h2>Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere mici de text stocate pe dispozitivul tău când vizitezi un
            site web. Ele permit site-ului să-ți rețină preferințele și să funcționeze corect.
          </p>

          <h2>Cookie-uri utilizate pe acest site</h2>
          <h3>Cookies necesare (mereu active)</h3>
          <ul>
            <li>
              <strong>Preferință consimțământ</strong> — salvează alegerea ta privind cookie-urile
              (localStorage)
            </li>
          </ul>

          <h3>Cookies analitice (doar cu consimțământ)</h3>
          <ul>
            <li>
              Google Analytics — analiză trafic (dacă este activat de administrator)
            </li>
          </ul>

          <h2>Cum controlezi cookie-urile</h2>
          <p>
            Poți accepta sau refuza cookie-urile non-esențiale din bannerul afișat la prima
            vizită. De asemenea, poți dezactiva cookie-urile din setările browserului tău.
          </p>

          <h2>Mai multe informații</h2>
          <p>
            Pentru detalii despre prelucrarea datelor personale, consultă{" "}
            <a href="/politica-de-confidentialitate">Politica de confidențialitate</a>.
          </p>
        </div>
      </section>
    </main>
  );
}

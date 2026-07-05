import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Termeni și condiții — TODEA AUTO-MOTO",
  alternates: { canonical: "/termeni-si-conditii" },
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>Termeni și condiții</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container prose ${styles.prose}`}>
          <h2>1. Obiect</h2>
          <p>
            Prezentele termeni și condiții reglementează utilizarea site-ului web al{" "}
            {siteConfig.legalName} și relația contractuală privind serviciile de școlarizare pentru
            obținerea permisului de conducere.
          </p>

          <h2>2. Servicii oferite</h2>
          <p>
            {siteConfig.name} oferă cursuri de pregătire teoretică și practică pentru obținerea
            permisului de conducere, pentru categoriile: {siteConfig.categories}. Serviciile sunt
            prestate la sediul din {siteConfig.address.full}.
          </p>

          <h2>3. Înscriere</h2>
          <p>
            Înscrierea se poate face online (formular WhatsApp), telefonic sau la sediu. Cursantul
            trebuie să îndeplinească condițiile legale de vârstă, aptitudine medicală și
            psihologică, conform categoriei solicitate.
          </p>

          <h2>4. Tarife și plată</h2>
          <p>
            Tarifele sunt afișate pe paginile de categorii. Plata poate fi efectuată integral sau în
            rate (unde este menționat). Detaliile contractuale se stabilesc la înscriere.
          </p>

          <h2>5. Obligațiile școlii</h2>
          <ul>
            <li>Pregătire conform programelor aprobate</li>
            <li>Instructori autorizați</li>
            <li>Sprijin până la promovarea examenului</li>
          </ul>

          <h2>6. Obligațiile cursantului</h2>
          <ul>
            <li>Prezență la orele programate în stare psiho-fizică corespunzătoare</li>
            <li>Respectarea programului de învățământ</li>
            <li>Deținerea documentelor necesare (CI, caiet cursant, apt medical)</li>
          </ul>

          <h2>7. Limitarea răspunderii</h2>
          <p>
            {siteConfig.legalName} nu garantează promovarea examenului, ci o pregătire conform
            standardelor legale. Rezultatul depinde și de implicarea cursantului.
          </p>

          <h2>8. Proprietate intelectuală</h2>
          <p>
            Conținutul site-ului (texte, imagini, design) aparține {siteConfig.legalName} sau
            licențiatorilor săi și nu poate fi copiat fără acord scris.
          </p>

          <h2>9. Lege aplicabilă</h2>
          <p>
            Prezentele termeni sunt guvernate de legislația română. Litigiile se soluționează pe
            cale amiabilă sau de instanțele competente din România.
          </p>

          <h2>10. Contact</h2>
          <p>
            {siteConfig.legalName} · {siteConfig.address.full} · {siteConfig.phoneDisplay}
          </p>
          <p>
            Consumatorii pot apela la{" "}
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
              ANPC
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

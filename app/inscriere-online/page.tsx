import type { Metadata } from "next";
import dynamic from "next/dynamic";
import styles from "./inscriere.module.css";

const InscriereForm = dynamic(() => import("@/components/InscriereForm"), {
  loading: () => <div className={styles.formPlaceholder} aria-hidden />,
});
export const metadata: Metadata = {
  title: "Înscriere Online — TODEA AUTO-MOTO Dej",
  description:
    "Înregistrează-te online la școala de șoferi TODEA AUTO-MOTO Dej. Formular interactiv — trimite datele pe WhatsApp.",
  alternates: { canonical: "/inscriere-online" },
};

export default function InscrierePage() {
  return (
    <main id="main">
      <section className={`page-hero ${styles.hero}`}>
        <div className="container">
          <h1>Înregistrează-te online</h1>
          <p>
            Completează formularul interactiv de mai jos și trimite mesajul pe WhatsApp. După
            trimitere, vei fi contactat(ă) în cel mai scurt timp de un reprezentant al școlii
            pentru finalizarea înscrierii.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <InscriereForm />
        </div>
      </section>
    </main>
  );
}

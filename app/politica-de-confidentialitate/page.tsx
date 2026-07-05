import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Politică de confidențialitate & GDPR — TODEA AUTO-MOTO",
  alternates: { canonical: "/politica-de-confidentialitate" },
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="container">
          <h1>Politică de confidențialitate & GDPR</h1>
        </div>
      </section>
      <section className={styles.content}>
        <div className={`container prose ${styles.prose}`}>
          <h2>1. Protecția persoanelor cu privire la prelucrarea datelor cu caracter personal</h2>
          <p>
            TODEA-AUTO MOTO SRL se angajează să protejeze confidențialitatea datelor utilizatorilor
            site-ului {siteConfig.url.replace("https://", "")} și să nu transmită datele personale
            către terți, folosindu-le exclusiv în scopul comunicării cu clienții și al furnizării
            serviciilor oferite. Compania va reține datele personale doar pentru informarea
            utilizatorilor și pentru comunicarea legată de serviciile oferite. Nu promovăm SPAM-ul.
            Orice utilizator care și-a furnizat adresa de email pe site poate solicita ștergerea
            acesteia din baza de date. Pentru dezabonare sau ștergerea datelor, ne poți contacta
            la telefon {siteConfig.phoneDisplay} sau pe WhatsApp.
          </p>

          <h2>2. Operatorul de date</h2>
          <p>
            Denumire societate: {siteConfig.legalName}
            <br />
            Adresă: {siteConfig.address.full}
            <br />
            Telefon: {siteConfig.phoneDisplay}
          </p>

          <h2>3. Definiții</h2>
          <p>
            Prin „date cu caracter personal” se înțeleg orice informații privind o persoană fizică
            identificată sau identificabilă, cum ar fi: nume, prenume, email, telefon, adresă IP sau
            alte date relevante.
          </p>

          <h2>4. Tipuri de date colectate</h2>
          <h3>4.1 Date furnizate direct de utilizator</h3>
          <ul>
            <li>Nume și prenume</li>
            <li>Adresă de email</li>
            <li>Fotografii pentru identificare</li>
            <li>Număr de telefon</li>
            <li>Mesaj transmis prin formular WhatsApp</li>
          </ul>
          <p>Aceste date sunt colectate exclusiv atunci când utilizatorul le furnizează voluntar.</p>

          <h3>4.2 Date colectate automat</h3>
          <ul>
            <li>Adresa IP</li>
            <li>Tipul browserului</li>
            <li>Dispozitiv utilizat</li>
            <li>Pagini vizitate și comportament pe site</li>
          </ul>
          <p>Aceste date sunt colectate prin cookie-uri și tehnologii similare.</p>

          <h2>5. Scopul prelucrării datelor</h2>
          <ul>
            <li>Comunicarea directă cu tine</li>
            <li>Răspunsul la solicitări sau întrebări</li>
            <li>Oferirea de informații despre serviciile noastre</li>
            <li>Îmbunătățirea experienței pe site</li>
            <li>Asigurarea securității platformei</li>
          </ul>

          <h2>6. Temeiul legal al prelucrării</h2>
          <ul>
            <li>Consimțământul utilizatorului</li>
            <li>Necesitatea executării unui contract sau a unor demersuri precontractuale</li>
            <li>Obligații legale (ex: facturare)</li>
            <li>Interes legitim (securitate, prevenirea fraudelor)</li>
          </ul>

          <h2>7. Politica anti-SPAM</h2>
          <p>
            {siteConfig.legalName} nu transmite mesaje comerciale nesolicitate. Utilizatorii au
            dreptul de a solicita oricând ștergerea datelor sau dezabonarea.
          </p>

          <h2>8. Cookie-uri</h2>
          <p>
            Site-ul utilizează cookie-uri exclusiv în scopuri statistice și pentru îmbunătățirea
            experienței utilizatorilor. Utilizatorii pot controla sau dezactiva cookie-urile direct
            din browser. Vezi și{" "}
            <a href="/politica-cookies">Politica de cookies</a>.
          </p>

          <h2>9. Durata stocării datelor</h2>
          <p>
            Datele sunt stocate pe durata necesară îndeplinirii scopurilor menționate, până la
            retragerea consimțământului sau conform obligațiilor legale (ex: 10 ani pentru documente
            fiscale).
          </p>

          <h2>10. Divulgarea datelor către terți</h2>
          <p>
            Nu vindem și nu distribuim datele tale către terți în scopuri comerciale. Datele pot fi
            transmise doar către furnizori de servicii (hosting, IT, contabilitate) sau autorități
            publice, atunci când există obligații legale.
          </p>

          <h2>11. Securitatea datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele împotriva
            accesului neautorizat, pierderii, distrugerii sau divulgării ilegale.
          </p>

          <h2>12. Drepturile utilizatorilor</h2>
          <p>Conform GDPR, beneficiezi de următoarele drepturi:</p>
          <ul>
            <li>Dreptul de acces la date</li>
            <li>Dreptul la rectificare</li>
            <li>Dreptul la ștergere („dreptul de a fi uitat”)</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul la opoziție</li>
            <li>Dreptul de a nu face obiectul unei decizii automate</li>
          </ul>
          <p>
            Pentru exercitarea acestor drepturi, ne poți contacta la telefon {siteConfig.phoneDisplay}
            sau pe WhatsApp. De
            asemenea, ai dreptul de a depune o plângere la ANSPDCP.
          </p>

          <h2>13. Modificări ale politicii</h2>
          <p>
            {siteConfig.legalName} își rezervă dreptul de a modifica această politică. Orice
            actualizare va fi publicată pe această pagină.
          </p>

          <h2>14. Acceptarea politicii</h2>
          <p>
            Prin utilizarea site-ului {siteConfig.url.replace("https://", "")} acceptați termenii
            acestei politici de confidențialitate.
          </p>

          <h2>15. Contact</h2>
          <p>
            {siteConfig.legalName} · {siteConfig.address.full} · {siteConfig.phoneDisplay}
          </p>
        </div>
      </section>
    </main>
  );
}

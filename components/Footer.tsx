import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import styles from "./footer.module.css";

function FacebookIcon() {
  return (
    <svg className={styles.fbIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Link href="/" className={styles.logoLink}>
            <img
              src="/logo-footer.webp"
              alt={siteConfig.name}
              width={256}
              height={120}
              className={styles.logoImg}
              loading="lazy"
              decoding="async"
            />
          </Link>
          <p className={styles.tagline}>
            Școală auto Dej categoria B, cursuri șoferi în Dej, școală de șoferi Dej, permis auto
            categoria B, permise auto Dej
          </p>
        </div>
        <div>
          <p className={styles.colTitle}>Navigare utilă</p>
          <nav className={styles.links} aria-label="Footer">
            <Link href="/categorii">Categorii de permis</Link>
            <Link href="/inscriere-online">Înscriere online</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div>
          <p className={styles.colTitle}>Date de contact</p>
          <p className={styles.hours}>{siteConfig.hours}</p>
          <div className={styles.socialActions}>
            <a
              href={whatsappUrl()}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scrie pe WhatsApp
            </a>
            <a
              href={siteConfig.facebook}
              className={`btn ${styles.btnFacebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className={styles.legalBar}>
        <div className={`container ${styles.legalInner}`}>
          <nav className={styles.legal} aria-label="Legal">
            <Link href="/politica-de-confidentialitate">Politică de confidențialitate & GDPR</Link>
            <Link href="/politica-cookies">Politica cookies</Link>
            <Link href="/termeni-si-conditii">Termeni și condiții</Link>
            <a href="https://anpc.ro/" target="_blank" rel="noopener noreferrer">
              ANPC
            </a>
          </nav>
          <p className={styles.copy}>
            {siteConfig.legalName} | © {new Date().getFullYear()} Toate drepturile rezervate
          </p>
        </div>
      </div>
    </footer>
  );
}

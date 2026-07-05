"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./cookie-banner.module.css";

const KEY = "todea-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const save = (value: string) => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-label="Consimțământ cookies">
      <div className={styles.box}>
        <h2 className={styles.title}>Respectăm confidențialitatea ta</h2>
        <p>
          Folosim cookie-uri pentru a îmbunătăți experiența pe site. Poți alege ce cookie-uri
          accepți.{" "}
          <Link href="/politica-cookies">Politica cookies</Link> ·{" "}
          <Link href="/politica-de-confidentialitate">Confidențialitate</Link>
        </p>

        {customize && (
          <div className={styles.prefs}>
            <label>
              <input type="checkbox" checked disabled /> Cookies necesare (mereu active)
            </label>
            <label>
              <input type="checkbox" id="analytics" /> Cookies analitice
            </label>
          </div>
        )}

        <div className={styles.actions}>
          <button type="button" className="btn btn-ghost" onClick={() => save("reject")}>
            Refuză toate
          </button>
          <button type="button" className="btn btn-ghost" onClick={() => setCustomize(!customize)}>
            Personalizează
          </button>
          <button type="button" className="btn btn-primary" onClick={() => save("all")}>
            Acceptă toate
          </button>
        </div>
      </div>
    </div>
  );
}

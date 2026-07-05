"use client";

import { useCallback, useEffect, useState } from "react";
import { MAIN_HERO_IMAGE } from "@/lib/site-images";
import styles from "./hero-visual.module.css";

export default function HeroVisual() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        className={styles.wrap}
        onClick={() => setOpen(true)}
        aria-label="Deschide imaginea mărită"
      >
        <img
          src={MAIN_HERO_IMAGE.src}
          alt={MAIN_HERO_IMAGE.alt}
          className={styles.img}
          width={540}
          height={405}
          fetchPriority="high"
          decoding="async"
        />
        <span className={styles.zoomHint} aria-hidden>
          Mărește
        </span>
      </button>

      {open && (
        <div
          className={styles.lightbox}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={MAIN_HERO_IMAGE.alt}
        >
          <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Închide">
            ×
          </button>
          <img
            src={MAIN_HERO_IMAGE.src}
            alt={MAIN_HERO_IMAGE.alt}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
            decoding="async"
          />
        </div>
      )}
    </>
  );
}

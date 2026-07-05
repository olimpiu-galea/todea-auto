"use client";

import Link from "next/link";
import { useEffect } from "react";
import type { CategorySection } from "@/lib/content-data";
import styles from "./category-sections.module.css";

function SectionBody({ section, showEnroll }: { section: CategorySection; showEnroll?: boolean }) {
  return (
    <div className={styles.body}>
      {section.details.length > 0 && (
        <div className={styles.block}>
          <h3>Detalii</h3>
          <ul>
            {section.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {section.courseInfo.length > 0 && (
        <div className={styles.block}>
          <h3>Informații curs</h3>
          <ul>
            {section.courseInfo.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {section.obligations.length > 0 && (
        <div className={styles.block}>
          <h3>Obligațiile cursantului</h3>
          <ul>
            {section.obligations.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {section.enrollment.length > 0 && (
        <div className={styles.block}>
          <h3>Condiții pentru înscriere</h3>
          <ul>
            {section.enrollment.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {section.exam.length > 0 && (
        <div className={styles.block}>
          <h3>Detalii examen</h3>
          <ul>
            {section.exam.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}

      {showEnroll && (
        <Link href="/inscriere-online" className={`btn btn-primary ${styles.enrollBtn}`}>
          Înscriere online
        </Link>
      )}
    </div>
  );
}

export default function CategorySections({
  sections,
  showEnroll = true,
}: {
  sections: CategorySection[];
  showEnroll?: boolean;
}) {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el instanceof HTMLDetailsElement) {
      el.open = true;
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  }, [sections]);

  return (
    <div className={styles.list}>
      {sections.map((section) => (
        <details key={section.id} id={section.id} className={styles.item}>
          <summary className={styles.summary}>
            <span className={styles.summaryTitle}>{section.title}</span>
            <span className={styles.summaryMeta}>
              {section.price && <span className={styles.price}>{section.price}</span>}
              <span className={styles.icon} aria-hidden />
            </span>
          </summary>
          {section.payment && <p className={styles.payment}>{section.payment}</p>}
          <SectionBody section={section} showEnroll={showEnroll} />
        </details>
      ))}
    </div>
  );
}

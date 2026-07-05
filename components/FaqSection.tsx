import { FAQ_ITEMS } from "@/lib/content-data";
import styles from "./faq.module.css";

export default function FaqSection() {
  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">FAQ</span>
          <h2 className={`section-title ${styles.title}`}>Întrebări frecvente</h2>
        </div>

        <div className={styles.grid}>
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.question}>
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

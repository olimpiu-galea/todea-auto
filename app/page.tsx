import Link from "next/link";
import dynamic from "next/dynamic";

import HeroFacebookReviews from "@/components/HeroFacebookReviews";

import { CATEGORY_GROUPS, SERVICES } from "@/lib/content-data";

import { CATEGORY_IMAGES, SERVICE_IMAGES } from "@/lib/site-images";

import styles from "./page.module.css";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className={styles.deferredSection} aria-hidden />,
});

const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  loading: () => <div className={styles.deferredSection} aria-hidden />,
});



export default function HomePage() {

  return (

    <main id="main">

      <section className={styles.hero}>

        <div className={`container ${styles.heroGrid}`}>

          <div className={styles.heroCopy}>

            <p className={styles.eyebrow}>Școală auto Dej</p>

            <h1>

              Învață să conduci corect.

              <span className={styles.accent}> Din prima.</span>

            </h1>

            <p className={styles.lead}>

              Suntem o școală de șoferi din Dej, axată pe pregătire practică reală, instructori

              calmi și explicații pe înțelesul tuturor. Te pregătim atât pentru examen, cât și

              pentru condusul de zi cu zi, în siguranță.

            </p>

            <div className={styles.heroCta}>

              <Link href="/inscriere-online" className="btn btn-primary">

                Înscriere online

              </Link>

              <Link href="/categorii" className="btn btn-primary">

                Categorii disponibile

              </Link>

            </div>

          </div>



          <div className={styles.heroVisual}>

            <HeroFacebookReviews />

          </div>

        </div>

      </section>



      <section className={`${styles.services} section-gray`} id="servicii">

        <div className="container">

          <span className="section-label">Serviciile noastre</span>

          <h2 className="section-title">Ce îți oferim la școala noastră auto</h2>

          <p className={styles.servicesLead}>

            Oferim pregătire practică și teoretică pentru obținerea permisului, adaptată fiecărui

            cursant. Punem accent pe siguranță, încredere și rezultate reale la examen.

          </p>

          <div className={styles.serviceGrid}>

            {SERVICES.map((s, i) => (

              <article key={s.title} className={styles.serviceCard}>

                <div className={styles.serviceImgWrap}>

                  <img

                    src={SERVICE_IMAGES[s.title] ?? "/images/todea-graph1.webp"}

                    alt={s.title}

                    className={styles.serviceImg}

                    loading="lazy"

                    decoding="async"

                  />

                </div>

                <div className={styles.serviceBody}>

                  <span className={styles.serviceNum}>{String(i + 1).padStart(2, "0")}</span>

                  <h3>{s.title}</h3>

                  <p>{s.text}</p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      <section className={styles.categories}>

        <div className="container">

          <span className="section-label">Categorii</span>

          <h2 className="section-title">Pregătire pe toate categoriile</h2>

          <div className={styles.catGrid}>

            {CATEGORY_GROUPS.map((g) => {

              const img = CATEGORY_IMAGES[g.slug];

              return (

                <Link key={g.slug} href={g.href} className={styles.catCard}>

                  <div className={styles.catImgWrap}>

                    <img

                      src={img.cardSrc}

                      alt={img.alt}

                      className={`${styles.catImg} ${styles.catImgIcon}`}

                      loading="lazy"

                      decoding="async"

                    />

                  </div>

                  <div className={styles.catBody}>

                    <h3>{g.title}</h3>

                    <p>{g.summary}</p>

                    <span className={styles.catArrow}>Detalii →</span>

                  </div>

                </Link>

              );

            })}

          </div>

        </div>

      </section>



      <Testimonials />



      <FaqSection />

    </main>

  );

}


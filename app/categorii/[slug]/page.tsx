import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategorySections from "@/components/CategorySections";
import { getCategoryGroup } from "@/lib/content-data";
import { CATEGORY_IMAGES } from "@/lib/site-images";
import styles from "./category.module.css";
type Props = { params: { slug: string } };

export function generateStaticParams() {
  return [
    { slug: "motociclete" },
    { slug: "autoturisme" },
    { slug: "camioane" },
    { slug: "autobuze" },
  ];
}

export function generateMetadata({ params }: Props): Metadata {
  const group = getCategoryGroup(params.slug);
  if (!group) return {};
  const img = CATEGORY_IMAGES[params.slug];
  return {
    title: `${group.title} — TODEA AUTO-MOTO Dej`,
    description: group.summary,
    alternates: { canonical: `/categorii/${params.slug}` },
    openGraph: img ? { images: [{ url: img.heroSrc, alt: img.alt }] } : undefined,
  };
}

export default function CategoryPage({ params }: Props) {
  const group = getCategoryGroup(params.slug);
  if (!group) notFound();
  const img = CATEGORY_IMAGES[params.slug];

  return (
    <main id="main">
      <section className={`page-hero ${styles.heroWithImg}`}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className="section-label" style={{ color: "var(--orange)" }}>
              {group.icon} Categorii
            </p>
            <h1>{group.title}</h1>
            <p>{group.summary}</p>
          </div>
          <div className={styles.heroImgWrap}>
            <img
              src={img.cardSrc}
              alt={img.alt}
              className={styles.heroImg}
              width={640}
              height={400}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <CategorySections sections={group.sections} />
        </div>
      </section>
    </main>
  );
}

"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { TESTIMONIALS } from "@/lib/content-data";
import styles from "./testimonials.module.css";

const INTERVAL_MS = 4500;
const TRANSITION_MS = 600;

function useVisibleCount() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.matchMedia("(max-width: 560px)").matches) setVisible(1);
      else if (window.matchMedia("(max-width: 900px)").matches) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export default function Testimonials() {
  const count = TESTIMONIALS.length;
  const visible = useVisibleCount();
  const clones = Math.min(visible, count);
  const slides =
    count > visible ? [...TESTIMONIALS, ...TESTIMONIALS.slice(0, clones)] : TESTIMONIALS;

  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);
  const indexRef = useRef(0);

  const measure = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    const gap = 8; /* 0.5rem */
    const w = (vp.clientWidth - gap * (visible - 1)) / visible;
    if (w > 0) {
      setSlideWidth(w);
      setStepPx(w + gap);
    }
  }, [visible]);

  const goTo = useCallback((next: number, withAnimation = true) => {
    setAnimate(withAnimation);
    indexRef.current = next;
    setIndex(next);
  }, []);

  const goNext = useCallback(() => {
    if (count <= visible) return;
    goTo(indexRef.current + 1);
  }, [count, visible, goTo]);

  useEffect(() => {
    measure();
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure, slides.length, visible]);

  useEffect(() => {
    goTo(0, false);
  }, [visible, goTo]);

  useEffect(() => {
    if (index !== count || count <= visible) return;
    const id = window.setTimeout(() => goTo(0, false), TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [index, count, visible, goTo]);

  useEffect(() => {
    if (paused || count <= visible) return;
    const id = window.setInterval(goNext, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, count, visible, goNext]);

  const activeDot = index >= count ? 0 : index;
  const offset = index * stepPx;

  return (
    <section
      className={styles.section}
      aria-roledescription="carousel"
      aria-label="Recenzii cursanți"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div className="container">
        <span className="section-label">Recenzii</span>
        <h2 className="section-title">Ce spun cursanții noștri</h2>

        <div
          ref={viewportRef}
          className={styles.viewport}
          style={{ "--slide-width": `${slideWidth}px` } as CSSProperties}
        >
          <div
            className={styles.track}
            style={{
              transform: `translate3d(-${offset}px, 0, 0)`,
              transitionDuration: animate ? `${TRANSITION_MS}ms` : "0ms",
            }}
          >
            {slides.map((text, i) => (
              <blockquote key={i} className={styles.slide}>
                <p>{text}</p>
              </blockquote>
            ))}
          </div>
        </div>

        {count > visible && (
          <div className={styles.dots} role="tablist" aria-label="Navigare recenzii">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === activeDot}
                aria-label={`Recenzie ${i + 1} din ${count}`}
                className={`${styles.dot} ${i === activeDot ? styles.dotActive : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

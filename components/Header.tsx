"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { siteConfig, mapsUrl } from "@/lib/site-config";
import styles from "./header.module.css";

const NAV = [
  { href: "/", label: "Acasă", match: (p: string) => p === "/" },
  { href: "/categorii", label: "Categorii", match: (p: string) => p.startsWith("/categorii") },
  { href: "/inscriere-online", label: "Înscriere Online", match: (p: string) => p === "/inscriere-online" },
  { href: "/contact", label: "Contact", match: (p: string) => p === "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeAll = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <a
            href={mapsUrl()}
            className={`${styles.topItem} ${styles.topItemAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 {siteConfig.address.street}
          </a>
          <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`} className={styles.topItem}>
            📞 {siteConfig.phoneLocal}
          </a>
        </div>
      </div>

      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo} onClick={closeAll}>
            <img
              src="/logo-header.png"
              alt="TODEA AUTO-MOTO — Școală de șoferi Dej"
              width={240}
              height={84}
              className={styles.logoImg}
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <nav className={styles.nav} aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeAll}
                className={item.match(pathname) ? styles.active : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.burger}
              aria-label={mobileOpen ? "Închide meniu" : "Deschide meniu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className={styles.mobileNav}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeAll}
              className={item.match(pathname) ? styles.active : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

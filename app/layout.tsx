import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

const CookieBanner = dynamic(() => import("@/components/CookieBanner"), { ssr: false });

const lato = Lato({
  subsets: ["latin-ext"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Școală auto Dej | Permis A, B, C, D`,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "ro_RO",
    type: "website",
    url: siteConfig.url,
    images: [{ url: "/logo-full.webp", alt: "TODEA AUTO-MOTO — logo oficial" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressCountry: "RO",
  },
  openingHours: "Mo-Sa 08:00-18:00",
  sameAs: [siteConfig.facebook],
  areaServed: "Dej, Cluj",
  logo: `${siteConfig.url}/logo-full.webp`,
  image: `${siteConfig.url}/logo-full.webp`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${lato.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Sari la conținut
        </a>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Lato, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import { buildJsonLdGraph } from "@/lib/structured-data";

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
  keywords: [
    "școală de șoferi Dej",
    "școală auto Dej",
    "permis categoria B Dej",
    "permis moto Dej",
    "TODEA AUTO-MOTO",
    "driving school Dej",
    "driving lessons Cluj",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "ro_RO",
    alternateLocale: ["en_US"],
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/logo-full.webp", alt: "TODEA AUTO-MOTO — logo oficial" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo-full.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "ai-content": "index",
  },
};

const jsonLd = buildJsonLdGraph();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${lato.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="llms-full (RO)" />
        <link rel="alternate" type="text/plain" href="/llms-full.en.txt" title="llms-full (EN)" />
        <link rel="alternate" type="application/json" href="/ai.json" title="AI business JSON" />
        <link
          rel="alternate"
          type="application/json"
          href="/ai/knowledge.json"
          title="AI knowledge graph"
        />
        <link rel="describedby" href="/.well-known/ai.json" />
        <meta name="geo.region" content="RO-CJ" />
        <meta name="geo.placename" content="Dej" />
        <meta name="geo.position" content="47.1417651;23.8769804" />
        <meta name="ICBM" content="47.1417651, 23.8769804" />
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

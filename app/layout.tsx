import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mapdominate.com"),
  title: "MapDominate — Dominate Google Maps. Get More Calls.",
  description:
    "We build your Google Business Profile and perform local SEO to get your business ranked in the Google 3-Pack. More calls, more customers — no ads required.",
  keywords:
    "local SEO, Google 3-pack, Google Business Profile, GBP optimisation, map pack ranking, local business SEO",
  alternates: {
    canonical: "https://www.mapdominate.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "https://www.mapdominate.com",
    title: "MapDominate — Dominate Google Maps. Get More Calls.",
    description:
      "We rank your business in the Google 3-Pack. More calls, more customers — no ads.",
    siteName: "MapDominate",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapDominate — Dominate Google Maps.",
    description:
      "We rank your business in the Google 3-Pack. More calls, more customers — no ads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

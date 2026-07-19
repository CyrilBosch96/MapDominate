import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, DM_Mono, Sora, Inter } from "next/font/google";
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

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mapdominate.com"),
  title: "MapDominate — Websites & Local SEO for Salons, Spas & Gyms.",
  description:
    "We build fast, mobile-ready websites and optimize Google Business Profiles for hair salons, pet spas, and gyms — turning searches into phone calls. Free website audit.",
  keywords:
    "salon website design, spa website design, gym website design, local SEO, Google Business Profile optimization, small business website builder, local service business marketing",
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
    title: "MapDominate — Websites & Local SEO for Salons, Spas & Gyms.",
    description:
      "We build fast, mobile-ready websites and Google Business Profiles that turn searches into phone calls.",
    siteName: "MapDominate",
  },
  twitter: {
    card: "summary_large_image",
    title: "MapDominate — Websites & Local SEO for Salons, Spas & Gyms.",
    description:
      "We build fast, mobile-ready websites and Google Business Profiles that turn searches into phone calls.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${dmMono.variable} ${sora.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

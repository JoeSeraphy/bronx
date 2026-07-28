import type { Metadata, Viewport } from "next";
import { Anton, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import CustomCursor from "@/components/shared/CustomCursor";
import ScrollProgress from "@/components/shared/ScrollProgress";
import { SITE } from "@/lib/data";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jbmono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Bronx Multimarcas | Streetwear Premium no Rio de Janeiro",
    template: "%s | Bronx Multimarcas",
  },
  description:
    "Curadoria de streetwear premium — Nike, Adidas Originals, Jordan, Carhartt WIP e mais. Loja física em Ipanema (RJ) e entrega para todo o Brasil.",
  keywords: ["streetwear", "multimarcas", "moda urbana", "Rio de Janeiro", "Ipanema", "tênis", "roupas de marca"],
  authors: [{ name: "Bronx Multimarcas" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Bronx Multimarcas",
    title: "Bronx Multimarcas | Streetwear Premium",
    description: "Curadoria de streetwear premium — marcas nacionais e importadas. Loja física em Ipanema, RJ.",
    url: SITE.url,
    images: [{ url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=630&q=80", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bronx Multimarcas | Streetwear Premium",
    description: "Curadoria de streetwear premium — marcas nacionais e importadas. Loja física em Ipanema, RJ.",
    images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Bronx Multimarcas",
  image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
  url: SITE.url,
  telephone: "+5521999999999",
  priceRange: "R$100 - R$1500",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "12:00", closes: "18:00" },
  ],
  sameAs: [SITE.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable} ${jbMono.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        <div className="grain-overlay" aria-hidden />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

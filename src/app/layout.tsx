import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";



export const metadata = {
  title: 'Iron Fight Academia | Musculação e Luta em Camaçari',
  description: 'Academia de musculação, boxe e jiu-jitsu em Camaçari, BA. Próximo ao centro de Camaçari. Venha treinar!',
  keywords: ['academia camaçari', 'musculação camaçari', 'academia nova vitória camaçari', 'academias em camaçari ba', 'iron fight academia', 'iron fight camaçari'],
  openGraph: {
    title: 'Iron Fight Academia – Camaçari, BA',
    description: 'Treine musculação e artes marciais em Camaçari. Equipamentos modernos.',
    url: 'https://ironfight.vercel.app/',
    locale: 'pt_BR',
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Iron Fight Academia",
  "url": "https://ironfight.vercel.app/",
  "telephone": "+55-71-8951-4831",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Nova Vitória, 1002",
    "addressLocality": "Camaçari",
    "addressRegion": "BA",
    "postalCode": "42802-481",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -12.6985,
    "longitude": -38.3231
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "05:00",
      "closes": "11:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "14:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "06:00",
      "closes": "10:00"
    }
  ]
}

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${bebas.variable} h-screen w-screen antialiased`}
    >
      <Script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <body className="min-h-full min-w-full flex relative bg-obsidian flex-col">{children}</body>
    </html>
  );
}

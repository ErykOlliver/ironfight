import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";



export const metadata: Metadata = {
  title: "iron Fight",
  description: "Academia",
};

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
      <body className="min-h-full min-w-full flex relative flex-col">{children}</body>
    </html>
  );
}

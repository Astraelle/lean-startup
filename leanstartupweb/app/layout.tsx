import type { Metadata } from "next";
import "./globals.css";
import Header from "../(components)/header/header";
import Footer from "@/(components)/footer/footer";
import { Analytics } from "@vercel/analytics/next";
import localFont from 'next/font/local';

export const urbanist = localFont({
  src: "../public/font/Urbanist-master/Urbanist-Regular.woff2",
  display: "swap",
  variable: "--font-urbanist"
})

export const gilroy = localFont({
  src: "../public/font/gilroy/Gilroy-Bold.ttf",
  display: "swap",
  variable: "--font-gilroy"
})

export const metadata: Metadata = {
  title: "Kollab",
  description: "Le site web pour les indépendants et free-lances",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <Header/>
        <main className={urbanist.className}>
          {children}
          <Analytics/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}

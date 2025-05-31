// Instructions: Recreate the layout.tsx file with proper metadata and structure

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amali • Euphoric Organic Energy Drink",
  description:
    "Discover the top health benefits of saffron, from mood elevation and mental clarity to hormonal balance and antioxidant power—based on real clinical studies.",
  keywords: [
    "Amali",
    "Amali drink",
    "organic energy",
    "euphoric energy",
    "plant-based energy",
    "yerba mate",
    "saffron energy",
    "nootropic drink",
    "clean energy",
    "healthy energy",
    "mood boost",
    "energy drink",
    "clean caffeine alternative",
    "persian",
    "brazilian",
    "saffron",
    "monkfruit sugar",
    "sugar free energy",
    "zero calorie energy drink",
    "plant energy"
  ],
  openGraph: {
    title: "Amali • Euphoric Organic Energy Drink",
    description:
      "Discover the top health benefits of saffron, from mood elevation and mental clarity to hormonal balance and antioxidant power—based on real clinical studies.",
    url: "https://drinkamali.com/",
    type: "website",
    images: [
      {
        url: "https://drinkamali.com/amali_best_sellers_banner.png",
        width: 1200,
        height: 630,
        alt: "Amali Energy Drink - Best Sellers Banner"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Amali • Euphoric Organic Energy Drink",
    description:
      "Discover the top health benefits of saffron, from mood elevation and mental clarity to hormonal balance and antioxidant power—based on real clinical studies.",
    images: ["https://drinkamali.com/amali_best_sellers_banner.png"]
  },
  metadataBase: new URL("https://drinkamali.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/amali_word_logo.png" />
        <meta name="theme-color" content="#0F2C66" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

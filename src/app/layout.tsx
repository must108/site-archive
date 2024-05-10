import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustaeen Ahmed",
  description: "Mustaeen Ahmed's Portfolio Website",
  keywords: "Software Developer, Developer, Software," + 
    "Engineer, Mustaeen, Mustaeen Ahmed, Portfolio",
  icons: {
      icon: 'favicon.ico',
  },
  metadataBase: new URL('https://mustaeen.dev'),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
      <body className={`${inter.className} bg-black-1 overflow-hidden`}>{children}</body>
      </html>
    </>
  );
}

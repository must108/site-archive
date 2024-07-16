import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next';
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustaeen Ahmed",
  description: "Mustaeen Ahmed is a software engineer and a student at UCF.",
  keywords: [ "Software Developer",
              "Developer",
              "Software",
              "Engineer",
              "Mustaeen",
              "Mustaeen Ahmed",
              "Portfolio",
              "UCF",
  ],
  icons: {
      icon: 'favicon.ico',
  },
  openGraph: {
    type: "website",
    title: "Mustaeen Ahmed",
    description:
      "Mustaeen Ahmed is a software engineer and a student at UCF.",
    url: "https://mustaeen.dev",
    images: [{ url: "opengraph-image.jpg"}]
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
      <body className={`
        flex min-h-[100vh]
        w-full flex-col 
        ${inter.className} 
        bg-black-1 overflow-hidden`}>
        {<Navbar />}
        {children}
        </body>
      </html>
    </>
  );
}

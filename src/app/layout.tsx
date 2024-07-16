import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next';
import Navbar from "../components/Navbar";
import "./globals.css";
import { cn } from "../utils/cn";

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
      <body className={cn("mx-auto flex", 
        "min-h-screen max-w-screen-sm flex-col", 
        "flex-col bg-[#09090B] overflow-hidden antialiased",
        inter.className)}>
        <Navbar />
        <div className="flex-grow flex items-center justify-center
        h-[100vh]">
          {children}
        </div>
        </body>
      </html>
    </>
  );
}

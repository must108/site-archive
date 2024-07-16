import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
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
      title: "About",
      description:
        "Mustaeen Ahmed is a software engineer and a student at UCF.",
      url: "https://mustaeen.dev/about",
      images: [{ url: "opengraph-image.jpg"}]
    },
    metadataBase: new URL('https://mustaeen.dev/about'),
  };

export default function About() {
    return <p className="text-white">wip</p>
}
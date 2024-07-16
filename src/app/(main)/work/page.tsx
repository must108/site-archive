import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | Mustaeen Ahmed",
    description: "Mustaeen Ahmed's work experience as a software engineer.",
    keywords: [ "Software Developer",
                "Developer",
                "Software",
                "Engineer",
                "Mustaeen",
                "Mustaeen Ahmed",
                "Portfolio",
                "UCF",
                "University of Central Florida",
    ],
    icons: {
        icon: 'favicon.ico',
    },
    openGraph: {
      type: "website",
      title: "Work | Mustaeen Ahmed",
      description:
        "Mustaeen Ahmed's work experience as a software engineer.",
      url: "https://mustaeen.dev/work",
      images: [{ url: "opengraph-image.jpg"}]
    },
    metadataBase: new URL('https://mustaeen.dev/work'),
  };

export default function Work() {
    return <p className="text-white">wip!</p>
}
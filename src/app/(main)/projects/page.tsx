import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Mustaeen Ahmed",
    description: "Mustaeen Ahmed's projects he has built as a software engineer.",
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
      title: "Projects | Mustaeen Ahmed",
      description:
        "Mustaeen Ahmed's projects he has built as a software engineer.",
      url: "https://mustaeen.dev/projects",
      images: [{ url: "opengraph-image.jpg"}]
    },
    metadataBase: new URL('https://mustaeen.dev/projects'),
  };


export default function Projects() {
    return <p className="text-white">wip!</p>
}
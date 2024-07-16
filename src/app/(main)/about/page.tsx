import { Metadata } from "next";
import AnimatedLink from "@/components/AnimatedLink";
import Tech from "@/components/Tech";

export const metadata: Metadata = {
    title: "About | Mustaeen Ahmed",
    description: "Mustaeen Ahmed is a software engineer and a student at the University of Central Florida.",
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
      title: "About | Mustaeen Ahmed",
      description:
        "Mustaeen Ahmed is a software engineer and a student at the University of Central Florida.",
      url: "https://mustaeen.dev/about",
      images: [{ url: "opengraph-image.jpg"}]
    },
    metadataBase: new URL('https://mustaeen.dev/about'),
  };



export default function About() {
    return (
      <section className="max-w-screen-sm">
        <p 
        className="flex text-white font-bold mx-auto
        text-3xl pb-8"
        >
            about
        </p>
        <div className="flex flex-col gap-10">
          <p 
          className="text-white
          text-md pt-2"
          >
              i&apos;m a software engineer and 
              computer science student currently
              studying at{" "}
              <AnimatedLink href="https://www.ucf.edu/"
              >
                UCF
              </AnimatedLink>
              . i currently work as a software engineer at{" "}
              <AnimatedLink href="https://www.darden.com/"
              >
                Darden
              </AnimatedLink>
              , where I work to automate critical processes to
              expedite our workflows.
          </p>
          <p className="text-white text-md">
            i have a deep passion for several fields in computer science, including
            machine learning, data analytics, full-stack web/mobile development, and 
            computer vision. these passions stem from a love of learning and creating, 
            and they thrive as there is always something new to learn in this field.
          </p> 
          <p className="text-white text-md">
            since i started working in this field, i&apos;ve
            gained quite a few technical skills. here are some of them: 
          </p>
        </div>
        <Tech />
    </section>
    );
}

"use client";

import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";

const projects = [
  {
    name: "naavis",
    link: "https://github.com/naavis-app/app",
    description: "cross platform web/mobile application that aims to bring free location sharing and device tracking to all.",
    skills: "next.js, react, typescript, postgresql, prisma, amazon s3, trpc, tailwind css, vitest",
  } 
]

export default function Projects() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section id="page" className="max-w-screen-sm page-transition p-4">
        <Metadata title="Projects" description="Mustaeen Ahmed's projects he has built as a software engineer." />
        <h1
        className="flex text-white font-bold mx-auto text-3xl pb-5"
        >
          projects
        </h1>
        <p className="text-white text-sm"
        >
          i&apos;m most passionate about building software, and working on projects
          allows me to pursue that passion. here are some notable ones!
        </p>
        <hr className="my-6 font-medium border-[#404040]"/>
        {projects.map((project, _) => (
          <>
            <div className="flex flex-col gap-10">
              <div>
                <AnimatedLink href={project.link}
                className="text-white text-xl font-medium">
                  {project.name}
                </AnimatedLink>
                <p className="text-white text-sm pt-4"
                >
                  {project.description}
                </p>
                <p className="text-[#999] text-xs">
                  {project.skills}
                </p>
              </div>
            </div>
            <hr className="my-6 font-medium border-[#404040]"/>
          </>
        ))}
      </section>
    );
}
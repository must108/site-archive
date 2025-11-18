"use client";

import React from 'react';
import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";

const work = [
  {
    name: "simplify",
    role: "campus ambassador",
    timeline: "oct 2025 - present",
    link: "https://simplify.jobs/",
    description: "growing automated job applications",
    skills: "getting out, touching grass, talking to people, outreach"
  },
  {
    name: "naval education and training command",
    role: "machine learning engineer intern",
    timeline: "sep 2025 - nov 2025",
    link: "https://www.netc.navy.mil/",
    description: "synthetic data for pilots",
    skills: "python, pytorch, hugging face, diffusion models, generative ai",
  },
  {
    name: "intelligent agents lab",
    role: "machine learning engineer intern",
    timeline: "sep 2025 - nov 2025",
    link: "https://ial.eecs.ucf.edu/",
    description: "researching social agents",
    skills: "python, pytorch, hugging face"
  },
  {
    name: "ucf medicine",
    role: "software engineer intern",
    timeline: "sep 2025 - present",
    link: "https://med.ucf.edu/aerospace-medicine/",
    description: "ucf's aerospace medicine program",
    skills: "c#, unity, cesium"
  },
  {
    name: "varlab",
    role: "software engineer intern",
    timeline: "sep 2025 - present",
    link: "https://varlab.cs.ucf.edu/",
    description: "building simulations for ucf ist",
    skills: "c#, unity"
  },
  {
    name: "morgan stanley",
    role: "software engineer intern",
    timeline: "jun 2025 - aug 2025",
    link: "https://www.morganstanley.com",
    description: "risk management infra",
    skills: "c, c++, python, angular, typescript, java, spring boot, grafana, intex deal modeling language",
  },
  {
    name: "ideaflow",
    role: "software engineer",
    timeline: "mar 2025 - oct 2025",
    link: "https://ideaflow.app/",
    description: "making a shared brain for humanity",
    skills: "next.js, react, typescript, postgresql, python",
  },
  {
    name: "u.s. department of transportation",
    role: "software engineer intern",
    timeline: "jan 2025 - mar 2025",
    link: "https://www.transportation.gov/",
    description: "connecting/automating transportation processes",
    skills: "amazon web services, react, vite"
  },
  {
    name: "cae",
    role: "software engineer intern",
    timeline: "dec 2024 - mar 2025",
    link: "https://www.cae.com/",
    description: "devsecops and frontend for usaf scars",
    skills: "powershell, bash, devsecops, sharepoint"
  },
  {
    name: "gtw",
    role: "software engineer intern",
    timeline: "dec 2024 - mar 2025", 
    link: "https://www.linkedin.com/company/gamesthatwork/",
    description: "context-driven, embedded translation for games",
    skills: "javascript, node.js, python, html, css"
  },
  {
    name: "ucf robotics lab",
    role: "machine learning engineer intern",
    timeline: "nov 2024 - feb 2025", 
    link: "https://www.ece.ucf.edu/~qu/labs/ece-robotics-lab/",
    description: "reinforcement learning for robotics",
    skills: "python, neural networks"
  },
  {
    name: "leidos",
    role: "software engineer intern",
    timeline: "sep 2024 - may 2025",
    link: "https://www.leidos.com/",
    description: "spatial intelligence for advanced decision making",
    skills: "python, pandas, LLMs, VLMs, agile/scrum, jira, aws ec2, jupyter notebook, gitlab",
  },
  {
    name: "randstad",
    role: "software engineer intern",
    timeline: "aug 2024 - nov 2024",
    link: "https://www.randstadusa.com/",
    description: "employee onboarding automation scripting",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image"
  },
  {
    name: "knight hacks",
    role: "software engineer",
    timeline: "jul 2024 - present",
    link: "https://2025.knighthacks.org/",
    description: "software for ucf's largest software engineering club",
    skills: "typescript, next.js, postgresql, turborepo, trpc, amazon s3, linux"
  },
  {
    name: "darden",
    role: "software engineer intern",
    timeline: "jun 2024 - nov 2024",
    link: "https://www.darden.com/",
    description: "telecommunications automation scripting",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image, pytesseract, pandas, numpy, matplotlib, yaml"
  },
  {
    name: "association for computing machinery",
    role: "software engineer",
    timeline: "jan 2024 - may 2024",
    link: "https://www.acm.org/",
    description: "admin tooling for acm's website",
    skills: "javascript, node.js, express.js, html, css, mongodb"
  },
  {
    name: "orange county public schools",
    role: "software engineer intern",
    timeline: "aug 2022 - aug 2023",
    link: "https://www.ocps.net/",
    description: "tech support/helpdesk automation scripting",
    skills: "powershell, java, vba, operating systems, microsoft excel"
  },
  {
    name: "kelly",
    role: "software engineer intern",
    timeline: "jun 2022 - aug 2022",
    link: "https://www.kellyservices.com/",
    description: "sysadmin automation scripting",
    skills: "powershell, operating systems, microsoft excel"
  },
  {
    name: "itch.io",
    role: "software engineer intern",
    timeline: "may 2021 - may 2022",
    link: "https://itch.io/",
    description: "desktop and mobile game dev",
    skills: "c++, html, css, javascript"
  }
];

export default function Work() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section 
      id="page" 
      className="max-w-screen-sm page-transition p-4 mb-40 sm:mb-0">
        <Metadata title="Work" description="Mustaeen Ahmed's work experience as a software engineer." />
        <h1
        className="flex text-white font-bold mx-auto text-3xl pb-5"
        >
          work
        </h1>
        <p className="text-white text-sm">
          i&apos;m very passionate about contributing to software
          in businesses and other organizations. here are some of my 
          experiences doing just that!
        </p>
        <hr className="my-6 border-[#404040]"/>
        {work.map((place, _) => (
            <>
              <div className="flex flex-col gap-10">
                <div>
                  <AnimatedLink href={place.link}
                  className="text-white text-xl font-medium">
                    {place.name}
                  </AnimatedLink>
                  <p className="text-xs text-[#999]"
                  >{place.role}</p>
                  <p className='text-xs text-[#999]'>
                    {place.timeline}
                  </p> 
                  <p className="text-white text-sm pt-3">
                    {place.description}
                  </p>
                  <p className="text-[#999] text-xs">
                    {place.skills}
                  </p>
                </div>
              </div>
              <hr className="my-6 border-[#404040]"/>
            </>
        ))}
      </section>
    );
}
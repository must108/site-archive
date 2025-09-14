"use client";

import React from 'react';
import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";

const work = [
  {
    name: "morgan stanley",
    role: "software engineer intern",
    link: "https://www.morganstanley.com",
    description: "developing modern solutions for quantitative systems",
    skills: "c, c++, python, angular, typescript, java, spring boot, grafana, intex deal modeling language",
  },
  {
    name: "ideaflow",
    role: "software engineer",
    link: "https://ideaflow.app/",
    description: "developing intelligent note-taking applications for information management",
    skills: "next.js, react, typescript, postgresql, python",
  },
  {
    name: "leidos",
    role: "software engineer intern",
    link: "https://www.leidos.com/",
    description: "working with LLMs and VLMs to improve spatial intelligence within artificial intelligence.",
    skills: "python, pandas, LLMs, VLMs, agile/scrum, jira, aws ec2, jupyter notebook, gitlab",
  },
  {
    name: "u.s. department of transportation",
    role: "software engineer intern",
    link: "https://www.transportation.gov/",
    description: "building applications to streamline operations for automation research vehicles.",
    skills: "amazon web services, react, vite"
  },
  {
    name: "gamesthatwork",
    role: "software engineer intern",
    link: "https://www.linkedin.com/company/gamesthatwork/",
    description: "machine learning algorithms for context-driven translation of user-facing strings.",
    skills: "javascript, node.js, python, html, css"
  },
  {
    name: "cae",
    role: "software engineer intern",
    link: "https://www.cae.com/",
    description: "building devsecops pipelines with powershell and bash. also involved with sharepoint development.",
    skills: "powershell, bash, devsecops, sharepoint"
  },
  {
    name: "ucf ece",
    role: "machine learning research intern",
    link: "https://www.ece.ucf.edu/",
    description: "working with neural networks for reinforcement learning, implementing dynamic programming optimization methods.",
    skills: "python, neural networks"
  },
  {
    name: "knighthacks",
    role: "software engineer",
    link: "https://blade.knighthacks.org/",
    description: "worked on a multi-purpose discord bot, club/hackathon website, and a monorepository.",
    skills: "typescript, next.js, postgresql, turborepo, trpc, amazon s3, linux"
  },
  {
    name: "randstad",
    role: "software engineer intern",
    link: "https://www.randstadusa.com/",
    description: "worked on automating and refining a lengthy service management process.",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image"
  },
  {
    name: "darden",
    role: "software engineer intern",
    link: "https://www.darden.com/",
    description: "worked on automating employee workflows. also involved with application development and data analysis.",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image, pytesseract, pandas, numpy, matplotlib, yaml"
  },
  {
    name: "hack@ucf",
    role: "software engineer",
    link: "https://www.hackucf.org/",
    description: "worked on a discord bot for hack@ucf's horse plinko competition.",
    skills: "javascript, discord.js, node.js"
  },
  {
    name: "association for computing machinery",
    role: "software engineer",
    link: "https://www.acm.org/",
    description: "worked on an admin tool and api for acm's website. involved with backend engineering.",
    skills: "javascript, node.js, express.js, html, css, mongodb"
  },
  {
    name: "orange county public schools",
    role: "software engineer intern",
    link: "https://www.ocps.net/",
    description: "worked on automation scripting with powershell. also involved with data analytics and software troubleshooting.",
    skills: "powershell, java, vba, operating systems, microsoft excel"
  },
  {
    name: "kelly",
    role: "software engineer intern",
    link: "https://www.kellyservices.com/",
    description: "worked on sys admin automation scripting with powershell. also involved with software troubleshooting.",
    skills: "powershell, operating systems, microsoft excel"
  },
  {
    name: "itch.io",
    role: "software engineer intern",
    link: "https://itch.io/",
    description: "built several games with c++, html, css, and js.",
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
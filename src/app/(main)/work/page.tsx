"use client";

import React from 'react';
import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";

const work = [
  {
    name: "darden",
    role: "software engineer",
    link: "https://www.darden.com/",
    description: "worked on automating employee workflows. also involved with application development and data analysis.",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image, pytesseract, pandas, numpy, matplotlib, yaml"
  },
  {
    name: "knighthacks",
    role: "software developer",
    link: "https://2024.knighthacks.org/",
    description: "worked on a multi-purpose discord bot for the knighthacks discord server.",
    skills: "typescript, discord.js, node.js, node-cron, sqlite, linux"
  },
  {
    name: "hack@ucf",
    role: "software developer",
    link: "https://www.hackucf.org/",
    description: "worked on a discord bot for hack@ucf's horse plinko competition",
    skills: "javascript, discord.js, node.js"
  },
  {
    name: "association for computing machinery",
    role: "software developer",
    link: "https://www.acmucf.org/",
    description: "worked on an admin tool and api for acm's website. involved with backend engineering.",
    skills: "javascript, node.js, express.js, html, css, mongodb"
  },
];

export default function Work() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section 
      id="page" 
      className="max-w-screen-sm page-transition p-4 mb-40 sm:mb-0 overflow-scroll">
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
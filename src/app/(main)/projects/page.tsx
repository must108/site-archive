"use client";

import React from 'react';
import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";
import ExtLink from "@/components/ExtLink";

const projects = [
  {
    name: "naavis",
    link: "https://github.com/naavis-app/app",
    description: "cross platform web/mobile application that aims to bring free location sharing and device tracking to all.",
    skills: "next.js, react, typescript, postgresql, prisma, redis, amazon s3, trpc, tailwind css, vitest",
    web: "https://cheerful-sunshine-bbe8c9.netlify.app/"
  },
  {
    name: "guitAR",
    link: "https://github.com/must108/guitAR",
    description: "an educational mixed reality application to help with learning/practing guitar. won 2nd place at knighthacks 2024.",
    skills: "c#, c++, unity, meta sdk, grokit",
    web: "https://devpost.com/software/guitar-o3gw19"
  }, 
  {
    name: "insurify",
    link: "https://github.com/noahgerard/insurify",
    description: 
    "a multi-purpose insurance tool that classifies car damage based on an image and a few questions, and delivers a reliable quote.",
    skills: "python, flask, opencv, next.js, react, typescript, postgresql, prisma, tailwind css",
    web: "https://devpost.com/software/insurify-zj2dh4"
  },
  {
    name: "facial detection tool",
    link: "https://github.com/must108/simple-face-recognition",
    description: "experimental computer vision powered application that detects faces in an uploaded image.",
    skills: "next.js, react, typescript, python, flask, opencv, docker, linux",
    web: "https://face-recognition.projects.mustaeen.dev/",
  },
  {
    name: "t.k. discord bot",
    link: "https://github.com/KnightHacks/tk",
    description: "worked with the knighthacks development team to create a multi-purpose discord bot for their discord server.",
    skills: "typescript, discord.js, node.js, node-cron, sqlite, linux",
    web: "https://club.knighthacks.org/"
  },
  {
    name: "naturalization test app",
    link: "https://github.com/must108/naturalization-test",
    description: "quiz application which allows a user to review for the civics test that's given in the u.s. naturalization process.",
    skills: "html, scss, typescript, mysql, node.js, express.js, supabase, docker, linux",
    web: "https://naturalization-test.projects.mustaeen.dev/",
  },
  {
    name: "acm website",
    link: "https://github.com/acm-dev-website",
    description: "club website for the acm at ucf. my primary project while working with them as a software developer.",
    skills: "html, css, javascript, mongodb, node.js, express.js",
    web: "https://www.acmucf.org/",
  },
  {
    name: "horse plinko discord bot",
    link: "https://github.com/HackUCF",
    description: "developed features of an advanced utility discord bot for hack@ucf's horse plinko competition.",
    skills: "javascript, discord.js, node.js",
    web: "https://plinko.horse/",
  },
  {
    name: "multi-wordle",
    link: "https://github.com/must108/multi-wordle",
    description: "a rendition of wordle with added four and six letter game modes.",
    skills: "next.js, react, typescript, postgresql, prisma, supabase, node.js, tailwind css, vitest, docker, linux",
    web: "https://multi-wordle.projects.mustaeen.dev/",
  },
  {
    name: "musicnotes",
    link: "https://github.com/must108/musicnotes",
    description: "a python package which allows developers to play music notes in their programs.",
    skills: "python, github actions, docker",
    web: "https://pypi.org/project/musicnotes/",
  },
  {
    name: "site",
    link: "https://github.com/must108/site",
    description: "this website! it was a lot of fun to make!",
    skills: "next.js, react, typescript",
    web: "https://mustaeen.dev/",
  },
  {
    name: "stock model",
    link: "https://github.com/must108/stock-model",
    description: "machine learning model that predicts the rise of the s&p 500 based on historical data.",
    skills: "python, jupyter notebook, pandas"
  },
  {
    name: "ml projects",
    link: "https://github.com/must108/ml-projects",
    description: "a collection of projects i've worked on while studying machine learning.",
    skills: "python, pytorch, scikit-learn, numpy, pandas, matplotlib",
  },
  {
    name: "pong",
    link: "https://github.com/must108/pong",
    description: "a simple pong implementation with c++ and raylib. super fun to make!",
    skills: "c++, raylib",
  },
  {
    name: "a star pathfinding visualization",
    link: "https://github.com/must108/a-star-pathfinding",
    description: "a visualization of the a star pathfinding algorithm.",
    skills: "java, java swing"
  },
  {
    name: "cv projects",
    link: "https://github.com/must108/cv-with-cascade",
    description: "a collection of projects i've worked on while studying computer vision.",
    skills: "python, opencv",
  },
  {
    name: "site 1.0",
    link: "https://github.com/must108/site-1.0",
    description: "the first rendition of my personal website. leveraged a vector library to create a really cool effect.",
    skills: "html, css, javascript"
  },
  // {
  //   name: "r projects",
  //   link: "https://github.com/must108/sta4163-projects",
  //   description: "data science projects for sta4163, including variance testing, non-parametric testing, and linear regression.",
  //   skills: "R"
  // },
  // {
  //   name: "matplotlib art",
  //   link: "https://github.com/must108/matplotlib-art",
  //   description: "project which contains several scripts that generate cool data visualizations with matplotlib.",
  //   skills: "python, matplotlib"
  // },
  {
    name: "python auto clicker",
    link: "https://github.com/must108/python-auto-clicker",
    description: "gui auto clicker application which can achieve some crazy fast click speeds.",
    skills: "python, tkinter",
  },
  // {
  //   name: "weather app",
  //   link: "https://github.com/must108/weather-app",
  //   description: "weather application implementation with seamless transitions and animations.",
  //   skills: "html, scss, javascript",
  // },
  // {
  //   name: "tic-tac-toe",
  //   link: "https://github.com/must108/tictactoe",
  //   description: "basic web-based implementation of two player tic-tac-toe.",
  //   skills: "html, css, javascript",
  // },
  // {
  //   name: "to-do list",
  //   link: "https://github.com/must108/todolist",
  //   description: "can't be a developer without doing this at least once!",
  //   skills: "html, scss, typescript",
  // },
  // {
  //   name: "calculator",
  //   link: "https://github.com/must108/calculator",
  //   description: "basic implementation of a web-based calculator.",
  //   skills: "html, css, javascript",
  // },
] // commented out to prevent loading up the page...

export default function Projects() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section id="page" className="max-w-screen-sm page-transition p-4 mb-40 sm:mb-0">
        <Metadata title="Projects" description="Mustaeen Ahmed's projects he has built as a software engineer." />
        <h1
        className="flex text-white font-bold mx-auto text-3xl pb-5"
        >
          projects
        </h1>
        <p className="text-white text-sm"
        >
          i&apos;m most passionate about building software, and working on projects
          allows me to do just that. here are some notable ones!
        </p>
        <hr className="my-6 font-medium border-[#404040]"/>
        {projects.map((project, _) => (
          <>
            <div className="flex flex-col gap-10">
              <div>
                <div className="flex flex-row items-center">
                  <AnimatedLink href={project.link}
                  className="text-white text-xl font-medium mr-1">
                    {project.name}
                  </AnimatedLink>
                  {project.web ? 
                    <ExtLink href={project.web} size={"14"} /> 
                    : 
                    null}
                </div>
                <p className="text-white text-sm pt-3"
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
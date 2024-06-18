"use client";

import Section from "./ProjectSection";

export default function Projects() {
    return (
        <section className="max-w-screen-sm">
            <p 
            className="text-white font-bold 
            text-lg pt-5"
            >
                projects
            </p>
            <div className="flex mb-1 gap-3 pt-2">
                <div className="w-1/2">
                    <Section 
                        title="naavis" 
                        link="https://github.com/naavis-app/app"
                        language="typescript" 
                    />
                    <Section 
                        title="naturalization-test"
                        link="https://github.com/must108/naturalization-test"
                        language="typescript" 
                    />
                    <Section 
                        title="site" 
                        link="https://github.com/must108/site"
                        language="typescript" 
                    />
                    <Section 
                        title="a-star-pathfinding" 
                        link="https://github.com/must108/a-star-pathfinding"
                        language="java" 
                    />
                </div>
                <div className="w-1/2">
                    <Section 
                        title="multi-wordle" 
                        link="https://github.com/must108/multi-wordle"
                        language="typescript" 
                    />
                    <Section 
                        title="stock-model" 
                        link="https://github.com/must108/stock-model"
                        language="jupyter" 
                        languageName="jupyter notebook" 
                    />
                    <Section 
                        title="cv-with-cascade" 
                        link="https://github.com/must108/cv-with-cascade"
                        language="python" 
                    />
                    <Section 
                        title="r-datasets" 
                        link="https://github.com/must108/r-datasets"
                        language="R" 
                    />
                </div>
            </div>
        </section>
    )
}
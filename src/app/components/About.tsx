"use client";

export default function About() {
    return (
        <section className="max-w-screen-sm">
            <p 
            className="text-white font-bold 
            text-lg pt-5"
            >
                about
            </p>
            <p 
            className="text-white
            text-sm pt-2"
            >
                i&apos;m a software engineer and 
                computer science student currently
                studying at{" "}
                <a 
                href="https://www.ucf.edu/" 
                target="_blank"
                >
                    <span 
                    className="link link-underline 
                    font-bold"
                    >
                        UCF
                    </span>
                </a>
                . i&apos;m extremely
                passionate about machine learning, 
                data analytics, and
                software development!
            </p>
        </section>
    )
}
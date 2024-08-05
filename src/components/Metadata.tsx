import React from "react";
import { usePathname } from "next/navigation";

interface MetadataProps {
    title: string,
    description: string,
};

export default function Metadata({ title, description }: MetadataProps) {
    const pathname = usePathname();

    return (
        <>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="generator" content="Next.js" />

            <link rel="canonical" href={"https://mustaeen.dev/" + pathname} />
            <title>{title + " | Mustaeen Ahmed"}</title>
            <meta name="title" content={title + " | Mustaeen Ahmed"} />
            <meta name="description" content={description} />
            <meta name="theme-color" content="#09090B" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={"https://mustaeen.dev"} />
            <meta property="og:title" content={title + " | Mustaeen Ahmed"} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={"https://mustaeen.dev/opengraph-image.png"} />
        </>
    )
}
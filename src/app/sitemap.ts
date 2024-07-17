import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://www.mustaeen.dev",
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: "https://www.mustaeen.dev/about",
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: "https://www.mustaeen.dev/work",
            lastModified: new Date(),
            priority: 0.9,
        },
        {
            url: "https://www.mustaeen.dev/projects",
            lastModified: new Date(),
            priority: 0.9,
        },
    ];
}
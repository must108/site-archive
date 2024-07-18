"use client";
import { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExtLink({ 
    href, 
    size, 
    ...props 
    } : { href: string, size: string }
    ) {
    const [iconSize, setIconSize] = useState(size);

    return (
        <>
            <a href={href}
            target="_blank"
            onMouseEnter={() => setIconSize((parseInt(iconSize) + 4).toString())}
            onMouseLeave={() => setIconSize(size)}
            >
                <FaExternalLinkAlt color="white" 
                className="transition-all ease-in-out delay-50" 
                size={iconSize} 
                {...props} 
                />
            </a>
        </>
    );
}
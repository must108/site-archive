import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExtLink({ href, size, ...props } 
    : { href: string, size: string }) {
    return (
        <>
            <a href={href}
            target="_blank"
            >
             <FaExternalLinkAlt color="white" size={size} {...props} />
            </a>
        </>
    );
}
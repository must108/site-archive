import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExtLink({ href }: { href: string}) {
    return (
        <>
            <a href={href}
            target="_blank"
            >
             <FaExternalLinkAlt color="white" />
            </a>
        </>
    );
}
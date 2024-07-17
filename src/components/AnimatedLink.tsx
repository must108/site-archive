import { AnchorHTMLAttributes } from "react"
import { cn } from "@/utils/cn"

interface AnimatedLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
}

export default function AnimatedLink({ 
    href, 
    children, 
    className, 
    ...props} : AnimatedLinkProps
) {
    return (
        <a 
        href={href}
        target="_blank"
        {...props}
        >
            <span
            className={cn("link link-underline font-bold", className)}>
                {children}
            </span>
        </a>
    )
}
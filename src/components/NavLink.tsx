import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export default function NavLink ({ 
    href, 
    children,
    className,
     ...props }: 
    NavLinkProps
) {
    const pathname = usePathname();
    const active = href === pathname || href === pathname.replace(/\/$/, "");
    const activeStyle = active ? 'still-underline' : 'link-underline';

    return (
        <Link href={href} 
        className={cn(
            activeStyle, className, {...props}
        )}>
            {children}
        </Link>
    );
};


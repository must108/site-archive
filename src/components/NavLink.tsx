import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import { AnchorHTMLAttributes, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function NavLink ({ 
    href, 
    children,
    className,
     ...props }: 
    NavLinkProps) {
    const pathname = usePathname();
    const active = href === pathname || href === pathname.replace(/\/$/, "");
    const activeStyle = active ? 'still-underline' : 'link-underline';
    const router = useRouter();
    
    const handleTransition = async (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();

        const page = document.getElementById("page");
        page?.classList.add('page-transition');
        await sleep(300);
        router.push(href);
    };

    return (
        <Link href={href} 
        {...props}
        onClick={(e) => {handleTransition(e)}}
        className={cn(
            activeStyle, className, 
        )}>
            {children}
        </Link>
    );
};


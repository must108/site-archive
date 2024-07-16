"use client";

import NavLink from "./NavLink";
import { cn } from "@/utils/cn";

export default function Navbar() {

    return (
        <nav className="flex justify-center">
            <div className="flex mx-auto
            fixed p-4 z-[100] h-36 items-center">
                <div className="text-white text-left gap-4 
                flex flex-row"
                >
                    <NavLink href="/">
                        home
                    </NavLink>
                    <NavLink href="/about">
                        about
                    </NavLink>
                    <NavLink href="/work">
                        work
                    </NavLink>
                    <NavLink href="/projects">
                        projects
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
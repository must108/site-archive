"use client";

import Buttons from "../../components/Buttons";
import { Lanyard } from "@/components/Status";
import Time from "@/components/Time";
import { cn } from "@/utils/cn";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const page = document.getElementById("page");
        page?.classList.remove('page-transition');
    }, []);

    return (
    <>
        <section
            className={cn(
            "mx-1 sm:mx-0", 
            "flex justify-center",
            "flex-col",
            "whitespace-normal",
            "overflow-x-hidden",
            "h-[65vh]",
            "overflow-hidden sm:overflow-scroll"
        )}>
            <div id="page" className="page-transition">
                <div>
                    <p className="font-bold text-md text-white text-center">
                        hello! i&apos;m
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold 
                        bg-gradient-to-r from-blue-300 to-blue-600 
                        bg-clip-text text-transparent text-center">
                        mustaeen ahmed
                    </h1>
                </div>
                <div className="flex my-2">
                    <div className="flex w-full flex-row
                        gap-x-1 rounded-xl text-white text-sm 
                        whitespace-nowrap justify-center">
                        <Lanyard />
                        &mdash;
                        <Time />
                    </div>
			    </div>
                <Buttons />
            </div>
		</section>
    </>
    );
}

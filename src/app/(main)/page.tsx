import Buttons from "../../components/Buttons";
import { Lanyard } from "@/components/Status";
import Time from "@/components/Time";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Tech from "../../components/Tech";
import Filler from "../../components/Filler";
import { cn } from "@/utils/cn";

export default function Home() {
    return (
    <>
        <section className={cn(
            "mx-1 sm:mx-0", 
            "flex justify-center",
            "flex-col overflow-scroll",
            "whitespace-normal",
            "overflow-x-hidden"
        )}>
            <div>
                <header>
                    <p className="font-bold text-md text-white">
                        hello! i&apos;m</p>
                    <h1 className="text-4xl sm:text-5xl font-bold 
                        bg-gradient-to-r from-blue-300 to-blue-600 
                        bg-clip-text text-transparent">
                        mustaeen ahmed
                    </h1>
                </header>
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
                {/* <About />
                <Projects />
                <Tech />
                <Filler /> */}
            </div>
		</section>
    </>
    );
}

import Title from "./components/Title";
import ShowStatus from "./components/ShowStatus";
import Buttons from "./components/Buttons";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Filler from "./components/Filler";

export default function Home() {
    return (
    <>
        <div className="mx-1 sm:mx-0 h-[100svh] 
            flex items-center 
			justify-center flex-col 
            overflow-scroll
            whitespace-normal
            overflow-x-hidden">
            <div>
                <Title />
                <ShowStatus />
                <Buttons />
                {/* <About />
                <Projects />
                <Tech />
                <Filler /> */}
            </div>
		</div>
    </>
    );
}

"use client";

import Desc from "./components/Desc";
import Title from "./components/Title";
import ShowStatus from "./components/ShowStatus";
import Buttons from "./components/Buttons";


export default function Home() {

    return (
    <>
        <div className="h-screen flex items-center 
			justify-center flex-col overflow-hidden">
			<Title />
			<ShowStatus />
			<Buttons />
		</div>
    </>
    );
}

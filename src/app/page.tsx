"use client";

import Desc from "./components/Desc";
import Title from "./components/Title";
import ShowStatus from "./components/ShowStatus";
import Buttons from "./components/Buttons";
import { useState, useEffect } from 'react';


export default function Home() {

	useEffect(() => {
		window.addEventListener('scroll', () => {
			
		})
	}, [])

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

import Image from "next/image";
import Time from './Time';
import { Lanyard } from "./Status";
import { BsGithub, BsDiscord, BsLinkedin } from 'react-icons/bs';

export default function Home() {
    return (
    <>
        <div className="h-screen flex items-center 
			justify-center flex-col overflow-hidden">
			<p className="font-bold text-lg text-center text-white">
				hello! i&apos;m</p>
			<h1 className="text-4xl sm:text-5xl font-bold 
				bg-gradient-to-r from-blue-300 to-blue-500 
				bg-clip-text text-transparent">
				mustaeen ahmed
			</h1>
			<div className="flex my-2">
				<div className="flex w-full flex-row items-center 
					gap-x-1 rounded-xl text-white text-sm 
					whitespace-nowrap">
                    <Lanyard />
					&mdash;
					<Time />
				</div>
			</div>
			<div className="flex items-center justify-center gap-3">
				<a href="/resume.pdf" target="_blank" 
					className="cursor-pointer">
					<svg className="bg-button-color p-2 rounded-lg 
						fill-current text-white hover:text-neutral-400 
						transition-colors duration-300" 
						xmlns="http://www.w3.org/2000/svg" 
						width="40" height="40" viewBox="0 0 44 44">
						<path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
					</svg>	
				</a>
				<a href="https://github.com/must108" 
					target="_blank" 
					className="cursor-pointer">
					<div className="bg-button-color p-2 
						rounded-lg fill-current text-white 
						hover:text-neutral-400 transition-colors 
						duration-300 text-2xl">
						<BsGithub />
					</div>
				</a>
				<a href="https://www.linkedin.com/in/mustaeenahmed/" 
					target="_blank" 
					className="cursor-pointer">
					<div className="bg-button-color p-2 rounded-lg 
						fill-current text-white hover:text-neutral-400 
						transition-colors duration-300 text-2xl">
						<BsLinkedin />
					</div>
				</a>
				<a 
					href="https://discordid.netlify.app/?id=385903323666055178" 
					target="_blank">
					<div className="bg-button-color p-2 rounded-lg 
						fill-current text-white hover:text-neutral-400 
						transition-colors duration-300 text-2xl">
						<BsDiscord />
					</div>
				</a>
			</div>
		</div>
    </>
    );
}

"use client";

import { useState, useEffect } from 'react';

export default function Desc() {
    const [showAbout, setShowAbout] = useState(false);

    const handleAbout = () => {
        if(showAbout) {
            setShowAbout(false);
            dispatchEvent(new CustomEvent('closeAbout'));
        } else {
            setShowAbout(true);
            dispatchEvent(new CustomEvent('openAbout'));
        }
    }

    return (
        <>
            <div className='flex flex-col 
                items-center justify-center 
                pt-3 w-1/4 text-center'>
                <p 
                className='font-bold w-full text-white text-lg 
                transition-transform delay-300 cursor-pointer'
                onClick={() => handleAbout()}
                >
                    about
                </p>
                <p 
                className={`text-white transition-all delay-200 
                transform
                ${showAbout ? 'opacity-100 translate-y-0' : 
                'opacity-0 translate-y-full'}`}
                > i&apos;m a software engineer and
                computer science student studying at UCF. i&apos;m extremely
                passionate about machine learning, data analytics, and
                software development!
                </p>
            </div>
            {/* <div className='flex items-center justify-center'>
                <p className='font-bold w-full text-white text-sm'>projects</p>
            </div> */}
        </>
    )
}


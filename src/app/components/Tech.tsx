"use client";

import {
    FaJava,
    FaReact,
    FaRProject
} from 'react-icons/fa';

import {
    SiC,
    SiCplusplus,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiNumpy,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiPython,
    SiAstro,
    SiExpress,
    SiTailwindcss,
    SiBootstrap,
    SiPandas,
    SiFlask,
    SiDjango,
    SiOpencv,
    SiGit,
    SiPrisma,
    SiJupyter,
    SiMongodb,
    SiPostgresql,
    SiFigma,
    SiVercel,
    SiVitest,
    SiSupabase
} from 'react-icons/si';

import {
    BsGithub
} from 'react-icons/bs';

import {
    GrMysql
} from 'react-icons/gr';

import { Icons } from './Icongroup';
import Matplotlib from './Matplotlib';

export default function Tech() {
    return (
        <div className="max-w-screen-sm pt-2 mb-20">
            <p 
            className="text-white font-bold 
            text-lg"
            >
                tech
            </p>
        <div className='flex gap-2'>
            <div className='w-1/2 text-white'>
                <Icons title="languages">
                    <SiHtml5 size={24} title="HTML" />
                    <SiCss3 size={24} title="CSS" />
                    <SiJavascript size={24} title="JavaScript" />
                    <SiTypescript size={24} title="TypeScript" />
                    <SiC size={24} title="C" />
                    <SiCplusplus size={24} title="C++" />
                    <FaJava size={24} title="Java" />
                    <SiPython size={24} title="Python" />
                    <FaRProject size={24} title="R" />
                </Icons>
                <Icons title="libraries">
                    <SiNumpy size={24} title="NumPy" />
                    {/* <Matplotlib title="Matplotlib" /> */}
                    <SiDjango size={24} title="Django" />
                    <SiFlask size={24} title="Flask" />
                    <SiOpencv size={24} title="OpenCV" />
                    <SiPandas size={24} title="Pandas" />
                </Icons>
            </div>
            <div className="w-1/2 text-white">
                <Icons title="frameworks">
                        <FaReact size={24} />
                        <SiNextdotjs size={24} />
                        <SiAstro size={24} />
                        <SiNodedotjs size={24} />
                        <SiTailwindcss size={24} />
                        <SiExpress size={24} />
                        <SiBootstrap size={24} />
                </Icons>
                <Icons title="tools">
                    <SiGit size={24} title="Git" />
                    <BsGithub size={24} title="GitHub" />
                    <GrMysql size={24} title="MySQL" />
                    <SiPostgresql size={24} title="PostgreSQL" />
                    <SiPrisma size={24} title="Prisma" />
                    <SiSupabase size={24} title="Supabase" />
                    <SiJupyter size={24} title="Jupyter Notebook" />
                    <SiMongodb size={24} title="MongoDB" />
                    <SiFigma size={24} title="Figma" />
                    <SiVercel size={24} title="Vercel" />
                    <SiVitest size={24} title="Vitest" />
                </Icons>
            </div>
        </div>
        </div>
    )
}
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
    SiVercel
} from 'react-icons/si';

import {
    BsGithub
} from 'react-icons/bs';

import {
    GrMysql
} from 'react-icons/gr';

import { IconGroup } from './Icongroup';

export default function Tech() {
    return (
        <div className="max-w-screen-sm pt-5 mb-10">
            <p 
            className="text-white font-bold 
            text-lg"
            >
                tech
            </p>
        <div className='flex gap-2'>
            <div className='w-1/2 text-white'>
                <IconGroup title="languages">
                    <SiHtml5 size={24} title="HTML" />
                    <SiCss3 size={24} title="CSS" />
                    <SiJavascript size={24} title="JavaScript" />
                    <SiTypescript size={24} title="TypeScript" />
                    <SiC size={24} title="C" />
                    <SiCplusplus size={24} title="C++" />
                    <FaJava size={24} title="Java" />
                    <SiPython size={24} title="Python" />
                    <FaRProject size={24} title="R" />
                </IconGroup>
                <IconGroup title="libraries">
                    <SiNumpy size={24} title="NumPy" />
                    <svg className="p-0" xmlns="http://www.w3.org/2000/svg" 
                    width="25" height="25"  viewBox="0 0 180 180" 
                    stroke="black">
                        <title>Matplotlib</title>
                        <g stroke-width="2" fill="#848485">
                        <circle cx="90" cy="90" r="88"/>
                        <circle cx="90" cy="90" r="66"/>
                        <circle cx="90" cy="90" r="44"/>
                        <circle cx="90" cy="90" r="22"/>
                        <path d="m90,2v176m62-26-124-124m124,0-124,124m150-62H2"/>
                        </g><g opacity=".8">
                        <path fill="#000" d="m90,90h18a18,18 0 0,0 0-5z"/>
                        <path fill="#000" d="m90,90 34-43a55,55 0 0,0-15-8z"/>
                        <path fill="#000" d="m90,90-16-72a74,74 0 0,0-31,15z"/>
                        <path fill="#000" d="m90,90-58-28a65,65 0 0,0-5,39z"/>
                        <path fill="#000" d="m90,90-33,16a37,37 0 0,0 2,5z"/>
                        <path fill="#000" d="m90,90-10,45a46,46 0 0,0 18,0z"/>
                        <path fill="#000" d="m90,90 46,58a74,74 0 0,0 12-12z"/>
                    </g></svg>
                    <SiDjango size={24} title="Django" />
                    <SiFlask size={24} title="Flask" />
                    <SiOpencv size={24} title="OpenCV" />
                    <SiPandas size={24} title="Pandas" />
                </IconGroup>
            </div>
            <div className="w-1/2 text-white">
                <IconGroup title="frameworks">
                        <FaReact size={24} />
                        <SiNextdotjs size={24} />
                        <SiAstro size={24} />
                        <SiNodedotjs size={24} />
                        <SiTailwindcss size={24} />
                        <SiExpress size={24} />
                        <SiBootstrap size={24} />
                </IconGroup>
                <IconGroup title="tools">
                    <SiGit size={24} title="Git" />
                    <BsGithub size={24} title="GitHub" />
                    <GrMysql size={24} title="MySQL" />
                    <SiPostgresql size={24} title="PostgreSQL" />
                    <SiPrisma size={24} title="Prisma" />
                    <SiJupyter size={24} title="Jupyter Notebook" />
                    <SiMongodb size={24} title="MongoDB" />
                    <SiFigma size={24} title="Figma" />
                    <SiVercel size={24} title="Vercel" />
                </IconGroup>
            </div>
        </div>
        </div>
    )
}
"use client"

import { DISCORD_USER_ID } from "../lib/constants";
import { Options, useLanyardWS } from "use-lanyard";

const statusColors = {
    online: "bg-green-500",
    idle: "bg-yellow-500",
    dnd: "bg-red-500",
    offline: "bg-gray-500",
} as const;

const statusNames = {
    online: "online",
    idle: "idle",
    dnd: "do not disturb",
    offline: "offline",
} as const;

export async function Lanyard() {
        const lanyardPromise = await fetch(
            `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`);
        const lanyardData = await lanyardPromise.json();

        return <Status initData={lanyardData.data} />
}

function Status({ initData }: { readonly initData?: any}) {
    const data = useLanyardWS(DISCORD_USER_ID, 
        { initData } as Partial<Options>);
    const status = data?.discord_status;
    const color = data ? statusColors[
        status as keyof typeof statusColors ?? "offline"] : "bg-gray-500";

    return (
        <div className="flex flex-row items-center 
            gap-1 font-bold text-center justify-center">
            <div className={`h-3 w-3 shrink-0 rounded-full ${color}`} />
            <p className="text-white text-center">
                {statusNames[
                    status as keyof typeof statusNames] || "loading..."}
            </p>
        </div>
    )
}
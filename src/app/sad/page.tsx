import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center
        justify-center h-[100vh]">
            <Image src="/sad.jpg"
            alt="sad"
            width="360"
            height="356" 
            />
        </div>
    )
}
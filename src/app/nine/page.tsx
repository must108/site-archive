import Image from "next/image";

export default function Page() {
    return (
        <div className="flex items-center
        justify-center h-[100vh]">
            <Image src="/nine.png"
            alt="forgive me" 
            width="486" 
            height="573" 
            />
        </div>
    );
}
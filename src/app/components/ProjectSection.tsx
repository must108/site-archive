
export default function Section({ title, link, language, languageName = language }: any) {
    const langMap: { [key: string]: string } = {
        python: 'bg-python',
        typescript: 'bg-typescript',
        jupyter: 'bg-jupyter',
        java: 'bg-java',
        R: 'bg-r',
    };

    const langClass = langMap[language] || 'bg-gray-500';

    return (
        <div className="text-white w-auto h-auto
        bg-github p-2 rounded-md mb-3">
            <h1 className="cursor-pointer text-md"
            >
                <a href={link} target="_blank">
                    <span 
                    className="link link-underline"
                    >
                        {title}
                    </span>
                </a>
            </h1>
            <div className="flex flex-row items-center gap-1 pt-4">
                <div 
                    className={`h-3 w-3 shrink-0 
                    rounded-full ${langClass}`} 
                />
                <p className='text-xs'>{languageName}</p>
            </div>
        </div>
    )
}
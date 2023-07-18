interface ScrollArrowProps {
    scrollTo: string
}

export default function ScrollArrow({ scrollTo }: ScrollArrowProps) {

    return (
        <div className="absolute bottom-24 left-1/2 right-1/2">
            <a href={scrollTo} className="text-center text-sky-400 hover:text-sky-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" inline-flex w-8 h-8 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
        </div>
    )
}
import React from 'react'

// Component สำหรับปุ่มเลื่อนซ้าย-ขวาบนรูปภาพ (Carousel)
export function CarouselNav({
    onPrev,
    onNext,
    className = ''
}: {
    onPrev: (e: React.MouseEvent) => void;
    onNext: (e: React.MouseEvent) => void;
    className?: string;
}) {
    return (
        <>
            <button
                onClick={onPrev}
                className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-[#f97316] ${className}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                onClick={onNext}
                className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all hover:bg-[#f97316] ${className}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </>
    )
}

// Component สำหรับปุ่มเลื่อนหน้า (Pagination)
export function PaginationNav({
    currentPage,
    totalPages,
    onPrev,
    onNext,
    layout = 'center',
    className = '',
    loop = false
}: {
    currentPage: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
    layout?: 'center' | 'end';
    className?: string;
    loop?: boolean;
}) {
    const defaultLayoutClass = layout === 'center' ? 'mt-10 justify-center gap-4' : 'mt-3 justify-end gap-2 text-gray-400';

    return (
        <div className={`flex items-center ${defaultLayoutClass} ${className}`}>
            {layout === 'end' ? (
                <>
                    <NavButton onClick={onPrev} disabled={!loop && currentPage <= 0} direction="left" />
                    <NavButton onClick={onNext} disabled={!loop && currentPage >= totalPages - 1} direction="right" />
                    <span className="text-xs uppercase tracking-[0.3em] ml-1">
                        {currentPage + 1} / {totalPages}
                    </span>
                </>
            ) : (
                <>
                    <NavButton onClick={onPrev} disabled={!loop && currentPage <= 0} direction="left" />
                    <span className="text-sm font-medium tracking-[0.2em] text-gray-400">
                        {currentPage + 1} / {totalPages}
                    </span>
                    <NavButton onClick={onNext} disabled={!loop && currentPage >= totalPages - 1} direction="right" />
                </>
            )}
        </div>
    )
}

function NavButton({ onClick, disabled, direction }: { onClick: () => void; disabled: boolean; direction: 'left' | 'right' }) {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-orange-400 hover:bg-orange-500/15 disabled:opacity-40 disabled:cursor-not-allowed"
        >
            {direction === 'left' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            )}
        </button>
    )
}

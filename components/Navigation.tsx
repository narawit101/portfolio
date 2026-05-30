import React from 'react'

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
                type="button"
                onClick={onPrev}
                className={`theme-floating-control absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full opacity-100 transition-all hover:border-primary hover:bg-primary hover:text-white sm:left-3 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100 ${className}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button
                type="button"
                onClick={onNext}
                className={`theme-floating-control absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full opacity-100 transition-all hover:border-primary hover:bg-primary hover:text-white sm:right-3 sm:h-10 sm:w-10 sm:opacity-0 sm:group-hover:opacity-100 ${className}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </>
    )
}

export function CarouselDotsNav({
    currentIndex,
    total,
    onSelect,
    showCounter = false,
    className = ''
}: {
    currentIndex: number;
    total: number;
    onSelect: (index: number) => void;
    showCounter?: boolean;
    className?: string;
}) {
    if (total <= 1) return null

    const useTextBadge = total > 6

    return (
        <div
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-10 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 ${className}`}
            onClick={(e) => e.stopPropagation()}
        >
            {useTextBadge ? (
                <div className="flex items-center rounded-full bg-black/60 px-3 py-1 text-white shadow-md backdrop-blur-md border border-white/10">
                    <span className="text-[11px] font-medium tracking-[0.15em] select-none">
                        {currentIndex + 1} / {total}
                    </span>
                </div>
            ) : (
                <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5 shadow-md backdrop-blur-md border border-white/10">
                    <div className="flex gap-1.5">
                        {Array.from({ length: total }).map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onSelect(i)
                                }}
                                aria-label={`Go to image ${i + 1}`}
                                className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'w-4 bg-primary' : 'w-1.5 bg-white/40 hover:bg-white/80'
                                }`}
                            />
                        ))}
                    </div>
                    {showCounter && (
                        <span className="ml-1 border-l border-white/20 pl-2 text-[10px] font-medium tracking-[0.12em] text-white/90 select-none">
                            {currentIndex + 1} / {total}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
}

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
    const defaultLayoutClass = layout === 'center' ? 'mt-10 justify-center gap-4' : 'mt-3 justify-end gap-2'

    return (
        <div className={`flex items-center ${defaultLayoutClass} ${className}`}>
            {layout === 'end' ? (
                <>
                    <NavButton onClick={onPrev} disabled={!loop && currentPage <= 0} direction="left" />
                    <NavButton onClick={onNext} disabled={!loop && currentPage >= totalPages - 1} direction="right" />
                    <span className="theme-text-muted ml-1 text-xs uppercase tracking-[0.3em]">
                        {currentPage + 1} / {totalPages}
                    </span>
                </>
            ) : (
                <>
                    <NavButton onClick={onPrev} disabled={!loop && currentPage <= 0} direction="left" />
                    <span className="theme-text-muted text-sm font-medium tracking-[0.2em]">
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
            className="theme-floating-control flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:border-primary hover:bg-primary/15 sm:h-10 sm:w-10 disabled:cursor-not-allowed disabled:opacity-40"
        >
            {direction === 'left' ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            )}
        </button>
    )
}

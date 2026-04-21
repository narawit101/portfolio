'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Lang, Project } from '@/types'
import { projects } from '@/data/projects'
import { CarouselDotsNav, CarouselNav, PaginationNav } from './Navigation'

const sectionCopy: Record<Lang, { title: string; subtitle: string; tags: string; details: string; closeAria: string }> = {
    th: {
        title: 'โปรเจกต์',
        subtitle: 'กรณีศึกษา',
        tags: 'เทคโนโลยี',
        details: 'รายละเอียด',
        closeAria: 'ปิดหน้าต่างโปรเจกต์',
    },
    en: {
        title: 'Projects',
        subtitle: 'Case Studies',
        tags: 'Tags',
        details: 'Details',
        closeAria: 'Close project modal',
    },
}

function ProjectCard({ project, onClick, lang }: { project: Project; onClick: () => void; lang: Lang }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const hasMultiple = project.pictures.length > 1

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
        }
    }

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((i) => (i === 0 ? project.pictures.length - 1 : i - 1))
    }
    const next = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((i) => (i === project.pictures.length - 1 ? 0 : i + 1))
    }

    return (
        <div
            onClick={onClick}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            className="theme-panel-solid theme-panel-hover group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
            <div className="relative h-52 w-full shrink-0 overflow-hidden bg-(--theme-bg) sm:h-56">
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {project.pictures.map((pic, i) => (
                        <img key={i} src={pic} alt={`${project.head[lang]} - ${i + 1}`} className="w-full h-full object-contain shrink-0" />
                    ))}
                </div>

                {hasMultiple && (
                    <>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
                        <CarouselNav onPrev={prev} onNext={next} />
                        <CarouselDotsNav
                            currentIndex={currentIndex}
                            total={project.pictures.length}
                            onSelect={setCurrentIndex}
                        />
                    </>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">
                {project.tags && project.tags.length > 0 && (
                    <div className="mb-3">
                        <h3 className="mb-2 line-clamp-1 text-base font-semibold leading-snug text-(--theme-text) transition-colors group-hover:text-primary">
                            {project.head[lang]}
                        </h3>
                        <div
                            className="flex items-center gap-2 overflow-hidden whitespace-nowrap"
                            style={{ maskImage: 'linear-gradient(to right, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}
                        >
                            {project.tags.map(tag => (
                                <span key={tag} className="shrink-0 rounded-md border border-(--theme-border) bg-(--theme-surface-soft) px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-(--theme-text-body) transition-colors group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:text-primary-400 sm:text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <p className="theme-text-faint mt-auto line-clamp-2 whitespace-pre-wrap text-sm leading-relaxed">{project.description[lang]}</p>
            </div>
        </div>
    )
}

function ProjectModal({ project, onClose, lang }: { project: Project; onClose: () => void; lang: Lang }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const hasMultiple = project.pictures.length > 1
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const isClosingRef = useRef(false)

    const requestClose = useCallback(() => {
        if (isClosingRef.current) return
        isClosingRef.current = true
        setIsVisible(false)
        closeTimeoutRef.current = setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    useEffect(() => {
        const raf = window.requestAnimationFrame(() => setIsVisible(true))
        const previousOverflow = document.body.style.overflow
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') requestClose()
        }
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.cancelAnimationFrame(raf)
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
            }
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [requestClose])

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((i) => (i === 0 ? project.pictures.length - 1 : i - 1))
    }
    const next = (e: React.MouseEvent) => {
        e.stopPropagation()
        setCurrentIndex((i) => (i === project.pictures.length - 1 ? 0 : i + 1))
    }

    const copy = sectionCopy[lang]

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={requestClose}>
            <div
                className={`absolute inset-0 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundColor: 'rgb(var(--theme-bg-rgb) / 0.9)' }}
            />
            <div
                className={`theme-panel-solid relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-x-hidden overflow-y-auto rounded-2xl transition-all duration-300 ${isVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-[0.98] opacity-0'}`}
                style={{ boxShadow: 'var(--theme-shadow-strong)' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="sticky top-0 z-20 border-b border-(--theme-border) backdrop-blur-md"
                    style={{ backgroundColor: 'rgb(var(--theme-bg-rgb) / 0.84)' }}
                >
                    <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
                        <div className="min-w-0">
                            <p className="mt-1 truncate text-2xl font-semibold text-(--theme-text)">{project.head[lang]}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <button
                                type="button"
                                onClick={requestClose}
                                aria-label={copy.closeAria}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-(--theme-border) bg-(--theme-surface-soft) text-(--theme-text) transition-colors hover:border-primary hover:bg-primary hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="group relative h-64 w-full shrink-0 bg-(--theme-bg) sm:h-80 md:h-[400px]">
                    <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {project.pictures.map((pic, i) => (
                            <img key={i} src={pic} alt={`${project.head[lang]} - ${i + 1}`} className="w-full h-full object-contain shrink-0" />
                        ))}
                    </div>

                    {hasMultiple && (
                        <>

                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 via-black/20 to-transparent" />
                            <CarouselNav onPrev={prev} onNext={next} />
                            <CarouselDotsNav
                                currentIndex={currentIndex}
                                total={project.pictures.length}
                                onSelect={setCurrentIndex}
                                showCounter={true}
                            />
                        </>
                    )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col">
                    {project.tags && project.tags.length > 0 && (
                        <div className="mb-4">
                            <p className="mb-2 font-semibold tracking-[0.15em] uppercase text-primary">
                                {copy.tags}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-primary/30 bg-primary/10 text-primary-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <p className="mb-2 text-2xl font-semibold uppercase text-(--theme-text)">{copy.details}</p>

                    <div className="theme-text-body space-y-4 whitespace-pre-wrap text-sm font-light leading-relaxed sm:text-base">
                        <p>{project.description[lang]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection({ lang }: { lang: Lang }) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [page, setPage] = useState(0)

    const copy = sectionCopy[lang]

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
    const lastPage = Math.max(totalPages - 1, 0)
    const clampPage = (value: number) => Math.max(0, Math.min(lastPage, value))
    const currentPage = clampPage(page)
    const visibleProjects = projects.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
    const hasPagination = totalPages > 1

    return (
        <section id="section-project" className="scroll-mt-20 py-10 sm:py-12 px-6 sm:px-10 relative">
            <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="mt-3 text-3xl font-bold text-(--theme-text) sm:text-4xl">{copy.title}</h2>
                    <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">{copy.subtitle}</span>
                    <div className="mt-4 h-[3px] w-12 bg-primary rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} onClick={() => setSelectedProject(project)} lang={lang} />
                    ))}
                </div>

                {hasPagination && (
                    <PaginationNav
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrev={() => setPage((prev) => clampPage(prev - 1))}
                        onNext={() => setPage((prev) => clampPage(prev + 1))}
                        layout="center"
                    />
                )}
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    lang={lang}
                />
            )}
        </section>
    )
}

'use client'
import { useState, useEffect, useRef } from 'react'
import { Project } from '@/types'
import { projects } from '@/data/projects'
import { CarouselNav, PaginationNav } from './Navigation'

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const hasMultiple = project.pictures.length > 1

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
            className="group bg-[#12121a] rounded-2xl overflow-hidden border border-white/6 hover:border-[#f97316]/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
        >
            <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-[#0a0a12] shrink-0">
                <div
                    className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {project.pictures.map((pic, i) => (
                        <img key={i} src={pic} alt={`${project.head} - ${i + 1}`} className="w-full h-full object-cover shrink-0" />
                    ))}
                </div>

                {hasMultiple && (
                    <>
                        <CarouselNav onPrev={prev} onNext={next} />
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5" onClick={e => e.stopPropagation()}>
                            {project.pictures.map((_, i) => (
                                <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentIndex(i) }} className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === currentIndex ? 'bg-[#f97316] w-6' : 'bg-white/40 w-1.5'}`} />
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className="p-5 flex flex-col flex-1">
                {project.tags && project.tags.length > 0 && (
                    <div
                        className="flex items-center gap-2 mb-3 overflow-hidden whitespace-nowrap"
                        style={{ maskImage: 'linear-gradient(to right, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, black 85%, transparent 100%)' }}
                    >
                        {project.tags.map(tag => (
                            <span key={tag} className="shrink-0 px-2 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-md border border-white/10 bg-white/5 text-gray-300 transition-colors group-hover:border-[#f97316]/30 group-hover:bg-[#f97316]/10 group-hover:text-orange-400 ">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                <h3 className="text-base font-semibold line-clamp-1 text-white mb-2 group-hover:text-[#f97316] transition-colors leading-snug">
                    {project.head}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mt-auto whitespace-pre-wrap">{project.description}</p>
            </div>
        </div>
    )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const hasMultiple = project.pictures.length > 1
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const isClosingRef = useRef(false)

    const requestClose = () => {
        if (isClosingRef.current) return
        isClosingRef.current = true
        setIsVisible(false)
        closeTimeoutRef.current = setTimeout(() => {
            onClose()
        }, 300)
    }

    useEffect(() => {
        const raf = window.requestAnimationFrame(() => setIsVisible(true))
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
            document.body.style.overflow = 'auto'
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    const prev = () => setCurrentIndex((i) => (i === 0 ? project.pictures.length - 1 : i - 1))
    const next = () => setCurrentIndex((i) => (i === project.pictures.length - 1 ? 0 : i + 1))

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={requestClose}>
            <div className={`absolute inset-0 bg-[#0a0a12]/90 backdrop-blur-md transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
            <div
                className={`relative w-full max-w-5xl bg-[#12121a] rounded-2xl border border-white/10 shadow-2xl overflow-y-auto overflow-x-hidden flex flex-col max-h-[90vh] transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-3 scale-[0.98]'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={requestClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-[#f97316] transition-colors "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Image Slider */}
                <div className="relative w-full h-64 sm:h-80 md:h-[400px] bg-black shrink-0 group">
                    <div className="flex h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {project.pictures.map((pic, i) => (
                            <img key={i} src={pic} alt={`${project.head} - ${i + 1}`} className="w-full h-full object-contain shrink-0" />
                        ))}
                    </div>

                    {hasMultiple && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0a0a12]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10" onClick={e => e.stopPropagation()}>
                            <PaginationNav
                                currentPage={currentIndex}
                                totalPages={project.pictures.length}
                                onPrev={prev}
                                onNext={next}
                                layout="center"
                                className="mt-0! gap-3"
                                loop={true}
                            />
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col">
                    {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-md border border-[#f97316]/30 bg-[#f97316]/10 text-orange-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">{project.head}</h2>
                    <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-4 font-light whitespace-pre-wrap">
                        <p>{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ITEMS_PER_PAGE = 6;

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [page, setPage] = useState(0)

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)
    const lastPage = Math.max(totalPages - 1, 0)
    const clampPage = (value: number) => Math.max(0, Math.min(lastPage, value))
    const currentPage = clampPage(page)
    const visibleProjects = projects.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
    const hasPagination = totalPages > 1

    return (
        <section id="section-project" className="scroll-mt-20 py-10 sm:py-12 px-6 sm:px-10 relative">
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/3 rounded-full blur-[100px]" />
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-14">
                    <span className="text-orange-500 text-xs font-semibold tracking-[0.25em] uppercase">Case Studies</span>
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-white">Featured Projects</h2>
                    <div className="mt-4 h-[3px] w-12 bg-orange-500 rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={project.id || index} project={project} onClick={() => setSelectedProject(project)} />
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
                />
            )}
        </section>
    )
}
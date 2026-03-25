'use client'

import { useState } from 'react'
import { techStackCategories } from '@/data/techStack'
import { TechStackCategory } from '@/types'
import { TechStackItem } from '@/types'

import { PaginationNav } from './Navigation'

const TechStackTile = ({ item }: { item: TechStackItem }) => (
    <div className="flex flex-col items-center gap-2 text-center rounded-2xl border border-white/10 bg-white/2 px-3 py-4 transition-all hover:border-orange-400/40 ">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5">
            <img src={item.img} alt={item.name} className="w-8 h-8 object-contain" />
        </div>
        <span className="text-[11px] font-semibold tracking-wide text-white">{item.name}</span>
    </div>
)

const ITEMS_PER_PAGE = 8

const TechStackCategoryCard = ({ category }: { category: TechStackCategory }) => {
    const [page, setPage] = useState(0)
    const totalPages = Math.ceil(category.items.length / ITEMS_PER_PAGE)
    const lastPage = Math.max(totalPages - 1, 0)
    const clampPage = (value: number) => Math.max(0, Math.min(lastPage, value))
    const currentPage = clampPage(page)
    const visibleItems = category.items.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)
    const hasPagination = totalPages > 1

    return (
        <article className="relative overflow-hidden rounded-3xl border border-white/6 bg-[#101017]/60 shadow-[0_35px_120px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:border-orange-400/40 hover:-translate-y-2 hover:shadow-[0_35px_130px_rgba(0,0,0,0.55)]">
            <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${category.accent} opacity-20 blur-[100px]`} />
            <div className="relative p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.4em] text-gray-400">{category.title}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{category.description}</p>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {visibleItems.map((item) => (
                        <TechStackTile key={`${category.title}-${item.name}-${currentPage}`} item={item} />
                    ))}
                </div>
                {hasPagination && (
                    <PaginationNav
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrev={() => setPage((prev) => clampPage(prev - 1))}
                        onNext={() => setPage((prev) => clampPage(prev + 1))}
                        layout="end"
                    />
                )}
            </div>
        </article>
    )
}

export default function TechStackSection() {
    return (
        <section id="section-stack" className="scroll-mt-20 py-12 lg:py-14 px-6 sm:px-10 relative">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-orange-500/20 to-transparent" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/3 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs tracking-[0.35em] text-orange-500 uppercase">Capabilities</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">Technical Stack</h2>
                    <div className="mt-4 h-[3px] w-12 bg-orange-500 rounded-full mx-auto" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {techStackCategories.map((category) => (
                        <TechStackCategoryCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    )
}
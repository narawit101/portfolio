'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lang } from '@/types'
import { navigationItems, siteBrand } from '@/data/navigation'

type NavbarProps = {
    lang: Lang
    onLangChange: (lang: Lang) => void
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollTo = (id: string) => {
        setMenuOpen(false)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    const toggleLanguage = (nextLang: Lang) => {
        onLangChange(nextLang)
    }

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'theme-nav-surface' : 'border-b border-transparent bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-xl font-bold text-(--theme-text)">{siteBrand[lang]}</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navigationItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => scrollTo(item.id)}
                            className="theme-nav-link cursor-pointer rounded-full px-3 py-1.5 text-sm theme-text-muted transition-colors"
                        >
                            {item.label[lang]}
                        </button>
                    ))}
                    <div className="ml-2 inline-flex items-center gap-1 rounded-full border border-(--theme-border) bg-(--theme-surface-soft) p-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-(--theme-text-faint)" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                                <path d="M3 12h18" />
                                <path d="M12 3c2.5 2.5 3.9 5.7 3.9 9s-1.4 6.5-3.9 9c-2.5-2.5-3.9-5.7-3.9-9S9.5 5.5 12 3Z" />
                            </svg>
                        </span>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('th')}
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${lang === 'th' ? 'bg-primary text-white shadow-[0_0_24px_rgb(var(--primary-rgb)/0.18)]' : 'theme-text-muted hover:text-(--theme-text)'}`}
                        >
                            TH
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('en')}
                            className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-primary text-white shadow-[0_0_24px_rgb(var(--primary-rgb)/0.18)]' : 'theme-text-muted hover:text-(--theme-text)'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="cursor-pointer text-(--theme-text) md:hidden"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        }
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 border-t border-(--theme-border) bg-(--theme-nav) px-6 pb-6 pt-4 backdrop-blur-md">
                    {navigationItems.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => scrollTo(item.id)}
                            className="theme-nav-link cursor-pointer rounded-xl px-3 py-2 text-left theme-text-muted transition-colors"
                        >
                            {item.label[lang]}
                        </button>
                    ))}
                    <div className="mt-2 inline-flex w-fit items-center gap-1 rounded-full border border-(--theme-border) bg-(--theme-surface-soft) p-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-(--theme-text-faint)" aria-hidden="true">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                                <path d="M3 12h18" />
                                <path d="M12 3c2.5 2.5 3.9 5.7 3.9 9s-1.4 6.5-3.9 9c-2.5-2.5-3.9-5.7-3.9-9S9.5 5.5 12 3Z" />
                            </svg>
                        </span>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('th')}
                            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === 'th' ? 'bg-primary text-white shadow-[0_0_24px_rgb(var(--primary-rgb)/0.18)]' : 'hover:text-(--theme-text)'}`}
                        >
                            TH
                        </button>
                        <button
                            type="button"
                            onClick={() => toggleLanguage('en')}
                            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${lang === 'en' ? 'bg-primary text-white shadow-[0_0_24px_rgb(var(--primary-rgb)/0.18)]' : 'theme-text-muted hover:text-(--theme-text)'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

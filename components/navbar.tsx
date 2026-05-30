'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Lang } from '@/types'
import { navigationItems, siteBrand } from '@/data/navigation'

type NavbarProps = {
    lang: Lang
    onLangChange: (lang: Lang) => void
}

export default function Navbar({ lang }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState<string>('section-hero')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -40% 0px',
            threshold: 0,
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        navigationItems.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) {
                observer.observe(element)
            }
        })

        const handleScroll = () => {
            if (window.scrollY < 80) {
                setActiveSection('section-hero')
                return
            }

            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50
            if (isBottom) {
                setActiveSection(navigationItems[navigationItems.length - 1].id)
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollTo = (id: string) => {
        setMenuOpen(false)
        setActiveSection(id)
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'theme-nav-surface' : 'border-b border-transparent bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-xl font-bold text-(--theme-text)">{siteBrand[lang]}</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollTo(item.id)}
                                className={`relative cursor-pointer py-2 text-sm font-medium transition-colors ${
                                    isActive 
                                        ? 'text-(--theme-text)' 
                                        : 'theme-text-muted hover:text-(--theme-text)'
                                }`}
                            >
                                <span className="relative z-10 px-1">{item.label[lang]}</span>
                                <span 
                                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all duration-300 origin-center ${
                                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                                    }`} 
                                />
                            </button>
                        )
                    })}
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
                <div className="md:hidden flex flex-col gap-2 border-t border-(--theme-border) bg-(--theme-nav) px-6 pb-6 pt-4 backdrop-blur-md">
                    {navigationItems.map((item) => {
                        const isActive = activeSection === item.id
                        return (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => scrollTo(item.id)}
                                className={`relative cursor-pointer rounded-r-xl px-3 py-2 text-left border-l-2 transition-all duration-300 ${
                                    isActive 
                                        ? 'text-primary bg-primary/5 font-medium border-primary' 
                                        : 'theme-text-muted hover:text-(--theme-text) hover:bg-(--theme-surface-soft) border-transparent'
                                }`}
                            >
                                {item.label[lang]}
                            </button>
                        )
                    })}
                </div>
            )}
        </nav>
    )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
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

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a12]/95 backdrop-blur-md  border-primary/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-xl font-bold text-white">Portfolio</span>
                    {/* <span className="text-xl font-bold text-primary">.DEV</span> */}
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <span onClick={() => scrollTo('section-hero')} className="text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">Home</span>
                    <span onClick={() => scrollTo('section-stack')} className="text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">Skill</span>
                    <span onClick={() => scrollTo('section-project')} className="text-sm text-gray-400 hover:text-primary-400 transition-colors cursor-pointer">Projects</span>
                    <span onClick={() => scrollTo('section-contact')} className="text-sm  text-gray-400 hover:text-primary-400 rounded-lg transition-colors cursor-pointer font-medium">Contact</span>
                </div>

                {/* Mobile hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        {menuOpen
                            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        }
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0a0a12]/98 backdrop-blur-md px-6 pb-6 pt-4 flex flex-col gap-4">
                    <span onClick={() => scrollTo('section-hero')} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer py-2">Home</span>
                    <span onClick={() => scrollTo('section-stack')} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer py-2">Tech Stack</span>
                    <span onClick={() => scrollTo('section-project')} className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer py-2">Projects</span>
                    <span onClick={() => scrollTo('section-contact')} className="text-gray-400 hover:text-primary-400 hover:bg-primary-600  py-2 rounded-lg transition-colors cursor-pointer font-medium">Contact</span>
                </div>
            )}
        </nav>
    )
}

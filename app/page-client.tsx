'use client'

import { useEffect, useState, startTransition } from 'react'
import ThemeToggle from '@/components/ThemeToggle'
import LangToggle from '@/components/LangToggle'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/HeroSection'
import ExperienceSection from '@/components/ExperienceSection'
import TechStackSection from '@/components/TechStackSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'
import { Lang } from '@/types'

const LANG_STORAGE_KEY = 'portfolio-lang'
const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365
const CONTROLS_VISIBLE_KEY = 'portfolio-controls-visible'

export default function PageClient({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.cookie = `${LANG_STORAGE_KEY}=${lang}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; samesite=lax`
  }, [lang])

  useEffect(() => {
    const saved = window.localStorage.getItem(CONTROLS_VISIBLE_KEY)
    if (saved !== null) {
      startTransition(() => {
        setShowControls(saved === 'true')
      })
    }
  }, [])

  const toggleControls = () => {
    setShowControls((prev) => {
      const next = !prev
      window.localStorage.setItem(CONTROLS_VISIBLE_KEY, String(next))
      return next
    })
  }

  return (
    <>
      <Navbar lang={lang} onLangChange={setLang} />
      <main className="theme-page min-h-screen overflow-x-hidden transition-colors duration-300">
        <HeroSection lang={lang} />
        <ExperienceSection lang={lang} />
        <TechStackSection lang={lang} />
        <ProjectsSection lang={lang} />
        <ContactSection lang={lang} />
        <FooterSection lang={lang} />
      </main>
      <div className="control-dock-wrapper">
        <div
          className={`transition-all duration-300 origin-right flex items-center gap-2.5 sm:gap-3 ${
            showControls
              ? 'opacity-100 translate-x-0 scale-100 max-w-[500px]'
              : 'opacity-0 translate-x-10 scale-95 max-w-0 overflow-hidden pointer-events-none'
          }`}
        >
          <LangToggle lang={lang} onLangChange={setLang} />
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={toggleControls}
          className="cursor-pointer flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-(--theme-border) bg-(--theme-toggle-panel) text-(--theme-toggle-icon) hover:text-(--theme-toggle-icon-active) shadow-md backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label={showControls ? 'Hide controls' : 'Show controls'}
          title={showControls ? 'Hide controls' : 'Show controls'}
        >
          {showControls ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          )}
        </button>
      </div>
    </>
  )
}

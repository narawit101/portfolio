'use client'

import { useEffect, useState } from 'react'
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

export default function PageClient({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    window.localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.cookie = `${LANG_STORAGE_KEY}=${lang}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; samesite=lax`
  }, [lang])

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
        <LangToggle lang={lang} onLangChange={setLang} />
        <ThemeToggle />
      </div>
    </>
  )
}

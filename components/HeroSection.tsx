'use client'

import { heroContent } from '@/data/hero'
import { Lang } from '@/types'

export default function HeroSection({ lang }: { lang: Lang }) {
  const content = heroContent[lang]
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="section-hero" className="relative min-h-screen flex items-center justify-center">
      <div
        className="hero-bg-image absolute inset-0 bg-[url('https://res.cloudinary.com/do6xlqizt/image/upload/v1773920895/bg_p4eakk.png')] bg-cover bg-center"
        style={{ opacity: 'var(--hero-image-opacity)' }}
      />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full lg:max-w-2xl flex flex-col items-center lg:items-start">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-(--theme-text) sm:text-5xl lg:text-6xl">
              {content.greeting}
              <br />
              <div className="inline-flex items-center gap-2 mt-2">
                <span>{content.name}</span>
              </div>
            </h1>

            <p className="theme-text-muted mb-6 max-w-xl text-sm leading-relaxed sm:text-base lg:max-w-2xl lg:text-lg">
              {content.description}
            </p>

            <div className="flex flex-row gap-3">
              <div
                onClick={() => scrollToSection('section-contact')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    scrollToSection('section-contact')
                  }
                }}
                role="button"
                tabIndex={0}
                className="inline-flex hover:cursor-pointer items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-primary-600 hover:shadow-[0_0_24px_rgb(var(--primary-rgb)/0.4)]"
              >
                <div>{content.contactCta}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </div>
              <div
                onClick={() => scrollToSection('section-project')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    scrollToSection('section-project')
                  }
                }}
                role="button"
                tabIndex={0}
                className="hero-secondary-button hover:cursor-pointer inline-flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                <span>{content.projectCta}</span>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 shrink-0">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-100 lg:h-full rounded-3xl overflow-hidden border-2 border-(--theme-border-strong) shadow-[0_0_60px_rgb(var(--primary-rgb)/0.1)]">
              <img src="/profile.jpg" alt={content.profileAlt} className="w-full h-full object-cover" />
            </div>
            <div className="theme-panel-solid absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2 shadow-xl lg:left-auto lg:translate-x-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="theme-text-muted whitespace-nowrap text-xs">{content.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

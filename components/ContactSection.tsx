'use client'

import { contacts, contactSectionText } from '@/data/contact'
import { Lang } from '@/types'

export default function ContactSection({ lang }: { lang: Lang }) {
    const sectionText = contactSectionText[lang]

    return (
        <section id="section-contact" className="scroll-mt-20 py-10 sm:py-12 px-6 sm:px-10 relative">
            <div className="theme-divider-line absolute top-0 left-0 h-px w-full" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="mt-3 text-3xl font-bold text-[var(--theme-text)] sm:text-4xl">{sectionText.title}</h2>
                    <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">{sectionText.subtitle}</span>
                    <div className="mt-4 h-[3px] w-12 bg-primary rounded-full mx-auto" />
                </div>

                <div className="theme-panel-solid theme-panel-hover overflow-hidden rounded-2xl">
                    <div className="theme-soft flex items-center gap-2 border-b border-[color:var(--theme-border)] px-4 py-3 sm:px-5">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="theme-text-faint ml-3 text-xs font-mono">contact-info</span>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="mb-5">
                            <span className="terminal-type theme-text-faint font-mono text-xs sm:text-sm">{sectionText.terminalLabel}</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {contacts.map((item) => (
                                <div key={item.value} className="theme-soft flex items-center gap-3 rounded-xl border border-[color:var(--theme-border)] p-3 transition-transform duration-500 hover:-translate-y-1 hover:border-primary/20 sm:gap-4 sm:p-4">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <img src={item.icon} alt={item.label[lang]} className={`theme-contact-icon w-4 h-4 sm:w-5 sm:h-5 ${item.iconClass ?? ''}`} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="theme-text-faint text-[10px] font-mono uppercase tracking-wider sm:text-[11px]">{item.label[lang]}</p>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="theme-text-body block truncate text-xs transition-colors hover:text-primary-400 sm:text-sm">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="theme-text-body truncate text-xs sm:text-sm">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

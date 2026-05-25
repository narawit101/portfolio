'use client'

import { Lang } from '@/types'

type LangToggleProps = {
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export default function LangToggle({ lang, onLangChange }: LangToggleProps) {
  const isTh = lang === 'th'

  const toggleLang = () => {
    onLangChange(isTh ? 'en' : 'th')
  }

  return (
    <div className="lang-toggle-wrapper">
      <div className="theme-toggle-panel">
        <span className={`lang-toggle-text select-none ${isTh ? 'is-active text-primary' : 'text-(--theme-toggle-icon)'}`}>
          TH
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={isTh}
          aria-label={isTh ? 'Switch to English' : 'Switch to Thai'}
          onClick={toggleLang}
          className="theme-toggle-button cursor-pointer"
        >
          <span className="theme-toggle-rail" aria-hidden="true" />
          <span
            className={`theme-toggle-thumb ${isTh ? 'theme-toggle-thumb--light' : 'theme-toggle-thumb--dark'}`}
            aria-hidden="true"
          />
        </button>
        <span className={`lang-toggle-text select-none ${!isTh ? 'is-active text-primary' : 'text-(--theme-toggle-icon)'}`}>
          EN
        </span>
      </div>
    </div>
  )
}

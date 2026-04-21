'use client'

import { useTheme } from '@/components/theme'

function SunIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`theme-toggle-icon ${active ? 'is-active' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 1.75v2.5" />
      <path d="M12 19.75v2.5" />
      <path d="M4.4 4.4l1.78 1.78" />
      <path d="M17.82 17.82l1.78 1.78" />
      <path d="M1.75 12h2.5" />
      <path d="M19.75 12h2.5" />
      <path d="M4.4 19.6l1.78-1.78" />
      <path d="M17.82 6.18l1.78-1.78" />
    </svg>
  )
}

function MoonIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`theme-toggle-icon ${active ? 'is-active' : ''}`}
      fill="currentColor"
    >
      <path d="M20.76 14.1a8.71 8.71 0 0 1-10.86-10.86 0.75 0.75 0 0 0-0.95-0.95A10.6 10.6 0 1 0 21.71 15.05a0.75 0.75 0 0 0-0.95-0.95Z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const isLight = theme === 'light'

  return (
    <div className="theme-toggle-wrapper">
      <div className="theme-toggle-panel">
        <SunIcon active={isLight} />
        <button
          type="button"
          role="switch"
          suppressHydrationWarning
          aria-checked={isLight}
          aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
          onClick={toggleTheme}
          className="theme-toggle-button cursor-pointer"
        >
          <span className="theme-toggle-rail" aria-hidden="true" />
          <span
            className={`theme-toggle-thumb ${isLight ? 'theme-toggle-thumb--light' : 'theme-toggle-thumb--dark'}`}
            aria-hidden="true"
          />
        </button>
        <MoonIcon active={!isLight} />
      </div>
    </div>
  )
}

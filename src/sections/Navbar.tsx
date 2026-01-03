import { useState } from 'react'
import { Button } from '../components/Button'
import { cn } from '../utils/cn'
import { useTranslation } from 'react-i18next'

type NavItem = {
  label: string
  href: string
  id: string
}

type NavbarProps = {
  name: string
  items: NavItem[]
  activeSection: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Navbar({ name, items, activeSection, theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'tr' ? 'en' : 'tr')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="text-base font-semibold text-slate-900 dark:text-slate-100"
          aria-label="Go to top"
        >
          {name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100',
                  isActive && 'text-slate-900 dark:text-slate-100',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-200"
          >
            {t('language.switch')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            <span className="sr-only">{theme === 'dark' ? t('actions.lightMode') : t('actions.darkMode')}</span>
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 4.75a.75.75 0 01.75.75V7a.75.75 0 01-1.5 0V5.5A.75.75 0 0112 4.75zm0 10.5a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5zM5.5 11.25H7a.75.75 0 010 1.5H5.5a.75.75 0 010-1.5zm11.5 0h1.5a.75.75 0 010 1.5H17a.75.75 0 010-1.5zM7.22 6.28a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L7.22 7.34a.75.75 0 010-1.06zm7.44 7.44a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM16.78 6.28a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM8.28 14.66a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0z"
                />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21 13.5A8.5 8.5 0 1110.5 3a.75.75 0 01.66 1.1A6.99 6.99 0 1019.9 12.84.75.75 0 0121 13.5z"
                />
              </svg>
            )}
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden dark:border-slate-800 dark:text-slate-200"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="relative inline-flex h-4 w-5 flex-col gap-1">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${open ? 'translate-y-[6px] rotate-45' : ''}`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${open ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`h-0.5 w-full rounded-full bg-current transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`}
              ></span>
            </span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200/70 bg-white/95 px-6 pb-6 md:hidden dark:border-slate-800/60 dark:bg-slate-950/90">
          <div className="flex flex-col items-center gap-3 pt-4 text-center">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="w-full max-w-[240px] rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

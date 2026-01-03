import { Container } from '../components/Container'
import { SocialIcon } from '../components/SocialIcon'
import type { SocialLink } from '../data/portfolio'

type FooterProps = {
  name: string
  location: string
  socialLinks: SocialLink[]
}

export function Footer({ name, location, socialLinks }: FooterProps) {
  const getIconClass = (icon: SocialLink['icon']) => {
    switch (icon) {
      case 'linkedin':
        return 'h-6 w-6 text-sky-600 hover:text-sky-700 dark:text-slate-400 dark:hover:text-slate-100'
      case 'instagram':
        return 'h-6 w-6 text-pink-500 hover:text-pink-600 dark:text-slate-400 dark:hover:text-slate-100'
      case 'whatsapp':
        return 'h-6 w-6 text-emerald-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-slate-100'
      case 'github':
      default:
        return 'h-6 w-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
    }
  }

  return (
    <footer className="border-t border-slate-200 py-10 dark:border-slate-800/60">
      <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{name}</p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{location}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-emerald-600 transition hover:text-emerald-700 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <span className="sr-only">{link.label}</span>
              <SocialIcon name={link.icon} className={getIconClass(link.icon)} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  )
}

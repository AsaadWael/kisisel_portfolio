import { useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import { SocialIcon } from '../components/SocialIcon'
import type { SectionContent, SocialLink } from '../data/portfolio'
import { useTranslation } from 'react-i18next'

type ContactProps = {
  email: string
  socialLinks: SocialLink[]
  content: SectionContent
}

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
}

export function Contact({ email, socialLinks, content }: ContactProps) {
  const { t } = useTranslation()
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const getIconClass = (icon: SocialLink['icon']) => {
    switch (icon) {
      case 'linkedin':
        return 'h-5 w-5 text-sky-600 hover:text-sky-700 dark:text-slate-300 dark:hover:text-slate-100'
      case 'instagram':
        return 'h-5 w-5 text-pink-500 hover:text-pink-600 dark:text-slate-300 dark:hover:text-slate-100'
      case 'whatsapp':
        return 'h-5 w-5 text-emerald-500 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-slate-100'
      case 'github':
      default:
        return 'h-5 w-5 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100'
    }
  }

  const validate = () => {
    const nextErrors: FormErrors = {}
    if (form.name.trim().length < 2) {
      nextErrors.name = t('contact.errors.name')
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = t('contact.errors.email')
    }
    if (form.message.trim().length < 10) {
      nextErrors.message = t('contact.errors.message')
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
            <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <p>
                {t('contact.preferEmail')}{' '}
                <a href={`mailto:${email}`} className="text-emerald-600 dark:text-emerald-300">
                  {email}
                </a>
                .
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-emerald-600 transition hover:text-emerald-700 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    <span className="sr-only">{link.label}</span>
                    <SocialIcon name={link.icon} className={getIconClass(link.icon)} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  {t('contact.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-100"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <p className="text-xs text-rose-500 dark:text-rose-300">{errors.name}</p> : null}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  {t('contact.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-100"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <p className="text-xs text-rose-500 dark:text-rose-300">{errors.email}</p> : null}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-100"
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? (
                  <p className="text-xs text-rose-500 dark:text-rose-300">{errors.message}</p>
                ) : null}
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit">{t('contact.send')}</Button>
                {submitted ? (
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300"
                    aria-live="polite"
                  >
                    {t('contact.sent')}
                  </p>
                ) : null}
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}

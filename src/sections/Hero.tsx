import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { ImageWithFallback } from '../components/ImageWithFallback'
import type { HeroContent, PersonalInfo } from '../data/portfolio'

type HeroProps = {
  personalInfo: PersonalInfo
  heroContent: HeroContent
}

export function Hero({ personalInfo, heroContent }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-4 sm:pt-20">
      <Container className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-8">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-slate-800/60 dark:bg-slate-900/50 dark:text-slate-300">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
            {heroContent.badge}
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              {heroContent.greeting}
            </p>
            <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-slate-700 sm:text-xl dark:text-slate-300">{personalInfo.title}</p>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base dark:text-slate-400">
              {personalInfo.bio}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact" variant="primary">
              {heroContent.primaryCta}
            </Button>
            <Button href={personalInfo.cvUrl} variant="secondary" download>
              {heroContent.secondaryCta}
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-500">
            <span>{personalInfo.location}</span>
            <span>{personalInfo.email}</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 left-10 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="rounded-[32px] border border-slate-200 bg-white/80 p-4 dark:border-slate-800/70 dark:bg-slate-900/50">
            <ImageWithFallback
              src={personalInfo.avatar}
              alt={`${personalInfo.name} portrait`}
              fallbackLabel="Add your avatar"
              className="h-full w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

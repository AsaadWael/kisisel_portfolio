import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import type { SectionContent, TimelineItem } from '../data/portfolio'
import { useTranslation } from 'react-i18next'

type TimelineProps = {
  timeline: TimelineItem[]
  content: SectionContent
}

export function Timeline({ timeline, content }: TimelineProps) {
  const { t } = useTranslation()
  return (
    <section id="timeline" className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 space-y-8">
          {timeline.map((item) => (
            <div key={item.id} className="relative pl-8">
              <div className="absolute left-0 top-2 h-full w-px bg-slate-200 dark:bg-slate-800/80"></div>
              <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-emerald-400"></div>
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-slate-800/70 dark:bg-slate-900/40">
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  <span>{t(`timeline.types.${item.type}`)}</span>
                  <span>
                    {item.start} - {item.end}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.place}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-500"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

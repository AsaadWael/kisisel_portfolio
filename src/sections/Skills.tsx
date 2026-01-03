import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import type { SectionContent, SkillCategory } from '../data/portfolio'

type SkillsProps = {
  skills: SkillCategory[]
  content: SectionContent
}

export function Skills({ skills, content }: SkillsProps) {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-3xl border border-slate-200 bg-white/80 p-6 dark:border-slate-800/70 dark:bg-slate-900/40"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-slate-700/80 dark:bg-slate-900">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="text-emerald-400">
                    <path
                      fill="currentColor"
                      d="M12 2l2.4 6.2h6.6l-5.3 3.8 2 6.3L12 14.8 6.3 18.3l2-6.3L3 8.2h6.6z"
                    />
                  </svg>
                </span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{skill.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

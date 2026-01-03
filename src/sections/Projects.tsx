import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { SectionTitle } from '../components/SectionTitle'
import type { Project, SectionContent } from '../data/portfolio'
import { useTranslation } from 'react-i18next'

type ProjectsProps = {
  projects: Project[]
  content: SectionContent
}

export function Projects({ projects, content }: ProjectsProps) {
  const { t } = useTranslation()
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex h-full flex-col gap-5">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                fallbackLabel="Add project image"
                className="h-auto w-full object-contain"
              />
              <div className="flex flex-1 flex-col gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:border-slate-700/70 dark:bg-slate-900/60 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
                  <a
                    href={project.liveUrl}
                    className="text-emerald-600 transition hover:text-emerald-500 dark:text-emerald-300 dark:hover:text-emerald-200"
                  >
                    {t('projects.live')}
                  </a>
                  <a
                    href={project.repoUrl}
                    className="text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  >
                    {t('projects.repo')}
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

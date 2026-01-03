import { Container } from '../components/Container'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { SectionTitle } from '../components/SectionTitle'
import type { AboutContent, PersonalInfo } from '../data/portfolio'
import { useTranslation } from 'react-i18next'

type AboutProps = {
  personalInfo: PersonalInfo
  aboutContent: AboutContent
}

export function About({ personalInfo, aboutContent }: AboutProps) {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <SectionTitle
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            subtitle={aboutContent.subtitle}
          />
          <div className="mt-6 space-y-4 text-sm text-slate-600 sm:text-base dark:text-slate-400">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              {t('about.locationLine', { name: personalInfo.name, location: personalInfo.location })}
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <ImageWithFallback
            src={aboutContent.image}
            alt="About section placeholder"
            fallbackLabel="Add your about photo"
            className="aspect-[5/4]"
          />
        </div>
      </Container>
    </section>
  )
}

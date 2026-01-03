import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { SectionTitle } from '../components/SectionTitle'
import type { GalleryItem, SectionContent } from '../data/portfolio'
import { useTranslation } from 'react-i18next'

type GalleryProps = {
  items: GalleryItem[]
  content: SectionContent
}

export function Gallery({ items, content }: GalleryProps) {
  const { t } = useTranslation()
  return (
    <section id="gallery" className="py-16 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Card key={item.id} className="flex h-full flex-col justify-between gap-6">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('gallery.certificate')} {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-500 dark:text-emerald-300">
                {t('gallery.issued')}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

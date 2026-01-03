import { cn } from '../utils/cn'

type SectionTitleProps = {
  title: string
  subtitle?: string
  eyebrow?: string
  align?: 'left' | 'center'
}

export function SectionTitle({ title, subtitle, eyebrow, align = 'left' }: SectionTitleProps) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={cn('flex flex-col gap-3', alignment)}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-100">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-400">{subtitle}</p>
      ) : null}
    </div>
  )
}

import { useState } from 'react'
import { cn } from '../utils/cn'

type ImageWithFallbackProps = {
  src?: string
  alt: string
  className?: string
  fallbackClassName?: string
  fallbackLabel?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackLabel = 'Add your image here',
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const shouldShowFallback = hasError || !src

  if (shouldShowFallback) {
    return (
      <div
        className={cn(
          'flex h-full min-h-[220px] w-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/70 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-500',
          fallbackClassName,
        )}
        aria-label={fallbackLabel}
      >
        {fallbackLabel}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-full w-full rounded-2xl object-cover', className)}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  )
}

import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type CardProps = {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.2)] backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-[0_20px_60px_-40px_rgba(15,23,42,0.9)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

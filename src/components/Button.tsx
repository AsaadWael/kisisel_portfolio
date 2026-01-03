import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  className?: string
}

type ButtonProps =
  | (CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })

export function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400'
  const variants = {
    primary:
      'bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white dark:hover:shadow-slate-900/40',
    secondary:
      'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-slate-500 dark:hover:bg-slate-900',
    ghost: 'text-slate-700 hover:bg-slate-200/60 dark:text-slate-200 dark:hover:bg-slate-800/60',
  }
  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-5 py-2.5',
  }

  const mergedClassName = cn(base, variants[variant], sizes[size], className)

  if ('href' in props) {
    const { href, ...rest } = props as CommonProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
    return <a href={href} className={mergedClassName} {...rest} />
  }

  const buttonProps = props as CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
  return <button className={mergedClassName} type="button" {...buttonProps} />
}

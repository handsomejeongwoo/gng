import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:shadow-ring disabled:cursor-not-allowed disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-soft hover:bg-brand-dark hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-surface text-ink border border-line hover:border-brand hover:text-brand hover:-translate-y-0.5 active:translate-y-0',
  ghost: 'text-ink hover:text-brand',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-14 px-7 text-base',
}

type ButtonBaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type AsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type AsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

export function Button(props: AsButton | AsLink) {
  const { variant = 'primary', size = 'md', className, children } = props

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    return (
      <a className={cn(base, variants[variant], sizes[size], className)} {...rest}>
        {children}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsButton
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  )
}

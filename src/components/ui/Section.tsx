import { cn } from '@/lib/cn'
import { Container } from './Container'

type SectionProps = {
  children: React.ReactNode
  id?: string
  className?: string
  containerClassName?: string
  muted?: boolean
}

export function Section({ children, id, className, containerClassName, muted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-20 md:py-28', muted && 'bg-surface-muted', className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
      {children}
    </p>
  )
}

import { cn } from '@/lib/cn'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-line bg-surface p-7 shadow-soft transition-all duration-200',
        className,
      )}
    >
      {children}
    </div>
  )
}

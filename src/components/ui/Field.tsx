import { cn } from '@/lib/cn'

const fieldBase =
  'h-12 w-full rounded-xl border border-line bg-surface px-4 text-[15px] text-ink placeholder:text-muted/70 transition-all duration-200 focus:border-brand focus:outline-none focus:shadow-ring'

type FieldProps = {
  label: string
  className?: string
  children: React.ReactNode
}

export function Field({ label, className, children }: FieldProps) {
  return (
    <label className={cn('flex flex-col gap-2', className)}>
      <span className="text-sm font-medium text-ink">{label}</span>
      {children}
    </label>
  )
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(fieldBase, props.className)} />
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(fieldBase, 'h-auto resize-none py-3 leading-relaxed', props.className)}
    />
  )
}

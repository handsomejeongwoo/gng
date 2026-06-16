import { Container } from '@/components/ui/Container'
import { contact } from '@/content/copy'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted py-12">
      <Container className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div className="flex flex-col gap-1">
          <strong className="text-lg font-bold text-ink">굳앤굳페이</strong>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted sm:text-right">
          <span>대표 {contact.owner}</span>
          <a href={`tel:${contact.phone}`} className="font-semibold text-ink hover:text-brand">
            전화 {contact.phoneDisplay}
          </a>
        </div>
      </Container>
    </footer>
  )
}

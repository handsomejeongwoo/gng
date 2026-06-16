'use client'

import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'
import { contact, langs, navIds, type Copy, type Lang } from '@/content/copy'

type HeaderProps = {
  t: Copy
  lang: Lang
  onLangChange: (lang: Lang) => void
}

export function Header({ t, lang, onLangChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-container items-center gap-7 px-6 md:px-10">
        <a href="#top" aria-label="굳앤굳페이 home" className="shrink-0">
          <img src="/images/logo-icon.png" alt="굳앤굳페이" className="h-10 w-10 object-contain" />
        </a>

        <nav className="ml-2 hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#${navIds[index]}`}
              className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <div className="flex items-center rounded-full bg-surface-muted p-1" aria-label="Language switch">
            {langs.map((item) => (
              <button
                key={item}
                onClick={() => onLangChange(item)}
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-semibold transition-all',
                  lang === item ? 'bg-surface text-ink shadow-soft' : 'text-muted hover:text-ink',
                )}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <Button
            as="a"
            href={`tel:${contact.phone}`}
            size="md"
            className="hidden min-w-[104px] sm:inline-flex"
          >
            {t.phone}
          </Button>
        </div>
      </div>
    </header>
  )
}

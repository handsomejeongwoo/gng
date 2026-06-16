'use client'

import { Reveal } from '@/components/ui/Reveal'
import { Section, Kicker } from '@/components/ui/Section'
import { type Copy } from '@/content/copy'

export function Fees({ t }: { t: Copy }) {
  return (
    <Section id="fees" containerClassName="grid gap-12 md:grid-cols-2 md:items-start">
      <Reveal>
        <Kicker>Fee Guide</Kicker>
        <h2 className="text-3xl font-bold leading-snug tracking-tight text-ink md:text-4xl">
          {t.feesTitle}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{t.feesBody}</p>
      </Reveal>
      <Reveal delay={0.1} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
        {t.feeRows.map(([type, method, condition], index) => (
          <div
            key={type}
            className={`grid grid-cols-[1fr_1fr_auto] items-center gap-4 px-6 py-5 ${
              index > 0 ? 'border-t border-line' : ''
            }`}
          >
            <span className="font-semibold text-ink">{type}</span>
            <span className="text-sm text-muted">{method}</span>
            <strong className="text-right text-sm font-semibold text-brand">{condition}</strong>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}

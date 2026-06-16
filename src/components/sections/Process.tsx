'use client'

import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { Section, Kicker } from '@/components/ui/Section'
import { type Copy } from '@/content/copy'

export function Process({ t }: { t: Copy }) {
  return (
    <Section id="process">
      <Reveal>
        <Kicker>Process</Kicker>
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{t.processTitle}</h2>
      </Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.map(([title, desc], index) => (
          <Reveal key={title} delay={index * 0.08} className="h-full">
            <Card className="h-full hover:-translate-y-1 hover:shadow-card">
              <span className="text-sm font-bold text-brand">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

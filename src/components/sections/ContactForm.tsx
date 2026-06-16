'use client'

import { Button } from '@/components/ui/Button'
import { Field, Input, Textarea } from '@/components/ui/Field'
import { Reveal } from '@/components/ui/Reveal'
import { Section, Kicker } from '@/components/ui/Section'
import { contact, type Copy } from '@/content/copy'

export function ContactForm({ t }: { t: Copy }) {
  return (
    <Section id="contact" containerClassName="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
      <Reveal>
        <Kicker>Contact</Kicker>
        <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">{t.contactTitle}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">{t.contactBody}</p>
        <div className="mt-8 rounded-2xl border border-line bg-surface-muted p-6">
          <span className="text-sm font-medium text-muted">{t.center}</span>
          <strong className="mt-1 block text-2xl font-bold text-ink">{contact.phoneDisplay}</strong>
          <small className="mt-1 block text-sm text-muted">
            대표 {contact.owner} · 평일 09:00 - 18:00
          </small>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form className="grid gap-4 rounded-2xl border border-line bg-surface p-7 shadow-card sm:grid-cols-2">
        {t.form.slice(0, 4).map((label, index) => (
          <Field key={label} label={label}>
            <Input placeholder={t.placeholders[index]} />
          </Field>
        ))}
        <Field label={t.form[4]} className="sm:col-span-2">
          <Textarea rows={4} placeholder={t.placeholders[4]} />
        </Field>
        <label className="flex items-center gap-2 text-sm text-muted sm:col-span-2">
          <input type="checkbox" className="h-4 w-4 rounded border-line text-brand" />
          <span>{t.agree}</span>
        </label>
        <Button type="button" size="lg" className="w-full sm:col-span-2">
          {t.submit}
        </Button>
        </form>
      </Reveal>
    </Section>
  )
}

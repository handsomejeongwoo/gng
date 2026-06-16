'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { contact, type Copy } from '@/content/copy'

export function Hero({ t }: { t: Copy }) {
  return (
    <section id="top">
      <div className="relative flex min-h-[560px] items-center overflow-hidden bg-ink md:min-h-[640px]">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15"
        />
        <Container className="relative">
          <Reveal className="max-w-xl text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              {t.heroTagline}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">{t.heroBody}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="#contact" size="lg" className="w-full sm:w-auto sm:min-w-[240px]">
                {t.primaryCta}
              </Button>
              <Button
                as="a"
                href={`tel:${contact.phone}`}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto sm:min-w-[240px]"
              >
                {t.secondaryCta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="relative z-10 mt-14 pb-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {t.stats.map(([value, label], index) => (
            <Reveal
              key={label}
              delay={index * 0.08}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand to-brand-dark"
              />
              <span className="text-3xl font-bold leading-none text-brand/15 transition-colors duration-300 group-hover:text-brand/25">
                0{index + 1}
              </span>
              <strong className="mt-3 block text-2xl font-bold tracking-tight text-brand md:text-3xl">
                {value}
              </strong>
              <span className="mt-1.5 block text-sm font-medium text-muted">{label}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

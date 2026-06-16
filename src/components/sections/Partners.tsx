'use client'

import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { Section } from '@/components/ui/Section'
import { partners, type Copy, type Partner } from '@/content/copy'

export function Partners({ t }: { t: Copy }) {
  return (
    <Section
      id="partners"
      className="bg-surface"
      containerClassName="text-center"
    >
      <Reveal>
        <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
          {t.partnersTitle}
        </h2>
      </Reveal>
      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-20 md:gap-y-14">
        {partners.map((partner, index) => (
          <Reveal key={partner.name} delay={index * 0.08}>
            <PartnerLogo partner={partner} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="relative h-16 w-36 transition-transform duration-300 hover:scale-105 md:h-20 md:w-44">
      <Image
        src={partner.logo}
        alt={`${partner.name} 로고`}
        fill
        sizes="(max-width: 768px) 40vw, 176px"
        className="object-contain"
      />
    </div>
  )
}

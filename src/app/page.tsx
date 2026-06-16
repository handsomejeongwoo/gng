'use client'

import { useState } from 'react'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Fees } from '@/components/sections/Fees'
import { Process } from '@/components/sections/Process'
import { Partners } from '@/components/sections/Partners'
import { ContactForm } from '@/components/sections/ContactForm'
import { Footer } from '@/components/sections/Footer'
import { copy, type Lang } from '@/content/copy'

export default function Home() {
  const [lang, setLang] = useState<Lang>('ko')
  const t = copy[lang]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header t={t} lang={lang} onLangChange={setLang} />
      <Hero t={t} />
      <Fees t={t} />
      <Process t={t} />
      <Partners t={t} />
      <ContactForm t={t} />
      <Footer />
    </main>
  )
}

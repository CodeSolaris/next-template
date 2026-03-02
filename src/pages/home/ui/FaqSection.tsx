'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { faqs } from '@/entities/faq'
import { SectionHeader } from '@/shared/ui'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FaqSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useGSAP(
    () => {
      // Entrance animation for header
      gsap.fromTo(
        '.faq-header > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        },
      )

      // Entrance animation for accordion items
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={containerRef}
      className="relative z-10 overflow-hidden bg-background px-6 py-32"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <SectionHeader
          title="Common"
          italicTitle="Inquiries"
          description="Details on integration, security, and scaling with NeoDesk."
          className="faq-header"
        />

        <div className="flex w-full flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i

            return (
              <div
                key={faq.question}
                className="faq-item group overflow-hidden rounded-2xl border border-surface/50 bg-surface transition-colors hover:border-foreground/20"
              >
                <button
                  onClick={() => toggleAccordion(i)}
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-8 font-sans text-lg font-bold text-foreground/90 transition-colors group-hover:text-foreground">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-surface transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-primary bg-primary/20 text-primary'
                        : 'bg-surface/30 text-foreground/50'
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </div>
                </button>

                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 font-mono text-sm leading-relaxed text-foreground/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

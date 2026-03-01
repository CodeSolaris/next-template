'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Code, FileKey2, Settings, Shield } from 'lucide-react'
import { useRef } from 'react'

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Entrance Animation
      const headerElements = gsap.utils.toArray<HTMLElement>(
        '.marquee-header > *',
      )
      gsap.fromTo(
        headerElements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        },
      )

      gsap.fromTo(
        trackRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        },
      )

      // Infinite horizontal scroll
      const tl = gsap.timeline({ repeat: -1 })
      tl.to(trackRef.current, {
        xPercent: -50, // scroll half of the duplicated content
        duration: 30,
        ease: 'none',
      })
    },
    { scope: containerRef },
  )

  const cards = [
    {
      title: 'Settings - Account Security',
      icon: Shield,
      content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground/70">Two-Factor Auth</span>
            <div className="relative h-4 w-8 rounded-full bg-primary/20">
              <div className="absolute top-0.5 right-0.5 h-3 w-3 rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground/70">Active Sessions</span>
            <span className="font-mono text-foreground/40">3 devices</span>
          </div>
        </div>
      ),
    },
    {
      title: 'API Keys',
      icon: Code,
      content: (
        <div className="flex flex-col gap-2">
          <div className="text-xs text-foreground/40">Production Key</div>
          <div className="flex gap-2">
            <div className="flex-1 rounded bg-surface/30 p-2 font-mono text-xs text-foreground/60">
              nx_prod_8f2a...
            </div>
            <button className="rounded bg-surface/50 p-2 hover:bg-surface/80">
              <FileKey2 className="h-3 w-3 text-foreground/70" />
            </button>
          </div>
        </div>
      ),
    },
    {
      title: 'General Preferences',
      icon: Settings,
      content: (
        <div className="flex flex-col gap-2">
          {['Theme', 'Language', 'Timezone'].map(item => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-surface/30 pb-1 text-sm"
            >
              <span className="text-foreground/70">{item}</span>
              <span className="text-xs text-foreground/30">System</span>
            </div>
          ))}
        </div>
      ),
    },
  ]

  const repeatedCards = [...cards, ...cards] // Duplicate for seamless infinite scroll

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden border-y border-foreground/10 bg-[#f5f4fb] py-24 dark:bg-[#16162a]"
    >
      <div className="marquee-header relative z-10 mb-12 text-center">
        <h3 className="font-mono text-sm tracking-widest text-primary/80 uppercase">
          Infrastructure
        </h3>
        <p className="mt-2 font-sans text-3xl font-bold">
          Built for scale. Configured for you.
        </p>
      </div>

      {/* Fade masks */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f5f4fb] to-transparent dark:from-[#16162a]"></div>
      <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-32 bg-gradient-to-l from-[#f5f4fb] to-transparent dark:from-[#16162a]"></div>

      <div ref={trackRef} className="flex w-max items-center gap-6 opacity-0">
        {repeatedCards.map((card, idx) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${card.title}-${idx}`}
            className="w-[350px] shrink-0 rounded-2xl border border-foreground/10 bg-[#f0f0f5] p-6 transition-colors duration-500 hover:border-primary/50 dark:bg-[#1c1c2e]"
          >
            <div className="mb-6 flex items-center gap-3 border-b border-surface/50 pb-4">
              <card.icon className="h-5 w-5 text-foreground/50" />
              <h4 className="font-sans font-medium text-foreground/90">
                {card.title}
              </h4>
            </div>
            {card.content}
          </div>
        ))}
      </div>
    </section>
  )
}

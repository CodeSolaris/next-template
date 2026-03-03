'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import { pricingTiers } from '@/entities/pricing'
import { Button } from '@/shared/ui'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const textElements = gsap.utils.toArray<HTMLElement>('.pricing-text > *')
      const cards = gsap.utils.toArray<HTMLElement>('.pricing-card')

      // Animate text header
      gsap.fromTo(
        textElements,
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

      // Animate cards
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
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

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="relative z-10 flex min-h-[800px] w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-32"
    >
      {/* Philosophy-style background layers */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background to-surface/80 opacity-90 dark:from-background dark:to-[#0A0A0F]" />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop\')' }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16">
        <div className="pricing-text flex flex-col items-center text-center">
          <h2 className="mb-6 font-sans text-4xl font-bold md:text-5xl lg:text-6xl">
            Pricing
            {' '}
            <span className="font-serif text-primary italic">Protocol</span>
            .
          </h2>
          <p className="max-w-xl text-center font-mono text-base text-foreground/50">
            Choose the infrastructure that fits your scale. No obscured fees.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
          {pricingTiers.map(tier => (
            <div
              key={tier.name}
              className={`pricing-card group relative flex flex-col gap-6 overflow-hidden rounded-[2.5rem] p-8 transition-transform duration-500 hover:-translate-y-2 ${
                tier.featured
                  ? 'border-transparent bg-primary shadow-[0_20px_60px_-15px_var(--color-primary)] md:-translate-y-4'
                  : 'mt-4 border border-foreground/10 bg-[#f5f5f7] md:mt-0 dark:bg-[#252535]'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 z-20 rounded-bl-3xl bg-white/20 px-4 py-2 font-mono text-xs text-white">
                  RECOMMENDED
                </div>
              )}

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className={`font-sans text-2xl font-bold ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <p className={`font-mono text-sm ${tier.featured ? 'text-white/80' : 'text-foreground/50'}`}>
                  {tier.desc}
                </p>
              </div>

              <div className={`relative z-10 my-4 font-sans text-6xl font-bold ${tier.featured ? 'text-white' : 'text-foreground'}`}>
                {tier.price}
                {' '}
                <span className={`text-lg font-medium ${tier.featured ? 'text-white/60' : 'text-foreground/40'}`}>/mo</span>
              </div>

              <div className={`relative z-10 mb-8 flex flex-1 flex-col gap-4 border-t pt-6 ${tier.featured ? 'border-white/20' : 'border-foreground/5'}`}>
                {tier.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${tier.featured ? 'bg-white/20 text-white' : 'bg-primary/20 text-primary'}`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className={`font-mono text-sm ${tier.featured ? 'text-white/90' : 'text-foreground/70'}`}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                href="/checkout"
                variant={tier.featured ? 'primary' : 'secondary'}
                className={`w-full ${tier.featured ? 'bg-white text-primary hover:bg-white/90' : ''}`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

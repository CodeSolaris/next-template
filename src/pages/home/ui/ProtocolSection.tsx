'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CheckCircle2, Circle, Clock, Info } from 'lucide-react'
import { useRef } from 'react'
import { GlassCard, SectionHeader } from '@/shared/ui'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.protocol-card')

      gsap.fromTo(
        cards,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  const steps = [
    {
      id: '01',
      title: 'Contextual Ingestion',
      status: 'Completed',
      description: 'System automatically parses and indexes all connected data streams.',
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
    },
    {
      id: '02',
      title: 'Semantic Mapping',
      status: 'Active',
      description: 'Building relational vectors between disparate project entities.',
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      id: '03',
      title: 'Predictive Synthesis',
      status: 'Queued',
      description: 'Generating optimized execution paths based on operational history.',
      icon: <Circle className="h-5 w-5 text-foreground/20" />,
    },
  ]

  return (
    <section ref={containerRef} className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <SectionHeader
              align="left"
              accent="Operational Logic"
              title="The Core"
              italicTitle="Protocol"
              description="A deterministic workflow designed for maximum cognitive efficiency and rapid scaling."
            />

            <div className="mt-12 flex flex-col gap-4">
              {steps.map(step => (
                <GlassCard
                  key={step.id}
                  className="protocol-card group flex items-start gap-6 !rounded-2xl !p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-foreground/5 bg-surface font-mono text-sm font-bold text-primary">
                    {step.id}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <h4 className="font-sans font-bold text-foreground">
                        {step.title}
                      </h4>
                      {step.icon}
                    </div>
                    <p className="font-mono text-xs leading-relaxed text-foreground/50">
                      {step.description}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="relative aspect-square lg:w-1/2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 animate-pulse rounded-full border border-primary/20 bg-primary/5 blur-3xl" />
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-foreground/5">
                <Info className="h-12 w-12 text-primary/20" />
                {/* Rotating decorative rings */}
                <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-primary/20" />
                <div className="animate-spin-reverse-slow absolute -inset-4 rounded-full border border-foreground/5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

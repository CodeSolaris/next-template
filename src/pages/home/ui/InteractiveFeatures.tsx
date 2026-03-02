'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Activity, Cpu, Database, Fingerprint, Network, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'
import { CursorScheduler, DiagnosticShuffler, TelemetryTypewriter } from '@/features/interactive-demos'
import { GlassCard, IconCircle } from '@/shared/ui'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function InteractiveFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.engine-block')

      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
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
    <section ref={containerRef} className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Core Engine */}
          <GlassCard className="engine-block flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <IconCircle variant="primary">
                <Cpu className="h-5 w-5" />
              </IconCircle>
              <DiagnosticShuffler />
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                Neural Processor
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/50">
                Low-latency inference engine for real-time data synthesis and
                predictive modeling.
              </p>
            </div>
            <div className="mt-auto pt-4">
              <div className="mb-2 flex items-center justify-between font-mono text-[10px] text-foreground/40 uppercase">
                <span>Core Load</span>
                <span>84%</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-foreground/5">
                <div className="h-full w-[84%] bg-primary" />
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Security */}
          <GlassCard className="engine-block flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <IconCircle variant="blue">
                <ShieldCheck className="h-5 w-5" />
              </IconCircle>
              <div className="flex h-6 w-12 items-center justify-center rounded-md bg-blue-500/10 font-mono text-[10px] text-blue-400">
                ACTIVE
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                Zero Trust Hub
              </h3>
              <div className="font-mono text-sm leading-relaxed text-foreground/50">
                <TelemetryTypewriter text="End-to-end encryption active. No unauthorized access detected. All protocols green." />
              </div>
            </div>
            <div className="mt-auto flex gap-2 pt-4">
              <Fingerprint className="h-4 w-4 text-foreground/20" />
              <div className="h-4 w-full rounded-md bg-foreground/5" />
            </div>
          </GlassCard>

          {/* Card 3: Database */}
          <GlassCard className="engine-block flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <IconCircle variant="green">
                <Database className="h-5 w-5" />
              </IconCircle>
              <Network className="h-4 w-4 text-foreground/20" />
            </div>
            <div>
              <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                Semantic Index
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/50">
                Vector-optimized data storage for rapid context retrieval and
                RAG-enhanced workflows.
              </p>
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-4">
              <div className="flex items-center justify-between text-[10px] text-foreground/40 uppercase">
                <span>Scheduler</span>
                <span>Queue: 0</span>
              </div>
              <CursorScheduler />
            </div>
          </GlassCard>

          {/* Simple extra stats cards for grid fills */}
          <div className="engine-block flex flex-col gap-4 rounded-[2rem] border border-foreground/5 bg-foreground/[0.02] p-8 lg:col-span-1">
            <Activity className="h-6 w-6 text-primary/40" />
            <div className="font-mono text-3xl font-bold text-foreground/80">
              99.9%
            </div>
            <div className="font-mono text-xs tracking-tighter text-foreground/40 uppercase">
              Uptime Availability
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

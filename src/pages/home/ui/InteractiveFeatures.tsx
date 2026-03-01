'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useMemo, useRef, useState } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// -------------------------------------------------------------
// Pattern 1: Diagnostic Shuffler (Services / Products)
// -------------------------------------------------------------
function DiagnosticShuffler() {
  const [items, setItems] = useState([
    {
      id: 1,
      label: 'Digital Product: \'Mastering Strategy\'',
      status: 'Active - $149',
    },
    { id: 2, label: '1-on-1 Consultation', status: 'Booked - 45 min' },
    { id: 3, label: 'Mentorship Bundle', status: 'Inactive' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItems = [...prev]
        const last = newItems.pop()
        if (last)
          newItems.unshift(last)
        return newItems
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex h-48 w-full items-center justify-center perspective-[1000px] md:h-64">
      {items.map((item, index) => {
        const isTop = index === 0
        const isMiddle = index === 1

        return (
          <div
            key={item.id}
            className="absolute flex w-full max-w-[300px] flex-col gap-2 rounded-[2rem] border border-foreground/5 bg-surface p-6 drop-shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateY(-${index * 16}px) scale(${1 - index * 0.05})`,
              zIndex: 10 - index,
              opacity: Math.max(0.5, 1 - index * 0.3),
            }}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20">
                <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
              </div>
              <span className="truncate font-mono text-xs text-foreground/50">
                {item.status}
              </span>
            </div>
            <h4 className="truncate font-sans font-medium text-foreground">
              {item.label}
            </h4>
            <div className="mt-2 h-1 w-full shrink-0 overflow-hidden rounded-full bg-foreground/5">
              <div
                className="h-full rounded-full bg-primary/50"
                style={{ width: isTop ? '100%' : isMiddle ? '60%' : '30%' }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

// -------------------------------------------------------------
// Pattern 2: Telemetry Typewriter (AI Adviser / Analytics)
// -------------------------------------------------------------
function TelemetryTypewriter() {
  const messages = useMemo(
    () => [
      'Analyzing cross-project data...',
      '> Found 15 overlapping tasks.',
      '> High probability of bottleneck in Q3.',
      'Generating visualization...',
      'Render complete.',
    ],
    [],
  )

  const [currentText, setCurrentText] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    if (msgIdx >= messages.length) {
      const timeout = setTimeout(() => {
        setMsgIdx(0)
        setCharIdx(0)
        setCurrentText('')
      }, 3000)
      return () => clearTimeout(timeout)
    }

    if (charIdx < messages[msgIdx].length) {
      const timeout = setTimeout(
        () => {
          setCurrentText(prev => prev + messages[msgIdx][charIdx])
          setCharIdx(c => c + 1)
        },
        50 + Math.random() * 50,
      )
      return () => clearTimeout(timeout)
    }
    else {
      const timeout = setTimeout(() => {
        setCurrentText(prev => `${prev}\n`)
        setMsgIdx(m => m + 1)
        setCharIdx(0)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [charIdx, msgIdx, messages])

  return (
    <div className="group relative flex h-48 w-full flex-col overflow-hidden rounded-[2rem] border border-foreground/5 bg-surface p-6 font-mono text-sm md:h-64">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
        <span className="text-[10px] tracking-widest text-foreground/40 uppercase">
          Live Feed
        </span>
      </div>
      <div className="mb-4 text-primary opacity-50">SYSTEM // TELEMETRY</div>
      <div className="flex-1 font-mono whitespace-pre-wrap text-foreground/80">
        {currentText}
        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
      </div>
      {/* Decorative scanline */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-10" />
    </div>
  )
}

// -------------------------------------------------------------
// Pattern 3: Cursor Protocol Scheduler (Scheduling)
// -------------------------------------------------------------
function CursorScheduler() {
  const [scheduled, setScheduled] = useState<{ id: number, time: string, text: string, completed: boolean }[]>([
    { id: 1, time: '09:00', text: 'Protocol Review', completed: true },
    { id: 2, time: '11:30', text: 'Context Sweep', completed: false },
    { id: 3, time: '14:00', text: 'Artifact Sync', completed: false },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setScheduled((prev) => {
        const nextId = (prev[prev.length - 1]?.id || 0) + 1
        const hours = 10 + (nextId % 8)
        return [
          ...prev.slice(1),
          {
            id: nextId,
            time: `${hours}:00`,
            text: nextId % 2 === 0 ? `Audit #${nextId * 12}` : `Scan Phase ${nextId}`,
            completed: Math.random() > 0.6,
          },
        ]
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex h-48 w-full flex-col gap-3 overflow-hidden rounded-[2rem] border border-foreground/5 bg-surface p-6 md:h-64">
      <div className="flex items-center justify-between border-b border-foreground/5 pb-3">
        <span className="font-mono text-[10px] tracking-widest text-primary uppercase">Protocol // MAR 01</span>
        <div className="flex gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {scheduled.map((item, idx) => (
          <div
            key={item.id}
            className="flex items-center gap-4 transition-all duration-700 ease-out"
            style={{
              opacity: 1 - (idx * 0.2),
              transform: `translateX(${idx * 4}px)`,
            }}
          >
            <div className="w-12 shrink-0 font-mono text-[10px] text-foreground/40">{item.time}</div>
            <div className={`h-0.5 flex-1 rounded-full ${item.completed ? 'bg-primary/40' : 'bg-foreground/10'}`} />
            <div className={`truncate text-xs font-medium ${item.completed ? 'text-primary' : 'text-foreground/60'}`}>
              {item.text}
            </div>
            {item.completed && (
              <div className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(123,97,255,0.6)]" />
            )}
          </div>
        ))}
      </div>

      {/* Visual background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_2px_2px,rgba(var(--foreground),0.2)_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>
    </div>
  )
}

// -------------------------------------------------------------
// Main Component
// -------------------------------------------------------------
export default function InteractiveFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.feature-card')

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex w-full justify-center px-4 py-32 md:px-8"
    >
      <div className="w-full max-w-7xl">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="max-w-3xl font-sans text-4xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
            Interactive Functional
            {' '}
            <span className="font-serif text-primary italic">Artifacts</span>
            .
          </h2>
          <p className="mt-6 max-w-xl font-mono text-foreground/60">
            Not just features. A completely interconnected digital instrument
            designed to unify your scattered workflows.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Diagnostic Shuffler */}
          <div className="feature-card flex flex-col rounded-[3rem] border border-foreground/5 bg-background/50 p-8 drop-shadow-xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
            <DiagnosticShuffler />
            <div className="mt-8">
              <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">
                Productize Knowledge
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/50">
                Package your consultations and workflows into standalone digital
                artifacts. Native Stripe integration makes checkout
                frictionless.
              </p>
            </div>
          </div>

          {/* Telemetry Typewriter */}
          <div className="feature-card flex flex-col rounded-[3rem] border border-foreground/5 bg-background/50 p-8 drop-shadow-xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
            <TelemetryTypewriter />
            <div className="mt-8">
              <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">
                AI Telemetry
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/50">
                A digital agent that monitors your workspace. Ask it to
                summarize a cluster of meetings or forecast revenue based on
                current bookings.
              </p>
            </div>
          </div>

          {/* Cursor Scheduler */}
          <div className="feature-card flex flex-col rounded-[3rem] border border-foreground/5 bg-background/50 p-8 drop-shadow-xl backdrop-blur-md transition-transform duration-500 hover:-translate-y-1">
            <CursorScheduler />
            <div className="mt-8">
              <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">
                Protocol Scheduler
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/50">
                A unified calendar eliminating back-and-forth emails.
                Synchronized automatically, instantly generating meeting rooms
                upon confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

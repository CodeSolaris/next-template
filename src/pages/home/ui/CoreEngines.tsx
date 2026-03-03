'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Calendar,
  MessageSquare,
  Sparkles,
  Terminal,
  Video,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CoreEngines() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSlot, setActiveSlot] = useState(2)
  const [messages, setMessages] = useState<string[]>([
    'Initializing secure channel...',
    'Connected to Node A',
  ])
  const [aiTyping, setAiTyping] = useState('')

  useGSAP(
    () => {
      // Engine reveals
      const engines: HTMLElement[] = gsap.utils.toArray('.engine-block')
      engines.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 80%',
            },
          },
        )
      })

      // Animate AI prompt
      gsap.to(
        {},
        {
          duration: 3,
          repeat: -1,
          repeatDelay: 2,
          onUpdate() {
            const text = '> Analyzing team performance metrics...'
            const progress = Math.floor(this.progress() * text.length)
            if (progress > 0)
              setAiTyping(text.substring(0, progress))
          },
        },
      )
    },
    { scope: containerRef },
  )

  useEffect(() => {
    // Fake schedule slot switching
    const interval = setInterval(() => {
      setActiveSlot(prev => (prev + 1) % 8)
    }, 2000)

    // Fake chat stream
    const chatInterval = setInterval(() => {
      setMessages(prev => [
        ...prev.slice(-3),
        `Sync status: ${Math.random().toString(36).substring(7)}`,
      ])
    }, 3000)

    return () => {
      clearInterval(interval)
      clearInterval(chatInterval)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="mx-auto flex w-full max-w-6xl flex-col gap-40 px-6 py-32"
    >
      {/* Engine 1: Smart Booking */}
      <div className="engine-block flex flex-col items-center gap-16 md:flex-row">
        <div className="flex-1 shrink-0 space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Calendar className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Smart Booking &
            <br />
            Scheduling
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-foreground/60">
            Eliminate back-and-forth emails. Our dynamic grid syncs with your
            team&apos;s availability in real-time, highlighting optimal blocks
            automatically.
          </p>
        </div>

        <div className="relative w-full flex-1">
          <div className="glass relative overflow-hidden rounded-2xl border border-surface bg-surface p-6 shadow-2xl">
            <div className="mb-6 flex items-center justify-between border-b border-surface/50 pb-4">
              <div className="font-medium text-foreground/80">
                Next Week Availability
              </div>
              <div className="rounded bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                Live Sync
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {['Mon', 'Tue', 'Wed', 'Thu'].map(day => (
                <div
                  key={day}
                  className="pb-2 text-center text-sm text-foreground/40"
                >
                  {day}
                </div>
              ))}
              {[...Array.from({ length: 16 })].map((_, i) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className={`flex h-12 items-center justify-center rounded-lg border font-mono text-xs transition-all duration-500
                    ${activeSlot === i % 8 ? 'scale-105 border-primary bg-primary text-foreground shadow-[0_0_15px_rgba(123,97,255,0.4)]' : 'border-surface/50 bg-surface/20 text-foreground/30 hover:border-foreground/20'}
                  `}
                >
                  {9 + (i % 8)}
                  :00
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Engine 2: Communication */}
      <div className="engine-block flex flex-col items-center gap-16 md:flex-row-reverse">
        <div className="flex-1 shrink-0 space-y-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            <Video className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold md:text-4xl">
            Real-time
            <br />
            Communication
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-foreground/60">
            Uninterruptible video blocks paired with an instant stream of
            context-aware text channels.
          </p>
        </div>

        <div className="relative h-[400px] w-full flex-1">
          <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Main Video Area */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl border border-surface bg-background shadow-2xl">
            <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full border border-surface bg-surface/40 outline outline-4 outline-surface/10">
              <Video className="h-8 w-8 text-foreground/40" />
            </div>

            {/* Participants */}
            <div className="absolute top-4 right-4 flex gap-2">
              {[1, 2, 3].map(p => (
                <div
                  key={`participant-${p}`}
                  className="h-16 w-20 rounded-lg border border-surface bg-surface/80 backdrop-blur-md"
                >
                </div>
              ))}
            </div>
          </div>

          {/* Floating Chat App */}
          <div className="absolute -right-8 -bottom-8 z-10 w-64 rounded-xl border border-surface/80 bg-surface/90 p-4 shadow-2xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2 border-b border-surface/50 pb-2 font-mono text-xs text-foreground/50">
              <MessageSquare className="h-3 w-3" />
              {' '}
              Live Feed
            </div>
            <div className="flex h-32 flex-col justify-end gap-3 overflow-hidden font-mono text-[10px] text-foreground/70">
              {messages.map((m, i) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="animate-in duration-300 fade-in slide-in-from-bottom-2"
                >
                  <span className="text-blue-400">[SYS]</span>
                  {' '}
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Engine 3: AI Intelligence */}
      <div className="engine-block mt-20 flex w-full flex-col items-center justify-center text-center">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
          <Sparkles className="h-6 w-6" />
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Command Palette Intelligence
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-foreground/60">
          Interact with your workspace through natural language. Generate
          insights, build reports, and control integrations instantly.
        </p>

        <div className="relative w-full max-w-3xl">
          <div className="relative rounded-2xl border border-surface/80 bg-surface/80 p-2 shadow-[0_0_50px_rgba(123,97,255,0.1)] backdrop-blur-2xl">
            {/* Command Input */}
            <div className="flex items-center gap-4 border-b border-surface/50 p-4">
              <Terminal className="h-5 w-5 text-primary" />
              <div className="font-mono text-lg text-foreground/90">
                {aiTyping}
                <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-primary"></span>
              </div>
            </div>

            {/* AI Response Skeleton */}
            <div className="p-6">
              <div className="mb-8 grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div
                    key={`skeleton-${i}`}
                    className="relative flex h-20 flex-col justify-center overflow-hidden rounded-xl border border-surface/30 bg-surface/20 px-4"
                  >
                    <div className="mb-3 h-2 w-1/3 rounded bg-surface/50"></div>
                    <div className="h-4 w-2/3 rounded bg-foreground/10"></div>
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-4">
                <div className="h-8 w-full rounded bg-surface/20"></div>
                <div className="h-12 w-2/3 rounded bg-surface/30"></div>
                <div className="relative h-24 w-1/3 rounded border border-primary/30 bg-primary/20">
                  <div className="absolute bottom-2 left-2 font-mono text-xs text-primary">
                    Insight Ready
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

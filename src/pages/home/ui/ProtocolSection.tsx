'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import PhilosophySection from './PhilosophySection'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ----------------------------------------------------------------------
// SVG Animations for Protocol Steps
// ----------------------------------------------------------------------

function ConcentricCircles() {
  const containerRef = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      gsap.to('.circle-outer', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        transformOrigin: 'center',
      })
      gsap.to('.circle-middle', {
        rotation: -360,
        duration: 15,
        ease: 'none',
        repeat: -1,
        transformOrigin: 'center',
      })
      gsap.to('.circle-inner', {
        rotation: 360,
        duration: 10,
        ease: 'none',
        repeat: -1,
        transformOrigin: 'center',
      })
    },
    { scope: containerRef },
  )

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 200 200"
      className="h-[300px] w-[300px] opacity-60 lg:h-[500px] lg:w-[500px]"
    >
      <defs>
        <linearGradient id="cyber-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor="var(--color-primary)"
            stopOpacity="0.8"
          />
          <stop offset="100%" stopColor="#111" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <circle
        className="circle-outer"
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke="url(#cyber-grad)"
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle
        className="circle-middle"
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="0.5"
        strokeDasharray="20 10 5 10"
      />
      <circle
        className="circle-inner"
        cx="100"
        cy="100"
        r="30"
        fill="none"
        stroke="#fff"
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="2 4"
      />
      <circle cx="100" cy="100" r="4" fill="var(--color-primary)" />
    </svg>
  )
}

function ScanningGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.scanner-line',
        { y: 0 },
        { y: 300, duration: 2, ease: 'linear', repeat: -1, yoyo: true },
      )

      gsap.to('.grid-dot', {
        opacity: 1,
        duration: 0.1,
        stagger: { amount: 2, from: 'random', grid: [10, 10] },
        repeat: -1,
        yoyo: true,
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="relative flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-3xl border-2 border-[#1e1b4b]/20 bg-[#eae8f7] opacity-80 lg:h-[500px] lg:w-[500px] dark:border-foreground/5 dark:bg-foreground/[0.02]"
    >
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-2 p-4">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="grid-dot h-full w-full rounded-sm bg-[#1e1b4b] opacity-20 dark:bg-primary/40"
          />
        ))}
      </div>
      <div className="scanner-line absolute top-0 left-0 z-10 h-[2px] w-full bg-primary shadow-[0_0_15px_var(--color-primary)]" />
    </div>
  )
}

function PulsingWaveform() {
  const containerRef = useRef<SVGSVGElement>(null)

  useGSAP(
    () => {
      gsap.to('.waveform-path', {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'linear',
        repeat: -1,
      })

      gsap.to('.pulse-glow', {
        opacity: 0.8,
        scale: 1.2,
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center',
      })
    },
    { scope: containerRef },
  )

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 400 200"
      className="h-[150px] w-[300px] opacity-80 lg:h-[300px] lg:w-[600px]"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {/* Background line */}
      <path d="M0,100 L400,100" stroke="#ffffff10" strokeWidth="1" />

      {/* EKG Waveform */}
      <path
        className="waveform-path"
        d="M0,100 L120,100 L140,50 L160,150 L180,20 L200,180 L220,70 L240,120 L260,100 L400,100"
        stroke="url(#wave-grad)"
        strokeWidth="3"
        fill="none"
        filter="url(#glow)"
        strokeDasharray="800"
        strokeDashoffset="800"
      />

      <circle
        className="pulse-glow"
        cx="200"
        cy="100"
        r="100"
        fill="var(--color-primary)"
        opacity="0.1"
        filter="url(#glow)"
      />
    </svg>
  )
}

// ----------------------------------------------------------------------
// Main Section Component
// ----------------------------------------------------------------------

const protocols = [
  {
    step: '01',
    title: 'Discovery & Unification',
    description:
      'Connect all your fragmented data sources, calendars, and clients into a single, cohesive timeline.',
    Visual: ConcentricCircles,
  },
  {
    step: '02',
    title: 'Telemetry & Processing',
    description:
      'Our AI systems silently organize your schedule, extract meeting insights, and normalize cross-platform data.',
    Visual: ScanningGrid,
  },
  {
    step: '03',
    title: 'Execution & Delivery',
    description:
      'Deploy finalized digital products globally and automatically process secure payments without friction.',
    Visual: PulsingWaveform,
  },
]

export default function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.protocol-card')

      // Initialize state: pack all cards but the first one below the viewport
      gsap.set(cards.slice(1), { yPercent: 100 })

      // Master timeline for the entire pinned section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%', // Fast scroll!
          pin: true,
          pinSpacing: true,
          scrub: 1, // Smooth scrubbing
        },
      })

      // Simple, robust stacking sequence
      cards.forEach((card, i) => {
        if (i === 0) {
          // Pause to let user read the intro card's initial state
          tl.to({}, { duration: 0.5 })

          // Then scale down, blur, and fade out as the second card rises
          tl.to(card, {
            scale: 0.9,
            opacity: 0,
            filter: 'blur(20px)',
            ease: 'none',
            duration: 1,
          })
        }
        else {
          // Slide this new card up (simultaneously with previous card's exit phase)
          tl.to(
            card,
            { yPercent: 0, ease: 'none', duration: 1 },
            '<', // start simultaneously with the previous card's scale down
          )

          // If it isn't the last card, we need to transition it out for the next one
          if (i < cards.length - 1) {
            // Read pause
            tl.to({}, { duration: 0.5 })

            // Next card exit animation
            tl.to(card, {
              scale: 0.9,
              opacity: 0,
              filter: 'blur(20px)',
              ease: 'none',
              duration: 1,
            })
          }
        }
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden border-t border-foreground/5 bg-background"
    >
      {/* Intro Card - PhilosophySection */}
      <div
        className="protocol-card absolute top-0 left-0 h-[100vh] w-full overflow-hidden bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
        style={{ zIndex: 0 }}
      >
        <PhilosophySection />
      </div>

      {/* Protocol Phases */}
      {protocols.map((protocol) => {
        const VisualComponent = protocol.Visual
        // Shift z-index +1 because index 0 is the intro
        return (
          <div
            key={protocol.step}
            className="protocol-card absolute top-0 left-0 flex h-[100vh] w-full flex-col items-center justify-center bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
            style={{ zIndex: protocols.indexOf(protocol) + 1 }}
          >
            <div className="relative z-10 flex w-full max-w-7xl flex-col items-center justify-between gap-12 overflow-hidden rounded-[3rem] border border-foreground/5 bg-background/95 px-8 py-12 shadow-2xl backdrop-blur-3xl md:flex-row md:px-16 md:py-20 lg:gap-24 dark:bg-background/30">
              {/* Decorative Accent inside the card */}
              <div className="pointer-events-none absolute top-0 right-0 z-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />

              {/* Text Side */}
              <div className="text-content relative z-10 flex w-full flex-col items-start text-left md:w-1/2">
                <div className="mb-6 flex items-center gap-4 font-mono text-sm tracking-widest text-primary">
                  <span className="h-[1px] w-8 bg-primary/50" />
                  PHASE //
                  {' '}
                  {protocol.step}
                </div>
                <h2 className="mb-6 font-sans text-4xl leading-tight font-bold text-foreground md:text-5xl lg:text-7xl">
                  {protocol.title}
                </h2>
                <p className="max-w-xl font-mono text-lg leading-relaxed text-foreground/50 lg:text-xl">
                  {protocol.description}
                </p>
              </div>

              {/* Visual Side */}
              <div className="visual-content relative z-10 flex w-full items-center justify-center md:w-1/2">
                <VisualComponent />
              </div>
            </div>

            {/* Philosophy-style background layers */}
            {/* 1. Vertical gradient overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-background to-surface/80 opacity-90 dark:from-background dark:to-[#0A0A0F]" />
            {/* 2. Organic texture */}
            <div
              className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10"
              style={{
                backgroundImage:
                  'url(\'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop\')',
              }}
            />
            {/* 3. Primary glow orb */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          </div>
        )
      })}
    </section>
  )
}

'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function ParallaxSpacing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const dots = [...Array.from({ length: 30 })].map((_, i) => ({
    id: i,
    top: (i * 23) % 100,
    left: (i * 17) % 100,
    delay: (i * 0.3) % 5,
  }))

  useGSAP(
    () => {
      // Animate the text reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
          },
        },
      )

      // Subtle parallax on the background lines
      gsap.to('.parallax-line', {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative z-10 -mt-20 flex w-full items-center justify-center overflow-hidden border-y border-surface/30 bg-[#060609] pt-20 pb-32"
    >
      {/* Animated connection lines rendering */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <svg className="parallax-line h-full w-full">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />
              <stop
                offset="50%"
                stopColor="var(--color-primary)"
                stopOpacity="0.5"
              />
              <stop
                offset="100%"
                stopColor="var(--color-primary)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map(pos => (
            <line
              key={`v-${pos}`}
              x1={`${pos}%`}
              y1="0"
              x2={`${pos}%`}
              y2="100%"
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          ))}
          {[30, 70].map(pos => (
            <line
              key={`h-${pos}`}
              x1="0"
              y1={`${pos}%`}
              x2="100%"
              y2={`${pos}%`}
              stroke="url(#lineGrad)"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Floating datanodes */}
        {dots.map(dot => (
          <div
            key={dot.id}
            className="absolute h-1 w-1 animate-[pulse_4s_infinite] rounded-full bg-primary/60"
            style={{
              top: `${dot.top}%`,
              left: `${dot.left}%`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      <div ref={textRef} className="relative z-10 max-w-3xl px-6 text-center">
        <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs tracking-widest text-primary uppercase backdrop-blur-md">
          The Underlying Architecture
        </div>
        <h2 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
          Fragmented tools create friction.
          {' '}
          <br />
          <span className="text-3xl font-normal text-foreground/40 md:text-4xl">
            We engineered flow.
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-foreground/60 md:text-xl">
          The dashboard is just the surface. Beneath lies a fully integrated
          ecosystem designed to synchronize your team&apos;s schedule,
          communication, and intelligence.
        </p>
      </div>

      {/* Lighting transitions */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

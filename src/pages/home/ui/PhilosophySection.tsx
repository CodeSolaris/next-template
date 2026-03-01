'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLParagraphElement>(null)
  const text2Ref = useRef<HTMLHeadingElement>(null)

  useGSAP(
    () => {
      // Dynamic fade and blur effect for texts
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
        },
      })

      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.5,
          ease: 'power3.out',
        },
      ).fromTo(
        text2Ref.current,
        { opacity: 0, y: 50, scale: 0.95, filter: 'blur(15px)' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power2.out',
        },
        '-=1',
      )
    },
    { scope: containerRef },
  )

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0f] px-6 text-center"
    >
      {/* Background organic texture (simulated with noise and gradient + Unsplash image) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background to-[#0A0A0F] opacity-90" />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(\'https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop\')',
        }}
      />
      <div className="absolute top-1/2 left-1/2 z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 mix-blend-screen blur-[150px]" />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col gap-12">
        <p
          ref={text1Ref}
          className="mx-auto max-w-2xl text-xl leading-relaxed font-medium text-foreground/50 md:text-2xl"
        >
          Most modern workspaces focus on expanding their toolsets: creating
          more apps, more tabs, and more disconnected noise.
        </p>

        <h2
          ref={text2Ref}
          className="font-serif text-5xl leading-tight font-bold text-foreground italic md:text-7xl lg:text-8xl"
        >
          We focus on absolute
          {' '}
          <br />
          <span className="font-sans tracking-tight text-primary not-italic">
            consolidation.
          </span>
        </h2>
      </div>
    </section>
  )
}

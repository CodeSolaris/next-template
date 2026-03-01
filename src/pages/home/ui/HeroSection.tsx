'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CalendarRange, CreditCard, Video } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import dashboardDark from '@/shared/assets/images/design/dark/dashboard.png'
import dashboardLight from '@/shared/assets/images/design/light/dashboard.png'
import { useFeedback } from '@/shared/lib'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()
  const { openFeedback } = useFeedback()

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  const isDark
    = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Text animations
      tl.fromTo(
        '.hero-text-anim',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
      )

      // Dashboard mockup animation
      tl.fromTo(
        '.dashboard-mockup',
        { y: 100, opacity: 0, scale: 0.95, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1.5,
          ease: 'power4.out',
        },
        '-=0.5',
      )

      // Floating cards animation
      tl.fromTo(
        '.floating-card',
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
        },
        '-=0.8',
      )

      // Parallax on scroll
      gsap.to('.dashboard-mockup', {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
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
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pt-32 pb-20 perspective-[2000px] md:px-8"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-[100%] bg-primary/20 blur-[150px]" />

      {/* Text Area */}
      <div className="z-10 mt-10 flex w-full max-w-4xl flex-col items-center text-center">
        <h1 className="flex flex-col items-center justify-center gap-2 text-5xl leading-none tracking-tight md:flex-row md:items-baseline md:gap-4 md:text-7xl lg:text-8xl">
          <span className="hero-text-anim font-sans font-bold text-foreground">
            Your virtual office.
          </span>
          <span className="hero-text-anim ml-0 font-serif text-6xl font-normal text-primary italic md:-ml-2 md:text-8xl lg:text-9xl">
            Unified.
          </span>
        </h1>
        <p className="hero-text-anim mt-6 max-w-2xl text-center text-lg text-foreground/70 md:text-xl">
          Forget switching between 5 different complex apps. Meetings, video
          calls, sales, and CRM in a single premium dashboard.
        </p>
        <div className="hero-text-anim mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="group relative inline-block overflow-hidden rounded-full bg-primary px-8 py-3.5 font-mono text-base font-medium text-white shadow-[0_0_30px_rgba(123,97,255,0.3)] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]"
          >
            <span className="relative z-10">Get Early Access</span>
            <span className="absolute inset-0 z-0 translate-y-[100%] bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </Link>
          <button
            onClick={openFeedback}
            className="group relative inline-block overflow-hidden rounded-full border border-foreground/10 bg-surface px-8 py-3.5 font-mono text-base font-medium text-foreground shadow-xl shadow-background/5 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03] hover:bg-foreground/5"
          >
            <span className="relative z-10">Talk to Us</span>
          </button>
        </div>
      </div>

      {/* Visual Area */}
      <div className="relative z-20 mt-20 w-full max-w-6xl">
        <div className="dashboard-mockup relative overflow-hidden rounded-[2rem] border border-foreground/5 bg-surface shadow-2xl shadow-primary/10">
          {mounted && (
            <Image
              src={isDark ? dashboardDark : dashboardLight}
              alt="NeoDesk Dashboard"
              className="h-auto w-full object-cover"
              priority
            />
          )}
          {/* Overlay gradient at bottom for seamless blend */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Floating Cards */}
        {/* 1. Seamless Booking */}
        <div className="floating-card absolute top-[20%] -left-4 flex items-center gap-4 rounded-2xl border border-foreground/10 bg-surface/80 p-4 shadow-xl backdrop-blur-xl md:-left-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
            <CalendarRange className="h-5 w-5" />
          </div>
          <div>
            <div className="font-sans text-sm font-bold text-foreground">
              Seamless Booking
            </div>
            <div className="mt-0.5 font-mono text-xs text-foreground/60">
              Calendar synchronization
            </div>
          </div>
        </div>

        {/* 2. Global Payments */}
        <div className="floating-card absolute top-[40%] -right-4 flex items-center gap-4 rounded-2xl border border-foreground/10 bg-surface/80 p-4 shadow-xl backdrop-blur-xl md:-right-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
            <CreditCard className="h-5 w-5" />
          </div>
          <div>
            <div className="font-sans text-sm font-bold text-foreground">
              Global Payments
            </div>
            <div className="mt-0.5 font-mono text-xs text-foreground/60">
              $350 Monthly Income
            </div>
          </div>
        </div>

        {/* 3. Native Video Calls */}
        <div className="floating-card absolute bottom-[15%] left-10 flex items-center gap-4 rounded-2xl border border-foreground/10 bg-surface/80 p-4 shadow-xl backdrop-blur-xl md:left-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
            <Video className="h-5 w-5" />
          </div>
          <div>
            <div className="font-sans text-sm font-bold text-foreground">
              Built-in Video
            </div>
            <div className="mt-0.5 font-mono text-xs text-foreground/60">
              Rooms & Live sessions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

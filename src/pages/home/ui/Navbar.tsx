'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Navbar() {
  const containerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useGSAP(
    () => {
      ScrollTrigger.create({
        start: 'top -50',
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 50)
        },
      })
    },
    { scope: containerRef },
  )

  return (
    <header
      ref={containerRef}
      className={`fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between rounded-[2rem] px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isScrolled
          ? 'w-[90%] border border-surface bg-background/60 shadow-2xl backdrop-blur-xl md:w-[600px]'
          : 'w-[95%] border-transparent bg-transparent md:w-[800px]'
      }`}
    >
      <Link
        href="/"
        className="font-sans text-xl font-bold tracking-tight text-foreground transition-transform select-none hover:-translate-y-0.5"
      >
        NeoDesk
      </Link>

      <nav className="hidden items-center gap-8 font-mono text-sm md:flex">
        {['Overview', 'Features', 'Pricing'].map(link => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`transition-all duration-300 hover:-translate-y-0.5 ${
              isScrolled
                ? 'text-primary hover:text-foreground'
                : 'text-foreground/80 hover:text-primary'
            }`}
          >
            {link}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="/login"
          className="hidden font-mono text-sm text-foreground/80 transition-colors hover:-translate-y-0.5 hover:text-foreground sm:block"
        >
          Log In
        </Link>
        <Link
          href="/signup"
          className="group relative overflow-hidden rounded-full bg-primary px-5 py-2 font-mono text-sm font-medium text-white shadow-[0_0_15px_rgba(123,97,255,0.2)] transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]"
        >
          <span className="relative z-10">Start Free</span>
          {/* Hover highlight layer */}
          <span className="absolute inset-0 z-0 translate-y-[100%] bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0" />
        </Link>
      </div>
    </header>
  )
}

'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import { useFeedback } from '@/features/feedback'
import { Button } from '@/shared/ui'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null)
  const { openFeedback } = useFeedback()

  useGSAP(
    () => {
      const elements = gsap.utils.toArray<HTMLElement>('.footer-anim')
      gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        },
      )
    },
    { scope: containerRef },
  )

  return (
    <footer
      ref={containerRef}
      className="relative mt-40 overflow-hidden rounded-t-[4rem] border-t border-surface/50 bg-surface px-6 pt-24 pb-12 text-center shadow-[0_-20px_50px_rgba(123,97,255,0.05)]"
    >
      {/* Huge CTA */}
      <div className="relative z-10 mx-auto mb-32 flex max-w-4xl flex-col items-center">
        <h2 className="footer-anim mb-8 text-5xl font-bold tracking-tight opacity-0 md:text-6xl">
          Ready to sync your team
          {' '}
          <br />
          <span className="font-serif text-primary italic">instantly?</span>
        </h2>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/signup" className="footer-anim flex items-center gap-3 opacity-0">
            Get Access Today
            <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Button>

          <Button
            variant="secondary"
            onClick={openFeedback}
            className="footer-anim opacity-0"
          >
            Talk to Sales
          </Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-surface/30 pb-16 text-left md:grid-cols-4">
        <div className="footer-anim col-span-1 opacity-0 md:col-span-2">
          <Link
            href="/"
            className="mb-4 block text-2xl font-bold tracking-tight text-foreground"
          >
            NeoDesk
          </Link>
          <p className="mb-8 max-w-sm text-foreground/50">
            The unified workspace replacing fragmented tools with an
            intelligent, centralized platform.
          </p>
          <div className="flex w-max items-center gap-2 rounded-full border border-surface/50 bg-surface/20 px-3 py-1.5 font-mono text-sm text-foreground/50">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
            System Operational
          </div>
        </div>

        <div className="footer-anim flex flex-col gap-4 opacity-0">
          <div className="mb-2 font-bold text-foreground">Product</div>
          {['Features', 'Integrations', 'Pricing', 'Changelog'].map(link => (
            <Link
              key={link}
              href="#"
              className="text-foreground/50 transition-colors hover:text-foreground"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="footer-anim flex flex-col gap-4 opacity-0">
          <div className="mb-2 font-bold text-foreground">Legal</div>
          {['Terms of Service', 'Privacy Policy', 'Cookie Policy'].map(
            link => (
              <Link
                key={link}
                href="#"
                className="text-foreground/50 transition-colors hover:text-foreground"
              >
                {link}
              </Link>
            ),
          )}
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-foreground/30">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        NeoDesk. All rights reserved.
        Cinematic Landing Page Demo.
      </div>

      {/* Deep glow from bottom */}
      <div className="pointer-events-none absolute -bottom-1/2 left-1/2 h-full w-full -translate-x-1/2 rounded-full bg-primary/20 blur-[150px]" />
    </footer>
  )
}

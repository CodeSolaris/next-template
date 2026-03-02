'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { services } from '@/entities/service'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FeaturesBlock() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  const isDark
    = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  useGSAP(
    () => {
      const featureRows = gsap.utils.toArray<HTMLElement>('.feature-row')

      featureRows.forEach((row) => {
        const textElements = row.querySelectorAll('.feature-text > *')
        const imageSection = row.querySelector('.feature-image')

        gsap.fromTo(
          textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
            },
          },
        )

        gsap.fromTo(
          imageSection,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 75%',
            },
          },
        )
      })
    },
    { scope: containerRef },
  )

  return (
    <section
      id="features"
      ref={containerRef}
      className="relative flex w-full flex-col items-center overflow-hidden bg-background px-4 py-32 md:px-8"
    >
      <div className="flex w-full max-w-7xl flex-col gap-32">
        {services.map((feature, idx) => (
          <div
            key={feature.id}
            className={`feature-row flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
          >
            {/* Text Content */}
            <div className="feature-text z-10 flex flex-col items-start text-left lg:w-5/12">
              <div
                className={`font-mono text-sm font-semibold tracking-wider ${feature.accent} mb-4 uppercase`}
              >
                0
                {idx + 1}
                {' '}
                &#47;&#47; Module
              </div>
              <h2 className="mb-6 font-sans text-4xl leading-tight font-bold text-foreground md:text-5xl lg:text-6xl">
                {feature.title}
              </h2>
              <p className="font-mono text-lg leading-relaxed text-foreground/60">
                {feature.description}
              </p>
            </div>

            {/* Image Content */}
            <div className="feature-image group relative w-full perspective-[1000px] lg:w-7/12">
              <div className="relative aspect-[1440/900] w-full overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.02] group-hover:rotate-x-[2deg] group-hover:rotate-y-[-2deg]">
                {mounted && (
                  <Image
                    src={isDark ? feature.imageDark : feature.imageLight}
                    alt={feature.title}
                    className="h-auto w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    const handle = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(handle)
  }, [])

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-foreground/10 bg-surface/50 p-2.5 opacity-0" />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative h-10 w-10 overflow-hidden rounded-full border border-foreground/10 bg-surface/50 p-2.5 text-foreground/80 shadow-md backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
      aria-label="Toggle theme"
    >
      <div className="relative h-full w-full">
        <Sun className={`absolute inset-0 h-full w-full transform transition-all duration-500 ${theme === 'dark' ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`} />
        <Moon className={`absolute inset-0 h-full w-full transform transition-all duration-500 ${theme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}`} />
      </div>

      {/* Subtle background pulse on hover */}
      <div className="absolute inset-0 -z-10 translate-y-full bg-primary/10 transition-transform duration-300 group-hover:translate-y-0" />
    </button>
  )
}

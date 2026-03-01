'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  // This prevents hydration mismatch errors where the server theme doesn't match the client
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(t)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface/50 bg-surface/30">
        <span className="opacity-0">T</span>
      </div>
    )
  }

  const isDark
    = theme === 'dark'
      || (theme === 'system'
        && window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-surface/50 bg-surface/30 text-foreground transition-all duration-300 hover:bg-surface/50 focus:ring-2 focus:ring-primary/50 focus:outline-none"
      aria-label="Toggle theme"
    >
      <div
        className={`flex items-center justify-center transition-transform duration-500 ${isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'} absolute`}
      >
        <Moon className="h-4 w-4 text-foreground/80" />
      </div>
      <div
        className={`flex items-center justify-center transition-transform duration-500 ${isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0'} absolute`}
      >
        <Sun className="h-4 w-4 text-black/80 dark:text-foreground/80" />
      </div>
    </button>
  )
}

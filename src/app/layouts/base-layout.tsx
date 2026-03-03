import type { ReactNode } from 'react'
import { fontBodyClassNames } from '@/app/config'
import { FeedbackProvider, ThemeProvider } from '@/app/providers'
import '@/app/styles/globals.css'

interface BaseLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300 ${fontBodyClassNames}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <FeedbackProvider>
            {/* Film-grain noise overlay */}
            <svg
              className="pointer-events-none fixed isolate z-50 opacity-[0.05] mix-blend-soft-light"
              width="100%"
              height="100%"
            >
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves={4} stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
            {children}
          </FeedbackProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

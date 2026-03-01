import type { ReactNode } from 'react'
import { fontBodyClassNames } from '@/app/config'
import '@/app/styles/globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export function BaseLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={fontBodyClassNames}>
        {/* В будущем здесь будут глобальные провайдеры из src/app/providers */}
        {children}
      </body>
    </html>
  )
}

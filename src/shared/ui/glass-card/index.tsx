import type { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-[#f5f5f7] p-8 transition-transform duration-500 hover:-translate-y-1 dark:bg-[#252535] ${className}`}>
      {/* Decorative Glow */}
      <div className="absolute inset-0 -z-10 bg-primary/5 blur-[100px] transition-all duration-700 group-hover:bg-primary/20" />
      {children}
    </div>
  )
}

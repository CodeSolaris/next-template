import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'outline' | 'surface' | 'primary'
}

export function Badge({ children, className = '', variant = 'outline' }: BadgeProps) {
  const variants = {
    outline: 'border border-foreground/10 text-foreground/60',
    surface: 'bg-foreground/5 text-foreground/70',
    primary: 'bg-primary/10 text-primary',
  }

  return (
    <span className={`rounded-full px-3 py-1 font-mono text-[10px] font-medium tracking-wider uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}

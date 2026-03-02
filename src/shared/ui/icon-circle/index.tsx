import type { ReactNode } from 'react'

interface IconCircleProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'blue' | 'green' | 'red'
}

export function IconCircle({
  children,
  className = '',
  variant = 'primary',
}: IconCircleProps) {
  const variants = {
    primary: 'bg-primary/20 text-primary',
    blue: 'bg-blue-500/20 text-blue-400',
    green: 'bg-green-500/20 text-green-400',
    red: 'bg-red-500/20 text-red-500',
  }

  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

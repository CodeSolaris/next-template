import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'group relative inline-block overflow-hidden rounded-full px-8 py-3.5 font-mono text-base font-medium transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-[1.03]'

  const variants = {
    primary: 'bg-primary text-white shadow-[0_0_30px_rgba(123,97,255,0.3)]',
    secondary: 'border border-foreground/10 bg-surface text-foreground shadow-xl shadow-background/5 hover:bg-foreground/5',
    ghost: 'text-foreground/80 hover:text-foreground hover:bg-foreground/5',
  }

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 z-0 translate-y-[100%] transition-transform duration-300 ease-out group-hover:translate-y-0 ${variant === 'primary' ? 'bg-white/20' : 'bg-foreground/5'}`} />
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {content}
    </button>
  )
}

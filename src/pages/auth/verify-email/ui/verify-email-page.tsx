'use client'

import { MailCheck } from 'lucide-react'
import Link from 'next/link'

export function VerifyEmailPage() {
  return (
    <div className="flex animate-in flex-col items-center gap-6 text-center duration-1000 zoom-in-95 fade-in">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
        <MailCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
      </div>

      <div>
        <h1 className="mb-4 font-sans text-3xl font-bold text-foreground">
          Check your email
        </h1>
        <p className="mb-8 max-w-sm font-mono text-sm leading-relaxed text-foreground/60">
          We sent a verification link to
          {' '}
          <span className="font-sans text-foreground">you@example.com</span>
          .
          Please click the link to verify your account and access your
          workspace.
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 text-left">
        <button className="w-full rounded-xl border border-foreground bg-foreground py-3 text-center font-semibold text-background transition-transform hover:scale-[1.02]">
          Open Email App
        </button>
        <Link
          href="/login"
          className="w-full rounded-xl border border-foreground/10 bg-foreground/5 py-3 text-center font-medium text-foreground transition-colors hover:bg-foreground/10"
        >
          Return to Sign In
        </Link>
      </div>

      <p className="mt-8 text-sm text-foreground/40">
        Didn&apos;t receive the email?
        {' '}
        <button className="text-foreground underline underline-offset-4 transition-colors hover:text-primary">
          Click to resend
        </button>
      </p>
    </div>
  )
}

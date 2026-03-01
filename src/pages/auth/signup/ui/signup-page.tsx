'use client'

import { ArrowRight, Github } from 'lucide-react'
import Link from 'next/link'

export function SignupPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex flex-col gap-6 duration-1000">
      <div>
        <h1 className="mb-2 font-sans text-3xl font-bold text-foreground">
          Create an account
        </h1>
        <p className="font-mono text-sm text-foreground/50">
          Start unifying your workflow today.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/10 bg-foreground/5 py-3 font-medium text-foreground shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-colors hover:bg-foreground/10 hover:shadow-[0_6px_20px_rgba(255,255,255,0.05)]">
          <Github className="h-5 w-5" />
          Sign up with GitHub
        </button>
      </div>

      <div className="relative flex items-center py-4">
        <div className="flex-grow border-t border-foreground/10"></div>
        <span className="mx-4 flex-shrink-0 font-mono text-xs tracking-widest text-foreground/40 uppercase">
          Or sign up with email
        </span>
        <div className="flex-grow border-t border-foreground/10"></div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-mono text-xs tracking-wider text-foreground/60 uppercase"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full rounded-xl border border-foreground/10 bg-surface px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-mono text-xs tracking-wider text-foreground/60 uppercase"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-foreground/10 bg-surface px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-black"
          />
        </div>

        <Link
          href="/verify-email"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-semibold text-primary-foreground shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-transform hover:scale-[1.02] dark:text-white"
        >
          Create Account
          {' '}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </form>

      <p className="mt-4 text-center text-sm text-foreground/50">
        Already have an account?
        {' '}
        <Link
          href="/login"
          className="text-primary underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  )
}

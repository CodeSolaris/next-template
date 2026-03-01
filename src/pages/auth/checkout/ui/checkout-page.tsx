'use client'

import { ArrowRight, ShieldCheck } from 'lucide-react'

export function CheckoutPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto flex w-full max-w-lg flex-col gap-6 duration-1000">
      <div>
        <h1 className="mb-2 font-sans text-3xl font-bold text-foreground">
          Complete your purchase
        </h1>
        <p className="font-mono text-sm text-foreground/50">
          You are subscribing to the
          {' '}
          <span className="font-medium text-foreground">Performance</span>
          {' '}
          plan.
        </p>
      </div>

      {/* Plan Summary */}
      <div className="flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-foreground/5 p-6">
        <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
          <span className="font-mono text-sm text-foreground/70">Plan</span>
          <span className="font-sans font-medium text-foreground">
            Performance / Monthly
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-sm text-foreground/70">
            Total due today
          </span>
          <span className="font-sans text-2xl font-bold text-foreground">
            $99.00
          </span>
        </div>
      </div>

      <form className="mt-4 flex flex-col gap-5" onSubmit={e => e.preventDefault()}>
        {/* Payment details placeholder */}
        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-sm tracking-wider text-foreground/80 uppercase">
            Payment Details
          </h3>

          <div className="flex flex-col gap-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Card number"
                className="w-full rounded-xl border border-foreground/10 bg-surface px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-black"
              />
              <div className="pointer-events-none absolute top-1/2 right-4 flex -translate-y-1/2 gap-2">
                <div className="h-5 w-8 rounded bg-foreground/10"></div>
                <div className="h-5 w-8 rounded bg-foreground/10"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full rounded-xl border border-foreground/10 bg-surface px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-black"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full rounded-xl border border-foreground/10 bg-surface px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/50 focus:border-primary focus:ring-1 focus:ring-primary dark:bg-black"
              />
            </div>
          </div>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-semibold text-primary-foreground shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-transform hover:scale-[1.02] dark:text-white">
          Pay $99.00
          {' '}
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="mt-2 flex items-center justify-center gap-2 font-mono text-xs text-foreground/40">
          <ShieldCheck className="h-4 w-4 text-green-400" />
          <span>Secured by Stripe</span>
        </div>
      </form>
    </div>
  )
}

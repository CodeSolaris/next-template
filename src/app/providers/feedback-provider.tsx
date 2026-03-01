'use client'

import type { ReactNode } from 'react'
import { Send, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FeedbackContext } from '@/shared/lib'

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'unset'
      const t = setTimeout(() => setIsSubmitted(false), 300)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const openFeedback = () => setIsOpen(true)
  const closeFeedback = () => setIsOpen(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSubmitted(true)
      setTimeout(() => closeFeedback(), 2000)
    }, 600)
  }

  return (
    <FeedbackContext value={{ isOpen, openFeedback, closeFeedback }}>
      {children}

      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          role="button"
          tabIndex={-1}
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={closeFeedback}
          aria-label="Close feedback"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ')
              closeFeedback()
          }}
        />
        <div
          className={`relative m-4 w-full max-w-md rounded-3xl border border-foreground/10 bg-surface p-6 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] md:p-8 ${
            isOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
          }`}
        >
          <button
            onClick={closeFeedback}
            className="absolute top-4 right-4 rounded-full p-2 text-foreground/50 transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSubmitted
            ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h3 className="mb-2 font-sans text-2xl font-bold text-foreground">Talk to Us</h3>
                    <p className="font-mono text-sm text-foreground/50">
                      Have a question or feedback? We&apos;d love to hear from you.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="feedback-name" className="ml-1 text-xs font-bold tracking-wider text-foreground/70 uppercase">Name</label>
                    <input id="feedback-name" type="text" required placeholder="John Doe" className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="feedback-email" className="ml-1 text-xs font-bold tracking-wider text-foreground/70 uppercase">Email</label>
                    <input id="feedback-email" type="email" required placeholder="john@example.com" className="w-full rounded-xl border border-foreground/10 bg-background px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="feedback-message" className="ml-1 text-xs font-bold tracking-wider text-foreground/70 uppercase">Message</label>
                    <textarea id="feedback-message" required placeholder="How can we help?" rows={4} className="w-full resize-none rounded-xl border border-foreground/10 bg-background px-4 py-3 font-sans text-foreground transition-all outline-none placeholder:text-foreground/40 focus:border-primary focus:ring-1 focus:ring-primary" />
                  </div>
                  <button type="submit" className="group relative mt-2 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary py-3.5 font-semibold text-white transition-transform duration-300 hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                    <span className="absolute inset-0 z-0 translate-y-full bg-white/20 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0" />
                  </button>
                </form>
              )
            : (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-foreground">Message Sent!</h3>
                  <p className="max-w-[250px] font-mono text-sm text-foreground/50">
                    Thanks for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              )}
        </div>
      </div>
    </FeedbackContext>
  )
}

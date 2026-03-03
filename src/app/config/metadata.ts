import type { Metadata } from 'next'

export const baseMetadata = {
  title: {
    template: '%s | Starter Kit',
    default: 'Next.js Starter Kit',
  },
  description: 'A modern Next.js boilerplate with best practices.',
} satisfies Metadata

'use client'

import { createContext, use } from 'react'

export interface FeedbackContextType {
  isOpen: boolean
  openFeedback: () => void
  closeFeedback: () => void
}

export const FeedbackContext = createContext<FeedbackContextType | null>(null)

export function useFeedback() {
  const context = use(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

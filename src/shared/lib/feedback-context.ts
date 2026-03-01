'use client'

import * as React from 'react'

export interface FeedbackContextType {
  isOpen: boolean
  openFeedback: () => void
  closeFeedback: () => void
}

export const FeedbackContext = React.createContext<FeedbackContextType | undefined>(undefined)

export function useFeedback() {
  const context = React.use(FeedbackContext)
  if (!context) {
    throw new Error('useFeedback must be used within a FeedbackProvider')
  }
  return context
}

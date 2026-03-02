'use client'

import { useEffect, useState } from 'react'

const codes = [
  'ENCRYPTING_BUFFER',
  'SYNCHRONIZING_CORE',
  'INDEXING_METADATA',
  'OPTIMIZING_RAG',
  'ALLOCATING_MEM',
  'BYPASSING_PROXY',
]

export function DiagnosticShuffler() {
  const [diagnostic, setDiagnostic] = useState('SYSTEM_IDLE')

  useEffect(() => {
    const interval = setInterval(() => {
      setDiagnostic(codes[Math.floor(Math.random() * codes.length)])
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-mono text-[10px] tracking-widest text-primary/70 uppercase">
      {diagnostic}
      _
    </div>
  )
}

export function TelemetryTypewriter({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i))
      i++
      if (i > text.length)
        clearInterval(interval)
    }, 50)
    return () => clearInterval(interval)
  }, [text])

  return <span>{displayText}</span>
}

export function CursorScheduler() {
  const [activeSegment, setActiveSegment] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSegment(prev => (prev + 1) % 4)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          className={`h-1.5 w-6 rounded-full transition-all duration-500 ${
            i === activeSegment ? 'bg-primary' : 'bg-foreground/10'
          }`}
        />
      ))}
    </div>
  )
}

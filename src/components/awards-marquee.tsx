"use client"
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

const AWARDS = [
  'Aspire Award Finalist',
  'Embracing the Future',
  'Best GenAI Case Study',
  'Unilever Global Townhall Award',
  'Inclusive Collaborator',
  'Best Debutant',
  'GCP ML Engineer',
  'IBM DS Certificate',
  'Databricks GenAI Fundamentals',
]

export function AwardsMarquee({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let start = 0
    let raf = 0
    const speed = 0.3
    const step = () => {
      start -= speed
      el.style.transform = `translateX(${start}px)`
      if (Math.abs(start) > el.scrollWidth / 3) start = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className={cn('relative overflow-hidden rounded-2xl border border-border', className)}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      <div ref={ref} className="flex gap-6 whitespace-nowrap p-4 text-xs text-muted">
        {[...AWARDS, ...AWARDS, ...AWARDS].map((a, i) => (
          <span key={i} className="rounded-full border border-border px-3 py-1">
            {a}
          </span>
        ))}
      </div>
    </div>
  )
}

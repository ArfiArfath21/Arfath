'use client'

import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CalendarClock, CalendarDays, ExternalLink, ListFilter } from 'lucide-react'
import { PlannedNetflixReading } from '@/lib/netflix'
import { Button } from './ui/button'

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

type SortMode = 'reading' | 'published'

type PlannerProps = {
  planned: PlannedNetflixReading[]
}

export function NetflixReadingPlanner({ planned }: PlannerProps) {
  if (planned.length === 0) {
    return (
      <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
        <p className="meta-label">Feed unavailable</p>
        <h2 className="mt-4 font-heading text-3xl text-foreground">The archive is not loading right now.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
          The Netflix Tech Blog feed could not be fetched at build time. This page stays online as a
          utility, but the reading queue needs the remote feed to render.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://netflixtechblog.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/35 bg-primary/12 px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:-translate-y-0.5 hover:bg-primary/18"
          >
            Open Netflix Tech Blog
          </a>
        </div>
      </div>
    )
  }

  const today = useMemo(() => new Date(), [])
  const todayIndex = planned.findIndex((item) => isSameDay(new Date(item.readingDate), today))
  const [activeIndex, setActiveIndex] = useState(todayIndex === -1 ? 0 : todayIndex)
  const [sortMode, setSortMode] = useState<SortMode>('reading')

  const sortedList = useMemo(() => {
    if (sortMode === 'reading') return planned
    return [...planned].sort(
      (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    )
  }, [planned, sortMode])

  const active = planned[activeIndex]

  return (
    <div className="space-y-6">
      <div className="surface-panel flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-8 md:py-8">
        <div className="space-y-2">
          <p className="meta-label text-primary/80">Daily spotlight</p>
          {active ? (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <CalendarClock size={16} />
                <span>Reading day {active.readingNumber} · {formatDate(new Date(active.readingDate))}</span>
              </div>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 rounded-lg text-left text-xl font-semibold leading-tight text-foreground hover:text-primary md:text-2xl"
              >
                {active.title}
                <ExternalLink
                  size={16}
                  className="mt-1 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <p className="text-sm text-muted">
                Published {formatDate(new Date(active.publishedAt))}
              </p>
              {active.summary ? (
                <p className="max-w-2xl text-sm leading-7 text-muted">{active.summary}</p>
              ) : null}
            </div>
          ) : (
            <p className="text-muted">No blog scheduled for today yet. The queue will light up tomorrow.</p>
          )}
        </div>
        <div className="flex items-center gap-3 self-start md:self-auto">
          <Button
            variant="outline"
            onClick={() => setActiveIndex((prev) => Math.max(prev - 1, 0))}
            disabled={activeIndex <= 0}
            magnetic={false}
          >
            <ArrowLeft size={16} className="mr-2" /> Previous
          </Button>
          <Button
            onClick={() => setActiveIndex((prev) => Math.min(prev + 1, planned.length - 1))}
            disabled={activeIndex >= planned.length - 1}
            magnetic={false}
          >
            Next <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="surface-panel-muted px-5 py-5 md:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="font-heading text-2xl text-foreground">Browse the queue</h2>
            <p className="text-sm leading-7 text-muted">
              Switch between your reading schedule and the original publication order. Click any
              title to read it on Netflix&apos;s site.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <ListFilter size={18} className="text-muted" />
            <div className="rounded-full border border-border bg-background/70 p-1 text-sm">
              <button
                className={`rounded-full px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] transition ${
                  sortMode === 'reading'
                    ? 'bg-white/8 text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
                onClick={() => setSortMode('reading')}
                aria-pressed={sortMode === 'reading'}
              >
                Reading dates
              </button>
              <button
                className={`rounded-full px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] transition ${
                  sortMode === 'published'
                    ? 'bg-white/8 text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
                onClick={() => setSortMode('published')}
                aria-pressed={sortMode === 'published'}
              >
                Publication dates
              </button>
            </div>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {sortedList.map((item) => {
            const readingDayLabel = `Blog ${item.readingNumber} · ${formatDate(new Date(item.readingDate))}`
            const isToday = isSameDay(new Date(item.readingDate), today)

            return (
              <div
                key={`${item.id}-${sortMode}-${item.readingNumber}`}
                className={`rounded-[1.5rem] border border-border bg-background/40 px-4 py-4 sm:px-5 ${
                  isToday ? 'border-primary/40 bg-primary/[0.06]' : ''
                }`}
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={14} /> {readingDayLabel}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
                      <span>Published {formatDate(new Date(item.publishedAt))}</span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 text-base font-semibold leading-tight text-foreground hover:text-primary"
                    >
                      {item.title}
                      <ExternalLink
                        size={14}
                        className="mt-0.5 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    {item.summary ? (
                      <p className="max-w-3xl text-sm leading-7 text-muted">{item.summary}</p>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Button
                      variant="outline"
                      magnetic={false}
                      onClick={() => {
                        const indexInPlanned = planned.findIndex((p) => p.id === item.id)
                        if (indexInPlanned !== -1) {
                          setActiveIndex(indexInPlanned)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                      }}
                      className="px-4 py-3"
                    >
                      Jump to day
                    </Button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06]"
                    >
                      Open blog
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

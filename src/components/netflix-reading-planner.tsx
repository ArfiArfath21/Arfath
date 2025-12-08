'use client'

import { useEffect, useMemo, useState } from 'react'
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
  const today = useMemo(() => new Date(), [])
  const todayIndex = planned.findIndex((item) => isSameDay(new Date(item.readingDate), today))
  const [activeIndex, setActiveIndex] = useState(todayIndex === -1 ? 0 : todayIndex)
  const [sortMode, setSortMode] = useState<SortMode>('reading')
  const [filterDate, setFilterDate] = useState<Date | null>(today)

  useEffect(() => {
    if (!filterDate || sortMode !== 'reading') return

    const indexInPlanned = planned.findIndex((item) => isSameDay(new Date(item.readingDate), filterDate))
    if (indexInPlanned !== -1) {
      setActiveIndex(indexInPlanned)
    }
  }, [filterDate, planned, sortMode])

  const sortedList = useMemo(() => {
    if (sortMode === 'reading') return planned
    return [...planned].sort(
      (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    )
  }, [planned, sortMode])

  const filteredList = useMemo(() => {
    if (!filterDate) return sortedList

    if (sortMode === 'reading') {
      return sortedList.filter((item) => isSameDay(new Date(item.readingDate), filterDate))
    }

    return sortedList.filter((item) => isSameDay(new Date(item.publishedAt), filterDate))
  }, [filterDate, sortMode, sortedList])

  const active = planned[activeIndex]

  const inputDate = filterDate ? filterDate.toISOString().slice(0, 10) : ''

  const handleDateChange = (value: string) => {
    if (!value) {
      setFilterDate(null)
      return
    }

    const parsed = new Date(value)
    if (!Number.isNaN(parsed.getTime())) {
      setFilterDate(parsed)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-transparent to-primary/5 p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">daily spotlight</p>
          {active ? (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarClock size={16} />
                <span>Reading day {active.readingNumber} · {formatDate(new Date(active.readingDate))}</span>
              </div>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-2 rounded-lg text-left text-lg font-semibold leading-tight hover:text-primary"
              >
                {active.title}
                <ExternalLink size={16} className="mt-1 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-sm text-muted-foreground">
                Published {formatDate(new Date(active.publishedAt))}
              </p>
              {active.summary ? (
                <p className="text-sm text-muted-foreground line-clamp-2">{active.summary}</p>
              ) : null}
            </div>
          ) : (
            <p className="text-muted-foreground">No blog scheduled for today yet. Check back after the feed loads.</p>
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

      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="font-heading text-xl">Browse the queue</h2>
            <p className="text-sm text-muted-foreground">
              Switch between your reading schedule and the original publication order. Click any title to read it on Netflix&apos;s site.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            <label className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm shadow-sm">
              <CalendarDays size={18} className="text-muted-foreground" />
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Calendar filter</span>
                <input
                  type="date"
                  value={inputDate}
                  onChange={(event) => handleDateChange(event.target.value)}
                  className="bg-transparent text-sm outline-none"
                  aria-label="Select a date to filter the queue"
                />
              </div>
            </label>
            <button
              className="self-start rounded-lg border border-border px-3 py-1 text-sm transition hover:bg-muted"
              onClick={() => setFilterDate(today)}
            >
              Jump to today
            </button>
            <ListFilter size={18} className="text-muted-foreground" />
            <div className="rounded-xl border border-border bg-background p-1 text-sm">
              <button
                className={`rounded-lg px-3 py-1 transition ${
                  sortMode === 'reading' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-muted'
                }`}
                onClick={() => setSortMode('reading')}
                aria-pressed={sortMode === 'reading'}
              >
                Reading dates
              </button>
              <button
                className={`rounded-lg px-3 py-1 transition ${
                  sortMode === 'published' ? 'bg-primary text-primary-foreground shadow-sm' : 'hover:bg-muted'
                }`}
                onClick={() => setSortMode('published')}
                aria-pressed={sortMode === 'published'}
              >
                Publication dates
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 divide-y divide-border rounded-xl border border-border overflow-hidden">
          {sortedList.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">
              Unable to load the Netflix Tech Blog feed right now. Try again later or check your connection.
            </div>
          ) : filteredList.length === 0 ? (
            <div className="p-4 text-sm text-muted-foreground">
              {filterDate
                ? 'No posts match that date. Try another day or reset the calendar filter.'
                : 'Unable to load the Netflix Tech Blog feed right now. Try again later or check your connection.'}
            </div>
          ) : (
            filteredList.map((item) => {
              const readingDayLabel = `Blog ${item.readingNumber} · ${formatDate(new Date(item.readingDate))}`
              const isToday = isSameDay(new Date(item.readingDate), today)

              return (
                <div
                  key={`${item.id}-${sortMode}-${item.readingNumber}`}
                  className={`flex flex-col gap-2 bg-background/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
                    isToday ? 'border-l-4 border-primary' : ''
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays size={14} /> {readingDayLabel}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground" aria-hidden />
                      <span>Published {formatDate(new Date(item.publishedAt))}</span>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 text-base font-semibold leading-tight hover:text-primary"
                    >
                      {item.title}
                      <ExternalLink size={14} className="mt-0.5 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    {item.summary ? (
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
                    ) : null}
                  </div>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
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
                      className="px-3 py-2 text-sm"
                    >
                      Jump to day
                    </Button>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium hover:bg-muted/80"
                    >
                      Open blog
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

"use client"
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export function ResumeAccordion({ height = 'h-[75vh]' }: { height?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white/[0.03]">
      <button
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-heading text-lg text-foreground">Preview</span>
        {open ? <ChevronDown /> : <ChevronRight />}
      </button>
      {open && (
        <div className="border-t border-border bg-background/70">
          <object data="/resume.pdf" type="application/pdf" className={`${height} w-full`}>
            <p className="p-6 text-sm text-muted">
              Inline preview not available. You can{' '}
              <a className="underline" href="/resume.pdf" target="_blank" rel="noopener">
                open the résumé in a new tab
              </a>
              .
            </p>
          </object>
        </div>
      )}
    </div>
  )
}

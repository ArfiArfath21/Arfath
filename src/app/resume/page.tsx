import Link from 'next/link'
import { ResumeAccordion } from '@/components/resume-accordion'

export const metadata = { title: 'Résumé — Arfath Ahmed Syed' }

export default function ResumePage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl">Résumé</h1>
      <p className="text-sm text-muted">This page always serves <code>/resume.pdf</code>. Add or update the file in <code>public/</code>.</p>
      <div className="flex gap-3">
        <Link href="/resume.pdf" className="rounded-2xl bg-primary px-4 py-2 text-sm text-primary-foreground">
          Download PDF
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="rounded-2xl border border-border px-4 py-2 text-sm hover:bg-white/5"
        >
          Open in new tab ↗
        </a>
      </div>
      <ResumeAccordion height="h-[80vh]" />
    </div>
  )
}

import { ResumeAccordion } from '@/components/resume-accordion'
import { SectionHeading } from '@/components/section-heading'

export const metadata = { title: 'Résumé — Arfath Ahmed Syed' }

export default function ResumePage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Résumé"
        title="Current résumé in a simple PDF format."
        description="Use this page to preview the latest version or open the PDF directly."
      />
      <div className="flex flex-wrap gap-3">
        <a
          href="/resume.pdf"
          className="rounded-full border border-primary/35 bg-primary/12 px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:-translate-y-0.5 hover:bg-primary/18"
        >
          Download PDF
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener"
          className="rounded-full border border-border bg-white/[0.03] px-5 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:border-white/15 hover:bg-white/[0.06]"
        >
          Open in new tab
        </a>
      </div>
      <ResumeAccordion height="h-[80vh]" />
    </div>
  )
}

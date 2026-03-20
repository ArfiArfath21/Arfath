export const metadata = { title: 'About — Arfath Ahmed Syed' }
import { ResumeAccordion } from '@/components/resume-accordion'
import profile from '@/content/profile.json'
import { recognition } from '@/content/recognition'
import { SectionHeading } from '@/components/section-heading'
import type { Profile } from '@/types/site'

export default function AboutPage() {
  const profileData = profile as Profile

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="About"
        title="Product thinking, systems depth, and delivery discipline in the same room."
        description={profileData.aboutLead}
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
        <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
          <p className="meta-label">Approach</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">
            {profileData.aboutBio}
          </p>
        </div>
        <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
          <p className="meta-label">Base</p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-muted md:text-base">
            <p>{profileData.location}</p>
            <p>Open to product-facing AI, ML platform, and senior applied engineering roles.</p>
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex rounded-full border border-border bg-white/[0.04] px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:border-white/15 hover:bg-white/[0.08]"
            >
              {profileData.email}
            </a>
          </div>
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="A working split across systems, delivery, and product."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {profileData.capabilities.map((group) => (
            <div key={group.title} className="surface-panel-muted px-6 py-7">
              <p className="meta-label">{group.title}</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground md:text-base">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <SectionHeading eyebrow="Timeline" title="Recent roles and the kind of work they required." />
        <div className="mt-10 space-y-4">
          {profileData.timeline.map((item) => (
            <div key={item.title} className="surface-row px-6 py-6 md:px-8 md:py-7">
              <div className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)]">
                <div className="meta-label">{item.period}</div>
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-muted md:text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1.1fr)]">
          <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
            <p className="meta-label">Recognition</p>
            <ul className="mt-5 space-y-4">
              {recognition.map((item) => (
                <li
                  key={`${item.title}-${item.date}`}
                  className="flex items-start justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
                >
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-muted">{item.type}</div>
                    <div className="mt-2 text-base leading-6 text-foreground">{item.title}</div>
                  </div>
                  <div className="meta-label whitespace-nowrap">{item.date}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="meta-label">Résumé</p>
                <h2 className="mt-3 font-heading text-3xl text-foreground">Download or preview the current PDF.</h2>
              </div>
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
                  Open
                </a>
              </div>
            </div>
            <div className="mt-6">
              <ResumeAccordion height="h-[70vh]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { ArrowUpRight } from 'lucide-react'
import profile from '@/content/profile.json'
import { recognition } from '@/content/recognition'
import { SectionHeading } from '@/components/section-heading'
import { toneAccentStyles, toneGlowBackgrounds } from '@/lib/accent'
import type { AccentTone, Profile } from '@/types/site'

export const metadata = { title: 'About — Arfath Ahmed Syed' }

const capabilityTones: AccentTone[] = ['green', 'red', 'blue']
const recognitionTones: AccentTone[] = ['green', 'red', 'blue', 'amber']

export default function AboutPage() {
  const profileData = profile as Profile

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="About"
        title="Product thinking, systems depth, and delivery discipline in the same room."
        description={profileData.aboutLead}
      />

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1.18fr)_minmax(19rem,0.82fr)]">
        <div className="surface-panel relative overflow-hidden px-6 py-7 md:px-8 md:py-9">
          <div
            className="pointer-events-none absolute inset-0 opacity-85"
            style={{ background: toneGlowBackgrounds.green }}
          />
          <div className="relative space-y-6">
            <div className="space-y-3">
              <p className="meta-label text-primary/85">Overview</p>
              <h2 className="max-w-3xl font-heading text-3xl leading-tight text-foreground md:text-4xl">
                I work where applied AI, product ambiguity, and production constraints all show up
                at once.
              </h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-muted md:text-lg">
              {profileData.aboutBio}
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="surface-row relative overflow-hidden px-6 py-6 md:px-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{ background: toneGlowBackgrounds.red }}
            />
            <div className="relative space-y-4">
              <p className="meta-label">Base</p>
              <div className="space-y-3 text-sm leading-7 text-foreground md:text-base">
                <p>{profileData.location}</p>
                <p>Open to product-facing AI, ML platform, and senior applied engineering roles.</p>
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground transition hover:text-primary"
              >
                Email
                <ArrowUpRight size={15} style={{ color: toneAccentStyles.red.color }} />
              </a>
            </div>
          </div>

          <div className="surface-row relative overflow-hidden px-6 py-6 md:px-7">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{ background: toneGlowBackgrounds.blue }}
            />
            <div className="relative space-y-4">
              <p className="meta-label">Operating Style</p>
              <ul className="space-y-3">
                {profileData.principles.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm leading-7 text-foreground md:text-base">
                    <span
                      className="mt-2 h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: toneAccentStyles.blue.color }}
                      aria-hidden
                    />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="A working split across systems, delivery, and product."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {profileData.capabilities.map((group, index) => {
            const tone = capabilityTones[index % capabilityTones.length]
            const accentStyle = toneAccentStyles[tone]

            return (
              <div key={group.title} className="surface-panel-muted relative overflow-hidden px-6 py-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-80"
                  style={{ background: toneGlowBackgrounds[tone] }}
                />
                <div className="relative">
                  <p className="meta-label">{group.title}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-foreground md:text-base">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: accentStyle.color }}
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <SectionHeading eyebrow="Timeline" title="Recent roles and the kind of work they required." />
        <div className="mt-10 space-y-4">
          {profileData.timeline.map((item) => {
            const tone: AccentTone = 'amber'
            const accentStyle = toneAccentStyles.amber

            return (
              <div key={item.title} className="surface-row relative overflow-hidden px-6 py-6 md:px-8 md:py-7">
                <div
                  className="pointer-events-none absolute inset-0 opacity-75"
                  style={{ background: toneGlowBackgrounds[tone] }}
                />
                <div className="relative grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)]">
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: accentStyle.color }}
                      aria-hidden
                    />
                    <div className="meta-label">{item.period}</div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl text-foreground">{item.title}</h3>
                    <p className="max-w-3xl text-sm leading-7 text-muted md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section-divider pt-10 md:pt-12">
        <SectionHeading
          eyebrow="Recognition"
          title="Awards and certifications that support the work shown elsewhere."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {recognition.map((item, index) => {
            const tone = recognitionTones[index % recognitionTones.length]
            const accentStyle = toneAccentStyles[tone]

            return (
              <div key={`${item.title}-${item.date}`} className="surface-row relative overflow-hidden px-6 py-6 md:px-8">
                <div
                  className="pointer-events-none absolute inset-0 opacity-75"
                  style={{ background: toneGlowBackgrounds[tone] }}
                />
                <div className="relative flex items-start justify-between gap-5">
                  <div className="space-y-2">
                    <div className="meta-label" style={{ color: accentStyle.color }}>
                      {item.type}
                    </div>
                    <div className="text-lg leading-7 text-foreground">{item.title}</div>
                  </div>
                  <div className="meta-label whitespace-nowrap">{item.date}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

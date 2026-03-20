import Link from 'next/link'
import { cn } from '@/lib/utils'
import projects from '@/content/projects.json'
import profile from '@/content/profile.json'
import { FadeIn } from '@/components/motion/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { ProjectRow } from '@/components/project-row'
import { ProofStrip } from '@/components/proof-strip'
import { ElsewhereLinks } from '@/components/elsewhere-links'
import { recognition } from '@/content/recognition'
import { toneGlowBackgrounds } from '@/lib/accent'
import type { Profile, Project } from '@/types/site'

export default function HomePage() {
  const profileData = profile as Profile
  const allProjects = projects as Project[]
  const featured = [...allProjects]
    .filter((project) => project.featured)
    .sort((left, right) => (left.homePriority ?? 999) - (right.homePriority ?? 999))
    .slice(0, 3)
  const proofItems = recognition.slice(0, 6).map((item) => ({
    label: item.type,
    value: item.title,
    detail: item.date,
  }))

  return (
    <div className="space-y-24 pb-8 md:space-y-32 md:pb-12">
      <FadeIn>
        <section className="hero-stage grid gap-10 pb-14 pt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start lg:pb-20">
          <div className="hero-atmosphere" aria-hidden />
          <div className="relative z-[1] space-y-8 lg:pr-6">
            <p className="eyebrow">{profileData.heroEyebrow}</p>
            <h1 className="max-w-5xl font-heading text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
              {profileData.heroHeadline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
              {profileData.heroIntro}
            </p>
          </div>
          <div className="hero-spotlight surface-panel relative z-[1] overflow-hidden p-6 md:p-8 lg:mt-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-90"
              style={{ background: toneGlowBackgrounds.green }}
            />
            <div className="relative space-y-6">
              <div className="space-y-3">
                <p className="meta-label text-primary/85">Currently</p>
                <p className="text-base leading-7 text-foreground">
                  Senior Associate in Data Science at Publicis Sapient, working across AI product
                  strategy, ML systems, and production delivery.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
                  <div className="meta-label">Base</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">{profileData.location}</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm">
                  <div className="meta-label">Working Across</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">
                    Agentic systems, recommendation engines, platform delivery, and operational
                    reliability.
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                  <div className="meta-label">Best Fit</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">
                    Ambiguous, cross-functional work where product shape and production discipline
                    both matter.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-[1] hidden justify-center lg:flex">
            <Link
              href="#selected-work"
              className="inline-flex flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.34em] text-muted transition hover:text-foreground"
            >
              <span>Scroll</span>
              <span className="scroll-cue-shell" aria-hidden />
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section id="selected-work" className="section-divider pt-10 md:pt-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Newest and selected work where product shape and system reliability had to move together."
            description="The strongest work here is the work that had to survive product pressure, delivery constraints, and operational reality at the same time."
          />
          <div className="mt-10 space-y-5">
            {featured.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/work"
              className={cn(
                'inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-foreground transition hover:text-primary'
              )}
            >
              View full work index
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className="section-divider pt-10 md:pt-14">
          <SectionHeading
            eyebrow="How I Work"
            title="The work gets better when the technical system and the operating model are designed together."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {profileData.principles.map((principle, index) => (
              <div key={principle.title} className="surface-panel-muted px-6 py-7">
                <p className="meta-label">0{index + 1}</p>
                <h3 className="mt-4 font-heading text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.15}>
        <section className="section-divider pt-10 md:pt-14">
          <SectionHeading
            eyebrow="Proof"
            title="A few signals that the work has shipped, landed, and been recognized."
          />
          <div className="mt-10">
            <ProofStrip items={proofItems} />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <section className="section-divider pt-10 md:pt-14">
          <SectionHeading
            eyebrow="Elsewhere"
            title="Writing, utilities, and smaller builds that still earn a place here."
          />
          <div className="mt-10">
            <ElsewhereLinks links={profileData.secondaryLinks} />
          </div>
        </section>
      </FadeIn>
    </div>
  )
}

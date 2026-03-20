import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import projects from '@/content/projects.json'
import profile from '@/content/profile.json'
import { FadeIn } from '@/components/motion/fade-in'
import { SectionHeading } from '@/components/section-heading'
import { ProjectRow } from '@/components/project-row'
import { ProofStrip } from '@/components/proof-strip'
import { ElsewhereLinks } from '@/components/elsewhere-links'
import { recognition } from '@/content/recognition'
import type { Profile, Project } from '@/types/site'

export default function HomePage() {
  const profileData = profile as Profile
  const featured = (projects as Project[]).filter((project) => project.featured).slice(0, 3)
  const proofItems = [
    ...profileData.credibilityItems.slice(0, 3).map((item) => ({
      label: item.label,
      value: item.value,
    })),
    ...recognition.slice(0, 3).map((item) => ({
      label: item.type,
      value: item.title,
      detail: item.date,
    })),
  ]

  return (
    <div className="space-y-24 pb-8 md:space-y-32 md:pb-12">
      <FadeIn>
        <section className="grid gap-8 pt-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,0.7fr)] lg:items-end">
          <div className="space-y-8">
            <p className="eyebrow">{profileData.heroEyebrow}</p>
            <h1 className="max-w-5xl font-heading text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
              {profileData.heroHeadline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
              {profileData.heroIntro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/work" className={buttonVariants()}>
                Selected Work
              </Link>
              <Link href="/resume" className={buttonVariants({ variant: 'outline' })}>
                Résumé
              </Link>
            </div>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <p className="meta-label">Current focus</p>
                <p className="mt-3 text-base leading-7 text-foreground">
                  Building AI products where orchestration, evaluation, deployment, and adoption
                  matter as much as the model itself.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="meta-label">Location</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">{profileData.location}</div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="meta-label">Operating range</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">
                    Product thinking, ML systems, platform delivery, and launch discipline.
                  </div>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:col-span-2 lg:col-span-1">
                  <div className="meta-label">Most useful when</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">
                    The work is ambiguous, cross-functional, and close to production.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:col-span-2 lg:grid-cols-4">
            {profileData.credibilityItems.map((item) => (
              <div key={item.label} className="rounded-[1.6rem] border border-border bg-white/[0.03] px-5 py-5">
                <div className="font-heading text-2xl text-foreground md:text-3xl">{item.value}</div>
                <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className="section-divider pt-10 md:pt-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="A small set of projects where reliability mattered as much as the model."
            description="The strongest work tends to sit where architecture, product sense, and operational discipline all have to show up at the same time."
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
            title="Writing, utilities, and side builds that still earn a place in the archive."
          />
          <div className="mt-10">
            <ElsewhereLinks links={profileData.secondaryLinks} />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.25}>
        <section className="section-divider pt-10 md:pt-14">
          <div className="surface-panel grid gap-8 px-6 py-8 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:py-10">
            <div className="space-y-4">
              <p className="eyebrow">Contact</p>
              <h2 className="max-w-3xl font-heading text-3xl leading-tight text-foreground md:text-5xl">
                If the brief is messy, cross-functional, and close to production, that is usually
                where I am most useful.
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-muted md:text-base">
                I am open to product, platform, and applied AI work where the bar is shipping
                something dependable rather than presenting a polished prototype.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:justify-end">
              <a
                href={`mailto:${profileData.email}`}
                className="rounded-[1.5rem] border border-primary/35 bg-primary/12 px-5 py-4 text-sm uppercase tracking-[0.26em] text-foreground transition hover:-translate-y-0.5 hover:bg-primary/18"
              >
                {profileData.email}
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={profileData.social.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  LinkedIn
                </a>
                <a
                  href={profileData.social.github}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full border border-border bg-white/[0.03] px-4 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-foreground transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  )
}

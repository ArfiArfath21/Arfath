import Link from 'next/link'
import { cn } from '@/lib/utils'
import projects from '@/content/projects.json'
import profile from '@/content/profile.json'
import { FadeIn } from '@/components/motion/fade-in'
import { HomeHero } from '@/components/home-hero'
import { SectionHeading } from '@/components/section-heading'
import { ProjectRow } from '@/components/project-row'
import { ProofStrip } from '@/components/proof-strip'
import { ElsewhereLinks } from '@/components/elsewhere-links'
import { recognition } from '@/content/recognition'
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
      <HomeHero profile={profileData} />

      <section id="selected-work" className="section-divider pt-10 md:pt-14">
        <FadeIn once={false} y={20} margin="-10% 0px -14% 0px" amount={0.15}>
          <SectionHeading
            eyebrow="Selected Work"
            title="Newest and selected work where product shape and system reliability had to move together."
            description="The strongest work here is the work that had to survive product pressure, delivery constraints, and operational reality at the same time."
          />
        </FadeIn>
        <div className="mt-10 space-y-5">
          {featured.map((project, index) => (
            <FadeIn
              key={project.slug}
              once={false}
              y={26}
              scaleFrom={0.985}
              delay={index * 0.04}
              margin="-8% 0px -12% 0px"
              amount={0.18}
            >
              <ProjectRow project={project} />
            </FadeIn>
          ))}
        </div>
        <FadeIn once={false} y={16} delay={0.12} margin="-8% 0px -14% 0px" amount={0.2}>
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
        </FadeIn>
      </section>

      <section className="section-divider pt-10 md:pt-14">
        <FadeIn once={false} y={18} margin="-10% 0px -14% 0px" amount={0.18}>
          <SectionHeading
            eyebrow="How I Work"
            title="The work gets better when the technical system and the operating model are designed together."
          />
        </FadeIn>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {profileData.principles.map((principle, index) => (
            <FadeIn
              key={principle.title}
              className="h-full"
              once={false}
              y={24}
              scaleFrom={0.985}
              delay={index * 0.04}
              margin="-8% 0px -12% 0px"
              amount={0.2}
            >
              <div className="surface-panel-muted h-full px-6 py-7">
                <p className="meta-label">0{index + 1}</p>
                <h3 className="mt-4 font-heading text-2xl text-foreground">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn once={false} y={18} margin="-10% 0px -14% 0px" amount={0.18}>
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

      <section className="section-divider pt-10 md:pt-14">
        <FadeIn once={false} y={18} margin="-10% 0px -14% 0px" amount={0.18}>
          <SectionHeading
            eyebrow="Elsewhere"
            title="Writing, utilities, and smaller builds that still earn a place here."
          />
        </FadeIn>
        <div className="mt-10">
          <ElsewhereLinks links={profileData.secondaryLinks} />
        </div>
      </section>
    </div>
  )
}

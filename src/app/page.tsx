import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AwardsMarquee } from '@/components/awards-marquee'
import projects from '@/content/projects.json'
import profile from '@/content/profile.json'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/motion/fade-in'
import { ProjectTile } from '@/components/project-tile'
import { QuickLinks } from '@/components/quick-links'

export default function HomePage() {
  const featured = projects.slice(0, 3)
  return (
    <div className="space-y-12">
      <FadeIn>
        <section className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="col-span-7 space-y-6">
          <h1 className="font-heading text-4xl leading-tight tracking-wide sm:text-5xl">
            I build AI that ships.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            Senior Data Scientist turning research into reliable products — agentic orchestration, ML systems, and MLOps that scale.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/work">
              <Button>See my work</Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline">Get my résumé</Button>
            </Link>
          </div>
          <ul className="mt-4 flex flex-wrap gap-4 text-sm text-muted">
            {profile.stats.map((s) => (
              <li key={s.label} className="rounded-xl border border-border px-3 py-1">
                {s.value} {s.label}
              </li>
            ))}
          </ul>
          </div>
          <div className="col-span-5 hidden lg:block">
            <div className="glass h-64 w-full rounded-2xl bg-[radial-gradient(120px_120px_at_30%_30%,rgba(79,139,255,0.25),transparent),radial-gradient(120px_120px_at_70%_60%,rgba(41,211,145,0.25),transparent),radial-gradient(120px_120px_at_60%_30%,rgba(155,107,255,0.25),transparent)]" />
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section>
          <h2 className="mb-4 font-heading text-xl text-muted">Awards</h2>
          <AwardsMarquee />
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section>
          <h2 className="mb-4 font-heading text-xl text-muted">Featured Work</h2>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectTile key={p.slug} project={p as any} />
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section>
          <h2 className="mb-4 font-heading text-xl text-muted">Quick Links</h2>
          <QuickLinks />
        </section>
      </FadeIn>
    </div>
  )
}

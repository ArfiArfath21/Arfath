import { cn } from '@/lib/utils'
import type { Project } from '@/types/site'

const accentBackgrounds: Record<NonNullable<Project['accentTone']>, string> = {
  blue: 'radial-gradient(circle at 0% 20%, rgba(76, 129, 255, 0.18), transparent 42%)',
  indigo: 'radial-gradient(circle at 100% 10%, rgba(110, 102, 255, 0.18), transparent 40%)',
  silver: 'radial-gradient(circle at 100% 20%, rgba(255, 255, 255, 0.1), transparent 36%)',
}

type ProjectRowProps = {
  project: Project
  compact?: boolean
}

export function ProjectRow({ project, compact = false }: ProjectRowProps) {
  const accentTone = project.accentTone ?? 'blue'

  return (
    <article
      className={cn(
        'surface-row group relative overflow-hidden px-6 py-7 md:px-8',
        compact ? 'py-6 md:py-7' : 'py-8 md:py-10'
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: accentBackgrounds[accentTone] }}
      />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted">
            <span>{project.kicker}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span>{project.year}</span>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl leading-tight text-foreground md:text-[2.35rem]">
              {project.title}
            </h3>
            <p className="max-w-2xl text-base leading-7 text-muted md:text-lg">{project.headline}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="meta-label">Role</div>
            <p className="text-sm leading-6 text-foreground md:text-base">{project.role}</p>
          </div>
          <div className="space-y-2">
            <div className="meta-label">Result</div>
            <p className="text-base leading-7 text-foreground">{project.result}</p>
          </div>
          <ul className="space-y-3">
            {project.metrics.map((metric) => (
              <li key={metric} className="flex items-start gap-3 text-sm leading-6 text-muted md:text-base">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2">
            <div className="meta-label">Outcomes</div>
            <div className="flex flex-wrap gap-2">
              {project.impact.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

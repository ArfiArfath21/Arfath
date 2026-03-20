import Link from 'next/link'
import type { Route } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { resolveTone, toneAccentStyles, toneGlowBackgrounds } from '@/lib/accent'
import type { Project } from '@/types/site'

type ProjectRowProps = {
  project: Project
  compact?: boolean
}

export function ProjectRow({ project, compact = false }: ProjectRowProps) {
  const accentTone = resolveTone(project.accentTone)
  const accentStyle = toneAccentStyles[accentTone]
  const isExternal = project.primaryLink?.external

  const content = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: toneGlowBackgrounds[accentTone] }}
      />
      <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(13rem,0.62fr)_minmax(15rem,0.78fr)] lg:items-start">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-muted">
            <span>{project.kicker}</span>
            <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
            <span>{project.year}</span>
            {project.status === 'new' ? (
              <span
                className="rounded-full border px-3 py-1 text-[0.62rem] font-semibold tracking-[0.24em]"
                style={accentStyle}
              >
                New
              </span>
            ) : null}
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <h3 className="font-heading text-2xl leading-tight text-foreground md:text-[2.35rem]">
                {project.title}
              </h3>
              {project.primaryLink ? (
                <ArrowUpRight
                  size={18}
                  className="mt-2 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: accentStyle.color }}
                />
              ) : null}
            </div>
            <p className="max-w-2xl text-base leading-6 text-muted md:text-[1.02rem] md:leading-7">
              {project.headline}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <div className="meta-label">Role</div>
              <p className="text-sm leading-6 text-foreground md:text-[0.98rem]">{project.role}</p>
            </div>
            <div className="space-y-2">
              <div className="meta-label">Result</div>
              <p className="text-sm leading-6 text-foreground md:text-[0.98rem]">{project.result}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="meta-label">Signals</div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {project.metrics.map((metric) => (
                <li
                  key={metric}
                  className="inline-flex items-center gap-2 text-sm leading-6 text-muted md:text-[0.95rem]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: accentStyle.color }}
                    aria-hidden
                  />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="meta-label">Outcomes</div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {project.impact.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.66rem] uppercase tracking-[0.18em] text-foreground/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )

  const wrapperClass = cn(
    'group block focus:outline-none',
    project.primaryLink && 'cursor-pointer'
  )
  const panelClass = cn(
    'surface-row relative overflow-hidden px-6 py-6 md:px-8',
    compact ? 'py-5 md:py-6' : 'py-6 md:py-7'
  )

  if (!project.primaryLink) {
    return <article className={cn(panelClass, 'group')}>{content}</article>
  }

  if (isExternal) {
    return (
      <a
        href={project.primaryLink.href}
        target="_blank"
        rel="noopener noreferrer"
        className={wrapperClass}
        aria-label={`${project.title} — ${project.primaryLink.label}`}
      >
        <article className={panelClass}>{content}</article>
      </a>
    )
  }

  return (
    <Link
      href={project.primaryLink.href as Route}
      className={wrapperClass}
      aria-label={`${project.title} — ${project.primaryLink.label}`}
    >
      <article className={panelClass}>{content}</article>
    </Link>
  )
}

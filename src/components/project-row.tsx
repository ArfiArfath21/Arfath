import type { ReactNode } from 'react'
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

type AccentStyle = { color: string }

function ProjectMeta({
  project,
  accentStyle,
  compact = false,
}: {
  project: Project
  accentStyle: AccentStyle
  compact?: boolean
}) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center text-muted uppercase tracking-[0.28em]',
        compact ? 'gap-2.5 text-[0.64rem]' : 'gap-3 text-[0.68rem]'
      )}
    >
      <span>{project.kicker}</span>
      <span className="h-1 w-1 rounded-full bg-white/25" aria-hidden />
      <span>{project.year}</span>
      {project.status === 'new' ? (
        <span
          className="rounded-full border px-3 py-1 text-[0.6rem] font-semibold tracking-[0.24em]"
          style={accentStyle}
        >
          New
        </span>
      ) : null}
    </div>
  )
}

function ProjectTitleBlock({
  project,
  accentStyle,
  compact = false,
  className,
}: {
  project: Project
  accentStyle: AccentStyle
  compact?: boolean
  className?: string
}) {
  const titleClassName = cn(
    'font-heading leading-[0.98] text-foreground',
    compact ? 'text-[1.95rem] md:text-[2.15rem]' : 'text-2xl md:text-[2.45rem]'
  )

  const titleContent = (
    <>
      <h3 className={titleClassName}>{project.title}</h3>
      {project.primaryLink ? (
        <ArrowUpRight
          size={18}
          className="mt-2 shrink-0 transition-transform duration-200 group-hover/title-link:translate-x-0.5 group-hover/title-link:-translate-y-0.5"
          style={{ color: accentStyle.color }}
        />
      ) : null}
    </>
  )

  return (
    <div className={cn(compact ? 'space-y-3' : 'space-y-4', className)}>
      <div className="flex items-start gap-3">
        {project.primaryLink ? (
          project.primaryLink.external ? (
            <a
              href={project.primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/title-link inline-flex items-start gap-3 transition-opacity hover:opacity-90 focus:outline-none"
              aria-label={`${project.title} — ${project.primaryLink.label}`}
            >
              {titleContent}
            </a>
          ) : (
            <Link
              href={project.primaryLink.href as Route}
              className="group/title-link inline-flex items-start gap-3 transition-opacity hover:opacity-90 focus:outline-none"
              aria-label={`${project.title} — ${project.primaryLink.label}`}
            >
              {titleContent}
            </Link>
          )
        ) : (
          titleContent
        )}
      </div>
      <p className="max-w-2xl text-base leading-6 text-muted md:text-[1.02rem] md:leading-7">
        {project.headline}
      </p>
    </div>
  )
}

function DetailSection({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      <div className="meta-label">{label}</div>
      <div className="mt-2.5">{children}</div>
    </section>
  )
}

function BulletList({
  items,
  accentStyle,
  compact = false,
  className,
}: {
  items: string[]
  accentStyle: AccentStyle
  compact?: boolean
  className?: string
}) {
  return (
    <ul className={cn('grid', compact ? 'gap-1.5' : 'gap-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'inline-flex items-start gap-2.5 text-muted',
            compact ? 'text-[0.84rem] leading-5' : 'text-sm leading-6 md:text-[0.95rem]'
          )}
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: accentStyle.color }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function BulletRail({
  items,
  accentStyle,
  compact = false,
  className,
}: {
  items: string[]
  accentStyle: AccentStyle
  compact?: boolean
  className?: string
}) {
  return (
    <ul className={cn('flex flex-wrap', compact ? 'gap-x-4 gap-y-1.5' : 'gap-x-5 gap-y-2', className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            'inline-flex items-start gap-2 text-foreground/92',
            compact ? 'text-[0.82rem] leading-5' : 'text-sm leading-6'
          )}
        >
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: accentStyle.color }}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function BodyText({
  children,
  compact = false,
}: {
  children: ReactNode
  compact?: boolean
}) {
  return (
    <p className={cn('text-foreground', compact ? 'text-sm leading-6' : 'text-sm leading-6 md:text-[0.98rem]')}>
      {children}
    </p>
  )
}

function ProjectLayout({
  project,
  accentStyle,
  compact = false,
}: {
  project: Project
  accentStyle: AccentStyle
  compact?: boolean
}) {
  return (
    <div className={cn(compact ? 'space-y-4' : 'space-y-5')}>
      <div className={cn(compact ? 'space-y-3.5' : 'space-y-4')}>
        <ProjectMeta project={project} accentStyle={accentStyle} compact={compact} />
        <ProjectTitleBlock project={project} accentStyle={accentStyle} compact={compact} />
      </div>
      <div className="grid gap-4 border-t border-white/10 pt-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
        <div className="grid gap-4 md:grid-cols-2">
          <DetailSection label="Result">
            <BodyText compact={compact}>{project.result}</BodyText>
          </DetailSection>
          <DetailSection label="Signals" className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <BulletList items={project.metrics} accentStyle={accentStyle} compact={compact} />
          </DetailSection>
        </div>
        <DetailSection label="Outcomes" className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <BulletList items={project.impact} accentStyle={accentStyle} compact={compact} />
        </DetailSection>
      </div>
      <div className="grid gap-4 border-t border-white/10 pt-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start">
        <DetailSection label="Stack">
          <BulletRail items={project.stack} accentStyle={accentStyle} compact={compact} />
        </DetailSection>
        <DetailSection label="Role" className="border-t border-white/10 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <BodyText compact={compact}>{project.role}</BodyText>
        </DetailSection>
      </div>
    </div>
  )
}

export function ProjectRow({ project, compact = false }: ProjectRowProps) {
  const accentTone = resolveTone(project.accentTone)
  const accentStyle = toneAccentStyles[accentTone]

  const content = (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: toneGlowBackgrounds[accentTone] }}
      />
      <div className="relative">
        <ProjectLayout project={project} accentStyle={accentStyle} compact={compact} />
      </div>
    </>
  )

  const panelClass = cn(
    'surface-row relative overflow-hidden px-6 py-6 md:px-8',
    compact ? 'py-5 md:py-6' : 'py-6 md:py-7'
  )

  return <article className={cn(panelClass, 'group')}>{content}</article>
}

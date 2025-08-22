"use client"
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

type Project = {
  slug: string
  title: string
  year?: string
  summary?: string
  stack?: string[]
  links?: { caseStudy?: string }
}

export function ProjectTile({ project }: { project: Project }) {
  const p = project
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Card className="glass overflow-hidden flex h-full flex-col transition-colors hover:bg-white/5">
        <div className="aspect-[16/9] w-full bg-[radial-gradient(120px_120px_at_30%_30%,rgba(79,139,255,0.20),transparent),radial-gradient(120px_120px_at_70%_60%,rgba(41,211,145,0.20),transparent),radial-gradient(120px_120px_at_60%_30%,rgba(155,107,255,0.20),transparent)]" />
        <CardContent className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-heading text-lg leading-snug">{p.title}</h3>
            {p.year ? (
              <span className="shrink-0 rounded-full border border-border px-2 py-1 text-xs text-muted">
                {p.year}
              </span>
            ) : null}
          </div>
          {p.summary ? (
            <p className="mt-2 line-clamp-3 text-sm text-muted">{p.summary}</p>
          ) : null}
          {p.stack && p.stack.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.slice(0, 4).map((s) => (
              <li key={s} className="rounded-xl border border-border px-2 py-1 text-xs text-muted">
                {s}
              </li>
            ))}
            </ul>
          ) : null}
        </CardContent>
      </Card>
    </motion.div>
  )
}

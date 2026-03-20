import profile from '@/content/profile.json'

const archiveLinks = [
  { href: '/awards', label: 'Awards' },
  { href: '/netflix-plan', label: 'Netflix Plan' },
  { href: 'https://theblogorithm.com', label: 'Blog', external: true },
  { href: profile.social.github, label: 'GitHub', external: true },
  { href: profile.social.linkedin, label: 'LinkedIn', external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="container-12 py-10 md:py-14">
        <div className="surface-panel grid gap-8 px-6 py-8 md:grid-cols-[1.25fr_0.75fr] md:px-8 md:py-10">
          <div className="space-y-4">
            <p className="eyebrow">Available for meaningful AI work</p>
            <h2 className="max-w-2xl font-heading text-2xl leading-tight text-foreground md:text-4xl">
              Building systems that feel calm under production pressure.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
              Based in Hyderabad, working across product, ML, and delivery. Reach out if you need
              agentic systems, ML platforms, or a senior builder who can take ambiguous ideas to
              production.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex rounded-full border border-primary/40 bg-primary/12 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-foreground transition hover:-translate-y-0.5 hover:bg-primary/18"
            >
              {profile.email}
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {archiveLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                className="rounded-[1.5rem] border border-border bg-white/[0.03] px-4 py-4 transition hover:border-white/15 hover:bg-white/[0.05]"
              >
                <div className="meta-label">Archive</div>
                <div className="mt-2 font-heading text-base text-foreground">{link.label}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arfath Ahmed Syed</p>
          <p>Selected work, writing, and archive links.</p>
        </div>
      </div>
    </footer>
  )
}

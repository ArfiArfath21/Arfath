import profile from '@/content/profile.json'

const footerLinks = [
  { href: 'https://blogs.arfath.me/', label: 'Blogs', external: true },
  { href: profile.social.github, label: 'GitHub', external: true },
  { href: profile.social.linkedin, label: 'LinkedIn', external: true },
]

export function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="container-12 py-8 md:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Arfath Ahmed Syed</p>
          <div className="flex flex-wrap gap-2">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                className="rounded-full border border-border bg-white/[0.03] px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-muted transition hover:border-white/15 hover:bg-white/[0.06] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

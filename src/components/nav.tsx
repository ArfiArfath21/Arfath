"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <div className="container-12 flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <span className="font-heading text-sm tracking-[0.42em]">ARFATH</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary md:block" aria-hidden />
          <span className="hidden text-[0.7rem] uppercase tracking-[0.3em] text-muted lg:block">
            AI Systems
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] transition-colors ${
                pathname === l.href
                  ? 'bg-white/6 text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://theblogorithm.com"
            target="_blank"
            rel="noopener"
            className="meta-label hover:text-foreground"
            aria-label="Blog (opens in new tab)"
            title="Blog"
          >
            Blog
          </a>
          <a
            href="mailto:arfiarfath0305@gmail.com"
            className="rounded-full border border-border bg-white/5 px-4 py-2 text-[0.72rem] uppercase tracking-[0.28em] text-foreground transition hover:bg-white/10"
          >
            Email
          </a>
        </div>
        <button
          className="rounded-full border border-border bg-white/5 p-3 text-foreground transition hover:bg-white/10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`border-t border-border/80 bg-background/95 backdrop-blur-xl transition-all duration-200 md:hidden ${
          open ? 'pointer-events-auto max-h-[28rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="container-12 flex flex-col gap-1 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-[1.35rem] px-4 py-3 text-sm uppercase tracking-[0.26em] ${
                pathname === l.href ? 'bg-white/6 text-foreground' : 'text-muted'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-4 px-1">
            <a
              href="https://theblogorithm.com"
              target="_blank"
              rel="noopener"
              className="meta-label hover:text-foreground"
            >
              Blog
            </a>
            <a href="mailto:arfiarfath0305@gmail.com" className="meta-label hover:text-foreground">
              Email
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

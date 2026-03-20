"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>

const desktopLinkClass =
  'relative inline-flex items-center px-1 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-muted transition-colors duration-200 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-primary after:opacity-0 after:transition-all after:duration-200'

const mobileLinkClass =
  'px-1 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-muted transition hover:text-foreground'

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/70 backdrop-blur-xl">
      <div className="container-12 flex h-20 items-center justify-between gap-6">
        <Link href="/" className="min-w-0 text-foreground">
          <span className="block truncate font-heading text-[1rem] tracking-[0.15em] sm:text-[1.12rem]">
            Arfath Ahmed Syed
          </span>
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          <nav className="flex items-center gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={cn(
                  desktopLinkClass,
                  pathname === l.href && 'text-foreground after:scale-x-100 after:opacity-100'
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <span className="h-5 w-px bg-white/10" aria-hidden />
          <a
            href="https://blogs.arfath.me/"
            target="_blank"
            rel="noopener"
            className={desktopLinkClass}
            aria-label="Blogs (opens in new tab)"
            title="Blogs"
          >
            Blogs
          </a>
        </div>
        <button
          className="p-2 text-foreground transition hover:text-primary md:hidden"
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
        className={`border-t border-border/80 bg-background/95 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 md:hidden ${
          open ? 'pointer-events-auto max-h-[32rem] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="container-12 flex flex-col gap-2 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? 'page' : undefined}
              className={cn(
                mobileLinkClass,
                pathname === l.href && 'text-foreground'
              )}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://blogs.arfath.me/"
            target="_blank"
            rel="noopener"
            className={cn(mobileLinkClass, 'text-foreground')}
            onClick={() => setOpen(false)}
          >
            Blogs
          </a>
        </div>
      </div>
    </header>
  )
}

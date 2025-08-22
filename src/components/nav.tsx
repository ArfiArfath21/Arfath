"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Route } from 'next'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/awards', label: 'Awards' },
  { href: '/contact', label: 'Contact' },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>

export function Nav() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="container-12 flex h-14 md:h-16 items-center justify-between">
        <Link href="/" className="font-heading tracking-wide text-lg">
          ARFATH
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-3 py-2 text-sm hover:bg-white/5 ${
                pathname === l.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://theblogorithm.com"
            target="_blank"
            rel="noopener"
            className="rounded-xl px-3 py-2 text-sm hover:bg-white/5 text-foreground"
            aria-label="Blog (opens in new tab)"
            title="Blog ↗"
          >
            Blog ↗
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="md:hidden rounded-xl px-3 py-2 text-sm hover:bg-white/5"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={(e) => {
              const menu = document.getElementById('mobile-menu')
              const overlay = document.getElementById('menu-overlay')
              if (menu && overlay) {
                const open = menu.dataset.open === 'true'
                menu.dataset.open = open ? 'false' : 'true'
                overlay.classList.toggle('hidden', open)
                ;(e.currentTarget as HTMLButtonElement).setAttribute('aria-expanded', String(!open))
              }
            }}
          >
            ☰
          </button>
          <Button
            variant="ghost"
            magnetic={false}
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
      <div
        id="mobile-menu"
        data-open="false"
        className="md:hidden fixed inset-x-0 top-14 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-soft origin-top overflow-hidden max-h-[28vh] -translate-y-2 scale-y-0 opacity-0 pointer-events-none transition-all duration-200 data-[open=true]:translate-y-0 data-[open=true]:scale-y-100 data-[open=true]:opacity-100 data-[open=true]:pointer-events-auto data-[open=true]:overflow-y-auto"
      >
        <div className="container-12 flex flex-col py-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-xl px-3 py-1.5 text-sm hover:bg-white/5 ${
                pathname === l.href ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => {
                const menu = document.getElementById('mobile-menu')
                const overlay = document.getElementById('menu-overlay')
                if (menu && overlay) {
                  menu.dataset.open = 'false'
                  overlay.classList.add('hidden')
                  const toggle = document.querySelector(
                    'button[aria-controls="mobile-menu"]'
                  ) as HTMLButtonElement | null
                  if (toggle) toggle.setAttribute('aria-expanded', 'false')
                }
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://theblogorithm.com"
            target="_blank"
            rel="noopener"
            className="rounded-xl px-3 py-1.5 text-sm hover:bg-white/5 text-foreground"
            onClick={() => {
              const menu = document.getElementById('mobile-menu')
              const overlay = document.getElementById('menu-overlay')
              if (menu && overlay) {
                menu.dataset.open = 'false'
                overlay.classList.add('hidden')
                const toggle = document.querySelector(
                  'button[aria-controls="mobile-menu"]'
                ) as HTMLButtonElement | null
                if (toggle) toggle.setAttribute('aria-expanded', 'false')
              }
            }}
          >
            Blog ↗
          </a>
        </div>
      </div>
      <div
        id="menu-overlay"
        className="hidden fixed inset-0 z-40 bg-black/30 md:hidden"
        onClick={() => {
          const menu = document.getElementById('mobile-menu')
          if (menu) menu.dataset.open = 'false'
          const overlay = document.getElementById('menu-overlay')
          if (overlay) overlay.classList.add('hidden')
          const toggle = document.querySelector(
            'button[aria-controls="mobile-menu"]'
          ) as HTMLButtonElement | null
          if (toggle) toggle.setAttribute('aria-expanded', 'false')
        }}
      />
    </header>
  )
}

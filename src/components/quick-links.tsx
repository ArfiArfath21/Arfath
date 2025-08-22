import { Calculator, Gamepad2, Newspaper } from 'lucide-react'

type Quick = {
  title: string
  href: string
  desc?: string
  icon: JSX.Element
}

const LINKS: Quick[] = [
  {
    title: 'The Blogorithm',
    href: 'https://theblogorithm.com',
    desc: 'My writing, notes, and experiments',
    icon: <Newspaper />,
  },
  {
    title: 'Tax Calculator',
    href: 'https://tax-calculator.arfath.me',
    desc: 'Quick income tax estimate utility',
    icon: <Calculator />,
  },
  {
    title: 'Snake Xenzia',
    href: 'https://snake.arfath.me',
    desc: 'A classic snake game on the web',
    icon: <Gamepad2 />,
  },
]

export function QuickLinks() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {LINKS.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener"
          className="glass group flex items-center gap-4 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:bg-white/5"
        >
          <span className="shrink-0 rounded-2xl bg-primary/20 p-3 text-primary">{l.icon}</span>
          <div className="min-w-0">
            <div className="font-heading text-sm text-foreground">{l.title}</div>
            {l.desc ? <div className="truncate text-xs text-muted">{l.desc}</div> : null}
          </div>
        </a>
      ))}
    </div>
  )
}

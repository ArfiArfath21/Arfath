import { Mail, Github, Linkedin, Calendar } from 'lucide-react'

export const metadata = { title: 'Contact — Arfath Ahmed Syed' }

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="font-heading text-3xl">Got a hard AI problem? Let’s make it real.</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <a
          href="mailto:arfiarfath0305@gmail.com"
          className="glass group flex items-center gap-4 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:bg-white/5"
        >
          <span className="shrink-0 rounded-2xl bg-primary/20 p-3 text-primary"><Mail /></span>
          <div className="min-w-0">
            <div className="text-sm text-muted">Email</div>
            <div className="truncate text-foreground">arfiarfath0305@gmail.com</div>
          </div>
        </a>
        <a
          href="https://calendly.com/arfiarfath21/30min"
          target="_blank"
          rel="noopener"
          className="glass group flex items-center gap-4 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:bg-white/5"
        >
          <span className="shrink-0 rounded-2xl bg-primary/20 p-3 text-primary"><Calendar /></span>
          <div className="min-w-0">
            <div className="text-sm text-muted">Calendly</div>
            <div className="truncate text-foreground">Book a 30‑min intro</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/arfiarfath21"
          target="_blank"
          rel="noopener"
          className="glass group flex items-center gap-4 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:bg-white/5"
        >
          <span className="shrink-0 rounded-2xl bg-primary/20 p-3 text-primary"><Linkedin /></span>
          <div className="min-w-0">
            <div className="text-sm text-muted">LinkedIn</div>
            <div className="truncate text-foreground">/in/arfiarfath21</div>
          </div>
        </a>
        <a
          href="https://github.com/ArfiArfath21"
          target="_blank"
          rel="noopener"
          className="glass group flex items-center gap-4 overflow-hidden p-6 transition-all hover:-translate-y-0.5 hover:bg-white/5"
        >
          <span className="shrink-0 rounded-2xl bg-primary/20 p-3 text-primary"><Github /></span>
          <div className="min-w-0">
            <div className="text-sm text-muted">GitHub</div>
            <div className="truncate text-foreground">/ArfiArfath21</div>
          </div>
        </a>
      </div>
      
    </div>
  )
}

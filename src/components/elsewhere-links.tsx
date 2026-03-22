import { ArrowUpRight } from 'lucide-react'
import { FadeIn } from '@/components/motion/fade-in'
import { resolveTone, toneAccentStyles, toneGlowBackgrounds } from '@/lib/accent'
import type { SecondaryLink } from '@/types/site'

export function ElsewhereLinks({ links }: { links: SecondaryLink[] }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {links.map((link, index) => {
        const external = link.href.startsWith('http')
        const accentTone = resolveTone(link.accentTone)
        const accentStyle = toneAccentStyles[accentTone]

        return (
          <FadeIn
            key={link.href}
            className="h-full"
            once={false}
            y={24}
            scaleFrom={0.985}
            delay={index * 0.04}
            margin="-8% 0px -12% 0px"
            amount={0.2}
          >
            <a
              href={link.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener' : undefined}
              className="surface-row group relative block h-full w-full overflow-hidden px-6 py-6"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: toneGlowBackgrounds[accentTone] }}
              />
              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="meta-label">{link.kind}</p>
                    {link.tag ? (
                      <span
                        className="rounded-full border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em]"
                        style={accentStyle}
                      >
                        {link.tag}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="font-heading text-2xl text-foreground">{link.title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-muted md:text-base">{link.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-foreground transition group-hover:text-foreground">
                  Open
                  <ArrowUpRight size={15} style={{ color: accentStyle.color }} />
                </span>
              </div>
            </a>
          </FadeIn>
        )
      })}
    </div>
  )
}

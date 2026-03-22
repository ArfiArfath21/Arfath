"use client"

import * as React from 'react'
import { useScroll } from 'framer-motion'
import Link from 'next/link'
import { FadeIn } from '@/components/motion/fade-in'
import { ScrollParallax } from '@/components/motion/scroll-parallax'
import { toneGlowBackgrounds } from '@/lib/accent'
import type { Profile } from '@/types/site'

type HomeHeroProps = {
  profile: Profile
}

const spotlightItems = (location: string) => [
  { label: 'Base', body: location },
  {
    label: 'Working Across',
    body: 'Agentic systems, recommendation engines, platform delivery, and operational reliability.',
  },
  {
    label: 'Best Fit',
    body: 'Ambiguous, cross-functional work where product shape and production discipline both matter.',
    className: 'sm:col-span-2 lg:col-span-1',
  },
]

export function HomeHero({ profile }: HomeHeroProps) {
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  })
  const infoItems = spotlightItems(profile.location)

  return (
    <section
      ref={sectionRef}
      className="hero-stage grid gap-10 pb-14 pt-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-start lg:pb-20"
    >
      <ScrollParallax
        progress={scrollYProgress}
        y={[0, 64]}
        opacity={[0.98, 0.72]}
        className="hero-atmosphere"
        aria-hidden
      />

      <ScrollParallax
        progress={scrollYProgress}
        y={[0, -24]}
        opacity={[1, 0.82]}
        className="relative z-[1] lg:pr-6"
      >
        <FadeIn y={22} scaleFrom={0.992} amount={0.45} margin="0px" className="space-y-8">
          <p className="eyebrow">{profile.heroEyebrow}</p>
          <h1 className="max-w-5xl font-heading text-5xl leading-[0.96] text-foreground sm:text-6xl lg:text-7xl">
            {profile.heroHeadline}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
            {profile.heroIntro}
          </p>
        </FadeIn>
      </ScrollParallax>

      <ScrollParallax
        progress={scrollYProgress}
        y={[0, 28]}
        scale={[1, 0.985]}
        className="hero-spotlight surface-panel relative z-[1] overflow-hidden p-6 md:p-8 lg:mt-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{ background: toneGlowBackgrounds.green }}
        />
        <FadeIn
          y={20}
          scaleFrom={0.992}
          delay={0.08}
          amount={0.45}
          margin="0px"
          className="relative space-y-6"
        >
          <div className="space-y-3">
            <p className="meta-label text-primary/85">Currently</p>
            <p className="text-base leading-7 text-foreground">
              Senior Associate in Data Science at Publicis Sapient, working across AI product
              strategy, ML systems, and production delivery.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {infoItems.map((item, index) => (
              <FadeIn
                key={item.label}
                once={false}
                y={14}
                scaleFrom={0.99}
                delay={0.12 + index * 0.04}
                amount={0.35}
                margin="-10% 0px -10% 0px"
              >
                <div
                  className={`rounded-[1.5rem] border border-white/10 bg-black/20 px-4 py-4 backdrop-blur-sm ${item.className ?? ''}`}
                >
                  <div className="meta-label">{item.label}</div>
                  <div className="mt-2 text-sm leading-6 text-foreground">{item.body}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </ScrollParallax>

      <ScrollParallax
        progress={scrollYProgress}
        y={[0, 16]}
        opacity={[1, 0]}
        className="absolute inset-x-0 bottom-0 z-[1] hidden justify-center lg:flex"
      >
        <Link
          href="#selected-work"
          className="inline-flex flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.34em] text-muted transition hover:text-foreground"
        >
          <span>Scroll</span>
          <span className="scroll-cue-shell" aria-hidden />
        </Link>
      </ScrollParallax>
    </section>
  )
}

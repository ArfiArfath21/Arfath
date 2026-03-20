import { Calendar, Github, Linkedin, Mail } from 'lucide-react'
import profile from '@/content/profile.json'
import { SectionHeading } from '@/components/section-heading'
import { toneAccentStyles, toneGlowBackgrounds } from '@/lib/accent'
import type { Profile } from '@/types/site'

export const metadata = { title: 'Contact — Arfath Ahmed Syed' }

export default function ContactPage() {
  const profileData = profile as Profile

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="Contact"
        title="Open to serious AI, product, and platform conversations."
        description="If you are building something that needs both applied AI judgment and production discipline, email is the fastest path."
      />

      <section className="grid gap-5 lg:grid-cols-6">
        <a
          href={`mailto:${profileData.email}`}
          className="surface-row group relative overflow-hidden px-6 py-6 md:px-8 md:py-8 lg:col-span-3"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: toneGlowBackgrounds.green }}
          />
          <div className="relative flex h-full items-start justify-between gap-6">
            <div className="space-y-4">
              <p className="meta-label">Email</p>
              <h2 className="font-heading text-3xl leading-tight text-foreground md:text-[2.45rem]">
                {profileData.email}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-muted md:text-base">
                Best when the conversation is already concrete and tied to product, platform, or
                applied AI delivery work.
              </p>
            </div>
            <span
              className="rounded-full border p-3"
              style={toneAccentStyles.green}
            >
              <Mail size={18} />
            </span>
          </div>
        </a>

        <a
          href="https://calendly.com/arfiarfath21/30min"
          target="_blank"
          rel="noopener"
          className="surface-row group relative overflow-hidden px-6 py-6 md:px-8 md:py-8 lg:col-span-3"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: toneGlowBackgrounds.red }}
          />
          <div className="relative flex h-full items-start justify-between gap-6">
            <div className="space-y-4">
              <p className="meta-label">Calendly</p>
              <h2 className="font-heading text-3xl leading-tight text-foreground md:text-[2.35rem]">
                Book a 30-minute intro
              </h2>
              <p className="max-w-lg text-sm leading-7 text-muted md:text-base">
                Use this when a short live conversation is clearly the fastest way to align.
              </p>
            </div>
            <span
              className="rounded-full border p-3"
              style={toneAccentStyles.red}
            >
              <Calendar size={18} />
            </span>
          </div>
        </a>

        <a
          href={profileData.social.linkedin}
          target="_blank"
          rel="noopener"
          className="surface-row group relative overflow-hidden px-6 py-5 md:px-7 md:py-6 lg:col-span-2"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: toneGlowBackgrounds.blue }}
          />
          <div className="relative flex h-full items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="meta-label">LinkedIn</p>
              <h2 className="font-heading text-2xl text-foreground md:text-[2rem]">/in/ArfiArfath21</h2>
            </div>
            <span
              className="rounded-full border p-3"
              style={toneAccentStyles.blue}
            >
              <Linkedin size={18} />
            </span>
          </div>
        </a>

        <a
          href={profileData.social.github}
          target="_blank"
          rel="noopener"
          className="surface-row group relative overflow-hidden px-6 py-5 md:px-7 md:py-6 lg:col-span-2"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: toneGlowBackgrounds.amber }}
          />
          <div className="relative flex h-full items-start justify-between gap-4">
            <div className="space-y-3">
              <p className="meta-label">GitHub</p>
              <h2 className="font-heading text-2xl text-foreground md:text-[2rem]">/ArfiArfath21</h2>
            </div>
            <span
              className="rounded-full border p-3"
              style={toneAccentStyles.amber}
            >
              <Github size={18} />
            </span>
          </div>
        </a>

        <div className="surface-row relative overflow-hidden px-6 py-5 md:px-7 md:py-6 lg:col-span-2">
          <div
            className="pointer-events-none absolute inset-0 opacity-85"
            style={{ background: toneGlowBackgrounds.green }}
          />
          <div className="relative space-y-3">
            <p className="meta-label">Best fit</p>
            <p className="text-sm leading-7 text-foreground md:text-base">
              Product-facing AI work with ambiguity, cross-functional pressure, and a real need for
              systems that stay reliable after launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

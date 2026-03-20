import { Mail, Github, Linkedin, Calendar } from 'lucide-react'
import profile from '@/content/profile.json'
import { SectionHeading } from '@/components/section-heading'
import type { Profile } from '@/types/site'

export const metadata = { title: 'Contact — Arfath Ahmed Syed' }

export default function ContactPage() {
  const profileData = profile as Profile
  const contactLinks = [
    {
      title: 'Email',
      href: `mailto:${profileData.email}`,
      detail: profileData.email,
      icon: Mail,
    },
    {
      title: 'Calendly',
      href: 'https://calendly.com/arfiarfath21/30min',
      detail: 'Book a 30-minute intro',
      icon: Calendar,
    },
    {
      title: 'LinkedIn',
      href: profileData.social.linkedin,
      detail: '/in/arfath21',
      icon: Linkedin,
    },
    {
      title: 'GitHub',
      href: profileData.social.github,
      detail: '/ArfiArfath21',
      icon: Github,
    },
  ]

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="Contact"
        title="Open to serious AI, product, and platform conversations."
        description="If you are building something that needs both applied AI judgment and production discipline, email is the fastest path."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {contactLinks.map((item) => {
          const Icon = item.icon

          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener' : undefined}
              className="surface-row group px-6 py-6 md:px-8 md:py-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="meta-label">{item.title}</div>
                  <h2 className="font-heading text-2xl text-foreground md:text-3xl">{item.detail}</h2>
                </div>
                <span className="rounded-full border border-primary/25 bg-primary/10 p-3 text-primary">
                  <Icon size={18} />
                </span>
              </div>
            </a>
          )
        })}
      </div>
      <div className="surface-panel px-6 py-7 md:px-8 md:py-9">
        <p className="meta-label">Best fit</p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted md:text-lg">
          Projects where the AI layer is only one part of the challenge: ambiguous product goals,
          evolving workflows, delivery pressure, and a need for systems that can hold up after the
          initial launch.
        </p>
      </div>
    </div>
  )
}

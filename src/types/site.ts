export type SocialLinks = {
  linkedin: string
  github: string
}

export type CredibilityItem = {
  value: string
  label: string
}

export type Principle = {
  title: string
  description: string
}

export type SecondaryLink = {
  title: string
  href: string
  desc: string
  kind: string
}

export type CapabilityGroup = {
  title: string
  items: string[]
}

export type TimelineItem = {
  period: string
  title: string
  description: string
}

export type Profile = {
  name: string
  tagline: string
  location: string
  email: string
  social: SocialLinks
  heroEyebrow: string
  heroHeadline: string
  heroIntro: string
  credibilityItems: CredibilityItem[]
  principles: Principle[]
  secondaryLinks: SecondaryLink[]
  aboutLead: string
  aboutBio: string
  capabilities: CapabilityGroup[]
  timeline: TimelineItem[]
}

export type AccentTone = 'blue' | 'indigo' | 'silver'

export type Project = {
  slug: string
  title: string
  kicker: string
  headline: string
  result: string
  role: string
  year: string
  stack: string[]
  metrics: string[]
  impact: string[]
  links: {
    caseStudy?: string
    demo?: string
    repo?: string
  }
  featured: boolean
  accentTone?: AccentTone
}

export type RecognitionItem = {
  title: string
  date: string
  type: string
}

import { recognition } from '@/content/recognition'
import { SectionHeading } from '@/components/section-heading'

export const metadata = { title: 'Awards — Arfath Ahmed Syed' }

export default function AwardsPage() {
  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="Proof"
        title="Recognitions and certifications tied to recent work."
        description="A compact archive of awards, certifications, and milestones that support the work shown elsewhere on the site."
      />
      <ul className="grid gap-5 md:grid-cols-2">
        {recognition.map((item) => (
          <li key={item.title} className="surface-row px-6 py-6 md:px-8 md:py-7">
            <div className="flex items-start justify-between gap-5">
              <div className="space-y-2">
                <div className="meta-label">{item.type}</div>
                <div className="text-lg leading-7 text-foreground">{item.title}</div>
              </div>
              <div className="meta-label whitespace-nowrap">{item.date}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

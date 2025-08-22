export const metadata = { title: 'Awards — Arfath Ahmed Syed' }

const AWARDS = [
  { title: 'Aspire Award Finalist', date: 'Mar ’24' },
  { title: 'Embracing the Future', date: 'Oct ’24' },
  { title: 'Best GenAI Case Study', date: 'Jun ’24' },
  { title: 'Unilever Global Townhall Award', date: 'Nov ’23' },
  { title: 'Inclusive Collaborator', date: 'Aug ’23' },
  { title: 'Best Debutant', date: 'May ’23' },
  { title: 'GCP ML Engineer', date: 'Apr ’24' },
  { title: 'IBM DS Certificate', date: 'Apr ’24' },
  { title: 'Databricks GenAI Fundamentals', date: 'Apr ’24' },
]

export default function AwardsPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl">Awards & Certifications</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {AWARDS.map((a) => (
          <li key={a.title} className="glass flex items-center justify-between p-4">
            <span className="text-sm text-foreground">{a.title}</span>
            <span className="rounded-full border border-border px-2 py-1 text-xs text-muted">{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

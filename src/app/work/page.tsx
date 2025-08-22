import projects from '@/content/projects.json'
import { ProjectTile } from '@/components/project-tile'

export const metadata = { title: 'Work — Arfath Ahmed Syed' }

export default function WorkPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-3xl">Selected projects I loved building.</h1>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectTile key={p.slug} project={p as any} />
        ))}
      </div>
    </div>
  )
}

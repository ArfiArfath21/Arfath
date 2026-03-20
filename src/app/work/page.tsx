import projects from '@/content/projects.json'
import { ProjectRow } from '@/components/project-row'
import { SectionHeading } from '@/components/section-heading'
import type { Project } from '@/types/site'

export const metadata = { title: 'Work — Arfath Ahmed Syed' }

export default function WorkPage() {
  const allProjects = [...(projects as Project[])].sort(
    (left, right) => (left.homePriority ?? 999) - (right.homePriority ?? 999)
  )

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="Work"
        title="Selected systems and products, starting with the newest personal build."
        description="Arx leads this index, followed by enterprise work where delivery quality depended as much on system design and operating detail as it did on the model itself."
      />
      <div className="space-y-5">
        {allProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} compact />
        ))}
      </div>
    </div>
  )
}

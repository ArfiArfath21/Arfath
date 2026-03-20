import projects from '@/content/projects.json'
import { ProjectRow } from '@/components/project-row'
import { SectionHeading } from '@/components/section-heading'
import type { Project } from '@/types/site'

export const metadata = { title: 'Work — Arfath Ahmed Syed' }

export default function WorkPage() {
  const allProjects = projects as Project[]

  return (
    <div className="space-y-12 md:space-y-14">
      <SectionHeading
        eyebrow="Work"
        title="Selected AI and ML systems built with production realities in mind."
        description="A short index of projects where the real work was not just modeling, but shaping the system, the workflow, and the delivery path around it."
      />
      <div className="space-y-5">
        {allProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} compact />
        ))}
      </div>
    </div>
  )
}

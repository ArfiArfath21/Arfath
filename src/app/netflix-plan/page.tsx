import { getNetflixTechBlogPosts, scheduleReadings } from '@/lib/netflix'
import { NetflixReadingPlanner } from '@/components/netflix-reading-planner'
import { SectionHeading } from '@/components/section-heading'

export const metadata = {
  title: 'Netflix Tech Blog reading plan — Arfath Ahmed Syed',
  description:
    'Navigate Netflix Tech Blog posts by reading date and publication date with a daily highlighted pick.',
}

export default async function NetflixPlanPage() {
  const posts = await getNetflixTechBlogPosts()
  const planned = scheduleReadings(posts, new Date())

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Archive Utility"
        title="Netflix Tech Blog navigator."
        description="A side utility for moving through the full archive without endless scrolling. Start tomorrow, read one post per day, or switch back to the original publication order."
      />
      <NetflixReadingPlanner planned={planned} />
    </div>
  )
}

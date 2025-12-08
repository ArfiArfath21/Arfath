import { getNetflixTechBlogPosts, scheduleReadings } from '@/lib/netflix'
import { NetflixReadingPlanner } from '@/components/netflix-reading-planner'

export const metadata = {
  title: 'Netflix Tech Blog reading plan — Arfath Ahmed Syed',
  description: 'Navigate Netflix Tech Blog posts by reading date and publication date with a daily highlighted pick.',
}

export default async function NetflixPlanPage() {
  const posts = await getNetflixTechBlogPosts()
  const planned = scheduleReadings(posts, new Date())

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">reading plan</p>
        <h1 className="font-heading text-3xl leading-tight">Netflix Tech Blog navigator</h1>
        <p className="text-muted-foreground max-w-2xl">
          A focused queue to move through every Netflix Tech Blog post without endless scrolling. Blog 1 starts
          tomorrow, then one post per day in publication order. Toggle between your reading schedule and original
          publication dates, and jump straight to today&apos;s pick.
        </p>
      </div>

      <NetflixReadingPlanner planned={planned} />
    </div>
  )
}

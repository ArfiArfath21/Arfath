export type NetflixPost = {
  id: string
  title: string
  url: string
  publishedAt: string
  summary?: string
}

export type PlannedNetflixReading = NetflixPost & {
  readingDate: string
  readingNumber: number
}

type FeedItem = Record<string, unknown>
type FeedResponse = {
  items?: FeedItem[]
  posts?: FeedItem[]
  entries?: FeedItem[]
}

const FEED_URL = 'https://netflixtechblog.com/?format=json'

function parseDate(raw: unknown): Date | null {
  if (typeof raw !== 'string') return null
  const date = new Date(raw)
  return Number.isNaN(date.getTime()) ? null : date
}

function extractSummary(item: FeedItem) {
  const summary =
    (item.summary as string | undefined) ||
    (item.description as string | undefined) ||
    (item.content_text as string | undefined) ||
    (typeof item.content_html === 'string' ? stripHtml(item.content_html) : '')

  if (typeof summary !== 'string') return undefined
  return summary.replace(/\s+/g, ' ').trim()
}

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, '')
}

function getItemsFromFeed(data: FeedResponse | undefined): FeedItem[] {
  if (Array.isArray(data?.items)) return data.items
  if (Array.isArray(data?.posts)) return data.posts
  if (Array.isArray(data?.entries)) return data.entries
  return []
}

export function scheduleReadings(posts: NetflixPost[], startDate: Date): PlannedNetflixReading[] {
  const start = startOfDay(startDate)

  return posts.map((post, index) => ({
    ...post,
    readingDate: addDays(start, index).toISOString(),
    readingNumber: index + 1,
  }))
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number) {
  const copy = new Date(date)
  copy.setDate(copy.getDate() + days)
  return copy
}

export async function getNetflixTechBlogPosts(): Promise<NetflixPost[]> {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 60 * 60 * 6 },
    })

    if (!response.ok) {
      throw new Error(`Feed returned ${response.status}`)
    }

    const data = (await response.json()) as FeedResponse
    const items = getItemsFromFeed(data)

    const posts: NetflixPost[] = items
      .map((item, idx: number) => {
        const published =
          parseDate(item?.date_published) ||
          parseDate(item?.published_at) ||
          parseDate(item?.publishedAt) ||
          parseDate(item?.created_at) ||
          parseDate(item?.createdAt)

        if (!published) return null

        const title =
          (item?.title as string | undefined) ||
          (item?.headline as string | undefined) ||
          (item?.name as string | undefined) ||
          `Untitled post ${idx + 1}`
        const url = (item?.url as string | undefined) || (item?.link as string | undefined)

        if (typeof url !== 'string' || url.length === 0) return null

        return {
          id: String((item?.id as string | number | undefined) || (item?.guid as string | number | undefined) || url || idx),
          title,
          url,
          publishedAt: published.toISOString(),
          summary: extractSummary(item),
        }
      })
      .filter(Boolean)
      .sort((a, b) => new Date(a!.publishedAt).getTime() - new Date(b!.publishedAt).getTime()) as NetflixPost[]

    return posts
  } catch (error) {
    console.error('Unable to load Netflix Tech Blog feed', error)
    return []
  }
}

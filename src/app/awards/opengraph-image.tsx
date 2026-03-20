export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'Awards — Arfath Ahmed Syed', subtitle: 'Recognitions, certifications, and milestones.' })
}

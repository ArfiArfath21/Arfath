export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'
export default function Image() {
  return ogImage({ title: 'Work — Arfath Ahmed Syed', subtitle: 'Selected projects I loved building' })
}


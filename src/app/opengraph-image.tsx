export { contentType, size } from '@/lib/og'
import { ogImage } from '@/lib/og'

export const runtime = 'edge'

export default function OpengraphImage() {
  return ogImage({
    title: 'AI systems built for production',
    subtitle: 'Selected work, writing, and contact.',
  })
}

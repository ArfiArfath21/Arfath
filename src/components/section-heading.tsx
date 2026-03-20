import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-4', className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-heading text-3xl leading-[1.02] text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="prose-muted max-w-2xl">{description}</p> : null}
    </div>
  )
}

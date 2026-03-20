import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.26em] transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border border-primary/40 bg-primary/12 text-foreground hover:-translate-y-0.5 hover:bg-primary/18',
        ghost: 'bg-transparent text-muted hover:text-foreground',
        outline:
          'border border-border bg-white/[0.03] text-foreground hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/[0.06]',
      },
      magnetic: { true: 'will-change-transform', false: '' },
    },
    defaultVariants: {
      variant: 'default',
      magnetic: true,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, magnetic, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, magnetic }), className)} {...props} />
  )
)
Button.displayName = 'Button'

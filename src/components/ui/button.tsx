import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:brightness-110 shadow-soft',
        ghost: 'bg-transparent hover:bg-white/5 text-foreground',
        outline: 'border border-border bg-transparent hover:bg-white/5 text-foreground',
      },
      magnetic: { true: 'will-change-transform hover:-translate-y-0.5 hover:shadow-soft', false: '' },
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

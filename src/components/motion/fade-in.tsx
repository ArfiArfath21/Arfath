"use client"
import { motion } from 'framer-motion'
import * as React from 'react'
import { scaleFromBase, useMotionFactor } from '@/components/motion/use-motion-factor'

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  once?: boolean
  y?: number
  scaleFrom?: number
  margin?: string
  amount?: number | 'some' | 'all'
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  once = true,
  y = 18,
  scaleFrom = 1,
  margin = '-80px',
  amount = 0.2,
  className,
}: FadeInProps) {
  const { prefersReducedMotion, factor } = useMotionFactor(0.6)
  const initialOpacity = prefersReducedMotion ? 1 : 0
  const initialY = prefersReducedMotion ? 0 : y * factor
  const initialScale = prefersReducedMotion ? 1 : scaleFromBase(scaleFrom, 1, factor)
  const transitionDuration = prefersReducedMotion ? 0 : 0.55

  return (
    <motion.div
      className={className}
      data-reveal-motion
      initial={{ opacity: initialOpacity, y: initialY, scale: initialScale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once, margin, amount }}
      transition={{ duration: transitionDuration, ease: [0.22, 1, 0.36, 1], delay }}
      style={prefersReducedMotion ? undefined : { willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}

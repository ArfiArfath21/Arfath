"use client"

import * as React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type MotionStyle,
  type MotionValue,
} from 'framer-motion'
import { scaleFromBase, useMotionFactor } from '@/components/motion/use-motion-factor'

type NumberRange = [number, number]
type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>['offset']

type ScrollParallaxBaseProps = Omit<HTMLMotionProps<'div'>, 'children' | 'style'> & {
  children?: React.ReactNode
  y?: NumberRange
  opacity?: NumberRange
  scale?: NumberRange
  mobileMultiplier?: number
  style?: React.CSSProperties
}

type ScrollParallaxFromProgressProps = ScrollParallaxBaseProps & {
  progress: MotionValue<number>
  targetRef?: never
  offset?: never
}

type ScrollParallaxTrackedProps = ScrollParallaxBaseProps & {
  progress?: never
  targetRef?: React.RefObject<HTMLElement | null>
  offset?: ScrollOffset
}

export type ScrollParallaxProps =
  | ScrollParallaxFromProgressProps
  | ScrollParallaxTrackedProps

function adjustRange(range: NumberRange | undefined, base: number, factor: number) {
  if (!range) return undefined

  return [scaleFromBase(range[0], base, factor), scaleFromBase(range[1], base, factor)]
}

function useParallaxStyle({
  progress,
  y,
  opacity,
  scale,
  mobileMultiplier = 0.55,
  style,
}: {
  progress: MotionValue<number>
  y?: NumberRange
  opacity?: NumberRange
  scale?: NumberRange
  mobileMultiplier?: number
  style?: React.CSSProperties
}) {
  const { prefersReducedMotion, factor } = useMotionFactor(mobileMultiplier)
  const yValue = useTransform(progress, [0, 1], adjustRange(y, 0, factor) ?? [0, 0])
  const opacityValue = useTransform(
    progress,
    [0, 1],
    adjustRange(opacity, 1, factor) ?? [1, 1]
  )
  const scaleValue = useTransform(progress, [0, 1], adjustRange(scale, 1, factor) ?? [1, 1])

  return {
    prefersReducedMotion,
    motionStyle: {
      ...(style ?? {}),
      ...(y ? { y: yValue } : null),
      ...(opacity ? { opacity: opacityValue } : null),
      ...(scale ? { scale: scaleValue } : null),
      ...(prefersReducedMotion ? null : { willChange: 'transform, opacity' }),
    } satisfies MotionStyle,
  }
}

function ScrollParallaxFromProgress({
  children,
  className,
  progress,
  y,
  opacity,
  scale,
  mobileMultiplier = 0.55,
  style,
  ...props
}: ScrollParallaxFromProgressProps) {
  const { motionStyle } = useParallaxStyle({
    progress,
    y,
    opacity,
    scale,
    mobileMultiplier,
    style,
  })

  return (
    <motion.div className={className} style={motionStyle} data-scroll-parallax {...props}>
      {children}
    </motion.div>
  )
}

function ScrollParallaxTracked({
  children,
  className,
  targetRef,
  offset = ['start end', 'end start'] as ScrollOffset,
  y,
  opacity,
  scale,
  mobileMultiplier = 0.55,
  style,
  ...props
}: ScrollParallaxTrackedProps) {
  const localRef = React.useRef<HTMLDivElement | null>(null)
  const scrollTarget = targetRef ?? localRef
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset,
    layoutEffect: false,
  })
  const { motionStyle } = useParallaxStyle({
    progress: scrollYProgress,
    y,
    opacity,
    scale,
    mobileMultiplier,
    style,
  })

  return (
    <motion.div
      ref={targetRef ? undefined : localRef}
      className={className}
      style={motionStyle}
      data-scroll-parallax
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function ScrollParallax(props: ScrollParallaxProps) {
  if ('progress' in props && props.progress) {
    return <ScrollParallaxFromProgress {...props} />
  }

  return <ScrollParallaxTracked {...props} />
}

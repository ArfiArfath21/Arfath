"use client"

import * as React from 'react'

export function scaleFromBase(value: number, base: number, factor: number) {
  return base + (value - base) * factor
}

export function useMotionFactor(mobileMultiplier = 0.55) {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)')
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setIsMobile(mobileQuery.matches)
      setPrefersReducedMotion(reduceQuery.matches)
    }

    update()

    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', update)
      reduceQuery.addEventListener('change', update)

      return () => {
        mobileQuery.removeEventListener('change', update)
        reduceQuery.removeEventListener('change', update)
      }
    }

    mobileQuery.addListener(update)
    reduceQuery.addListener(update)

    return () => {
      mobileQuery.removeListener(update)
      reduceQuery.removeListener(update)
    }
  }, [])

  return {
    prefersReducedMotion,
    factor: prefersReducedMotion ? 0 : isMobile ? mobileMultiplier : 1,
  }
}

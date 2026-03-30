import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

/**
 * Animated number counter that fires when scrolled into view.
 * Uses easeOutExpo for a punchy, decelerating count.
 */
export function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (!isInView) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = (now - start) / (duration * 1000)
      const progress = Math.min(elapsed, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const current = Math.round(eased * target)
      setDisplay(current.toLocaleString('en-IN'))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, target, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  )
}

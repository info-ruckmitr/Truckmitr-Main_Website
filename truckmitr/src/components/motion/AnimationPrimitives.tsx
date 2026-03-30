import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  /** How many px to shift, default 80 */
  offset?: number
}

/**
 * Wraps children in a smooth parallax layer that shifts
 * based on scroll position. Creates depth & premium feel.
 */
export function ParallaxSection({
  children,
  className,
  offset = 80,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

/**
 * Floating elements that gently bob up and down — adds life.
 */
export function FloatingElement({
  children,
  className,
  delay = 0,
  duration = 5,
  distance = 12,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-distance, distance, -distance],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Text that reveals character by character.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const words = text.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
        hidden: {},
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: '0%',
                opacity: 1,
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </motion.span>
  )
}

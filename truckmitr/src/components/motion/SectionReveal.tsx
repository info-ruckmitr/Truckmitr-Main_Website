import { motion } from 'framer-motion'
import {
  fadeUp,
  fadeUpClassic,
  stagger,
  staggerClassic,
} from '../../lib/animations'
import { cn } from '../../lib/utils'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  /** Slower, editorial motion */
  classic?: boolean
}

export function SectionReveal({
  children,
  className,
  classic = false,
}: SectionRevealProps) {
  const st = classic ? staggerClassic : stagger
  const fu = classic ? fadeUpClassic : fadeUp
  return (
    <motion.div
      variants={st}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('w-full', className)}
    >
      <motion.div variants={fu}>{children}</motion.div>
    </motion.div>
  )
}

export function StaggerSection({
  children,
  className,
  classic = false,
}: SectionRevealProps) {
  const st = classic ? staggerClassic : stagger
  return (
    <motion.div
      variants={st}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('w-full', className)}
    >
      {children}
    </motion.div>
  )
}

export function FadeItem({
  children,
  className,
  classic = false,
}: SectionRevealProps) {
  const fu = classic ? fadeUpClassic : fadeUp
  return (
    <motion.div variants={fu} className={className}>
      {children}
    </motion.div>
  )
}

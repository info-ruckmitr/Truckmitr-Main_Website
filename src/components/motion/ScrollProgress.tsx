import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Tricolor scroll progress bar fixed to top of viewport.
 * Reads page scroll and fills left→right with saffron-white-green.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
      }}
    />
  )
}

import { motion, useReducedMotion } from 'framer-motion'

export function HeroBanner() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="h-full w-full"
          initial={false}
          animate={reduceMotion ? {} : { scale: [1, 1.05] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{ willChange: 'transform' }}
        >
          <img
            src="/hero-truck-front.png"
            alt=""
            className="h-full w-full object-cover object-[60%_40%]"
            decoding="async"
            fetchPriority="high"
          />
        </motion.div>
      </div>

      {/* Left text-readable zone — subtle dark gradient so white text pops */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent md:via-black/35 md:to-black/10"
        aria-hidden
      />
      {/* Bottom fade for clean section transition */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
        aria-hidden
      />
      {/* Subtle warm tint */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/10 to-[#138808]/5"
        aria-hidden
      />
    </div>
  )
}

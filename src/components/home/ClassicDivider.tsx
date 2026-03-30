import { motion } from 'framer-motion'

export function ClassicDivider() {
  return (
    <div className="flex items-center justify-center gap-5 py-6">
      <motion.div
        className="h-px max-w-[140px] flex-1 bg-gradient-to-r from-transparent via-[#b8860b]/50 to-[#b8860b]/30"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'right' }}
      />
      <motion.span
        className="font-display text-[13px] text-[#b8860b]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.5 }}
        aria-hidden
      >
        ✦
      </motion.span>
      <motion.div
        className="h-px max-w-[140px] flex-1 bg-gradient-to-l from-transparent via-[#b8860b]/50 to-[#b8860b]/30"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}

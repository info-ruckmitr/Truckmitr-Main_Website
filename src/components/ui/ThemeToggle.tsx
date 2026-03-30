import { motion } from 'framer-motion'
import { Palette, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isRoyal = theme === 'royal-blue'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'font-display inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em]',
        'border-[#e8e0d5] bg-white text-[var(--text-muted)]',
        'hover:border-[#b8860b]/50 hover:text-[var(--text-primary)] transition-colors',
      )}
      aria-label={isRoyal ? 'Switch to warm light theme' : 'Switch to cool light theme'}
    >
      {isRoyal ? (
        <>
          <Palette className="h-4 w-4 text-[#0055A4]" aria-hidden />
          <span>Cool light</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4 text-[#FF9933]" aria-hidden />
          <span>Warm light</span>
        </>
      )}
    </motion.button>
  )
}

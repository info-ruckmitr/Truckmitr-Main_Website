import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

type Variant =
  | 'whatsapp'
  | 'saffron'
  | 'fleet'
  | 'oem'
  | 'green'
  | 'outline'
  | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: Variant
  size?: Size
  as?: 'button' | 'a'
  href?: string
  to?: string
  children?: React.ReactNode
}

const variants: Record<Variant, string> = {
  whatsapp:
    'bg-[#25D366] hover:bg-[#20B858] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)]',
  saffron:
    'bg-[#FF9933] hover:bg-[#F28500] text-white shadow-[0_4px_20px_rgba(255,153,51,0.30)]',
  fleet: 'bg-[#0055A4] hover:bg-[#004488] text-white shadow-[0_4px_20px_rgba(0,85,164,0.30)]',
  oem: 'bg-[#138808] hover:bg-[#0F6E06] text-white shadow-[0_4px_20px_rgba(19,136,8,0.30)]',
  green: 'bg-[#138808] hover:bg-[#0F6E06] text-white',
  outline:
    'border border-slate-300 bg-white/90 text-[var(--text-primary)] hover:bg-slate-50 hover:border-slate-400 shadow-sm',
  ghost:
    'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-slate-100/80',
}
const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg gap-1.5',
  md: 'px-6 py-3 text-base rounded-xl gap-2',
  lg: 'px-8 py-4 text-lg rounded-xl gap-2.5',
}

const MotionLink = motion(Link)

export function Button({
  variant = 'saffron',
  size = 'md',
  className,
  children,
  href,
  to,
  as = 'button',
  ...props
}: ButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className,
  )
  if (to) {
    return (
      <MotionLink
        to={to}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={cls}
      >
        {children}
      </MotionLink>
    )
  }
  if (as === 'a' || href) {
    return (
      <motion.a
        href={href ?? '#'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={cls}
      >
        {children}
      </motion.a>
    )
  }
  return (
    <motion.button
      type="button"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={cls}
      {...props}
    >
      {children}
    </motion.button>
  )
}

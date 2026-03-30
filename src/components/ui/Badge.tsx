import { cn } from '../../lib/utils'

type BadgeVariant = 'default' | 'green' | 'purple' | 'blue' | 'saffron'

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-slate-100 text-[var(--text-secondary)]',
  green: 'bg-[#138808]/15 text-[#138808]',
  purple: 'bg-[#138808]/15 text-[#138808]',
  blue: 'bg-[#0055A4]/15 text-[#0055A4]',
  saffron: 'bg-[#FF9933]/15 text-[#FF9933]',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

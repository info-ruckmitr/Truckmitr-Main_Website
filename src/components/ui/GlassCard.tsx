import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  /** Enable hover lift & shadow. Defaults true. */
  hover?: boolean
  /** Top-border accent color */
  accentColor?: string
}

export function GlassCard({
  children,
  className,
  hover = true,
  accentColor,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-sm border p-6 backdrop-blur-xl',
        hover
          ? 'shadow-sm transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.10)]'
          : 'shadow-sm',
        className,
      )}
      style={{
        background: 'var(--bg-card)',
        borderColor: 'var(--border)',
        borderTopColor: accentColor || 'var(--border)',
        borderTopWidth: accentColor ? '3px' : '1px',
      }}
    >
      {children}
    </div>
  )
}

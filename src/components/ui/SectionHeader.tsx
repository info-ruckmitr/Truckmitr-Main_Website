import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  label?: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  className?: string
  titleClassName?: string
  align?: 'left' | 'center'
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  titleClassName,
  align = 'center',
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 md:mb-14',
        align === 'center' && 'text-center max-w-4xl mx-auto',
        className,
      )}
    >
      {label && (
        <p className="text-sm font-semibold tracking-wide text-[var(--text-muted)] mb-3">
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl font-black text-[var(--text-primary)]',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[17px] text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

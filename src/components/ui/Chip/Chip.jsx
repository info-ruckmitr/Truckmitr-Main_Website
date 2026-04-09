import { cn } from '@utils/cn'
import { X } from 'lucide-react'
import styles from './Chip.module.css'

export default function Chip({ children, selected, onRemove, className, onClick, ...rest }) {
  return (
    <button
      type="button"
      className={cn(styles.chip, selected && styles.selected, className)}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
      {onRemove && (
        <span
          className={styles.remove}
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              e.stopPropagation()
              onRemove()
            }
          }}
        >
          <X size={14} aria-hidden />
        </span>
      )}
    </button>
  )
}

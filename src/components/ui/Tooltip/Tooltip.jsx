import { useId, useState } from 'react'
import { cn } from '@utils/cn'
import styles from './Tooltip.module.css'

export default function Tooltip({ children, content, className }) {
  const id = useId()
  const [open, setOpen] = useState(false)

  return (
    <span
      className={cn(styles.wrap, className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span
        className={styles.trigger}
        aria-describedby={open ? id : undefined}
        tabIndex={0}
      >
        {children}
      </span>
      {open && content && (
        <span id={id} role="tooltip" className={styles.tip}>
          {content}
        </span>
      )}
    </span>
  )
}

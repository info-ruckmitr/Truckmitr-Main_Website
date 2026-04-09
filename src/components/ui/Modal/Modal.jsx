import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@utils/cn'
import styles from './Modal.module.css'

export default function Modal({ open, onClose, title, children, className }) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null

  return createPortal(
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby={title ? 'modal-title' : undefined}>
      <button type="button" className={styles.backdrop} aria-label="Close dialog" onClick={onClose} />
      <div className={cn(styles.panel, className)}>
        <div className={styles.head}>
          {title && (
            <h2 id="modal-title" className={styles.title}>
              {title}
            </h2>
          )}
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <X size={22} />
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>,
    document.body,
  )
}

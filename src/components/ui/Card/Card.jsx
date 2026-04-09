import { cn } from '@utils/cn'
import styles from './Card.module.css'

export default function Card({
  children,
  variant = 'default',
  className,
  headerImage,
  icon,
  footer,
  hoverLift = true,
  saffronAccent = false,
  ...rest
}) {
  return (
    <div
      className={cn(
        styles.card,
        styles[variant],
        hoverLift && styles.hoverLift,
        saffronAccent && styles.saffronAccent,
        className,
      )}
      {...rest}
    >
      {headerImage && <div className={styles.headerImage}>{headerImage}</div>}
      {icon && <div className={styles.iconWrap}>{icon}</div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}

import { cn } from '@utils/cn'
import styles from './Badge.module.css'

export default function Badge({ children, variant = 'default', className }) {
  return <span className={cn(styles.badge, styles[variant], className)}>{children}</span>
}

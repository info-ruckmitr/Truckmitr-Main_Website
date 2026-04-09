import { cn } from '@utils/cn'
import styles from './Divider.module.css'

export default function Divider({ className, tricolor }) {
  return (
    <hr
      className={cn(styles.divider, tricolor && styles.tricolor, className)}
      role="presentation"
    />
  )
}

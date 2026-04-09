import { cn } from '@utils/cn'
import styles from './Tag.module.css'

export default function Tag({ children, className }) {
  return <span className={cn(styles.tag, className)}>{children}</span>
}

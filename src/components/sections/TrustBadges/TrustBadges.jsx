import { ShieldCheck, Truck, Award } from 'lucide-react'
import styles from './TrustBadges.module.css'

const badges = [
  { icon: ShieldCheck, label: 'Verified ecosystem' },
  { icon: Truck, label: 'Nationwide routes' },
  { icon: Award, label: 'MoRTH-aligned training' },
]

export default function TrustBadges() {
  return (
    <ul className={styles.list}>
      {badges.map((b) => {
        const Icon = b.icon
        return (
          <li key={b.label} className={styles.item}>
            <Icon className={styles.icon} size={22} aria-hidden />
            <span>{b.label}</span>
          </li>
        )
      })}
    </ul>
  )
}

import { homeStats } from '@data/stats'
import AnimatedCounter from '@components/shared/AnimatedCounter/AnimatedCounter'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './StatsRow.module.css'

export default function StatsRow() {
  return (
    <ScrollReveal className={styles.wrap}>
      <div className="container">
        <div className={styles.grid}>
          {homeStats.map((s) => (
            <div key={s.id} className={styles.cell}>
              <div className={styles.accent} aria-hidden />
              <p className={styles.num}>
                <AnimatedCounter end={s.end} suffix={s.suffix} />
              </p>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  )
}

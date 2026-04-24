import { homeStats, homeStatsTagline } from '@data/homeContent'
import AnimatedCounter from '@components/shared/AnimatedCounter/AnimatedCounter'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './HomeStats.module.css'

export default function HomeStats() {
  return (
    <ScrollReveal className={styles.wrap}>
      <div className="container" style={{ paddingTop: 0 }}>
        <div className={styles.grid} role="list">
          {homeStats.map((s) => (
            <div key={s.id} className={styles.cell} role="listitem">
              <p className={styles.num}>
                <AnimatedCounter end={s.end} suffix={s.suffix} shimmer />
              </p>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.tagline}>
          <span className={styles.taglineBar} aria-hidden />
          {homeStatsTagline}
        </p>
      </div>
    </ScrollReveal>
  )
}

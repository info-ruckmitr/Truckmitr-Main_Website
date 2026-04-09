import { fleetStatsSection } from '@data/fleetContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from '../Fleet.module.css'

export default function FleetStats() {
  return (
    <section className={styles.statsSection} aria-labelledby="fleet-stats-title">
      <div className="container">
        <ScrollReveal>
          <header className={styles.statsHead}>
            <span className={styles.statsLabel}>{fleetStatsSection.label}</span>
            <h2 id="fleet-stats-title" className={styles.statsTitle}>
              {fleetStatsSection.title}
            </h2>
          </header>
        </ScrollReveal>
        <div className={styles.statsGrid}>
          {fleetStatsSection.stats.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.05}>
              <article className={`${styles.statCard} hover-lift`}>
                <div className={styles.statValue}>{s.value}</div>
                <h3 className={styles.statCardTitle}>{s.title}</h3>
                <p className={styles.statBody}>{s.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

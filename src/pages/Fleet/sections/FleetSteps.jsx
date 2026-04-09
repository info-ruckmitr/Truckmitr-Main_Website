import { fleetStepsSection } from '@data/fleetContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from '../Fleet.module.css'

export default function FleetSteps() {
  return (
    <section className={styles.stepsSection}>
      <div className="container">
        <ScrollReveal>
          <header className={styles.stepsHead}>
            <span className={styles.sLabel}>{fleetStepsSection.label}</span>
            <h2 className={styles.stepsTitle}>{fleetStepsSection.title}</h2>
          </header>
        </ScrollReveal>
        <div className={styles.stepsGrid}>
          {fleetStepsSection.steps.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.06}>
              <div className={`${styles.stepCard} hover-lift`}>
                <div className={styles.stepNum}>{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

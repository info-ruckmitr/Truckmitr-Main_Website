import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { driversSteps } from '@data/driversContent'
import styles from '../Drivers.module.css'

export default function DriversJourney() {
  return (
    <section className={styles.stepsSection} aria-labelledby="drivers-steps-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.stepsHead}>
            <span className={styles.sLabel}>{driversSteps.label}</span>
            <h2 id="drivers-steps-heading" className={styles.stepsTitle}>
              {driversSteps.title}
            </h2>
          </header>
        </ScrollReveal>
        <div className={styles.stepsGrid}>
          {driversSteps.steps.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.07}>
              <article className={styles.stepCard}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

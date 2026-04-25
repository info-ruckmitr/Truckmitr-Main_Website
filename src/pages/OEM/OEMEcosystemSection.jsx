import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { oemEcosystemSection } from '@data/oemPageContent'
import styles from './OEM.module.css'

export default function OEMEcosystemSection() {
  return (
    <section className={styles.ecoSection} aria-labelledby="oem-eco-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.ecoHead}>
            <span className={styles.ecoLabel}>{oemEcosystemSection.label}</span>
            <h2 id="oem-eco-heading" className={styles.ecoTitle}>
              {oemEcosystemSection.title}
            </h2>
            <p className={styles.ecoSub}>{oemEcosystemSection.sub}</p>
          </header>
        </ScrollReveal>
        <div className={styles.ecoGrid}>
          {oemEcosystemSection.cards.map((c, i) => (
            <ScrollReveal key={c.n} delay={i * 0.06} style={{ height: '100%' }}>
              <article className={styles.ecoCard}>
                <div className={styles.ecoNum}>{c.n}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { oemWhySection } from '@data/oemPageContent'
import styles from './OEM.module.css'

export default function OEMWhySection() {
  return (
    <section className={styles.whySection} aria-labelledby="oem-why-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.sectionHead}>
            <span className={styles.sLabel}>{oemWhySection.label}</span>
            <h2 id="oem-why-heading" className={styles.sTitle}>
              {oemWhySection.title}
            </h2>
            <p className={styles.sSub}>{oemWhySection.sub}</p>
          </header>
        </ScrollReveal>
        <div className={styles.whyGrid}>
          {oemWhySection.cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.05} style={{ height: '100%' }}>
              <article className={`${styles.whyCard} hover-lift`}>
                <div className={`${styles.whyIcon} ${i % 2 === 0 ? styles.whyIconOrange : styles.whyIconGreen} card-icon`}>
                  {c.icon}
                </div>
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

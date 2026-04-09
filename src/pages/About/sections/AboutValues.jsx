import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { aboutValues } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutValues() {
  return (
    <section className={styles.values} aria-labelledby="about-values-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.sectionHead}>
            <span className={styles.sLabel}>{aboutValues.label}</span>
            <h2 id="about-values-heading" className={styles.sTitle}>
              {aboutValues.title}
            </h2>
          </header>
        </ScrollReveal>
        <div className={styles.valuesGrid}>
          {aboutValues.cards.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.05}>
              <motion.article
                className={`${styles.valueCard} hover-lift`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div
                  className={`${styles.valueIcon} ${
                    c.variant === 'green' ? styles.valueIconGreen : styles.valueIconOrange
                  } card-icon`}
                >
                  {c.icon}
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

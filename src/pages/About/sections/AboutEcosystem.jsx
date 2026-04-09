import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { aboutEcosystem } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutEcosystem() {
  return (
    <section className={styles.eco} aria-labelledby="about-eco-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.ecoHead}>
            <span className={styles.ecoLabel}>{aboutEcosystem.label}</span>
            <h2 id="about-eco-heading" className={styles.ecoTitle}>
              {aboutEcosystem.title}
            </h2>
            <p className={styles.ecoSub}>{aboutEcosystem.sub}</p>
          </header>
        </ScrollReveal>
        <div className={styles.ecoGrid}>
          {aboutEcosystem.cards.map((c, i) => (
            <ScrollReveal key={c.n} delay={i * 0.06}>
              <motion.article
                className={styles.ecoCard}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 26 }}
              >
                <div className={styles.ecoNum}>{c.n}</div>
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

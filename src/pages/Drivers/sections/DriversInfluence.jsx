import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { driversInfluence } from '@data/driversContent'
import styles from '../Drivers.module.css'

export default function DriversInfluence() {
  return (
    <section className={styles.infSection} aria-labelledby="drivers-inf-heading">
      <div className="container">
        <div className={styles.infGrid}>
          <ScrollReveal>
            <motion.div
              className={styles.infCard}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <div className={styles.infEmoji} aria-hidden>
                📊
              </div>
              <h3>{driversInfluence.cardTitle}</h3>
              <p className={styles.infCardBody}>{driversInfluence.cardBody}</p>
              <div className={styles.infTiers}>
                {driversInfluence.tiers.map((t) => (
                  <div key={t.label} className={styles.infTier}>
                    <div className={styles.infTierIcon}>{t.icon}</div>
                    <div className={styles.infTierLab}>{t.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left">
            <div>
              <span className={styles.sLabel}>{driversInfluence.label}</span>
              <h2 id="drivers-inf-heading" className={styles.infTitle}>
                {driversInfluence.title}
              </h2>
              <p className={styles.infBody}>{driversInfluence.body}</p>
              <ul className={styles.infList}>
                {driversInfluence.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

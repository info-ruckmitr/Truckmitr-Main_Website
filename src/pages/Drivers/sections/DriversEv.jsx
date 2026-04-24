import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { driversEv } from '@data/driversContent'
import { IMAGES } from '@utils/constants'
import styles from '../Drivers.module.css'

export default function DriversEv() {
  return (
    <section className={styles.evSection} aria-labelledby="drivers-ev-heading">
      <div className="container">
        <div className={styles.evGrid}>
          <ScrollReveal>
            <div>
              <span className={styles.sLabel}>{driversEv.label}</span>
              <h2 id="drivers-ev-heading" className={styles.evTitle}>
                {driversEv.title}
              </h2>
              <p className={styles.evBody}>{driversEv.body}</p>
              <ul className={styles.evList}>
                {driversEv.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button type="button" className={styles.evBtn} disabled title="Coming soon">
                {driversEv.ctaLabel}
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
                <img src={IMAGES.oemFeatEv} alt="EV Training" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
              <motion.div
                className={styles.evSide}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <div className={styles.evEmoji} aria-hidden>
                ⚡
              </div>
              <h3>{driversEv.sideTitle}</h3>
              <div className={styles.evStats}>
                {driversEv.stats.map((s) => (
                  <div key={s.value} className={styles.evStat}>
                    <div className={styles.evStatVal}>{s.value}</div>
                    <div className={styles.evStatLab}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

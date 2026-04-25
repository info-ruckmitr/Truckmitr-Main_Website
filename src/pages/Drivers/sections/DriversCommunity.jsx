import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeCommunity } from '@data/homeContent'
import styles from '../Drivers.module.css'

export default function DriversCommunity() {
  return (
    <section className={styles.evSection} aria-labelledby="drivers-community-heading">
      <div className="container">
        <div className={styles.evGrid}>
          {/* Left Side */}
          <ScrollReveal>
            <div>
              <span className={styles.sLabel}>{homeCommunity.label}</span>
              <h2 id="drivers-community-heading" className={styles.evTitle}>
                <span style={{ color: 'var(--saffron)' }}>{homeCommunity.titleLine1}</span>{' '}
                {homeCommunity.titleLine2}
              </h2>
              {homeCommunity.body.map((para, i) => (
                <p key={i} className={styles.evBody} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
              <a 
                href={homeCommunity.cta.href} 
                className={styles.heroPrimary}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 'var(--space-4)', display: 'inline-flex' }}
              >
                {homeCommunity.cta.label}
              </a>
            </div>
          </ScrollReveal>

          {/* Right Side */}
          <ScrollReveal variant="fade-left">
            <motion.div
              className={styles.evSide}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{ background: 'linear-gradient(135deg, var(--india-green), var(--dark))' }}
            >
              <div className={styles.evEmoji} aria-hidden>
                📢
              </div>
              <h3>What Drivers Talk About</h3>
              <ul className={styles.evList} style={{ marginTop: '24px' }}>
                {homeCommunity.features.map((f) => (
                  <li key={f.id} style={{ color: 'var(--white)', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.2rem', marginRight: '4px' }}>{f.icon}</span> 
                    {f.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

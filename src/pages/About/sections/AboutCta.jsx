import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { aboutCta } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutCta() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.ctaBand} aria-labelledby="about-cta-title">
      <div className="container">
        <motion.div
          className={styles.ctaInner}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <h2 id="about-cta-title" className={styles.ctaTitle}>
            {aboutCta.title}
          </h2>
          <p className={styles.ctaSub}>{aboutCta.sub}</p>
          <div className={styles.ctaActions}>
            <Link to={aboutCta.primary.to} className={styles.ctaPrimary}>
              {aboutCta.primary.label}
            </Link>
            <Link to={aboutCta.secondary.to} className={styles.ctaSecondary}>
              {aboutCta.secondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

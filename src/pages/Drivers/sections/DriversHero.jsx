import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { IMAGES } from '@utils/constants'
import { driversHero } from '@data/driversContent'
import styles from '../Drivers.module.css'

export default function DriversHero() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.hero} aria-labelledby="drivers-hero-title">
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${IMAGES.driversHeroBg})` }}
        aria-hidden
      />
      <div className={styles.heroOverlay} aria-hidden />
      <div className="container">
        <motion.div
          className={styles.heroInner}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className={styles.heroBadge}>
            <span className={styles.heroDot} aria-hidden />
            {driversHero.eyebrow}
          </p>
          <h1 id="drivers-hero-title" className={styles.heroTitle}>
            {driversHero.titleLine1}
            <br />
            <span className={styles.heroAccent}>{driversHero.titleAccent}</span>
          </h1>
          <p className={styles.heroSub}>{driversHero.sub}</p>
          <div className={styles.heroCtas}>
            <Link to={driversHero.primary.to} className={styles.heroPrimary}>
              {driversHero.primary.label}
            </Link>
            <button type="button" className={styles.heroSecondary} disabled title="Coming soon">
              {driversHero.secondary.label}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

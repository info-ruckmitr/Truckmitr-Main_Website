import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '@utils/constants'
import { fleetHero } from '@data/fleetContent'
import styles from '../Fleet.module.css'

export default function FleetHero() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.hero} aria-labelledby="fleet-hero-title">
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${IMAGES.fleetHeroBg})` }}
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
            {fleetHero.eyebrow}
          </p>
          <h1 id="fleet-hero-title" className={styles.heroTitle}>
            {fleetHero.titleLine1}
            <br />
            <span className={styles.heroAccent}>{fleetHero.titleAccent}</span>
          </h1>
          <p className={styles.heroSub}>{fleetHero.sub}</p>
          <div className={styles.heroCtas}>
            <Link className={styles.heroPrimary} to={fleetHero.primaryCta.to}>
              {fleetHero.primaryCta.label}
            </Link>
            <span
              className={styles.heroSecondary}
              role="button"
              tabIndex={-1}
              aria-disabled="true"
            >
              {fleetHero.secondaryCta.label}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

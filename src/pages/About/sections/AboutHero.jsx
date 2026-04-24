import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES } from '@utils/constants'
import { aboutHero } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutHero() {
  const reduce = useReducedMotion()
  const [geoState, setGeoState] = useState('DEFAULT')

  // Simulate Geo-IP detection (swaps by detected state)
  useEffect(() => {
    // For demonstration, defaulting to UP instead of generic. 
    // In production, an IP-lookup service would set this state (e.g. MH, RJ, PB_HR)
    setGeoState('UP')
  }, [])

  const subline = aboutHero.geoSubs[geoState] || aboutHero.sub

  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url(${IMAGES.truckHighway})` }}
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
            {aboutHero.eyebrow}
          </p>
          <h1 id="about-hero-title" className={styles.heroTitle}>
            {aboutHero.titleLine1}{' '}
            <span className={styles.heroAccent}>{aboutHero.titleAccent}</span>
            <br />
            {aboutHero.titleLine2}
          </h1>
          <p className={styles.heroSub}>{subline}</p>
        </motion.div>
      </div>
    </section>
  )
}

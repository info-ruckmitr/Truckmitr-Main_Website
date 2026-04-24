import { motion, useReducedMotion } from 'framer-motion'
import { IMAGES, WHATSAPP_URL } from '@utils/constants'
import { oemPageHero } from '@data/oemPageContent'
import Button from '@components/ui/Button/Button'
import styles from './OEM.module.css'

export default function OEMHero() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.pageHero} aria-labelledby="oem-hero-title">
      <div
        className={styles.pageHeroBg}
        style={{ backgroundImage: `url(${IMAGES.oemHeroBg})` }}
        aria-hidden
      />
      <div className={styles.pageHeroOverlay} aria-hidden />
      <div className="container">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className={styles.heroBadge}>
            <span className={styles.heroDot} aria-hidden />
            {oemPageHero.eyebrow}
          </p>
          <h1 id="oem-hero-title" className={styles.pageHeroTitle}>
            {oemPageHero.titleBefore}
            <br />
            <span className={styles.pageHeroAccent}>{oemPageHero.titleAccent}</span>
          </h1>
          <p className={styles.pageHeroSub}>{oemPageHero.sub}</p>
          <div className={styles.heroActions}>
            <a href={`#${oemPageHero.exploreId}`} className={styles.heroPrimary}>
              {oemPageHero.primaryLabel}
            </a>
            <Button href={WHATSAPP_URL} variant="white" size="lg" className={styles.heroSecondary}>
              {oemPageHero.secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeWhy } from '@data/homeContent'
import styles from './HomeWhy.module.css'

export default function HomeWhy() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <span className={styles.label}>{homeWhy.label}</span>
            <h2 id="why-heading" className={styles.title}>
              {homeWhy.title}
            </h2>
            <p className={styles.sub}>{homeWhy.sub}</p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {homeWhy.tiles.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.05}>
              <motion.article
                className={styles.tile}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div
                  className={`${styles.icon} ${t.iconVariant === 'green' ? styles.iconGreen : styles.iconOrange} card-icon`}
                >
                  {t.icon}
                </div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

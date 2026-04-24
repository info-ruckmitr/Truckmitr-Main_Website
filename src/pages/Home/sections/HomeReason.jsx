import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeReason } from '@data/homeContent'
import styles from './HomeReason.module.css'

export default function HomeReason() {
  return (
    <section className={styles.section} aria-labelledby="reason-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <span className={styles.label}>{homeReason.label}</span>
            <h2 id="reason-heading" className={styles.title}>
              {homeReason.title}
            </h2>
            <p className={styles.sub}>{homeReason.body}</p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {homeReason.cards.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.05}>
              <motion.article
                className={styles.card}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div className={styles.icon}>
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

import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homePlatform } from '@data/homeContent'
import Button from '@components/ui/Button/Button'
import styles from './HomePlatform.module.css'

export default function HomePlatform() {
  return (
    <section className={styles.section} aria-labelledby="platform-heading">
      <div className="container">
        <ScrollReveal>
          <header className={styles.head}>
            <span className={styles.label}>{homePlatform.label}</span>
            <h2 id="platform-heading" className={styles.title}>
              {homePlatform.title}
            </h2>
            <p className={styles.sub}>{homePlatform.sub}</p>
          </header>
        </ScrollReveal>

        <div className={styles.grid}>
          {homePlatform.cards.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.06}>
              <motion.article
                className={styles.card}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div
                  className={`${styles.icon} ${c.iconVariant === 'green' ? styles.iconGreen : styles.iconOrange} card-icon`}
                >
                  {c.icon}
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <Button to={c.to} variant="outline" size="sm" className={styles.cta}>
                  {c.cta}
                </Button>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

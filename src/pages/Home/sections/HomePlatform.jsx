import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homePlatform } from '@data/homeContent'
import Button from '@components/ui/Button/Button'
import styles from './HomePlatform.module.css'

export default function HomePlatform() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (offsetWidth * 0.8)) // 0.8 is roughly the card width factor
    setActiveIdx(Math.min(index, homePlatform.cards.length - 1))
  }

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

        <div className={styles.grid} ref={scrollRef} onScroll={handleScroll}>
          {homePlatform.cards.map((c, i) => (
            <ScrollReveal key={c.id} delay={i * 0.06} className={styles.cardWrap}>
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

        {/* Carousel indicators for mobile */}
        <div className={styles.indicators}>
          {homePlatform.cards.map((_, i) => (
            <div
              key={i}
              className={`${styles.dot} ${activeIdx === i ? styles.dotActive : ''}`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  )
}

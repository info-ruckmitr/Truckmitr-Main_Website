import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeWhy } from '@data/homeContent'
import styles from './HomeWhy.module.css'

export default function HomeWhy() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (offsetWidth * 0.75)) // 0.75 is roughly the tile width factor
    setActiveIdx(Math.min(index, homeWhy.tiles.length - 1))
  }

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

        <div className={styles.grid} ref={scrollRef} onScroll={handleScroll}>
          {homeWhy.tiles.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.05} className={styles.tileWrap}>
              <motion.article
                className={styles.tile}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div
                  className={`${styles.icon} ${
                    t.iconVariant === 'green' ? styles.iconGreen :
                    t.iconVariant === 'blue' ? styles.iconBlue :
                    t.iconVariant === 'purple' ? styles.iconPurple :
                    styles.iconOrange
                  } card-icon`}
                >
                  {t.icon}
                </div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>

        {/* Carousel indicators for mobile */}
        <div className={styles.indicators}>
          {homeWhy.tiles.map((_, i) => (
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

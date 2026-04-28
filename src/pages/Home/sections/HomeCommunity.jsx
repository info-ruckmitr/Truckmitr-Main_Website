import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import { homeCommunity } from '@data/homeContent'
import styles from './HomeCommunity.module.css'

export default function HomeCommunity() {
  const [activeIdx, setActiveIdx] = useState(0)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (offsetWidth * 0.8))
    setActiveIdx(Math.min(index, homeCommunity.features.length - 1))
  }

  return (
    <section className={styles.section} aria-labelledby="community-heading">
      <div className={`container ${styles.inner}`}>
        {/* ── Left: narrative copy ── */}
        <ScrollReveal className={styles.copy}>
          <span className={styles.label}>{homeCommunity.label}</span>
          <h2 id="community-heading" className={styles.title}>
            <span className={styles.titleAccent}>{homeCommunity.titleLine1}</span>
            {homeCommunity.titleLine2}
          </h2>

          {homeCommunity.body.map((para, i) => (
            <p key={i} className={styles.bodyPara} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <div className={styles.ctaWrap}>
            <Button
              {...(homeCommunity.cta.href ? { href: homeCommunity.cta.href, target: '_blank', rel: 'noopener noreferrer' } : { to: homeCommunity.cta.to })}
              variant="primary"
              size="lg"
            >
              {homeCommunity.cta.label}
            </Button>
          </div>
        </ScrollReveal>

        <div className={styles.featuresWrap}>
          <div className={styles.features} ref={scrollRef} onScroll={handleScroll}>
            {homeCommunity.features.map((f, i) => (
              <ScrollReveal
                key={f.id}
                delay={i * 0.07}
                className={styles.featureCardWrap}
              >
                <motion.div
                  className={styles.featureCard}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                >
                  <div className={styles.featureIcon}>{f.icon}</div>
                  <p className={styles.featureText}>
                    {f.text.includes(' — ') ? (
                      <>
                        <strong>{f.text.split(' — ')[0]}</strong>
                        {' ' + f.text.split(' — ')[1]}
                      </>
                    ) : (
                      f.text
                    )}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Carousel indicators for mobile */}
          <div className={styles.indicators}>
            {homeCommunity.features.map((_, i) => (
              <div
                key={i}
                className={`${styles.dot} ${activeIdx === i ? styles.dotActive : ''}`}
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

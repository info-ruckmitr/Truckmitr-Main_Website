import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { homeReason } from '@data/homeContent'
import styles from './HomeReason.module.css'

export default function HomeReason() {
  const scrollRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const pausedRef = useRef(false)
  const timerRef = useRef(null)
  const total = homeReason.cards.length

  // detect mobile
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // scroll to a specific index
  const scrollToIdx = useCallback((idx) => {
    const el = scrollRef.current
    if (!el) return
    const child = el.children[idx]
    if (child) {
      el.scrollTo({ left: child.offsetLeft - el.offsetLeft, behavior: 'smooth' })
    }
  }, [])

  // auto-advance
  useEffect(() => {
    if (!isMobile) return
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return
      setActiveIdx((prev) => {
        const next = (prev + 1) % total
        scrollToIdx(next)
        return next
      })
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [isMobile, total, scrollToIdx])

  // intersection observer to track active card
  useEffect(() => {
    if (!isMobile) return
    const container = scrollRef.current
    if (!container) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = Number(entry.target.dataset.reasonIdx)
            if (!isNaN(idx)) setActiveIdx(idx)
          }
        })
      },
      { root: container, threshold: 0.6 },
    )

    Array.from(container.children).forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [isMobile])

  // hold-to-pause handlers
  const onHold = () => { pausedRef.current = true }
  const onRelease = () => { pausedRef.current = false }

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

        <div
          className={styles.grid}
          ref={scrollRef}
          onPointerDown={onHold}
          onPointerUp={onRelease}
          onPointerLeave={onRelease}
        >
          {homeReason.cards.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.05} data-reason-idx={i}>
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

        {/* Dot indicators — mobile only */}
        {isMobile && (
          <div className={styles.dots}>
            {homeReason.cards.map((t, i) => (
              <button
                key={t.id}
                className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                onClick={() => {
                  scrollToIdx(i)
                  setActiveIdx(i)
                }}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

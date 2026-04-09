import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MotionPath = motion.path
import { ecosystemFlywheel } from '@data/offerings'
import styles from '../OEM.module.css'

export default function FlywheelSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.flywheel} ref={ref}>
      <svg className={styles.flySvg} viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden>
        <MotionPath
          d="M 80 200 C 300 80, 500 320, 600 200 S 900 80, 1120 200"
          fill="none"
          stroke="rgba(255,153,51,0.35)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
        />
      </svg>
      <div className="container">
        <h2 className={styles.flyTitle}>Ecosystem flywheel</h2>
        <div className={styles.flyGrid}>
          {ecosystemFlywheel.map((c) => (
            <article key={c.n} className={styles.flyCard}>
              <p className={styles.flyNum}>{c.n}</p>
              <h3>{c.title}</h3>
              <p style={{ marginTop: 'var(--space-2)', color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import Button from '@components/ui/Button/Button'
import { homeHero } from '@data/homeContent'
import { cn } from '@utils/cn'
import styles from './HomeHero.module.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}

/* Floating particle component */
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 10 + 12,
  }))

  return (
    <div className={styles.particles} aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function HomeHero() {
  const reduce = useReducedMotion()
  const line1Words = homeHero.titleLine1.split(' ')

  return (
    <section className={styles.section} aria-labelledby="home-hero-heading">
      <div className={styles.bg} aria-hidden>
        <img
          src={homeHero.image.src}
          alt=""
          className={styles.bgImg}
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
      </div>
      <div className={styles.overlay} aria-hidden />
      {!reduce && <FloatingParticles />}

      {/* Animated gradient line at top */}
      <div className={styles.gradientLine} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.p
            className={styles.badge}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.dotPulse} aria-hidden />
            {homeHero.eyebrow}
          </motion.p>

          <motion.h1 id="home-hero-heading" className={styles.heroTitle}>
            {reduce ? (
              <span className={styles.titleLine1}>{line1Words.join(' ')}</span>
            ) : (
              <motion.span
                className={styles.titleLine1}
                variants={container}
                initial="hidden"
                animate="show"
              >
                {line1Words.map((w) => (
                  <motion.span
                    key={w}
                    variants={item}
                    style={{ display: 'inline-block', marginRight: '0.35em' }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
            )}
            <motion.span
              className={styles.titleLine2}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : 0.28, ease: [0.4, 0, 0.2, 1] }}
            >
              {homeHero.titleLine2}
            </motion.span>
          </motion.h1>

          <motion.p
            className={styles.sub}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: reduce ? 0 : 0.4 }}
          >
            {homeHero.sub}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.5, duration: 0.4 }}
          >
            {homeHero.ctas.map((c, i) => (
              <motion.span
                key={c.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduce ? 0 : 0.55 + i * 0.06 }}
              >
                <Button
                  to={c.to}
                  variant={c.style === 'primary' ? 'primary' : 'white'}
                  size="lg"
                  className={cn(
                    c.style === 'glass' && styles.ctaGlass,
                    c.style === 'ghost' && styles.ctaGhost,
                  )}
                >
                  {c.label}
                </Button>
              </motion.span>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className={styles.trustRow}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduce ? 0 : 0.7, duration: 0.5 }}
          >
            <div className={styles.trustAvatars}>
              <span className={styles.trustAvatar}>🚛</span>
              <span className={styles.trustAvatar}>🚐</span>
              <span className={styles.trustAvatar}>⚡</span>
            </div>
            <span className={styles.trustText}>
              Trusted by <strong>10M+</strong> drivers across India
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden
      >
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span className={styles.scrollLabel}>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

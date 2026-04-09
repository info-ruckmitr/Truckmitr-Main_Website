import { motion, useReducedMotion } from 'framer-motion'
import Button from '@components/ui/Button/Button'
import { homeCta } from '@data/homeContent'
import { cn } from '@utils/cn'
import styles from './HomeCta.module.css'

export default function HomeCta() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.section} aria-labelledby="home-cta-heading">
      <div className={styles.pattern} aria-hidden />
      <div className="container">
        <motion.div
          className={styles.inner}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reduce ? 0 : 0.45, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 id="home-cta-heading" className={styles.title}>
            {homeCta.title}
          </h2>
          <p className={styles.sub}>{homeCta.sub}</p>
          <div className={styles.actions}>
            <Button to={homeCta.primary.to} variant="primary" size="lg" className={styles.primarySolid}>
              {homeCta.primary.label}
            </Button>
            <Button
              to={homeCta.secondary.to}
              variant="primary"
              size="lg"
              className={cn(styles.secondary)}
            >
              {homeCta.secondary.label}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

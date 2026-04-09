import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { driversCta } from '@data/driversContent'
import styles from '../Drivers.module.css'

export default function DriversCta() {
  const reduce = useReducedMotion()

  return (
    <section className={styles.driversCta} aria-labelledby="drivers-cta-title">
      <div className="container">
        <motion.div
          className={styles.driversCtaInner}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <h2 id="drivers-cta-title" className={styles.driversCtaTitle}>
            {driversCta.title}
          </h2>
          <p className={styles.driversCtaSub}>{driversCta.sub}</p>
          <Link to={driversCta.to} className={styles.driversCtaBtn}>
            {driversCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

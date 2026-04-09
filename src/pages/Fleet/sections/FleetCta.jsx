import { Link } from 'react-router-dom'
import { fleetCta } from '@data/fleetContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from '../Fleet.module.css'

export default function FleetCta() {
  return (
    <section className={styles.ctaBand} aria-labelledby="fleet-cta-title">
      <div className="container">
        <ScrollReveal>
          <div className={styles.ctaInner}>
            <h2 id="fleet-cta-title" className={styles.ctaTitle}>
              {fleetCta.title}
            </h2>
            <p className={styles.ctaSub}>{fleetCta.sub}</p>
            <Link className={styles.ctaPrimary} to={fleetCta.primary.to}>
              {fleetCta.primary.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

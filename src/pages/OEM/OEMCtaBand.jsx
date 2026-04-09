import { Link } from 'react-router-dom'
import { WHATSAPP_URL } from '@utils/constants'
import { oemPageCta } from '@data/oemPageContent'
import styles from './OEM.module.css'

export default function OEMCtaBand() {
  return (
    <section className={styles.oemCtaBand} aria-labelledby="oem-page-cta-title">
      <div className="container">
        <h2 id="oem-page-cta-title" className={styles.oemCtaTitle}>
          {oemPageCta.title}
        </h2>
        <p className={styles.oemCtaSub}>{oemPageCta.sub}</p>
        <div className={styles.oemCtaActions}>
          <a href={WHATSAPP_URL} className={styles.oemCtaPrimary}>
            {oemPageCta.primaryLabel}
          </a>
          <Link to={oemPageCta.secondaryTo} className={styles.oemCtaSecondary}>
            {oemPageCta.secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

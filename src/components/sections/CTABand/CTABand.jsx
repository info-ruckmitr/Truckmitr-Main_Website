import Button from '@components/ui/Button/Button'
import styles from './CTABand.module.css'

export default function CTABand({
  title = 'Ready to Transform India\'s Trucking?',
  primaryTo = '/drivers',
  primaryLabel = 'Join as Driver',
  secondaryTo = '/fleet',
  secondaryLabel = 'Partner With Us',
}) {
  return (
    <section className={styles.section} aria-labelledby="cta-band-title">
      <div className={styles.pattern} aria-hidden />
      <div className="container">
        <h2 id="cta-band-title" className={styles.title}>
          {title}
        </h2>
        <div className={styles.actions}>
          <Button to={primaryTo} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          <Button to={secondaryTo} variant="secondary" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}

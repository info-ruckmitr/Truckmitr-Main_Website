import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import PlanTable from './PlanTable'
import styles from './OEM.module.css'

export default function OEMOfferingBlock({ offering }) {
  return (
    <article className={styles.offeringBlock} aria-labelledby={`o-${offering.id}-title`}>
      <div className="container">
        <ScrollReveal>
          <header className={styles.offeringHeader}>
            <div className={styles.offNum}>{offering.num}</div>
            <h2 id={`o-${offering.id}-title`} className={styles.offTitle}>
              {offering.title}
            </h2>
            <p className={styles.offTagline}>{offering.tagline}</p>
            <div className={styles.tagRow}>
              {offering.tags.map((t) => (
                <span
                  key={t.label}
                  className={t.variant === 'g' ? styles.tagG : styles.tagO}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </header>
        </ScrollReveal>

        <div className={styles.offGrid}>
          <div className={styles.offMain}>
            <p className={styles.offDesc}>{offering.description}</p>

            <div className={styles.valueBlock}>
              <h3 className={styles.valueHeadingDriver}>Driver-Centric Value</h3>
              <ul className={styles.checkList}>
                {offering.driverBullets.map((b) => (
                  <li key={b.text}>
                    {b.strong != null && b.strong !== '' ? (
                      <>
                        <strong>{b.strong}:</strong> {b.text}
                      </>
                    ) : (
                      b.text
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.valueBlock}>
              <h3 className={styles.valueHeadingPartner}>Partner Value</h3>
              <ul className={styles.checkList}>
                {offering.partnerBullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>

            <aside className={styles.copyBoxFull}>
              <p className={styles.copyLabel}>{offering.copyBox.label}</p>
              <p className={styles.copyH}>{offering.copyBox.headline}</p>
              <p className={styles.copySub}>{offering.copyBox.sub}</p>
              <p className={styles.copyP}>{offering.copyBox.body}</p>
            </aside>
          </div>

          <div className={styles.planAside}>
            <PlanTable rows={offering.planRows} />
          </div>
        </div>
      </div>
    </article>
  )
}

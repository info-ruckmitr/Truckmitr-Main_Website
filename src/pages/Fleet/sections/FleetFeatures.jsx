import { IMAGES } from '@utils/constants'
import { fleetBenefitsIntro, fleetFeatureRows } from '@data/fleetContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from '../Fleet.module.css'

const imageMap = {
  fleetFeatHiring: IMAGES.fleetFeatHiring,
  fleetFeatCompliance: IMAGES.fleetFeatCompliance,
  fleetFeatTraining: IMAGES.fleetFeatTraining,
  fleetFeatWelfare: IMAGES.fleetFeatWelfare,
}

export default function FleetFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <ScrollReveal>
          <header className={styles.sectionHead}>
            <span className={styles.sLabel}>{fleetBenefitsIntro.label}</span>
            <h2 className={styles.sTitle}>{fleetBenefitsIntro.title}</h2>
            <p className={styles.sSub}>{fleetBenefitsIntro.sub}</p>
          </header>
        </ScrollReveal>
        <div className={styles.featureStack}>
          {fleetFeatureRows.map((row) => (
            <ScrollReveal key={row.key}>
              <article className={`${styles.row} ${row.reverse ? styles.rowReverse : ''}`}>
                <div className={styles.rowText}>
                  <p className={styles.label}>{row.label}</p>
                  <h2 className={styles.rowTitle}>{row.title}</h2>
                  <p className={styles.rowDesc}>{row.description}</p>
                  <ul className={styles.checks}>
                    {row.checks.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.rowImgWrap}>
                  <img
                    src={imageMap[row.imageKey]}
                    alt=""
                    className={styles.rowImg}
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

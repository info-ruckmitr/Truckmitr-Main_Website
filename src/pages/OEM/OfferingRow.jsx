import PlanTable from './PlanTable'
import styles from './OEM.module.css'

export default function OfferingRow({ offering }) {
  return (
    <article className={styles.offering}>
      <div className={styles.offeringBadge}>{offering.id}</div>
      <div className={styles.offeringTop}>
        <h2 className={styles.offeringTitle}>{offering.title}</h2>
        <p className={styles.offeringTag}>{offering.tagline}</p>
        <p className={styles.offeringDesc}>{offering.description}</p>
      </div>
      <div className={styles.offeringGrid}>
        <div className={styles.values}>
          <div>
            <h3 className={styles.valuesTitle}>Driver Value</h3>
            <p>{offering.driverValue}</p>
          </div>
          <div>
            <h3 className={styles.valuesTitle}>Partner Value</h3>
            <p>{offering.partnerValue}</p>
          </div>
        </div>
        <aside className={styles.copyBox}>
          <p>{offering.copyBox}</p>
        </aside>
        <div className={styles.planWrap}>
          <PlanTable rows={offering.planRows} />
        </div>
      </div>
    </article>
  )
}

import styles from './OEM.module.css'

export default function PlanTable({ rows }) {
  return (
    <div className={styles.planTable}>
      <div className={styles.planHead}>Detailed Plan</div>
      <dl className={styles.planBody}>
        {rows.map((row) => (
          <div key={row.key} className={styles.planRow}>
            <dt>{row.key}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

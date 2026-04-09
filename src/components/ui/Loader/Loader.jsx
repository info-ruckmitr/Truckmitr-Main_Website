import styles from './Loader.module.css'

export default function Loader({ label = 'Loading' }) {
  return (
    <div className={styles.wrap} role="status" aria-live="polite" aria-label={label}>
      <div className={styles.bar} />
    </div>
  )
}

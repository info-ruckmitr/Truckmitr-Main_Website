import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsMovement } from '@data/unionsPageContent'
import { IMAGES } from '@utils/constants'
import styles from '../Unions.module.css'

export default function UnionsMovement({ onRegister }) {
  const m = unionsMovement
  return (
    <section className={styles.movement}>
      <div className={styles.movementBg} aria-hidden>
        <img src={IMAGES.unionsMovementBg} alt="" loading="lazy" width={1920} height={1080} />
        <div className={styles.movementOverlay} />
      </div>
      <div className={`container ${styles.movementInner}`}>
        <ScrollReveal>
          <div className={styles.movementBadge}>{m.badge}</div>
          <h2 className={styles.movementTitle}>
            {m.titleBefore} <span>{m.titleAccent}</span>
            <br />
            {m.titleAfter}
          </h2>
          <p className={styles.movementSub}>{m.sub}</p>
          <div className={styles.movementStats}>
            {m.stats.map((s) => (
              <div key={s.l} className={styles.mvStat}>
                <div className={styles.mvN}>{s.n}</div>
                <div className={styles.mvL}>{s.l}</div>
              </div>
            ))}
          </div>
          <div className={styles.movementBtns}>
            <button type="button" className={styles.btnHeroPrimary} onClick={onRegister}>
              {m.primaryCta.label}
            </button>
            <button type="button" className={styles.btnHeroGhost} disabled title="Coming soon">
              {m.secondaryCta.label}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

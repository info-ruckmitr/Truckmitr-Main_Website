import {
  AlertTriangle,
  Banknote,
  Building2,
  Clock,
  HeartPulse,
  Landmark,
} from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsReality } from '@data/unionsPageContent'
import styles from '../Unions.module.css'

const truthIcons = [AlertTriangle, Banknote, Landmark, Clock, HeartPulse, Building2]

export default function UnionsReality() {
  return (
    <section className={styles.reality} id="reality">
      <div className="container">
        <header className={styles.realityHeader}>
          <ScrollReveal>
            <span className={styles.sLabel}>{unionsReality.label}</span>
            <h2 className={`${styles.sTitle} ${styles.sTitleLight}`}>
              {unionsReality.title}
              <br />
              <span className={styles.titleAccentOrange}>{unionsReality.titleAccent}</span>
            </h2>
            <p className={`${styles.sSub} ${styles.sSubMutedDark}`}>{unionsReality.sub}</p>
          </ScrollReveal>
        </header>
        <div className={styles.truthGrid}>
          {unionsReality.cards.map((c, i) => {
            const Icon = truthIcons[i] ?? AlertTriangle
            return (
              <ScrollReveal key={c.title}>
                <article className={styles.truthCard}>
                  <div className={styles.truthIconWrap} aria-hidden>
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <span className={styles.truthStat}>{c.stat}</span>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

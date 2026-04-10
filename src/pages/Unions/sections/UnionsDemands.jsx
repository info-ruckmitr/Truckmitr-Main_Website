import {
  BarChart3,
  Brain,
  FileCheck,
  Handshake,
  Landmark,
  Shield,
  Stethoscope,
  Wallet,
  Zap,
} from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsDemands } from '@data/unionsPageContent'
import styles from '../Unions.module.css'

const demandIcons = [Landmark, Shield, Wallet, Handshake, Stethoscope, FileCheck, Brain, Zap, BarChart3]

export default function UnionsDemands() {
  const d = unionsDemands
  return (
    <section className={styles.demands} id="demands">
      <div className="container">
        <header className={styles.sectionHead}>
          <ScrollReveal>
            <span className={styles.sLabel}>{d.label}</span>
            <h2 className={`${styles.sTitle} ${styles.sTitleDark}`}>
              {d.title}
              <br />
              <span className={styles.titleAccentOrange}>{d.titleAccent}</span>
            </h2>
            <p className={`${styles.sSub} ${styles.sSubMutedDark}`}>{d.sub}</p>
          </ScrollReveal>
        </header>
        <div className={styles.demandGrid}>
          {d.cards.map((c, i) => {
            const Icon = demandIcons[i] ?? Landmark
            return (
              <ScrollReveal key={c.num}>
                <article className={styles.demandCard}>
                  <div className={styles.demandIconWrap} aria-hidden>
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className={styles.demandNum}>{c.num}</div>
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

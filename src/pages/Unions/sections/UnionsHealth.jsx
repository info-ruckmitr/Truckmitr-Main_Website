import {
  Angry,
  Ban,
  Brain,
  Frown,
  Users,
  Wallet,
} from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsHealth } from '@data/unionsPageContent'
import { IMAGES } from '@utils/constants'
import { displayTextAfterEmoji } from '@utils/stripLeadingEmoji'
import styles from '../Unions.module.css'

const mentalIcons = [Users, Angry, Wallet, Frown, Brain, Ban]

export default function UnionsHealth() {
  const h = unionsHealth

  return (
    <section className={styles.health} id="health">
      <div className="container">
        <header className={styles.sectionHead}>
          <ScrollReveal>
            <span className={styles.sLabel}>{h.label}</span>
            <h2 className={`${styles.sTitle} ${styles.sTitleDark}`}>
              {h.title}
              <br />
              <span className={styles.titleAccentOrange}>{h.titleAccent}</span>
            </h2>
            <p className={`${styles.sSub} ${styles.sSubMutedDark}`}>{h.sub}</p>
          </ScrollReveal>
        </header>

        <div className={styles.healthGrid}>
          {/* Fatigue */}
          <ScrollReveal>
            <article className={styles.healthCard}>
              <div className={styles.healthCardMedia}>
                <img src={IMAGES.unionsHealthFatigue} alt="" loading="lazy" width={900} height={506} />
              </div>
              <div className={styles.healthCardBody}>
                <span className={styles.hcTag}>{displayTextAfterEmoji(h.fatigue.tag)}</span>
                <h3>{h.fatigue.title}</h3>
                <p className={styles.healthCardText}>{h.fatigue.body}</p>
                <div className={styles.healthStatRow}>
                  {h.fatigue.stats.map((s) => (
                    <div key={s.n} className={styles.hstat}>
                      <div className={styles.hstatN}>{s.n}</div>
                      <div className={styles.hstatL}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Eye */}
          <ScrollReveal>
            <article className={styles.healthCard}>
              <div className={styles.healthCardMedia}>
                <img src={IMAGES.unionsHealthEye} alt="" loading="lazy" width={900} height={506} />
              </div>
              <div className={styles.healthCardBody}>
                <span className={styles.hcTag}>{displayTextAfterEmoji(h.eye.tag)}</span>
                <h3>{h.eye.title}</h3>
                <p className={styles.healthCardText}>{h.eye.body}</p>
                <div className={styles.healthStatRow}>
                  {h.eye.stats.map((s) => (
                    <div key={s.n} className={styles.hstat}>
                      <div className={styles.hstatN}>{s.n}</div>
                      <div className={styles.hstatL}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Mental */}
          <ScrollReveal>
            <article className={styles.healthCard}>
              <div className={styles.healthCardMedia}>
                <img src={IMAGES.unionsHealthMental} alt="" loading="lazy" width={900} height={506} />
              </div>
              <div className={styles.healthCardBody}>
                <span className={styles.hcTag}>{displayTextAfterEmoji(h.mental.tag)}</span>
                <h3 className={styles.mentalTitle}>{h.mental.title}</h3>
                <div className={styles.mentalNarrative}>
                  <p>{h.mental.paragraph1}</p>
                  <p>
                    {h.mental.paragraph2Before}
                    <strong>{h.mental.paragraph2Bold}</strong>
                    {h.mental.paragraph2After}
                  </p>
                </div>
                <div className={styles.mentalItemsGrid}>
                  {h.mental.items.map((item, i) => {
                    const Icon = mentalIcons[i] ?? Users
                    return (
                      <div key={item.title} className={styles.mentalItem}>
                        <div className={styles.mentalItemHead}>
                          <span className={styles.mentalItemIcon} aria-hidden>
                            <Icon size={16} strokeWidth={2} />
                          </span>
                          <h4>{displayTextAfterEmoji(item.title)}</h4>
                        </div>
                        <p>{item.body}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Physical — same pattern as top row */}
          <ScrollReveal>
            <article className={styles.healthCard}>
              <div className={styles.healthCardMedia}>
                <img src={IMAGES.unionsHealthPhysical} alt="" loading="lazy" width={900} height={506} />
              </div>
              <div className={styles.healthCardBody}>
                <span className={styles.hcTag}>{displayTextAfterEmoji(h.physical.tag)}</span>
                <h3>{h.physical.title}</h3>
                <p className={styles.healthCardText}>{h.physical.intro}</p>
                <div className={styles.healthStatRow}>
                  {h.physical.stats.map((s) => (
                    <div key={s.n} className={styles.hstat}>
                      <div className={styles.hstatN}>{s.n}</div>
                      <div className={styles.hstatL}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

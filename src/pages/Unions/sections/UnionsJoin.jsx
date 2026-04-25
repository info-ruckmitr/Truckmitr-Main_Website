import { Lock } from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsJoin } from '@data/unionsPageContent'
import { WHATSAPP_URL } from '@utils/constants'
import styles from '../Unions.module.css'

export default function UnionsJoin({ onRegister }) {
  const j = unionsJoin

  return (
    <section className={styles.calltoarms} id="join">
      <div className="container">
        <div className={styles.ctaSplit}>
          <div>
            <ScrollReveal>
              <span className={styles.sLabel}>{j.label}</span>
              <h2 className={`${styles.sTitle} ${styles.sTitleDark}`}>
                {j.title}
                <br />
                <span className={styles.titleAccentOrange}>{j.titleAccent}</span>
              </h2>
              <blockquote className={styles.quoteBlock}>
                <p>{j.quote}</p>
              </blockquote>
              {j.body.map((p, idx) => (
                <p key={idx} className={styles.joinBody}>
                  {p}
                </p>
              ))}
              <div className={styles.joinStatsGrid}>
                {j.stats.map((s) => (
                  <div key={s.n} className={styles.joinStatBox}>
                    <div className={styles.joinStatN}>{s.n}</div>
                    <div className={styles.joinStatL}>{s.l}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal>
              <div className={styles.joinCard} id="register">
                <h3>{j.card.title}</h3>
                <p>{j.card.sub}</p>
                <div className={styles.joinSteps}>
                  {j.card.steps.map((step, idx) => (
                    <div key={step.strong} className={styles.joinStep}>
                      <div className={styles.jstepNum}>{idx + 1}</div>
                      <div className={styles.jstepText}>
                        <strong>{step.strong}</strong>
                        {step.rest}
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.joinCtaRow}>
                  <button
                    type="button"
                    className={styles.btnJoin}
                    onClick={onRegister}
                  >
                    {j.card.primaryBtn}
                  </button>
                  <a
                    className={styles.btnJoinGhost}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {j.card.secondaryBtn}
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <aside className={styles.independence}>
              <span className={styles.independenceIcon} aria-hidden>
                <Lock size={20} strokeWidth={2} />
              </span>
              <div>
                <h4>{j.independence.title}</h4>
                <p>{j.independence.body}</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

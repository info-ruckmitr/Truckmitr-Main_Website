import { unionsHero } from '@data/unionsPageContent'
import { IMAGES } from '@utils/constants'
import UnionsSubNav from './UnionsSubNav'
import styles from '../Unions.module.css'

export default function UnionsHero({ onRegister }) {
  const tickerDup = [...unionsHero.tickerItems, ...unionsHero.tickerItems]

  return (
    <section className={styles.hero} aria-labelledby="unions-hero-title">
      <div className={styles.heroBg}>
        <img
          className={styles.heroBgImg}
          src={IMAGES.unionsHeroCover}
          alt=""
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
        />
        <div className={styles.heroOverlay} aria-hidden />
      </div>
      <UnionsSubNav className={styles.subNavInHero} onRegister={onRegister} />
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} aria-hidden />
            <span className={styles.eyebrowText}>{unionsHero.eyebrow}</span>
          </div>
          <h1 id="unions-hero-title" className={styles.heroTitle}>
            {unionsHero.titleLine1}
            <br />
            <span className={styles.lineAccent}>{unionsHero.titleAccent}</span>
            <span className={styles.lineSub}>{unionsHero.titleSub}</span>
          </h1>
          <p className={styles.heroBody}>{unionsHero.body}</p>
          <div className={styles.heroCtas}>
            <button type="button" className={styles.btnHeroPrimary} onClick={onRegister}>
              {unionsHero.primaryCta.label}
            </button>
            <a className={styles.btnHeroGhost} href={unionsHero.secondaryCta.href}>
              {unionsHero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
      <div className={styles.heroTicker}>
        <div className={styles.tickerTrack} aria-hidden>
          {tickerDup.map((label, i) => (
            <span key={`${label}-${i}`} className={styles.tickerItem}>
              {label} <span className={styles.tickerSep}>•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

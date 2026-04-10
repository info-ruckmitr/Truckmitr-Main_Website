import { Factory, Leaf, Rocket, ShoppingCart } from 'lucide-react'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { unionsImperative } from '@data/unionsPageContent'
import { IMAGES } from '@utils/constants'
import styles from '../Unions.module.css'

const impactIcons = [Leaf, Factory, ShoppingCart, Rocket]

export default function UnionsImperative() {
  return (
    <section className={styles.imperative} id="imperative">
      <div className="container">
        <div className={styles.impSplit}>
          <div className={styles.impLeft}>
            <ScrollReveal>
              <div className={styles.impPhotoWrap}>
                <img
                  className={styles.impPhoto}
                  src={IMAGES.unionsImperativePhoto}
                  alt=""
                  loading="lazy"
                  width={1000}
                  height={750}
                />
              </div>
              <div className={styles.impIntro}>
                <span className={styles.impIntroLabel}>{unionsImperative.visualIntro}</span>
                <h3 className={styles.impIntroTitle}>{unionsImperative.visualTitle}</h3>
              </div>
              <div className={styles.impStatGrid}>
                {unionsImperative.statBlocks.map((b) => (
                  <div key={b.num} className={styles.impStatBlock}>
                    <div className={styles.impNum}>{b.num}</div>
                    <div className={styles.impLabel}>{b.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className={styles.impContent}>
            <ScrollReveal>
              <span className={styles.sLabel}>{unionsImperative.label}</span>
              <h2 className={`${styles.sTitle} ${styles.sTitleDark}`}>{unionsImperative.title}</h2>
              <p className={`${styles.sSub} ${styles.sSubMutedDark}`} style={{ marginBottom: 20 }}>
                India is racing toward becoming a global economic superpower. Manufacturing is booming.
                E-commerce is exploding. Infrastructure is expanding at unprecedented speed. But all of
                it —{' '}
                <strong>
                  every factory shipment, every Amazon delivery, every construction project
                </strong>{' '}
                — comes to a standstill without the person behind the steering wheel.
              </p>
              <p className={`${styles.sSub} ${styles.sSubMutedDark}`} style={{ marginBottom: 28 }}>
                This is not a logistics problem. This is a <strong>national crisis</strong> — and no
                government, no industry body, and no policy has been able to address it because the most
                critical piece is missing:{' '}
                <strong>a unified voice for India&apos;s truck drivers</strong>.
              </p>
            </ScrollReveal>
            <div>
              {unionsImperative.impactLines.map((line, i) => {
                const Icon = impactIcons[i] ?? Leaf
                return (
                  <div key={line.strong} className={styles.impactLine}>
                    <div className={styles.impactIcon} aria-hidden>
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <div className={styles.impactText}>
                      <strong>{line.strong}</strong>
                      {line.text}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

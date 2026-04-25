import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import { homeCommunity } from '@data/homeContent'
import styles from './HomeCommunity.module.css'

export default function HomeCommunity() {
  return (
    <section className={styles.section} aria-labelledby="community-heading">
      <div className={`container ${styles.inner}`}>
        {/* ── Left: narrative copy ── */}
        <ScrollReveal className={styles.copy}>
          <span className={styles.label}>{homeCommunity.label}</span>
          <h2 id="community-heading" className={styles.title}>
            <span className={styles.titleAccent}>{homeCommunity.titleLine1}</span>
            {homeCommunity.titleLine2}
          </h2>

          {homeCommunity.body.map((para, i) => (
            <p key={i} className={styles.bodyPara} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <div className={styles.ctaWrap}>
            <Button 
              {...(homeCommunity.cta.href ? { href: homeCommunity.cta.href, target: '_blank', rel: 'noopener noreferrer' } : { to: homeCommunity.cta.to })}
              variant="primary" 
              size="lg"
            >
              {homeCommunity.cta.label}
            </Button>
          </div>
        </ScrollReveal>

        {/* ── Right: feature cards ── */}
        <div className={styles.features}>
          {homeCommunity.features.map((f, i) => (
            <ScrollReveal key={f.id} delay={i * 0.07} style={{ height: '100%' }}>
              <motion.div
                className={styles.featureCard}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <p className={styles.featureText}>
                  {f.text.includes(' — ') ? (
                    <>
                      <strong>{f.text.split(' — ')[0]}</strong>
                      {' ' + f.text.split(' — ')[1]}
                    </>
                  ) : (
                    f.text
                  )}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

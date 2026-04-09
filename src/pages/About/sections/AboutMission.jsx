import { motion } from 'framer-motion'
import { IMAGES } from '@utils/constants'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { aboutMission } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutMission() {
  return (
    <section className={styles.mission} aria-labelledby="about-mission-heading">
      <div className="container">
        <div className={styles.missionGrid}>
          <ScrollReveal>
            <div>
              <span className={styles.sLabel}>{aboutMission.label}</span>
              <h2 id="about-mission-heading" className={styles.sTitle}>
                {aboutMission.title}
              </h2>
              <p className={styles.missionP}>{aboutMission.paragraph1}</p>
              <p className={styles.missionP}>
                {aboutMission.paragraph2Before}
                <em>{aboutMission.paragraph2Em}</em>
              </p>
              <ul className={styles.checkList}>
                {aboutMission.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left">
            <motion.div
              className={styles.quoteCard}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div
                className={styles.quoteCardBg}
                style={{ backgroundImage: `url(${IMAGES.aboutMissionVisual})` }}
                aria-hidden
              />
              <div className={styles.quoteCardOverlay} />
              <blockquote className={styles.quoteCardInner}>
                <p>&ldquo;{aboutMission.quote}&rdquo;</p>
                <footer>— {aboutMission.quoteAttribution}</footer>
              </blockquote>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

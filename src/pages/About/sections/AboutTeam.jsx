import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { aboutTeam } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutTeam() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeMember = aboutTeam.members[activeIndex]

  return (
    <section className={styles.teamUnique}>
      <div className="container">
        <header className={styles.sectionHead}>
          <ScrollReveal>
            <span className={styles.sLabel}>{aboutTeam.label}</span>
            <h2 className={styles.sTitle}>{aboutTeam.title}</h2>
            <p className={styles.missionP}>{aboutTeam.intro}</p>
          </ScrollReveal>
        </header>

        <ScrollReveal delay={0.2}>
          <div className={styles.teamShowcase}>
            {/* Left panel - Interactive Roster */}
            <div className={styles.teamRoster}>
              {aboutTeam.members.map((member, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={member.name}
                    className={`${styles.rosterBtn} ${isActive ? styles.rosterBtnActive : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                  >
                    <div className={styles.rosterImg}>
                      <img src={member.imgSrc} alt={member.name} loading="lazy" />
                    </div>
                    <div className={styles.rosterInfo}>
                      <h3 className={styles.rosterName}>{member.name}</h3>
                      <p className={styles.rosterRole}>{member.role}</p>
                    </div>
                    <div className={styles.rosterIndicator}></div>
                  </button>
                )
              })}
            </div>

            {/* Right panel - Dynamic Bio */}
            <div className={styles.teamBioPanel}>
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeIndex}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.3, ease: "easeInOut" }}
                   className={styles.bioPanelInner}
                 >
                   <div className={styles.bioHeader}>
                     <h3 className={styles.bioName}>{activeMember.name}</h3>
                     <p className={styles.bioRole}>{activeMember.role}</p>
                     {activeMember.credential && (
                       <p className={styles.bioCred}>{activeMember.credential}</p>
                     )}
                   </div>
                   <div className={styles.bioBody}>
                     <p>{activeMember.bio}</p>
                   </div>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import { aboutTabs } from '@data/aboutContent'
import styles from '../About.module.css'

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('about')
  const tabs = Object.keys(aboutTabs)

  return (
    <section className={styles.tabsSection}>
      <div className="container">
        <ScrollReveal>
          <div className={styles.typographyTabsLayout}>
            {/* Massive Typography Menu */}
            <div className={styles.typeMenu}>
               {tabs.map((key) => {
                 const isActive = activeTab === key;
                 return (
                   <button
                     key={key}
                     onClick={() => setActiveTab(key)}
                     className={`${styles.typeBtn} ${isActive ? styles.typeBtnActive : ''}`}
                     aria-pressed={isActive}
                   >
                     {aboutTabs[key].label}
                   </button>
                 )
               })}
            </div>

            {/* Content Display */}
            <div className={styles.typeContentPanel}>
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -20 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   className={styles.typeTextWrapper}
                 >
                   <h3 className={styles.typeContentLabel}>{aboutTabs[activeTab].label}</h3>
                   <p className={styles.tabText}>{aboutTabs[activeTab].text}</p>
                 </motion.div>
               </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}


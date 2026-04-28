import { Target, Users, Zap, Check, MapPin, Briefcase, ArrowRight } from 'lucide-react'
import { careersHero, companyValues, benefits, openPositions } from '@data/careersContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import CareerModal from './CareerModal'
import styles from './Careers.module.css'
import { useState } from 'react'

// Import hero background
import careersHeroBg from '@assets/images/careers_hero.png'

const getIcon = (iconName) => {
  switch (iconName) {
    case 'target': return <Target size={28} />
    case 'users': return <Users size={28} />
    case 'zap': return <Zap size={28} />
    default: return <Zap size={28} />
  }
}

export default function Careers() {
  const [selectedCareerId, setSelectedCareerId] = useState(null)

  const handleOpenDetail = (id) => {
    setSelectedCareerId(id)
  }

  const handleCloseModal = () => {
    setSelectedCareerId(null)
  }

  return (
    <div className={styles.page}>
      {/* ─── Hero Section (Standard Style) ─── */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBg} 
          style={{ backgroundImage: `url(${careersHeroBg})` }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
        
        <div className="container">
          <ScrollReveal className={styles.heroInner}>
            <div className={styles.heroBadge}>
              <span className={styles.heroDot} />
              {careersHero.eyebrow}
            </div>
            <h1 className={styles.heroTitle}>
              Help Us Shape the Future of <br />
              <span>Logistics in India</span>
            </h1>
            <p className={styles.heroLead}>{careersHero.lead}</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button to="#jobs" size="lg">View Openings</Button>
              <Button to="/about" variant="white" size="lg">Our Culture</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className={styles.section}>
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <h2>Why Join TruckMitr?</h2>
          </ScrollReveal>
          
          <div className={styles.valuesGrid}>
            {companyValues.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className={styles.valueCard}>
                <div className={styles.valueIcon}>{getIcon(value.icon)}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits Section ─── */}
      <section className="container">
        <ScrollReveal className={styles.benefitsSection}>
          <div style={{ marginBottom: '48px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>Perks & Benefits</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, i) => (
              <div key={i} className={styles.benefitItem}>
                <div className={styles.benefitCheck}>
                  <Check size={14} color="white" />
                </div>
                <div>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Jobs Section ─── */}
      <section className={styles.section} id="jobs">
        <div className="container">
          <ScrollReveal className={styles.sectionHeader}>
            <h2>Open Positions</h2>
            <p style={{ color: 'var(--gray-5)', marginTop: '12px' }}>Come build the future of logistics with us.</p>
          </ScrollReveal>

          <div className={styles.jobList}>
            {openPositions.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 0.05} className={styles.jobCard}>
                <div className={styles.jobInfo}>
                  <span>{job.category}</span>
                  <h3>{job.title}</h3>
                </div>
                <div className={styles.jobMeta}>
                  <span><MapPin size={16} /> {job.location}</span>
                  <span><Briefcase size={16} /> {job.type}</span>
                </div>
                <div className={styles.jobActions}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleOpenDetail(job.id)}
                  >
                    View Detail
                  </Button>
                  <Button size="sm" icon={ArrowRight} iconPosition="right" to="/contact">
                    Apply Now
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer CTA ─── */}
      <section className={styles.careersFooter}>
        <div className="container">
          <ScrollReveal>
            <h2>Don't see a role for you?</h2>
            <p>We are always looking for talented individuals. Send us your resume at <strong>contact@truckmitr.com</strong></p>
            <div style={{ marginTop: '32px' }}>
              <Button to="/contact" size="lg">Get In Touch</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Detail Modal */}
      {selectedCareerId && (
        <CareerModal 
          careerId={selectedCareerId} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight, Plus, MapPin, ChevronRight, MessageSquare } from 'lucide-react'
import { contactHero, contactLocation, contactFaq, contactCta } from '@data/contactContent'
import { LOGO_SRC } from '@utils/constants'
import Button from '@components/ui/Button/Button'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState('q1')

  return (
    <div className={styles.page}>
      {/* ─── Section 1: Hero (Theme Color) ─── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <span className={styles.eyebrow}>{contactHero.eyebrow}</span>
              <h1 className={styles.title}>{contactHero.title}</h1>
              <p className={styles.lead}>{contactHero.lead}</p>
              
              <div className={styles.contactLinks}>
                <a href={`mailto:${contactHero.email}`} className={styles.contactItem}>
                  <div className={styles.iconCircleHero}><Mail size={18} /></div>
                  <span className={styles.contactLinkText}>{contactHero.email}</span>
                </a>
                <a href={`tel:${contactHero.phone.replace(/\s/g, '')}`} className={styles.contactItem}>
                  <div className={styles.iconCircleHero}><Phone size={18} /></div>
                  <span className={styles.contactLinkText}>{contactHero.phone}</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className={styles.formContainer}>
              <form className={styles.formCard} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>{contactHero.formTitle}</h2>
                  <p className={styles.formSubtitle}>{contactHero.formSubtitle}</p>
                </div>
                
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>First Name</label>
                    <input type="text" placeholder="John" className={styles.input} required />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Last Name</label>
                    <input type="text" placeholder="Doe" className={styles.input} required />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input type="email" placeholder="john@example.com" className={styles.input} required />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message</label>
                  <textarea placeholder="How can we help?" className={styles.textarea} required></textarea>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Channels (White Background) ─── */}
      <section className={styles.channelSection}>
        <div className="container">
          <ScrollReveal className={styles.channelGrid}>
            {contactHero.channels.map((ch, i) => (
              <div key={i} className={styles.channelCard}>
                <h3>{ch.title}</h3>
                <p>{ch.desc}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 3: Location ─── */}
      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.locationGrid}>
            <ScrollReveal className={styles.mapContainer}>
              <img 
                src="https://images.unsplash.com/photo-1526778545894-dd8186f201cc?w=1200&q=80" 
                alt="Map area" 
                className={styles.mapImg}
              />
              <div className={styles.mapPinCard}>
                <img src={LOGO_SRC} alt="TruckMitr" className={styles.mapLogo} />
                <h4>{contactLocation.headquarters.name}</h4>
                <p>{contactLocation.headquarters.address}</p>
                <a href={contactLocation.headquarters.link} className={styles.mapLink} target="_blank" rel="noreferrer">
                  Google Maps <ChevronRight size={14} />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal className={styles.locationDetails} delay={0.2}>
              <span className={styles.eyebrow}>{contactLocation.eyebrow}</span>
              <h2 className={styles.title} style={{ color: 'var(--dark)' }}>{contactLocation.title}</h2>
              <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                <div className={styles.iconCircleHero} style={{ background: 'var(--india-green-xl)', color: 'var(--india-green)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--dark)' }}>Headquarters</h3>
                  <p style={{ color: 'var(--gray-6)', lineHeight: '1.6' }}>{contactLocation.headquarters.address}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section 4: FAQ ─── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqAccordion}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span className={styles.eyebrow}>{contactFaq.eyebrow}</span>
              <h2 className={styles.title} style={{ color: 'var(--dark)' }}>{contactFaq.title}</h2>
            </div>
            {contactFaq.questions.map((q) => (
              <ScrollReveal key={q.id} className={styles.faqItem} data-active={activeFaq === q.id}>
                <button 
                  className={styles.faqTrigger} 
                  onClick={() => setActiveFaq(activeFaq === q.id ? null : q.id)}
                >
                  <span>{q.question}</span>
                  <div style={{ transform: activeFaq === q.id ? 'rotate(45deg)' : 'none', transition: '0.3s' }}>
                    <Plus size={20} />
                  </div>
                </button>
                {activeFaq === q.id && (
                  <div className={styles.faqContent}>
                    <p>{q.answer}</p>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 5: CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <ScrollReveal className={styles.ctaCard}>
            <h2>{contactCta.title}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Button to={contactCta.primaryCta.to}>{contactCta.primaryCta.label}</Button>
              <Button to={contactCta.secondaryCta.to} variant="white">{contactCta.secondaryCta.label}</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

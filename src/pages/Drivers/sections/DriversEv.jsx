import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Modal from '@components/ui/Modal/Modal'
import { driversEv } from '@data/driversContent'
import { IMAGES } from '@utils/constants'
import styles from '../Drivers.module.css'

export default function DriversEv() {
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = {
      name: e.target['ev-name'].value,
      mobile: e.target['ev-mobile'].value,
      email: e.target['ev-email'].value,
      state: e.target['ev-state'].value,
    }

    try {
      const response = await fetch('https://truckmitr.com/api/ev-training-cta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setShowSuccess(true)
        setShowForm(false)
        e.target.reset()
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("Something went wrong. Please check your network and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.evSection} style={{ background: 'var(--gray-0)' }} aria-labelledby="drivers-ev-heading">
      <div className="container">
        <div className={styles.evGrid}>
          <ScrollReveal>
            <div>
              <span className={styles.sLabel}>{driversEv.label}</span>
              <h2 id="drivers-ev-heading" className={styles.evTitle}>
                {driversEv.title}
              </h2>
              <p className={styles.evBody}>{driversEv.body}</p>
              <ul className={styles.evList}>
                {driversEv.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <button 
                type="button" 
                className={styles.evBtn} 
                onClick={() => setShowForm(true)}
              >
                {driversEv.ctaLabel}
              </button>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.08)' }}>
                <img src={IMAGES.oemFeatEv} alt="EV Training" style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }} />
              </div>
              <motion.div
                className={styles.evSide}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
            >
              <div className={styles.evEmoji} aria-hidden>
                ⚡
              </div>
              <h3>{driversEv.sideTitle}</h3>
              <div className={styles.evStats}>
                {driversEv.stats.map((s) => (
                  <div key={s.value} className={styles.evStat}>
                    <div className={styles.evStatVal}>{s.value}</div>
                    <div className={styles.evStatLab}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Modal open={showForm} onClose={() => setShowForm(false)} title="Enroll in EV Training">
        <form onSubmit={handleSubmit} className={styles.evForm}>
          <div className={styles.evFormGroup}>
            <label htmlFor="ev-name">Full Name <span style={{color: 'var(--saffron)'}}>*</span></label>
            <input type="text" id="ev-name" className={styles.evInput} required placeholder="Enter your full name" />
          </div>
          <div className={styles.evFormGroup}>
            <label htmlFor="ev-mobile">Mobile Number <span style={{color: 'var(--saffron)'}}>*</span></label>
            <input type="tel" id="ev-mobile" className={styles.evInput} required placeholder="Enter your mobile number" pattern="[0-9]{10}" />
          </div>
          <div className={styles.evFormGroup}>
            <label htmlFor="ev-email">Email Address (Optional)</label>
            <input type="email" id="ev-email" className={styles.evInput} placeholder="Enter your email address" />
          </div>
          <div className={styles.evFormGroup}>
            <label htmlFor="ev-state">State <span style={{color: 'var(--saffron)'}}>*</span></label>
            <select id="ev-state" className={styles.evSelect} required>
              <option value="">Select your state</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <button type="submit" className={styles.evSubmitBtn} disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </Modal>

      <Modal open={showSuccess} onClose={() => setShowSuccess(false)} title="Application Submitted">
        <div style={{ textAlign: 'center', padding: '24px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--dark)', marginBottom: '8px' }}>Thank You!</h3>
          <p style={{ color: 'var(--gray-6)', lineHeight: '1.6' }}>We have received your application for the EV Training program. Our team will contact you shortly.</p>
          <button 
            onClick={() => setShowSuccess(false)} 
            className={styles.evSubmitBtn}
            style={{ marginTop: '24px' }}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  )
}

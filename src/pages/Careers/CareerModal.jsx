import { useEffect, useState } from 'react'
import { X, MapPin, Briefcase, Mail, Phone, Home, Building2 } from 'lucide-react'
import Button from '@components/ui/Button/Button'
import styles from './CareerModal.module.css'

export default function CareerModal({ careerId, onClose, onApply }) {
  const [career, setCareer] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    
    // Fetch career details
    setLoading(true)
    fetch(`https://truckmitr.com/api/career/${careerId}`)
      .then(res => res.json())
      .then(json => {
        if (json && json.data) {
          setCareer(json.data)
        } else {
          setError('Failed to load career details.')
        }
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching career detail:', err)
        setError('Error connecting to the server.')
        setLoading(false)
      })

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [careerId, onClose])

  const handleApplyClick = () => {
    onClose()
    if (onApply && career) {
      // Pass the career data back to Careers.jsx to open the application form
      onApply({
        id: career.id,
        title: career.position_title || career.name,
        location: career.job_location,
        type: 'Full-time' // Defaulting since API doesn't specify
      })
    }
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        {loading ? (
          <div className={styles.loaderWrap}>
             <div className={styles.loader} />
             <p>Loading position details...</p>
          </div>
        ) : error ? (
          <div className={styles.errorWrap}>
            <p>⚠️ {error}</p>
            <Button size="sm" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <span className={styles.category}>{career.category_name || 'Hiring'}</span>
              <h2 className={styles.title}>{career.position_title || career.name}</h2>
              <div className={styles.meta}>
                <span><MapPin size={16} /> {career.job_location || 'Noida, Uttar Pradesh'}</span>
                <span><Briefcase size={16} /> Full-time</span>
              </div>
            </div>

            <div className={styles.body}>
              {career.description && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Job Overview</h3>
                  <div className={styles.description} dangerouslySetInnerHTML={{ __html: career.description }} />
                </div>
              )}

              {career.key_responsibilities && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Key Responsibilities</h3>
                  <div className={styles.description} style={{ whiteSpace: 'pre-line' }}>
                    {career.key_responsibilities}
                  </div>
                </div>
              )}

              {career.qualification && (
                <div className={styles.section}>
                  <h3 className={styles.sectionTitle}>Qualifications</h3>
                  <div className={styles.description} style={{ whiteSpace: 'pre-line' }}>
                    {career.qualification}
                  </div>
                </div>
              )}

              <div className={styles.contactInfo}>
                <h3 className={styles.sectionTitle}>Application Details</h3>
                <div className={styles.contactGrid}>
                   <div className={styles.contactItem}>
                      <Building2 size={18} />
                      <div>
                        <strong>Organization</strong>
                        <p>{career.hiring_organization}</p>
                      </div>
                   </div>
                   <div className={styles.contactItem}>
                      <Home size={18} />
                      <div>
                        <strong>Address</strong>
                        <p>{career.contact_address}</p>
                      </div>
                   </div>
                   <div className={styles.contactItem}>
                      <Mail size={18} />
                      <div>
                        <strong>Email</strong>
                        <p>{career.contact_email}</p>
                      </div>
                   </div>
                   {career.contact_phone && (
                     <div className={styles.contactItem}>
                        <Phone size={18} />
                        <div>
                          <strong>Phone</strong>
                          <p>{career.contact_phone}</p>
                        </div>
                     </div>
                   )}
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <Button variant="outline" onClick={onClose}>Close</Button>
              <Button onClick={handleApplyClick}>Apply for this Position</Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

import { useState, useRef } from 'react'
import { Target, Users, Zap, Check, MapPin, Briefcase, ArrowRight, X, Upload, FileText, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { careersHero, companyValues, benefits, openPositions } from '@data/careersContent'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import Button from '@components/ui/Button/Button'
import CareerModal from './CareerModal'
import styles from './Careers.module.css'


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

const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx']

export default function Careers() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [resumeFile, setResumeFile] = useState(null)
  const [submitStatus, setSubmitStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const fileInputRef = useRef(null)

  const openModal = (job) => {
    setSelectedJob(job)
    setFormData({ name: '', email: '', phone: '' })
    setResumeFile(null)
    setSubmitStatus('idle')
    setErrorMsg('')
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedJob(null)
    document.body.style.overflow = ''
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    const ext = '.' + file.name.split('.').pop().toLowerCase()
    if (!ALLOWED_EXTENSIONS.includes(ext) && !ALLOWED_FILE_TYPES.includes(file.type)) {
      setErrorMsg('Please upload a .pdf, .doc, or .docx file.')
      setResumeFile(null)
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('File size must be less than 5 MB.')
      setResumeFile(null)
      return
    }

    setErrorMsg('')
    setResumeFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill all required fields.')
      return
    }
    if (!resumeFile) {
      setErrorMsg('Please upload your resume.')
      return
    }

    setSubmitStatus('loading')

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)

    try {
      const body = new FormData()
      body.append('name', formData.name.trim())
      body.append('email', formData.email.trim())
      body.append('phone', formData.phone.trim())
      body.append('resume', resumeFile)
      if (selectedJob) {
        body.append('position', selectedJob.title)
      }

      const res = await fetch('https://truckmitr.com/api/career/apply', {
        method: 'POST',
        body,
        signal: controller.signal,
      })

      clearTimeout(timeout)

      if (!res.ok) {
        const text = await res.text().catch(() => '')
        throw new Error(text || `Server returned ${res.status}. Please try again.`)
      }
      setSubmitStatus('success')
    } catch (err) {
      clearTimeout(timeout)
      setSubmitStatus('error')
      if (err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.')
      } else {
        setErrorMsg(err.message || 'Something went wrong. Please try again.')
      }
    }
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
                <Button
                  variant="outline"
                  size="sm"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={() => openModal(job)}
                >
                  Apply Now
                </Button>
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

      {/* ─── Application Modal ─── */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className={styles.modalClose} onClick={closeModal} aria-label="Close">
              <X size={20} />
            </button>

            {submitStatus === 'success' ? (
              /* ─── Success State ─── */
              <div className={styles.modalSuccess}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={48} />
                </div>
                <h3>Application Submitted!</h3>
                <p>
                  Thank you for applying{selectedJob ? ` for ${selectedJob.title}` : ''}. We'll review your application and get back to you soon.
                </p>
                <Button onClick={closeModal} size="md">Close</Button>
              </div>
            ) : (
              /* ─── Form State ─── */
              <>
                <div className={styles.modalHeader}>
                  <div className={styles.modalBadge}>
                    <Briefcase size={16} />
                    <span>Career Application</span>
                  </div>
                  <h2>Apply{selectedJob ? ` — ${selectedJob.title}` : ''}</h2>
                  {selectedJob && (
                    <p className={styles.modalJobMeta}>
                      <MapPin size={14} /> {selectedJob.location} &nbsp;•&nbsp; {selectedJob.type}
                    </p>
                  )}
                </div>

                <form className={styles.modalForm} onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="apply-name">Full Name</label>
                    <input
                      id="apply-name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoFocus
                    />
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="apply-email">Email Address</label>
                    <input
                      id="apply-email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className={styles.formGroup}>
                    <label htmlFor="apply-phone">Phone Number</label>
                    <input
                      id="apply-phone"
                      name="phone"
                      type="tel"
                      placeholder="9999999999"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className={styles.formGroup}>
                    <label>Resume</label>
                    <div
                      className={`${styles.fileDropZone} ${resumeFile ? styles.fileSelected : ''}`}
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add(styles.fileDragOver) }}
                      onDragLeave={(e) => e.currentTarget.classList.remove(styles.fileDragOver)}
                      onDrop={(e) => {
                        e.preventDefault()
                        e.currentTarget.classList.remove(styles.fileDragOver)
                        const file = e.dataTransfer.files?.[0]
                        if (file) {
                          const fakeEvent = { target: { files: [file] } }
                          handleFileChange(fakeEvent)
                        }
                      }}
                    >
                      {resumeFile ? (
                        <div className={styles.fileInfo}>
                          <FileText size={20} />
                          <span>{resumeFile.name}</span>
                          <button
                            type="button"
                            className={styles.fileRemove}
                            onClick={(e) => {
                              e.stopPropagation()
                              setResumeFile(null)
                              if (fileInputRef.current) fileInputRef.current.value = ''
                            }}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <div className={styles.filePlaceholder}>
                          <Upload size={24} />
                          <span>Click or drag to upload</span>
                          <small>.pdf, .doc, or .docx — Max 5 MB</small>
                        </div>
                      )}
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        hidden
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className={styles.formError}>
                      <AlertCircle size={16} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={submitStatus === 'loading'}
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 size={18} className={styles.spinIcon} />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

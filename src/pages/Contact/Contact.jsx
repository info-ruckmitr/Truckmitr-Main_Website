import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react'
import { contactHero, contactLocation, contactFaq, contactCta } from '@data/contactContent'
import { LOGO_SRC } from '@utils/constants'
import Button from '@components/ui/Button/Button'
import ScrollReveal from '@components/shared/ScrollReveal/ScrollReveal'
import styles from './Contact.module.css'

// Import CTA background image
import ctaBg from '@assets/images/indian_truck_cta_bg.png'

const getIcon = (id) => {
  switch (id) {
    case 'toll-free': return <Phone size={20} />
    case 'email': return <Mail size={20} />
    case 'head-office':
    case 'reg-office': return <MapPin size={20} />
    default: return <Phone size={20} />
  }
}

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState('q1')
  const [isWhatsApp, setIsWhatsApp] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    names: '',
    email: '',
    mobile: '',
    city: '',
    state: '',
    category: '',
    message: ''
  })

  // Manually render reCAPTCHA for SPA navigation
  useEffect(() => {
    const renderCaptcha = () => {
      if (window.grecaptcha && window.grecaptcha.render) {
        try {
          const container = document.getElementById('g-recaptcha-contact');
          if (container && container.innerHTML === '') {
            window.grecaptcha.render('g-recaptcha-contact', {
              'sitekey': '6Lftas4sAAAAAJS_7ALUXdc55TpBMNLns50TQDX0',
            });
          }
        } catch (error) {
          console.warn('reCAPTCHA render notice:', error);
        }
      }
    };

    // Check if grecaptcha is already loaded
    if (window.grecaptcha && window.grecaptcha.render) {
      renderCaptcha();
    } else {
      // If script is still loading, check periodically
      const interval = setInterval(() => {
        if (window.grecaptcha && window.grecaptcha.render) {
          renderCaptcha();
          clearInterval(interval);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate Captcha
    if (typeof window.grecaptcha === 'undefined') {
      setErrorMessage('reCAPTCHA not loaded. Please refresh.')
      setSubmitStatus('error')
      return
    }

    const captchaResponse = window.grecaptcha.getResponse()
    console.log('Captcha Response Token:', captchaResponse)

    // Update hidden field if it exists (matching user's script logic)
    const hiddenResponse = document.getElementById('g-recaptcha-response');
    if (hiddenResponse) {
      hiddenResponse.value = captchaResponse;
    }

    if (!captchaResponse) {
      setErrorMessage('Please verify that you are not a robot.')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    // Payload exactly as specified by the user
    const payload = {
      ...formData,
      'g-recaptcha-response': captchaResponse
    }

    try {
      const response = await fetch('https://truckmitr.com/api/contact-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          names: '',
          email: '',
          mobile: '',
          city: '',
          state: '',
          category: '',
          message: ''
        })
        window.grecaptcha.reset()
      } else {
        const errorData = await response.json().catch(() => ({}))
        setSubmitStatus('error')
        setErrorMessage(errorData.message || 'Failed to submit. Please try again later.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      {/* ─── Section 1: Hero (Light Saffron Theme) ─── */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <ScrollReveal className={styles.heroContent}>
              <div className={styles.breadcrumb}>
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Contact Us</span>
              </div>
              <h1 className={styles.title}>{contactHero.title}</h1>
              <p className={styles.lead}>{contactHero.lead}</p>

              <div className={styles.contactCardList}>
                {contactHero.contactCards.map((card) => (
                  <div key={card.id} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{getIcon(card.id)}</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoLabel}>{card.label}</span>
                      <span className={card.type === 'text' ? styles.addressValue : styles.infoValue}>
                        {card.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className={styles.formContainer}>
              <form className={styles.formCard} onSubmit={handleSubmit}>
                <div className={styles.formHeader}>
                  <h2 className={styles.formTitle}>{contactHero.formTitle}</h2>
                  <p className={styles.formSubtitle}>{contactHero.formSubtitle}</p>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>Name*</label>
                    <input
                      type="text"
                      name="names"
                      placeholder="Enter name"
                      className={styles.input}
                      value={formData.names}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Mobile Number*</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter number"
                    className={styles.input}
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                  <div className={styles.checkboxWrapper}>
                    <input
                      type="checkbox"
                      id="whatsapp"
                      checked={isWhatsApp}
                      onChange={() => setIsWhatsApp(!isWhatsApp)}
                    />
                    <label htmlFor="whatsapp">Is this WhatsApp Enabled</label>
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label}>City*</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter city"
                      className={styles.input}
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label}>State*</label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter state"
                      className={styles.input}
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Category*</label>
                  <select
                    name="category"
                    className={styles.input}
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Select category</option>
                    <option value="Truck Drivers">Truck Drivers</option>
                    <option value="Transporters">Transporters</option>
                    <option value="Truck OEMs">Truck OEMs</option>
                    <option value="Workshops">Workshops</option>
                    <option value="Insurance Companies">Insurance Companies</option>
                    <option value="Truck Body Builders">Truck Body Builders</option>
                    <option value="Fuel Pumps">Fuel Pumps</option>
                    <option value="Puncture Shops">Puncture Shops</option>
                    <option value="Driver Dhabas">Driver Dhabas</option>
                    <option value="Highway Healthcare Providers">Highway Healthcare Providers (Doctors)</option>
                    <option value="Education / Training Centers">Education / Training Centers</option>
                    <option value="Finance Companies">Finance Companies</option>
                    <option value="Tire / Battery Sales">Tire / Battery Sales</option>
                    <option value="Truck Accessories">Truck Accessories</option>
                    <option value="Truck Mechanic">Truck Mechanic</option>
                    <option value="Second Hand Truck Market">Second Hand Truck Market</option>
                    <option value="Truck Scrap Centers">Truck Scrap Centers</option>
                    <option value="Truck Fitness Centers">Truck Fitness Centers</option>
                    <option value="Driving Training Schools">Driving Training Schools</option>
                    <option value="Freight Agents">Freight Agents</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Message*</label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    className={styles.textarea}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className={styles.captchaWrapper}>
                  <div
                    id="g-recaptcha-contact"
                  ></div>
                  <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
                  {submitStatus === 'error' && (
                    <p id="captcha-error" className={styles.errorText}>{errorMessage}</p>
                  )}
                  {submitStatus === 'success' && (
                    <p className={styles.successText}>Thank you! Your message has been sent.</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Channels (White) ─── */}
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

      {/* ─── Section 3: Location (Grid) ─── */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.locationGrid}>
            <ScrollReveal className={styles.mapWrapper}>
              <img
                src="https://images.unsplash.com/photo-1526778545894-dd8186f201cc?w=1200&q=80"
                alt="Headquarters Location"
                className={styles.mapImg}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TruckMitr Corporate Services"
              ></img>

            </ScrollReveal>

            <ScrollReveal className={styles.locationContent} delay={0.2}>
              <span className={styles.eyebrow}>{contactLocation.eyebrow}</span>
              <h2>{contactLocation.title}</h2>
              <div className={styles.hqBlock}>
                <h3>Headquarters</h3>
                <p>{contactLocation.headquarters.address}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── Section 4: FAQ (Grid) ─── */}
      <section className={styles.faqSection}>
        <div className="container">
          <div className={styles.faqGrid}>
            <ScrollReveal className={styles.faqLeft}>
              <span className={styles.eyebrow}>{contactFaq.eyebrow}</span>
              <h2 className={styles.title}>{contactFaq.title}</h2>
              <p className={styles.lead}>{contactFaq.lead}</p>

              <div className={styles.emailSubscribe}>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, paddingLeft: '16px' }}>
                  <Mail size={18} color="var(--gray-4)" />
                  <input type="email" placeholder="Enter your email" />
                </div>
                <button type="button">Submit</button>
              </div>
            </ScrollReveal>

            <div className={styles.faqRight}>
              {contactFaq.questions.map((q) => (
                <ScrollReveal key={q.id} className={styles.faqItem} data-active={activeFaq === q.id}>
                  <button
                    className={styles.faqTrigger}
                    onClick={() => setActiveFaq(activeFaq === q.id ? null : q.id)}
                  >
                    <span>{q.question}</span>
                    <div style={{ transform: activeFaq === q.id ? 'rotate(180deg)' : 'none', transition: '0.3s' }}>
                      <ChevronDown size={20} />
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
        </div>
      </section>

      {/* ─── Section 5: Full Width CTA Banner ─── */}
      <section className={styles.ctaSection}>
        <ScrollReveal className={styles.ctaCard} style={{ backgroundImage: `url(${ctaBg})` }}>
          <div className="container">
            <h2>{contactCta.title}</h2>
            <div className={styles.ctaButtons}>
              <Button to={contactCta.primaryCta.to}>{contactCta.primaryCta.label}</Button>
              <Button to={contactCta.secondaryCta.to} variant="white">{contactCta.secondaryCta.label}</Button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}

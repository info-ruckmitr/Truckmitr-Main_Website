import { Link } from 'react-router-dom'
import Divider from '@components/ui/Divider/Divider'
import { footerColumns, footerTagline } from '@data/footerContent'
import { FOOTER_LOGO_SRC, WHATSAPP_URL } from '@utils/constants'
import { WhatsAppIcon, YouTubeIcon, FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from '@components/ui/SocialIcons/SocialIcons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider tricolor className={styles.topRule} />
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Link to="/" className={styles.brandLink} aria-label="TruckMitr home">
              <img src={FOOTER_LOGO_SRC} alt="" className={styles.brandLogo} width={180} height={48} />
            </Link>
            <p className={styles.tagline}>{footerTagline}</p>
            <div className={styles.social}>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <WhatsAppIcon size={24} />
              </a>
              <a href="https://www.youtube.com/@TruckMitr_Official" target="_blank" rel="noreferrer" aria-label="YouTube">
                <YouTubeIcon size={24} />
              </a>
              <a href="https://x.com/TruckMitr" target="_blank" rel="noreferrer" aria-label="X (formerly Twitter)">
                <TwitterIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/company/truckmitr-corporate-services-pvt-ltd/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon size={24} />
              </a>
              <a href="https://www.instagram.com/truckmitr/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon size={24} />
              </a>
              <a href="https://www.facebook.com/Truckmitr" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon size={24} />
              </a>
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.id}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <ul className={styles.links}>
                {col.links.map((l) => (
                  <li key={`${col.id}-${l.label}`}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottom}>
          <p>© 2026 TruckMitr Corporate Services Private Limited. All rights reserved.</p>
          <p>Made for India's truck drivers ❤️</p>
        </div>
      </div>
    </footer>
  )
}

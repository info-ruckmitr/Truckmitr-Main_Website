import { Link } from 'react-router-dom'
import { ExternalLink, Share2 } from 'lucide-react'
import Divider from '@components/ui/Divider/Divider'
import { footerColumns, footerTagline } from '@data/footerContent'
import { LOGO_SRC, WHATSAPP_URL } from '@utils/constants'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Divider tricolor className={styles.topRule} />
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Link to="/" className={styles.brandLink} aria-label="TruckMitr home">
              <img src={LOGO_SRC} alt="" className={styles.brandLogo} width={180} height={48} />
            </Link>
            <p className={styles.tagline}>{footerTagline}</p>
            <div className={styles.social}>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <ExternalLink size={22} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <Share2 size={22} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <span className={styles.waIcon} aria-hidden />
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
          <p>© 2026 TruckMitr. All rights reserved.</p>
          <p>Made with ❤️ for India&apos;s Truck Drivers</p>
        </div>
      </div>
    </footer>
  )
}

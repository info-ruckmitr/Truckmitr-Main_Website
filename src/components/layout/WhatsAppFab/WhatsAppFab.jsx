import Tooltip from '@components/ui/Tooltip/Tooltip'
import { WHATSAPP_URL } from '@utils/constants'
import styles from './WhatsAppFab.module.css'

export default function WhatsAppFab() {
  return (
    <Tooltip content="Chat with us on WhatsApp">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.fab}
        aria-label="Chat with us on WhatsApp"
      >
        <span className={styles.icon} aria-hidden />
      </a>
    </Tooltip>
  )
}

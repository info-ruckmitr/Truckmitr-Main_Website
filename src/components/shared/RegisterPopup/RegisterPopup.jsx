import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import styles from './RegisterPopup.module.css'

/**
 * RegisterPopup — shown when users click "Register Your Union" on the Unions page.
 * Guides them to download TruckMitr and proceed as an Association role.
 */
export default function RegisterPopup({ open, onClose }) {
  // Close on Escape key
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, handleKey])

  if (!open) return null

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Register your union"
    >
      <div className={styles.popup}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          ✕
        </button>

        <div className={styles.iconWrap} aria-hidden>
          🚛
        </div>

        <h2 className={styles.title}>Register Your Union / Association</h2>
        <p className={styles.sub}>
          To get started, download the TruckMitr app and register as an{' '}
          <strong>Association</strong> role. Here's how:
        </p>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNum}>1</div>
            <div className={styles.stepText}>
              <strong>Download TruckMitr</strong> from the Google Play Store
              using the link below.
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>2</div>
            <div className={styles.stepText}>
              <strong>Open the app</strong> and tap <strong>"Register"</strong>.
              When asked to select your role, choose{' '}
              <strong>"Association / Union"</strong>.
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNum}>3</div>
            <div className={styles.stepText}>
              <strong>Complete your profile</strong> — add your union name,
              state, and membership details. Our team will verify and activate
              your page within <strong>24 hours</strong>.
            </div>
          </div>
        </div>

        <div className={styles.storeRow}>
          <a
            className={styles.storeBtn}
            href="https://play.google.com/store/apps/details?id=com.truckmitr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.storeBtnIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.921V2.735a1 1 0 0 1 .609-.92z" fill="#4285F4"/>
                <path d="M17.556 8.044L5.187.862a1.008 1.008 0 0 0-1.578.952L13.792 12l3.764-3.956z" fill="#34A853"/>
                <path d="M21.395 10.753l-3.839-2.71L13.792 12l3.764 3.956 3.84-2.71c.723-.508.723-1.985 0-2.493z" fill="#F4B400"/>
                <path d="M3.609 22.186L13.792 12l3.764 3.956-12.37 7.183a1.008 1.008 0 0 1-1.577-.953z" fill="#EA4335"/>
              </svg>
            </span>
            <span className={styles.storeBtnText}>
              <span className={styles.storeBtnSmall}>Get it on</span>
              <span className={styles.storeBtnBig}>Google Play</span>
            </span>
          </a>
        </div>

        <p className={styles.note}>
          Already downloaded? Open the app → Register → Select "Association" role
          to proceed.
        </p>
      </div>
    </div>,
    document.body,
  )
}

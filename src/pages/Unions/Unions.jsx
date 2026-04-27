import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import RegisterPopup from '@components/shared/RegisterPopup/RegisterPopup'
import UnionsHero from './sections/UnionsHero'
import UnionsSubNav from './sections/UnionsSubNav'
import UnionsReality from './sections/UnionsReality'
import UnionsImperative from './sections/UnionsImperative'
import UnionsHealth from './sections/UnionsHealth'
import UnionsDemands from './sections/UnionsDemands'
import UnionsPower from './sections/UnionsPower'
import UnionsJoin from './sections/UnionsJoin'
import UnionsMovement from './sections/UnionsMovement'
import styles from './Unions.module.css'

function useHashScroll() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])
}

export default function Unions() {
  useHashScroll()
  const [showPopup, setShowPopup] = useState(false)
  const openPopup = () => setShowPopup(true)

  return (
    <div className={styles.page}>
      <UnionsHero onRegister={openPopup} />
      <UnionsSubNav onRegister={openPopup} />
      <UnionsReality />
      <UnionsImperative />
      <UnionsHealth />
      <UnionsDemands />
      <UnionsPower />
      <UnionsJoin onRegister={openPopup} />
      <UnionsMovement onRegister={openPopup} />

      <RegisterPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  )
}

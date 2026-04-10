import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import UnionsHero from './sections/UnionsHero'
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

  return (
    <div className={styles.page}>
      <UnionsHero />
      <UnionsReality />
      <UnionsImperative />
      <UnionsHealth />
      <UnionsDemands />
      <UnionsPower />
      <UnionsJoin />
      <UnionsMovement />
    </div>
  )
}

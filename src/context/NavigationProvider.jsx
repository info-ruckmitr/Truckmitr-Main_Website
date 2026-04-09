import { useCallback, useEffect, useMemo, useState } from 'react'
import { NavigationContext } from './navigationContext'

export default function NavigationProvider({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const openMenu = useCallback(() => setMobileOpen(true), [])
  const closeMenu = useCallback(() => setMobileOpen(false), [])
  const toggleMenu = useCallback(() => setMobileOpen((o) => !o), [])

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [mobileOpen])

  const value = useMemo(
    () => ({
      mobileOpen,
      openMenu,
      closeMenu,
      toggleMenu,
    }),
    [mobileOpen, openMenu, closeMenu, toggleMenu],
  )

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

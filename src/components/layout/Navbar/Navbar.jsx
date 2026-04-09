import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@data/navigation'
import { useScrolled } from '@hooks/useScrolled'
import { useMediaQuery } from '@hooks/useMediaQuery'
import { useNavigation } from '@hooks/useNavigation'
import Button from '@components/ui/Button/Button'
import { LOGO_SRC } from '@utils/constants'
import NavLink from './NavLink'
import MobileMenu from './MobileMenu'
import styles from './Navbar.module.css'

export default function Navbar() {
  const scrolled = useScrolled()
  const isMd = useMediaQuery('(min-width: 768px)')
  const { mobileOpen, toggleMenu, closeMenu } = useNavigation()

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled}
    >
      <div className={styles.tricolor} aria-hidden />
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={closeMenu} aria-label="TruckMitr home">
          <img src={LOGO_SRC} alt="" className={styles.logoImg} width={168} height={44} />
        </Link>

        {isMd ? (
          <nav className={styles.nav} aria-label="Main">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}

        <div className={styles.actions}>
          <Button to="/jobs" variant="primary" size="sm" className={styles.cta}>
            Find Jobs / Hire Drivers ↗
          </Button>
          {!isMd && (
            <button
              type="button"
              className={styles.burger}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {!isMd && <MobileMenu open={mobileOpen} onClose={closeMenu} />}
    </header>
  )
}

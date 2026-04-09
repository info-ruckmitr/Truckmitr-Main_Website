import { navItems } from '@data/navigation'
import NavLink from './NavLink'
import styles from './Navbar.module.css'

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={styles.mobilePanel}
      data-open={open}
      id="mobile-menu"
      aria-hidden={!open}
    >
      <nav className={styles.mobileNav} aria-label="Mobile">
        {navItems.map((item, i) => (
          <div
            key={item.path}
            className={styles.mobileLinkWrap}
            style={{ animationDelay: open ? `${i * 60}ms` : '0ms' }}
          >
            <NavLink to={item.path} onClick={onClose}>
              {item.label}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  )
}

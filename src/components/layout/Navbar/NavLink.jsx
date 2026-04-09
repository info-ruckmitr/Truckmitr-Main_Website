import { NavLink as RRNavLink } from 'react-router-dom'
import { cn } from '@utils/cn'
import styles from './Navbar.module.css'

export default function NavLink({ to, children, onClick }) {
  return (
    <RRNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => cn(styles.navLink, isActive && styles.navLinkActive, 'nav-underline')}
    >
      {children}
    </RRNavLink>
  )
}

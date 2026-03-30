import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'For Drivers', path: '/drivers' },
  { label: 'Jobs', path: '/jobs' },
  { label: 'For Fleets', path: '/fleet' },
  { label: 'For OEMs', path: '/oem' },
  { label: 'About', path: '/about' },
]

function NavLink({
  label,
  path,
  active,
}: {
  label: string
  path: string
  active: boolean
}) {
  return (
    <Link
      to={path}
      className={cn(
        'relative rounded-md px-3.5 py-2 text-[14px] font-medium leading-snug tracking-normal transition-colors duration-200',
        active
          ? 'text-slate-900'
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900',
      )}
    >
      {label}
      {active && (
        <span
          className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#FF9933]"
          aria-hidden
        />
      )}
    </Link>
  )
}

export function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 border-b transition-[box-shadow,background-color] duration-300',
        'border-slate-200/90 bg-white/98 backdrop-blur-md',
        scrolled && 'shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_-4px_rgba(15,23,42,0.08)]',
      )}
    >
      <nav className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-3.5 md:px-6 md:py-4">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 400 }}>
          <Link to="/" className="block no-underline">
            <img
              src="/logotrick.png"
              alt="TruckMitr"
              className="h-9 w-auto object-contain md:h-[42px]"
            />
          </Link>
        </motion.div>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map(({ label, path }) => (
            <NavLink
              key={path}
              label={label}
              path={path}
              active={location.pathname === path}
            />
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button variant="whatsapp" size="sm" to="/drivers">
            Join as Driver
          </Button>
          <Button variant="fleet" size="sm" to="/fleet">
            Book Demo
          </Button>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 transition-colors hover:bg-slate-50"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="flex flex-col px-5 pb-6 pt-2">
              {navLinks.map(({ label, path }, i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.3 }}
                >
                  <Link
                    to={path}
                    className={cn(
                      'block border-b border-slate-100 py-3.5 text-[15px] font-medium',
                      location.pathname === path
                        ? 'text-slate-900'
                        : 'text-slate-600',
                    )}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Button variant="whatsapp" size="sm" to="/drivers">
                  Join as Driver
                </Button>
                <Button variant="fleet" size="sm" to="/fleet">
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from '../../shared/BrandLogo';
import { MobileMenu } from '../MobileMenu';
import { MAIN_NAV_LINKS } from '../mainNavLinks';

const PILL_PATHS = new Set(['/', '/stories']);

export function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#F8F9FA]/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50">
        <nav className="grid grid-cols-[auto_1fr_auto] items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
          <Link to="/" className="flex shrink-0 items-center py-1" aria-label="TruckMitr home">
            <BrandLogo height={40} />
          </Link>
          <div className="hidden md:flex gap-4 md:gap-6 items-center justify-center flex-wrap">
            {MAIN_NAV_LINKS.map((link) => {
              const isPill = PILL_PATHS.has(link.path);
              const active = pathname === link.path;
              if (isPill) {
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-serif text-sm font-medium antialiased px-4 py-2 rounded-lg transition-colors ${
                      active
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-slate-100/90 dark:bg-slate-800/90 text-[#191C1D] dark:text-slate-100 hover:bg-primary/15 dark:hover:bg-primary/25 hover:text-[#274680] dark:hover:text-blue-300'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-serif text-[#191C1D] dark:text-slate-100 antialiased transition-colors ${
                    active
                      ? 'text-[#274680] dark:text-blue-400 font-bold border-b-2 border-[#274680] pb-1'
                      : 'text-[#191C1D]/70 dark:text-slate-400 hover:text-[#274680] dark:hover:text-blue-300'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-4 justify-end">
            <button type="button" className="hidden md:block px-5 py-2 text-[#191C1D]/70 dark:text-slate-400 hover:text-[#274680] font-medium transition-colors">
              Contact Us
            </button>
            <button type="button" className="hidden md:block bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Login
            </button>
            <button
              type="button"
              className="md:hidden p-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 rounded-lg transition-all"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="material-symbols-outlined text-primary">menu</span>
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

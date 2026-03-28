import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BrandLogo } from '../../shared/BrandLogo';
import { MAIN_NAV_LINKS } from '../mainNavLinks';

const PILL_PATHS = new Set(['/', '/stories']);

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: Props) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1001] flex justify-end bg-on-surface/40 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Site navigation">
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close menu" />
      <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-surface-container-lowest shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
          <Link to="/" onClick={onClose} className="flex items-center" aria-label="TruckMitr home">
            <BrandLogo height={36} />
          </Link>
          <button type="button" onClick={onClose} className="p-2 hover:bg-surface-container rounded-lg transition-colors" aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-6" aria-label="Main">
          <ul className="space-y-2">
            {MAIN_NAV_LINKS.map((link) => {
              const active = pathname === link.path;
              const isPill = PILL_PATHS.has(link.path);
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium font-serif transition-colors ${
                      isPill
                        ? active
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-on-surface hover:bg-primary/10'
                        : active
                          ? 'bg-primary-container/20 text-primary font-bold'
                          : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

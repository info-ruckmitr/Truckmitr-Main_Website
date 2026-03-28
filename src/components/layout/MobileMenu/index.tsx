import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BrandLogo } from '../../shared/BrandLogo';

const allLinks = [
  { path: '/', label: 'Home' },
  { path: '/entry', label: 'Main Entry Hub' },
  { path: '/revamped', label: 'Revamped Homepage' },
  { path: '/driver-hub', label: 'Driver Hub (Hindi)' },
  { path: '/fleet', label: 'Fleet Solutions' },
  { path: '/oem-partner', label: 'OEM Partner Portal' },
  { path: '/industrial-curator', label: 'Industrial Curator' },
  { path: '/insights', label: 'Industrial Insights' },
  { path: '/mission', label: 'Our Mission' },
  { path: '/jobs', label: 'Job Board' },
  { path: '/welfare', label: 'Welfare Schemes' },
  { path: '/stories', label: 'Driver Ki Awaz' },
  { path: '/roi', label: 'ROI Analytics' },
  { path: '/design-system', label: 'Design System' },
  { path: '/dev/prompt', label: 'Dev Prompt' },
];

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
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close menu" />
      <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-surface-container-lowest shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-outline-variant/20">
          <Link to="/" onClick={onClose} className="flex items-center" aria-label="TruckMitr home">
            <BrandLogo height={36} />
          </Link>
          <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-lg transition-colors" aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-1">
            {allLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.path
                      ? 'bg-primary-container/20 text-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

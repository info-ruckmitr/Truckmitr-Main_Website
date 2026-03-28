import { Link } from 'react-router-dom';
import { BrandLogo } from '../../shared/BrandLogo';

const networkLinks = [
  { path: '/fleet', label: 'Fleet Network' },
  { path: '/driver-hub', label: 'Driver Hub' },
  { path: '/oem-partner', label: 'Partner Portal' },
];

const companyLinks = [
  { path: '/investor', label: 'Investor Relations' },
  { path: '/mission', label: 'Sustainability' },
  { path: '/welfare', label: 'Support' },
];

const legalLinks = [
  { path: '#', label: 'Privacy Policy' },
  { path: '#', label: 'Terms of Service' },
];

export function Footer() {
  return (
    <footer className="bg-[#F8F9FA] dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-12 py-16 w-full max-w-screen-2xl mx-auto">
        <div className="space-y-6">
          <Link to="/" className="inline-block" aria-label="TruckMitr home">
            <BrandLogo height={44} />
          </Link>
          <p className="text-[#191C1D]/60 dark:text-slate-500 text-sm leading-relaxed">
            Elevating logistics to institutional standards. Driven by technology, anchored in trust.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest">Network</h5>
          <ul className="space-y-4">
            {networkLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-[#191C1D]/60 dark:text-slate-500 hover:text-[#274680] dark:hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest">Company</h5>
          <ul className="space-y-4">
            {companyLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-[#191C1D]/60 dark:text-slate-500 hover:text-[#274680] dark:hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 text-sm uppercase tracking-widest">Legal</h5>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.path} className="text-[#191C1D]/60 dark:text-slate-500 hover:text-[#274680] dark:hover:text-blue-400 transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-slate-200/50 dark:border-slate-800/50 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-sm tracking-wide text-[#191C1D]/60 dark:text-slate-500">
          © 2024 TruckMitr Logistics. All figures in ₹ (INR). Premium Institutional Grade.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">language</span>
          <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">share</span>
        </div>
      </div>
    </footer>
  );
}

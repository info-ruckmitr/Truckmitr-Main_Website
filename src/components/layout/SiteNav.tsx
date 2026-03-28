import { Link } from 'react-router-dom';
import { STITCH_ROUTES } from '../../lib/routes.config';
import { BrandLogo } from '../shared/BrandLogo';

type Props = {
  onNavigate?: () => void;
};

export function SiteNav({ onNavigate }: Props) {
  const groups = {
    entry: STITCH_ROUTES.filter((r) => r.group === 'entry'),
    product: STITCH_ROUTES.filter((r) => r.group === 'product'),
    docs: STITCH_ROUTES.filter((r) => r.group === 'docs'),
  };

  return (
    <nav className="flex max-h-[70vh] flex-col gap-6 overflow-y-auto p-6 text-on-surface">
      <Link to="/" className="inline-block" onClick={onNavigate} aria-label="TruckMitr home">
        <BrandLogo height={36} />
      </Link>
      <NavGroup label="Entry" items={groups.entry} onNavigate={onNavigate} />
      <NavGroup label="Screens" items={groups.product} onNavigate={onNavigate} />
      <NavGroup label="Documentation" items={groups.docs} onNavigate={onNavigate} />
    </nav>
  );
}

function NavGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { path: string; label: string }[];
  onNavigate?: () => void;
}) {
  return (
    <div>
      <p className="mb-2 font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
        {label}
      </p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className="block rounded-lg px-3 py-2 font-body text-sm text-on-surface transition-colors hover:bg-surface-container-low"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

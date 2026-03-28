export type RouteNavItem = {
  path: string;
  label: string;
  group?: 'entry' | 'product' | 'docs';
};

export const STITCH_ROUTES: RouteNavItem[] = [
  { path: '/', label: 'Main Entry', group: 'entry' },
  { path: '/investor', label: 'Investor Homepage', group: 'entry' },
  { path: '/revamped', label: 'Revamped Homepage', group: 'entry' },
  { path: '/driver-hub', label: 'Driver Hub (Hindi)', group: 'product' },
  { path: '/fleet', label: 'Fleet Solutions', group: 'product' },
  { path: '/oem-partner', label: 'OEM & Partner', group: 'product' },
  { path: '/industrial-curator', label: 'Industrial Curator', group: 'product' },
  { path: '/insights', label: 'Industrial Insights', group: 'product' },
  { path: '/mission', label: 'Mission & Movement', group: 'product' },
  { path: '/jobs', label: 'Driver Job Board', group: 'product' },
  { path: '/welfare', label: 'Welfare Schemes', group: 'product' },
  { path: '/stories', label: 'Driver Stories', group: 'product' },
  { path: '/roi', label: 'ROI & Analytics', group: 'product' },
  { path: '/design-system', label: 'Design System', group: 'docs' },
  { path: '/dev/prompt', label: 'React Dev Prompt', group: 'docs' },
];

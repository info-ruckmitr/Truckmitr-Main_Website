/** Primary nav — same items on desktop (center) and mobile (drawer). */
export const MAIN_NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/stories', label: 'Driver Ki Awaz' },
  { path: '/insights', label: 'Insights' },
  { path: '/mission', label: 'Mission' },
  { path: '/welfare', label: 'Welfare' },
  { path: '/driver-hub', label: 'Driver Hub' },
  { path: '/oem-partner', label: 'Partner Portal' },
] as const;

export type MainNavLink = (typeof MAIN_NAV_LINKS)[number];

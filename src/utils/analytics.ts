export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', name, params);
  }
}

export function trackPageView(path: string) {
  trackEvent('page_view', { page_path: path });
}

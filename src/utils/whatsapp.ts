const BASE_URL = 'https://wa.me/';
const DEFAULT_NUMBER = '919100000000';

export function getWhatsAppLink(message?: string, number?: string): string {
  const phone = number ?? DEFAULT_NUMBER;
  const url = `${BASE_URL}${phone}`;
  if (message) return `${url}?text=${encodeURIComponent(message)}`;
  return url;
}

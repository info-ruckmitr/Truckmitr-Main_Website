/**
 * Extracts <body> inner HTML and concatenated <style> contents from <head>
 * so Stitch per-page CSS (noise overlays, glass-nav variants, etc.) is preserved.
 */
export function extractStitchHtmlParts(fullHtml: string): { bodyHtml: string; headStyles: string } {
  if (typeof document === 'undefined') {
    return fallbackExtractParts(fullHtml);
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(fullHtml, 'text/html');
  const headStyles = Array.from(doc.querySelectorAll('head style'))
    .map((el) => el.textContent ?? '')
    .join('\n');
  const body = doc.body;
  body.querySelectorAll('script').forEach((el) => el.remove());
  return { bodyHtml: body.innerHTML, headStyles };
}

function fallbackExtractParts(fullHtml: string): { bodyHtml: string; headStyles: string } {
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyHtml = bodyMatch
    ? bodyMatch[1].replace(/<script[\s\S]*?<\/script>/gi, '')
    : fullHtml;
  let headStyles = '';
  const headMatch = fullHtml.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  if (headMatch) {
    const styles = [...headMatch[1].matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
    headStyles = styles.join('\n');
  }
  return { bodyHtml, headStyles };
}

import { useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { extractStitchHtmlParts } from '../../lib/stitchHtml';

type Props = {
  html: string;
  title: string;
};

export function StitchHtmlPage({ html, title }: Props) {
  const navigate = useNavigate();
  const rootRef = useRef<HTMLDivElement>(null);
  const { bodyHtml, headStyles } = useMemo(() => extractStitchHtmlParts(html), [html]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest('a');
      if (!target || !(target instanceof HTMLAnchorElement)) return;
      const href = target.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }
      if (href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
      }
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [navigate, bodyHtml]);

  return (
    <div className="stitch-page min-h-screen bg-surface selection:bg-primary-container selection:text-white">
      {headStyles ? <style dangerouslySetInnerHTML={{ __html: headStyles }} /> : null}
      <div
        ref={rootRef}
        className="stitch-html-root font-body text-on-surface antialiased"
        dangerouslySetInnerHTML={{ __html: bodyHtml }}
      />
    </div>
  );
}

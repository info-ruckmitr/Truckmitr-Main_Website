import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import content from '../content/design-system.md?raw';

export default function DesignSystem() {
  useEffect(() => { document.title = 'TruckMitr | Design System'; }, []);

  return (
    <article className="mx-auto min-h-screen max-w-4xl bg-surface px-6 py-16 pb-32 text-on-surface">
      <div className="prose prose-lg max-w-none prose-headings:font-headline prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary prose-strong:text-on-surface">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}

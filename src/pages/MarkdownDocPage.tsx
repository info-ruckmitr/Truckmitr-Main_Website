import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Props = {
  markdown: string;
  title: string;
};

export function MarkdownDocPage({ markdown, title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <article className="mx-auto min-h-screen max-w-4xl bg-surface px-6 py-16 pb-32 text-on-surface">
      <div
        className="prose prose-lg max-w-none prose-headings:font-headline prose-headings:text-on-surface prose-p:font-body prose-p:leading-relaxed prose-a:text-primary prose-strong:text-on-surface prose-code:text-primary"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </article>
  );
}

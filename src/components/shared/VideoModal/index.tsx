import { useEffect, type ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function VideoModal({ open, onClose, children }: Props) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-on-surface/80 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Close" />
      <div className="relative z-10 w-full max-w-4xl mx-4 bg-surface rounded-2xl overflow-hidden shadow-2xl">
        <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-on-surface/20 text-white flex items-center justify-center hover:bg-on-surface/40 transition-colors" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
        {children}
      </div>
    </div>
  );
}

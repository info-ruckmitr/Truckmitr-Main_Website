import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SiteNav } from './SiteNav';

export function AppShell() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="fixed bottom-6 right-6 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2"
        aria-label="Open site navigation"
        onClick={() => setOpen(true)}
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[1001] flex justify-end bg-on-surface/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-surface-container-lowest shadow-2xl">
            <div className="flex items-center justify-between border-b border-outline-variant/20 px-4 py-3">
              <span className="font-headline text-sm font-semibold text-primary">Navigate</span>
              <button
                type="button"
                className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <SiteNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}

      <Outlet />
    </>
  );
}

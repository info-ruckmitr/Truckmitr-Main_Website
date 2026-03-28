import { useLang } from '../../../context/LanguageContext';

export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      className={`p-2 hover:bg-slate-100/50 rounded-lg transition-all active:scale-95 ${className}`}
      aria-label="Toggle language"
    >
      <span className="material-symbols-outlined text-primary">translate</span>
    </button>
  );
}

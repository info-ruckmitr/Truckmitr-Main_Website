import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'hi';

type LanguageContextValue = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (en: string, hi: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = (en: string, hi: string) => (lang === 'hi' ? hi : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}

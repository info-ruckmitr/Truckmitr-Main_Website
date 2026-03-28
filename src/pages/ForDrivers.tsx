import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../utils/whatsapp';

const benefits = [
  {
    icon: 'work',
    title: 'नौकरी ढूंढें',
    desc: 'अपनी पसंद और रूट के अनुसार बेहतरीन काम पाएं।',
    to: '/jobs',
  },
  {
    icon: 'health_and_safety',
    title: 'सेहत और कल्याण',
    desc: 'स्वास्थ्य बीमा और समय-समय पर चेकअप की सुविधा।',
    to: '/welfare',
  },
  {
    icon: 'emoji_events',
    title: 'ईनाम जीतें',
    desc: 'अच्छे काम के लिए पॉइंट्स और खास डिस्काउंट पाएं।',
    to: '/stories',
  },
  {
    icon: 'school',
    title: 'सीखें और आगे बढ़ें',
    desc: 'नए नियम और ड्राइविंग कौशल सीखें।',
    to: '/mission',
  },
] as const;

export default function ForDrivers() {
  useEffect(() => { document.title = 'TruckMitr | Driver Hub (Hindi)'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[751px] flex items-center overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" alt="Driver hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANa1K7Vh-cd20xsc-JVJA5jp_E7savd-9xHDtjaMprwIH24EmRJdpxHPV5wdds0YJJspD3C8F3qRQW_TvfIP6h_0vr8Pt9_hOxH8ZaHAZPkS6BZz20ckmFJ-appnRJE1U5EZXh7ZwQm0GCmykOIHgN2TnTUJcdFhlTzVTVOlvMCChEyeaBhcBx_tVbrRgPD98my6osX26N5f7lL-dRJIjWIVhDlHSsc6HY1s5TGjlKng8jfvHt7MERCfr9W1CBk8ZXDwZUoMrAKTWk" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed-variant font-label font-medium text-sm mb-6 tracking-wide">भरोसेमंद साथी</span>
            <h1 className="font-headline font-black text-4xl md:text-6xl text-primary leading-tight mb-8">
              ट्रकमित्र के साथ अपनी <span className="text-tertiary">कमाई</span> और <span className="text-tertiary">सम्मान</span> बढ़ाएं
            </h1>
            <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg">
              भारत के 50,000+ ड्राइवरों के साथ जुड़ें और अपनी तरक्की का रास्ता चुनें।
            </p>
            <a className="flex items-center justify-center gap-3 bg-tertiary text-on-tertiary px-8 py-5 rounded-full font-bold text-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all w-fit" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-3xl">chat</span>
              WhatsApp पर जुड़ें
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-surface-container-low py-8 border-y border-outline-variant/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Driver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcx61KgDM8ShjJyrx-CeUHMosGm9tK_BoA3RrPZVthuLtGkvYsY0-XKeggiTmRiNyvuIl5FsGkrYFOeL3hy1Z4IstygkK-1nY5Obj-hJDc18Z0uo59x1Ej0pSZoaBMK1jsHaSpvRR82Kv_r1dU639X36RePoiql1Olxawa3_ElKd0VvLewSN5lQ--JPFEK_09GB0ORS8P9Mc0eFsQXDtA8FNq1SUpomIGyB3nivFmdTEcMvBNTkNxVdcjalZqLfJHKB-pMIIbdzbS8" />
                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Driver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQHRvIgwgGHS5De6TJ9SXJbmpx9oSmSWmNjXu8YFBQT_AbSaknmmSP-jvA0qfRH0yhWd7ldGqhE0AYTYfuj4AnuaK0iLhC3LT-DaLQdRrFEj1wx8v1ctiCLIBGazZlFzwYqlTAuysO77K5cQWIgysFTXSi0so0zl-LdjRPExEncPN5821ufqJG4YWtswA2wVBOkUDD_Ou8jeDzr6ZPq7cs125eucoxajzwrQG7ljOiTyEAIrgahfTmwWPh3o_a8akjybNNq3mM3VXG" />
                <img className="w-12 h-12 rounded-full border-2 border-surface-container-lowest object-cover" alt="Driver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3wdFxrjNSH7efULViRqGWtVZaWEPlhpslYeP7F9iEZ2X7oItrf3HzcCOHkW9jtAEgLBltkmDw3f20VKGxnZtUXpe5bXauUciJMthmvlxUgUL6YJQD9tXVbaRhF1Qu8iYg9_cLFvU1_ZA9EzyGQg7QtI0r-WPBemc4tKIIu1aV4mdn77fxiMD8Nj0JNJNCvA_ES2eQdr64djVtejijwTi4Jup5nIWVaOdUUsHFPed4LuNMHqjwLhY5wiAt0m3kjveNR0lAJdayea07" />
              </div>
              <p className="font-label font-semibold text-primary text-lg">50,000+ ड्राइवर हमारे साथ जुड़े हैं</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-4">हमारी सेवाएं</h2>
            <div className="h-1.5 w-24 bg-tertiary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Link
                key={b.to}
                to={b.to}
                className="group p-8 bg-surface-container-low rounded-xl hover:bg-primary-container transition-all duration-300 flex flex-col items-center text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary-fixed">
                  <span className="material-symbols-outlined text-primary text-3xl">{b.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-xl mb-3 group-hover:text-on-primary">{b.title}</h3>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">{b.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-headline font-bold text-3xl md:text-5xl text-on-primary mb-8 leading-tight">क्या आप तैयार हैं?</h2>
          <p className="text-on-primary-container font-body text-lg mb-12 max-w-xl mx-auto">आज ही भारत के सबसे बड़े ड्राइवर कम्युनिटी का हिस्सा बनें।</p>
          <div className="flex flex-col items-center gap-4">
            <a className="w-full max-w-md flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-full font-bold text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-4xl">chat</span>
              WhatsApp पर जुड़ें
            </a>
            <span className="text-on-primary-container font-label text-sm uppercase tracking-widest opacity-80 mt-4">निःशुल्क और सुरक्षित</span>
          </div>
        </div>
      </section>
    </>
  );
}

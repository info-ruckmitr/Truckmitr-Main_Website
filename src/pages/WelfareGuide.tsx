import { useEffect } from 'react';
import { schemes } from '../data/schemes';

export default function WelfareGuide() {
  useEffect(() => { document.title = 'TruckMitr | Welfare Schemes Guide'; }, []);

  return (
    <>
      {/* Hero */}
      <header className="relative px-8 pt-16 pb-24 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="relative z-10 lg:grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-label tracking-widest uppercase">Community Welfare</span>
              <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-tight tracking-tight">
                Welfare Schemes <br /><span className="text-primary italic">कल्याणकारी योजनाएं</span>
              </h1>
            </div>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              A comprehensive guide for India's logistics backbone. Access benefits across health, pension, and insurance through government-backed initiatives.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-primary text-on-primary font-medium rounded-xl flex items-center gap-2 hover:opacity-90 transition-all">
                Explore Schemes <span className="material-symbols-outlined">arrow_downward</span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="w-full aspect-square rounded-full bg-surface-container overflow-hidden border-[12px] border-surface-container-lowest">
              <img alt="Driver" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBguW5-whvDeXpwXF0KW3cp3issBxj7IDCWNP5gBQFnOxlMLU0Gu6nDXQIEvbiyFssFVWQyz6q49Y-DkJq02ppD1J6X5iCHhJguvjupLlDvqx8rGJzI36mUPrNe2KmZ18fCkDpLo7CiiXBTxTwSN2kVDRjjGQIc2HWayK2V1G_qwi5WQD8vXVHxlhqrsyu5B39P13w9nTFEJOnnRpF6Je9sG4P_qKVQibe-QQd9OHbBvLKeTWMkBkjspEjj47ptjqhAXc4mhiWxrhji" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-tertiary-container text-on-tertiary-container p-8 rounded-xl max-w-[200px] shadow-xl">
              <p className="text-xs font-label uppercase tracking-widest opacity-80 mb-2">Impact</p>
              <p className="text-3xl font-headline font-bold">10M+</p>
              <p className="text-sm font-body leading-snug">Drivers empowered across the nation</p>
            </div>
          </div>
        </div>
      </header>

      {/* Schemes Grid */}
      <section className="px-8 max-w-screen-2xl mx-auto space-y-12 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline text-primary">Key Initiatives <span className="text-on-surface-variant/50 text-xl font-normal">प्रमुख पहल</span></h2>
            <p className="text-on-surface-variant font-body">Verified resources for your family's future security.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme) => (
            <div key={scheme.id} className={`group p-8 rounded-xl transition-all flex flex-col justify-between min-h-[400px] ${scheme.highlight ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest'}`}>
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className={`material-symbols-outlined text-4xl ${scheme.highlight ? 'text-primary-fixed-dim' : 'text-primary'}`}>{scheme.icon}</span>
                  {scheme.tag && <span className={`text-xs font-label uppercase tracking-widest px-3 py-1 rounded ${scheme.highlight ? 'bg-primary-container text-on-primary-container' : 'bg-tertiary-fixed text-on-tertiary-fixed'}`}>{scheme.tag}</span>}
                </div>
                <h3 className="text-2xl font-headline mb-2">{scheme.name}</h3>
                <p className={`mb-6 font-body leading-relaxed ${scheme.highlight ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>{scheme.description}</p>
                <ul className="space-y-3 text-sm font-body">
                  {scheme.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-tertiary">check_circle</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`mt-8 pt-8 border-t flex items-center justify-between font-semibold group-hover:translate-x-1 transition-transform ${scheme.highlight ? 'border-on-primary/10' : 'border-surface-container text-primary'}`}>
                Know More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-8 py-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-headline">Common Questions</h2>
          <p className="text-on-surface-variant">Clear answers for our driver community.</p>
        </div>
        <div className="space-y-4">
          {[
            { q: 'Is registration for e-Shram mandatory?', a: 'While not mandatory by law, it is highly recommended to receive all benefits of government social security schemes directly in your bank account.' },
            { q: 'Can I apply for PM-JAY if I already have a private insurance?', a: 'Eligibility for PM-JAY is based on specific deprivation criteria in SECC 2011 data. If you meet those criteria, you are eligible regardless of private insurance.' },
            { q: 'How do I update my mobile number on e-Shram?', a: 'You can update it via any CSC center or by visiting the official self-enrollment portal using Aadhaar-linked mobile authentication.' },
          ].map((faq) => (
            <details key={faq.q} className="group bg-surface-container-lowest rounded-xl p-6 border border-transparent hover:border-outline-variant/20 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-lg list-none">
                {faq.q}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}

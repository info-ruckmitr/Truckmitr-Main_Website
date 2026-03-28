import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function Home() {
  useEffect(() => { document.title = 'TruckMitr | Main Entry Hub'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[614px] md:h-[716px] overflow-hidden bg-surface-container-low flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbUBMflnZ49PaOd43lpSTN9VyUuDWnEvsqZAGOJ55_xc5CXfypaFRfUIzNgfP_VRZMXI4GixM0ZHpHTnHjPGij8dgcZDmCWZYkcIX42uJlVf78PUHDRVJWfwC61_FRgFlwE71oS6O8sxOiSx2z8KBnSIPiXNohe5K2_LHJRowdWUq717Ie_kDFuIe3baY_WsDq6e0TbRPyLpV79hmXjb-AcDcVuq4xIjj0G6AQ8UhZ0r_j7VlI43Uhyihi5qQIBSEvqwkr05OAbYyz')" }} />
        <div className="container mx-auto px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-fixed text-sm font-label tracking-widest rounded-full mb-8 uppercase">Institutional Grade Logistics</span>
          <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-[1.1] max-w-5xl mx-auto tracking-tight font-bold">
            Curating the Future of <br /><span className="text-primary italic">Industrial Mobility.</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between 50,000+ Verified Drivers and high-yield institutional capital.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-5 pointer-events-none select-none">
          <img alt="" className="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAonkKn1K6414wf7SkyinUbiRGrlKfOmAVa4vLXSAPjdv8Pa_p3ipWAf7zb7F8SS_bnbnZkyASrErS8Byg86AMvQU_1ZPUCmj5OlWDW0GmPFuSfn5ml0-bY0RBCN1XBM4w7oeSNrDedaUZlGjHGC3NvkwpZaUE1d2wZF2VQQheL2Tt_enEC22YWMaRkAqRp_4hvFx_5K5fyCv2P3wS-2J1OFjMhg_3Ra2GfhQ2EEoB-i9olUPD3tLfsc-3Td3sEQ7X1J9xxvROyveAZ" />
        </div>
      </section>

      {/* Gateway: Dual Path */}
      <section className="relative -mt-32 pb-24 px-8 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 editorial-shadow rounded-2xl overflow-hidden">
            {/* Driver Entry */}
            <div className="bg-surface-container-lowest p-10 md:p-16 relative flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-48 h-48 opacity-5 -mr-12 -mt-12 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-on-surface">local_shipping</span>
              </div>
              <div>
                <span className="text-tertiary font-label font-semibold tracking-widest uppercase text-xs mb-4 block">Driver Gateway</span>
                <h2 className="text-4xl md:text-5xl font-headline text-on-surface mb-6 hindi-text leading-tight font-bold">
                  I am a Driver <br /><span className="text-tertiary">(मैं एक ड्राइवर हूँ)</span>
                </h2>
                <p className="text-lg text-on-surface-variant mb-12 max-w-sm leading-relaxed">
                  Join India's most trusted network. Get paid on time, secure your family's future, and drive with pride.
                </p>
                <div className="space-y-4 mb-12">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">verified_user</span>
                    <span className="text-on-surface font-medium">50,000+ Verified Network</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">account_balance_wallet</span>
                    <span className="text-on-surface font-medium">Instant Settlements (INR)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="bg-tertiary-container hover:bg-tertiary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]">
                  <span className="material-symbols-outlined">chat</span>
                  Join via WhatsApp
                </a>
                <Link to="/driver-hub" className="border border-outline-variant hover:bg-surface-container text-on-surface px-8 py-4 rounded-xl font-medium transition-all inline-flex items-center justify-center">
                  Learn More
                </Link>
              </div>
              <div className="mt-12 flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <img alt="Professional Indian Driver" className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeG8C-wxZqeoEYOYDq8PP1cKXYGVyjb__lZ-mCQ5yfPIxHKmgcAGB3uv2LjNtcMzc4O3Q2lSokfSq3jzusPqS464Hy3TufjCY1K-9asCIuEa4e-AsuhDfBfr1DD5-yJCTcm0YKjStcv5lTut2cIvISRa1XvKmNJeV3hBAbf-bX33Trc_IukYtr5ogOQTLDX9dBohsZncjZpbY-2z1tiTY_EIMGJDvnqyzltcxov3EP-F3hBbplBiYcmDgbA3M9dKpbZKdh9RSn58HM" />
                <div>
                  <p className="text-sm font-bold text-on-surface">Rajesh Kumar</p>
                  <p className="text-xs text-on-surface-variant">Fleet Member since 2021</p>
                </div>
              </div>
            </div>

            {/* Investor Entry */}
            <div className="bg-primary p-10 md:p-16 text-white relative flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-container opacity-50" />
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <svg className="w-full h-full fill-white" viewBox="0 0 100 100">
                  <rect height="10" width="10" x="10" y="80" />
                  <rect height="30" width="10" x="30" y="60" />
                  <rect height="50" width="10" x="50" y="40" />
                  <rect height="70" width="10" x="70" y="20" />
                  <rect height="85" width="10" x="90" y="5" />
                </svg>
              </div>
              <div className="relative z-10">
                <span className="text-on-primary-container font-label font-semibold tracking-widest uppercase text-xs mb-4 block">Institutional Gateway</span>
                <h2 className="text-4xl md:text-5xl font-headline mb-6 leading-tight font-bold">
                  I am a Partner / Fleet Owner
                </h2>
                <p className="text-lg text-on-primary-container mb-12 max-w-sm leading-relaxed">
                  Deploy capital at scale. Our technology-led curation provides unmatched visibility and risk-adjusted returns.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div>
                    <p className="text-4xl font-headline font-bold text-white mb-1">₹100Cr+</p>
                    <p className="text-xs font-label uppercase tracking-widest text-on-primary-container">Portfolio Managed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-headline font-bold text-white mb-1">18.5%</p>
                    <p className="text-xs font-label uppercase tracking-widest text-on-primary-container">Avg. Annual ROI</p>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                <Link to="/roi" className="bg-white text-primary hover:bg-on-primary-container px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]">
                  <span className="material-symbols-outlined">dashboard</span>
                  View ROI Dashboard
                </Link>
                <Link to="/investor" className="bg-primary-container/40 hover:bg-primary-container/60 text-white border border-on-primary-container/20 px-8 py-4 rounded-xl font-medium transition-all backdrop-blur-sm inline-flex items-center justify-center">
                  Investor Relations
                </Link>
              </div>
              <div className="relative z-10 mt-12 inline-flex items-center gap-2 bg-on-primary-fixed/20 px-4 py-2 rounded-full self-start">
                <div className="w-2 h-2 rounded-full bg-tertiary-fixed animate-pulse" />
                <span className="text-xs font-medium tracking-wide">Live Asset Tracking Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-16 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex -space-x-4">
                <img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8gpqE5dqdigeC5rsy2xjU9hiQhUJqskk3txzpNoyckNRMmtNMRE_sZqVntlkOWqwaNo01JB-aKbuVqO1tUsoeholmM9TAnuRZDDaogIOKE3vVJfGQWCNfiuoZg35ykabvlrPicmYptmMba08TCya4T49HQcJJG944YrNRlgbveZyj0pI8SvR98cIqPuLHs6HZ0NILrJZ5dOlXcqmHeE8ZJGFP-gh8E8lUDfg6gC9AUkXqMo1fo4X2xgFmgdhej7uYVz-8CZynTWxt" />
                <img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHJgiqlC5iXkYHhzEgWohl6LJWj0Zv6OYJLNfS4sf-N5OXv28j6DWhBHxJN03HuWWTvOe022MDJJyLW-fk9mCpjjVC2Aod2o-i2IynTK-B_pXQU2yg0xzNfU-6AfYUrQ4yNgnYxodWl_fsooOpCfxUbFSiHpIag9hfgQ9Xzw0OqtSxf-on-juY8NzngbjUVqmzSFjFwQ4ZTSP0ReqyKetli3O11Oz4GxD_F6OgR3baFnEydpEK-Le5h9HJfJee0mEEwOvKxg7oMHG" />
                <img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqvGYkGSbFk3ImDNsmKqIg2ilSxwzbl9QPUlCZCt45YWVvJnqOTQaRaLZWwQrWVbb5wlCXA--MpU8z442qPhgMLmpewSFCDs8XTR0UxHqrK6ntbN29aftTe95353XAMLrdJNNFiTo9FwTK8XD0PwpzVS_oTc_NDqtEAPzSDRP_cWyjmM-6H-q1LR9sKYZTUFwfdih-D6kCcX9ntsJvzPDoo7IcMm7mGlTAiXw6W9lcJQ7YaDIjrZG8ZS4dsq62XZy5NHXlbTyQx6vZ" />
                <div className="w-12 h-12 rounded-full border-2 border-surface bg-primary text-white flex items-center justify-center text-xs font-bold">+50k</div>
              </div>
              <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">
                <span className="text-on-surface font-bold">50,000+ Verified Drivers</span> operating across 24 states
              </p>
            </div>
            <div className="flex gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 font-headline font-bold text-xl text-on-surface">
                <span className="material-symbols-outlined">factory</span> OEM PARTNERS
              </div>
              <div className="flex items-center gap-2 font-headline font-bold text-xl text-on-surface">
                <span className="material-symbols-outlined">account_balance</span> FISCAL CORP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-4xl md:text-5xl font-headline text-on-surface mb-8 leading-tight font-bold">
                Managing the Logistics <br />Value Chain with <span className="text-primary">Curated Precision.</span>
              </h3>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-xl">
                Traditional logistics is fragmented. We solve this by introducing institutional-grade governance, predictive analytics, and a human-centric approach to driver welfare.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-surface-container-lowest rounded-xl border-l-4 border-primary">
                  <h4 className="font-bold text-on-surface mb-2">Transparency</h4>
                  <p className="text-sm text-on-surface-variant">Real-time ledger access for every ₹ invested.</p>
                </div>
                <div className="p-6 bg-surface-container-lowest rounded-xl border-l-4 border-tertiary">
                  <h4 className="font-bold text-on-surface mb-2">Social Impact</h4>
                  <p className="text-sm text-on-surface-variant">Improving driver livelihoods by 40% year-on-year.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden editorial-shadow">
                <img alt="Logistics Center" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkbmIsv_zQSTu0OPDXARQCL1Mxq5QkZ-j_wo4ekIl8ftUgrbGFetQkEI7796MZPJUw48Bh8oqDuPtg30sv7PdrRsziFlEEilncw_3VfNvJxdROC82c-I4s0yA3OMoqXMDhQ3ALMX-eiFct1_3g6T3320dk7v81Wdb3enXV8Kw22oT6BpzYVN0coCnNpEJNwQu-bsI5U-NJlPMEYBwmQIlDFhSwjFuQJXES8WAryB6ePWKOrIdumlR5AZao9aY02rMKEzlIQ1W7lQEs" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl editorial-shadow max-w-xs hidden md:block border border-outline-variant/10">
                <p className="text-primary font-headline text-4xl font-bold mb-2">99.8%</p>
                <p className="text-sm font-label text-on-surface-variant uppercase tracking-tighter">On-Time Delivery Performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';

export default function ForOEMs() {
  useEffect(() => { document.title = 'TruckMitr | OEM Partner Portal'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block font-label text-sm font-semibold tracking-widest text-primary uppercase mb-4">Strategic Institutional Access</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface leading-[1.1] mb-8 tracking-tight">
              Unmatched Access to the <span className="text-primary">$51Bn</span> CV Market
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-2xl">
              TruckMitr bridges the gap between major OEMs, Insurers, and the backbone of the economy.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-container transition-all">View Portfolio</button>
              <button className="border border-outline-variant/30 px-8 py-4 rounded-xl font-semibold hover:bg-surface-container-low transition-all">Download Thesis</button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-full overflow-hidden bg-surface-container-low shadow-2xl shadow-primary/5">
              <img alt="Commercial Logistics" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3DWlZ4a1P5CasPFeRf-G3FKFouJdX86DnYMUP6loIsT7K_XppkIZnuVzBkou4kSYSWdeItahgenGJgLS0UFblxBnuWSeWPhuKSZd6-zoPEd4xhVnelAbS7ugW6rk9fbmgShLSsnAA286O4HNpyhFM0p6VJK7lR6qw2gN50emtmwLWW0tAu_kjHYxI467HAe-j9pAajtSLJTanK4EknXqMcBZVjqF106JDOfsXbxnCLkozU3LAxYgM_DL8VMYp0cxxj5D5k5zMpZE_" />
            </div>
            <div className="absolute -bottom-6 -left-12 bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 max-w-[280px]">
              <p className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-2">Network Reach</p>
              <p className="font-headline text-4xl font-bold text-tertiary">50,000+</p>
              <p className="font-body text-sm text-on-surface-variant mt-1 leading-snug">Verified Commercial Drivers across Pan-India routes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Asset */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-black mb-6">The Community Asset</h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Our 50,000-strong driver community isn't just a user base; it's a strategic asset for market intelligence and ground-level influence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">forum</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Driver Feedback Programs</h3>
              <p className="font-body text-on-surface-variant max-w-md">Get direct insights from the people who operate your assets.</p>
            </div>
            <div className="bg-primary p-10 rounded-xl text-on-primary">
              <span className="material-symbols-outlined text-3xl mb-4">ev_charger</span>
              <h3 className="font-headline text-2xl font-bold mb-4">EV Training</h3>
              <p className="font-body opacity-90">Specialized transition modules for ICE to Electric fleet management.</p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/5">
              <span className="material-symbols-outlined text-tertiary text-3xl mb-4">verified_user</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Brand Engagement</h3>
              <p className="font-body text-on-surface-variant">Strategic placements within the driver's daily workflow.</p>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-xl flex flex-col md:flex-row gap-8 items-center border border-outline-variant/5">
              <div className="flex-1">
                <h3 className="font-headline text-2xl font-bold mb-2">Influence Score (D-IS)</h3>
                <p className="font-body text-on-surface-variant mb-6">Proprietary metrics quantifying driver reliability and community influence.</p>
                <div className="flex gap-4">
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-md font-label text-xs font-bold uppercase tracking-wider">Predictive Data</span>
                  <span className="bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-md font-label text-xs font-bold uppercase tracking-wider">Risk Assessment</span>
                </div>
              </div>
              <div className="w-full md:w-48 aspect-square bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/10">
                <div className="text-center">
                  <p className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Avg Score</p>
                  <p className="font-headline text-5xl font-black text-primary">8.4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-surface-container-highest/30 py-24 border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-black mb-4">Partner with Us</h2>
            <p className="font-body text-on-surface-variant">Speak with our Institutional Partnership team to design a bespoke engagement strategy.</p>
          </div>
          <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-bold text-on-surface-variant">Full Name</label>
                <input className="h-12 px-4 rounded-lg bg-surface border-transparent focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="Johnathan Doe" type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-sm font-bold text-on-surface-variant">Organization</label>
                <input className="h-12 px-4 rounded-lg bg-surface border-transparent focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="OEM / Insurance / Tech" type="text" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-sm font-bold text-on-surface-variant">Professional Email</label>
                <input className="h-12 px-4 rounded-lg bg-surface border-transparent focus:ring-1 focus:ring-primary focus:bg-white transition-all" placeholder="j.doe@company.com" type="email" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-sm font-bold text-on-surface-variant">Strategic Intent</label>
                <textarea className="p-4 rounded-lg bg-surface border-transparent focus:ring-1 focus:ring-primary focus:bg-white transition-all resize-none" placeholder="How can TruckMitr assist your market goals?" rows={4} />
              </div>
              <div className="md:col-span-2 mt-4">
                <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all" type="submit">
                  Request Partnership Briefing
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

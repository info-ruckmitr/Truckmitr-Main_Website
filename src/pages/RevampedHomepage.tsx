import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RevampedHomepage() {
  useEffect(() => { document.title = 'TruckMitr | Revamped Homepage'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Industrial truck" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWa0znfhWAz4TEehbFoVla4_5UPfZVs0kqp6bgyUh5CfssEg2NiQxt_qMXTZ3EI93NTP7z4IH7ahcyWbsbqCq462Dt_1PmXzsrQjcgPcekMdEbVAMzm684IonYfknrxzmInvEw5MDD-7fjzTpbutJ8WwHPnU3JZ7nScjxU0e6mkGusVKtUpVDXfDM05qu3Eyhrlp0EzSaRrL8YnjoLPrtCgAgd2UQDmdUqRNBiFOjLUNqFkwcOWzKNqk2diBTPvoHGVt-kVZGjwcT2" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#191C1D]/90 via-[#191C1D]/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="font-label text-primary-fixed uppercase tracking-[0.2em] font-medium mb-4 block text-sm">Institutional Logistics</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Iron &amp; Fleet: <br /><span className="text-primary-fixed-dim">Defining Excellence</span>
            </h1>
            <p className="text-xl text-surface-variant font-body mb-12 leading-relaxed opacity-90">
              Transforming the backbone of Indian logistics through high-stakes data precision and a driver-first ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/driver-hub" className="group relative px-8 py-5 bg-primary text-white font-bold rounded-lg overflow-hidden transition-all hover:bg-primary-container">
                <span className="relative z-10 flex items-center gap-2">
                  I am a Driver (मैं एक ड्राइवर हूँ) <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </Link>
              <Link to="/roi" className="px-8 py-5 bg-surface-container-lowest text-primary font-bold rounded-lg border border-outline-variant/30 hover:bg-surface transition-all flex items-center gap-2">
                I am a Fleet Owner / Partner (ROI-led) <span className="material-symbols-outlined">trending_up</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-primary text-on-primary py-8 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col"><span className="text-3xl font-black font-headline">50,000+</span><span className="font-label text-primary-fixed-dim uppercase tracking-wider text-sm">Verified Drivers</span></div>
            <div className="flex flex-col border-y md:border-y-0 md:border-x border-on-primary/20 py-6 md:py-0 md:px-12"><span className="text-3xl font-black font-headline">10k+ Lacs</span><span className="font-label text-primary-fixed-dim uppercase tracking-wider text-sm">KM Travelled</span></div>
            <div className="flex flex-col"><span className="text-3xl font-black font-headline">28+ Lacs</span><span className="font-label text-primary-fixed-dim uppercase tracking-wider text-sm">Trucks Network</span></div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20"><h2 className="text-4xl font-bold text-on-surface mb-4">Precision Logistics Infrastructure</h2><div className="h-1.5 w-24 bg-tertiary" /></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-outline-variant/20 rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm">
            {[
              { icon: 'analytics', title: 'ROI Analytics', desc: 'Advanced institutional reporting that converts every kilometer into measurable financial growth.' },
              { icon: 'handshake', title: 'Driver Retention', desc: 'Elevating driver dignity through dedicated support, transparent payouts, and community-first approach.' },
              { icon: 'hub', title: 'Network Expansion', desc: 'Scale your fleet operations across 200+ hubs with standardized quality control.' },
            ].map((card, i) => (
              <div key={card.title} className={`p-10 hover:bg-surface-container transition-colors group ${i < 2 ? 'border-b md:border-b-0 md:border-r border-outline-variant/20' : ''}`}>
                <span className="material-symbols-outlined text-4xl text-primary mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{card.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Impact */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-label text-tertiary font-bold tracking-widest uppercase mb-4 block text-sm">Performance Metrics</span>
            <h2 className="text-4xl font-black mb-6">Industrial Impact Index</h2>
            <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
              Our data visualization reflects the core efficiency gains across the TruckMitr ecosystem.
            </p>
            <div className="space-y-6">
              <div className="bg-surface-container p-6 rounded-xl">
                <div className="flex justify-between items-end mb-2"><span className="font-bold text-on-surface">Community Growth</span><span className="text-tertiary font-black">+42% YoY</span></div>
                <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden"><div className="bg-tertiary h-full w-[85%]" /></div>
              </div>
              <div className="bg-surface-container p-6 rounded-xl">
                <div className="flex justify-between items-end mb-2"><span className="font-bold text-on-surface">Fleet Utilization</span><span className="text-primary font-black">94.2%</span></div>
                <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden"><div className="bg-primary h-full w-[94%]" /></div>
              </div>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl bg-surface-container-high p-8 flex items-center justify-center overflow-hidden group">
            <div className="relative w-full h-full flex items-end gap-2 px-4">
              {[30, 50, 45, 75, 90].map((h, i) => (
                <div key={i} className={`flex-1 bg-primary/${20 + i * 20} rounded-t-lg transition-all group-hover:h-[${h + 10}%]`} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Partnership */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary-container rounded-[2rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
            <div className="flex-1 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Institutional Precision for Fleet Owners</h2>
              <p className="text-xl text-on-primary-container leading-relaxed mb-10">
                Join an elite network of ROI-driven partners.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div><span className="block text-3xl font-black mb-2">18%</span><span className="font-label text-sm uppercase opacity-70">Average Efficiency Gain</span></div>
                <div><span className="block text-3xl font-black mb-2">0%</span><span className="font-label text-sm uppercase opacity-70">Payout Discrepancy</span></div>
              </div>
              <button className="bg-surface-container-lowest text-primary px-10 py-5 rounded-lg font-bold hover:bg-surface transition-colors">Inquire About Partnership</button>
            </div>
            <div className="flex-1 w-full relative z-10">
              <div className="aspect-video bg-[#191C1D] rounded-2xl p-2 border border-outline-variant/30 shadow-2xl">
                <img alt="Dashboard" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4k2MnGOdb4evtahj6KUQpFoQCLTE3EWXnTfJ7A92YoUltx2fKbJPtvzN1gQUFIzzLqLmZK9FlbRM9Sqlvt0EN72OoncDdHCiIYn0ZkV7VoiQcQnqGuB4y6Apkbz9XE0EoQF_Zau95SPpySTylpmb94zUc3YgDjnXUnsQZ-3CJHAZhv9OLpKwoFvUtf4Z_CMyjQVMimqPPMgOJGqaL38X5nPiEE8boix09AvksSQtrGaDhgpT2Q10R7ajRve5ahLCtmHOUDpp3sP7z" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

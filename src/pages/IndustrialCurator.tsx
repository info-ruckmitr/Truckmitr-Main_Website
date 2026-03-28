import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function IndustrialCurator() {
  useEffect(() => { document.title = 'TruckMitr | TruckMitr Homepage'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative px-8 py-20 max-w-screen-2xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="font-label uppercase tracking-widest text-sm text-primary font-medium mb-4 block">The TruckMitr</span>
            <h1 className="text-6xl md:text-7xl font-bold text-on-surface leading-[1.1] mb-8">
              The Future of <br /><span className="text-primary italic">Indian Logistics</span> is Here.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl mb-12 font-body">
              Elevating fleet management into a high-stakes investment asset. Where heritage trucking meets private equity precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/roi" className="px-8 py-5 bg-primary text-on-primary rounded-xl font-semibold flex flex-col items-start transition-all hover:scale-[1.02]">
                <span className="font-label text-xs uppercase tracking-tighter opacity-80">Industrial Partner</span>
                <span className="text-lg">View ROI Dashboard</span>
              </Link>
              <Link to="/driver-hub" className="px-8 py-5 bg-tertiary text-on-tertiary rounded-xl font-semibold flex flex-col items-start transition-all hover:scale-[1.02]">
                <span className="font-label text-xs uppercase tracking-tighter opacity-80">ड्राइवर पार्टनर</span>
                <span className="text-lg">अभी लोड खोजें (Find Load)</span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container-low rounded-[2rem] overflow-hidden relative group">
              <img alt="Fleet" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5MImOzzI--jjatuDw3XI3Vydkiu5ix8T9P1fUCUBS0DVWOnUl7DQ5X8vQn9QvPv1KerPKpiPBGS-kJ_b1a2wx8nYuRGAb4T0vzWeeRCsf5_fguqvPTOK3SM_ZoMxMOKxh1GfFGutXXIwwC6s0m5z9LZk2dp59GxeffKvosmtwdFnCxbxR1uiba0lXez1_WcqzzBa7kUr__VPO8Y_lAcA9quE4nxyoJe2bqhN9jLWIRBFtdmIif0XWGHylbfZTHqBA7al9HplFWmDl" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-xl shadow-2xl shadow-on-surface/5 border border-outline-variant/15 max-w-xs">
              <span className="material-symbols-outlined text-primary mb-4 text-4xl">analytics</span>
              <h3 className="text-4xl font-bold text-on-surface">₹100Cr+</h3>
              <p className="font-label text-sm uppercase tracking-widest text-on-surface-variant font-medium">Portfolio Managed</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: '14%', desc: 'Average ROI Increase across B2B partner portfolios in the last fiscal year.' },
              { value: '98.2%', desc: 'Fleet Uptime maintained through our AI-led preventive maintenance protocol.' },
              { value: '24/7', desc: 'Real-time driver support and cargo surveillance managed through centralized Command Center.' },
            ].map((kpi) => (
              <div key={kpi.value} className="space-y-4">
                <h4 className="text-primary font-headline text-5xl font-bold">{kpi.value}</h4>
                <p className="font-label text-on-surface-variant tracking-wide leading-relaxed">{kpi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Portfolio */}
      <section className="py-32 px-8 max-w-screen-2xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-label uppercase tracking-widest text-xs text-primary font-semibold mb-4 block">Asset Management</span>
          <h2 className="text-5xl font-bold mb-6">A Curated Ecosystem for <span className="text-tertiary">Industrial Growth</span></h2>
          <p className="text-on-surface-variant text-lg font-body">We transform standard logistics operations into optimized financial assets through technology and curation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-6 min-h-[600px]">
          <div className="md:col-span-4 bg-surface-container rounded-xl overflow-hidden relative group p-12 flex flex-col justify-end">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-on-surface">The Intelligence Engine</h3>
              <p className="max-w-md text-on-surface-variant font-body mb-6">Real-time data stream from over 50,000 sensors, providing unmatched visibility.</p>
              <Link to="/insights" className="inline-flex items-center text-primary font-semibold gap-2">Explore Analytics Platform <span className="material-symbols-outlined">arrow_forward</span></Link>
            </div>
          </div>
          <div className="md:col-span-2 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-center text-center">
            <span className="material-symbols-outlined text-5xl mb-6">trending_up</span>
            <h3 className="text-2xl font-bold mb-2">Yield Optimization</h3>
            <p className="opacity-80 font-body">Maximizing route efficiency to ensure every kilometer adds to your bottom line.</p>
          </div>
          <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-8 flex flex-col items-start">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">hub</span>
            <h3 className="text-xl font-bold mb-3">Pan-India Network</h3>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed">Access to 400+ hubs strategically located along major industrial corridors.</p>
          </div>
          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-12 flex items-center gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-3">Institutional Trust</h3>
              <p className="opacity-80 font-body text-lg">Managing over ₹100Cr in private fleet investments with 100% transparency and audit trails.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

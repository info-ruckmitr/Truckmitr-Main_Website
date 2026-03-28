import { useEffect } from 'react';

export default function ROIAnalytics() {
  useEffect(() => { document.title = 'TruckMitr | ROI & Performance Analytics'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-8 overflow-hidden bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <span className="inline-block text-tertiary font-label font-bold text-xs uppercase tracking-[0.2em] mb-4">Capital Optimization</span>
            <h1 className="font-headline text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-6">
              Institutional ROI &amp; <br /><span className="text-primary italic">Performance Analytics</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Data-driven insights for the ₹100+ Cr enterprise. We curate logistics efficiency by reducing driver turnover and maximizing fleet utilization.
            </p>
            <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/20">
              <div>
                <div className="font-label text-sm text-on-surface-variant uppercase tracking-widest mb-1">Attrition Savings</div>
                <div className="font-headline text-3xl font-bold text-tertiary">₹40k–80k <span className="text-sm font-label font-normal text-on-surface-variant italic">per driver</span></div>
              </div>
              <div>
                <div className="font-label text-sm text-on-surface-variant uppercase tracking-widest mb-1">Portfolio Growth</div>
                <div className="font-headline text-3xl font-bold text-primary">+14.8% <span className="text-sm font-label font-normal text-on-surface-variant italic">Annually</span></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm relative z-10">
              <img alt="Dashboard" className="rounded-lg w-full grayscale contrast-125 mb-6" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY0Srm-eIR4qCUCIdyGacdCZD9nI61O8hvIzXUBA-iSeDIeeTSvazcnYodMrbFySME3CqqkzJzED6Y1J1KmPPC1IUryhTjYLEQ9VidNwugj3xtLu05113GnYL6K-DcHdktkOKOS3bMEe319jv8a6E5qMpdZ5sbhZR1K72Ul47dEZQXRvegqXiD5T3wfOVBQrtvzbab2N-y1FwAsVacRUleY6PfeqEyF_wB0SsBP3evjN830Wk1qsAoa3BVHUTshdQqw6ghz919kwh2" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                  </div>
                  <div>
                    <div className="font-label text-xs font-bold text-on-surface-variant uppercase">Efficiency Index</div>
                    <div className="font-body text-sm font-semibold">98.2% Institutional Grade</div>
                  </div>
                </div>
                <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase">Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl font-bold mb-4">Capital Yield Calculator</h2>
            <p className="font-body text-on-surface-variant">Quantify the fiscal impact of TruckMitr integration across your fleet ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-10">
              <h3 className="font-headline text-xl font-bold mb-8">Fleet Parameters</h3>
              <div className="space-y-12">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant">Fleet Size (Units)</label>
                    <span className="font-headline text-2xl font-bold text-primary">150</span>
                  </div>
                  <input className="w-full h-1 bg-outline-variant/30 rounded-full appearance-none accent-primary cursor-pointer" max={500} min={10} type="range" defaultValue={150} />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant">Current Attrition Rate</label>
                    <span className="font-headline text-2xl font-bold text-primary">24%</span>
                  </div>
                  <input className="w-full h-1 bg-outline-variant/30 rounded-full appearance-none accent-primary cursor-pointer" max={60} min={5} type="range" defaultValue={24} />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-label text-sm font-bold uppercase tracking-wider text-on-surface-variant">Avg. Cost per Hire (₹)</label>
                    <span className="font-headline text-2xl font-bold text-primary">₹65,000</span>
                  </div>
                  <input className="w-full h-1 bg-outline-variant/30 rounded-full appearance-none accent-primary cursor-pointer" max={150000} min={20000} step={5000} type="range" defaultValue={65000} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary p-8 rounded-xl flex flex-col justify-between h-[240px]">
                <span className="material-symbols-outlined text-on-primary text-3xl">savings</span>
                <div>
                  <div className="text-on-primary-container text-xs font-label font-bold uppercase tracking-widest mb-1">Potential Annual Savings</div>
                  <div className="text-on-primary text-4xl font-headline font-bold tracking-tight">₹1.24 Cr</div>
                </div>
              </div>
              <div className="bg-tertiary p-8 rounded-xl flex flex-col justify-between h-[240px]">
                <span className="material-symbols-outlined text-on-tertiary text-3xl">speed</span>
                <div>
                  <div className="text-on-tertiary-container text-xs font-label font-bold uppercase tracking-widest mb-1">Efficiency Gain</div>
                  <div className="text-on-tertiary text-4xl font-headline font-bold tracking-tight">+22.4%</div>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h4 className="font-headline text-lg font-bold">TruckMitr Efficiency Gain</h4>
                    <p className="font-body text-xs text-on-surface-variant uppercase tracking-widest">Industry Standard vs. Optimized Performance</p>
                  </div>
                </div>
                <div className="h-48 w-full flex items-end justify-between gap-4 px-4">
                  {[{ std: 'h-24', opt: 'h-40' }, { std: 'h-20', opt: 'h-32' }, { std: 'h-28', opt: 'h-44' }, { std: 'h-16', opt: 'h-36' }].map((bar, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                      <div className={`w-full bg-outline-variant/20 rounded-t ${bar.std}`} />
                      <div className={`w-full bg-primary rounded-t ${bar.opt}`} />
                      <div className="text-center font-label text-[10px] text-on-surface-variant mt-2">Q{i + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="flex-1 bg-surface-container-high p-12 rounded-xl flex flex-col justify-center items-start relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold mb-4">Request Detailed Audit</h3>
              <p className="font-body text-on-surface-variant mb-8 max-w-sm">
                Get a bespoke institutional analysis of your fleet's attrition leaks and optimization opportunities.
              </p>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all hover:translate-x-1">
                Schedule Consultation
              </button>
            </div>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[12rem] text-primary/5 group-hover:rotate-12 transition-transform duration-700">assignment</span>
          </div>
          <div className="flex-1 border-2 border-outline-variant/20 p-12 rounded-xl flex flex-col justify-center items-start hover:border-primary/40 transition-colors">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">menu_book</span>
            <h3 className="font-headline text-3xl font-bold mb-4">Download Whitepaper</h3>
            <p className="font-body text-on-surface-variant mb-8 max-w-sm">
              "The TruckMitr: Rethinking Driver Retention as a Financial Asset."
            </p>
            <a className="flex items-center gap-2 font-label text-sm font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all" href="#">
              Access Whitepaper <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

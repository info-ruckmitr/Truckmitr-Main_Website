import { useEffect } from 'react';

export default function IndustrialInsights() {
  useEffect(() => { document.title = 'TruckMitr | Industrial Insights'; }, []);

  return (
    <>
      {/* Header */}
      <header className="pb-16 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-label uppercase tracking-widest text-xs font-semibold text-primary mb-4 block">Industrial Intelligence</span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
              The TruckMitr: <br /><span className="italic font-normal">Data-Driven Strategic Reports</span>
            </h1>
          </div>
          <div className="lg:col-span-4 border-l-2 border-primary/10 pl-8 hidden lg:block">
            <p className="font-body text-on-surface-variant text-lg leading-relaxed">
              Exclusive logistics insights designed for ₹100+ Cr B2B enterprises.
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="px-8 pb-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-wrap gap-3 items-center">
          <span className="font-label text-xs font-bold uppercase text-outline mr-4">Filter By:</span>
          {['All Insights', 'Logistics Strategy', 'Human Capital', 'Technology'].map((f, i) => (
            <button key={f} className={`px-6 py-2 rounded-md text-sm font-label font-medium transition-all ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}>{f}</button>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <main className="px-8 pb-24 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8">
          {/* Featured */}
          <article className="md:col-span-6 lg:col-span-8 group cursor-pointer bg-surface-container-lowest overflow-hidden rounded-xl border border-outline-variant/15 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 overflow-hidden h-80 lg:h-auto">
              <img alt="Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEcVrNBh_U5tHGmF2WNeLGJNEIOFGS88mf_vdVpDvp2xtuvmsVTy5XzhsheB3y8HxsU3qr65v7cdApZjL4xGq8GrbfhE6NrU9oX87RVxNXcMxBEPySxtVn-5h5m6D6T32fVs7LmJ5vdrc95Zcmi_BgxsfE0l0yhdTjUKL6GL04onBVF6FOXciaNMCV3bfDRaPj_GvKog9VpMkj4wj2mAyB315x24Li02N6sBcET6ysIxJWoBmAfDvbUvUctGTOSMMgsOVNFyBozA8C" />
            </div>
            <div className="lg:w-1/2 p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-widest font-label rounded">Strategy</span>
                  <span className="text-xs text-outline font-label">24 Min Read</span>
                </div>
                <h2 className="font-headline text-3xl font-bold mb-4 group-hover:text-primary transition-colors">The 2024 Logistics Corridor Re-alignment Report</h2>
                <p className="font-body text-on-surface-variant leading-relaxed">
                  An in-depth analysis of how shifting trade routes are impacting domestic fleet requirements.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-surface-container-highest flex items-center justify-between">
                <span className="font-label text-sm font-semibold text-primary inline-flex items-center gap-2">Download Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
              </div>
            </div>
          </article>

          {/* Other articles */}
          <article className="md:col-span-3 lg:col-span-4 group cursor-pointer bg-surface-container-lowest overflow-hidden rounded-xl border border-outline-variant/15 flex flex-col">
            <div className="h-64 overflow-hidden">
              <img alt="Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdyCdzaE7uQyMtpx8e0dr27ojLM4LbJbGIGdgFjTpz4dCHZ70iHLgPZGZ4AIGAqvI1n759Z-Eci2j0B73_ptGafM0UEe0DHDt_nm_f_28fO6c2X2K039Mp9rWzqiMLtMfJOoO8Zf5SkBCqsoOePObdV52x4XD8inroLTIZeUrnAJL3o0mKxytd2C0J7YLRmUDdF6iG7aKRByvu0ZKrHjMnYASTIw8KYa7TIwItW1rc8X7WQ40U0s4vpICvSJiK_CpffjZ_T9tIic6N" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-tertiary/10 text-tertiary text-[10px] uppercase font-bold tracking-widest font-label rounded">Human Capital</span>
                <h3 className="font-headline text-xl font-bold mb-3 mt-4 group-hover:text-primary transition-colors">Bridging the Skill Gap in Tier-2 Hubs</h3>
                <p className="font-body text-sm text-on-surface-variant">Training the next generation of fleet managers for autonomous-assist technologies.</p>
              </div>
            </div>
          </article>

          {/* Tech article with image overlay */}
          <article className="md:col-span-6 lg:col-span-8 group cursor-pointer relative overflow-hidden rounded-xl h-96">
            <img alt="Technology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2HISAs9aJdIRLpXT3wqNOMzxXGLTzS9guJhLaSbCgjIQN6psMOFngA1NGQsg3PTWJOsEng4Vb55D6vJWdMYBUT-iNYwQJSByQGmov8VhGLS8X5LPSgGZA1HbK9mXTasTV4XA4okLA3JXVlVqYsU7eBh1CeQu-JrHQx4Ypf8zqeHNe-pLnIKBoa0a20pxneZwLWUJIOJnkj7690uQcorJSiYE5tkuIFLmf0zNhkVL6wLl3FNaFPfCQUYC0YoLpH3j3ef0dAo_n2hsK" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 w-full lg:w-2/3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-widest font-label rounded mb-4 inline-block">Future Tech</span>
              <h2 className="font-headline text-3xl font-bold text-white mb-4">Blockchain in the Supply Chain: A Hard Reset</h2>
              <p className="font-body text-white/80 text-lg">Debunking the hype—what actually works for cross-border documentation.</p>
            </div>
          </article>

          {/* Tech card */}
          <article className="md:col-span-3 lg:col-span-4 group cursor-pointer bg-surface-container-lowest overflow-hidden rounded-xl border border-outline-variant/15">
            <div className="p-8 h-full flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] uppercase font-bold tracking-widest font-label rounded">Technology</span>
                <h3 className="font-headline text-2xl font-bold mb-4 mt-6">IoT Integration: Real-time Asset Valuation</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">How telemetry is transforming the way investors value rolling stock assets.</p>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>data_exploration</span>
                <div>
                  <div className="text-xs font-label text-outline uppercase font-bold">Projected Yield</div>
                  <div className="text-lg font-bold text-tertiary">+14.2% ROI</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Newsletter CTA */}
      <section className="bg-primary text-on-primary py-20 px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="font-headline text-4xl font-bold mb-6">Subscribe to the Industrial Intelligence Digest.</h2>
            <p className="font-body text-primary-fixed-dim text-lg leading-relaxed max-w-xl">
              Join 5,000+ logistics executives and institutional investors.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col md:flex-row gap-4">
              <input className="flex-1 bg-white/10 border border-white/20 rounded-md px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/30 focus:border-transparent outline-none font-body" placeholder="professional@enterprise.com" type="email" />
              <button className="bg-white text-primary px-8 py-4 rounded-md font-bold font-label uppercase tracking-widest hover:bg-blue-50 transition-colors" type="submit">Join Now</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

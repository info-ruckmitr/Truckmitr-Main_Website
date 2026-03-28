import { useEffect } from 'react';

export default function ForFleets() {
  useEffect(() => { document.title = 'TruckMitr | Fleet Solutions B2B'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="font-label text-primary font-medium tracking-widest uppercase text-xs mb-4 block">Institutional Logistics</span>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-on-surface leading-tight mb-8">
              Scale Your Fleet Operations with <span className="text-primary">Institutional Precision</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl mb-10">
              Stop the bleeding of driver turnover. TruckMitr integrates institutional-grade analytics with human-centric wellness programs to stabilize your most critical asset.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all hover:opacity-90">
                Request a Demo <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <button className="bg-surface-container-low text-primary px-8 py-4 rounded-xl font-semibold border border-outline-variant/20 hover:bg-surface-container-high transition-all">
                Download Whitepaper
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-full bg-primary-fixed overflow-hidden relative border-[12px] border-surface-container-lowest shadow-2xl">
              <img alt="Fleet manager" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMwzEAWu8qfJNVt-pB6tvCtdiTMz46wZEEQMhf-udGWkZu8HZjVI872pkSJ3tyRrGWmBPkBSAcbXfjY--xvaTnzRwDHfSFTzEcjb7u7OXQP4C1-yGwkzQO-3TQ1TeKb0SPgfeki7DVCej1OYqBiUqHnCCAVqYEYbJGLCkAsqBv-7mwN1i3hoGa_2z7sQ_LbwYXap-8W4kftk84XpT7_cHUnlDPH7xtqz9mUq5TThNb3TcebL4-Vb_Xm8XF8A9CTIaCYpdHTYMX9n8EO" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/10 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Verified ROI</span>
              </div>
              <div className="font-headline text-3xl font-black text-on-surface">14.2%</div>
              <div className="font-label text-[10px] text-on-surface-variant mt-1">Reduction in per-km operating costs across pilot fleets.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">The Hidden Cost of Attrition</h2>
              <p className="font-body text-on-surface-variant text-lg mb-8">
                Every time a driver leaves, your fleet loses between <span className="text-error font-bold italic">₹40,000 – ₹80,000</span> in replacement costs, idle truck time, and lost cargo opportunities.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-surface-container-highest p-3 rounded-lg"><span className="material-symbols-outlined text-error">trending_down</span></div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Recruitment Friction</h4>
                    <p className="text-sm text-on-surface-variant">Advertising, vetting, and onboarding logistics for new hires.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-surface-container-highest p-3 rounded-lg"><span className="material-symbols-outlined text-error">history</span></div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Downtime Penalty</h4>
                    <p className="text-sm text-on-surface-variant">Asset depreciation while trucks sit idle without assigned drivers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/10">
              <h3 className="font-headline text-2xl font-bold mb-8 text-primary">The Institutional Solution</h3>
              <div className="space-y-8">
                {['Automated Health Check-ins & Wellness Tracking', 'Predictive Attrition Modeling (AI-Powered)', 'Performance-Based Incentives in Real-Time', 'Hindi-First Driver Support Ecosystem'].map((item) => (
                  <div key={item} className="flex gap-4">
                    <span className="material-symbols-outlined text-tertiary">check_circle</span>
                    <p className="font-body text-on-surface">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">Command &amp; Control</h2>
          <p className="text-on-surface-variant font-body">Integrated dashboard for wellness and financial performance.</p>
        </div>
        <div className="bg-surface-container rounded-[2rem] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Driver Wellness', value: '92%', change: '+4.1%' },
              { label: 'Retention Rate', value: '88.5%', change: '+12%' },
              { label: 'Avg Trip ROI', value: '₹1.4M', change: '+₹85K' },
              { label: 'Alerts', value: '03', change: 'Action Req.', isError: true },
            ].map((kpi) => (
              <div key={kpi.label} className="bg-surface-container-lowest p-6 rounded-xl">
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">{kpi.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="font-headline text-3xl font-black">{kpi.value}</h3>
                  <span className={`text-xs font-bold font-label ${kpi.isError ? 'text-error' : 'text-tertiary'}`}>{kpi.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-4 bg-tertiary-container text-on-tertiary p-12 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">workspace_premium</span>
              <h3 className="font-headline text-3xl font-black leading-tight mb-6">Success Metrics: 12-Month Pilot</h3>
              <p className="text-sm opacity-80 leading-relaxed">Results from our institutional partner fleet (200+ HCVs) across the Golden Quadrilateral.</p>
            </div>
            <div className="mt-10">
              <div className="text-5xl font-black mb-1">32%</div>
              <div className="text-xs uppercase font-label tracking-widest font-bold opacity-70">Turnover Reduction</div>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
              <div className="flex items-center gap-2 text-tertiary mb-6">
                <span className="material-symbols-outlined">health_and_safety</span>
                <span className="font-label text-xs font-bold uppercase tracking-widest">Wellness Impact</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">"Driver health incidents dropped by 28% within 90 days of deploying the Wellness Tracker."</h4>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest" />
                <div>
                  <p className="font-bold text-sm">Vikram Singh</p>
                  <p className="text-xs text-on-surface-variant">Fleet Operations Lead, GlobalLogi</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/10">
              <div className="flex items-center gap-2 text-primary mb-6">
                <span className="material-symbols-outlined">savings</span>
                <span className="font-label text-xs font-bold uppercase tracking-widest">Fuel Economy</span>
              </div>
              <h4 className="font-headline text-xl font-bold mb-4">"Stabilizing our driver base led to a 4.2% consistent improvement in average fuel efficiency."</h4>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest" />
                <div>
                  <p className="font-bold text-sm">Ananya Reddy</p>
                  <p className="text-xs text-on-surface-variant">CFO, Southern Transports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black mb-8">Ready to Audit Your Attrition?</h2>
        <p className="font-body text-on-surface-variant text-lg mb-12">Join over 15+ institutional fleets transforming the logistics landscape.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-primary text-on-primary px-12 py-5 rounded-xl text-lg font-bold hover:shadow-xl transition-all">Book Strategy Call</button>
          <button className="bg-surface-container-highest text-on-surface px-12 py-5 rounded-xl text-lg font-bold border border-outline-variant/20">See the Platform</button>
        </div>
      </section>
    </>
  );
}

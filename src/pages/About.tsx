import { useEffect } from 'react';

export default function About() {
  useEffect(() => { document.title = 'TruckMitr | Our Mission & Movement'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[870px] flex items-center overflow-hidden bg-surface-container">
        <div className="absolute inset-0 z-0">
          <img alt="Logistics landscape" className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSULgbsJZH8zniywvjlp3a0L94Olb2FfNfcC3up7wH_m4QTAdIGjyKj5XGQPqz25Jue_SIe-E3Kv4P87I5GvjplCxndlBAVerOOcv93bj98FHvN1jODS58zN1UruxvyPm9E-3noiAnOvQpSiblneEHO-y1JVUKI0IhFvVP3x42ThBbkYHHPgZ59Q9RuC7EPsin5JrReYODlhivLqJNiUFjsHynrMxzxPUNSuzrdZ6-EaQ39jWfzd-4u57X822fgkwDeXbJgDZXT0GS" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-tertiary text-on-tertiary font-label text-xs uppercase tracking-[0.2em] mb-6">The Movement</span>
            <h1 className="font-serif text-7xl md:text-8xl text-on-surface leading-none tracking-tighter mb-8">Dignity in <br /><span className="text-primary italic">Every Mile.</span></h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              TruckMitr isn't just a platform. We are a fundamental restructuring of the industrial backbone, empowering 50,000 drivers.
            </p>
            <div className="flex items-center space-x-12">
              <div><div className="font-serif text-4xl text-primary font-bold">50K+</div><div className="font-label text-xs uppercase tracking-widest text-outline">Active Drivers</div></div>
              <div><div className="font-serif text-4xl text-primary font-bold">₹1.2B</div><div className="font-label text-xs uppercase tracking-widest text-outline">Value Moved</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 bg-surface-container-low p-12 flex flex-col justify-between min-h-[500px]">
              <div>
                <h2 className="font-serif text-4xl text-on-surface mb-6">Our Industrial Vision</h2>
                <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-md">
                  To curate a global standard for domestic logistics where every driver is a stakeholder.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 bg-primary text-on-primary p-12 flex flex-col justify-center text-center">
              <span className="material-symbols-outlined text-6xl mb-6 opacity-40">diversity_3</span>
              <div className="font-serif text-6xl font-bold mb-2">94%</div>
              <div className="font-label text-sm uppercase tracking-[0.3em] opacity-70">Driver Retention Rate</div>
              <div className="h-px w-24 bg-on-primary/20 mx-auto my-8" />
              <p className="font-body text-sm opacity-80 px-8">Surpassing industry standards by 3x.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Story */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <img alt="Driver" className="w-full h-[600px] object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgfT8o6ozsvLaHC_eO-08qX49kLV1avL-wccbCyiq1MomlkjO5Ge8U_wDH1Vja1g0YaYIcNwEoFU65ecO7fyP52sMFRcY_KnQn3G_DpEKfMG7WIM62OlQtVcc28RUi4MdGFXCz5BzJEOqImOcTprm6YfQYKsUPqDnNUPs0I3UyrXpG3O02L3rCEnbhhSQwDXzsQNcH0Fe3Uip1MzQ3N4Jh68QODFbkwvM2G7CsE6yVQO1lxmH6Mv-sCsJ3ZWwk3NCn6ZOng4ToQla_" />
              <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-8 shadow-2xl max-w-xs">
                <p className="font-serif italic text-lg text-on-surface mb-4">"TruckMitr gave me more than just routes; they gave me a stake in the business."</p>
                <p className="font-label text-xs uppercase tracking-widest text-primary font-bold">Arjun S., Lead Partner Driver</p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-5xl text-on-surface mb-8 leading-tight">Human Capital is our <br />Greatest Asset.</h2>
              <div className="space-y-8">
                {[
                  { num: '01', title: 'Comprehensive Insurance', desc: 'Full medical and life coverage from day one.' },
                  { num: '02', title: 'TruckMitr Academy', desc: 'Advanced safety training and financial literacy programs.' },
                  { num: '03', title: 'The Equity Pool', desc: 'A unique profit-sharing model that converts driving hours into equity units.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-6">
                    <span className="font-serif text-3xl text-outline-variant">{item.num}</span>
                    <div>
                      <h4 className="font-label text-sm uppercase tracking-widest font-bold text-primary mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-container py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-4xl text-on-primary-container mb-8 leading-tight">Join the TruckMitr as a <br />Strategic Partner or Investor.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary text-on-primary px-10 py-4 font-label text-sm uppercase tracking-widest font-bold hover:bg-on-primary-fixed-variant transition-colors">Download Investor Deck</button>
            <button className="border border-on-primary-container text-on-primary-container px-10 py-4 font-label text-sm uppercase tracking-widest font-bold hover:bg-on-primary-container hover:text-primary transition-colors">Partner with Us</button>
          </div>
        </div>
      </section>
    </>
  );
}

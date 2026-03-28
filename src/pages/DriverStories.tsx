import { useEffect } from 'react';
import { testimonials } from '../data/testimonials';

export default function DriverStories() {
  useEffect(() => { document.title = 'TruckMitr | Driver Stories & Social Impact'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-20">
        <div className="max-w-4xl">
          <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface leading-tight mb-8">
            Vikas Ki Kahani, <br /><span className="text-primary italic">Driver Ki Zubani</span>
            <span className="block text-2xl font-label font-normal text-on-surface-variant mt-4 tracking-wide">(Stories of Growth)</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-body">
            Meet the backbone of India's logistics. 50,000+ drivers are not just moving freight; they are building futures.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-screen-2xl mx-auto">
        <div className="bg-surface-container-low p-8 rounded-xl">
          <div className="text-4xl font-headline font-bold text-primary mb-2">50,000+</div>
          <div className="text-on-surface-variant font-label font-medium uppercase tracking-widest text-sm">Verified Drivers</div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl">
          <div className="text-4xl font-headline font-bold text-tertiary mb-2">₹12 Cr+</div>
          <div className="text-on-surface-variant font-label font-medium uppercase tracking-widest text-sm">Insurance Claims Settled</div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-xl">
          <div className="text-4xl font-headline font-bold text-on-surface mb-2">24/7</div>
          <div className="text-on-surface-variant font-label font-medium uppercase tracking-widest text-sm">Social Support Network</div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="editorial-grid mb-24 px-8 max-w-screen-2xl mx-auto">
        {testimonials.map((t, i) => {
          const isFeatured = i === 0 || i === 3;
          if (isFeatured) {
            return (
              <div key={t.id} className={`col-span-12 lg:col-span-8 flex flex-col ${i === 3 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm`}>
                <div className="md:w-1/2 h-80 md:h-auto overflow-hidden">
                  <img className="w-full h-full object-cover" alt={t.name} src={t.image} />
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  {t.tag && (
                    <span className="text-tertiary font-bold font-label text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">verified</span> {t.tag}
                    </span>
                  )}
                  <h3 className="font-headline text-2xl font-bold mb-4">{t.name}</h3>
                  <p className="text-on-surface-variant leading-relaxed italic mb-6">"{t.quoteEn}"</p>
                  <p className="text-on-surface/80 leading-relaxed font-body">"{t.quoteHi}"</p>
                </div>
              </div>
            );
          }
          return (
            <div key={t.id} className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-xl p-8 shadow-sm flex flex-col">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-primary/10">
                <img className="w-full h-full object-cover" alt={t.name} src={t.image} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-2">{t.name}</h3>
              <span className="text-on-surface-variant font-label text-xs uppercase tracking-widest mb-6">{t.role}</span>
              <p className="text-on-surface-variant leading-relaxed italic mb-4">"{t.quoteEn}"</p>
              <p className="text-on-surface/80 text-sm leading-relaxed mt-auto">"{t.quoteHi}"</p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-primary text-on-primary rounded-2xl p-12 md:p-20 relative overflow-hidden mx-8 max-w-screen-2xl lg:mx-auto mb-24">
        <div className="relative z-10 max-w-3xl">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Be the Next Story of Growth</h2>
          <p className="text-xl text-primary-container/80 mb-10 leading-relaxed">
            Join our ecosystem of 50,000+ satisfied partners.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="px-8 py-4 bg-surface text-primary font-bold rounded-lg flex items-center gap-3 hover:bg-surface-bright transition-all">
              <span className="material-symbols-outlined">edit_note</span> Share Your Story
            </button>
            <button className="px-8 py-4 bg-tertiary text-on-tertiary font-bold rounded-lg flex items-center gap-3 hover:opacity-90 transition-all">
              <span className="material-symbols-outlined">chat</span> WhatsApp for Jobs
            </button>
          </div>
        </div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl" />
      </section>
    </>
  );
}

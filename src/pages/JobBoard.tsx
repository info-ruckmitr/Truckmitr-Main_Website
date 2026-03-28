import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';
import { formatCurrency } from '../utils/formatCurrency';
import { getWhatsAppLink } from '../utils/whatsapp';

export default function JobBoard() {
  useEffect(() => { document.title = 'TruckMitr | Driver Job Board'; }, []);

  return (
    <>
      <nav className="px-8 max-w-screen-2xl mx-auto pt-6 pb-2" aria-label="Related pages">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-label">
          <Link to="/driver-hub" className="text-primary font-semibold hover:underline">
            ← ड्राइवर हब
          </Link>
          <span className="text-outline-variant hidden sm:inline" aria-hidden>
            |
          </span>
          <Link to="/welfare" className="text-on-surface-variant hover:text-primary transition-colors">
            कल्याण योजनाएँ
          </Link>
          <Link to="/stories" className="text-on-surface-variant hover:text-primary transition-colors">
            ड्राइवर की कहानियाँ
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pb-16 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Fleet Network Hub</span>
            <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary tracking-tight leading-tight mb-6">
              Professional Opportunities <br /> for the <span className="italic text-tertiary">Industrial Elite.</span>
            </h1>
            <p className="text-lg text-secondary max-w-xl leading-relaxed font-body">
              Connect with verified logistics enterprises. Secure high-yield routes and premium safety standards within the TruckMitr ecosystem.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15 w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <span className="font-label text-xs font-semibold uppercase tracking-widest text-on-surface-variant">Active Fleet Partners</span>
                <span className="text-tertiary font-bold">1,240+</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="px-8 max-w-screen-2xl mx-auto mb-12">
        <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">location_on</span>
              <select className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-sm font-body appearance-none">
                <option>All India</option>
                <option>Maharashtra (MH)</option>
                <option>Gujarat (GJ)</option>
                <option>Tamil Nadu (TN)</option>
              </select>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">route</span>
              <select className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-sm font-body appearance-none">
                <option>Route Type</option>
                <option>Long Haul (National)</option>
                <option>Regional / State</option>
                <option>Last Mile Delivery</option>
              </select>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">payments</span>
              <select className="w-full pl-10 pr-4 py-3 bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-primary/20 text-sm font-body appearance-none">
                <option>Salary Range (₹)</option>
                <option>₹25,000 - ₹40,000</option>
                <option>₹40,000 - ₹60,000</option>
                <option>₹60,000+</option>
              </select>
            </div>
            <button className="bg-primary text-on-primary font-bold font-label uppercase tracking-widest text-xs py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined text-sm">search</span>
              Apply Filters
            </button>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <main className="px-8 max-w-screen-2xl mx-auto pb-24">
        <div className="mb-8 flex justify-between items-center border-b border-outline-variant/15 pb-4">
          <h2 className="font-headline text-2xl font-bold text-primary">Verified Opportunities</h2>
          <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">42 New Today</span>
        </div>
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="group bg-surface-container-lowest hover:bg-white border border-outline-variant/10 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-surface-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">{job.icon}</span>
                </div>
              </div>
              <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-headline font-bold text-lg text-primary">{job.title}</h3>
                    {job.verified && <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>}
                  </div>
                  <p className="text-secondary font-body text-sm mb-2">{job.company} • {job.experience}</p>
                  <div className="flex gap-2">
                    {job.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight ${tag === 'Hazardous' ? 'bg-error/10 text-error' : 'bg-surface-container-high text-secondary'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">Route</span>
                  <div className="font-body text-sm font-semibold flex items-center gap-1">
                    {job.routeFrom} <span className="material-symbols-outlined text-xs">arrow_forward</span> {job.routeTo}
                  </div>
                  <span className="text-[10px] text-tertiary font-bold mt-1 tracking-tight">{job.routeType}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline block mb-1">Compensation</span>
                  <div className="font-headline font-bold text-xl text-primary">{formatCurrency(job.salary)}<span className="text-xs font-normal text-secondary ml-1">/ Month</span></div>
                  <span className="text-[10px] text-tertiary font-bold mt-1">{job.salaryNote}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex-1 md:flex-none px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-lg text-sm font-bold font-label uppercase tracking-widest">Details</button>
                <a className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg text-sm font-bold font-label uppercase tracking-widest hover:brightness-95 transition-all" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-lg">chat</span>
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="bg-surface-container-highest text-primary font-bold font-label uppercase tracking-[0.2em] text-xs px-10 py-4 rounded-lg hover:bg-outline-variant/30 transition-all">
            Load More Opportunities
          </button>
        </div>
      </main>
    </>
  );
}

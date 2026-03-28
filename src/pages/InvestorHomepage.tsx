import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const STATS_BAR = [
  { value: '25+ Lacs', label: 'India Trucks' },
  { value: '20+ Lacs', label: 'India Truck Drivers' },
  { value: '8+ Lacs', label: 'Fleet Owners' },
  { value: '10,000+ Cr', label: 'Monthly Freight Value' },
  { value: '40%', label: 'Logistic Cost Reduction' },
  { value: '10+', label: 'Years of Experience' },
] as const;

const ECOSYSTEM_STAKEHOLDERS = [
  { icon: 'business_center', label: 'Fleet Owner' },
  { icon: 'local_shipping', label: 'Transporters' },
  { icon: 'precision_manufacturing', label: "Truck OEM's" },
  { icon: 'hub', label: 'Tech Partners' },
  { icon: 'shield', label: 'Insurance Companies' },
] as const;

const FEATURE_PILLARS = [
  { icon: 'speed', title: 'Performance & Reliability', desc: 'Data-backed uptime and route intelligence across the network.' },
  { icon: 'health_and_safety', title: 'Safety & Well-being', desc: 'Driver-first protocols, welfare access, and transparent governance.' },
  { icon: 'eco', title: 'Sustainability', desc: 'Fuel efficiency signals and greener load-matching over time.' },
  { icon: 'account_balance', title: 'Financial Inclusion', desc: 'Fair payouts, credit visibility, and partner-ready settlements.' },
  { icon: 'gavel', title: 'Governance & Ethics', desc: 'Clear policies and audit-ready operations for every stakeholder.' },
  { icon: 'forest', title: 'Environmental Impact', desc: 'Lower empty miles and smarter asset utilisation at scale.' },
  { icon: 'trending_up', title: 'Operational Excellence', desc: 'Unified workflows from first mile to proof of delivery.' },
] as const;

const TESTIMONIALS = [
  {
    quote:
      'TruckMitr gave our fleet visibility we never had — fewer disputes, faster payments, and drivers who finally feel heard.',
    name: 'Rajesh Kulkarni',
    role: 'Fleet Owner, Maharashtra',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcx61KgDM8ShjJyrx-CeUHMosGm9tK_BoA3RrPZVthuLtGkvYsY0-XKeggiTmRiNyvuIl5FsGkrYFOeL3hy1Z4IstygkK-1nY5Obj-hJDc18Z0uo59x1Ej0pSZoaBMK1jsHaSpvRR82Kv_r1dU639X36RePoiql1Olxawa3_ElKd0VvLewSN5lQ--JPFEK_09GB0ORS8P9Mc0eFsQXDtA8FNq1SUpomIGyB3nivFmdTEcMvBNTkNxVdcjalZqLfJHKB-pMIIbdzbS8',
  },
  {
    quote:
      'As a long-haul driver, the Hindi hub and welfare links saved me hours of running around. This is how digital should feel.',
    name: 'Suresh Yadav',
    role: 'Driver, North India',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQHRvIgwgGHS5De6TJ9SXJbmpx9oSmSWmNjXu8YFBQT_AbSaknmmSP-jvA0qfRH0yhWd7ldGqhE0AYTYfuj4AnuaK0iLhC3LT-DaLQdRrFEj1wx8v1ctiCLIBGazZlFzwYqlTAuysO77K5cQWIgysFTXSi0so0zl-LdjRPExEncPN5821ufqJG4YWtswA2wVBOkUDD_Ou8jeDzr6ZPq7cs125eucoxajzwrQG7ljOiTyEAIrgahfTmwWPh3o_a8akjybNNq3mM3VXG',
  },
  {
    quote:
      'We onboarded partners in weeks, not quarters. The investor narrative matches what we see on the ground — rare and refreshing.',
    name: 'Anita Desai',
    role: 'Logistics Partner, Gujarat',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3wdFxrjNSH7efULViRqGWtVZaWEPlhpslYeP7F9iEZ2X7oItrf3HzcCOHkW9jtAEgLBltkmDw3f20VKGxnZtUXpe5bXauUciJMthmvlxUgUL6YJQD9tXVbaRhF1Qu9iYg9_cLFvU1_ZA9EzyGQg7QtI0r-WPBemc4tKIIu1aV4mdn77fxiMD8Nj0JNJNCvA_ES2eQdr64djVtejijwTi4Jup5nIWVaOdUUsHFPed4LuNMHqjwLhY5wiAt0m3kjveNR0lAJdayea07',
  },
] as const;

export default function InvestorHomepage() {
  useEffect(() => { document.title = 'TruckMitr | Elevating the Indian Trucking Ecosystem'; }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img alt="Truck at sunset" className="w-full h-full object-cover scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqIMu_B9iiSpztsoePBCGZUGw2XcXRNMEmzNQMRp0Y6PZQw3MpQguNQ5sOBsrJH8R1IflVFsa4T0jz4vrmXssR2pypD1TTK3fsJ6qb9kjIiE_6N_bwKNkk8u1jZq-Jx1W4CdUtd5CB6N-XVxUVgAfLzl-KP04ylVQ2OFNW_-N7rnvCrfjbKc5sQ1UknISFhiFd_OvI04JOtPgxpmrJiXta2o0BXvan0Y1KmvPVXg1L62ISlk0Rz0Koh2fA-R-yKOqpdU9mu1lERdx" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#274680]/75 via-[#1a3050]/50 to-[#0c1828]/35 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-[#1a0a0a]/20 z-[11]" />
          <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-[#ba1a1a] z-[12] shadow-[4px_0_24px_rgba(186,26,26,0.45)]" aria-hidden />
        </div>
        <div className="relative z-20 max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="font-headline text-lg md:text-xl text-[#e8eef8] tracking-wide">
                TruckMitr<span className="text-[#ffb4b4]"> — </span>Aapke Saath
              </p>
              <div className="h-px w-24 bg-[#ba1a1a]" />
              <span className="font-label text-[#afc6ff] font-semibold tracking-[0.2em] uppercase text-xs block">
                Your Digital &amp; Sustainable Solution
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                Elevating the{' '}
                <span className="text-[#afc6ff]">Indian Trucking</span>{' '}
                <span className="text-[#ffb4b4]">Ecosystem</span>
              </h1>
              <p className="font-body text-lg md:text-xl text-white/85 max-w-xl leading-relaxed border-l-2 border-[#274680] pl-5">
                At TruckMitr.com, we&apos;re more than just a platform — we&apos;re the driving force behind a revolution in the Indian trucking industry.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 flex-wrap">
              <Link
                to="/driver-hub"
                className="group rounded-sm border-2 border-white bg-white px-8 py-5 font-semibold text-[#274680] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl flex flex-col items-start"
              >
                <span className="text-[10px] font-label uppercase tracking-widest text-[#274680]/70">I am a driver</span>
                <span className="text-xl font-headline">मैं एक ड्राइवर हूँ</span>
              </Link>
              <Link
                to="/fleet"
                className="group rounded-sm border-2 border-[#ba1a1a] bg-[#ba1a1a]/90 px-8 py-5 font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[#a01515] flex flex-col items-start"
              >
                <span className="text-[10px] font-label uppercase tracking-widest text-white/80">I am a partner</span>
                <span className="text-xl font-headline">Maximize ROI</span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="font-label text-xs uppercase tracking-widest text-white/60">Download app</span>
              <a
                href="https://play.google.com/store/search?q=truckmitr&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/10 px-4 py-2.5 font-label text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <span className="material-symbols-outlined text-[22px]">android</span>
                Google Play
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="rounded-sm border border-white/20 bg-[#274680]/25 p-8 shadow-2xl backdrop-blur-md ring-1 ring-white/10">
              <p className="font-label mb-6 text-center text-xs uppercase tracking-[0.2em] text-[#afc6ff]">
                India at a glance
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-sm border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                  <span className="font-headline text-3xl font-bold text-white">25+ Lacs</span>
                  <p className="mt-1 font-label text-xs uppercase tracking-wide text-white/65">India trucks</p>
                </div>
                <div className="translate-y-6 rounded-sm border border-[#ba1a1a]/40 bg-[#ba1a1a]/20 p-6 backdrop-blur-sm">
                  <span className="font-headline text-3xl font-bold text-[#ffb4b4]">20+ Lacs</span>
                  <p className="mt-1 font-label text-xs uppercase tracking-wide text-white/70">Drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width stats bar — live-site scale */}
      <section className="relative border-y border-white/10 bg-primary py-10 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(39,70,128,0.97)_0%,rgba(26,48,80,0.98)_50%,rgba(39,70,128,0.97)_100%)]" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 md:gap-6 xl:gap-4 text-center">
            {STATS_BAR.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="font-headline text-2xl sm:text-3xl font-black text-on-primary leading-tight">{s.value}</p>
                <p className="font-label text-[10px] sm:text-xs uppercase tracking-wider text-on-primary/85 leading-snug px-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission — inspiration + innovation */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant/15 shadow-xl">
            <img
              alt="TruckMitr on the road"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqIMu_B9iiSpztsoePBCGZUGw2XcXRNMEmzNQMRp0Y6PZQw3MpQguNQ5sOBsrJH8R1IflVFsa4T0jz4vrmXssR2pypD1TTK3fsJ6qb9kjIiE_6N_bwKNkk8u1jZq-Jx1W4CdUtd5CB6N-XVxUVgAfLzl-KP04ylVQ2OFNW_-N7rnvCrfjbKc5sQ1UknISFhiFd_OvI04JOtPgxpmrJiXta2o0BXvan0Y1KmvPVXg1L62ISlk0Rz0Koh2fA-R-yKOqpdU9mu1lERdx"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-label text-xs uppercase tracking-widest text-white/90">
              Building trust across every mile
            </p>
          </div>
          <div className="space-y-6">
            <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs">Our mission</span>
            <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
              Inspiration, innovation, and opportunity
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              We connect drivers, fleet owners, OEMs, and partners on one transparent layer — so freight moves faster,
              costs fall, and dignity returns to the people who keep India running.
            </p>
            <p className="font-body text-on-surface-variant leading-relaxed">
              From welfare access to ROI-grade analytics, TruckMitr is the digital backbone for a more sustainable,
              accountable trucking economy.
            </p>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-primary bg-primary px-8 py-3.5 font-headline font-bold text-on-primary shadow-md transition-all hover:bg-primary/90 hover:-translate-y-0.5"
            >
              Read more
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem — empowering stakeholders */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-surface border-y border-outline-variant/10">
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-4 max-w-3xl mx-auto leading-tight">
            TruckMitr: Empowering the Indian trucking industry
          </h2>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto mb-12">
            One platform — many stakeholders. We align incentives so everyone grows with every load.
          </p>
          <div className="relative max-w-3xl mx-auto mb-14">
            <img
              alt="Heavy truck"
              className="w-full rounded-lg border border-outline-variant/20 shadow-lg object-cover max-h-[280px] md:max-h-[320px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVcrM7OUipE8cZeAc8gilRVipq91SpWWdPZ2To1cYfUTBQiGB_8Ge2wXsFg8W5TmQluhGKPDrJH7rZTnBjjwgFSI2Cy3VMxnYQu-9BL829xLs5DXuToQJRu13pzKw7GexAi-arsd-sRKWUKecertgiQRpSSprjQbaw5V5Yn-h-jhsEPsW3hM5GP5sicgwTzJ5NYZsnnzd2b8kgMiOOQyCCp1GlVPS9UOU9DOfe50L3j21oiZUcdJ9_ZZi2OeVXuCjWk1UaRLhPSk7"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {ECOSYSTEM_STAKEHOLDERS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-3 w-[calc(50%-0.5rem)] sm:w-40 md:w-44 rounded-2xl border border-outline-variant/15 bg-surface-container-low px-4 py-6 shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white border border-outline-variant/10 text-primary shadow-md">
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <span className="font-label text-[10px] md:text-xs uppercase tracking-wide text-on-surface text-center leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature pillars — revolutionizing the future */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs block mb-3">
              Revolutionizing the future
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface mb-4">
              Built for scale, designed for people
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Every pillar connects back to measurable outcomes — for investors, partners, and the community on the road.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FEATURE_PILLARS.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-outline-variant/15 bg-surface p-8 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block">{f.icon}</span>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{f.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI cards — investor depth */}
      <section className="py-24 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs">Platform metrics</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mt-3">What our network delivers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'finance', title: 'ROI Analytics', desc: 'Real-time portfolio performance tracking.', value: '₹4.2 Cr', label: 'Daily Transaction Volume', badge: '+2.4%' },
              { icon: 'groups', title: 'Driver Retention', desc: 'Proprietary loyalty models reducing attrition by 30%.', value: '94%', label: 'Driver Satisfaction Score', badge: 'Stable' },
              { icon: 'handshake', title: 'Network Expansion', desc: 'Connectivity across 450+ nodes.', value: '1.2k', label: 'Monthly New Partner Onboarding', badge: 'Growing' },
            ].map((card) => (
              <div key={card.title} className="bg-surface-container-low p-10 rounded-xl space-y-6 border border-outline-variant/10">
                <div className="flex justify-between items-start">
                  <span className="material-symbols-outlined text-primary text-4xl">{card.icon}</span>
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-md text-xs font-bold">{card.badge}</span>
                </div>
                <div>
                  <h3 className="font-headline text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-on-surface-variant font-body">{card.desc}</p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20">
                  <span className="text-4xl font-headline font-black text-on-surface">{card.value}</span>
                  <p className="text-xs font-label uppercase text-outline mt-1">{card.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-surface-container-high/80">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs">Voices of the community</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface mt-3">Trusted on the ground</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col rounded-xl border border-outline-variant/15 bg-surface p-8 shadow-sm"
              >
                <span className="material-symbols-outlined text-primary/40 text-4xl mb-4">format_quote</span>
                <p className="font-body text-on-surface leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-4 pt-4 border-t border-outline-variant/20">
                  <img src={t.avatar} alt="" className="h-12 w-12 rounded-full object-cover border border-outline-variant/20" />
                  <div>
                    <cite className="font-headline font-bold text-on-surface not-italic block">{t.name}</cite>
                    <span className="font-label text-xs text-on-surface-variant uppercase tracking-wide">{t.role}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16">
            <div className="space-y-4">
              <span className="font-label text-primary font-semibold tracking-widest uppercase text-xs">From the community</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black">Insights &amp; Inspiration</h2>
              <p className="font-body text-on-surface-variant max-w-xl">
                Deep dives on logistics, dignity, and data — the same themes we share with investors and partners.
              </p>
            </div>
            <Link to="/insights" className="text-primary font-bold border-b-2 border-primary pb-1 self-start sm:self-auto">
              View all reports
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="group flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6">
                  <img alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={post.image} />
                </div>
                <span className="text-xs font-label text-outline uppercase tracking-widest">
                  {post.category} • {post.readTime}
                </span>
                <h3 className="font-headline text-2xl font-bold mt-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="font-body text-sm text-on-surface-variant mt-3 line-clamp-3 flex-1">{post.description}</p>
                <Link
                  to="/insights"
                  className="mt-5 inline-flex items-center gap-1 font-label font-bold text-primary text-sm uppercase tracking-wider group-hover:gap-2 transition-all"
                >
                  Read more
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — split layout */}
      <section className="relative overflow-hidden border-t-4 border-[#ba1a1a] bg-primary">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(39,70,128,1)_0%,rgba(20,40,72,1)_50%,rgba(120,20,20,0.25)_100%)]" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-8 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-on-primary order-2 lg:order-1 text-center lg:text-left">
            <p className="font-headline mb-3 text-xl text-[#afc6ff] md:text-2xl">TruckMitr — Aapke Saath</p>
            <h2 className="font-headline mb-6 text-3xl font-bold leading-tight md:text-5xl">Join the TruckMitr revolution</h2>
            <p className="mb-10 max-w-xl mx-auto lg:mx-0 font-body text-lg opacity-90">
              Connectivity, efficiency, and sustainability for every friend of a truck — drivers, transporters, and partners across India.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="https://truckmitr.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm border-2 border-white bg-white px-10 py-4 font-headline text-lg font-bold text-primary shadow-lg transition-colors hover:bg-[#f0f4ff]"
              >
                Get started
              </a>
              <Link
                to="/driver-hub"
                className="inline-flex items-center justify-center rounded-sm border-2 border-[#ffb4b4] bg-transparent px-10 py-4 font-headline text-lg font-bold text-white transition-colors hover:bg-white/10"
              >
                Explore the app
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md w-full aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                alt="TruckMitr community"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnx8lC7Z3Z-9CWdo0KxsjDi1SnLvIFn3TbQ8pD7WxTQrT2jOLLCriBaZYFAFhFhXHYUDnzYxEVn2_ESSEz27kJX79E5vzCfi1U_Zi-PNMMtFK_eTLVpHvo4hksoFTS2LTChcYolHEyd5BV_FWzfU5L7MMTgEnHHVdqUxP_GzaNOYNIvmZG_D_lO9DGQsSnKXIIDvI3j0r99TMC_TVDu8SO8ek2xSgkygHgOSNABnDzC1ggEOKrvms2m8lSoTlE22-zxz31NRVmuBgo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-label text-xs uppercase tracking-widest text-white/95 text-center">
                Real people. Real routes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

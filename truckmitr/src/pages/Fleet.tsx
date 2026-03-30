import { Helmet } from 'react-helmet-async'
import { motion, useReducedMotion } from 'framer-motion'
import { GlassCard } from '../components/ui/GlassCard'
import { Button } from '../components/ui/Button'
import {
  SectionReveal,
  StaggerSection,
  FadeItem,
} from '../components/motion/SectionReveal'
import { ClassicDivider } from '../components/home/ClassicDivider'

const heroSpringIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}
const staggerHero = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function Fleet() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>For Fleet Owners — TruckMitr</title>
      </Helmet>

      {/* ───── Hero — full-bleed fleet depot BG ───── */}
      <section className="relative min-h-[88vh] overflow-hidden">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-900">
          <motion.div
            className="h-full w-full"
            initial={false}
            animate={reduceMotion ? {} : { scale: [1, 1.04] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{ willChange: 'transform' }}
          >
            <img
              src="/fleet-hero.png"
              alt=""
              className="h-full w-full object-cover object-[center_35%]"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"
            aria-hidden
          />
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1280px] items-end px-6 pb-16 pt-36 sm:px-8 md:items-center md:pb-20 md:pt-20 lg:min-h-[88vh]">
          <motion.div
            variants={staggerHero}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Tricolor accent */}
            <motion.div
              aria-hidden
              className="mb-8 h-1 w-20 origin-left"
              style={{
                background: 'linear-gradient(90deg, #FF9933 33%, #FFFFFF 33% 66%, #138808 66%)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            />

            <motion.p
              variants={heroSpringIn}
              className="font-display mb-4 text-[12px] font-bold uppercase tracking-[0.35em] text-[#FF9933]"
            >
              Fleet Management Solutions
            </motion.p>

            <motion.h1
              variants={heroSpringIn}
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              Your <span className="text-[#FF9933]">Drivers</span> Are{' '}
              <br className="hidden md:block" />
              Your <span className="text-[#4ADE80]">Greatest</span> Asset.
            </motion.h1>

            <motion.p
              variants={heroSpringIn}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/75"
            >
              Reduce attrition, improve safety, and build driver loyalty — with India&apos;s
              first driver-centric fleet wellness platform.
            </motion.p>

            <motion.div variants={heroSpringIn} className="mt-10 flex flex-wrap gap-4">
              <Button variant="fleet" size="lg" className="h-14 px-8 text-base shadow-xl">
                Book a Demo →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
              >
                See Pricing
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={heroSpringIn}
              className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8"
            >
              {[
                { value: '20%↓', label: 'Attrition' },
                { value: '50K+', label: 'Driver Network' },
                { value: '72 hrs', label: 'Avg Fill Time' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-kpi text-2xl font-bold text-white md:text-3xl">
                    {stat.value}
                  </div>
                  <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom tricolor strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 h-1.5 origin-left"
          style={{
            background: 'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        />
      </section>

      <ClassicDivider />

      {/* ───── Problem — image + copy ───── */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Fleet dashboard image */}
              <div
                className="group relative overflow-hidden rounded-sm border border-[#e8e0d5] shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src="/fleet-dashboard.png"
                  alt="Fleet management dashboard"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div>
                <p className="font-display mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8860b]">
                  The Real Cost
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-[2.15rem]">
                  How much did <span className="text-[#FF9933]">driver attrition</span>{' '}
                  cost you last year?
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  A 200-truck fleet losing 25% of its drivers annually spends an estimated ₹50–80
                  lakh just on replacements — before counting accident costs, idle truck days, and
                  fuel wastage from inexperienced replacements.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  The industry faces a shortage of ~22 lakh drivers. Recruitment is getting harder.
                  TruckMitr ensures the drivers who stay with you are healthy, skilled, and supported.
                </p>

                {/* Stat cards */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { n: '₹50–80L', l: 'Attrition Cost / Year', c: '#FF9933' },
                    { n: '25%+', l: 'Avg. Driver Turnover', c: '#FF9933' },
                    { n: '72 hrs', l: 'Avg. Time to Fill', c: '#138808' },
                    { n: '20%↓', l: 'With TruckMitr', c: '#138808' },
                  ].map((s) => (
                    <GlassCard key={s.l} hover={false} accentColor={s.c} className="py-4 text-center">
                      <div className="font-kpi text-xl font-bold" style={{ color: s.c }}>
                        {s.n}
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        {s.l}
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ClassicDivider />

      {/* ───── How It Works — 3 steps with images ───── */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                  How It Works
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                Three Simple Steps
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-secondary)]">
                Get your fleet on TruckMitr in days, not months.
              </p>
            </div>
          </SectionReveal>

          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  step: '01',
                  img: '/fleet-drivers.png',
                  accent: '#FF9933',
                  title: 'Your Drivers Join TruckMitr',
                  desc: 'Simple WhatsApp-based onboarding. No app downloads. Drivers access health, welfare, and learning support instantly.',
                },
                {
                  step: '02',
                  img: '/fleet-dashboard.png',
                  accent: '#138808',
                  title: 'We Track Health & Skills',
                  desc: 'Health check-ups, scheme registrations, training completions, and engagement metrics — all tracked and reported.',
                },
                {
                  step: '03',
                  img: '/fleet-hero.png',
                  accent: '#FF9933',
                  title: 'You Get a Wellness Dashboard',
                  desc: 'Weekly reports on driver wellness, retention indicators, and compliance. Data-driven decisions for your fleet.',
                },
              ].map((p) => (
                <FadeItem key={p.step} classic>
                  <GlassCard accentColor={p.accent} className="overflow-hidden p-0">
                    <div className="group relative h-44 overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div
                        className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg"
                        style={{ background: p.accent }}
                      >
                        {p.step}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {p.desc}
                      </p>
                    </div>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ───── Drivers image band ───── */}
      <section className="relative overflow-hidden">
        <SectionReveal classic>
          <div className="relative">
            <img
              src="/fleet-drivers.png"
              alt="Fleet drivers team"
              className="h-56 w-full object-cover md:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#FF9933]">
                  Driver Recruitment
                </p>
                <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold text-white md:text-4xl">
                  Need Drivers?
                  <br />
                  Post a Job.
                </h2>
                <p className="mt-3 max-w-md text-sm text-white/70">
                  Post to 50,000+ verified drivers. Route-matched, health-screened, licence-verified.
                </p>
                <Button variant="whatsapp" className="mt-6" as="a" href="#">
                  Post a Job →
                </Button>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <ClassicDivider />

      {/* ───── Pricing — 3 tiers ───── */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                  Plans
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                Simple, Transparent Pricing
              </h2>
            </div>
          </SectionReveal>
          <StaggerSection classic>
            <div className="grid gap-6 md:grid-cols-3">
              <FadeItem classic>
                <GlassCard accentColor="#e8e0d5" className="text-center">
                  <p className="font-display text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">
                    Starter
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[var(--text-primary)]">
                    Up to 50 Drivers
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    Wellness dashboard, scheme support, basic reporting.
                  </p>
                  <Button variant="outline" className="mt-8 w-full" as="a" href="#">
                    Contact Us
                  </Button>
                </GlassCard>
              </FadeItem>

              {/* Growth — highlighted */}
              <FadeItem classic>
                <div className="relative">
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-[#FF9933] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    Most Popular
                  </div>
                  <GlassCard accentColor="#FF9933" className="text-center shadow-lg ring-2 ring-[#FF9933]/20">
                    <p className="font-display text-[12px] font-bold uppercase tracking-[0.3em] text-[#FF9933]">
                      Growth
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold text-[var(--text-primary)]">
                      50–200 Drivers
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      Full platform + job posting + health camps + training modules.
                    </p>
                    <Button variant="saffron" className="mt-8 w-full" as="a" href="#">
                      Book Demo
                    </Button>
                  </GlassCard>
                </div>
              </FadeItem>

              {/* Enterprise */}
              <FadeItem classic>
                <GlassCard accentColor="#138808" className="text-center">
                  <p className="font-display text-[12px] font-bold uppercase tracking-[0.3em] text-[#138808]">
                    Enterprise
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[var(--text-primary)]">
                    200+ Drivers
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                    Custom integration, dedicated account manager, CSR partnership.
                  </p>
                  <Button variant="outline" className="mt-8 w-full" as="a" href="#">
                    Talk to Sales
                  </Button>
                </GlassCard>
              </FadeItem>
            </div>
          </StaggerSection>
          <p className="mt-10 text-center text-[13px] text-[var(--text-muted)]">
            Free 30-day trial available for all plans. No commitment required.
          </p>
        </div>
      </section>

      {/* ───── CTA ───── */}
      <section className="border-t border-[#e8e0d5] bg-[var(--bg-primary)] px-6 py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <SectionReveal classic>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mx-auto max-w-xl"
            >
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                Ready to transform your fleet?
              </h2>
              <p className="mt-4 text-[15px] text-[var(--text-secondary)]">
                Join India&apos;s leading fleets on TruckMitr.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button variant="fleet" size="lg" as="a" href="#">
                  Book a Demo
                </Button>
                <Button variant="whatsapp" size="lg" to="/drivers">
                  I&apos;m a Driver
                </Button>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

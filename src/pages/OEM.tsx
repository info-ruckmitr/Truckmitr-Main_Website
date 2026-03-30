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
import { ImageFrame } from '../components/home/ImageFrame'

const heroSpringIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}
const staggerHero = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

export default function OEM() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>For OEMs &amp; Partners — TruckMitr</title>
      </Helmet>

      {/* ───── Hero — assembly line BG ───── */}
      <section className="relative min-h-[88vh] overflow-hidden">
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
              src="/oem-hero.png"
              alt=""
              className="h-full w-full object-cover object-[center_40%]"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/15"
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
            <motion.div
              aria-hidden
              className="mb-8 h-1 w-20 origin-left"
              style={{
                background:
                  'linear-gradient(90deg, #FF9933 33%, #FFFFFF 33% 66%, #138808 66%)',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.9 }}
            />

            <motion.p
              variants={heroSpringIn}
              className="font-display mb-4 text-[12px] font-bold uppercase tracking-[0.35em] text-[#FF9933]"
            >
              The Driver Influence Layer
            </motion.p>

            <motion.h1
              variants={heroSpringIn}
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              Reach the <span className="text-[#FF9933]">Driver</span> Who
              <br className="hidden md:block" />
              Uses Your <span className="text-[#4ADE80]">Product</span> Every Day.
            </motion.h1>

            <motion.p
              variants={heroSpringIn}
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/75"
            >
              The truck buyer signs the cheque. The driver decides which truck works.
              We give you direct, trusted, at-scale access to that decision.
            </motion.p>

            <motion.div variants={heroSpringIn} className="mt-10 flex flex-wrap gap-4">
              <Button
                variant="saffron"
                size="lg"
                className="h-14 px-8 text-base shadow-xl"
                as="a"
                href="#"
              >
                Start a Partnership →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
              >
                View Programmes
              </Button>
            </motion.div>

            <motion.div
              variants={heroSpringIn}
              className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8"
            >
              {[
                { value: '$51Bn', label: 'CV Market' },
                { value: '50K+', label: 'Driver Network' },
                { value: '~22L', label: 'Driver Shortage' },
                { value: 'Zero', label: 'Competitors' },
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

      {/* ───── Blind Spot — image + copy ───── */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div
                className="group relative overflow-hidden rounded-sm border border-[#e8e0d5] shadow-lg transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src="/oem-feedback.png"
                  alt="Driver giving product feedback"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div>
                <p className="font-display mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8860b]">
                  The Blind Spot
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-[2.15rem]">
                  India&apos;s $51 Billion CV Market
                  <br />
                  Has a Blind Spot: <span className="text-[#FF9933]">The Driver.</span>
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  Every truck OEM spends crores reaching fleet owners, financiers, and
                  dealers. But the person who actually uses the product every day — who
                  knows whether the cabin is comfortable, the brakes are responsive, the
                  fuel economy is real — is the driver.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  No OEM has direct, trusted access to drivers at scale. TruckMitr is
                  that access layer — 50,000+ drivers, connected and engaged.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { n: '$51Bn', l: 'India CV Market', c: '#FF9933' },
                    { n: '50,000+', l: 'Driver Community', c: '#138808' },
                    { n: '~22L', l: 'Driver Shortage', c: '#FF9933' },
                    { n: 'Only', l: 'Driver Access Platform', c: '#138808' },
                  ].map((s) => (
                    <GlassCard
                      key={s.l}
                      hover={false}
                      accentColor={s.c}
                      className="py-4 text-center"
                    >
                      <div
                        className="font-kpi text-xl font-bold"
                        style={{ color: s.c }}
                      >
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

      {/* ───── Partnership Models ───── */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                  Programmes
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                Partnership Models
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--text-secondary)]">
                Built for your business — from product feedback to CSR impact.
              </p>
            </div>
          </SectionReveal>

          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  img: '/oem-feedback.png',
                  accent: '#FF9933',
                  title: 'Driver Feedback & Product Insights',
                  desc: 'Run structured feedback programmes with real drivers on cabin comfort, braking, fuel economy. Quarterly reports with actionable R&D data.',
                  tags: ['Truck OEMs', 'Tyre Brands'],
                },
                {
                  img: '/oem-ev.png',
                  accent: '#138808',
                  title: 'EV Training & Transition',
                  desc: 'Co-create EV readiness modules branded with your identity. High-voltage safety, regen braking, charging infra — under PM E-DRIVE.',
                  tags: ['EV Truck OEMs', 'Charging Infra'],
                },
                {
                  img: '/oem-hero.png',
                  accent: '#FF9933',
                  title: 'Brand Engagement & Rewards',
                  desc: 'Run sampling campaigns, loyalty rewards, and engagement programmes through our driver network. Reach the real product influencer.',
                  tags: ['Ancillary', 'Lubricants', 'Insurance'],
                },
                {
                  img: '/fleet-dashboard.png',
                  accent: '#138808',
                  title: 'Driver Influence Score™',
                  desc: 'Identify which drivers shape fleet purchase decisions so your engagement budget targets the right people.',
                  tags: ['All Partners'],
                },
                {
                  img: '/fleet-drivers.png',
                  accent: '#FF9933',
                  title: 'CSR & Social Impact',
                  desc: 'Sponsor health camps, skill training, scheme registration drives. Measurable CSR outcomes with quarterly impact reports.',
                  tags: ['All Corporates', 'CSR Mandate'],
                },
                {
                  img: '/oem-ev.png',
                  accent: '#138808',
                  title: 'MoRTH-Aligned Training',
                  desc: 'Co-deliver training with IDTR & RDTC network. Certification badges carry OEM branding. Trained drivers become product advocates.',
                  tags: ['OEMs', 'IDTR Partners'],
                },
              ].map((p) => (
                <FadeItem key={p.title} classic>
                  <GlassCard
                    accentColor={p.accent}
                    className="overflow-hidden p-0"
                  >
                    <div className="group relative h-40 overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {p.desc}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                            style={{
                              background: `${p.accent}15`,
                              color: p.accent,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ───── EV band ───── */}
      <section className="relative overflow-hidden">
        <SectionReveal classic>
          <div className="relative">
            <img
              src="/oem-ev.png"
              alt="Electric truck at charging station"
              className="h-56 w-full object-cover md:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#4ADE80]">
                  Future Ready
                </p>
                <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold text-white md:text-4xl">
                  The EV Transition
                  <br />
                  Starts with the Driver.
                </h2>
                <p className="mt-3 max-w-md text-sm text-white/70">
                  PM E-DRIVE is accelerating electric trucks in India. Drivers trained on
                  your EV platform become your biggest advocates.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <ClassicDivider />

      {/* ───── CTA ───── */}
      <section className="border-t border-[#e8e0d5] bg-[var(--bg-primary)] px-6 py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <SectionReveal classic>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-sm border border-[#e8e0d5] bg-gradient-to-br from-[#FF9933]/5 via-white to-[#138808]/5 p-12 shadow-lg">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
                <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  Let&apos;s Build Something Together
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-[15px] text-[var(--text-secondary)]">
                  Whether you manufacture trucks, make tyres, sell lubricants, or
                  provide insurance — the driver is your end-user. We are your bridge.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <Button variant="saffron" size="lg" as="a" href="#">
                    Start a Partnership →
                  </Button>
                  <Button variant="outline" size="lg" to="/about">
                    Learn About Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

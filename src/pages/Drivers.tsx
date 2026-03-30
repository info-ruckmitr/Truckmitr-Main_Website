import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
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

export default function Drivers() {
  const reduceMotion = useReducedMotion()

  return (
    <>
      <Helmet>
        <title>For Drivers — TruckMitr</title>
      </Helmet>

      {/* ───── Hero — driver cabin POV ───── */}
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
              src="/driver-hero.png"
              alt=""
              className="h-full w-full object-cover object-[center_30%]"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15"
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
              Your Home on TruckMitr
            </motion.p>

            <motion.h1
              variants={heroSpringIn}
              className="font-display text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              You Keep <span className="text-[#FF9933]">India</span> Moving.
              <br />
              We Keep <span className="text-[#4ADE80]">You</span> Growing.
            </motion.h1>

            <motion.p
              variants={heroSpringIn}
              className="font-devanagari mt-5 text-lg font-medium text-white/80"
            >
              नौकरी ढूंढो · सेहत बनाओ · योजनाओं का फ़ायदा उठाओ · सीखो और बढ़ो
            </motion.p>

            <motion.p
              variants={heroSpringIn}
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/70"
            >
              Verified jobs, health support, government schemes, and skill training
              — built for the person behind the wheel.
            </motion.p>

            <motion.div variants={heroSpringIn} className="mt-10 flex flex-wrap gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                className="h-14 px-8 text-base shadow-xl"
                as="a"
                href="#"
              >
                💬 नौकरी ढूंढो — Find Jobs
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
                as="a"
                href="#schemes"
              >
                📋 Scheme Help
              </Button>
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

      {/* ───── Intro message ───── */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal classic>
            <div className="relative overflow-hidden rounded-sm border border-[#e8e0d5] bg-white p-8 shadow-sm md:p-12">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                Namaste, Driver 👋
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                You keep India moving. The food in every kitchen, the medicine in
                every hospital, the steel in every building — it all reached there
                because you drove it. Without you, India stops.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                But finding a good job — with clear pay, a safe truck, fair
                treatment, and honest information — is harder than driving through a
                monsoon night. That is why TruckMitr exists. We are built for you.
              </p>
              <p className="mt-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-[#b8860b]">
                Pick what you need today ↓
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ───── 3 pillars — image cards ───── */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Find Jobs */}
              <FadeItem classic>
                <Link to="/jobs" className="block h-full no-underline">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="h-full"
                  >
                    <GlassCard
                      accentColor="#FF9933"
                      className="h-full cursor-pointer overflow-hidden p-0"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src="/fleet-drivers.png"
                          alt="Drivers at fleet depot"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-3 left-4 rounded-full bg-[#FF9933] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          नौकरी ढूंढो
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                          Find Verified Jobs
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                          Job listings with salary range, route type, truck type,
                          and benefits — all clearly stated. No middleman fees.
                          Apply via WhatsApp.
                        </p>
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#FF9933]">
                          See Open Jobs →
                        </span>
                      </div>
                    </GlassCard>
                  </motion.div>
                </Link>
              </FadeItem>

              {/* Health */}
              <FadeItem classic>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="h-full"
                >
                  <GlassCard
                    accentColor="#138808"
                    className="h-full overflow-hidden p-0"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src="/driver-health.png"
                        alt="Driver health camp"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 rounded-full bg-[#138808] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        सेहत सँभालो
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                        Health &amp; Wellness
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        Your health is your income. We help with check-up guidance,
                        mental wellbeing, and fatigue awareness.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-sm text-[var(--text-secondary)]">
                        {[
                          'Common health issues on the road',
                          'PM-JAY health cover guidance',
                          'Apna Ghar rest stop locations',
                          'Stress and sleep support',
                        ].map((x) => (
                          <li key={x}>
                            <span className="text-[#138808]">✓</span> {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              </FadeItem>

              {/* Welfare */}
              <FadeItem classic>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="h-full"
                >
                  <GlassCard
                    accentColor="#FF9933"
                    className="h-full overflow-hidden p-0"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src="/driver-training.png"
                        alt="Driver training session"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 rounded-full bg-[#FF9933] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        सरकारी योजनाएँ
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                        Welfare Schemes Guide
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        Many drivers qualify for government schemes but miss out.
                        We simplify it — step by step, in simple language, no login.
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-[#FF9933]">
                        View Schemes ↓
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              </FadeItem>
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ───── Health camp image band ───── */}
      <section className="relative overflow-hidden">
        <SectionReveal classic>
          <div className="relative">
            <img
              src="/driver-health.png"
              alt="Health camp for drivers"
              className="h-52 w-full object-cover md:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
            <div className="absolute inset-0 flex items-center px-8 md:px-16">
              <div>
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#4ADE80]">
                  Driver Wellness
                </p>
                <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold text-white md:text-4xl">
                  Your Health Is
                  <br />
                  Your Income.
                </h2>
                <p className="mt-3 max-w-md text-sm text-white/70">
                  Free health camps, PM-JAY guidance, rest stop access, and mental wellbeing support.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <ClassicDivider />

      {/* ───── Government Schemes ───── */}
      <section id="schemes" className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <SectionReveal classic>
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
                <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                  सरकारी योजनाएँ
                </p>
                <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                Government Schemes You Can Access
              </h2>
            </div>
          </SectionReveal>

          <StaggerSection classic>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  n: 'e-Shram Card',
                  hi: 'ई-श्रम कार्ड',
                  b: 'A national database for unorganised workers. Get your Universal Account Number (UAN) through Aadhaar-based registration.',
                  ben: '✓ Worker ID + UAN for social security access',
                  accent: '#FF9933',
                },
                {
                  n: 'Ayushman Bharat PM-JAY',
                  hi: 'आयुष्मान भारत PM-JAY',
                  b: 'Cashless hospitalisation cover for eligible families. No huge bills to worry about.',
                  ben: '✓ Up to ₹5,00,000 per family per year',
                  accent: '#138808',
                },
                {
                  n: 'PMSBY — Accident Cover',
                  hi: 'प्रधानमंत्री सुरक्षा बीमा योजना',
                  b: 'Accident insurance for bank account holders. Covers accidental death and disability.',
                  ben: '✓ Up to ₹2,00,000 accident cover',
                  accent: '#FF9933',
                },
                {
                  n: 'PM-SYM — Pension Scheme',
                  hi: 'प्रधानमंत्री श्रम योगी मान-धन',
                  b: 'A contributory pension scheme for unorganised workers. Your retirement matters.',
                  ben: '✓ ₹3,000/month pension after age 60',
                  accent: '#138808',
                },
              ].map((s) => (
                <FadeItem key={s.n} classic>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  >
                    <div
                      className="rounded-sm border border-[#e8e0d5] bg-white p-6 pl-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
                      style={{ borderLeft: `4px solid ${s.accent}` }}
                    >
                      <h3 className="font-display font-bold text-[var(--text-primary)]">
                        {s.n}
                      </h3>
                      <p
                        className="font-devanagari text-sm"
                        style={{ color: s.accent }}
                      >
                        {s.hi}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {s.b}
                      </p>
                      <p
                        className="mt-3 text-sm font-medium"
                        style={{ color: s.accent }}
                      >
                        {s.ben}
                      </p>
                    </div>
                  </motion.div>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
          <p className="mt-8 text-center text-xs text-[var(--text-muted)]">
            TruckMitr provides guidance. Official approval and issuance is done by
            government portals. Eligibility criteria apply.
          </p>
        </div>
      </section>

      <ClassicDivider />

      {/* ───── Learn & Grow — with training image ───── */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Training image */}
              <motion.div
                className="group relative overflow-hidden rounded-sm border border-[#e8e0d5] shadow-lg"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              >
                <img
                  src="/driver-training.png"
                  alt="Driver training classroom"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>

              <div>
                <p className="font-display mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-[#b8860b]">
                  Future Ready
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-[2.15rem]">
                  Learn &amp; Grow —{' '}
                  <span className="text-[#FF9933]">Future-Ready</span> Driver
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  The future driver is not only someone who drives well. The future
                  driver understands safety, compliance, and new vehicle technologies.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      i: '🛡️',
                      t: 'Defensive Driving',
                      d: 'Safer habits and fatigue avoidance',
                      c: '#FF9933',
                    },
                    {
                      i: '📱',
                      t: 'Digital Skills',
                      d: 'Apps, PoD basics, fraud avoidance',
                      c: '#138808',
                    },
                    {
                      i: '⚡',
                      t: 'EV Awareness',
                      d: 'Charging, high-voltage safety',
                      c: '#FF9933',
                    },
                    {
                      i: '⛽',
                      t: 'Route & Fuel',
                      d: 'Route planning and fuel efficiency',
                      c: '#138808',
                    },
                  ].map((x) => (
                    <motion.div
                      key={x.t}
                      whileHover={{ y: -4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 22,
                      }}
                    >
                      <div
                        className="rounded-sm border border-[#e8e0d5] bg-white p-4 text-center shadow-sm"
                        style={{ borderTop: `3px solid ${x.c}` }}
                      >
                        <div className="text-2xl">{x.i}</div>
                        <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                          {x.t}
                        </p>
                        <p className="mt-1 text-[11px] text-[var(--text-muted)]">
                          {x.d}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
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
              className="mx-auto max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-sm border border-[#e8e0d5] bg-gradient-to-br from-[#FF9933]/5 via-white to-[#138808]/5 p-12 shadow-lg">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
                <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  What Do You Need Today?
                </h2>
                <p className="font-devanagari mt-3 text-[var(--text-secondary)]">
                  आज आपको क्या चाहिए — नौकरी या योजना मदद?
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <Button variant="whatsapp" size="lg" to="/jobs">
                    💬 Find Jobs
                  </Button>
                  <Button variant="green" size="lg" as="a" href="#">
                    📋 Scheme Help
                  </Button>
                  <Button variant="saffron" size="lg" as="a" href="#">
                    📞 Call Me Back
                  </Button>
                </div>
                <p className="mt-6 text-sm text-[var(--text-muted)]">
                  We reply in working hours. If we miss you, we will call back.
                </p>
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

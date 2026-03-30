import { Helmet } from 'react-helmet-async'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { GlassCard } from '../components/ui/GlassCard'
import { Button } from '../components/ui/Button'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Badge } from '../components/ui/Badge'
import {
  SectionReveal,
  StaggerSection,
  FadeItem,
} from '../components/motion/SectionReveal'
import { heroSpringIn, staggerHero } from '../lib/animations'
import { ClassicDivider } from '../components/home/ClassicDivider'
import { ImageFrame } from '../components/home/ImageFrame'
import { PartnersMarquee } from '../components/home/PartnersMarquee'
import { HeroBanner } from '../components/home/HeroBanner'
import { AnimatedCounter } from '../components/motion/AnimatedCounter'
import {
  ParallaxSection,
  FloatingElement,
  TextReveal,
} from '../components/motion/AnimationPrimitives'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Parallax the hero text upward as user scrolls past hero
  const heroTextY = useTransform(heroScroll, [0, 1], [0, -120])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  return (
    <>
      <Helmet>
        <title>TruckMitr — India&apos;s First Driver-Centric Platform</title>
      </Helmet>

      {/* ═══════════════ HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden">
        <HeroBanner />

        <motion.div
          className="relative z-10 mx-auto flex max-w-[1280px] items-end px-6 pb-16 pt-32 sm:px-8 md:items-center md:pb-20 md:pt-20 lg:min-h-[92vh]"
          style={{ y: heroTextY, opacity: heroOpacity }}
        >
          <motion.div
            variants={staggerHero}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Tricolor bar */}
            <motion.div
              aria-hidden
              className="mb-8 h-1 w-20 origin-left"
              style={{
                background:
                  'linear-gradient(90deg, #FF9933 33%, #FFFFFF 33% 66%, #138808 66%)',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              variants={heroSpringIn}
              className="font-display mb-5 text-[12px] font-bold uppercase tracking-[0.35em] text-[#FF9933]"
            >
              India&apos;s First Driver-Centric Platform
            </motion.p>

            <motion.h1
              variants={heroSpringIn}
              className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
            >
              The <span className="text-[#FF9933]">Driver</span> Moves India.
              <br />
              <span className="text-white/70">We move the</span>{' '}
              <span className="text-[#4ADE80]">Driver</span>.
            </motion.h1>

            <motion.p
              variants={heroSpringIn}
              className="font-devanagari mt-6 text-lg font-medium tracking-wide text-white/80"
            >
              ट्रक मित्र — ड्राइवर की तरक्की, देश की तरक्की
            </motion.p>

            <motion.p
              variants={heroSpringIn}
              className="mt-4 max-w-xl text-[16px] leading-relaxed text-white/70"
            >
              Verified jobs, financial welfare, and advanced skilling — elevating
              the life of every person behind the wheel.
            </motion.p>

            <motion.div
              variants={heroSpringIn}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="h-14 px-8 text-base shadow-xl"
              >
                Get Started on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/fleet"
                className="h-14 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
              >
                Fleet Owners
              </Button>
              <Button
                variant="outline"
                size="lg"
                to="/oem"
                className="h-14 border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
              >
                OEM Partners
              </Button>
            </motion.div>

            {/* Stats with animated counters */}
            <motion.div
              variants={heroSpringIn}
              className="mt-14 flex flex-wrap gap-10 border-t border-white/15 pt-8"
            >
              {[
                { target: 50000, suffix: '+', label: 'Drivers' },
                { target: 2, suffix: '', label: 'Centres' },
                { target: 500, suffix: '+', label: 'Placed' },
              ].map((stat, i) => (
                <div key={i}>
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="font-kpi text-2xl font-bold text-white md:text-3xl"
                    duration={2.5}
                  />
                  <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
              <div>
                <span className="font-kpi text-2xl font-bold text-white md:text-3xl">
                  24/7
                </span>
                <span className="mt-1 block text-[11px] font-bold uppercase tracking-widest text-white/50">
                  Support
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating decorative elements */}
          <div className="pointer-events-none absolute right-10 top-1/4 hidden lg:block">
            <FloatingElement delay={0} duration={6} distance={15}>
              <div className="h-3 w-3 rounded-full bg-[#FF9933]/30 blur-sm" />
            </FloatingElement>
          </div>
          <div className="pointer-events-none absolute right-32 bottom-1/3 hidden lg:block">
            <FloatingElement delay={2} duration={7} distance={10}>
              <div className="h-2 w-2 rounded-full bg-[#138808]/30 blur-sm" />
            </FloatingElement>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              Scroll
            </span>
            <div className="h-6 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 h-1.5 origin-left"
          style={{
            background:
              'linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </section>

      <ClassicDivider />

      <div
        className="mx-auto h-0.5 max-w-[200px]"
        style={{
          background:
            'linear-gradient(90deg, #FF9933 33%, #FFFFFF 33% 66%, #138808 66%)',
        }}
      />

      {/* ═══════════════ TRUTH — parallax image + word reveal ═══════════════ */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ParallaxSection offset={40}>
                <ImageFrame
                  src="/home-driver-pride.png"
                  alt="Proud Indian truck driver"
                  className="w-full shadow-2xl"
                  aspect="aspect-[4/5] max-h-[550px]"
                />
              </ParallaxSection>
              <div>
                <p className="font-display mb-3 text-[11px] uppercase tracking-[0.4em] text-[#b8860b]">
                  The Pillar of Logistics
                </p>
                <h2 className="font-display text-3xl font-bold leading-tight text-[var(--text-primary)] md:text-[2.15rem]">
                  <TextReveal text="The owner buys the truck." />
                  <br />
                  <TextReveal text="The" delay={0.3} />{' '}
                  <span className="text-[#FF9933]">
                    <TextReveal text="driver" delay={0.4} />
                  </span>{' '}
                  <TextReveal text="drives the nation." delay={0.5} />
                </h2>
                <p className="mt-5 text-[16px] leading-relaxed text-[var(--text-secondary)]">
                  Behind every successful shipment is a professional at the wheel. 
                  TruckMitr is the first platform dedicated to the workforce that 
                  moves billions in goods every single day.
                </p>
                <p className="mt-4 text-[14px] italic text-[var(--text-muted)]">
                  &quot;Hum saath honge toh raasta bhi aasaan hoga.&quot;
                </p>
                <motion.div
                  className="relative mt-8 overflow-hidden rounded-sm border border-[#e8e0d5] bg-gradient-to-br from-[#FF9933] to-[#F28500] p-8 text-center text-white shadow-lg"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 60px rgba(255,153,51,0.25)',
                  }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                >
                  <p className="font-display text-xl font-semibold tracking-wide">
                    Our manifesto
                  </p>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/95">
                    We build for the person at the wheel — not charity, but sound
                    business.
                  </p>
                </motion.div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { n: 22, s: 'L', l: 'Shortage', c: '#FF9933', p: '~' },
                    { n: 95, s: 'L', l: 'Trucks', c: '#138808' },
                    { n: 15, s: 'L Cr+', l: 'Goods (₹)', c: '#FF9933' },
                    { n: 3.6, s: 'M', l: 'Global (IRU)', c: '#138808' },
                  ].map((s) => (
                    <GlassCard
                      key={s.l}
                      hover={false}
                      accentColor={s.c}
                      className="py-4 text-center"
                    >
                      <AnimatedCounter
                        target={s.n}
                        suffix={s.s}
                        prefix={s.p || ''}
                        className="text-xl font-semibold"
                        duration={2}
                      />
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

      {/* ═══════════════ PILLARS — animated cards ═══════════════ */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            label="What we do"
            title="Three pillars"
            subtitle="Jobs, health, and learning — centred on the driver."
          />
          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  img: '/home-truck-side.jpg',
                  accent: '#FF9933',
                  title: 'Naukri Dilao',
                  hi: 'नौकरी दिलाओ',
                  line: 'Verified listings. One-tap apply.',
                  emoji: '💼',
                },
                {
                  img: '/home-logistics.jpg',
                  accent: '#138808',
                  title: 'Sehat Sambhalo',
                  hi: 'सेहत सँभालो',
                  line: 'Schemes, check-ups, wellbeing.',
                  emoji: '💚',
                },
                {
                  img: '/hero-truck.jpg',
                  accent: '#FF9933',
                  title: 'Sikho aur Badho',
                  hi: 'सीखो और बढ़ो',
                  line: 'EV, digital skills, safety.',
                  emoji: '🚀',
                },
              ].map((p, i) => (
                <FadeItem key={p.title} classic>
                  <GlassCard
                    accentColor={p.accent}
                    className="overflow-hidden p-0"
                  >
                    <div className="group relative h-44 overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <motion.span
                        className="absolute bottom-3 left-3 text-2xl drop-shadow-md"
                        initial={{ scale: 0, rotate: -20 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3 + i * 0.12,
                          type: 'spring',
                          stiffness: 400,
                        }}
                      >
                        {p.emoji}
                      </motion.span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">
                        {p.title}
                      </h3>
                      <p
                        className="text-xs font-medium"
                        style={{ color: p.accent }}
                      >
                        {p.hi}
                      </p>
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        {p.line}
                      </p>
                    </div>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ═══════════════ MoRTH ═══════════════ */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="relative mb-12 overflow-hidden rounded-sm border border-[#e8e0d5] shadow-lg">
              <ParallaxSection offset={30} className="h-48 md:h-64">
                <img
                  src="/home-logistics.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </ParallaxSection>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
              <div className="absolute inset-0 flex items-center px-10">
                <div>
                  <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                    National alignment
                  </p>
                  <h2 className="font-display mt-3 max-w-lg text-3xl font-extrabold text-[var(--text-primary)] md:text-4xl">
                    <TextReveal text="MoRTH Vision &" />
                    <br />
                    <TextReveal text="Driver Welfare" delay={0.3} />
                  </h2>
                </div>
              </div>
            </div>
          </SectionReveal>
          <StaggerSection classic>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  c: '#FF9933',
                  i: '🛣️',
                  t: 'Apna Ghar',
                  b: 'Rest & safe stops on NHs.',
                },
                {
                  c: '#138808',
                  i: '⚡',
                  t: 'PM E-DRIVE',
                  b: 'EV-ready driver skills.',
                },
                {
                  c: '#FF9933',
                  i: '📋',
                  t: 'MTW Act',
                  b: 'Know your hours & rights.',
                },
              ].map((x, i) => (
                <FadeItem key={x.t} classic>
                  <GlassCard accentColor={x.c}>
                    <motion.div
                      className="text-2xl"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        type: 'spring',
                        stiffness: 400,
                      }}
                    >
                      {x.i}
                    </motion.div>
                    <h4 className="mt-2 font-display font-semibold text-[var(--text-primary)]">
                      {x.t}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {x.b}
                    </p>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      <ClassicDivider />

      {/* ═══════════════ STORIES ═══════════════ */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            label="Voices"
            title="They drive India"
            subtitle="Real people. Real journeys."
          />
          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  img: '/home-road.jpg',
                  q: 'मुझे TruckMitr से 3 दिन में नौकरी मिली। सैलरी क्लियर थी।',
                  n: 'Ramesh Kumar',
                  r: 'NH-44 · 12 yrs',
                },
                {
                  img: '/home-logistics.jpg',
                  q: 'e-Shram और PM-JAY — TruckMitr ने सब समझाया।',
                  n: 'Sunil Yadav',
                  r: 'Delhi–Jaipur · 8 yrs',
                },
              ].map((s) => (
                <FadeItem key={s.n} classic>
                  <GlassCard className="flex flex-col gap-4 overflow-hidden p-0 sm:flex-row">
                    <div className="group relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-44">
                      <img
                        src={s.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <p className="font-devanagari text-[15px] italic leading-relaxed text-[var(--text-secondary)]">
                          &ldquo;{s.q}&rdquo;
                        </p>
                        <p className="mt-4 font-display text-sm font-semibold tracking-wide text-[var(--text-primary)]">
                          {s.n}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">
                          {s.r}
                        </p>
                      </motion.div>
                    </div>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      {/* ═══════════════ OEM ═══════════════ */}
      <section className="bg-[var(--bg-primary)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionReveal classic>
            <div className="text-center">
              <p className="font-display text-[11px] uppercase tracking-[0.3em] text-[#D4A017]">
                OEMs &amp; partners
              </p>
              <h2 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                <TextReveal text="Reach the driver who uses your product every day." />
              </h2>
            </div>
          </SectionReveal>
          <StaggerSection classic>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { i: '🔬', t: 'Feedback', b: 'Product insights at scale.' },
                { i: '⚡', t: 'EV training', b: 'Modules with your brand.' },
                { i: '🎯', t: 'Engagement', b: 'Rewards & sampling.' },
                { i: '📊', t: 'Influence', b: 'Driver Influence Score™.' },
              ].map((c, i) => (
                <FadeItem key={c.t} classic>
                  <GlassCard className="text-center">
                    <motion.div
                      className="text-3xl"
                      initial={{ scale: 0, rotate: -30 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.08,
                        type: 'spring',
                        stiffness: 400,
                      }}
                    >
                      {c.i}
                    </motion.div>
                    <h4 className="mt-2 font-display font-semibold">
                      {c.t}
                    </h4>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {c.b}
                    </p>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
          <div className="mt-10 flex justify-center">
            <Button variant="oem" size="lg" to="/oem">
              Partner programmes →
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════ CSR ═══════════════ */}
      <section className="bg-[var(--section-alt)] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeader
            label="CSR"
            title="Impact that travels"
            subtitle="Health, skills, and dignity on the road."
          />
          <StaggerSection classic>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  img: '/home-road.jpg',
                  tag: 'Health',
                  badge: 'green' as const,
                  title: 'Health camps',
                  line: 'Screenings at hubs & stops.',
                },
                {
                  img: '/home-logistics.jpg',
                  tag: 'Skilling',
                  badge: 'saffron' as const,
                  title: 'Future-ready',
                  line: 'EV & compliance training.',
                },
                {
                  img: '/home-truck-side.jpg',
                  tag: 'Family',
                  badge: 'green' as const,
                  title: 'Family support',
                  line: 'Education & scheme access.',
                },
              ].map((c) => (
                <FadeItem key={c.title} classic>
                  <GlassCard className="overflow-hidden p-0">
                    <div className="group relative h-40 overflow-hidden">
                      <img
                        src={c.img}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5">
                      <Badge variant={c.badge}>{c.tag}</Badge>
                      <h4 className="mt-2 font-display font-semibold text-[var(--text-primary)]">
                        {c.title}
                      </h4>
                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        {c.line}
                      </p>
                    </div>
                  </GlassCard>
                </FadeItem>
              ))}
            </div>
          </StaggerSection>
        </div>
      </section>

      <PartnersMarquee />

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="border-t border-[#e8e0d5] bg-[var(--bg-primary)] px-6 py-20">
        <div className="mx-auto max-w-[1280px] text-center">
          <SectionReveal classic>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl"
            >
              <div className="relative overflow-hidden rounded-sm border border-[#e8e0d5] bg-gradient-to-br from-[#FF9933]/5 via-white to-[#138808]/5 p-12 shadow-lg">
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
                <h2 className="font-display text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
                  <TextReveal text="Join the movement" />
                </h2>
                <p className="mt-4 text-[15px] text-[var(--text-secondary)]">
                  Drivers, fleets, or partners — start here.
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  <Button variant="whatsapp" size="lg" to="/drivers">
                    I&apos;m a driver
                  </Button>
                  <Button variant="fleet" size="lg" to="/fleet">
                    Fleet owner
                  </Button>
                  <Button variant="oem" size="lg" to="/oem">
                    OEM / partner
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

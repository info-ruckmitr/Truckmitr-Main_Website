import { Helmet } from 'react-helmet-async'
import { Button } from '../components/ui/Button'
import { AnimatedNumber } from '../components/ui/AnimatedNumber'
import { SectionReveal } from '../components/motion/SectionReveal'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About TruckMitr</title>
      </Helmet>

      <section className="bg-[var(--bg-primary)] px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <SectionReveal>
            <h1 className="font-display text-4xl font-black text-[var(--text-primary)]">
              About <span className="text-[#FF9933]">TruckMitr</span>
            </h1>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              A driver-first movement — built to make trucking safer, more respected, and more
              secure.
            </p>
          </SectionReveal>

          <div className="mt-12 space-y-6 text-[var(--text-secondary)]">
            <SectionReveal>
              <p className="text-xl font-semibold text-[var(--text-primary)]">
                TruckMitr exists because the driver experience in India has been ignored for too
                long.
              </p>
            </SectionReveal>
            <SectionReveal>
              <p>
                Drivers are expected to deliver on time in every condition — scorching heat,
                blinding rain, endless traffic jams, broken roads, and pressure to &apos;manage
                somehow.&apos; Yet when a driver asks for clarity on pay, clean rest facilities,
                fair treatment, or medical help, the system often fails them.
              </p>
            </SectionReveal>
            <SectionReveal>
              <p>
                We believe a stronger trucking industry is not built only on better roads and
                better trucks. It is built on better driver lives. A healthy driver is a safer
                driver. A respected driver is a loyal driver. A skilled driver is a future-ready
                driver.
              </p>
            </SectionReveal>

            <SectionReveal>
              <div>
                <h2 className="mt-8 text-xl font-bold text-[var(--text-primary)]">Our Mission</h2>
                <p className="mt-2">
                  To help truck drivers get reliable work, access welfare, and build skills — so they
                  can earn with dignity today and stay ready for tomorrow.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div>
                <h2 className="mt-8 text-xl font-bold text-[var(--text-primary)]">
                  What We Stand For
                </h2>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Respect over fear.</strong> — No
                  driver should feel powerless in a job. The driver is not a cost — the driver is
                  the workforce.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Trust over rumours.</strong> —
                  Verified job information, clear expectations, and honest communication. If we
                  don&apos;t know something, we say so.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Safety over shortcuts.</strong> —
                  Road safety is not only about infrastructure. It is about driver working
                  conditions, responsible scheduling, and the right to rest. This aligns with
                  ILO&apos;s guidance on decent work in transport and India&apos;s Motor Transport
                  Workers Act provisions on hours and welfare.
                </p>
                <p className="mt-3">
                  <strong className="text-[var(--text-primary)]">Support for the whole life.</strong>{' '}
                  — Health, mental wellbeing, family security, and access to social protection matter
                  — especially for workers in the unorganised sector who often fall through the
                  cracks.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div>
                <h2 className="mt-8 text-xl font-bold text-[var(--text-primary)]">
                  Why This Matters Now
                </h2>
                <p className="mt-2">
                  India faces a widely reported shortage of skilled truck drivers, estimated at
                  around 22 lakh. Globally, IRU reports 3.6 million unfilled truck driver positions
                  across 36 countries, with a widening age gap (under-25 drivers at just 6.5% of the
                  workforce). If the industry does not become a better place to work, shortages worsen
                  — impacting families, supply chains, national safety, and economic growth.
                </p>
                <p className="mt-4">
                  At the same time, the industry is transforming — electric trucks are gaining
                  government policy support, automation technologies are advancing, and digital
                  compliance is becoming standard. Drivers who are healthy, skilled, and supported
                  will thrive. Those who are left behind will leave the profession. TruckMitr
                  ensures no driver gets left behind.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div>
                <h2 className="mt-8 text-xl font-bold text-[var(--text-primary)]">
                  What We Do — In Simple Words
                </h2>
                <p className="mt-2">
                  We connect drivers to verified job openings. We help drivers understand and access
                  welfare schemes like e-Shram and PM-JAY. We promote rest, safety, and wellbeing. We
                  prepare drivers for the future — EV awareness, digital skills, compliance
                  knowledge. And we give OEMs, ancillary businesses, and corporate CSR programmes a
                  direct, trusted channel to the people who actually use their products every day.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div>
                <h2 className="mt-8 text-xl font-bold text-[var(--text-primary)]">
                  India&apos;s First Driver-Centric Platform
                </h2>
                <p className="mt-2">
                  We are the first platform in India that starts with the driver — not the fleet
                  owner, not the OEM, not the shipper. Every product decision, every piece of content,
                  every partnership is evaluated against one question: does this help the driver?
                </p>
                <p className="mt-4">
                  This is not charity. This is the most rational business strategy for an industry
                  that cannot function without its drivers.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section
        className="border-y border-[var(--border)] px-6 py-12"
        style={{
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
        }}
      >
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 text-center md:grid-cols-5">
          <div>
            <AnimatedNumber
              target={50000}
              suffix="+"
              className="font-kpi block text-2xl font-extrabold text-[#FF9933] md:text-3xl"
            />
            <span className="mt-1 block text-xs text-[var(--text-muted)]">
              Drivers in Community
            </span>
          </div>
          <div>
            <AnimatedNumber
              target={2}
              className="font-kpi block text-2xl font-extrabold text-[#FF9933] md:text-3xl"
            />
            <span className="mt-1 block text-xs text-[var(--text-muted)]">Physical Centres</span>
          </div>
          <div>
            <AnimatedNumber
              target={500}
              suffix="+"
              className="font-kpi block text-2xl font-extrabold text-[#FF9933] md:text-3xl"
            />
            <span className="mt-1 block text-xs text-[var(--text-muted)]">Drivers Placed</span>
          </div>
          <div>
            <span className="font-kpi block text-2xl font-extrabold text-[#FF9933] md:text-3xl">
              Pan-India
            </span>
            <span className="mt-1 block text-xs text-[var(--text-muted)]">
              Coverage on Major NHs
            </span>
          </div>
          <div>
            <span className="font-kpi block text-2xl font-extrabold text-[#FF9933] md:text-3xl">
              24/7
            </span>
            <span className="mt-1 block text-xs text-[var(--text-muted)]">WhatsApp Support</span>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-primary)] px-6 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl font-bold text-[var(--text-primary)]">
              Join the Movement
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="whatsapp" size="lg" to="/drivers">
                💬 I&apos;m a Driver
              </Button>
              <Button variant="fleet" size="lg" to="/fleet">
                I&apos;m a Fleet Owner
              </Button>
              <Button variant="oem" size="lg" to="/oem">
                I&apos;m an OEM / Partner
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}

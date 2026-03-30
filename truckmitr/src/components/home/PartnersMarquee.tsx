import { motion } from 'framer-motion'
import { SectionReveal } from '../motion/SectionReveal'

const partners = [
  {
    name: 'Tata Motors',
    logo: 'https://logo.clearbit.com/tatamotors.com',
    tagline: 'Commercial Vehicles',
  },
  {
    name: 'Ashok Leyland',
    logo: 'https://logo.clearbit.com/ashokleyland.com',
    tagline: 'Trucks & Buses',
  },
  {
    name: 'Eicher Motors',
    logo: 'https://logo.clearbit.com/eicher.in',
    tagline: 'Transport Solutions',
  },
  {
    name: 'BharatBenz',
    logo: 'https://logo.clearbit.com/bharatbenz.com',
    tagline: 'Daimler India',
  },
  {
    name: 'Mahindra',
    logo: 'https://logo.clearbit.com/mahindra.com',
    tagline: 'Rise Together',
  },
  {
    name: 'Volvo Trucks',
    logo: 'https://logo.clearbit.com/volvotrucks.com',
    tagline: 'Driving Progress',
  },
  {
    name: 'Indian Oil',
    logo: 'https://logo.clearbit.com/iocl.com',
    tagline: 'IOCL',
  },
  {
    name: 'BPCL',
    logo: 'https://logo.clearbit.com/bharatpetroleum.in',
    tagline: 'Energizing Lives',
  },
  {
    name: 'HPCL',
    logo: 'https://logo.clearbit.com/hindustanpetroleum.com',
    tagline: 'HP Petroleum',
  },
  {
    name: 'MRF Tyres',
    logo: 'https://logo.clearbit.com/mrftyres.com',
    tagline: 'Tyres & Retreads',
  },
  {
    name: 'Apollo Tyres',
    logo: 'https://logo.clearbit.com/apollotyres.com',
    tagline: 'Go the Distance',
  },
  {
    name: 'Castrol',
    logo: 'https://logo.clearbit.com/castrol.com',
    tagline: 'Lubricants',
  },
]

// Duplicate for seamless loop
const doubledPartners = [...partners, ...partners]

function PartnerCard({
  name,
  logo,
  tagline,
}: {
  name: string
  logo: string
  tagline: string
}) {
  return (
    <motion.div
      className="group relative mx-3 flex w-[210px] shrink-0 cursor-pointer flex-col items-center rounded-xl border border-[var(--border)] bg-[var(--bg-card-solid)] px-6 py-7 text-center shadow-sm transition-all duration-300"
      whileHover={{
        y: -8,
        scale: 1.05,
        boxShadow: '0 20px 50px rgba(255, 153, 51, 0.15)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-[#FF9933]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-1.5 transition-transform duration-300 group-hover:scale-110">
        <img
          src={logo}
          alt={name}
          className="h-full w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              const fallback = document.createElement('span')
              fallback.textContent = name.charAt(0)
              fallback.className =
                'text-xl font-bold text-[var(--text-muted)]'
              parent.appendChild(fallback)
            }
          }}
        />
      </div>

      <h4 className="mt-3 text-sm font-bold tracking-wide text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[#FF9933]">
        {name}
      </h4>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[#138808]">
        {tagline}
      </p>

      {/* Bottom glow on hover */}
      <div className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#FF9933] to-[#138808] opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-80" />
    </motion.div>
  )
}

export function PartnersMarquee() {
  return (
    <section className="overflow-hidden border-y border-[var(--border)] bg-[var(--bg-secondary)] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionReveal classic>
          <div className="mb-12 text-center">
            {/* Classic ornamental label */}
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#b8860b]/50" />
              <p className="font-display text-[11px] font-bold uppercase tracking-[0.4em] text-[#b8860b]">
                Ecosystem Partners
              </p>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#b8860b]/50" />
            </div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              Trusted by India&apos;s leading brands
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--text-secondary)]">
              OEMs, fuel companies, and ancillary partners — building the driver
              ecosystem together.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Marquee Row 1 — left to right */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent md:w-40" />

        <motion.div
          className="flex py-2"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {doubledPartners.map((p, i) => (
            <PartnerCard key={`row1-${i}`} {...p} />
          ))}
        </motion.div>
      </div>

      {/* Marquee Row 2 — right to left */}
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent md:w-40" />

        <motion.div
          className="flex py-2"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[...doubledPartners].reverse().map((p, i) => (
            <PartnerCard key={`row2-${i}`} {...p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

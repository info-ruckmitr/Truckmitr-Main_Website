import { IMAGES } from '@utils/constants'

/** Canonical home marketing copy (aligned with TruckMitr_Website prototype). */
export const homeHero = {
  eyebrow: "India's First Driver-Centric Platform",
  titleLine1: 'The Engine Behind',
  titleLine2: "India's Trucking Ecosystem",
  sub:
    'Connecting truck drivers, fleet owners, and industry partners on one trusted platform — built around the people who keep India moving.',
  image: {
    src: IMAGES.homeHeroTruck,
    alt: 'Commercial trucks — fleet vehicles in focus',
  },
  ctas: [
    { id: 'driver', label: "I'm a Driver →", to: '/drivers', style: 'primary' },
    { id: 'fleet', label: "I'm a Fleet Owner →", to: '/fleet', style: 'glass' },
    { id: 'oem', label: 'OEM & Corporate →', to: '/oem', style: 'ghost' },
  ],
}

/** Stats row: numeric animation targets + display. */
export const homeStats = [
  { id: 'drivers', end: 10, suffix: 'M+', label: 'Truck Drivers in India' },
  { id: 'states', end: 28, suffix: '+', label: 'States Covered' },
  { id: 'jobs', end: 50, suffix: 'K+', label: 'Jobs Listed' },
  { id: 'verified', end: 100, suffix: '%', label: 'Verified Profiles' },
]

export const homePlatform = {
  label: 'The Platform',
  title: 'One Ecosystem. Every Stakeholder.',
  sub:
    'TruckMitr is where truck drivers find work, fleet owners find drivers, and industry partners access the intelligence they need to build better products and programs.',
  cards: [
    {
      id: 'drivers',
      icon: '🚛',
      title: 'For Drivers',
      body:
        'Verified job listings, training certifications, welfare scheme access, health programs, and a community that puts driver needs first.',
      cta: 'Learn More →',
      to: '/drivers',
      iconVariant: 'orange',
    },
    {
      id: 'fleet',
      icon: '🏢',
      title: 'For Fleet Owners',
      body:
        'Hire verified drivers fast, manage compliance, access training programs, and build a reliable, skilled fleet with full digital support.',
      cta: 'Learn More →',
      to: '/fleet',
      iconVariant: 'green',
    },
    {
      id: 'oem',
      icon: '🤝',
      title: 'For OEMs & Corporates',
      body:
        'Real driver feedback, EV training, brand engagement, CSR execution, and the proprietary Driver Influence Score™ — all measurable.',
      cta: 'Learn More →',
      to: '/oem',
      iconVariant: 'orange',
    },
  ],
}

export const homeJobsStrip = {
  label: 'Live Listings',
  title: 'Latest Driver Jobs',
  viewAllLabel: 'View All Jobs →',
  viewAllTo: '/jobs',
  jobs: [
    {
      id: 'j1',
      title: 'Heavy Truck Driver — NH-44 Route',
      chips: ['📍 Delhi – Chennai', '🚛 HMV', '⏱ Full Time'],
      pay: '₹28,000 – ₹34,000/mo',
    },
    {
      id: 'j2',
      title: 'EV Truck Driver — Mumbai Logistics',
      chips: ['📍 Mumbai, MH', '⚡ EV Certified', '⏱ Full Time'],
      pay: '₹32,000 – ₹40,000/mo',
    },
    {
      id: 'j3',
      title: 'Mini Truck Driver — Last Mile Delivery',
      chips: ['📍 Bengaluru, KA', '🚐 LMV', '⏱ Part Time'],
      pay: '₹18,000 – ₹22,000/mo',
    },
  ],
}

export const homeWhy = {
  label: 'Why TruckMitr',
  title: 'Built Different. Built for Bharat.',
  sub:
    'Unlike generic logistics platforms, TruckMitr was designed ground-up around the driver. Every feature exists to serve the backbone of the Indian economy.',
  tiles: [
    {
      id: 'verified',
      icon: '🔒',
      title: 'Verified Network',
      body:
        'Every driver profile is manually verified — licence, experience, and identity checks before listing.',
      iconVariant: 'orange',
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'MoRTH-Aligned Training',
      body: 'Government-recognized certifications through the IDTR and RDTC network across India.',
      iconVariant: 'green',
    },
    {
      id: 'influence',
      icon: '📊',
      title: 'Driver Influence Score™',
      body:
        'Proprietary metric that identifies drivers who shape fleet purchase decisions — for precision partner targeting.',
      iconVariant: 'orange',
    },
    {
      id: 'welfare',
      icon: '🏥',
      title: 'Driver Welfare',
      body:
        'Health camps, welfare scheme enrollment, and financial literacy programs for drivers and their families.',
      iconVariant: 'green',
    },
  ],
}

export const homeTestimonials = {
  label: 'Stories from the Road',
  title: 'What Our Community Says',
  items: [
    {
      id: 't1',
      quote:
        'TruckMitr ne meri zindagi badal di. Pehle kaam dhundna bahut mushkil tha. Ab sab kuch phone pe ho jaata hai — verified employer, clear salary, no cheating.',
      initials: 'RS',
      name: 'Rajesh Singh',
      role: 'HMV Driver, 12 years experience · Uttar Pradesh',
    },
    {
      id: 't2',
      quote:
        'I hired 4 drivers through TruckMitr in 2 weeks. All verified, all reliable. The platform saved me at least 3 weeks of running around dalals and paying commission.',
      initials: 'AP',
      name: 'Amitabh Pandey',
      role: 'Fleet Owner, 18 trucks · Rajasthan',
    },
    {
      id: 't3',
      quote:
        'The EV training program gave our drivers the confidence to handle our new electric fleet. The TruckMitr-certified drivers are our best performers — zero incidents in 6 months.',
      initials: 'SK',
      name: 'Suresh Kumar',
      role: 'Logistics Head, EV Fleet Operator · Maharashtra',
    },
  ],
}

export const homeCta = {
  title: "Join India's Largest Trucking Community",
  sub:
    "Whether you're a driver looking for your next opportunity or a business looking to build a reliable fleet — TruckMitr is your platform.",
  primary: { label: 'Browse Jobs →', to: '/jobs' },
  secondary: { label: 'About TruckMitr', to: '/about' },
}

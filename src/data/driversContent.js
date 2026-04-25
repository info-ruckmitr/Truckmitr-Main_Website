/** Drivers page — Content */
export const driversHero = {
  eyebrow: 'For Drivers',
  titleLine1: 'Your Work is Real.',
  titleAccent: 'Your Platform Should Be Too.',
  sub: "Real jobs from verified transporters. Salary upfront, no surprises. Browse listings, get certified, claim welfare schemes you already qualify for — and connect with a community of drivers who actually get this life.",
  primary: { label: 'Browse Jobs Now →', to: '/jobs' },
  secondary: { label: 'Download App', href: 'https://play.google.com/store/apps/details?id=com.truckmitr' },
}

export const driversBenefits = {
  label: 'WHAT YOU GET',
  title: 'Six Things TruckMitr Does for You',
  sub: "Not promises. Actual features that drivers across UP, Maharashtra, Rajasthan, Tamil Nadu and 24 other states are using right now.",
  cards: [
    {
      icon: '💼',
      title: 'Verified Jobs',
      body: 'Every job on this platform is posted by a real, verified transporter. Salary shown upfront. No one calling you from an unknown number asking for a "registration fee."',
      variant: 'orange', // Preserved alternating structure
    },
    {
      icon: '🎓',
      title: 'Skill Certification',
      body: 'MoRTH-aligned training through IDTR and RDTC centres near you. Defensive driving, EV readiness, hazmat handling — each course adds a real certification to your profile.',
      variant: 'green',
    },
    {
      icon: '📋',
      title: 'Digital Profile',
      body: 'Your licence, experience, certifications, and Driver Influence Score — all in one verified profile that transporters across India can see. Your 15 years on the road finally has proof.',
      variant: 'orange',
    },
    {
      icon: '🏥',
      title: 'Health Camps',
      body: 'Free health checkups, eye tests, and specialist referrals at transport hubs, dhabas, and fuel stations in your area. Because most drivers haven\'t seen a doctor in years — and that\'s not okay.',
      variant: 'green',
    },
    {
      icon: '🏦',
      title: 'Welfare Schemes',
      body: 'Ayushman Bharat, PM-SYM, ESIC — you probably already qualify. We help you register, apply, and actually receive what the government set aside for workers like you.',
      variant: 'orange',
    },
    {
      icon: '🎁',
      title: 'Rewards & Perks',
      body: 'Complete a training. Refer another driver. Give feedback on a job. Every action earns you points — redeemable for phone recharges, merchandise, and exclusive perks.',
      variant: 'green',
    },
  ],
}

export const driversSteps = {
  label: 'GET STARTED',
  title: 'From Sign-Up to First Job — 4 Steps',
  steps: [
    {
      n: '1',
      title: 'Create Profile',
      text: 'Add your phone number, upload your licence, fill in the basics. Takes about 5 minutes. No paperwork, no office visit.',
    },
    {
      n: '2',
      title: 'Get Verified',
      text: 'We check your documents within 24 hours. Once cleared, your profile gets the verified badge — and transporters start noticing.',
    },
    {
      n: '3',
      title: 'Browse & Apply',
      text: 'Search by route, salary, vehicle type, or your home state. Found something that fits? Apply directly.',
    },
    {
      n: '4',
      title: 'Get Hired',
      text: 'The transporter reviews your profile, you connect, complete the screening, and start. The whole process that used to take weeks now takes days.',
    },
  ],
}

export const driversEv = {
  label: 'ELECTRIC FUTURE',
  title: 'EVs Are Coming. Get Certified Before Everyone Else Does.',
  body: "India's commercial fleet is shifting to electric — faster than most people expect. Fleets in Maharashtra, Gujarat, and Delhi are already running EV trucks. The drivers who get certified now are the ones who'll get those jobs first.\n\nEV-certified drivers on TruckMitr earn 15–25% more on average. There are 3x more job listings for EV drivers than there are certified drivers to fill them. That gap is your opportunity.",
  bullets: [
    "High-voltage safety — what's different about working around EV systems",
    "Regenerative braking — how it works and how to use it properly",
    "Charging infrastructure — finding stations, managing range on long hauls",
    "Battery care — day-to-day handling that affects vehicle lifespan",
    "PM E-DRIVE aligned curriculum — government-recognised on completion",
  ],
  ctaLabel: 'Enrol in EV Training →',
  sideTitle: 'EV Certification Opens Doors',
  stats: [
    { value: '₹40K+', label: 'average monthly salary for EV-certified drivers' },
    { value: '3x', label: 'more job listings for EV vs non-certified drivers' },
  ],
}

export const driversInfluence = {
  label: 'DRIVER INFLUENCE SCORE',
  title: "Your Opinion is Worth Something. We're the First to Recognise It.",
  body: "When a driver from Punjab recommends a tyre brand to his fleet owner, that fleet owner listens. When a driver in Tamil Nadu says a particular truck model handles better on state highways, that feedback travels. Drivers have been influencing purchase decisions in this industry for decades — without ever getting credit for it.\n\nTruckMitr's Influence Score tracks that. The higher your score, the more companies want your feedback — and the more they're willing to offer in return.",
  bullets: [
    "Product trials before public launch",
    "Paid feedback programs from OEMs and brands",
    "Exclusive rewards and recognition on your profile",
    "A score you can show transporters as proof of your standing in the community",
  ],
  cardTitle: 'Your Influence Score',
  cardBody: 'What your score unlocks:',
  tiers: [
    { icon: '🥇', label: 'Top Influencer' },
    { icon: '🥈', label: 'Rising Star' },
    { icon: '🚛', label: 'Verified Driver' },
  ],
}

export const driversCta = {
  title: 'Your Next Job is One Application Away',
  sub: "Thousands of drivers from Lucknow, Jaipur, Pune, Chennai, and everywhere in between found steadier work, better pay, and safer conditions through TruckMitr. Your profile takes 5 minutes to set up.",
  label: 'Browse All Jobs →',
  to: '/jobs',
}

import { IMAGES } from '@utils/constants'

export const homeHero = {
  eyebrow: "India's First Driver-Centric Trucking Platform",
  titleLine1: 'You Drive India Forward.',
  titleLine2: "We'll Handle the Rest.",
  sub: 'Across India, drivers struggle to find the right work, and transporters struggle to find the right people. TruckMitr connects both — simply, clearly, and with trust.',
  image: {
    src: IMAGES.homeHeroTruck,
    alt: 'Commercial trucks — fleet vehicles in focus',
  },
  ctas: [
    { id: 'driver', label: "I'm a Driver  →", to: '/drivers', style: 'primary' },
    { id: 'fleet', label: "I'm a Fleet Owner →", to: '/fleet', style: 'glass' },
    { id: 'oem', label: 'OEM & Corporate →', to: '/oem', style: 'ghost' },
  ],
}

export const homeStats = [
  { id: 'drivers', end: 10, suffix: ' Lakh+', label: 'Truck Drivers on the Platform' },
  { id: 'states', end: 28, suffix: '+', label: 'States Covered' },
  { id: 'jobs', end: 50, suffix: ',000+', label: 'Jobs Posted' },
  { id: 'verified', end: 100, suffix: '%', label: 'Profiles Manually Verified' },
]

export const homeStatsTagline = "Behind every number is a driver who deserves better."

export const homePlatform = {
  label: 'WHAT WE DO',
  title: 'One Platform That Actually Works for Everyone',
  sub: 'On India’s roads, things weren’t fair — drivers paid just to find work, and transporters had no reliable way to hire. So we built TruckMitr — a simple, honest way to connect both sides. We’re still learning, but we’re close.',
  cards: [
    {
      id: 'drivers',
      icon: '🧑‍✈️',
      title: 'For Drivers',
      body: 'Across India, find driving jobs right from your phone. See the salary clearly and apply directly to transporters — no confusion. Your experience and verified profile help you stand out.',
      cta: 'Learn More →',
      to: '/drivers',
      iconVariant: 'orange',
    },
    {
      id: 'fleet',
      icon: '🚛',
      title: 'For Fleet Owners & Transporters',
      body: 'On India’s roads, one wrong hire can cost you time and money.\n\nThat’s why every TruckMitr driver is verified — so you choose with clarity and confidence.',
      cta: 'Learn More →',
      to: '/fleet',
      iconVariant: 'green',
    },
    {
      id: 'oem',
      icon: '🤝',
      title: 'For OEMs & Corporates',
      body: 'Across India, most companies don’t hear directly from their drivers. TruckMitr changes that — real feedback, training, and engagement through a trusted network of verified drivers nationwide.',
      cta: 'Learn More →',
      to: '/oem',
      iconVariant: 'orange',
    },
  ],
}

export const homeJobsStrip = {
  label: 'JOBS POSTED THIS WEEK',
  title: 'Open Positions. Real Transporters. Apply Today.',
  sub: 'Every job on TruckMitr is posted by a verified transporter. Salary is listed upfront. No calls from unknown numbers. No fake recruiters.',
  viewAllLabel: 'See All Open Jobs →',
  viewAllTo: '/jobs',
}

export const homeWhy = {
  label: 'BEFORE ANYONE GETS HIRED',
  title: 'Five Checks. Because One Fake Document is One Too Many.',
  sub: "On India’s roads, one wrong driver can mean big losses. It happens more often than people admit. That’s why every TruckMitr driver is carefully verified — to reduce that risk.",
  tiles: [
    {
      id: 'rc',
      icon: '🪪',
      title: 'IDs Check',
      body: "Licence, Aadhaar, or PAN real? We verify every document before you trust them.",
      iconVariant: 'blue',
    },
    {
      id: 'challan',
      icon: '🤳',
      title: 'Real-Time Face Check',
      body: "Is it really them? Live face matched to ID — confirmed before you call.",
      iconVariant: 'purple',
    },
    {
      id: 'court',
      icon: '⚖️',
      title: 'Court Record Check',
      body: "Any pending cases? Criminal history? You'll know before you call them.",
      iconVariant: 'orange',
    },
    {
      id: 'address',
      icon: '🏠',
      title: 'Digital Address Verification',
      body: "Where does this driver actually live? Verified — not just self-reported.",
      iconVariant: 'green',
    },
    {
      id: 'profile',
      icon: '📍',
      title: 'Physical Address Verification',
      body: "Where do they actually live? Field-confirmed — not just self-reported.",
      iconVariant: 'green',
    },
  ],
}

export const homeCommunity = {
  label: 'THE COMMUNITY',
  titleLine1: 'Driver Ki Awaz —',
  titleLine2: 'Because Nobody Was Listening Before',
  body: [
    "Across India, drivers spend days on the road — from Punjab to Telangana — with no real place to share what they go through. Bad roads, sudden route changes, unfair treatment — it all just gets buried in the journey.",
    "<strong><em>Driver Ki Awaz</em></strong> changes that. It’s a space where drivers share real experiences, raise issues, and pass on what they’ve learned over years behind the wheel. Transporters listen. Companies pay attention. It’s not perfect yet — but for the first time, drivers across India finally have a voice that’s heard.",
  ],
  features: [
    { id: 'f1', icon: '🛣️', text: 'Driver Life — Real stories, daily experiences, and insights from the long journeys.' },
    { id: 'f2', icon: '📢', text: 'Govt. Demand — Raising a collective voice for better driver protections and policy changes.' },
    { id: 'f3', icon: '🚧', text: 'Road Issues — Live updates on highway conditions, bad roads, and safety hazards.' },
    { id: 'f4', icon: '👮', text: 'RTO Issues — Sharing experiences and navigating challenges with transport authorities.' },
    { id: 'f5', icon: '🏥', text: 'Welfare Rights — Awareness on health, insurance, and legal rights for drivers.' },
  ],
  cta: { label: 'See What Drivers Are Saying →', href: 'https://play.google.com/store/apps/details?id=com.truckmitr' },
}

export const homeReason = {
  label: 'WHY THIS EXISTS',
  title: 'We Built This Because the Old System Was Failing Everyone',
  body: "Across India, drivers, transporters, and companies all faced broken systems. So we built TruckMitr — with verified profiles, real opportunities, and honest connections.\n\nIt’s not perfect yet, but it’s real — and we’re building it right.",
  cards: [
    {
      id: 'network',
      icon: '🛡️',
      title: 'Verified Network',
      body: "Manual checks on every profile. Licence, identity, experience — confirmed before listing. If something doesn't check out, the profile doesn't go live.",
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'MoRTH-Aligned Training',
      body: "We work within the government's IDTR and RDTC certification framework. Drivers get recognised qualifications. Transporters get trained professionals.",
    },
    {
      id: 'influence',
      icon: '⭐',
      title: 'Driver Influence Score',
      body: "Some drivers are decision-makers when it comes to what vehicles their employer buys next. Our scoring system finds them — useful if you're an OEM trying to reach the right people.",
    },
    {
      id: 'welfare',
      icon: '🏥',
      title: 'Driver Welfare',
      body: "Health camps in 12 states last year. Welfare scheme registrations. Financial literacy workshops. A driver who knows his rights and his options is better for everyone — including the transporter who hires him.",
    }
  ]
}

export const homeTestimonials = {
  label: 'FROM THE PEOPLE WHO USE IT',
  title: 'What They Said After Six Months on the Platform',
  items: [
    {
      id: 't1',
      quote:
        '"11 saal se driving kar raha hoon. Kaam ke liye pehle hamesha kisi ke through hi jana padta tha, aur har baar kuch na kuch dena padta tha. TruckMitr pe pehli baar apply kiya toh honestly doubt tha — laga shayad yahan bhi same hoga. Par, Tuesday ko apply kiya tha, Monday se kaam start ho gaya. Ab 8 mahine se same fleet ke saath kaam kar raha hoon, sab clear hai."',
      initials: 'VY',
      name: 'Vikram Yadav',
      role: 'HMV Driver | Varanasi, Uttar Pradesh',
    },
    {
      id: 't2',
      quote:
        '"I run 22 trucks between Jaipur and Mumbai. Driver turnover was my biggest headache — every 3-4 months someone would leave or turn out to have exaggerated their experience. Since I started using TruckMitr\'s verified profiles, I\'ve hired 6 drivers. All 6 are still with me. The background checks alone saved me from at least two situations that could have gone badly."',
      initials: 'DS',
      name: 'Deepak Sharma',
      role: 'Transport Contractor | Jaipur, Rajasthan',
    },
    {
      id: 't3',
      quote:
        '"We were switching part of our fleet to EVs and needed drivers who\'d actually been trained on electric vehicles — not just people claiming they had. TruckMitr found us five EV-certified drivers within ten days. Eight months in, not one incident. Our insurance provider actually noticed and asked what changed."',
      initials: 'PN',
      name: 'Priya Nair',
      role: 'Fleet Operations Manager | Kochi, Kerala',
    },
  ],
}

export const homeCta = {
  title: "If You Work in Trucking, This Platform Is Built for You",
  sub:
    "Across India, everyone connected to trucks — drivers, transporters, companies — faces the same daily challenges. TruckMitr makes that work a little easier and more honest. Come see it for yourself.",
  primary: { label: 'Browse Open Jobs →', to: '/jobs' },
  secondary: { label: 'Learn About TruckMitr →', to: '/about' },
}

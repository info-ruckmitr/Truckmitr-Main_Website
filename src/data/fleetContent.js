/** Copy aligned with user request — page-fleet */

export const fleetHero = {
  eyebrow: 'For Fleet Owners',
  titleLine1: 'Stop Hiring on Hope.',
  titleAccent: 'Start Hiring on Proof.',
  sub: 'TruckMitr drivers are verified before you see them — licence, RC, background check, everything. Post a job, shortlist real candidates, hire the right one. Straight to the driver, no surprises.',
  primaryCta: { label: 'Post a Job →', to: '/jobs' },
  secondaryCta: { label: 'Browse Drivers', disabled: true },
}

export const fleetBenefitsIntro = {
  label: 'FLEET OWNER BENEFITS',
  title: 'Four problems fleet owners hate. One platform that actually fixes them.',
  sub: 'Fleet owners across Rajasthan, Maharashtra, UP, Punjab — and all over India — are hiring faster, staying compliant, and finally holding on to good drivers. All on TruckMitr.',
}

export const fleetFeatureRows = [
  {
    key: 'smart-hiring',
    label: 'SMART HIRING',
    title: 'Finding a good driver shouldn\'t take weeks of phone calls and blind trust.',
    description: 'On TruckMitr, every profile comes pre-verified — licence class, challan history, court records, years on the road. Filter exactly who you need, message them directly, and hire with actual confidence.\n\nFilter options:',
    checks: [
      'HMV, LMV, tanker, trailer, EV experience',
      'Preferred routes and states',
      'Work history and past employers',
      'Driver Influence Score™',
    ],
    imageKey: 'fleetFeatHiring',
    reverse: false,
  },
  {
    key: 'compliance',
    label: 'COMPLIANCE MADE EASY',
    title: 'Compliance Paperwork Used to Take Days. Now It Doesn\'t.',
    description: 'You know the paperwork — MoRTH, ESIC, Ayushman Bharat, PF. Most fleet owners are behind on at least one. TruckMitr keeps it all digital and alerts you before anything lapses. A Pune fleet owner found out three of his drivers had expired licences only after a routine check. That\'s the kind of thing that shuts down an operation. We built this so it doesn\'t happen to you.\n\nWhat\'s covered:',
    checks: [
      'Digital driver document management',
      'MoRTH training compliance tracking',
      'ESIC and PF enrollment assistance',
      'Automatic licence expiry alerts',
    ],
    imageKey: 'fleetFeatCompliance',
    reverse: true,
  },
  {
    key: 'training',
    label: 'TRAINING & UPSKILLING',
    title: 'Trained Drivers Cost Less to Run. Here\'s How to Get Them.',
    description: 'Most accidents, cargo damage, and vehicle wear trace back to training gaps. Trained drivers have fewer incidents — lower claims, lower repair costs, and they stick around longer.\n\nTruckMitr connects your fleet to MoRTH-aligned programs through IDTR and RDTC centres across India. Running 5 or more trucks? You get bulk enrollment discounts.\n\nWhat\'s available:',
    checks: [
      'MoRTH certification through IDTR/RDTC network',
      'EV readiness training for fleets transitioning to electric',
      'Bulk enrollment rates for fleet operators',
      'Training completion tracking built into your dashboard',
    ],
    imageKey: 'fleetFeatTraining',
    reverse: false,
  },
  {
    key: 'welfare',
    label: 'DRIVER WELFARE',
    title: 'Look After Your Drivers. They\'ll Stay.',
    description: 'The fleet owners with the lowest turnover aren\'t always paying the most — they\'re the ones whose drivers feel looked after.\n\nHealth camps, welfare schemes, financial literacy — it matters to a driver away from his family for weeks. TruckMitr brings these programs to your yard or nearby transport hubs. Low cost to you. Real difference in retention.\n\nWhat we bring to your fleet:',
    checks: [
      'Health camps at your facility or nearby transport hubs',
      'Government welfare scheme enrollment for your drivers',
      'Financial literacy workshops — rights, savings, insurance',
      'Emergency assistance coordination for drivers and families',
    ],
    imageKey: 'fleetFeatWelfare',
    reverse: true,
  },
]

export const fleetStepsSection = {
  label: 'HOW IT WORKS',
  title: 'Hire in 4 Steps. Start Today.',
  steps: [
    {
      num: '1',
      title: 'Register Your Fleet',
      body: 'Create your fleet owner profile. Add your company details. Verify your documents. Takes under 30 minutes, done once.',
    },
    {
      num: '2',
      title: 'Post a Job',
      body: 'List the requirement — route, salary, vehicle type, licence class, experience needed. Goes live immediately. Drivers across India start seeing it.',
    },
    {
      num: '3',
      title: 'Screen Drivers',
      body: 'Review matched profiles. Every candidate is already verified. Check their background, experience, and Driver Influence Score. Shortlist the ones you want to meet.',
    },
    {
      num: '4',
      title: 'Hire & Onboard',
      body: 'Connect, interview, confirm. Digital document collection and compliance tracking are built in — so your paperwork is sorted before day one.',
    },
  ],
}

export const fleetStatsSection = {
  label: 'THE NUMBERS',
  title: 'Why Fleet Owners Across India Choose TruckMitr',
  stats: [
    {
      value: '72hrs',
      title: 'Average time to hire',
      body: 'Average time from job post to verified driver — vs 2–3 weeks the old way',
    },
    {
      value: '100%',
      title: 'Verification',
      body: 'Every candidate manually verified — licence, identity, experience',
    },
    {
      value: '₹0',
      title: 'Hidden Fees',
      body: 'Fast, transparent, and built for how this industry actually works.',
    },
    {
      value: '28+',
      title: 'States Covered',
      body: 'States covered — hire for any route, any region, any fleet size',
    },
  ],
}

export const fleetCta = {
  title: 'Your Next Reliable Driver is Already on TruckMitr',
  sub: 'Fleet owners from Jaipur, Mumbai, Delhi, Bengaluru, and across 28 states have posted jobs, found verified drivers, and built teams they can actually count on. Yours could be next.',
  primary: { label: 'Post Your First Job →', to: '/jobs' },
}

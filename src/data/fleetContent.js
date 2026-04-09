/** Copy aligned with `TruckMitr_Website (1).html` — page-fleet */

export const fleetHero = {
  eyebrow: 'For Fleet Owners',
  titleLine1: 'Hire Verified Drivers.',
  titleAccent: 'Build a Reliable Fleet.',
  sub:
    "Access India's largest pool of verified, skilled truck drivers. Post jobs, screen candidates, and onboard faster — all on one platform.",
  primaryCta: { label: 'Post a Job →', to: '/jobs' },
  secondaryCta: { label: 'Browse Drivers', disabled: true },
}

export const fleetBenefitsIntro = {
  label: 'Fleet Owner Benefits',
  title: 'Hire Smarter. Manage Better.',
  sub:
    'From finding your next driver to managing compliance and training — TruckMitr is the complete platform for Indian fleet operators.',
}

export const fleetFeatureRows = [
  {
    key: 'smart-hiring',
    label: 'Smart Hiring',
    title: 'Find the Right Driver in Hours, Not Weeks',
    description:
      'Search across thousands of verified driver profiles filtered by licence class, experience, preferred routes, certifications, and the Driver Influence Score™. Every profile is manually verified — saving you the cost and risk of bad hires.',
    checks: [
      'Filter by HMV, LMV, tanker, trailer, EV experience',
      'View verified licence details and work history',
      'Check Driver Influence Score™ before making an offer',
      'Direct messaging — no agents or commissions',
    ],
    imageKey: 'fleetFeatHiring',
    reverse: false,
  },
  {
    key: 'compliance',
    label: 'Compliance Made Easy',
    title: 'Stay Compliant. Reduce Risk.',
    description:
      "TruckMitr helps fleet owners navigate India's evolving driver compliance landscape — from MoRTH licensing requirements to ESIC enrollment and Ayushman Bharat registration for your drivers.",
    checks: [
      'Digital driver document management',
      'MoRTH training compliance tracking',
      'ESIC and PF enrollment assistance',
      'Automated licence expiry alerts',
    ],
    imageKey: 'fleetFeatCompliance',
    reverse: true,
  },
  {
    key: 'training',
    label: 'Training & Upskilling',
    title: 'Build a Skilled, Safe Fleet',
    description:
      "Access TruckMitr's entire training portfolio for your drivers — MoRTH-aligned certification, EV readiness programs, defensive driving, and load management courses. Trained drivers mean fewer accidents and lower operating costs.",
    checks: [
      'MoRTH-aligned certification through IDTR/RDTC network',
      'EV readiness training for your transitioning fleet',
      'Bulk enrollment discounts for fleet operators',
      'Training completion tracking and reporting',
    ],
    imageKey: 'fleetFeatTraining',
    reverse: false,
  },
  {
    key: 'welfare',
    label: 'Driver Welfare',
    title: "Invest in Your Drivers' Wellbeing",
    description:
      "Fleet owners who invest in driver welfare see lower attrition, better performance, and stronger loyalty. TruckMitr's welfare programs bring healthcare, financial literacy, and welfare scheme access directly to your drivers.",
    checks: [
      'Health camps at your facility or nearby transport hubs',
      'Government scheme enrollment drives for your driver workforce',
      'Financial literacy workshops for driver financial security',
      'Emergency assistance coordination for drivers and families',
    ],
    imageKey: 'fleetFeatWelfare',
    reverse: true,
  },
]

export const fleetStepsSection = {
  label: 'How It Works',
  title: 'Hire in 4 Simple Steps',
  steps: [
    {
      num: '1',
      title: 'Register Fleet',
      body: 'Create your fleet owner profile. Verify your company documents. Takes under 30 minutes.',
    },
    {
      num: '2',
      title: 'Post Job',
      body: 'List your requirement with salary, route, vehicle type, and experience criteria. Goes live instantly.',
    },
    {
      num: '3',
      title: 'Screen Drivers',
      body: 'Review matched profiles. Check verifications, experience, and Driver Influence Scores. Shortlist the best.',
    },
    {
      num: '4',
      title: 'Hire & Onboard',
      body: 'Connect, interview, and onboard — with digital document collection and compliance tracking built in.',
    },
  ],
}

export const fleetStatsSection = {
  label: 'The Numbers',
  title: 'Why Fleet Owners Choose TruckMitr',
  stats: [
    {
      value: '72hrs',
      title: 'Average Time to Hire',
      body: 'From job post to verified driver offer — versus 2–3 weeks through traditional networks.',
    },
    {
      value: '100%',
      title: 'Verified Candidates',
      body: 'Every driver profile is manually verified — licence, identity, and experience checks.',
    },
    {
      value: '₹0',
      title: 'Agent Commission',
      body: 'No middlemen. No dalals. No commission fees. Direct connections only.',
    },
    {
      value: '28+',
      title: 'States Covered',
      body: 'Hire drivers from across India for any route, any region, any fleet size.',
    },
  ],
}

export const fleetCta = {
  title: 'Ready to Build Your Dream Fleet?',
  sub: 'Join thousands of fleet owners who trust TruckMitr for fast, reliable, verified driver hiring.',
  primary: { label: 'Post Your First Job →', to: '/jobs' },
}

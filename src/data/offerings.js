/** OEM offering rows + plan table rows */
export const oemOfferings = [
  {
    id: '01',
    title: 'Driver Feedback & Product Intelligence',
    tagline: 'Hear from drivers who run your vehicles every day.',
    description:
      'Structured surveys, in-cab interviews, and anonymized telemetry insights help your product teams prioritize durability, comfort, and total cost of ownership.',
    driverValue: 'Voice on load comfort, braking, mileage',
    partnerValue: 'Prioritized roadmap inputs from real routes',
    copyBox:
      'Quarterly insight packs with regional breakdowns (North, West, South, East) and vehicle-class splits.',
    planRows: [
      { key: 'Curriculum', value: 'Survey design + field interviews' },
      { key: 'Network', value: '10,000+ verified driver panel' },
      { key: 'Certification', value: 'MoRTH-aligned data ethics' },
      { key: 'Branding', value: 'Co-branded driver town-halls' },
      { key: 'Scale', value: 'All India, 12 languages' },
      { key: 'Deliverables', value: 'Dashboard + PDF executive summary' },
      { key: 'Pricing', value: 'Enterprise — contact sales' },
    ],
  },
  {
    id: '02',
    title: 'EV Driver Training Program',
    tagline: 'Upskill drivers for electric freight.',
    description:
      'Hands-on modules on battery safety, regenerative braking, charging etiquette, and range planning — aligned with OEM EV roadmaps.',
    driverValue: 'Certified EV-ready badge on TruckMitr',
    partnerValue: 'Higher adoption of your EV SKUs',
    copyBox: 'Includes simulator hours + on-road mentoring with fleet partners.',
    planRows: [
      { key: 'Curriculum', value: 'EV 101 + advanced fault basics' },
      { key: 'Network', value: 'Partner hubs in 8 cities' },
      { key: 'Certification', value: 'Joint certificate with IDTR partners' },
      { key: 'Branding', value: 'Vehicle-specific labs' },
      { key: 'Scale', value: '500 drivers / cohort' },
      { key: 'Deliverables', value: 'LMS + practical checklist' },
      { key: 'Pricing', value: 'Per-seat or fleet bundle' },
    ],
  },
  {
    id: '03',
    title: 'Brand Engagement & Loyalty',
    tagline: 'Reach drivers where decisions happen.',
    description:
      'Sponsored challenges, safety streaks, and festival campaigns that reward responsible driving — with measurable uplift in brand recall.',
    driverValue: 'Rewards, gear, fuel vouchers',
    partnerValue: 'Authentic advocacy in driver communities',
    copyBox: 'Creative studio + regional influencer drivers on long-haul routes.',
    planRows: [
      { key: 'Curriculum', value: 'N/A — campaign playbook' },
      { key: 'Network', value: 'In-app + WhatsApp cohorts' },
      { key: 'Certification', value: 'Brand safety review' },
      { key: 'Branding', value: 'Full-funnel assets' },
      { key: 'Scale', value: 'National + tier-2 focus' },
      { key: 'Deliverables', value: 'Weekly performance report' },
      { key: 'Pricing', value: 'Campaign retainer' },
    ],
  },
  {
    id: '04',
    title: 'Influence Score Analytics',
    tagline: 'Understand which drivers move purchase intent.',
    description:
      'Proprietary scoring blends trip volume, peer referrals, and content engagement to identify high-trust influencers in the long-haul network.',
    driverValue: 'Fair recognition + perks',
    partnerValue: 'Targeted sampling & launch events',
    copyBox: 'API available for CRM handoff (NDA required).',
    planRows: [
      { key: 'Curriculum', value: 'Score methodology whitepaper' },
      { key: 'Network', value: 'Anonymized cohort tiers' },
      { key: 'Certification', value: 'ISO-aligned data handling' },
      { key: 'Branding', value: 'Co-marketing optional' },
      { key: 'Scale', value: '1M+ monthly active signals' },
      { key: 'Deliverables', value: 'Looker / CSV exports' },
      { key: 'Pricing', value: 'Tiered SaaS' },
    ],
  },
  {
    id: '05',
    title: 'CSR & Social Impact Programs',
    tagline: 'Measurable outcomes for communities on the highway.',
    description:
      'Co-design eye camps, addiction awareness, and family health camps with ESIC partners — tracked with before/after metrics.',
    driverValue: 'Free screenings + referrals',
    partnerValue: 'CSR reporting-ready dashboards',
    copyBox: 'On-ground NGO partners in 6 highway clusters.',
    planRows: [
      { key: 'Curriculum', value: 'Impact theory of change' },
      { key: 'Network', value: 'Hubs + mobile vans' },
      { key: 'Certification', value: 'Third-party audit optional' },
      { key: 'Branding', value: 'Joint press + social' },
      { key: 'Scale', value: '10k lives / year target' },
      { key: 'Deliverables', value: 'Quarterly impact PDF' },
      { key: 'Pricing', value: 'Grant + matching models' },
    ],
  },
  {
    id: '06',
    title: 'MoRTH-Aligned Certification Training',
    tagline: 'Compliance-first upskilling at scale.',
    description:
      'Digitized coursework, assessments, and attendance linked to training partner requirements — reducing fleet risk and improving insurance outcomes.',
    driverValue: 'Recognized certificate wallet in DigiLocker',
    partnerValue: 'Audit trail for compliance teams',
    copyBox: 'Integrates with fleet HRIS via secure export.',
    planRows: [
      { key: 'Curriculum', value: 'Defensive driving + load securement' },
      { key: 'Network', value: 'RDTC / IDTR tie-ups' },
      { key: 'Certification', value: 'MoRTH module map' },
      { key: 'Branding', value: 'White-label LMS skin' },
      { key: 'Scale', value: 'Unlimited seats / enterprise' },
      { key: 'Deliverables', value: 'SCORM + attendance API' },
      { key: 'Pricing', value: 'Per driver / year' },
    ],
  },
]

export const ecosystemFlywheel = [
  { n: '01', title: 'Feedback loop', text: 'Product intel informs training modules.' },
  { n: '02', title: 'Training', text: 'Certified drivers boost fleet trust.' },
  { n: '03', title: 'Brand', text: 'Loyalty amplifies reach to new drivers.' },
  { n: '04', title: 'Analytics', text: 'Scores guide who to upskill next.' },
  { n: '05', title: 'CSR', text: 'Health outcomes reduce downtime.' },
  { n: '06', title: 'Compliance', text: 'MoRTH alignment closes the loop.' },
]

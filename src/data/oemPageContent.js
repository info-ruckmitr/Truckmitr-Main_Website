/**
 * OEM / Corporate page — canonical copy from TruckMitr_Website prototype (page-oem).
 */
export const oemPageHero = {
  eyebrow: 'OEM & Corporate Partnerships',
  titleBefore: 'The Trucking Industry Runs on Drivers.',
  titleAccent: 'Partner With Them.',
  sub:
    "Six modular offerings — from real-world R&D intelligence to EV training to CSR execution — all built around direct, verified access to India's 10M+ truck drivers.",
  exploreId: 'oem-offerings',
  primaryLabel: 'Explore Offerings ↓',
  secondaryLabel: 'Talk to Partnerships Team',
}

export const oemWhySection = {
  label: 'The TruckMitr Advantage',
  title: 'Why Driver-Centric Changes Everything',
  sub:
    'OEMs design for fleet owners. Marketers sell through distributors. But the driver — the actual user, influencer, and advocate — has been invisible. Until now.',
  cards: [
    { icon: '🎯', title: 'Direct Access at Scale', body: 'Reach verified, active truck drivers across India — not fleet managers, dealers, or middlemen. Real users, real roads.' },
    { icon: '📊', title: 'Authentic Ground-Level Data', body: 'Real-world product intelligence from drivers who navigate monsoons, mountain passes, and overloaded highways daily.' },
    { icon: '📈', title: 'Measurable Outcomes', body: 'Every program — feedback, training, engagement, CSR — comes with quarterly reports, verified metrics, and dashboards.' },
    { icon: '🏛️', title: 'Government Aligned', body: 'Programs built around MoRTH, PM E-DRIVE, CSR (Sec 135), IDTR/RDTC, and welfare scheme frameworks.' },
    { icon: '📣', title: 'Organic Brand Advocacy', body: 'Trained, engaged drivers become your most credible salesforce. In trucking, driver word-of-mouth is worth millions.' },
    { icon: '🧩', title: 'Modular Partnerships', body: 'Engage with one offering or combine multiple into an integrated program. Standalone or ecosystem-wide — your choice.' },
  ],
}

export const oemEcosystemSection = {
  label: 'The Full Picture',
  title: 'Six Offerings. One Ecosystem.',
  sub:
    'Each offering works standalone — but together they create a flywheel where feedback, training, engagement, influence data, social impact, and certification reinforce each other continuously.',
  cards: [
    { n: '01', title: 'Feedback & Insights', body: 'Ground-level R&D intelligence from the drivers who actually live with your products on Indian highways.' },
    { n: '02', title: 'EV Training', body: "Future-proof India's driver workforce for electric transition — with your brand on every certification." },
    { n: '03', title: 'Brand Engagement', body: 'Direct-to-driver sampling, loyalty, and rewards that bypass middlemen and reach real influencers.' },
    { n: '04', title: 'Influence Score™', body: 'Proprietary metric identifying the 10–20% of drivers who shape 60–80% of fleet purchase decisions.' },
    { n: '05', title: 'CSR & Impact', body: 'Turnkey driver welfare programs with verified, audit-ready impact reports for Section 135 compliance.' },
    { n: '06', title: 'MoRTH Training', body: 'Government-certified driver training through IDTR/RDTC — skilled drivers who advocate your brand.' },
  ],
}

export const oemPageCta = {
  title: "Ready to Reach India's Drivers?",
  sub:
    "Whether you're a truck OEM, tyre brand, lubricant company, insurer, or corporate with a CSR mandate — we have a partnership designed for you.",
  primaryLabel: 'Talk to Partnerships Team →',
  secondaryLabel: 'About TruckMitr →',
  secondaryTo: '/about',
}

export const oemOfferings = [
  {
    id: 'o1',
    num: '1',
    title: 'Driver Feedback & Product Insights',
    tagline: 'Real drivers. Real roads. Real data.',
    tags: [
    { label: 'Truck OEMs', variant: 'o' },
    { label: 'Tyre Brands', variant: 'g' },
    ],
    description: 'Run structured, quarterly feedback programs with real truck drivers. Get direct, ground-level intelligence on cabin comfort, braking performance, fuel economy, tyre wear patterns, and driving experience — segmented by route, terrain, load, and driver experience level. Not dealer opinions. Not fleet-owner proxies. The actual driver.',
    driverBullets: [
    { strong: 'Driver Agency', text: 'Their feedback directly shapes next-generation products they drive.' },
    { strong: 'Professional Recognition', text: 'Structured panels signal driver expertise matters.' },
    { strong: 'Two-Way Learning', text: 'Drivers learn product features; OEMs learn real-world insights.' },
    { text: 'Participation earns recognition, incentives, and community standing.' },
    ],
    partnerBullets: [
    'Unfiltered R&D intelligence segmented by geography, terrain, load, and driver profile.',
    'Early warning system for product issues before warranty claims escalate.',
    'Competitive benchmarking across brands in real operating conditions.',
    'Authentic driver testimonials for marketing and PR use.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'Your Next Product Breakthrough Lives on Indian Highways',
      sub: 'Structured feedback programmes with real drivers. Quarterly R&D reports that move the needle.',
      body: 'Every truck you build spends its life on roads you never designed for. The driver who navigates a loaded 16-wheeler through monsoon-hit NH-44 knows things about your product no test track can reveal. TruckMitr connects your R&D team directly with that driver.',
    },
    planRows: [
    { key: 'Engagement', value: 'Quarterly feedback cycles with rolling driver panels of 200–500 verified drivers per OEM' },
    { key: 'Data Collection', value: 'In-app surveys, structured ride-along observations, photo/video documentation of real-world conditions' },
    { key: 'Reporting', value: 'Quarterly R&D-grade PDF + live dashboard filterable by region, route type, load, driver experience level' },
    { key: 'Incentives', value: 'Recognition badges, monthly rewards, priority program access, public acknowledgment on platform' },
    { key: 'Onboarding', value: '4-week setup: panel design, questionnaire co-creation, pilot run, calibration' },
    { key: 'Deliverables', value: 'Quarterly reports, panel management, segmented analysis, video testimonials, dedicated account management' },
    { key: 'Pricing', value: 'Annual subscription with per-driver-panel pricing; custom enterprise tiers available' },
    ],
  },
  {
    id: 'o2',
    num: '2',
    title: 'EV Training & Transition',
    tagline: 'Powering India\'s drivers into the electric age.',
    tags: [
    { label: 'EV Truck OEMs', variant: 'o' },
    { label: 'Charging Infra', variant: 'g' },
    ],
    description: 'Co-create branded EV readiness modules that prepare drivers for the electric transition. High-voltage safety, regenerative braking, charging infrastructure navigation, and battery management — all structured under the PM E-DRIVE framework for government alignment and potential subsidy eligibility.',
    driverBullets: [
    { text: 'Future-proofs careers — EV-certified drivers earn 15–25% more.' },
    { text: 'Positions drivers as active participants in the EV revolution, not passive recipients.' },
    { text: 'Eliminates range anxiety through charging infrastructure knowledge.' },
    { text: 'Branded certification creates professional identity tied to OEM products.' },
    ],
    partnerBullets: [
    'Pre-trained driver workforce reduces fleet customer onboarding burden dramatically.',
    'Branded certification creates your most credible product salesforce.',
    'PM E-DRIVE alignment enhances CSR reporting and unlocks subsidy potential.',
    'Reduced warranty claims from proper high-voltage and battery training.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'The Electric Future Runs on Trained Drivers',
      sub: 'Co-branded EV readiness modules. High-voltage safety. Charging infra skills. All under PM E-DRIVE.',
      body: 'India\'s commercial EV revolution has a missing piece: the driver. If drivers don\'t understand regenerative braking or fear high-voltage systems — adoption stalls. We bridge that gap with your brand front and centre.',
    },
    planRows: [
    { key: 'Curriculum', value: 'Co-created with OEM tech teams: HV safety, regen braking, charging protocols, battery management, route optimization' },
    { key: 'Delivery', value: 'Blended: 60% in-app digital modules + 40% hands-on at IDTR/RDTC centres or OEM facilities' },
    { key: 'Certification', value: 'OEM-branded digital badges + physical certificates; visible on driver\'s TruckMitr profile' },
    { key: 'PM E-DRIVE', value: 'Curriculum mapped to PM E-DRIVE requirements; documentation for subsidy/incentive applications' },
    { key: 'Scale', value: '1,000–5,000 drivers per OEM per year across tier-1 and tier-2 cities in phase 1' },
    { key: 'Deliverables', value: 'Training modules, HV certification, range workshops, charging route guides, quarterly progress reports' },
    { key: 'Pricing', value: 'Per-driver certification fee + annual platform license for branded module hosting' },
    ],
  },
  {
    id: 'o3',
    num: '3',
    title: 'Brand Engagement & Rewards',
    tagline: 'Reach the real product influencer — the driver.',
    tags: [
    { label: 'Ancillary', variant: 'o' },
    { label: 'Lubricants', variant: 'g' },
    { label: 'Insurance', variant: 'o' },
    ],
    description: 'A direct-to-driver channel for product sampling, loyalty rewards, and engagement campaigns. Put your products in the hands of verified drivers who use them daily and whose word-of-mouth drives fleet purchase decisions. Bypass the dealer chain. Reach the real influencer.',
    driverBullets: [
    { text: 'Drivers receive free product trials, exclusive discounts, and rewards programs.' },
    { text: 'Benefits previously reserved for fleet owners and dealers — now for drivers.' },
    { text: 'Points, badges, and tangible rewards for brand interaction and peer referrals.' },
    { text: 'Insurance access and policy education directly to the people who drive.' },
    ],
    partnerBullets: [
    'Direct-to-user sampling with verified delivery and usage feedback.',
    'Bypass dealer/distributor chain to build grassroots brand preference.',
    'Loyalty data revealing usage patterns, switching triggers, and competitive preferences.',
    'Word-of-mouth amplification — the most trusted channel in Indian trucking.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'Your Brand, in the Hands That Matter Most',
      sub: 'Sampling campaigns. Loyalty rewards. Driver engagement. Reach the real product influencer.',
      body: 'Brand loyalty in Indian trucking is built at dhabas, workshops, and highway rest stops. The driver who tells ten fleet owners your oil runs smoother creates more value than any trade show booth.',
    },
    planRows: [
    { key: 'Campaigns', value: 'Product sampling, loyalty rewards, referral programs, seasonal promotions, educational content, gamification' },
    { key: 'Targeting', value: 'Segment by geography, vehicle type, route, experience, driving behaviour, and brand affinity' },
    { key: 'Distribution', value: 'In-app notifications, physical delivery at dhabas/fuel stations/service centres, on-ground activations' },
    { key: 'Measurement', value: 'Real-time dashboards: reach, engagement, trial confirmation, feedback scores, cost-per-engagement' },
    { key: 'Rewards', value: 'Points-based tiered system (basic/silver/gold); redeemable for fuel, recharges, merchandise' },
    { key: 'Deliverables', value: 'Campaign execution, loyalty program, driver testimonials, co-branded content, performance reports' },
    { key: 'Pricing', value: 'Per-campaign pricing with volume discounts; annual partnership packages for sustained engagement' },
    ],
  },
  {
    id: 'o4',
    num: '4',
    title: 'Driver Influence Score™',
    tagline: 'Target the drivers who actually shape purchase decisions.',
    tags: [
    { label: 'All Partners', variant: 'o' },
    ],
    description: 'A proprietary metric that identifies and quantifies the informal purchase influence of truck drivers. Not all drivers are equal — some are trusted advisors whose opinions directly shape what fleet owners buy. The Driver Influence Score™ finds them and enables precision targeting for maximum engagement ROI.',
    driverBullets: [
    { text: 'First platform to recognise and quantify driver influence professionally.' },
    { text: 'High-score drivers get exclusive early access, premium rewards, and brand partnerships.' },
    { text: 'Transparent scoring — drivers can actively build their score through training and engagement.' },
    { text: 'Creates aspirational career ladder within the platform community.' },
    ],
    partnerBullets: [
    'Target the 10–20% of drivers who influence 60–80% of fleet purchase decisions.',
    'Category-specific scoring: tyre selection vs. truck brand vs. lubricants vs. insurance.',
    'Competitive intelligence on brand-loyal vs. brand-switcher driver segments.',
    'Monthly refresh with trend analysis — see rising and falling influence trajectories.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'Stop Spraying. Start Targeting.',
      sub: 'Our proprietary Driver Influence Score™ identifies who really shapes fleet purchase decisions.',
      body: 'Every fleet owner in India has two or three drivers they trust above all others. When it\'s time to buy trucks or switch engine oil — those opinions carry real weight. We tell you exactly who they are.',
    },
    planRows: [
    { key: 'Methodology', value: 'Multi-factor: platform engagement, peer network centrality, certifications, experience, fleet associations, purchase influence history' },
    { key: 'Segmentation', value: 'Three tiers: Top Influencers (10%), Rising Influencers (20%), General Drivers (70%) — each with differentiated engagement' },
    { key: 'Categories', value: 'Separate scores per purchase category: truck brand, tyre selection, lubricant choice, insurance, ancillary' },
    { key: 'Freshness', value: 'Recalculated monthly using rolling 12-month data; trend lines show rising/falling influence trajectories' },
    { key: 'Privacy', value: 'Fully driver-consented; drivers view own scores, understand methodology, opt-out available' },
    { key: 'Integration', value: 'API integration available for embedding influence data in partner CRM/marketing systems' },
    { key: 'Pricing', value: 'Included for annual partners; standalone access available for targeted campaigns' },
    ],
  },
  {
    id: 'o5',
    num: '5',
    title: 'CSR & Social Impact',
    tagline: 'Measurable impact for India\'s trucking workforce.',
    tags: [
    { label: 'All Corporates', variant: 'g' },
    { label: 'CSR Mandate', variant: 'o' },
    ],
    description: 'A turnkey CSR execution platform focused on truck driver welfare — one of India\'s largest underserved workforce segments. Sponsor health camps, skill training, government scheme registration drives, financial literacy workshops, and family welfare initiatives — with verified, audit-ready quarterly impact reports under Section 135, Companies Act 2013.',
    driverBullets: [
    { text: 'Health camps at locations drivers actually visit — not hospitals they can\'t reach.' },
    { text: 'Ayushman Bharat, PM-SYM, ESIC enrollment — benefits they\'re entitled to but couldn\'t navigate.' },
    { text: 'Financial literacy: earnings management, retirement planning, family protection.' },
    { text: 'Family welfare extending support to driver families — education, emergency assistance.' },
    ],
    partnerBullets: [
    'Turnkey execution with verified beneficiary tracking — zero leakage, zero ghost beneficiaries.',
    'Quarterly reports audit-ready for Section 135 compliance.',
    'ESG reporting alignment with quantified social impact metrics.',
    'Tax benefits under Section 135 with complete documentation.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'CSR That Reaches the Road',
      sub: 'Health camps. Skill training. Scheme registration. Measurable impact with quarterly reports.',
      body: 'India\'s 10M+ truck drivers are among the most underserved workers in the country. Your CSR mandate can change that — every rupee tracked, every beneficiary named, every outcome measured.',
    },
    planRows: [
    { key: 'Design', value: 'Customized CSR calendar aligned with partner focus areas and budget; modular programs run independently or combined' },
    { key: 'Health Camps', value: 'Preventive screenings (BP, diabetes, vision, respiratory) at transport hubs, dhabas, fuel stations; specialist referrals' },
    { key: 'Schemes', value: 'On-ground teams with digital kiosks for Ayushman Bharat, PM-SYM, ESIC, driving licence renewal' },
    { key: 'Measurement', value: 'Named beneficiary tracking, before/after health metrics, scheme registration counts, completion rates' },
    { key: 'Reporting', value: 'Quarterly PDF reports + dashboard; all data audit-ready for Companies Act 2013 Section 135 compliance' },
    { key: 'Deliverables', value: 'Health camps, scheme drives, skill workshops, family welfare, photo/video documentation for communications' },
    { key: 'Pricing', value: 'CSR budget-aligned pricing; minimum annual commitment recommended for sustained impact' },
    ],
  },
  {
    id: 'o6',
    num: '6',
    title: 'MoRTH-Aligned Training',
    tagline: 'Certification that builds brands and saves lives.',
    tags: [
    { label: 'OEMs', variant: 'o' },
    { label: 'IDTR Partners', variant: 'g' },
    ],
    description: 'Co-deliver government-certified driver training through India\'s IDTR and RDTC network — with your brand on every certificate and every digital badge. MoRTH-compliant curricula enhanced with OEM-specific modules. Trained drivers become product-literate brand advocates that fleet owners trust and follow.',
    driverBullets: [
    { text: 'MoRTH certification is a career asset — better wages, premium assignments, compliance advantage.' },
    { text: 'OEM-branded credential creates professional identity linked to trusted products.' },
    { text: 'Skills: defensive driving, vehicle maintenance, load management, road safety.' },
    { text: 'Certified professionals gain enhanced visibility and employability on TruckMitr.' },
    ],
    partnerBullets: [
    'Trained drivers become the most credible, product-literate brand advocates in the fleet.',
    'Government compliance alignment strengthens OEM positioning in tenders and procurement.',
    'Reduced accident rates — better fleet customer outcomes, stronger OEM-fleet relationships.',
    'Institutional presence through co-branded IDTR/RDTC centre relationships.',
    ],
    copyBox: {
      label: 'Website Headline',
      headline: 'Build Your Brand Through Every Certification',
      sub: 'MoRTH-aligned training through IDTR and RDTC. Your brand on every badge.',
      body: 'When a driver completes government-recognized training with your brand on the certificate, they don\'t just drive better — they develop a professional connection no advertisement can replicate. They become your advocates.',
    },
    planRows: [
    { key: 'Curriculum', value: 'MoRTH-compliant base + OEM-specific modules: vehicle features, maintenance, fuel efficiency, safety protocols' },
    { key: 'Network', value: 'Delivered through IDTR and RDTC centres across India; TruckMitr handles recruitment, scheduling, logistics' },
    { key: 'Certification', value: 'Dual: MoRTH-compliance certificate + OEM-branded skill badge; visible on TruckMitr profile, shareable digitally' },
    { key: 'Branding', value: 'OEM branding on all materials, certificates, classroom setup, digital badges; OEM reps at graduation events' },
    { key: 'Scale', value: '500–2,000 drivers per OEM per year in phase 1; scalable through additional IDTR/RDTC centre partnerships' },
    { key: 'Deliverables', value: 'Curriculum, training delivery, certifications, profile enhancement, analytics, post-training follow-up' },
    { key: 'Pricing', value: 'Per-driver training fee + annual curriculum retainer; government subsidy passthrough where applicable' },
    ],
  },
]

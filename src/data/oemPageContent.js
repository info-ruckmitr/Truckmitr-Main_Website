/**
 * OEM Partnerships page — canonical copy
 */

export const oemPageHero = {
  eyebrow: 'OEM & Corporate Partnerships',
  titleBefore: 'The Trucking Industry Runs on Drivers. ',
  titleAccent: 'Partner With Them.',
  sub: "Your vehicles run on Indian highways every day — through monsoons in Kerala, mountain passes in Himachal, overloaded routes in UP and Rajasthan. The drivers handling them know things about your products that no test track ever will. TruckMitr connects you directly to those drivers — verified, active, and across every major state in India.",
  exploreId: 'oem-offerings',
  primaryLabel: 'Explore Offerings →',
  secondaryLabel: 'Talk to Partnerships Team',
}

export const oemWhySection = {
  label: 'THE TRUCKMITIR ADVANTAGE',
  title: "You've Been Designing for Fleet Owners. The Driver Was Always the Real User.",
  sub: "OEMs brief fleet managers. Marketers go through distributors. But the person who actually lives with your vehicle — who knows exactly why the cabin gets too hot by afternoon, why the braking feels different on a loaded descent, why a particular tyre wears faster on NH-44 — that's the driver. And until now, no one had a direct line to him.",
  cards: [
    { icon: '🎯', title: 'Direct Access at Scale', body: 'Reach verified, active truck drivers across India — not their managers, not their dealers. The actual person behind the wheel, in 28+ states.' },
    { icon: '📊', title: 'Real Ground-Level Data', body: "A driver navigating a loaded 16-wheeler through the Ghats or across the Thar Desert has product feedback no lab test produces. That's what you get here." },
    { icon: '📈', title: 'Measurable Outcomes', body: 'Every program — feedback, training, engagement, CSR — comes with quarterly reports, verified metrics, and a live dashboard. Nothing goes untracked.' },
    { icon: '🏛️', title: 'Government Aligned', body: 'Programs structured around MoRTH, PM E-DRIVE, CSR Section 135, IDTR/RDTC — so your investment also qualifies for compliance and subsidy benefits.' },
    { icon: '📣', title: 'Organic Brand Advocacy', body: 'A driver who trusts your brand tells ten fleet owners. That word-of-mouth — at dhabas, transport yards, and rest stops across India — is worth more than any trade show booth.' },
    { icon: '🧩', title: 'Modular Partnerships', body: 'Start with one offering. Add more as you see results. Nothing is locked in. Everything is measurable from day one.' },
  ],
}

export const oemEcosystemSection = {
  label: 'THE FULL PICTURE',
  title: 'Six Offerings. One Ecosystem.',
  sub: 'Each offering works on its own. Together they build something more valuable — a flywheel where driver feedback improves your products, training builds brand loyalty, engagement drives advocacy, and CSR creates goodwill that compounds over time.',
  cards: [
    { n: '01', title: 'Feedback & Insights', body: 'Ground-level R&D intelligence from the drivers who live with your products on Indian highways' },
    { n: '02', title: 'EV Training', body: "Future-proof India's driver workforce for electric — with your brand on every certification" },
    { n: '03', title: 'Brand Engagement', body: 'Direct-to-driver sampling, loyalty rewards, bypassing middlemen to reach real influencers' },
    { n: '04', title: 'Influence Score™', body: 'Identify the 10–20% of drivers who shape 60–80% of fleet purchase decisions' },
    { n: '05', title: 'CSR & Impact', body: 'Turnkey driver welfare programs with verified, audit-ready reports for Section 135' },
    { n: '06', title: 'MoRTH Training', body: 'Government-certified driver training through IDTR/RDTC — skilled drivers who advocate your brand' },
  ],
}

export const oemPageCta = {
  title: "Ready to Reach India's Drivers?",
  sub: "Whether you make trucks, tyres, lubricants, or insurance — or you're a corporate with a CSR mandate and a workforce of millions depending on roads — there's a partnership here that makes sense for you. Come talk to us. No decks, no sales pitch. Just an honest conversation about what's possible.",
  primaryLabel: 'Talk to Partnerships Team →',
  secondaryLabel: 'About TruckMitr →',
  secondaryTo: '/about',
}

export const oemOfferings = [
  {
    id: 'o1',
    num: '01',
    title: 'Driver Feedback & Product Insights',
    tagline: 'Real drivers. Real roads. Real data.',
    tags: [
      { label: 'TRUCK OEMs', variant: 'o' },
      { label: 'TYRE BRANDS', variant: 'g' },
    ],
    description: 'Every truck you build spends its life on roads you never designed for. The driver hauling a full load through monsoon-hit NH-44 knows things about your product that no test track ever will. TruckMitr puts your R&D team directly in touch with that driver — through structured quarterly feedback panels of 200–500 verified drivers per OEM.\n\nNot dealer opinions. Not fleet manager proxies. The actual driver.',
    driverBullets: [
      { text: 'Their feedback shapes the next generation of vehicles they drive' },
      { text: 'They get recognised, rewarded, and treated as experts — not just operators' },
      { text: 'Two-way learning: drivers understand products better, OEMs understand roads better' },
    ],
    partnerBullets: [
      'Ground-level intelligence segmented by geography, terrain, load, and driver profile',
      'Early warning on product issues before warranty claims pile up',
      'Authentic driver testimonials for marketing and PR',
    ],
    copyBox: {
      label: 'Engagement Strategy',
      headline: 'Quarterly feedback cycles',
      sub: 'Rolling driver panels',
      body: 'In-app surveys, structured ride-alongs, and photo/video documentation directly from the driver.',
    },
    planRows: [
      { key: 'Cycle', value: 'Quarterly feedback cycles with rolling driver panels' },
      { key: 'Collection', value: 'In-app surveys, structured ride-alongs, photo/video documentation' },
      { key: 'Reporting', value: 'Quarterly R&D-grade PDF reports filterable by region, route type, load' },
      { key: 'Onboarding', value: '4-week onboarding: panel design, questionnaire co-creation, pilot run' },
    ],
  },
  {
    id: 'o2',
    num: '02',
    title: 'EV Training & Transition',
    tagline: 'Powering India\'s drivers into the electric age.',
    tags: [
      { label: 'EV TRUCK OEMs', variant: 'o' },
      { label: 'CHARGING INFRA', variant: 'g' },
    ],
    description: 'India\'s EV transition has one missing piece — the driver. If drivers don\'t understand regenerative braking or are nervous around high-voltage systems, fleet adoption stalls. We bridge that gap with your brand front and centre. Co-branded EV readiness modules built with your tech team — covering high-voltage safety, regenerative braking, charging infrastructure navigation, and battery management. All under PM E-DRIVE framework for government alignment and potential subsidy eligibility.',
    driverBullets: [
      { text: 'EV-certified drivers earn 15–25% more — real career upside' },
      { text: 'Eliminates range anxiety through practical charging knowledge' },
      { text: 'Branded certification creates professional identity tied to your products' },
    ],
    partnerBullets: [
      'Pre-trained driver workforce dramatically reduces fleet customer onboarding burden',
      'PM E-DRIVE alignment enhances CSR reporting and unlocks subsidy potential',
      'Reduced warranty claims from proper high-voltage and battery handling',
    ],
    copyBox: {
      label: 'Adoption Strategy',
      headline: 'Accelerating Fleet EV Adoption',
      sub: 'Through skilled operators',
      body: 'If drivers don\'t understand regenerative braking or are nervous around high-voltage systems, fleet adoption stalls. We bridge that gap with your brand.',
    },
    planRows: [
      { key: 'Scale', value: '1,000–5,000 drivers per OEM per year across tier-1 and tier-2 cities in phase 1' },
      { key: 'Curriculum', value: 'HV safety, regenerative braking, charging infra, battery handling' },
    ],
  },
  {
    id: 'o3',
    num: '03',
    title: 'Brand Engagement & Rewards',
    tagline: 'Reach the real product influencer — the driver.',
    tags: [
      { label: 'ANCILLARY', variant: 'o' },
      { label: 'LUBRICANTS', variant: 'g' },
      { label: 'INSURANCE', variant: 'o' },
    ],
    description: 'Brand loyalty in Indian trucking is built at dhabas, workshops, and highway rest stops. The driver who recommends your oil to ten fleet owners creates more value than any trade show booth. TruckMitr gives you a direct-to-driver channel — product sampling, loyalty rewards, and engagement campaigns that go straight to the source.',
    driverBullets: [
      { text: 'Free product trials and exclusive discounts before public availability' },
      { text: 'Points redeemable for fuel, recharges, and merchandise' },
      { text: 'Recognition and community standing for brand engagement' },
    ],
    partnerBullets: [
      'Direct-to-user sampling with verified delivery and usage feedback',
      'Loyalty data revealing switching triggers and competitive preferences',
      'Word-of-mouth amplification through the most trusted channel in Indian trucking',
    ],
    copyBox: {
      label: 'Campaign Strategy',
      headline: 'Direct to the Source',
      sub: 'No middlemen. Real engagement.',
      body: 'Reach drivers directly, track usage, and build loyalty right at the dhaba and rest stops across NH highways.',
    },
    planRows: [
      { key: 'Targeting', value: 'Segment by geography, vehicle type, route, experience, and brand affinity' },
      { key: 'Engagement', value: 'Product sampling, loyalty rewards, and usage feedback loops' },
    ],
  },
  {
    id: 'o4',
    num: '04',
    title: 'Driver Influence Score™',
    tagline: 'Target the drivers who actually shape purchase decisions.',
    tags: [
      { label: 'ALL PARTNERS', variant: 'o' },
    ],
    description: 'Every fleet has two or three drivers the owner trusts above all others. When it\'s time to buy a new truck or switch engine oil — those opinions carry real weight. The Driver Influence Score™ finds exactly who those drivers are across India\'s 10M+ driver network.\n\nNot all drivers are equal. Some are trusted advisors whose recommendations directly shape what fleet owners buy. We identify them and give you precision targeting that no other platform can offer.',
    driverBullets: [
      { text: 'First platform to formally recognise and reward driver influence' },
      { text: 'High-score drivers get exclusive early access and premium brand partnerships' },
      { text: 'Transparent scoring — drivers can actively build their score' },
    ],
    partnerBullets: [
      'Target the 10–20% of drivers who influence 60–80% of fleet purchase decisions',
      'Category-specific scoring: tyre vs. truck brand vs. lubricants vs. insurance',
      'Monthly refresh with trend analysis — see rising and falling influence trajectories',
    ],
    copyBox: {
      label: 'Influence Engine',
      headline: 'The Power of the Right Voice',
      sub: 'Filter the leaders from the crowd.',
      body: 'We identify trusted advisors whose recommendations directly shape what fleet owners buy, providing precision targeting that no other platform can offer.',
    },
    planRows: [
      { key: 'Segmentation', value: 'Top Influencers (10%), Rising Stars (20%), General Drivers (70%)' },
      { key: 'Mechanism', value: 'Score built on verification, feedback consistency, and platform activity' },
    ],
  },
  {
    id: 'o5',
    num: '05',
    title: 'CSR & Social Impact',
    tagline: 'Measurable impact for India\'s trucking workforce.',
    tags: [
      { label: 'ALL CORPORATES', variant: 'g' },
      { label: 'CSR MANDATE', variant: 'o' },
    ],
    description: 'India\'s 10M+ truck drivers are among the most underserved workers in the country. Your CSR mandate can change that — every rupee tracked, every beneficiary named, every outcome measured. Health camps at locations drivers actually visit. Welfare schemes they\'re already entitled to but couldn\'t navigate. Financial literacy for families back home in Bihar, Odisha, and Rajasthan.\n\nTurnkey execution. Audit-ready quarterly reports. Full Section 135 compliance documentation.',
    driverBullets: [
      { text: 'Health screenings at transport hubs, dhabas, fuel stations — where drivers already are' },
      { text: 'Ayushman Bharat, PM-SYM, ESIC enrollment — benefits they qualify for' },
      { text: 'Financial literacy: earnings management, retirement planning, family protection' },
    ],
    partnerBullets: [
      'Zero ghost beneficiaries — verified tracking on every rupee spent',
      'Quarterly reports audit-ready for Section 135, Companies Act 2013',
      'ESG reporting with quantified social impact metrics',
      'Tax benefits under Section 135 with complete documentation',
    ],
    copyBox: {
      label: 'Impact Strategy',
      headline: 'Welfare Delivered Locally',
      sub: 'Measurable and deeply impactful.',
      body: 'Execute your CSR securely with health camps, welfare schemes, and financial literacy workshops directly built for underserved truck drivers.',
    },
    planRows: [
      { key: 'Health Camps', value: 'On-ground medical checkups at high traffic transport hubs' },
      { key: 'Documentation', value: 'Fully auditable quarterly beneficiary reports for Section 135 compliance' },
    ],
  },
  {
    id: 'o6',
    num: '06',
    title: 'MoRTH-Aligned Training',
    tagline: 'Certification that builds brands and saves lives.',
    tags: [
      { label: 'OEMs', variant: 'o' },
      { label: 'IDTR PARTNERS', variant: 'g' },
    ],
    description: 'When a driver completes government-recognised training with your brand on the certificate, something changes. They don\'t just drive better — they develop a professional connection to your products that no advertisement can replicate. They become your advocates.\n\nCo-deliver MoRTH-compliant driver training through India\'s IDTR and RDTC network — with your brand on every certificate and every digital badge. Curriculum built with your tech team: vehicle features, maintenance, fuel efficiency, safety protocols.',
    driverBullets: [
      { text: 'MoRTH certification is a career asset — better wages, premium assignments' },
      { text: 'OEM-branded credential creates professional identity tied to trusted products' },
      { text: 'Certified professionals get enhanced visibility on TruckMitr profile' },
    ],
    partnerBullets: [
      'Trained drivers become the most credible, product-literate brand advocates in the fleet',
      'Government compliance alignment strengthens OEM positioning in tenders',
      'Reduced accident rates — better fleet customer outcomes, stronger OEM-fleet relationships',
    ],
    copyBox: {
      label: 'Upskilling Strategy',
      headline: 'Government Recognised Training',
      sub: 'Your brand. Better skills. Safer roads.',
      body: 'Co-deliver MoRTH-compliant driver training through India\'s IDTR and RDTC network, enhancing driver professional identity and brand loyalty.',
    },
    planRows: [
      { key: 'Scale', value: '500–2,000 drivers per OEM per year in phase 1; scalable' },
      { key: 'Curriculum', value: 'MoRTH-compliant base + OEM-specific modules' },
    ],
  },
]

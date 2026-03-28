export type Scheme = {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  icon: string;
  tag?: string;
  highlight?: boolean;
};

export const schemes: Scheme[] = [
  {
    id: 's1',
    name: 'PM-JAY',
    description: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana. Cashless healthcare for hospitalizations up to ₹5 Lakh.',
    benefits: ['Pre-existing conditions covered', 'Over 20,000 empaneled hospitals'],
    icon: 'medical_services',
    tag: 'Active Now',
  },
  {
    id: 's2',
    name: 'e-Shram Portal',
    description: 'The national database for unorganized workers. A gateway to all social security schemes for truck operators and helpers.',
    benefits: ['Registration is FREE', 'Access all social security schemes'],
    icon: 'badge',
    highlight: true,
    tag: 'Primary Registry',
  },
  {
    id: 's3',
    name: 'PMSBY',
    description: 'Pradhan Mantri Suraksha Bima Yojana. Accidental insurance of ₹2 Lakh for a premium of just ₹20/year.',
    benefits: ['Low Annual Cost', 'Affordable protection for road safety'],
    icon: 'security',
  },
  {
    id: 's4',
    name: 'PM-SYM Pension Scheme',
    description: 'Pradhan Mantri Shram Yogi Maandhan. Assured monthly pension of ₹3,000 after attaining 60 years of age.',
    benefits: ['Age Limit: 18-40 Years', 'Benefit: ₹36,000/Year'],
    icon: 'elderly',
    tag: 'Old Age Security',
  },
];

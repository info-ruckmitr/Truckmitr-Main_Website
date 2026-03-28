export type Job = {
  id: string;
  title: string;
  company: string;
  experience: string;
  routeFrom: string;
  routeTo: string;
  routeType: string;
  salary: number;
  salaryNote: string;
  tags: string[];
  icon: string;
  verified: boolean;
};

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Multi-Axle Trailer Captain',
    company: 'VRL Logistics Ltd.',
    experience: '5+ Years',
    routeFrom: 'Mumbai',
    routeTo: 'Delhi',
    routeType: 'Express Corridor',
    salary: 55000,
    salaryNote: '+ Maintenance Bonus',
    tags: ['Heavy Duty', 'National Permit'],
    icon: 'local_shipping',
    verified: true,
  },
  {
    id: 'j2',
    title: 'Cold Chain Specialist',
    company: 'Snowman Logistics',
    experience: '2+ Years',
    routeFrom: 'Pune',
    routeTo: 'Bangalore',
    routeType: 'Fixed State Route',
    salary: 38000,
    salaryNote: 'Health Insurance Incl.',
    tags: ['Refrigerated', 'Regional'],
    icon: 'rv_hookup',
    verified: true,
  },
  {
    id: 'j3',
    title: 'Hazmat Tanker Operator',
    company: 'Reliance Petroleum',
    experience: '8+ Years',
    routeFrom: 'Jamnagar',
    routeTo: 'Mundra',
    routeType: 'Industrial Loop',
    salary: 72000,
    salaryNote: 'Safety Incentives',
    tags: ['Hazardous', 'Specialist'],
    icon: 'fire_truck',
    verified: true,
  },
];

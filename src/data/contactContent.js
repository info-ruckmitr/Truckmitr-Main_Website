/**
 * Contact Us page content
 */

export const contactHero = {
  eyebrow: 'Contact Us',
  title: 'Get in touch with the TruckMitr team',
  lead: 'Email, call, or complete the form to learn how TruckMitr can help you or your business.',
  formTitle: 'Get in Touch',
  formSubtitle: 'You can reach us anytime',
  contactCards: [
    {
      id: 'toll-free',
      label: 'Toll-Free Number',
      value: '1800-102-4558',
      type: 'tel',
    },
    {
      id: 'email',
      label: 'Official Email ID',
      value: 'contact@truckmitr.com',
      type: 'email',
    },
    {
      id: 'head-office',
      label: 'Head Office',
      value: 'Suite No- G05, Plot No - C-104, Sector- 65, Noida, 201301',
      type: 'text',
    },
    {
      id: 'reg-office',
      label: 'Registered Office',
      value: 'B3- 0102, Sector-10, Shree Vardhman Gardenia, Sonipat - 131001, Haryana',
      type: 'text',
    },
  ],
  channels: [
    {
      title: 'Customer Support',
      desc: 'Our support team is available around the clock to address any concerns or queries you may have.',
    },
    {
      title: 'Feedback and Suggestions',
      desc: 'We value your feedback and are continuously working to improve TruckMitr. Your input is crucial.',
    },
    {
      title: 'Media Inquiries',
      desc: 'For media-related questions or press inquiries, please contact us at media@truckmitr.com.',
    },
  ],
}

export const contactLocation = {
  eyebrow: 'Our Location',
  title: 'Connecting Near and Far',
  headquarters: {
    name: 'TruckMitr Inc.',
    address: 'Suite No- G05, Plot No - C-104, Sector- 65, Noida, 201301',
    link: 'https://goo.gl/maps/xyz',
  },
}

export const contactFaq = {
  eyebrow: 'FAQ',
  title: 'Do you have any questions for us?',
  lead: 'If there is a question you want to ask, we will answer all your questions.',
  questions: [
    {
      id: 'q1',
      question: 'What makes TruckMitr different from other platforms?',
      answer: 'TruckMitr is built specifically for the Indian trucking ecosystem, focusing on driver welfare, verified profiles, and seamless connections between drivers, fleet owners, and unions.',
    },
    {
      id: 'q2',
      question: 'How secure is my data on TruckMitr?',
      answer: 'We use industry-standard encryption and secure cloud infrastructure to ensure that your personal and business data is always protected.',
    },
    {
      id: 'q3',
      question: 'Can I personalize my TruckMitr experience?',
      answer: 'Yes, our platform offers tailored dashboards for drivers, fleet owners, and unions, allowing you to focus on the features that matter most to you.',
    },
    {
      id: 'q4',
      question: 'What group features does TruckMitr offer for unions?',
      answer: 'Unions get dedicated pages, member management tools, and the ability to advocate for driver welfare with verified data and collective strength.',
    },
  ],
}

export const contactCta = {
  title: 'Ready to experience the speed and simplicity of TruckMitr?',
  primaryCta: { label: 'Get Started', to: '/register' },
  secondaryCta: { label: 'Learn more', to: '/about' },
}

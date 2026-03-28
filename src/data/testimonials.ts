export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quoteEn: string;
  quoteHi: string;
  image: string;
  tag?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Kumar Singh',
    role: 'PM-JAY Impact',
    quoteEn: 'TruckMitr helped me get medical insurance via PM-JAY. When my daughter needed surgery, I didn\'t have to worry about ₹2,00,000. It was a blessing.',
    quoteHi: 'ट्रकमित्र ने मुझे PM-JAY के माध्यम से चिकित्सा बीमा प्राप्त करने में मदद की। जब मेरी बेटी को सर्जरी की आवश्यकता थी, तो मुझे पैसों की चिंता नहीं करनी पड़ी।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACc7RCXIlowlBh3kTJ8-Smj_GDR2d4ykuoAED4orh-e7PNVE_eoNpWemDsfTgbiuj4APt4f1R6Z_vhnq0pkwtGEAhWmIxPbAOtaqxq8nKhxRKl5YGqUzOXuQqVD0J2TnZmyPClqKTVqisvPV6_qg92B2G2DyQv4KmQQL9LeCH1cBHY7A2WQJ84h0YSm7XHw4LoUeQRN6hxMrlNYGNgc8lrF4FUYlGck_knoglpKVuYyj9Z7ByEewL5WdCAKudCjg-VEDhdVq2jiHDu',
    tag: 'PM-JAY Impact',
  },
  {
    id: 't2',
    name: 'Amit Yadav',
    role: 'Lucknow Cluster',
    quoteEn: 'From an owner-operator of one truck to managing a fleet of four. The load consistency here changed my life.',
    quoteHi: 'एक ट्रक से अब चार ट्रकों का मालिक हूँ। यहाँ काम की निरंतरता ने मेरा जीवन बदल दिया।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm1Zm1REzahbA3X__yJZCiaKAK4nw-IzOX0cdnSjtcUwhjwjTMIMD0mJX5tNGt7Rssn-yO3b7nDc2xZw6hqYxpOue8Ews3BJVFcxwiKf-VkqngO7HQCc7BweRXBPvgEtuerkili6xz7Wge998hNz-5uy8cNYljA0CAxZ7wbUS_9yEvzmR_irA0yXUPXOLH361clpkVMnxVwJBTPtsEw0jb_biQxsiTVXUbjtFQxebQNQh0GBhtVT35FJ7Z3nYSvM-x2u-2UZm97yku',
  },
  {
    id: 't3',
    name: 'Harpreet Singh',
    role: 'Long-Haul Specialist',
    quoteEn: 'Safety is everything. The driver rest-stops and the 24/7 helpline make me feel like part of a family, not just a contractor.',
    quoteHi: 'सुरक्षा ही सब कुछ है। यहाँ के हेल्पलाइन और रेस्ट-स्टॉप मुझे परिवार जैसा महसूस कराते हैं।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD95CbkcmtxwY1s8Yzi-dSkq6omlHRUY9rXpUWPXPdRKiXquo9nzu1DIU7DA0tsZajEyUIyu4RiHffRc4NRpzHWyeAKmxonBWfgzyv2R30nWGEEXgqDHSwGMPbJpsBNdmyO8vtCZSnHK6qBanVW3eJIV1iEz0hjy4hCD3gqZ9ME62-4oAAaBPGF-wHG9VMRtTcHniYnapbq57QnKUjfXXCNa4MCVOpzc4SYKVpdFabTDpcOuBCcadvJ1MD9UFrLBIo8qLZMrWivYaJ1',
  },
  {
    id: 't4',
    name: 'Meena Devi',
    role: 'Asset Financing',
    quoteEn: 'I broke barriers in a male-dominated field. TruckMitr supported my loan application when others said no. Today, I am an independent logistics partner.',
    quoteHi: 'मैंने एक पुरुष-प्रधान क्षेत्र में बाधाओं को तोड़ा। ट्रकमित्र ने मेरे ऋण आवेदन का समर्थन किया जब दूसरों ने मना कर दिया था।',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtaCFoxx6sAvg-2rxZ8USWnu8x8JKwnjS813Sxw409kb6iH09l3L4bGV7k3DYCziJqhndubAf516mlHXphfrqthmz5mpZ7Llc5zsvxhyR8CWli_IHm4QIThrenck6uCJ_J1jQIlG6HPrF_DqJ8tQYWbKrD6-9aCV0EMh8lwZoSWehj_GSQMsidYKC65GTbwqiKNudKL0ubp2Od-Z8b2KpP3JnN11hv7EZhqaqK8kQHXNqKDtOAL0o7OTbt8z4zW7z-c3MhGtTE1Pbl',
    tag: 'Asset Financing',
  },
];

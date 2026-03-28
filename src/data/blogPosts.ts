export type BlogPost = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  description: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Shift to Asset-Light Fleet Management',
    category: 'Logistics Strategy',
    readTime: '5 min read',
    description: 'An exploration of how leading fleets are transitioning to asset-light models for better capital efficiency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChVcrM7OUipE8cZeAc8gilRVipq91SpWWdPZ2To1cYfUTBQiGB_8Ge2wXsFg8W5TmQluhGKPDrJH7rZTnBjjwgFSI2Cy3VMxnYQu-9BL829xLs5DXuToQJRu13pzKw7GexAi-arsd-sRKWUKecertgiQRpSSprjQbaw5V5Yn-h-jhsEPsW3hM5GP5sicgwTzJ5NYZsnnzd2b8kgMiOOQyCCp1GlVPS9UOU9DOfe50L3j21oiZUcdJ9_ZZi2OeVXuCjWk1UaRLhPSk7',
  },
  {
    id: 'b2',
    title: 'Dignity as a Driver Retention Metric',
    category: 'Human Capital',
    readTime: '8 min read',
    description: 'How treating drivers with dignity measurably improves fleet retention rates.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnx8lC7Z3Z-9CWdo0KxsjDi1SnLvIFn3TbQ8pD7WxTQrT2jOLLCriBaZYFAFhFhXHYUDnzYxEVn2_ESSEz27kJX79E5vzCfi1U_Zi-PNMMtFK_eTLVpHvo4hksoFTS2LTChcYolHEyd5BV_FWzfU5L7MMTgEnHHVdqUxP_GzaNOYNIvmZG_D_lO9DGQsSnKXIIDvI3j0r99TMC_TVDu8SO8ek2xSgkygHgOSNABnDzC1ggEOKrvms2m8lSoTlE22-zxz31NRVmuBgo',
  },
  {
    id: 'b3',
    title: 'Predicting Attrition with Neural Networks',
    category: 'Technology',
    readTime: '12 min read',
    description: 'Applying deep learning to fleet data for predicting driver attrition before it happens.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBtXSGj_bDSoB9qHLX6ZA90MwnnAf5zIB-KTs4DnqLcyyk0kwupx_8DZK6jHhzoJtEarB7MbKtfZffZ8_zNXdRoN1xH1yVAnpFWP4VjFKVmPvNByklVuKaop8fosxQgBiucirR8ilClv5s4-2ZZ3cwo0qXy9DI0q9rJk1lQIYX3HcT7wjC-zjVKs-xSF18YqzRr-4U96Y1XnEB-l2fLtmgwae35clbBF95Th3q7Sw2CqZemnjPFYe9EWT-EOIMZv0CoZVpjXPnqiC2',
  },
];

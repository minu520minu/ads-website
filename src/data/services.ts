import { 
  Target, 
  Search, 
  Users, 
  Globe 
} from 'lucide-react';
import { Service, Package, HeroSlide } from '../types';

export const GENERAL_SERVICES: Service[] = [
  {
    id: 'paid',
    title: 'Paid Media',
    tagline: 'Performance advertising that actually performs.',
    description: 'We manage paid media across every major platform—always senior-level, never outsourced. Our focus is profitable customer acquisition, not impression counts.',
    icon: Target,
    items: [
      { name: 'Google Ads', desc: 'Search, Shopping, Performance Max & YouTube' },
      { name: 'Meta Ads', desc: 'Facebook & Instagram — prospecting and retargeting' },
      { name: 'Amazon Ads', desc: 'Sponsored Products, Brands & Display' },
      { name: 'TikTok Ads', desc: 'In-feed, TopView & Spark Ads' },
      { name: 'Pinterest Ads', desc: 'Shopping, Idea Pins & Collections' }
    ],
    highlights: [
      'Full-funnel strategy from awareness to conversion',
      'Creative testing and iteration built into every campaign',
      'Comprehensive reporting with revenue attribution, not just clicks'
    ]
  },
  {
    id: 'seo',
    title: 'SEO',
    tagline: 'Organic growth that compounds over time.',
    description: 'Search engine optimization that goes beyond keywords—we build the technical foundation and content authority that earns durable rankings.',
    icon: Search,
    badge: 'FREE SEO REPORT',
    items: [
      { name: 'Technical SEO', desc: 'Site architecture & schema' },
      { name: 'Content Strategy', desc: 'Keyword & editorial planning' },
      { name: 'Link Building', desc: 'Authority-building campaigns' },
      { name: 'Local SEO', desc: 'Google Business Profile & Maps' }
    ],
    highlights: ['90-day roadmap', 'Transparent reporting', 'Bilingual SEO']
  },
  {
    id: 'influencer',
    title: 'Influencer Marketing',
    tagline: 'Authentic voices that drive real purchases.',
    description: 'We connect brands with the right creators—from mega-influencers to niche micro-KOLs—and manage every step from discovery to ROI.',
    icon: Users,
    items: [
      { name: 'Creator Discovery', desc: 'Vetted global network' },
      { name: 'Campaign Mgmt', desc: 'Briefs & contract handling' },
      { name: 'Chinese KOLs', desc: 'WeChat, Rednote & Douyin' },
      { name: 'UGC Strategy', desc: 'Content licensing for ads' }
    ],
    highlights: ['Niche community access', 'Conversion tracking', 'Cultural resonance']
  },
  {
    id: 'chinese',
    title: 'Chinese Consumer Marketing',
    tagline: 'The market your competitors can\'t reach.',
    description: 'We help brands reach and convert the Chinese community. While your competitors overlook 50 million Chinese consumers worldwide, you can be the business they recommend to everyone they know.',
    icon: Globe,
    badge: 'FREE MARKET REPORT',
    items: [
      { name: 'WeChat Marketing', desc: 'Official accounts & Mini-programs' },
      { name: 'Rednote', desc: 'KOL seeding & content creation' },
      { name: 'Douyin Marketing', desc: 'Short-form social commerce' },
      { name: 'Chinese-Targeted Paid Ads', desc: 'Laser-targeted bilingual creative' },
      { name: 'Bilingual Copy', desc: 'Localization, not translation' }
    ],
    highlights: [
      'RedNote content creation built around what actually drives Chinese consumers',
      'KOL campaigns that get you discovered by Chinese customers and tourists in your city',
      'Full platform setup and verification handled for you, including WeChat Official Account',
      'Native cultural fluency so your content feels like a local recommendation, not a foreign brand',
      'Precision targeting to reach high-spending Chinese consumers locally and globally'
    ]
  }
];

export const PACKAGES: Package[] = [
  {
    name: 'Reach',
    badge: 'Starter',
    tagline: 'Get visible in the Chinese community for the first time.',
    features: [
      'Chinese Consumer Market Audit',
      'Platform account setup & verification',
      '4 bilingual posts per month',
      'Community management on 1 platform (comments & DMs)',
      'Monthly performance report'
    ],
    ideal: 'Ideal for local shops, restaurants & service businesses'
  },
  {
    name: 'Grow',
    badge: 'Most Popular',
    featured: true,
    tagline: 'Build presence and drive traffic with paid ads.',
    features: [
      'Everything in the Reach plan, plus:',
      '1 social platform fully managed',
      '4 bilingual posts per month',
      'Paid ads management on 1 platform',
      'Active community management',
      'Seasonal campaign planning'
    ],
    ideal: 'Ideal for retailers, real estate & e-commerce brands'
  },
  {
    name: 'Scale',
    badge: 'Full Service',
    tagline: 'Dominate every channel your target customer uses.',
    features: [
      'Everything in the Grow plan, plus:',
      'Bilingual Copywriting & Localization',
      '2 KOL campaigns per month',
      'Curated creatives for Chinese audience',
      '4 bilingual posts per month',
      'Paid ads with full management and optimization'
    ],
    ideal: 'Ideal for established brands serious about Chinese market growth'
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Market Momentum'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1739950839930-ef45c078f316?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Precision Growth'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1556764900-fa065610b0e4?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'High-End Execution'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1571168136613-46401b03904e?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Strategic Vision'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1776802792422-6f436418ec56?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Creative Excellence'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1739980155900-36562bcb7857?q=100&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Global Impact'
  }
];

export const CLIENT_LOGOS = [
  { name: 'Exploding Kittens' },
  { name: 'Her Fantasy Box' },
  { name: 'Koodo' },
  { name: 'Nonna Lia' },
  { name: 'The Fidget Game' },
  { name: 'Warren London' },
  { name: 'Hero Cosmetics' },
  { name: 'Clean Cubes' },
  { name: 'Simpletics' },
  { name: 'Cangshan' },
  { name: 'New Star Foodservice' },
  { name: 'AKON Sushi' },
  { name: 'UFC' },
  { name: 'NY Loft' },
  { name: 'Make Time Wellness' },
  { name: 'Alta Medical' },
  { name: 'tiny circuits' },
];

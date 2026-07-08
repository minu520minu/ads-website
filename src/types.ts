import { LucideIcon } from 'lucide-react';

export interface Article {
  id: string;
  category: string;
  title: string;
  desc: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Project {
  id: string;
  client: string;
  title: string;
  category: string;
  result: string;
  tags: string[];
  bg: string;
  accent: string;
  image?: string;
  challenge?: string;
  solution?: string;
  resultsNarrative?: string;
}

export interface ServiceItem {
  name: string;
  desc: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any; // Lucide icon component
  items: ServiceItem[];
  highlights: string[];
  badge?: string;
}

export interface Package {
  name: string;
  badge: string;
  tagline: string;
  features: string[];
  ideal: string;
  featured?: boolean;
}

export interface HeroSlide {
  type: string;
  url: string;
  label: string;
}

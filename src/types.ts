export interface Service {
  id: string;
  title: string;
  icon: string; // lucide icon identifier
  description: string;
  tag: string;
  benefits: string[];
  priceEst: string;
  timeEst: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  results: string[];
  metrics: string;
  clientName: string;
  tag: string;
  technologies: string[];
  liveUrl: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  badge?: string;
  isPopular?: boolean;
  deliveryTime: string;
  revisions: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  company: string;
  date: string;
}

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

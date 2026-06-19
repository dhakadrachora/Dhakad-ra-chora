import { Service, Project, PricingPackage, Testimonial } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-design",
    title: "Website Design & Development",
    icon: "Layout",
    description: "Futuristic, ultra-fast, and responsive websites. Specializing in high-conversion landing pages, customized Blogs (Blogger/WordPress), and agency websites.",
    tag: "High Conversion",
    benefits: [
      "Custom UI/UX with glassmorphism style",
      "Mobile-first responsive optimization",
      "PageSpeed scores exceeding 95+",
      "Social media & messaging integrations"
    ],
    priceEst: "from $99 / ₹7,999",
    timeEst: "3-5 Days"
  },
  {
    id: "seo-optimization",
    title: "Google SEO Optimization",
    icon: "SearchCode",
    description: "Rank #1 on Google search results. Technical audits, high-intent keyword strategies, and AdSense optimized structures that generate organic leads 24/7.",
    tag: "Organic Growth",
    benefits: [
      "Deep keyword & competitor research",
      "On-page schema markup deployment",
      "Speed optimization for Google Web Vitals",
      "Google Search Console & Analytics setups"
    ],
    priceEst: "from $149 / ₹11,999",
    timeEst: "Weekly/Monthly"
  },
  {
    id: "yt-thumbnails",
    title: "High-CTR YouTube Thumbnails",
    icon: "Youtube",
    description: "Psychology-driven eye-catching thumbnail designs with neon elements, 3D character integration, and readable bold typography that commands clicks.",
    tag: "View Multiplier",
    benefits: [
      "3D depth styling & custom compositions",
      "Dynamic typography and high contrast ratios",
      "A/B-tested formats for maximum clicks",
      "Ultra-high resolution 4K output"
    ],
    priceEst: "from $15 / ₹999",
    timeEst: "24 Hours"
  },
  {
    id: "blog-writing",
    title: "AdSense-Friendly Blog Writing",
    icon: "FileText",
    description: "Engaging, high-quality, and completely plagiarism-free content. Structured with search intent and rich keywords to rank easily on search engines.",
    tag: "SEO-Optimized",
    benefits: [
      "100% human-written and copy-ready AI-free",
      "Seamless keyword cluster density integration",
      "Optimized headings (H1-H4) & subheadings",
      "Formatting optimized for AdSense approval"
    ],
    priceEst: "from $20 / ₹1,499",
    timeEst: "1-2 Days"
  },
  {
    id: "landing-pages",
    title: "Conversion-Focused Landing Pages",
    icon: "Zap",
    description: "Clean single-page flows engineered to convert passive visitors into paying customers. Ideal for digital courses, local services, and product sales.",
    tag: "Sales Engine",
    benefits: [
      "Psychology-optimized hook zones",
      "Aesthetic glassmorphism and motion highlights",
      "Responsive interactive contact/lead forms",
      "High trust layouts with star feedback"
    ],
    priceEst: "from $79 / ₹5,999",
    timeEst: "2-3 Days"
  },
  {
    id: "digital-marketing",
    title: "Social Media Growth & Marketing",
    icon: "TrendingUp",
    description: "Transform your social channels into dynamic marketing machines. Premium templates, branding assets, post schedules, and targeted marketing plans.",
    tag: "Brand Authority",
    benefits: [
      "Custom visual brand kit & palette",
      "Viral carousel & hooks generation",
      "Growth hacks utilizing direct DM workflows",
      "Lead scoring and retargeting blueprints"
    ],
    priceEst: "from $199 / ₹15,999",
    timeEst: "Monthly Growth"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "SaaS Tech Landing Page Redesign",
    category: "Web Design",
    description: "Upgraded a cluttered, slow HTML site into a high-octane minimalist cyber-style landing page with glowing micro-interactions.",
    beforeImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Core conversion rate multiplied by 3.5x (1.8% to 6.3%)",
      "Page load time slashed from 4.8s to 0.7s (LCP score A)",
      "Interactive 3D-card elements increased scroll-depth by 40%"
    ],
    metrics: "3.5x Conversions",
    clientName: "CloudPulse Technologies",
    tag: "Web Design & Speed"
  },
  {
    id: "proj-2",
    title: "Organic Blog Scale to 35K Monthly Clicks",
    category: "SEO Optimization",
    description: "Planned keyword architecture and content silos for a fresh blogging domain in the tech sector, implementing local SEO schema structures.",
    beforeImg: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Scaled page rankings for 18 core keywords into Google's top 3",
      "Organic clicks skyrocketed from 50 to 35,400 monthly readers",
      "Achieved AdSense approval within 14 days of publishing content"
    ],
    metrics: "35K+ M-Clicks",
    clientName: "BloggerRank Hub",
    tag: "SEO Growth"
  },
  {
    id: "proj-3",
    title: "Tech YouTuber Thumbnail & CTR Uplift",
    category: "Thumbnail Design",
    description: "Crafted high-impact, custom-shadowed neon thumbnails with custom 3D element rendering to drive action-oriented click metrics.",
    beforeImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Click-through rate (CTR) increased from 2.4% average to 11.2%",
      "Average views per episode boosted by 420,000 inside 30 days",
      "Enhanced custom branding recognizable in mobile feed rows"
    ],
    metrics: "11.2% CTR Boost",
    clientName: "Apex Gaming & Tech",
    tag: "Graphic Design"
  },
  {
    id: "proj-4",
    title: "Modern Portfolio with Direct Forms",
    category: "Digital Marketing",
    description: "Built and conceptualized a premium single-page visual hub for an independent professional, using glassmorphic tables and social trust boards.",
    beforeImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    results: [
      "Drove 140+ hot qualified inquiries in the first fortnight",
      "Integrated custom conversion-oriented brief capture system",
      "Reduced cost-per-lead (CPL) by 56% compared to standard channels"
    ],
    metrics: "140+ Leads Fast",
    clientName: "Siddharth J. (Consulting)",
    tag: "Full funnels"
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "pack-basic",
    name: "Starter Launch",
    price: "$99",
    description: "Perfect for beginners, bloggers, and local businesses wanting to establish a high-quality modern visual presence.",
    features: [
      "Single-page futuristic landing page",
      "Mobile-responsive glassmorphic design",
      "Modern animations & scroll glows",
      "Basic On-Page SEO setup",
      "Responsive lead capture contact form",
      "Standard support (72-hour turnaround)"
    ],
    badge: "Most Affordable",
    deliveryTime: "3 Days",
    revisions: "3 Revisions",
    ctaText: "Get Started Now"
  },
  {
    id: "pack-std",
    name: "Growth Engine",
    price: "$249",
    description: "The gold standard for freelancers, small brands, and content creators ready to drive serious organic growth and conversions.",
    features: [
      "Multi-Page Premium Website (3-5 pages)",
      "High-Conversion Copywriting strategy",
      "Advanced Google On-Page & Technical SEO",
      "Interactive Before/After showcases",
      "Instant social and custom floating call-to-actions",
      "1 Custom Thumbnail/social banner pack",
      "Priority Email & Slack Support (24-hour)"
    ],
    isPopular: true,
    badge: "Best Value",
    deliveryTime: "5 Days",
    revisions: "Unlimited Revisions",
    ctaText: "Order Growth Package"
  },
  {
    id: "pack-prem",
    name: "Dhakad Authority",
    price: "$499",
    description: "The ultimate solution for high-end professional agencies, brands, and creators wanting custom 3D web visuals and dominant marketing scales.",
    features: [
      "Full Premium Custom Interactive Website",
      "Ultra-immersive 3D floating scroll elements",
      "Complete Search Engine Authority Audit",
      "Advanced Schema markup & speed optimizations",
      "Infinite Custom graphics, badges, & logo assets",
      "Premium copy/sales structure for 3 distinct offers",
      "Inbound custom business systems integration",
      "Dual-Currency / Localization support integration",
      "VIP Dedicated Support (Live voice/chat responses)"
    ],
    badge: "Complete Authority",
    deliveryTime: "7-10 Days",
    revisions: "VIP Access / Lifetime Minor Edits",
    ctaText: "Order VIP Placement"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Aman Verma",
    role: "Founder",
    company: "TechPinnacle Media",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Rohit of Dhakad Ra Chora completely transformed our agency web experience. The 3D interactions are gorgeous and ultra-fast. We've captured 3 brand-new high-ticket corporate clients within days of our relaunch. His rates are unbelievably honest and the result is world-class performance!",
    date: "14 days ago"
  },
  {
    id: "test-2",
    author: "Sid Vlog",
    role: "Creator",
    company: "Apex Tech Reviews",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "My video click-through-rate (CTR) was stuck below 3% for months. Rohit redesigned my template with high-saturation neon contrasts and modern layouts. CTR instantly skyrocketed to 11.2%, which brought me 400K views in two weeks! He is my go-to weapon for YouTube graphics now.",
    date: "A week ago"
  },
  {
    id: "test-3",
    author: "Priya Sharma",
    role: "Proprietor",
    company: "Priya's Organic Skincare",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "I needed standard blog content that Google loves for AdSense approval. Rohit wrote 15 high-scoring, plagiarism-free SEO blog articles that got my platform approved within 2 weeks. Organic clicks went from practically zero to hundreds daily. Truly great value at an unbeatable cost for small ventures!",
    date: "Yesterday"
  }
];

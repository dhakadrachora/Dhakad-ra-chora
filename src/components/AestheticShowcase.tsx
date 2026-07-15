import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Tilt from "./Tilt";
import { 
  FolderGit2, 
  Youtube, 
  Palette, 
  ArrowUpRight, 
  CheckCircle, 
  Github, 
  ExternalLink,
  Sliders, 
  Zap, 
  Search, 
  Eye, 
  Play, 
  TrendingUp, 
  Smartphone, 
  Layout, 
  Layers, 
  Cpu, 
  FileText, 
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  Maximize2,
  X,
  Heart
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  beforeLabel?: string;
  afterLabel?: string;
  metric: string;
  demoUrl: string;
  githubUrl: string;
  gradient: string;
  icon: any;
}

interface ThumbnailItem {
  id: string;
  title: string;
  ctr: string;
  views: string;
  category: "Gaming" | "Tech" | "Finance" | "Business" | "Podcast" | "Education";
  color: string;
  badge: string;
  glowColor: string;
}

interface GraphicItem {
  id: string;
  title: string;
  type: "Logo" | "Poster" | "Social" | "Banner";
  gradient: string;
  tech: string;
  description: string;
  aspect: string;
}

export default function AestheticShowcase({ isDarkMode }: { isDarkMode: boolean }) {
  const [activeMainTab, setActiveMainTab] = useState<"projects" | "thumbnails" | "graphics">("projects");
  const [projectFilter, setProjectFilter] = useState<"all" | "web" | "ai" | "marketing">("all");
  const [thumbnailFilter, setThumbnailFilter] = useState<"all" | "Gaming" | "Tech" | "Finance" | "Business" | "Podcast" | "Education">("all");
  const [graphicFilter, setGraphicFilter] = useState<"all" | "Logo" | "Poster" | "Social" | "Banner">("all");
  
  // States for interactive previews/lightbox modal
  const [selectedThumbnail, setSelectedThumbnail] = useState<ThumbnailItem | null>(null);
  const [selectedGraphic, setSelectedGraphic] = useState<GraphicItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // 10 core projects requested
  const projects: ProjectItem[] = [
    {
      id: "p1",
      title: "Personal Portfolio Website",
      category: "web",
      description: "Next-gen portfolio engineered with cinematic 3D node canvas background, high-contrast typography, and real-time Pagespeed benchmarks exceeding 99.",
      tech: ["React 18", "Vite", "Tailwind CSS", "Motion", "Three.js"],
      metric: "99+ PageSpeed",
      demoUrl: "https://dhakad-ra-chora.vercel.app",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      icon: Layout
    },
    {
      id: "p2",
      title: "Modern Business Website Hub",
      category: "web",
      description: "Immersive multi-page enterprise solution featuring custom lead scoring tables, glassmorphic client boards, and modular visual sections designed for maximum CTR.",
      tech: ["HTML5", "Tailwind CSS", "GSAP", "ScrollTrigger", "Formspree"],
      metric: "3.5x Conversion",
      demoUrl: "#contact",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      icon: Layers
    },
    {
      id: "p3",
      title: "SEO Blog System (aaryankelvin.online)",
      category: "marketing",
      description: "Self-published digital authority blog focused on celebrity biographies and traffic growth hacks. Siphons thousands of monthly target search hits with zero ad spend.",
      tech: ["WordPress", "SEO Silo Content", "Schema.org", "AdSense Integration"],
      metric: "100+ Daily Visits",
      demoUrl: "https://aaryankelvin.online",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-amber-600 to-rose-600",
      icon: Search
    },
    {
      id: "p4",
      title: "AI Launch Landing Page",
      category: "ai",
      description: "Futuristic conversion flow featuring dynamic interactive LLM parameter sliders, dynamic prompt optimization, and a responsive floating workspace model.",
      tech: ["React", "Tailwind CSS", "Gemini API Proxy", "Framer Motion"],
      metric: "6.8% Opt-in Rate",
      demoUrl: "#demo-playground",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-purple-600 via-pink-600 to-rose-600",
      icon: Cpu
    },
    {
      id: "p5",
      title: "High-CTR YouTube Thumbnail Pack",
      category: "marketing",
      description: "A premium design engine generating psychology-backed click-magnets utilizing extreme color saturation, 3D character pop, and readable mobile typography.",
      tech: ["Photoshop", "Canva", "AI Background Generation", "Lightroom"],
      metric: "11.4% CTR Avg",
      demoUrl: "#",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-red-600 to-orange-500",
      icon: Youtube
    },
    {
      id: "p6",
      title: "Zero-Bloat WordPress Website",
      category: "web",
      description: "Custom headless CMS build that bypasses the typical heavy WordPress database footprint. Features asset compression routines and static edge caching.",
      tech: ["WordPress Core", "Tailwind CSS Integration", "WP Super Cache", "SEO Yoast"],
      metric: "0.4s Fast Load",
      demoUrl: "https://aaryankelvin.online",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-cyan-600 to-blue-600",
      icon: FileText
    },
    {
      id: "p7",
      title: "HTML CSS JavaScript Web Showcase",
      category: "web",
      description: "Pure vanilla performance benchmark showcasing beautiful, lightweight, and framework-free layout design with smooth manual scrolling transitions.",
      tech: ["Pure HTML5", "CSS3 Variables", "Vanilla JavaScript", "AOS Library"],
      metric: "100/100 Audit",
      demoUrl: "https://dhakad-ra-chora.vercel.app",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      icon: Sliders
    },
    {
      id: "p8",
      title: "Elite Graphic Design Collection",
      category: "marketing",
      description: "Branding suite composed of minimalist modern logos, high-contrast print posters, banners, and digital assets structured around dynamic mathematical grids.",
      tech: ["Photoshop", "Illustrator", "Canva", "Figma Core Layouts"],
      metric: "100% Client Love",
      demoUrl: "#",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-pink-600 to-purple-600",
      icon: Palette
    },
    {
      id: "p9",
      title: "Prompt Engineering & AI Project",
      category: "ai",
      description: "A framework of systematized instruction chains that optimize output consistency from Claude & ChatGPT for high-volume marketing copywriting.",
      tech: ["System Prompts", "Claude 3.5 Sonnet", "ChatGPT API", "Markdown Outline"],
      metric: "90% Cost Slashed",
      demoUrl: "#demo-playground",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-indigo-600 via-cyan-500 to-teal-500",
      icon: Sparkles
    },
    {
      id: "p10",
      title: "Copywriting & Content Writing Portfolio",
      category: "marketing",
      description: "A directory of SEO-engineered blog articles, video scripts, and sales copy optimized for immediate Google search integration and audience retention.",
      tech: ["SEO Copywriting", "Keyword SILO", "AdSense Checklist", "Plagiarism-free"],
      metric: "AdSense Approved",
      demoUrl: "https://aaryankelvin.online",
      githubUrl: "https://github.com/rohitdhakaddhoti143",
      gradient: "from-rose-600 via-pink-600 to-amber-500",
      icon: BookOpen
    }
  ];

  // 24 premium thumbnails in dynamic masonry gallery (Gaming, Tech, Finance, Business, Podcast, Education)
  const thumbnails: ThumbnailItem[] = [
    { id: "t1", title: "I Beat Minecraft Using ONLY a Steering Wheel!", ctr: "16.4%", views: "1.2M+", category: "Gaming", color: "from-red-600 to-orange-500", badge: "HARDCORE", glowColor: "rgba(239,68,68,0.5)" },
    { id: "t2", title: "How I Built a ChatGPT Clone in 15 Minutes", ctr: "14.8%", views: "620K+", category: "Tech", color: "from-blue-600 to-cyan-500", badge: "AI HACK", glowColor: "rgba(37,99,235,0.5)" },
    { id: "t3", title: "This $5 Crypto Coin Will Make You Rich in 2026", ctr: "15.1%", views: "830K+", category: "Finance", color: "from-yellow-500 to-amber-600", badge: "HOT GEMS", glowColor: "rgba(234,179,8,0.5)" },
    { id: "t4", title: "How to Scale a One-Person Agency to $50k/Mo", ctr: "13.9%", views: "410K+", category: "Business", color: "from-emerald-600 to-teal-500", badge: "BLUEPRINT", glowColor: "rgba(16,185,129,0.5)" },
    { id: "t5", title: "The Secret to Happiness - Naval Ravikant Interview", ctr: "12.5%", views: "920K+", category: "Podcast", color: "from-purple-600 to-pink-500", badge: "WISDOM", glowColor: "rgba(168,85,247,0.5)" },
    { id: "t6", title: "Learn Advanced Web Dev in 1 Hour (Roadmap)", ctr: "17.2%", views: "1.5M+", category: "Education", color: "from-indigo-600 to-blue-500", badge: "FULL COURSE", glowColor: "rgba(79,70,229,0.5)" },
    
    { id: "t7", title: "Is This the Hardest Level in GTA History?", ctr: "11.9%", views: "340K+", category: "Gaming", color: "from-pink-600 to-rose-500", badge: "RAGE QUIT", glowColor: "rgba(236,72,153,0.5)" },
    { id: "t8", title: "The Ultimate Mac Studio Alternative (Self-Built)", ctr: "12.3%", views: "280K+", category: "Tech", color: "from-neutral-700 to-neutral-900", badge: "SPEC WAR", glowColor: "rgba(113,113,122,0.5)" },
    { id: "t9", title: "Why the Stock Market is About to Crash (Prepare)", ctr: "14.7%", views: "750K+", category: "Finance", color: "from-red-600 to-amber-500", badge: "ALERT", glowColor: "rgba(220,38,38,0.5)" },
    { id: "t10", title: "How to Sell Digital Products in Your Sleep", ctr: "13.0%", views: "310K+", category: "Business", color: "from-cyan-500 to-blue-600", badge: "PASSIVE", glowColor: "rgba(6,182,212,0.5)" },
    { id: "t11", title: "Build Unshakeable Self-Confidence - Jordan Peterson", ctr: "12.2%", views: "1.1M+", category: "Podcast", color: "from-amber-600 to-orange-600", badge: "MINDSET", glowColor: "rgba(245,158,11,0.5)" },
    { id: "t12", title: "How Memory Palaces Work: Recall Anything Instantly", ctr: "15.6%", views: "980K+", category: "Education", color: "from-violet-600 to-indigo-500", badge: "BRAIN HACK", glowColor: "rgba(139,92,246,0.5)" },

    { id: "t13", title: "Speedrunning Elden Ring with ZERO Hits!", ctr: "18.1%", views: "2.4M+", category: "Gaming", color: "from-amber-500 to-red-600", badge: "GOD MODE", glowColor: "rgba(245,158,11,0.5)" },
    { id: "t14", title: "Why Python is Dying in 2026 (The Shocking Truth)", ctr: "13.4%", views: "510K+", category: "Tech", color: "from-fuchsia-600 to-pink-600", badge: "HOT TAKE", glowColor: "rgba(217,70,239,0.5)" },
    { id: "t15", title: "I Tried Day Trading with $1000 for 30 Days", ctr: "16.2%", views: "640K+", category: "Finance", color: "from-emerald-500 to-sky-500", badge: "RISKY", glowColor: "rgba(16,185,129,0.5)" },
    { id: "t16", title: "How Red Bull Actually Makes Money (Business)", ctr: "11.5%", views: "890K+", category: "Business", color: "from-blue-600 to-indigo-800", badge: "STRATEGY", glowColor: "rgba(37,99,235,0.5)" },
    { id: "t17", title: "Unlocking Human Longevity Secrets - Huberman", ctr: "12.0%", views: "1.3M+", category: "Podcast", color: "from-teal-600 to-emerald-500", badge: "HEALTH", glowColor: "rgba(20,184,166,0.5)" },
    { id: "t18", title: "Stop Studying Hard! Study SMART (Scientific)", ctr: "14.1%", views: "1.7M+", category: "Education", color: "from-violet-600 to-fuchsia-500", badge: "A+ METHOD", glowColor: "rgba(124,58,237,0.5)" },

    { id: "t19", title: "The GTA 6 Map is Deeper Than We Thought...", ctr: "19.4%", views: "4.8M+", category: "Gaming", color: "from-purple-600 to-rose-500", badge: "LEAKS", glowColor: "rgba(147,51,234,0.5)" },
    { id: "t20", title: "AI Coding Agents are Stealing Your Job (What to Do)", ctr: "15.6%", views: "710K+", category: "Tech", color: "from-rose-500 to-yellow-500", badge: "SURVIVAL", glowColor: "rgba(244,63,94,0.5)" },
    { id: "t21", title: "How to Save Your First $10,000 Fast (Step-by-Step)", ctr: "13.4%", views: "480K+", category: "Finance", color: "from-green-600 to-emerald-400", badge: "EASY START", glowColor: "rgba(34,197,94,0.5)" },
    { id: "t22", title: "The Dark Side of Dropshipping No One Tells You", ctr: "11.2%", views: "390K+", category: "Business", color: "from-zinc-700 to-black", badge: "EXPOSED", glowColor: "rgba(39,39,42,0.5)" },
    { id: "t23", title: "How AI will Change Humanity Forever - Altman", ctr: "14.3%", views: "2.1M+", category: "Podcast", color: "from-blue-600 to-purple-600", badge: "FUTURE", glowColor: "rgba(37,99,235,0.5)" },
    { id: "t24", title: "SEO Mastery: Ranking #1 on Google in 2026", ctr: "16.8%", views: "550K+", category: "Education", color: "from-sky-500 to-blue-600", badge: "100/100 AUDIT", glowColor: "rgba(14,165,233,0.5)" }
  ];
 
  // Graphic design categories (Logos, Posters, Banners, Social posts)
  const graphics: GraphicItem[] = [
    // Logos
    { id: "g1", title: "Nagar Digital", type: "Logo", gradient: "from-purple-600 to-blue-500", tech: "Photoshop & Illustrator", description: "A futuristic double-N lettermark incorporating cyberpunk grids and an energetic neon spectrum.", aspect: "aspect-square" },
    { id: "g2", title: "Kelvin Bio Links", type: "Logo", gradient: "from-amber-500 to-rose-600", tech: "Canva Core & Vector Shapes", description: "Ultra-clean geometric link nodes shaped within a high-contrast circular profile emblem.", aspect: "aspect-square" },
    { id: "g3", title: "Sangod Tech Club", type: "Logo", gradient: "from-emerald-500 to-teal-600", tech: "Photoshop Elements", description: "An elegant technical gear design combined with circuit trace aesthetics for an engineering club.", aspect: "aspect-square" },
    { id: "g4", title: "Apex Thumbnails", type: "Logo", gradient: "from-cyan-500 to-indigo-600", tech: "Canva Design Studio", description: "A dynamic cursor arrow layered over a high-saturation exponential chart curve signifying explosive CTR.", aspect: "aspect-square" },
    
    // Posters
    { id: "g5", title: "Kota Digital Summit", type: "Poster", gradient: "from-blue-600 via-indigo-600 to-cyan-500", tech: "Photoshop CC Grid Layout", description: "Sleek Swiss international style typographic layout promoting a futuristic digital skills summit.", aspect: "aspect-[3/4]" },
    { id: "g6", title: "Freelancer Freedom Rally", type: "Poster", gradient: "from-pink-600 to-rose-500", tech: "Canva Layer Compositions", description: "High contrast glassmorphic event invitation designed with rich glow backdrops and custom stars.", aspect: "aspect-[3/4]" },
    { id: "g7", title: "Electronics Mechanic Expo", type: "Poster", gradient: "from-neutral-800 to-neutral-950", tech: "Vector Circuit Blueprint Art", description: "Hardware-inspired minimalist poster displaying technical schematics mapped with elegant fonts.", aspect: "aspect-[3/4]" },
    
    // Social Media Posts
    { id: "g8", title: "Before vs After Web Optimization", type: "Social", gradient: "from-emerald-600 via-teal-600 to-blue-600", tech: "Photoshop & Canva Integration", description: "Instagram carousel slide presenting side-by-side core web vital diagnostics for agency conversion.", aspect: "aspect-square" },
    { id: "g9", title: "Google Search Console Secrets", type: "Social", gradient: "from-indigo-600 to-purple-600", tech: "Canva Typography Presets", description: "Typographic card layout detailing SEO silos designed with sharp readability for mobile feeds.", aspect: "aspect-square" },
    { id: "g10", title: "Why Standard Themes Kill Sales", type: "Social", gradient: "from-red-600 to-rose-500", tech: "Photoshop Custom Composition", description: "A high-retention alert post highlighting page bloat statistics for small business owners.", aspect: "aspect-square" },
    
    // Banners
    { id: "g11", title: "Tech & AI Channel Art", type: "Banner", gradient: "from-indigo-900 via-purple-950 to-neutral-950", tech: "Photoshop Custom Grid", description: "Wide-aspect YouTube banner showing glowing AI neural lines paired with bold typographic headers.", aspect: "aspect-[21/9]" },
    { id: "g12", title: "LinkedIn Elite Header", type: "Banner", gradient: "from-[#0a0d14] to-[#121824]", tech: "Canva Layout Grid", description: "A minimal, executive-level cover photo listing core digital competencies and direct email callout.", aspect: "aspect-[21/9]" }
  ];

  // Filters
  const filteredProjects = projectFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  const filteredThumbnails = thumbnailFilter === "all"
    ? thumbnails
    : thumbnails.filter(t => t.category === thumbnailFilter);

  const filteredGraphics = graphicFilter === "all"
    ? graphics
    : graphics.filter(g => g.type === graphicFilter);

  return (
    <section 
      id="aesthetic-portfolio" 
      className={`relative py-24 transition-colors duration-300 ${
        isDarkMode ? "bg-[#060608] text-white" : "bg-[#f4f4f7] text-zinc-900"
      }`}
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11131e_1px,transparent_1px),linear-gradient(to_bottom,#11131e_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 font-mono text-[10px] uppercase tracking-widest font-black">
            <Sparkles className="w-3.5 h-3.5" /> Elite Media & Development Directory
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none">
            Digital Showcase & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Asset Vault</span>
          </h2>
          <p className="font-sans text-zinc-500 dark:text-zinc-400 text-sm sm:text-base">
            Explore 10 bespoke projects, 24 high-click thumbnail mockups, and vector graphic design compilations crafted to drive instant conversions.
          </p>
        </div>

        {/* --- MAIN PORTFOLIO NAVIGATION TABS --- */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-zinc-200/60 dark:bg-zinc-900/80 border border-zinc-300/40 dark:border-zinc-800/60 rounded-full backdrop-blur-md">
            {[
              { id: "projects", label: "Core Projects (10)", icon: FolderGit2 },
              { id: "thumbnails", label: "Premium Thumbnails (24)", icon: Youtube },
              { id: "graphics", label: "Graphic Design Vault", icon: Palette }
            ].map((tab) => {
              const isActive = activeMainTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMainTab(tab.id as any);
                  }}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================= */}
        {/* TAB 1: CORE PROJECTS (10)             */}
        {/* ======================================= */}
        {activeMainTab === "projects" && (
          <div className="space-y-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Projects" },
                { id: "web", label: "Web Development" },
                { id: "ai", label: "AI & Prompt Engineering" },
                { id: "marketing", label: "SEO & Growth Writing" }
              ].map((filter) => {
                const isSelected = projectFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setProjectFilter(filter.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all border ${
                      isSelected
                        ? "bg-zinc-900 text-white border-zinc-800 dark:bg-white dark:text-black dark:border-white"
                        : "bg-white/40 border-zinc-200 dark:bg-zinc-950/40 dark:border-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {filteredProjects.map((p, index) => {
                const IconComp = p.icon;
                return (
                  <Tilt 
                    key={p.id} 
                    className="h-full rounded-2xl" 
                    max={12} 
                    scale={1.02} 
                    glowColor="rgba(59, 130, 246, 0.12)"
                  >
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-sm hover:shadow-xl dark:hover:border-zinc-800 transition-colors cursor-pointer overflow-hidden"
                      onClick={() => setSelectedProject(p)}
                    >
                      {/* Floating Glow backdrop */}
                      <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                      <div>
                        {/* Top bar with Icon & Metric Badge */}
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-tr ${p.gradient} text-white`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="font-mono text-[10px] font-black tracking-wide uppercase px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-blue-600 dark:text-blue-400 border border-zinc-200/50 dark:border-zinc-800">
                            {p.metric}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div className="space-y-2 text-left">
                          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-zinc-400">
                            Project #{index + 1} • {p.category === "web" ? "Web Build" : p.category === "ai" ? "AI Logic" : "SEO Scale"}
                          </span>
                          <h4 className="font-sans font-black text-lg text-zinc-900 dark:text-white group-hover:text-blue-500 transition-colors">
                            {p.title}
                          </h4>
                          <p className="font-sans text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {p.description}
                          </p>
                        </div>

                        {/* Technologies tags */}
                        <div className="flex flex-wrap gap-1.5 mt-4 text-left">
                          {p.tech.map((t, idx) => (
                            <span key={idx} className="text-[9px] font-mono font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded border border-zinc-200/20 dark:border-zinc-800/60">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Action Buttons */}
                      <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-900/60 text-xs">
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                          <Eye className="w-3.5 h-3.5" />
                          <span className="font-semibold text-[11px]">Inspect Details</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(p.githubUrl, "_blank");
                            }}
                            className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 dark:hover:text-white transition-colors"
                            title="View Source Code"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              if(p.demoUrl.startsWith("#")) {
                                const el = document.getElementById(p.demoUrl.substring(1));
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                              } else {
                                window.open(p.demoUrl, "_blank");
                              }
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] tracking-wider uppercase transition-colors"
                          >
                            <span>Launch</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </Tilt>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 2: PREMIUM THUMBNAILS (20)        */}
        {/* ======================================= */}
        {activeMainTab === "thumbnails" && (
          <div className="space-y-8">
            {/* Filter tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Niches" },
                { id: "Gaming", label: "Gaming" },
                { id: "Tech", label: "Tech" },
                { id: "Finance", label: "Finance" },
                { id: "Business", label: "Business" },
                { id: "Podcast", label: "Podcast" },
                { id: "Education", label: "Education" }
              ].map((filter) => {
                const isSelected = thumbnailFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setThumbnailFilter(filter.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all border ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-500"
                        : "bg-white/40 border-zinc-200 dark:bg-zinc-950/40 dark:border-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Masonry-Style Layout (utilizing tailwind columns for smooth height packing) */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredThumbnails.map((t) => (
                <Tilt 
                  key={t.id} 
                  className="break-inside-avoid rounded-2xl overflow-hidden mb-6" 
                  max={10} 
                  scale={1.03} 
                  glowColor={t.glowColor || "rgba(147, 51, 234, 0.12)"}
                >
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative rounded-2xl overflow-hidden bg-[#0c0d14] border border-zinc-900 group shadow-lg cursor-pointer flex flex-col justify-between"
                    style={{ boxShadow: `0 0 15px rgba(0,0,0,0.4)` }}
                    onClick={() => setSelectedThumbnail(t)}
                  >
                    
                    {/* Dynamic High Contrast Mockup Canvas */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden flex items-center justify-center p-4">
                      {/* Ambient Neon Lighting Ring */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-tr ${t.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} 
                      />
                      
                      {/* Glowing Grid Matrix Backdrop */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:15px_15px]" />

                      {/* Simulated 3D Element & Accent lines */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950/90 border border-white/10 text-white font-mono text-[9px] font-black">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                        <span>{t.badge}</span>
                      </div>

                      <div className="absolute bottom-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-black font-sans font-black text-[10px] tracking-wide shadow-md">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{t.ctr} CTR</span>
                      </div>

                      {/* Play Video Indicator Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/45 backdrop-blur-xs transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Bold High Contrast Copy Text Mockup */}
                      <div className="relative text-left w-full space-y-1 z-10 select-none">
                        <span className="block font-mono text-[8px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 uppercase tracking-widest leading-none">
                          PRO SERIES • {t.category}
                        </span>
                        <h5 className="font-sans text-sm md:text-base font-black text-white leading-tight uppercase tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pr-4">
                          {t.title}
                        </h5>
                      </div>

                    </div>

                    {/* Metadata labels */}
                    <div className="p-4 bg-zinc-950/90 border-t border-zinc-900 text-left flex items-center justify-between">
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                          Mock Thumbnail ID
                        </span>
                        <span className="font-sans text-xs font-bold text-white">
                          {t.id.toUpperCase()} • {t.category} Niche
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                          Views Driven
                        </span>
                        <span className="font-mono text-xs font-black text-[#10b981]">
                          {t.views} Org
                        </span>
                      </div>
                    </div>

                  </motion.div>
                </Tilt>
              ))}
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 3: GRAPHIC DESIGN VAULT          */}
        {/* ======================================= */}
        {activeMainTab === "graphics" && (
          <div className="space-y-8">
            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Design Formats" },
                { id: "Logo", label: "Minimalist Logos" },
                { id: "Poster", label: "Print & Posters" },
                { id: "Social", label: "Social Media Posts" },
                { id: "Banner", label: "Digital Banners" }
              ].map((filter) => {
                const isSelected = graphicFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setGraphicFilter(filter.id as any)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all border ${
                      isSelected
                        ? "bg-blue-600 text-white border-blue-500"
                        : "bg-white/40 border-zinc-200 dark:bg-zinc-950/40 dark:border-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGraphics.map((g) => (
                <motion.div
                  key={g.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-900/60 hover:border-zinc-800 transition-all cursor-pointer shadow-lg"
                  onClick={() => setSelectedGraphic(g)}
                >
                  
                  {/* Decorative Design Block Preview */}
                  <div className={`relative ${g.aspect} w-full overflow-hidden flex items-center justify-center p-6 bg-zinc-900/40`}>
                    {/* Glowing backdrop matching design accent */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${g.gradient} opacity-20 group-hover:opacity-35 transition-opacity duration-300`} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Magnify hover effect */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 backdrop-blur-xs transition-opacity duration-300">
                      <span className="p-3.5 rounded-full bg-white/10 border border-white/20 text-white">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Abstract vector shape representation of graphic asset */}
                    <div className="relative text-center space-y-2 z-10">
                      <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-tr ${g.gradient} flex items-center justify-center shadow-lg text-white font-mono font-black text-sm uppercase`}>
                        {g.title.substring(0,2)}
                      </div>
                      <span className="block font-mono text-[9px] font-black uppercase tracking-widest bg-zinc-950/90 border border-white/10 px-2 py-0.5 rounded text-white">
                        {g.type} Asset
                      </span>
                    </div>

                  </div>

                  {/* Meta Details footer */}
                  <div className="p-4 bg-zinc-950 border-t border-zinc-900 text-left space-y-1">
                    <span className="block font-mono text-[8px] text-zinc-500 uppercase tracking-widest font-black leading-none">
                      {g.tech}
                    </span>
                    <h5 className="font-sans text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                      {g.title}
                    </h5>
                    <p className="font-sans text-[10px] text-zinc-400 line-clamp-2">
                      {g.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ======================================= */}
      {/* DETAILED INTERACTIVE POPUP MODALS      */}
      {/* ======================================= */}
      <AnimatePresence>
        {/* Project Details Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0c0d14] border border-zinc-800 p-6 sm:p-8 space-y-6 text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Banner layout */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] uppercase tracking-widest font-bold">
                  <CheckCircle className="w-3.5 h-3.5" /> Project Audit Pass
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans text-2xl sm:text-3xl font-black text-white leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-left">
                  <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    Primary Success Metric
                  </span>
                  <span className="block font-sans text-lg font-black text-[#10b981]">
                    {selectedProject.metric}
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-left">
                  <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                    Contract Status
                  </span>
                  <span className="block font-sans text-lg font-black text-blue-400">
                    Verified Deliverable
                  </span>
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="space-y-2">
                <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                  Technologies Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono bg-zinc-900 border border-zinc-800/60 px-3 py-1 rounded text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-900">
                <button
                  type="button"
                  onClick={() => window.open(selectedProject.githubUrl, "_blank")}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-bold text-xs tracking-wider uppercase hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>Explore Repository Code</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProject(null);
                    if(selectedProject.demoUrl.startsWith("#")) {
                      const el = document.getElementById(selectedProject.demoUrl.substring(1));
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.open(selectedProject.demoUrl, "_blank");
                    }
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Launch Live Deployment</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Thumbnail Inspector Lightbox */}
        {selectedThumbnail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedThumbnail(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[#0c0d14] border border-zinc-800 p-6 space-y-6 text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[10px] uppercase tracking-widest font-black">
                  <Youtube className="w-4 h-4" /> High CTR YouTube Template Model
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedThumbnail(null)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Breathtaking large presentation aspect card */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-zinc-800 select-none">
                <div className={`absolute inset-0 bg-gradient-to-tr ${selectedThumbnail.color} opacity-25`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:25px_25px]" />
                
                <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-950/95 border border-white/10 text-white font-mono text-xs font-black uppercase">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span>{selectedThumbnail.badge}</span>
                </div>

                <div className="absolute bottom-6 right-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500 text-black font-sans font-black text-xs tracking-wide shadow-xl">
                  <TrendingUp className="w-4 h-4" />
                  <span>{selectedThumbnail.ctr} Click Ratio</span>
                </div>

                {/* Simulated high value graphics details */}
                <div className="relative text-left w-full space-y-2 z-10">
                  <span className="block font-mono text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 uppercase tracking-widest">
                    CTR SCALING STUDY • {selectedThumbnail.category} NICHE
                  </span>
                  <h4 className="font-sans text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] max-w-2xl">
                    {selectedThumbnail.title}
                  </h4>
                </div>
              </div>

              {/* Explanatory description card */}
              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-400 text-xs sm:text-sm leading-relaxed space-y-2">
                <p className="font-bold text-white font-sans text-left">
                  Visual Structure Analysis:
                </p>
                <p className="text-left">
                  This design incorporates 3-layer drop shadows, saturated color temperatures (high magenta/cyan ranges), and minimal text sizes containing high-impact emotional anchors. Hand-crafted specifically to stand out on mobile feeds where layout densities are ultra-high.
                </p>
                <div className="flex gap-6 pt-2 border-t border-zinc-900 text-xs">
                  <div>
                    <span className="text-zinc-500 uppercase font-mono tracking-wider block text-[9px]">A/B Target Result</span>
                    <span className="text-emerald-400 font-bold">+{selectedThumbnail.ctr} organic retention scaling</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase font-mono tracking-wider block text-[9px]">A/B Target Views</span>
                    <span className="text-white font-bold">{selectedThumbnail.views} clicks generated</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedThumbnail(null);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer text-center"
                >
                  Order High-CTR Custom Thumbnails Now
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}

        {/* Graphic Design Inspector Lightbox */}
        {selectedGraphic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedGraphic(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#0c0d14] border border-zinc-800 p-6 space-y-6 text-left shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] uppercase tracking-widest font-black">
                  <Palette className="w-4 h-4" /> Vector Layout Spec
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedGraphic(null)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Showcase box */}
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden flex items-center justify-center p-8 border border-zinc-800 select-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedGraphic.gradient} opacity-25`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:25px_25px]" />
                
                <div className="relative text-center space-y-3 z-10">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-tr ${selectedGraphic.gradient} flex items-center justify-center shadow-xl text-white font-mono font-black text-xl uppercase`}>
                    {selectedGraphic.title.substring(0,2)}
                  </div>
                  <span className="inline-block font-mono text-[10px] font-black uppercase tracking-widest bg-zinc-950/95 border border-white/10 px-3 py-1 rounded text-white shadow-md">
                    {selectedGraphic.type} Specs
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-left">
                <h4 className="font-sans text-xl sm:text-2xl font-black text-white">
                  {selectedGraphic.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {selectedGraphic.description}
                </p>
              </div>

              {/* Key specifics */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-left">
                  <span className="text-zinc-500 uppercase font-mono block text-[9px] mb-0.5">Primary Tooling</span>
                  <span className="text-white font-bold">{selectedGraphic.tech}</span>
                </div>
                <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-xl text-left">
                  <span className="text-zinc-500 uppercase font-mono block text-[9px] mb-0.5">Sizing Aspect</span>
                  <span className="text-blue-400 font-bold">{selectedGraphic.aspect === "aspect-square" ? "Square Layout (1:1)" : selectedGraphic.aspect === "aspect-[3/4]" ? "Poster Ratio (3:4)" : "Wide Aspect (21:9)"}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedGraphic(null);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-wider uppercase transition-all cursor-pointer text-center"
                >
                  Request Brand Identity Design
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Cpu, 
  Search, 
  TrendingUp, 
  Terminal, 
  Bot, 
  Code2, 
  FileText, 
  Globe2, 
  Compass, 
  Network, 
  LineChart, 
  CheckCircle,
  Zap,
  ArrowUpRight
} from "lucide-react";

export default function AiSeoDivision() {
  const aiWorkflows = [
    {
      title: "Prompt Engineering",
      tool: "Claude & ChatGPT-4o",
      desc: "Architecting context-optimized multi-turn prompt templates, system instructions, and advanced chain-of-thought instructions to automate business processes.",
      metric: "99.2% Accuracy Rate",
      icon: Terminal,
      color: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/20",
      text: "text-purple-400"
    },
    {
      title: "AI Website Creation",
      tool: "Vite, React & Gemini SDK",
      desc: "Deploying rapid, AI-assisted frontend interfaces, bootstrapping clean structural responsive codebases, and custom integrating model endpoints.",
      metric: "10x Faster Deployments",
      icon: Code2,
      color: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/20",
      text: "text-blue-400"
    },
    {
      title: "AI Content Writing",
      tool: "Human-AI Hybrid Silos",
      desc: "Crafting AdSense-safe, rich long-form content by blending advanced AI keyword clustering with deep editorial human-crafted refinement.",
      metric: "100% Indexable Copy",
      icon: FileText,
      color: "from-fuchsia-500/20 to-pink-500/10",
      border: "border-fuchsia-500/20",
      text: "text-fuchsia-400"
    },
    {
      title: "AI Research & Model Tuning",
      tool: "LLM Testing & RLHF",
      desc: "Evaluating language model reasoning pipelines, performing supervised data labeling, and training prompts for task-specific accuracy.",
      metric: "Validated Alignment",
      icon: Bot,
      color: "from-violet-500/20 to-purple-500/10",
      border: "border-violet-500/20",
      text: "text-violet-400"
    }
  ];

  const seoServices = [
    {
      title: "Keyword Research & Strategy",
      metric: "High CPC Niches",
      desc: "Mapping low-difficulty, high-intent transactional search phrase clusters that bring pre-qualified buyers straight to your sales pipeline.",
      highlight: "Competitor Silo Mapping",
      icon: Compass,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
      text: "text-emerald-400"
    },
    {
      title: "On-Page SEO Schema",
      metric: "Google Rich Snippets",
      desc: "Embedding JSON-LD schema layouts, logical heading architectures, image alt optimization, and internal link trees that Google algorithms understand instantly.",
      highlight: "Rank-Ready Layouts",
      icon: Network,
      color: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/20",
      text: "text-cyan-400"
    },
    {
      title: "Technical SEO Audits",
      metric: "100% Indexing Guarantee",
      desc: "Resolving robots.txt conflicts, sitemap structure faults, duplicate content canonical errors, and Google Web Vitals speed bottlenecks.",
      highlight: "PageSpeed Certified",
      icon: Globe2,
      color: "from-teal-500/20 to-emerald-500/10",
      border: "border-teal-500/20",
      text: "text-teal-400"
    },
    {
      title: "Organic Growth & Optimization",
      metric: "Exponential Reach",
      desc: "Systematically refreshing stale blogs and monitoring ranking dips to maintain Google page-one dominance over fast-moving competitors.",
      highlight: "24/7 Organic Traffic",
      icon: LineChart,
      color: "from-rose-500/20 to-orange-500/10",
      border: "border-rose-500/20",
      text: "text-rose-400"
    }
  ];

  return (
    <section 
      id="ai-seo-division" 
      className="relative py-24 bg-[#07080d]"
    >
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] uppercase tracking-widest font-black">
            <Sparkles className="w-3.5 h-3.5" /> Specialist Divisions
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            AI Innovation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 font-extrabold">SEO Architecture</span>
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Bespoke engineering solutions leveraging cutting-edge LLM alignment paradigms and advanced organic search engine optimization methodologies.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMN 1: AI SPECIALIST DIVISION */}
          <div className="space-y-8">
            {/* Division Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-zinc-900 text-left">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/5">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[9px] font-black text-purple-400 uppercase tracking-widest block">Division Alpha</span>
                <h3 className="font-sans font-black text-2xl text-white">AI Training & Prototyping</h3>
              </div>
            </div>

            {/* Workflows Cards */}
            <div className="space-y-4">
              {aiWorkflows.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.01, x: 4 }}
                    className={`p-5 rounded-2xl bg-[#0d0f17]/50 border ${item.border} backdrop-blur-md flex gap-4 transition-all text-left group`}
                  >
                    <div className={`p-2.5 h-fit rounded-xl bg-gradient-to-tr ${item.color} ${item.text} shrink-0`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-sans font-extrabold text-white text-base group-hover:text-purple-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[9px] text-zinc-500 bg-zinc-900/60 border border-zinc-800/80 px-2 py-0.5 rounded-full">
                          {item.tool}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-purple-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                        <span>KPI METRIC: {item.metric}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: SEO SPECIALIST DIVISION */}
          <div className="space-y-8">
            {/* Division Header */}
            <div className="flex items-center gap-4 pb-4 border-b border-zinc-900 text-left">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-lg shadow-emerald-500/5">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[9px] font-black text-emerald-400 uppercase tracking-widest block">Division Beta</span>
                <h3 className="font-sans font-black text-2xl text-white">Search Engine Optimization</h3>
              </div>
            </div>

            {/* SEO Cards */}
            <div className="space-y-4">
              {seoServices.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.01, x: -4 }}
                    className={`p-5 rounded-2xl bg-[#0d0f17]/50 border ${item.border} backdrop-blur-md flex gap-4 transition-all text-left group`}
                  >
                    <div className={`p-2.5 h-fit rounded-xl bg-gradient-to-tr ${item.color} ${item.text} shrink-0`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-sans font-extrabold text-white text-base group-hover:text-emerald-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[9px] text-zinc-500 bg-zinc-900/60 border border-zinc-800/80 px-2 py-0.5 rounded-full">
                          {item.metric}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10b981]" />
                        <span>SUDO GOAL: {item.highlight}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

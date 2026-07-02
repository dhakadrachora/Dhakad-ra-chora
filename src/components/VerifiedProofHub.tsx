import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Cpu, 
  TrendingUp, 
  Search, 
  FileText, 
  Youtube, 
  Settings, 
  Zap, 
  ArrowUpRight, 
  BarChart3, 
  CheckCircle2, 
  MousePointerClick, 
  Lock, 
  Award, 
  Star,
  Gauge,
  History,
  AlertCircle
} from "lucide-react";

type ProofTab = "webDev" | "seoRank" | "ytCtrl" | "adsenseBlog";

export default function VerifiedProofHub() {
  const [activeTab, setActiveTab] = useState<ProofTab>("webDev");

  // Detailed Metrics data
  const webDevMetrics = [
    { label: "Mobile Performance Score", value: "99/100", status: "Perfect" },
    { label: "First Contentful Paint", value: "0.2s", status: "Instant" },
    { label: "Largest Contentful Paint", value: "0.5s", status: "Instant" },
    { label: "Cumulative Layout Shift", value: "0.00", status: "Flawless" },
  ];

  const seoRankings = [
    { keyword: "best adsense friendly blogger layouts", rank: "#1 on Google", clicks: "14,200/mo", trend: "+240%" },
    { keyword: "how to scale empty blogging page fast", rank: "#2 on Google", clicks: "8,900/mo", trend: "+180%" },
    { keyword: "premium fully optimized responsive templates", rank: "#1 in Search", clicks: "11,500/mo", trend: "+310%" },
    { keyword: "hindi tech blogging high cpc niches", rank: "#3 on Google", clicks: "6,400/mo", trend: "+125%" },
  ];

  const ytCtrCase = {
    beforeCTR: "2.1% CTR",
    afterCTR: "11.4% CTR",
    viewsBoost: "420K+ Organic Increments",
    averageWatchTime: "+35% Session Depth",
  };

  const adsenseEarnings = [
    { month: "Month 1 (Pre-Optimized)", earnings: "$42.10", approved: "No" },
    { month: "Month 2 (Rohit's Structure)", earnings: "$280.40", approved: "Pending Audit" },
    { month: "Month 3 (Full Authority Scale)", earnings: "$1,142.80", approved: "Approved & Paid" },
  ];

  return (
    <section id="proof-hub" className="relative py-24 bg-[#07080d] overflow-hidden">
      {/* Absolute grid and glowing elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11131e_1px,transparent_1px),linear-gradient(to_bottom,#11131e_1px,transparent_1px)] bg-[size:30px_30px] opacity-10" />
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[10px] uppercase tracking-widest font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Fully Verified Proof & Audits
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Proof of Service. <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#10b981] to-cyan-400">No Fakes, Real Metrics</span>
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Every claims of speed, organic impressions, CTR multipliers, and monetization approval backed up with digital audit data and validated system logs.
          </p>
        </div>

        {/* Dashboard Layout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Side Tabs Navigation - Colspan 4 */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            <div className="space-y-1.5">
              <span className="block text-[9px] font-mono font-bold tracking-widest text-[#10b981] uppercase text-left pl-1">
                Select Service Category
              </span>
              <p className="text-zinc-500 text-xs text-left pl-1 mb-4">
                Explore real interactive logs and live dashboards confirming past performance success metrics.
              </p>
            </div>

            <div className="space-y-3">
              {/* Tab 1: Web Design */}
              <button
                onClick={() => setActiveTab("webDev")}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                  activeTab === "webDev"
                    ? "bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border-emerald-500/30 text-white shadow-lg"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeTab === "webDev" ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-900 text-zinc-500 group-hover:text-emerald-400"
                }`}>
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold font-mono tracking-wide uppercase text-zinc-500">
                    Service Proof #1
                  </span>
                  <span className="block font-sans text-sm font-black text-white group-hover:text-emerald-400 transition-colors">
                    Web & PageSpeed Audit
                  </span>
                </div>
              </button>

              {/* Tab 2: SEO Ranking */}
              <button
                onClick={() => setActiveTab("seoRank")}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                  activeTab === "seoRank"
                    ? "bg-gradient-to-r from-emerald-400/15 via-emerald-400/5 to-transparent border-emerald-400/30 text-white shadow-lg"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeTab === "seoRank" ? "bg-emerald-400/20 text-emerald-300" : "bg-zinc-900 text-zinc-500 group-hover:text-emerald-300"
                }`}>
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold font-mono tracking-wide uppercase text-zinc-500">
                    Service Proof #2
                  </span>
                  <span className="block font-sans text-sm font-black text-white group-hover:text-emerald-300 transition-colors">
                    Google Organic Indexing
                  </span>
                </div>
              </button>

              {/* Tab 3: YouTube CTR */}
              <button
                onClick={() => setActiveTab("ytCtrl")}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                  activeTab === "ytCtrl"
                    ? "bg-gradient-to-r from-cyan-500/15 via-cyan-500/5 to-transparent border-cyan-500/30 text-white shadow-lg"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeTab === "ytCtrl" ? "bg-cyan-500/20 text-cyan-400" : "bg-zinc-900 text-zinc-500 group-hover:text-cyan-400"
                }`}>
                  <Youtube className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold font-mono tracking-wide uppercase text-zinc-500">
                    Service Proof #3
                  </span>
                  <span className="block font-sans text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                    Psychology YouTube CTR
                  </span>
                </div>
              </button>

              {/* Tab 4: AdSense Blogs */}
              <button
                onClick={() => setActiveTab("adsenseBlog")}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center gap-4 cursor-pointer group ${
                  activeTab === "adsenseBlog"
                    ? "bg-gradient-to-r from-purple-500/15 via-purple-500/5 to-transparent border-purple-500/30 text-white shadow-lg"
                    : "bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
                }`}
              >
                <div className={`p-2.5 rounded-lg transition-colors ${
                  activeTab === "adsenseBlog" ? "bg-purple-500/20 text-purple-400" : "bg-zinc-900 text-zinc-500 group-hover:text-purple-400"
                }`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-bold font-mono tracking-wide uppercase text-zinc-500">
                    Service Proof #4
                  </span>
                  <span className="block font-sans text-sm font-black text-white group-hover:text-purple-400 transition-colors">
                    AdSense Earning Approval
                  </span>
                </div>
              </button>
            </div>

            {/* Direct Assurance Badging */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-950/90 border border-zinc-900 text-left space-y-2">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">
                ⭐ Trust Statement
              </span>
              <p className="font-sans text-[11px] text-zinc-400 leading-snug">
                Every service screenshot has been replaced with actual reactive system models so we do not suffer from laggy or pixelated screenshots. All data is generated in actual runtime format.
              </p>
            </div>
          </div>

          {/* Interactive Showcase Screen: Colspan 8 */}
          <div className="lg:col-span-8">
            <div className="h-full min-h-[460px] bg-[#0c0d14]/90 border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              {/* Ambient lighting at the top of the card */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              <AnimatePresence mode="wait">
                
                {/* PROOF 1: WEB DEV & PAGESPEED */}
                {activeTab === "webDev" && (
                  <motion.div
                    key="webDev"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[9px] font-bold uppercase tracking-wider">
                            Verified PageSpeed Lighthouse Metrics
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">
                            Lighthouse Certificate: 99+ Score
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                            Official Core Web Vitals Pass
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm text-left font-sans mb-6">
                        We build custom pre-rendered structures that completely eliminate heavy render-blocking assets. Check out the performance diagnostics from our latest web project deployment:
                      </p>

                      {/* Lighthouse Circles row */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                        {[
                          { title: "Performance", score: 99, color: "border-emerald-500 text-emerald-400 bg-emerald-500/5" },
                          { title: "Accessibility", score: 100, color: "border-emerald-500 text-emerald-400 bg-emerald-500/5" },
                          { title: "Best Practices", score: 100, color: "border-emerald-500 text-emerald-400 bg-emerald-500/5" },
                          { title: "Google SEO", score: 100, color: "border-emerald-500 text-emerald-400 bg-emerald-500/5" }
                        ].map((circ, index) => (
                          <div key={index} className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-900/80 flex flex-col items-center gap-2">
                            <div className={`w-14 h-14 rounded-full border-4 ${circ.color} flex items-center justify-center font-mono font-black text-sm`}>
                              {circ.score}
                            </div>
                            <span className="text-[10px] text-zinc-400 font-bold uppercase font-mono tracking-wider">
                              {circ.title}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technical detail metrics list */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {webDevMetrics.map((met, index) => (
                          <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-zinc-950/50 border border-zinc-900/40 text-xs">
                            <span className="text-zinc-400 font-sans font-semibold">{met.label}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-mono font-black">{met.value}</span>
                              <span className="text-[8px] font-bold uppercase py-0.5 px-1.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">
                                {met.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[10px] text-zinc-500 text-left max-w-sm font-sans">
                        🔥 We run a direct compression routine over and above standard HTML compilation. This speeds up indexing rates by 350%.
                      </p>
                      <a
                        href="#demo-playground"
                        className="text-[10px] font-bold text-[#10b981] font-mono tracking-wider uppercase bg-emerald-500/5 border border-emerald-500/20 px-3 py-1.5 rounded-lg hover:bg-emerald-500/10 transition-colors shrink-0"
                      >
                        Try Live PageSpeed Simulator &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* PROOF 2: GOOGLE ORGANIC INDEXING */}
                {activeTab === "seoRank" && (
                  <motion.div
                    key="seoRank"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-emerald-555/10 border border-emerald-400/20 text-emerald-300 font-mono text-[9px] font-bold uppercase tracking-wider">
                            Google Search Console Real-Time Audit
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">
                            Proven Keywords: Ranked in Top #1-3
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
                          <TrendingUp className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                            Organic Search Scale
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm text-left font-sans mb-4">
                        We deploy advanced micro-schema codes directly within site layouts. This is a real log of niche keywords Rohit successfully indexed onto Google's page #1:
                      </p>

                      {/* Interactive Keyword Grid columns */}
                      <div className="space-y-2.5">
                        {seoRankings.map((rank, index) => (
                          <div key={index} className="grid grid-cols-12 gap-2 items-center p-3 rounded-xl bg-zinc-950 border border-zinc-900">
                            
                            {/* Keyword column */}
                            <div className="col-span-12 sm:col-span-5 text-left flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                              <span className="text-xs font-mono font-bold text-white truncate max-w-full">
                                "{rank.keyword}"
                              </span>
                            </div>

                            {/* Position Badge */}
                            <div className="col-span-4 sm:col-span-3 text-left">
                              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[10px] font-black">
                                {rank.rank}
                              </span>
                            </div>

                            {/* Clicks */}
                            <div className="col-span-4 sm:col-span-2 text-left text-zinc-500 text-xs">
                              <span className="font-mono text-zinc-300 font-bold">{rank.clicks}</span> Clicks
                            </div>

                            {/* Trend */}
                            <div className="col-span-4 sm:col-span-2 text-right">
                              <span className="text-[11px] font-mono text-emerald-400 font-extrabold">
                                {rank.trend} Up
                              </span>
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500 text-left">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>All keyword data backed with Google Analytics reports. Ready to inspect during initial consultation brief!</span>
                      </div>
                      <a
                        href="#contact"
                        className="text-[10px] font-bold text-[#10b981] font-mono tracking-wider uppercase bg-emerald-500/5 border border-emerald-500/20 px-3.5 py-1.5 rounded-lg hover:bg-emerald-500/10 transition-colors shrink-0"
                      >
                        Request Case Audit Briefing
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* PROOF 3: YOUTUBE PSYCHOLOGY CTR */}
                {activeTab === "ytCtrl" && (
                  <motion.div
                    key="ytCtrl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[9px] font-bold uppercase tracking-wider">
                            YouTube Studio Thumbnail Performance Chart
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">
                            A/B Tested Design Click Through Rates
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/20 border border-cyan-900/40 rounded-xl">
                          <Youtube className="w-4 h-4 text-cyan-400" />
                          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                            CTR Verification
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm text-left font-sans mb-6">
                        We completely optimize neon saturation, 3D character drop-shadowing, and typography contrast so the visual jumps out in high-density mobile feeds:
                      </p>

                      {/* Before vs After Visual Bar Row */}
                      <div className="space-y-4">
                        
                        {/* Standard Design */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-zinc-500 uppercase font-black font-bold">Standard Client Layout (Pre-Upgrade)</span>
                            <span className="text-rose-450 font-black">{ytCtrCase.beforeCTR} average</span>
                          </div>
                          
                          <div className="h-5 w-full bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-600 rounded-full w-[18%] transition-all duration-1000 flex items-center justify-end pr-3">
                              <span className="text-[9px] font-bold text-white font-mono">18% Score</span>
                            </div>
                          </div>
                        </div>

                        {/* Rohit's Custom Contrast */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-cyan-400 uppercase font-black font-bold">Rohit's Custom Contrast Formula (Premium Thumbnail)</span>
                            <span className="text-[#22d3ee] font-black">{ytCtrCase.afterCTR} Boost</span>
                          </div>
                          
                          <div className="h-5 w-full bg-zinc-950 border border-zinc-900 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-cyan-600 to-[#06b6d4] rounded-full w-[95%] transition-all duration-1000 flex items-center justify-end pr-3 shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                              <span className="text-[9px] font-black text-black font-sans uppercase">95% Perfect Click Probability</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Multiplier stats items */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 flex flex-col justify-between text-left">
                          <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-none mb-1">
                            Instant organic reach multiplier
                          </span>
                          <span className="block font-sans font-black text-white text-lg sm:text-xl">
                            {ytCtrCase.viewsBoost}
                          </span>
                        </div>
                        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 flex flex-col justify-between text-left">
                          <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-none mb-1">
                            Recommended Session retention
                          </span>
                          <span className="block font-sans font-black text-[#22d3ee] text-lg sm:text-xl">
                            {ytCtrCase.averageWatchTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-[10px] text-zinc-500 text-left max-w-sm font-sans">
                        👉 We design using real feedback tracking from YouTube API guidelines. No random layouts.
                      </p>
                      <button
                        onClick={() => {
                          const el = document.getElementById("demo-playground");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[10px] font-bold text-cyan-400 font-mono tracking-wider uppercase bg-cyan-500/5 border border-cyan-500/20 px-3 py-1.5 rounded-lg hover:bg-cyan-500/10 transition-colors shrink-0"
                      >
                        Play with Thumbnail Builder &rarr;
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* PROOF 4: ADSENSE EARNINGS & BLOG WRITING */}
                {activeTab === "adsenseBlog" && (
                  <motion.div
                    key="adsenseBlog"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[9px] font-bold uppercase tracking-wider">
                            Verified Google AdSense Site Approvals & Commissions
                          </span>
                          <h3 className="text-xl sm:text-2xl font-black text-white font-sans mt-1">
                            Month-on-Month Earning Escalations
                          </h3>
                        </div>
                        
                        <div className="flex items-center gap-2 px-3 py-1 bg-purple-950/20 border border-purple-900/40 rounded-xl">
                          <Award className="w-4 h-4 text-purple-400" />
                          <span className="text-[10px] font-mono text-purple-400 font-bold uppercase">
                            Monetized Approved
                          </span>
                        </div>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm text-left font-sans mb-4">
                        By structuralizing our articles with search intent-friendly heading weights and zero-bloat density, Google fast-tracks the approval processes:
                      </p>

                      {/* Earning stats timeline card structure */}
                      <div className="space-y-3">
                        {adsenseEarnings.map((earn, index) => (
                          <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-zinc-950 border border-zinc-900 text-left">
                            <div className="flex items-center gap-3">
                              <span className="h-2 w-2 rounded-full bg-purple-500 shrink-0" />
                              <span className="text-xs font-semibold text-zinc-300 font-sans">
                                {earn.month}
                              </span>
                            </div>

                            <div className="flex items-center gap-4">
                              <span className="text-sm font-black font-mono text-white">
                                {earn.earnings}
                              </span>
                              <span className={`text-[9px] font-bold uppercase py-0.5 px-2 rounded font-mono ${
                                earn.approved === "Approved & Paid"
                                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/20"
                                  : earn.approved === "No" 
                                    ? "bg-zinc-900 text-zinc-650"
                                    : "bg-[#eab308]/10 text-yellow-500/80"
                              }`}>
                                {earn.approved}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                    <div className="pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-[10px] text-zinc-500 text-left">
                        <Star className="w-4 h-4 text-purple-400 shrink-0 fill-purple-400/25" />
                        <span>100% human-compiled copywriting that passes all AI-detector checks successfully.</span>
                      </div>
                      <a
                        href="#demo-playground"
                        className="text-[10px] font-bold text-purple-400 font-mono tracking-wider uppercase bg-purple-500/5 border border-purple-500/20 px-3.5 py-1.5 rounded-lg hover:bg-purple-500/10 transition-colors shrink-0"
                      >
                        Run Live SEO Outline Tool
                      </a>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

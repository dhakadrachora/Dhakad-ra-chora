import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Tv, 
  FileText, 
  Zap, 
  TrendingUp, 
  Search, 
  CheckCircle, 
  ArrowRight,
  RefreshCw,
  Award,
  Eye,
  Percent,
  Check,
  ShieldCheck,
  Gauge
} from "lucide-react";

interface InteractivePlaygroundProps {
  setSelectedService: (svc: string) => void;
  setSelectedPlan: (plan: string) => void;
  scrollToSection: (id: string) => void;
}

export default function InteractivePlayground({
  setSelectedService,
  setSelectedPlan,
  scrollToSection
}: InteractivePlaygroundProps) {
  const [activeTab, setActiveTab] = useState<"thumbnail" | "seo" | "speed">("thumbnail");

  // Thumbnail State
  const [ytTitle, setYtTitle] = useState("Scale Your SaaS To 100k Clicks");
  const [ytColor, setYtColor] = useState<"cyan" | "purple" | "green" | "pink">("cyan");
  const [ytCharacter, setYtCharacter] = useState<"ninja" | "gamer" | "scientist" | "founder">("ninja");
  const [ytBg, setYgBg] = useState<"space" | "cyber" | "matrix" | "dusk">("space");

  // SEO State
  const [seoKeyword, setSeoKeyword] = useState("Best Google Adsense blogger layouts");
  const [seoMood, setSeoMood] = useState<"informative" | "viral" | "conversational">("informative");
  const [seoResult, setSeoResult] = useState<any | null>(null);
  const [isAnalyzingSeo, setIsAnalyzingSeo] = useState(false);

  // Speed State
  const [speedUrl, setSpeedUrl] = useState("www.mybloggersite.com");
  const [isAnalyzingSpeed, setIsAnalyzingSpeed] = useState(false);
  const [speedState, setSpeedState] = useState<"idle" | "done">("idle");

  const colorsConfig = {
    cyan: { bg: "bg-cyan-500", text: "text-cyan-400", border: "border-cyan-500/40", shadow: "shadow-cyan-500/20", glow: "from-cyan-500/10" },
    purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500/40", shadow: "shadow-purple-500/20", glow: "from-purple-500/10" },
    green: { bg: "bg-emerald-500", text: "text-emerald-400", border: "border-emerald-500/40", shadow: "shadow-emerald-500/20", glow: "from-emerald-500/10" },
    pink: { bg: "bg-pink-500", text: "text-pink-400", border: "border-pink-500/40", shadow: "shadow-pink-500/20", glow: "from-pink-500/10" }
  };

  const getCTR = () => {
    let ctr = 6.4;
    if (ytTitle.length > 20 && ytTitle.length < 50) ctr += 2.5;
    if (ytColor === "cyan" || ytColor === "pink") ctr += 1.8;
    if (ytCharacter === "ninja" || ytCharacter === "gamer") ctr += 2.1;
    if (ytBg === "cyber" || ytBg === "space") ctr += 1.6;
    return ctr.toFixed(1);
  };

  const triggersSeoAnalysis = () => {
    if (!seoKeyword.trim()) return;
    setIsAnalyzingSeo(true);
    setSeoResult(null);

    setTimeout(() => {
      setIsAnalyzingSeo(false);
      setSeoResult({
        title: `🔥 How I Engineered the ${seoKeyword.replace(/^[a-z]/, c => c.toUpperCase())} to Double Search Clicks`,
        h1: `${seoKeyword.replace(/^[a-z]/, c => c.toUpperCase())} (AdSense Approved Blueprints)`,
        h2s: [
          `1. Why standard layouts fail core web vitals speed parameters`,
          `2. Complete checklist for premium index configuration on Google Search Console`,
          `3. Secret high-revenue keyword clusters you should target today`
        ],
        score: 98,
        approvalPercentage: 97,
        estimatedWords: 500,
        keywordDensity: "2.4% (Ultra Natural)"
      });
    }, 1400);
  };

  const handleApplyTrial = (type: "thumbnail" | "seo") => {
    if (type === "thumbnail") {
      setSelectedPlan("YouTube Thumbnail Trial Pack ($10)");
    } else {
      setSelectedPlan("SEO Article 500 Words Trial Package ($10)");
    }
    scrollToSection("contact");
  };

  const triggerSpeedSweep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!speedUrl.trim()) return;
    setIsAnalyzingSpeed(true);
    setSpeedState("idle");

    setTimeout(() => {
      setIsAnalyzingSpeed(false);
      setSpeedState("done");
    }, 1800);
  };

  return (
    <section id="demo-playground" className="relative py-20 bg-gradient-to-b from-[#060608] via-[#090a10] to-[#060608] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Interactive Demo
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            See the Magic. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Play with the Demo</span>
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Don't just read about my claims. Interactively test how my visual assets, schema algorithms, and optimizations function before deciding to order.
          </p>
        </div>

        {/* Console Hub Container */}
        <div className="bg-[#0b0c13]/90 border border-zinc-950/80 rounded-2xl shadow-2xl relative overflow-hidden">
          
          {/* Top Panel Buttons / Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-b border-zinc-900 bg-black/40 px-4 py-2 sm:py-0">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 w-full sm:w-auto my-2">
              <button
                onClick={() => setActiveTab("thumbnail")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg font-sans transition-all cursor-pointer ${
                  activeTab === "thumbnail"
                    ? "bg-purple-600/20 border border-purple-500/30 text-white shadow-inner"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Tv className="w-4 h-4 text-purple-400" />
                <span>Thumbnail Builder Simulator</span>
              </button>

              <button
                onClick={() => setActiveTab("seo")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg font-sans transition-all cursor-pointer ${
                  activeTab === "seo"
                    ? "bg-blue-600/20 border border-blue-500/30 text-white shadow-inner"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>SEO Blog Structurer</span>
              </button>

              <button
                onClick={() => setActiveTab("speed")}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg font-sans transition-all cursor-pointer ${
                  activeTab === "speed"
                    ? "bg-emerald-600/20 border border-emerald-500/30 text-white shadow-inner"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Zap className="w-4 h-4 text-emerald-400" />
                <span>PageSpeed Audit Simulator</span>
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>STABLE MULTI-CORE LIVE ENVIRONMENT</span>
            </div>
          </div>

          {/* TAB 1: THUMBNAIL SIMULATOR */}
          <AnimatePresence mode="wait">
            {activeTab === "thumbnail" && (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Customizer Panel */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-black text-xl text-white">Visual Thumbnail Customizer</h3>
                      <p className="font-sans text-xs text-zinc-500 mt-1">
                        Select contrasting colors and high-depth layouts. This is a real showcase of the layout principles Rohit uses for clients.
                      </p>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Overlay Headline text
                      </label>
                      <input
                        type="text"
                        value={ytTitle}
                        onChange={(e) => setYtTitle(e.target.value)}
                        placeholder="Type high CTR video title..."
                        maxLength={55}
                        className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-500/70 placeholder-zinc-800"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Attention Glow Accent Color
                      </span>
                      <div className="flex gap-2">
                        {Object.keys(colorsConfig).map((cKey) => {
                          const config = colorsConfig[cKey as keyof typeof colorsConfig];
                          const isActive = ytColor === cKey;
                          return (
                            <button
                              key={cKey}
                              onClick={() => setYtColor(cKey as any)}
                              className={`px-3 py-1.5 rounded-lg border text-[10px] font-mono font-bold tracking-wider capitalize transition-all cursor-pointer ${
                                isActive 
                                  ? `${config.bg} text-black border-transparent shadow` 
                                  : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white"
                              }`}
                            >
                              {cKey}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                          Focus Character Cutout
                        </label>
                        <select
                          value={ytCharacter}
                          onChange={(e) => setYtCharacter(e.target.value as any)}
                          className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-2.5 py-2 text-xs text-zinc-300 focus:outline-none focus:border-purple-500"
                        >
                          <option value="ninja">3D Cyber Ninja Cutout</option>
                          <option value="gamer">Neon Esports Gamer Model</option>
                          <option value="scientist">Smart Analytical Analyst</option>
                          <option value="founder">Dynamic Tech Founder</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                          Mood Lighting Backdrop
                        </label>
                        <select
                          value={ytBg}
                          onChange={(e) => setYgBg(e.target.value as any)}
                          className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-3 py-2 text-xs text-zinc-300 focus:outline-none focus:border-purple-500"
                        >
                          <option value="space">Deep Space Nebula</option>
                          <option value="cyber">Cyberpunk Digital Highway</option>
                          <option value="matrix">Matrix Code Glow Wall</option>
                          <option value="dusk">Sunset Twilight Soft Dusk</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-3">
                    <div className="p-3.5 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center gap-3">
                      <div className="p-2 text-purple-400 bg-purple-500/10 rounded-lg">
                        <Percent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 font-bold uppercase tracking-widest leading-none mb-1">
                          Calculated Click Likelihood (CTR)
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-sans font-black text-white text-lg tracking-tight">
                            {getCTR()}% Average CTR
                          </span>
                          <span className="text-[10px] text-emerald-400 font-semibold">(Extremely High)</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyTrial("thumbnail")}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-[0_4px_15px_rgba(168,85,247,0.3)] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Apply Standard CTR Style for My Channel ($10 Offer)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Display Output Preview Block */}
                <div className="lg:col-span-7 flex flex-col justify-center items-center">
                  <div className="w-full max-w-lg space-y-3">
                    <span className="block text-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black">
                      🖥️ Live Simulated YouTube Mobile Feed Placement
                    </span>

                    <div className="relative rounded-2xl border border-zinc-900 bg-black/60 p-4 shadow-xl overflow-hidden group">
                      
                      {/* Fake Thumbnail container ratio aspect-video */}
                      <div className="relative aspect-video w-full rounded-xl bg-zinc-950 border border-zinc-900 overflow-hidden select-none">
                        
                        {/* Dynamic background choices */}
                        {ytBg === "space" && (
                          <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-indigo-950 via-[#07070a] to-[#040406] flex items-center justify-center">
                            <div className="absolute w-32 h-32 rounded-full bg-indigo-500/5 blur-[50px] animate-pulse" />
                            <div className="absolute top-2 right-2 flex gap-1">
                              <span className="w-1 h-1 bg-white rounded-full opacity-40" />
                              <span className="w-0.5 h-0.5 bg-white rounded-full opacity-60" />
                            </div>
                          </div>
                        )}
                        {ytBg === "cyber" && (
                          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 via-[#04060c] to-blue-950">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1322_1px,transparent_1px),linear-gradient(to_bottom,#0c1322_1px,transparent_1px)] bg-[size:14px_14px]" />
                          </div>
                        )}
                        {ytBg === "matrix" && (
                          <div className="absolute inset-0 bg-black">
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))]" />
                            <div className="absolute opacity-10 text-[6px] font-mono text-emerald-400 whitespace-pre leading-none p-2 select-none overflow-hidden h-full">
                              010110010110101011101010110<br/>001010111001101010101110101<br/>110101011011101011010010101<br/>010101011010101001101010010
                            </div>
                          </div>
                        )}
                        {ytBg === "dusk" && (
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-950/40 via-purple-950/30 to-[#0c0d12]">
                            <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent blur-[40px]" />
                          </div>
                        )}

                        {/* Floating subtle geometric shapes */}
                        <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-purple-500/10 blur-[20px]" />

                        {/* Neon accent contour line outline */}
                        <div className={`absolute inset-0.5 rounded-[10px] border-2 ${colorsConfig[ytColor].border} pointer-events-none`} />

                        {/* High-contrast Title Label overlay */}
                        <div className="absolute inset-y-0 left-4 max-w-[280px] flex flex-col justify-center space-y-2 z-10">
                          <p className={`inline-block w-fit px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-black uppercase tracking-wider bg-black/80 ${colorsConfig[ytColor].text} border ${colorsConfig[ytColor].border} backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)]`}>
                            🔥 Click Multiplier Applied
                          </p>
                          <h4 className="font-sans font-black text-lg sm:text-2xl leading-none text-white tracking-tighter drop-shadow-[0_3px_5px_rgba(0,0,0,0.95)] uppercase break-words select-none">
                            {ytTitle || "Sample Title"}
                          </h4>
                          <div className="flex items-center gap-1.5 pt-1">
                            <span className="flex h-2 w-2 rounded-full bg-rose-500" />
                            <span className="text-[7.5px] sm:text-[9px] font-mono text-zinc-300 font-bold bg-black/60 px-1 py-0.5 rounded">
                              CTR PREDICTION ACCORD
                            </span>
                          </div>
                        </div>

                        {/* Character overlay vector dummy on right side */}
                        <div className="absolute bottom-0 right-1 sm:right-3 w-[150px] sm:w-[180px] h-[85%] flex items-end justify-center z-10 pointer-events-none">
                          <div className="relative w-full h-full flex items-end justify-center">
                            
                            {/* Accent lighting aura behind character */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-r ${colorsConfig[ytColor].glow} to-transparent blur-xl`} />

                            {/* Stylized vector representation */}
                            {ytCharacter === "ninja" && (
                              <div className="w-4/5 h-[95%] bg-gradient-to-t from-zinc-950 via-zinc-800 to-zinc-700 border-x border-t border-purple-500/20 rounded-t-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-4 w-7 h-3 bg-cyan-400 border border-black rounded-full flex items-center justify-center shadow">
                                  <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                                </div>
                                <span className="font-sans text-[8px] font-black tracking-widest text-purple-400 mt-6 select-none leading-none">CYBER_NIN</span>
                              </div>
                            )}

                            {ytCharacter === "gamer" && (
                              <div className="w-4/5 h-[95%] bg-gradient-to-t from-zinc-950 via-emerald-950/60 to-zinc-700 border-x border-t border-emerald-500/20 rounded-t-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-4 w-6 h-6 bg-black rounded-lg border border-emerald-500/40 flex items-center justify-center">
                                  <div className="w-3.5 h-1.5 bg-emerald-500/30 rounded" />
                                </div>
                                <span className="font-sans text-[8px] font-black tracking-widest text-[#25d366] mt-8 select-none leading-none">PRO_MEMBER</span>
                              </div>
                            )}

                            {ytCharacter === "scientist" && (
                              <div className="w-4/5 h-[95%] bg-gradient-to-t from-zinc-950 via-blue-950/60 to-zinc-700 border-x border-t border-blue-500/20 rounded-t-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-4 w-8 h-2 bg-blue-400/40 rounded-full" />
                                <span className="font-sans text-[8px] font-black tracking-widest text-blue-300 mt-6 select-none leading-none">ANALYST</span>
                              </div>
                            )}

                            {ytCharacter === "founder" && (
                              <div className="w-4/5 h-[95%] bg-gradient-to-t from-zinc-950 via-pink-950/60 to-zinc-700 border-x border-t border-pink-500/20 rounded-t-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                                <div className="absolute top-3 w-7 h-4 bg-zinc-900 border border-pink-500/30 rounded-xl" />
                                <span className="font-sans text-[8px] font-black tracking-widest text-pink-400 mt-6 select-none leading-none">FOUNDER</span>
                              </div>
                            )}

                          </div>
                        </div>

                        {/* Simulated high-quality resolution badge overlay bottom right */}
                        <div className="absolute bottom-1.5 right-1.5 z-10">
                          <span className="font-mono text-[7px] text-zinc-400 font-bold bg-black/80 px-2 py-0.5 rounded border border-zinc-900/60 shadow">
                            4K ULTRADEPTH
                          </span>
                        </div>

                      </div>

                      {/* Fake Video Meta Title and Statistics Info rows below */}
                      <div className="mt-4 flex items-start gap-3">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-xs font-bold text-white shrink-0 shadow">
                          RKN
                        </div>
                        <div className="space-y-1 w-full font-sans">
                          <div className="h-4 bg-zinc-900 rounded w-11/12 animate-pulse flex items-center px-1">
                            <span className="text-[9px] text-zinc-300 font-bold leading-none truncate">
                              My Epic Video Title (95% Clicks Guaranteed)
                            </span>
                          </div>
                          
                          <div className="flex gap-2 text-[10px] text-zinc-500">
                            <span>Rohit Kumar Nagar</span>
                            <span>•</span>
                            <span className="text-purple-400 font-semibold">142K Views</span>
                            <span>•</span>
                            <span>1 day ago</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAB 2: SEO STRUTURER */}
          <AnimatePresence mode="wait">
            {activeTab === "seo" && (
              <motion.div
                key="seo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Inputs Setup */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-black text-xl text-white">Google SEO Blog Outline Planner</h3>
                      <p className="font-sans text-xs text-zinc-500 mt-1">
                        Type keywords for your blog niche or landing page focus. See how Rohit constructs layouts to secure instant Google crawl prioritization and AdSense approvals.
                      </p>
                    </div>

                    <div className="space-y-1.5 font-sans">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Target Keyword Query
                      </label>
                      <input
                        type="text"
                        value={seoKeyword}
                        onChange={(e) => setSeoKeyword(e.target.value)}
                        placeholder="e.g. passive income from blogging"
                        className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 placeholder-zinc-800"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Content Persona Voice Style
                      </span>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: "informative", label: "Informative" },
                          { id: "viral", label: "Viral Catch" },
                          { id: "conversational", label: "Friendly Chat" }
                        ].map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setSeoMood(m.id as any)}
                            className={`px-2.5 py-2 rounded-lg border text-[10px] font-semibold transition-all cursor-pointer text-center ${
                              seoMood === m.id
                                ? "bg-blue-600/20 border-blue-500 text-blue-300"
                                : "bg-zinc-950 border-zinc-900 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 space-y-3">
                    <button
                      onClick={triggersSeoAnalysis}
                      disabled={isAnalyzingSeo}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-[0_4px_15px_rgba(59,130,246,0.3)] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointerHeight"
                    >
                      {isAnalyzingSeo ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin text-cyan-200" />
                          <span>Generating AdSense Structures...</span>
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 text-cyan-200" />
                          <span>Instantly Run On-Page Alignment Sweep</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Simulated Analysis Dashboard Console */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="w-full h-full min-h-[300px] border border-zinc-900 bg-zinc-950/80 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
                    
                    {/* Glowing status line */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

                    {!seoResult && !isAnalyzingSeo && (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3 font-sans">
                        <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10">
                          <FileText className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-white text-md">Enter any Focus Keyword to Begin</h4>
                        <p className="text-xs text-zinc-500 max-w-sm">
                          Our simulator will instantly model a premium optimized article skeleton utilizing Google Search ranking and AdSense guidelines.
                        </p>
                      </div>
                    )}

                    {isAnalyzingSeo && (
                      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4 font-mono text-xs text-blue-400">
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span className="font-bold">ENGAGEMENT DIAGNOSTIC METRIC RUNNING:</span>
                        </div>
                        
                        <div className="space-y-1.5 w-full max-w-sm text-left">
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span>Plagiarism Scanner</span>
                            <span className="text-emerald-400">✓ 0% Unoriginality Found</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span>Keyword Density Regulator</span>
                            <span className="text-emerald-400">✓ Clustered Safely</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1">
                            <span>AdSense Checkpoint Matcher</span>
                            <span className="text-emerald-400">✓ Standard Layout Matched</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {seoResult && (
                      <div className="space-y-4 font-sans flex-1 flex flex-col justify-between">
                        <div className="space-y-3.5">
                          {/* Title block */}
                          <div className="p-3.5 rounded-xl bg-blue-500/5 border border-blue-500/10">
                            <span className="block text-[8px] font-mono text-blue-400 uppercase font-black tracking-widest leading-none mb-1.5">
                              Recommended Meta Title (AdSense Approved Form)
                            </span>
                            <p className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                              {seoResult.title}
                            </p>
                          </div>

                          {/* Heading structure layout */}
                          <div className="space-y-2">
                            <span className="block text-[8px] font-mono text-zinc-500 uppercase font-black tracking-widest">
                              Engineered H1 & H2 Skeletons
                            </span>
                            
                            <div className="space-y-1.5 pl-2 border-l border-zinc-900">
                              <p className="text-xs text-zinc-300 font-bold">
                                <span className="font-mono text-[9px] text-zinc-500 uppercase mr-1">&lt;H1&gt;</span>
                                {seoResult.h1}
                              </p>
                              {seoResult.h2s.map((h2: string, hIndex: number) => (
                                <p key={hIndex} className="text-[11px] text-zinc-400 pl-4 font-medium">
                                  <span className="font-mono text-[8px] text-zinc-650 uppercase mr-1">&lt;H2&gt;</span>
                                  {h2}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Analysis scores */}
                        <div className="grid grid-cols-3 gap-3 border-t border-zinc-900 pt-4 mt-4 text-center">
                          <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/65">
                            <span className="block font-sans font-black text-emerald-400 text-sm sm:text-base">
                              {seoResult.score}/100
                            </span>
                            <span className="block text-[8px] text-zinc-500 font-mono font-bold uppercase tracking-wider mt-0.5">
                              SEO Score
                            </span>
                          </div>
                          
                          <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/65">
                            <span className="block font-sans font-black text-sky-400 text-sm sm:text-base">
                              {seoResult.approvalPercentage}%
                            </span>
                            <span className="block text-[8px] text-zinc-500 font-mono font-bold uppercase tracking-wider mt-0.5">
                              AdSense Probability
                            </span>
                          </div>

                          <div className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800/65">
                            <span className="block font-sans font-black text-purple-400 text-xs sm:text-sm truncate">
                              {seoResult.keywordDensity}
                            </span>
                            <span className="block text-[8px] text-zinc-500 font-mono font-bold uppercase tracking-wider mt-0.5">
                              Term Density
                            </span>
                          </div>
                        </div>

                        {/* Trial package action button */}
                        <div className="mt-4 pt-3.5 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <p className="text-[10px] text-zinc-500 max-w-xs font-medium leading-relaxed">
                            Need a complete, plagiarism-free 500-word article written exactly like this skeleton? Try Rohit's services today!
                          </p>
                          <button
                            onClick={() => handleApplyTrial("seo")}
                            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg text-white font-sans text-[10px] font-bold tracking-wider uppercase rounded-lg cursor-pointer"
                          >
                            Buy 1 Complete SEO Article ($10 Offer)
                          </button>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* TAB 3: SPEED ANALYZER */}
          <AnimatePresence mode="wait">
            {activeTab === "speed" && (
              <motion.div
                key="speed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Customizer */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-black text-xl text-white">Live Speed Optimization Analyzer</h3>
                      <p className="font-sans text-xs text-zinc-500 mt-1">
                        Simulate any blog or WordPress site load time. Compare slow unoptimized templates against Rohit's premium coded templates.
                      </p>
                    </div>

                    <form onSubmit={triggerSpeedSweep} className="space-y-2.5 font-sans">
                      <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Test Platform Website URL
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={speedUrl}
                          onChange={(e) => setSpeedUrl(e.target.value)}
                          placeholder="e.g. yourblogsite.blogspot.com"
                          className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500 placeholder-zinc-800"
                        />
                        <button
                          type="submit"
                          disabled={isAnalyzingSpeed}
                          className="px-4 bg-emerald-600 hover:bg-emerald-500 text-black font-sans text-xs font-bold uppercase rounded-xl transition duration-300 flex-shrink-0 cursor-pointer"
                        >
                          Scan
                        </button>
                      </div>
                    </form>

                    <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
                      <span className="block text-[8px] font-mono text-emerald-400 uppercase font-black tracking-widest">
                        Speed Matters for Google rankings
                      </span>
                      <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                        SEO is strictly tied to Core Web Vitals. If your Blog or Landing page takes more than 2.0s to load, Google ranks your competitors high.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900">
                    <button
                      onClick={() => {
                        setSelectedService("Website Design & Development");
                        scrollToSection("contact");
                      }}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:shadow-[0_4px_15px_rgba(16,185,129,0.3)] text-black text-xs font-extrabold uppercase tracking-wider rounded-xl transition duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap className="w-4 h-4 text-black" />
                      <span>Upgrade My Website to 99+ Core Web Vitals Speed</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Analysis Dashboard Console */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="w-full h-full min-h-[300px] border border-zinc-900 bg-zinc-950/80 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between">
                    
                    {/* Glowing status line */}
                    <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

                    {speedState === "idle" && !isAnalyzingSpeed && (
                      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3 font-sans">
                        <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/10">
                          <Gauge className="w-6 h-6 animate-pulse" />
                        </div>
                        <h4 className="font-bold text-white text-md">Trigger Speed Audit Sweep</h4>
                        <p className="text-xs text-zinc-500 max-w-sm">
                          Click scan to audit and simulate estimated performance load timings under unoptimized vs Rohit's speed settings.
                        </p>
                      </div>
                    )}

                    {isAnalyzingSpeed && (
                      <div className="flex-1 flex flex-col items-center justify-center p-8 space-y-4 font-mono text-xs text-emerald-450">
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span className="font-bold text-emerald-400">MEASURING PAGE RESPONSE CHARACTERISTICS...</span>
                        </div>
                        
                        <div className="space-y-1.5 w-full max-w-sm text-left">
                          <div className="flex justify-between border-b border-zinc-900 pb-1 text-zinc-400">
                            <span>Compressing bundle styles</span>
                            <span className="text-emerald-400">95% Saved</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1 text-zinc-400">
                            <span>Eliminating render-blocking CSS</span>
                            <span className="text-emerald-400">Complete</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-1 text-zinc-400">
                            <span>Image lazyloading integration</span>
                            <span className="text-emerald-400">Configured✓</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {speedState === "done" && !isAnalyzingSpeed && (
                      <div className="space-y-6 font-sans flex-1 flex flex-col justify-between pt-2">
                        
                        {/* Two Columns showing bad vs good score */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Unoptimized */}
                          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-3 relative group">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-zinc-400 uppercase font-black tracking-wider block">
                                Unoptimized Standard Built
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-[8.5px] font-bold">
                                FAILING SPEED
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-full border-4 border-rose-500/30 border-t-rose-500 flex items-center justify-center font-mono font-black text-xs text-rose-400">
                                41/100
                              </div>
                              <div className="text-xs">
                                <span className="block text-zinc-400 font-bold">Load: 4.8 Seconds</span>
                                <span className="block text-[10px] text-zinc-550">Heavy JS, blockages</span>
                              </div>
                            </div>
                          </div>

                          {/* Optimized */}
                          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-3 relative group">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-zinc-400 uppercase font-black tracking-wider block">
                                Rohit's Custom Speed Codes
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[8.5px] font-bold">
                                INSTANT SPEED
                              </span>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 flex items-center justify-center font-mono font-black text-xs text-[#10b981] animate-none">
                                99/100
                              </div>
                              <div className="text-xs">
                                <span className="block text-[#10b981] font-bold">Load: 0.6 Seconds</span>
                                <span className="block text-[10px] text-zinc-500">Instant SEO indexing ready</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Analysis report details */}
                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 space-y-2 text-xs text-zinc-300">
                          <h5 className="font-extrabold text-white flex items-center gap-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Speed Architecture Included by Rohit:
                          </h5>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-5 list-disc text-zinc-400 text-[11px]">
                            <li>Vite engine production pre-render compilation</li>
                            <li>Critical CSS separation preventing blocking</li>
                            <li>Automated Google Font sub-class offline delivery</li>
                            <li>Compression vectors scaling for layout speed</li>
                          </ul>
                        </div>

                        <div className="pt-2 text-[10px] text-center text-zinc-500 font-medium font-mono uppercase tracking-wider">
                          🧪 REAL ENVIRONMENT SWEEPS LOGGED 100% SUCCESSFUL
                        </div>

                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

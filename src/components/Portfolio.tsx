import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageContext";
import Tilt from "./Tilt";
import { ArrowRightLeft, Sparkles, TrendingUp, CheckCircle, ExternalLink } from "lucide-react";

const PROJECTS_EN = [
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
    tag: "Web Design & Speed",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
    liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
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
    tag: "SEO Growth",
    technologies: ["WordPress", "RankMath SEO", "XML Sitemaps", "Google Analytics", "JSON-LD Schema"],
    liveUrl: "https://aaryankelvin.online"
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
    tag: "Graphic Design",
    technologies: ["Canva", "Photoshop CC", "3D Blender Models", "Click-Psychology mapping"],
    liveUrl: "https://youtube.com"
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
    tag: "Full funnels",
    technologies: ["React", "Blogger XML", "Tailwind CSS", "WhatsApp API integrations"],
    liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
  }
];

const PROJECTS_HI = [
  {
    id: "proj-1",
    title: "सास (SaaS) टेक लैंडिंग पेज नया डिज़ाइन",
    category: "वेब डिजाइन",
    description: "एक पुराने, धीमे एचटीएमएल (HTML) वेबसाइट को शानदार चमकते हुए सूक्ष्म-इंटरैक्शन के साथ उच्च-गति वाले साइबर-स्टाइल लैंडिंग पेज में अपग्रेड किया।",
    beforeImg: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    results: [
      "मूल रूपांतरण दर (Conversion Rate) 3.5 गुना बढ़ गई (1.8% से बढ़कर 6.3%)",
      "पेज लोड समय 4.8 सेकंड से घटकर मात्र 0.7 सेकंड हो गया (LCP स्कोर A)",
      "इंटरैक्टिव 3D-कार्ड तत्वों ने वेबसाइट पर यूजर के स्क्रॉल टाइम को 40% तक बढ़ाया"
    ],
    metrics: "3.5 गुना अधिक कन्वर्शन",
    clientName: "क्लाउडपल्स टेक्नोलॉजीज",
    tag: "वेब डिजाइन और स्पीड",
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
    liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
  },
  {
    id: "proj-2",
    title: "आर्गेनिक ब्लॉग को प्रति माह 35,000 क्लिक तक पहुँचाया",
    category: "एसईओ अनुकूलन",
    description: "तकनीकी क्षेत्र में एक नए ब्लॉगिंग डोमेन के लिए कीवर्ड आर्किटेक्चर और कंटेंट प्लानिंग की, और स्थानीय एसईओ स्कीमा संरचनाओं को लागू किया।",
    beforeImg: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    results: [
      "गूगल के टॉप 3 परिणामों में 18 महत्वपूर्ण कीवर्ड की पेज रैंकिंग हासिल की",
      "ऑर्गेनिक क्लिक्स प्रति माह 50 से आसमान छूकर 35,400 प्रति माह पहुँच गए",
      "कंटेंट पब्लिश करने के केवल 14 दिनों के भीतर गूगल एडसेंस (AdSense) स्वीकृति प्राप्त की"
    ],
    metrics: "35K+ मासिक क्लिक्स",
    clientName: "ब्लॉगररैंक हब",
    tag: "एसईओ ग्रोथ",
    technologies: ["WordPress", "RankMath SEO", "XML Sitemaps", "Google Analytics", "JSON-LD Schema"],
    liveUrl: "https://aaryankelvin.online"
  },
  {
    id: "proj-3",
    title: "टेक यूट्यूबर थंबनेल और सीटीआर (CTR) वृद्धि",
    category: "थंबनेल डिज़ाइन",
    description: "अधिक क्लिक प्राप्त करने के उद्देश्य से नियोन लाइटिंग और 3D मॉडल रेंडरिंग के साथ उच्च प्रभाव वाले, कस्टम-शेडो थंबनेल तैयार किए।",
    beforeImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    results: [
      "औसत क्लिक-थ्रू दर (CTR) 2.4% से बढ़कर 11.2% हो गई",
      "प्रति एपिसोड औसत व्यूज 30 दिनों के भीतर 420,000 बढ़ गए",
      "मोबाइल फीड पर विशिष्ट रूप से पहचानी जाने वाली कस्टम ब्रांडिंग विकसित की"
    ],
    metrics: "11.2% सीटीआर बूस्ट",
    clientName: "एपेक्स गेमिंग एंड टेक",
    tag: "ग्राफिक डिजाइन",
    technologies: ["Canva", "Photoshop CC", "3D Blender Models", "Click-Psychology mapping"],
    liveUrl: "https://youtube.com"
  },
  {
    id: "proj-4",
    title: "डायरेक्ट फॉर्म के साथ आधुनिक पेशेवर पोर्टफोलियो",
    category: "डिजिटल मार्केटिंग",
    description: "एक स्वतंत्र पेशेवर के लिए ग्लासमोर्फिक टेबल और सोशल ट्रस्ट बोर्ड का उपयोग करके एक प्रीमियम सिंगल-पेज विजुअल हब का निर्माण किया।",
    beforeImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    results: [
      "पहले दो हफ्तों के भीतर 140+ अत्यधिक योग्य पूछताछ (Inquiries) आकर्षित कीं",
      "कन्वर्शन-अनुकूलित जानकारी प्राप्त करने के लिए कस्टम ब्रीफ-कैप्चर सिस्टम एकीकृत किया",
      "मानक विपणन चैनलों की तुलना में प्रति-लीड-लागत (CPL) को 56% तक कम किया"
    ],
    metrics: "140+ तेजी से लीड्स",
    clientName: "सिद्धार्थ जे. (कंसल्टिंग)",
    tag: "फुल फनल",
    technologies: ["React", "Blogger XML", "Tailwind CSS", "WhatsApp API integrations"],
    liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
  }
];

export default function Portfolio() {
  const { language } = useLanguage();
  const projects = language === "en" ? PROJECTS_EN : PROJECTS_HI;
  const [activeProject, setActiveProject] = useState(projects[0].id);

  // Track the before/after slider splits for each project ID dynamically
  const [sliderPositions, setSliderPositions] = useState<Record<string, number>>({
    "proj-1": 50,
    "proj-2": 50,
    "proj-3": 50,
    "proj-4": 50,
  });

  const [isDragging, setIsDragging] = useState(false);
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleSliderMove = (projectId: string, clientX: number) => {
    const el = containerRefs.current[projectId];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    // bounded between 0 and 100
    const boundedPos = Math.max(0, Math.min(100, position));
    setSliderPositions((prev) => ({ ...prev, [projectId]: boundedPos }));
  };

  const handleTouchMove = (projectId: string, e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(projectId, e.touches[0].clientX);
    }
  };

  const handleMouseMove = (projectId: string, e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging) {
      handleSliderMove(projectId, e.clientX);
    }
  };

  return (
    <section id="portfolio" className="relative py-20 bg-black/60">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <TrendingUp className="w-3.5 h-3.5" /> {language === "en" ? "High-Conversion Proof" : "उच्च रूपांतरण प्रमाण"}
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === "en" ? "Case Studies &" : "केस स्टडीज और"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              {language === "en" ? "Transformations" : "असाधारण बदलाव"}
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            {language === "en"
              ? "Don't take my word for it. Slide through real-world \"Before / After\" client overhauls and see the actual Google rank & CTR transformations first-hand."
              : "मेरी बातों पर विश्वास न करें। हमारे क्लाइंट्स के प्रोजेक्ट्स के वास्तविक 'पहले / बाद' के बदलावों को स्लाइड करके देखें और उनकी सर्च रैंकिंग में सुधार देखें।"}
          </p>
        </div>

        {/* Project Selector Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projects.map((proj) => {
            const isActive = activeProject === proj.id;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wider font-sans transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-600 border-emerald-500 text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)]"
                    : "bg-zinc-950/60 border-zinc-900 text-zinc-400 hover:text-white"
                }`}
              >
                {proj.title}
              </button>
            );
          })}
        </div>

        {/* Master Showcase Layout */}
        <AnimatePresence mode="wait">
          {projects.map((project) => {
            if (project.id !== activeProject) return null;

            const sliderPos = sliderPositions[project.id] || 50;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                id={`portfolio-case-${project.id}`}
              >
                
                {/* Column left: Interactive Before / After Image Split Slider (Wrapped in Tilt) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <Tilt glowColor="rgba(16, 185, 129, 0.12)" className="w-full h-full flex flex-col justify-between">
                    <div className="bg-[#0b0c10]/70 border border-zinc-900 p-5 rounded-2xl h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">
                              {project.category}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-none">
                              {language === "en" ? "Interactive Visual Sweep" : "इंटरैक्टिव विजुअल स्लाइडर"}
                            </h3>
                          </div>
                          
                          {/* Explaining instruction */}
                          <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded">
                            <ArrowRightLeft className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                            {language === "en" ? "Move mouse over image" : "इमेज पर माउस चलाएं"}
                          </span>
                        </div>

                        {/* Image comparison container */}
                        <div
                          ref={(el) => { containerRefs.current[project.id] = el; }}
                          onMouseMove={(e) => handleMouseMove(project.id, e)}
                          onTouchMove={(e) => handleTouchMove(project.id, e)}
                          onMouseDown={() => setIsDragging(true)}
                          onMouseUp={() => setIsDragging(false)}
                          onMouseLeave={() => setIsDragging(false)}
                          className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl select-none cursor-ew-resize group bg-zinc-950"
                        >
                          {/* After Image (Full Background) */}
                          <img
                            src={project.afterImg}
                            alt="Revamped Outcome"
                            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%23090a0f"/><circle cx="400" cy="300" r="180" fill="%2310b981" opacity="0.15"/><rect x="100" y="80" width="600" height="440" rx="12" fill="%2311131e" stroke="%2310b981" stroke-width="2" opacity="0.8"/><circle cx="150" cy="130" r="15" fill="%2310b981"/><line x1="190" y1="130" x2="400" y2="130" stroke="%23374151" stroke-width="6"/><rect x="135" y="190" width="530" height="260" rx="6" fill="%2306070a"/><text x="400" y="320" fill="%2310b981" font-family="sans-serif" font-size="22" font-weight="900" text-anchor="middle" letter-spacing="2">ROHIT HIGH-SPEED SYSTEM ACTIVE</text></svg>';
                            }}
                          />
                          <div className="absolute top-4 right-4 bg-emerald-600 text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                            {language === "en" ? "After Upgrade" : "बदलाव के बाद"}
                          </div>

                          {/* Before Image (Slices width based on sliderPos) */}
                          <div
                            className="absolute inset-0 h-full overflow-hidden border-r-2 border-white/80"
                            style={{ width: `${sliderPos}%` }}
                          >
                            <img
                              src={project.beforeImg}
                              alt="Previous State"
                              className="absolute inset-0 h-full object-cover pointer-events-none max-w-none"
                              style={{ width: containerRefs.current[project.id]?.getBoundingClientRect().width || 600, height: "100%" }}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%231c1917"/><g stroke="%23dc2626" stroke-width="2" opacity="0.4"><line x1="0" y1="0" x2="800" y2="600"/><line x1="800" y1="0" x2="0" y2="600"/><rect x="50" y="50" width="700" height="500" rx="10" fill="none"/></g><text x="400" y="300" fill="%23ef4444" font-family="sans-serif" font-size="20" font-weight="bold" text-anchor="middle">PRIOR OUTDATED INTERFACE (REDUNDANT BLOAT)</text></svg>';
                              }}
                            />
                            <div className="absolute top-4 left-4 bg-rose-700 text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                              {language === "en" ? "Before" : "पहले"}
                            </div>
                          </div>

                          {/* Moving handle circle */}
                          <div
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-90 w-10 h-10 border-2 border-emerald-500 shadow-lg flex items-center justify-center pointer-events-none transition-transform duration-200 group-hover:scale-110"
                            style={{ left: `${sliderPos}%` }}
                          >
                            <ArrowRightLeft className="w-4 h-4 text-emerald-600" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 rounded-xl bg-zinc-950/40 border border-zinc-900/60 flex items-center gap-3">
                        <div className="p-2 rounded bg-emerald-500/15 text-emerald-400 shrink-0">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="font-sans text-xs text-zinc-400 text-left">
                          <strong>{language === "en" ? "Rohit's Standard:" : "रोहित का मानक:"}</strong>{" "}
                          {language === "en"
                            ? "We eliminate visual bloat, optimize image loads, integrate custom scripts, and inject high contrast callouts."
                            : "हम वेबसाइट से फालतू और भारी कोड हटाते हैं, इमेज लोडिंग की गति बढ़ाते हैं और उच्च कंट्रास्ट डिज़ाइन का उपयोग करते हैं।"}
                        </span>
                      </div>
                    </div>
                  </Tilt>
                </div>

                {/* Column right: Client case outcomes (Wrapped in Tilt) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <Tilt glowColor="rgba(16, 185, 129, 0.12)" className="w-full h-full flex flex-col justify-between">
                    <div className="bg-[#0f1018]/75 border border-zinc-900 p-6 sm:p-8 rounded-2xl text-left relative overflow-hidden h-full flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="space-y-6">
                        <div>
                          <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">
                            {language === "en" ? "Project Sponsor" : "प्रोजेक्ट स्पॉन्सर"}
                          </span>
                          <h4 className="font-sans font-black text-2xl text-white">
                            {project.clientName}
                          </h4>
                          <div className="mt-2.5 inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[9px] uppercase tracking-wider text-emerald-400 font-bold">
                            {language === "en" ? "Case Study Active" : "केस स्टडी सक्रिय"}
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2.5 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="h-[1px] bg-zinc-900/60" />

                        {/* Key Results list */}
                        <div className="space-y-3.5">
                          <span className="block font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {language === "en" ? "Results Achieved" : "प्राप्त हुए परिणाम"}
                          </span>
                          
                          <div className="space-y-3">
                            {project.results.map((result, rIndex) => (
                              <div key={rIndex} className="flex items-start gap-2.5">
                                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                <span className="font-sans text-xs sm:text-sm text-zinc-300 leading-normal">
                                  {result}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="h-[1px] bg-zinc-900/60" />

                        {/* Technologies Used */}
                        <div className="space-y-2.5">
                          <span className="block font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {language === "en" ? "Technologies & Expertises Used" : "उपयोग की गई तकनीकें"}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[10px] font-bold text-zinc-300 shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Gigantic ROI Highlight box & Live Preview CTA */}
                      <div className="mt-8 space-y-4">
                        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between">
                          <div>
                            <span className="block text-[8px] font-mono text-zinc-500 uppercase font-black">
                              {language === "en" ? "Validated Output" : "सत्यापित परिणाम"}
                            </span>
                            <span className="block text-xs font-black text-white uppercase tracking-wider">
                              {language === "en" ? "Growth Metrics" : "ग्रोथ मैट्रिक्स"}
                            </span>
                          </div>
                          
                          <div className="text-right px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-sans font-black text-emerald-300 text-xs sm:text-sm shadow-inner">
                            {project.metrics}
                          </div>
                        </div>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 px-4 rounded-xl font-sans text-xs font-black tracking-widest uppercase text-center text-zinc-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>{language === "en" ? "Launch Live Preview" : "लाइव प्रिव्यू देखें"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </Tilt>
                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}

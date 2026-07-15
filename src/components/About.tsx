import React from "react";
import { motion } from "motion/react";
import { 
  Monitor, 
  Search, 
  Youtube, 
  PenTool, 
  Megaphone, 
  Clock, 
  Star, 
  Zap, 
  Users, 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Award, 
  Languages,
  CheckCircle2,
  Cpu,
  Smartphone,
  Globe,
  Settings,
  Sparkles,
  Layers,
  BookOpen,
  Laptop
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
// @ts-ignore
import profilePic from "../assets/images/rohit_founder_1781870842914.jpg";

export default function About() {
  const { language, t } = useLanguage();

  const skills = language === "en" ? [
    {
      title: "YouTube Thumbnail Design",
      subtitle: "High CTR CTR Magnets with 3D Pop",
      icon: Youtube,
      progress: "98%",
      color: "from-red-500 to-orange-400",
      accent: "rgba(239, 68, 68, 0.4)",
      description: "Custom eye-catching thumbnails with advanced saturation matrices, high-contrast typography, and character outline glow effects engineered to drive instantaneous clicks."
    },
    {
      title: "Reels Cover Design",
      subtitle: "Viral Scroll-Stopping Covers",
      icon: Smartphone,
      progress: "95%",
      color: "from-pink-500 to-rose-400",
      accent: "rgba(244, 63, 94, 0.4)",
      description: "Aesthetically pleasing vertical cover graphics engineered with safe-zone guides, premium fonts, and high-retention titles to match your brand's narrative."
    },
    {
      title: "WordPress Development",
      subtitle: "High-Speed Business Platforms",
      icon: Globe,
      progress: "97%",
      color: "from-blue-500 to-indigo-500",
      accent: "rgba(59, 130, 246, 0.4)",
      description: "Pixel-perfect multi-functional WordPress sites utilizing high-performance blocks, custom element builders, dynamic page structures, and secure plugins."
    },
    {
      title: "Blogger Customization",
      subtitle: "Premium Lightweight Layouts",
      icon: Laptop,
      progress: "96%",
      color: "from-orange-500 to-amber-500",
      accent: "rgba(245, 158, 11, 0.4)",
      description: "Ultra-fast custom XML template coding, theme tuning, high-end layouts, AdSense ad placement mapping, and clean structural optimization for blogger templates."
    },
    {
      title: "SEO Optimization",
      subtitle: "Google Page 1 Ranking Domination",
      icon: Search,
      progress: "98%",
      color: "from-emerald-500 to-teal-400",
      accent: "rgba(16, 185, 129, 0.4)",
      description: "Implementing JSON-LD schemas, transactional keyword clusters, organic sitemap hierarchy, Core Web Vitals audit fixes, and lightning-fast loading."
    },
    {
      title: "AI Website Development",
      subtitle: "Vercel-Grade Luxury Interfaces",
      icon: Sparkles,
      progress: "96%",
      color: "from-purple-500 to-pink-400",
      accent: "rgba(168, 85, 247, 0.4)",
      description: "Deploying rapid modern glassmorphic web apps built in Vite, React, and Tailwind CSS. Implementing interactive floating states and responsive agency layouts."
    },
    {
      title: "Content Strategy",
      subtitle: "AdSense-Friendly Writing Silos",
      icon: BookOpen,
      progress: "94%",
      color: "from-cyan-500 to-blue-400",
      accent: "rgba(6, 182, 212, 0.4)",
      description: "Structuring high-value blog posts, topical maps, internal linking patterns, and semantic SEO frameworks designed for AdSense approval and real user value."
    },
    {
      title: "Social Media Growth",
      subtitle: "Viral Content Multipliers",
      icon: Megaphone,
      progress: "93%",
      color: "from-violet-500 to-fuchsia-400",
      accent: "rgba(139, 92, 246, 0.4)",
      description: "Comprehensive social assets, post copy templates, interactive carousels, and visual theme consistency to build real brand authority and audience loyalty."
    },
    {
      title: "Automation Solutions",
      subtitle: "Workflow Speed & Cost Efficiency",
      icon: Layers,
      progress: "92%",
      color: "from-teal-500 to-emerald-400",
      accent: "rgba(20, 184, 166, 0.4)",
      description: "Connecting custom API integrations, automating content distribution schedules, and utilizing advanced ChatGPT/Claude prompts to reduce manual hours."
    }
  ] : [
    {
      title: "यूट्यूब थंबनेल डिज़ाइन",
      subtitle: "3D पॉप वाले हाई CTR मैग्नेट्स",
      icon: Youtube,
      progress: "98%",
      color: "from-red-500 to-orange-400",
      accent: "rgba(239, 68, 68, 0.4)",
      description: "कस्टम आकर्षक थंबनेल्स जो एडवांस सैचुरेशन मैट्रिसेस, हाई-कंट्रास्ट टाइपोग्राफी और करैक्टर आउटलाइन ग्लो इफेक्ट्स के साथ क्लिक्स बढ़ाने के लिए बनाए गए हैं।"
    },
    {
      title: "रील्स कवर डिज़ाइन",
      subtitle: "वायरल स्क्रॉल-स्टॉपिंग कवर्स",
      icon: Smartphone,
      progress: "95%",
      color: "from-pink-500 to-rose-400",
      accent: "rgba(244, 63, 94, 0.4)",
      description: "ब्रांड की कहानी से मेल खाने वाले प्रीमियम फॉन्ट, सेफ-जोन गाइड्स और हाई-रिटेंशन टाइटल्स से सुसज्जित आकर्षक वर्टिकल रील्स कवर ग्राफिक्स।"
    },
    {
      title: "वर्डप्रेस डेवलपमेंट",
      subtitle: "हाई-स्पीड बिजनेस प्लेटफॉर्म्स",
      icon: Globe,
      progress: "97%",
      color: "from-blue-500 to-indigo-500",
      accent: "rgba(59, 130, 246, 0.4)",
      description: "हाई-परफॉर्मेंस ब्लॉक्स, कस्टम एलिमेंट बिल्डर्स, डायनेमिक पेज स्ट्रक्चर्स और सुरक्षित प्लगइन्स का उपयोग करके बनाई गई वर्डप्रेस साइटें।"
    },
    {
      title: "ब्लॉगर कस्टमाइज़ेशन",
      subtitle: "प्रीमियम लाइटवेट लेआउट्स",
      icon: Laptop,
      progress: "96%",
      color: "from-orange-500 to-amber-500",
      accent: "rgba(245, 158, 11, 0.4)",
      description: "ब्लॉगर टेम्पलेट्स के लिए अल्ट्रा-फास्ट कस्टम XML टेम्पलेट कोडिंग, थीम ट्यूनिंग, एडसेंस विज्ञापन प्लेसमेंट मैपिंग और क्लीन स्ट्रक्चरल ऑप्टिमाइजेशन।"
    },
    {
      title: "एसईओ अनुकूलन (SEO)",
      subtitle: "गूगल पेज 1 रैंकिंग प्रभुत्व",
      icon: Search,
      progress: "98%",
      color: "from-emerald-500 to-teal-400",
      accent: "rgba(16, 185, 129, 0.4)",
      description: "गूगल क्रॉलर्स के लिए JSON-LD स्कीमा, ट्रांजैक्शनल कीवर्ड क्लस्टर्स, ऑर्गेनिक साइटमैप हायरार्की और कोर वेब वाइटल्स स्पीड ऑडिट।"
    },
    {
      title: "एआई वेबसाइट डेवलपमेंट",
      subtitle: "शानदार आधुनिक इंटरफेस",
      icon: Sparkles,
      progress: "96%",
      color: "from-purple-500 to-pink-400",
      accent: "rgba(168, 85, 247, 0.4)",
      description: "Vite, React और Tailwind CSS का उपयोग करके बनाए गए ग्लासमोर्फिक वेब ऐप्स। स्मूथ फ्लोटिंग स्टेट्स और फुली रेस्पॉन्सिव आधुनिक फनल्स।"
    },
    {
      title: "कंटेंट रणनीति (Content Strategy)",
      subtitle: "एडसेंस-फ्रेंडली राइटिंग साइलोस",
      icon: BookOpen,
      progress: "94%",
      color: "from-cyan-500 to-blue-400",
      accent: "rgba(6, 182, 212, 0.4)",
      description: "गूगल एडसेंस अप्रूवल और रियल यूजर वैल्यू के लिए हाई-वैल्यू ब्लॉग पोस्ट्स, टॉपिकल मैप्स और इंटरनल लिंकिंग पैटर्न्स की पूरी प्लानिंग।"
    },
    {
      title: "सोशल मीडिया ग्रोथ",
      subtitle: "वायरल कंटेंट मल्टीप्लायर्स",
      icon: Megaphone,
      progress: "93%",
      color: "from-violet-500 to-fuchsia-400",
      accent: "rgba(139, 92, 246, 0.4)",
      description: "ब्रांड अथॉरिटी और सोशल प्रेजेंस स्थापित करने के लिए व्यापक सोशल मीडिया एसेट्स, वायरल पोस्ट कॉपी और आकर्षक कैरोसेल डिज़ाइन्स।"
    },
    {
      title: "ऑटोमेशन समाधान",
      subtitle: "समय और लागत की बचत",
      icon: Layers,
      progress: "92%",
      color: "from-teal-500 to-emerald-400",
      accent: "rgba(20, 184, 166, 0.4)",
      description: "कस्टम एपीआई इंटीग्रेशन, ऑटोमेटेड कंटेंट डिस्ट्रीब्यूशन और उन्नत ChatGPT/Claude प्रॉम्प्ट्स का उपयोग करके मैनुअल काम को 90% तक कम करना।"
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-black/40">
      {/* Visual neon light gradient strips */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase tracking-widest font-bold"
          >
            <Zap className="w-3.5 h-3.5" /> {language === "en" ? "Core Biography" : "मुख्य परिचय"}
          </motion.div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === "en" ? "The Digital Maverick Behind" : "ग्रोथ के पीछे का"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {language === "en" ? "Your Growth" : "डिजिटल मास्टरमाइंड"}
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            {language === "en" 
              ? "Engineered with modern Apple and Vercel-inspired designs, I deliver pixel-perfect digital experiences, advanced search engine optimizations, and high-impact custom assets for brands."
              : "एप्पल और वर्सेल डिज़ाइनों से प्रेरित, मैं आपके ब्रांड के लिए पिक्सेल-परफेक्ट डिजिटल अनुभव, उन्नत सर्च इंजन ऑप्टिमाइजेशन और हाई-कन्वर्टिंग एसेट्स वितरित करता हूँ।"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography Pitch Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900/80 backdrop-blur-sm space-y-6">
              
              {/* Profile Bio Headshot Image Badge */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <div className="w-full h-full bg-zinc-900 overflow-hidden rounded-[14px]">
                  <img 
                    src={profilePic} 
                    alt="Rohit Kumar Nagar" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 pointer-events-none z-10">
                  <span className="text-[8px] font-bold text-[#10b981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse" /> {language === "en" ? "Active" : "सक्रिय"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans font-black text-xl text-white">
                  Rohit Kumar Nagar
                </h3>
                <p className="font-mono text-xs text-purple-400 uppercase tracking-widest leading-none">
                  {language === "en" ? "AI Specialist & Growth Architect" : "एआई विशेषज्ञ और ग्रोथ आर्किटेक्ट"}
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {language === "en"
                  ? "As a high-speed digital growth architect, I deliver top-tier platforms that rank number one, drive high-CTR clicks, and optimize custom AI algorithms. Combining an analytical engineering mindset with high-conversion creative strategy, I provide remote-ready execution, problem-solving speed, and fast learning capabilities for clients worldwide."
                  : "एक हाई-स्पीड डिजिटल ग्रोथ आर्किटेक्ट के रूप में, मैं बेहतरीन वेबसाइट्स बनाता हूँ जो गूगल पर नंबर 1 रैंक करती हैं, थंबनेल्स बनाता हूँ जो हाई-CTR क्लिक लाते हैं, और कस्टम एआई एल्गोरिदम ऑप्टिमाइज़ करता हूँ। गंभीर तकनीकी दृष्टिकोण के साथ कलात्मक कौशल का संयोजन करके, मैं वर्ल्डवाइड क्लाइंट्स को सुपरफास्ट और उत्कृष्ट डेलिवरी प्रदान करता हूँ।"}
              </p>

              {/* Core Executive Highlights Badge Grid */}
              <div className="pt-2">
                <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-black mb-2.5">
                  {language === "en" ? "Core Executive Profile Highlights" : "मुख्य प्रोफाइल हाइलाइट्स"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(language === "en" ? [
                    "30+ Freelance Projects",
                    "Web Development",
                    "SEO",
                    "Content Writing",
                    "Graphic Design",
                    "AI Tools",
                    "WordPress",
                    "Problem Solving",
                    "Remote Ready",
                    "Fast Learner"
                  ] : [
                    "30+ फ्रीलांस प्रोजेक्ट्स",
                    "वेब डेवलपमेंट",
                    "गूगल एसईओ",
                    "कंटेंट राइटिंग",
                    "ग्राफिक डिज़ाइन",
                    "एआई टूल्स",
                    "वर्डप्रेस विशेषज्ञ",
                    "प्रॉब्लम सॉल्विंग",
                    "रिमोट रेडी",
                    "फास्ट लर्नर"
                  ]).map((highlight, idx) => (
                    <span 
                      key={idx} 
                      className="text-[9px] font-mono font-bold bg-blue-500/10 hover:bg-blue-500/15 text-blue-400 dark:text-blue-300 px-2.5 py-1 rounded-full border border-blue-500/20 shadow-sm transition-colors cursor-default"
                    >
                      ✦ {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instant Trust Key Metrics Rows */}
              <div className="space-y-3 pt-3 border-t border-zinc-900">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-zinc-900 text-yellow-400">
                    <Star className="w-4 h-4 fill-yellow-400" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">{language === "en" ? "5-Star Standards" : "5-स्टार गुणवत्ता"}</div>
                    <div className="text-zinc-500 text-[10px]">{language === "en" ? "Client satisfaction focus" : "पूर्ण क्लाइंट संतुष्टि पर ध्यान"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-zinc-900 text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">{language === "en" ? "24-Hour Deliveries" : "24-घंटे एक्सप्रेस डेलिवरी"}</div>
                    <div className="text-zinc-500 text-[10px]">{language === "en" ? "On thumbnails & design specs" : "थंबनेल्स और डिज़ाइन ड्राफ्ट्स पर"}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-zinc-900 text-green-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">{language === "en" ? "100% Custom Work" : "100% मूल कार्य"}</div>
                    <div className="text-zinc-500 text-[10px]">{language === "en" ? "No lazy copy-paste templates" : "कोई नकली कॉपी-पेस्ट काम नहीं"}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Skills Cards Grid Column */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-sans text-xs font-black uppercase text-zinc-500 tracking-widest pl-2 mb-2">
              {language === "en" ? "Rohit's core skill expertise" : "रोहित की मुख्य कौशल विशेषज्ञता"}
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const SkillIcon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ scale: 1.01 }}
                    className="group relative p-5 sm:p-6 rounded-2xl bg-zinc-950/40 border border-zinc-900 hover:border-purple-500/20 backdrop-blur-md overflow-hidden transition-all duration-300"
                    style={{
                      boxShadow: `0 4px 30px rgba(0, 0, 0, 0.4)`
                    }}
                  >
                    {/* Glowing background spot on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 100px 50px, ${skill.accent}, transparent)`
                      }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Left: Icon and Name Details */}
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-tr ${skill.color} text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                          <SkillIcon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans font-black text-white text-base">
                            {skill.title}
                          </h4>
                          <span className="inline-block text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-400">
                            {skill.subtitle}
                          </span>
                        </div>
                      </div>

                      {/* Right: Metric Badge Tracker */}
                      <div className="flex items-center gap-2">
                        <div className="text-right hidden sm:block">
                          <div className="font-mono text-xs font-bold text-gray-300">{language === "en" ? "Expertise Level" : "विशेषज्ञता स्तर"}</div>
                          <div className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">{language === "en" ? "Perfected" : "सर्वोत्कृष्ट"}</div>
                        </div>
                        <div className={`px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${skill.color}`}>
                          {skill.progress}
                        </div>
                      </div>

                    </div>

                    {/* Service bio text */}
                    <p className="mt-4 font-sans text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Progress thin border element */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-zinc-900 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} w-0 group-hover:w-full transition-all duration-700`}
                        style={{ width: skill.progress }}
                      />
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* --- OFFICIAL RESUME & CREDENTIALS SUBSECTION --- */}
        <div className="mt-24 pt-16 border-t border-zinc-900/80 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10b981] font-mono text-[10px] uppercase tracking-widest font-black">
              <Award className="w-3.5 h-3.5" /> {language === "en" ? "Verified Qualifications" : "सत्यापित योग्यताएं"}
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-black text-white tracking-tight">
              {language === "en" ? "Professional Resume & Education" : "व्यावसायिक बायोडाटा और शिक्षा"}
            </h3>
            <p className="font-sans text-zinc-400 text-xs sm:text-sm">
              {language === "en" 
                ? "An optimal blend of technical electronics discipline and digital marketing expertise."
                : "तकनीकी इलेक्ट्रॉनिक्स अनुशासन और डिजिटल मार्केटिंग विशेषज्ञता का एक अद्भुत मिश्रण।"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            
            {/* COLUMN 1: REMOTE FREELANCE EXPERIENCE */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-900">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <h4 className="font-sans font-black text-white text-lg">{language === "en" ? "Freelance Milestones" : "फ्रीलांस उपलब्धियां"}</h4>
                <span className="ml-auto text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">
                  2024 - Present
                </span>
              </div>

              <div className="space-y-4">
                {/* Milestone 1 */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-purple-500/10 text-purple-400 font-mono text-xs font-black">
                    30+
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="font-sans font-bold text-white text-sm">{language === "en" ? "Completed Freelance Projects" : "पूरे किए गए फ्रीलांस प्रोजेक्ट्स"}</h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {language === "en"
                        ? "Executed a versatile portfolio of remote client contracts covering high-conversion landing page design, WordPress/Blogger optimization, and custom graphic layouts."
                        : "हाई-कन्वर्शन लैंडिंग पेज डिज़ाइन, वर्डप्रेस/ब्लॉगर ऑप्टिमाइज़ेशन और कस्टम ग्राफ़िक लेआउट को कवर करने वाले रिमोट क्लाइंट कॉन्ट्रैक्ट्स का सफल निष्पादन।"}
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-emerald-500/10 text-[#10b981]">
                    <Search className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="font-sans font-bold text-white text-sm">
                      {language === "en" ? "Self-Run SEO Blog" : "खुद का गूगल एसईओ ब्लॉग"} (<a href="https://aaryankelvin.online" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">aaryankelvin.online</a>)
                    </h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {language === "en"
                        ? "Independently publish biography articles and Instagram optimization guides. Harnesses technical SEO silos to secure over 100+ organic visitors every single day."
                        : "स्वतंत्र रूप से बायोग्राफी लेख और इंस्टाग्राम ऑप्टिमाइज़ेशन गाइड प्रकाशित करते हैं। तकनीकी एसईओ के माध्यम से हर दिन 100+ से अधिक ऑर्गेनिक विजिटर्स प्राप्त करते हैं।"}
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-blue-500/10 text-blue-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="font-sans font-bold text-white text-sm">{language === "en" ? "AI-Assisted App Building & Prototyping" : "एआई-असिस्टेड ऐप बिल्डिंग और प्रोटोटाइपिंग"}</h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {language === "en"
                        ? "Pioneered state-of-the-art prompt workflows using Claude and ChatGPT to plan, structure, and bootstrap interactive application interfaces for remote project contracts."
                        : "रिमोट प्रोजेक्ट कॉन्ट्रैक्ट्स के लिए इंटरैक्टिव एप्लिकेशन इंटरफेस की योजना बनाने, संरचना करने और बूटस्ट्रैप करने के लिए क्लॉड और चैटजीपीटी का उपयोग करके उन्नत प्रॉम्प्ट वर्कफ्लो का निर्माण।"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: ACADEMIC & TECHNICAL EDUCATION */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-900">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h4 className="font-sans font-black text-white text-lg">{language === "en" ? "Academic History" : "शैक्षणिक इतिहास"}</h4>
                <span className="ml-auto text-[10px] font-mono font-bold bg-emerald-500/10 text-[#10b981] px-2 py-0.5 rounded border border-emerald-500/20">
                  {language === "en" ? "Verified Records" : "सत्यापित रिकॉर्ड"}
                </span>
              </div>

              <div className="space-y-4">
                {/* Edu 1: B.A */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">{language === "en" ? "Bachelor of Arts (B.A.)" : "कला स्नातक (बी.ए.)"}</h5>
                      <span className="font-mono text-[10px] text-zinc-500">{language === "en" ? "Graduated" : "उत्तीर्ण"}</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">{language === "en" ? "Kota, Rajasthan, India" : "कोटा, राजस्थान, भारत"}</p>
                    <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                      {language === "en"
                        ? "Developed advanced verbal, written, and cross-cultural communication skills in Hindi & English, laying a deep foundation for high-converting blog copywriting."
                        : "हिंदी और अंग्रेजी में उन्नत मौखिक, लिखित और क्रॉस-सांस्कृतिक संचार कौशल विकसित किए, जिससे हाई-कन्वर्टिंग ब्लॉग कॉपीराइटिंग की मजबूत नींव रखी गई।"}
                    </p>
                  </div>
                </div>

                {/* Edu 2: ITI Electronics */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">{language === "en" ? "ITI — Electronics Mechanic" : "आईटीआई — इलेक्ट्रॉनिक्स मैकेनिक"}</h5>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">{language === "en" ? "Pass Out: 2024" : "उत्तीर्ण: 2024"}</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">{language === "en" ? "Government ITI, Sangod, Rajasthan, India" : "राजकीय औद्योगिक प्रशिक्षण संस्थान (आईटीआई), सांगोद, राजस्थान, भारत"}</p>
                    <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                      {language === "en"
                        ? "Mastered electronics repair, troubleshooting circuit schematics, multimeter testing, precision soldering/desoldering, and hardware debugging."
                        : "इलेक्ट्रॉनिक्स मरम्मत, सर्किट योजनाबद्ध समस्या निवारण, मल्टीमीटर परीक्षण, सटीक सोल्डरिंग/डीसोल्डरिंग और हार्डवेयर डिबगिंग में महारत हासिल की।"}
                    </p>
                  </div>
                </div>

                {/* Edu 3: School */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-1 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">{language === "en" ? "Senior Secondary (12th RBSE)" : "उच्च माध्यमिक (12वीं आरबीएसई)"}</h5>
                      <span className="font-mono text-[10px] text-zinc-500">{language === "en" ? "Pass Out: 2022" : "उत्तीर्ण: 2022"}</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">{language === "en" ? "Govt. Sr. Sec. School, Dhoti, Kota – 61.00% (First Division)" : "राजकीय उच्च माध्यमिक विद्यालय, धोती, कोटा – 61.00% (प्रथम श्रेणी)"}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ADDITIONAL METRICS BAR */}
          <div className="mt-8 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">
                {language === "en" ? "Additional Personal Specifications" : "अतिरिक्त व्यक्तिगत विशिष्टताएँ"}
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{language === "en" ? "Dhoti, Kota, Rajasthan, India" : "धोती, कोटा, राजस्थान, भारत"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-blue-400" />
                  <span>{language === "en" ? "Hindi (Native) | English (Professional)" : "हिंदी (मातृभाषा) | अंग्रेजी (व्यावसायिक)"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {(language === "en" ? [
                "Honest & Responsible", 
                "Hardworking & Dedicated", 
                "Independent remote worker", 
                "Adaptive Learner"
              ] : [
                "ईमानदार और जिम्मेदार",
                "मेहनती और समर्पित",
                "स्वतंत्र रिमोट वर्कर",
                "अनुकूलनशील शिक्षार्थी"
              ]).map((tag, i) => (
                <span key={i} className="text-[10px] font-semibold bg-white/5 text-zinc-400 px-3 py-1 rounded-lg border border-white/5">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

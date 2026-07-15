import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Star, User, Download, Send, PhoneCall, Check, ExternalLink, X, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";
// @ts-ignore
import profilePic from "../assets/images/rohit_founder_1781870842914.jpg";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardTab, setActiveCardTab] = useState<"profile" | "console">("profile");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const { language, t } = useLanguage();

  // Custom high-performance typing animation hook
  const roles = language === "en" ? [
    "AI Training Specialist",
    "Web Developer",
    "SEO Specialist",
    "Content Writer",
    "Graphic Designer"
  ] : [
    "एआई ट्रेनिंग विशेषज्ञ",
    "वेबसाइट डेवलपर",
    "एसईओ विशेषज्ञ",
    "कंटेंट राइटर",
    "ग्राफिक डिजाइनर"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex] || "";
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) => currentRole.slice(0, prev.length + 1));
      }, 70);
    }

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, language]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Calculate values normalized around 0
    const x = (clientX / window.innerWidth - 0.5) * 12;
    const y = (clientY / window.innerHeight - 0.5) * 12;
    setMousePos({ x, y });
  };

  const triggerDownload = () => {
    setShowResumeModal(true);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Decorative ambient glowing orbs behind Hero elements */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] -z-10 animate-pulse duration-[8s]" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] -z-10 animate-pulse duration-[10s]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#10b981] animate-ping" />
              <span className="font-mono text-[10px] font-bold text-gray-300 tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-400" /> {language === "en" ? "Open for Remote Hiring & Gig Contracts" : "रिमोट हायरिंग और फ्रीलांसिंग के लिए उपलब्ध"}
              </span>
            </motion.div>

            {/* Giant Futuristic Neon Title */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-purple-400 dark:text-purple-300 uppercase font-black justify-center lg:justify-start"
              >
                <span>{language === "en" ? "Hi, I'm Rohit Kumar Nagar (Dhakad)" : "नमस्ते, मैं रोहित कुमार नागर (धाकड़) हूँ"}</span>
                <span className="h-[1px] w-8 bg-purple-500/50" />
                <span className="text-blue-400">{displayedText}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-zinc-900 dark:text-white"
              >
                {language === "en" ? "I Build" : "मैं बनाता हूँ"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 drop-shadow-[0_0_20px_rgba(147,51,234,0.15)]">
                  {language === "en" ? "Digital Assets" : "डिजिटल एसेट्स"}
                </span>{" "}
                {language === "en" ? "That Generate" : "जो लाएं"}{" "}<br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 dark:from-pink-400 dark:via-rose-300 dark:to-amber-300">
                  {language === "en" ? "Attention, Traffic & Revenue" : "अटेंशन, ट्रैफिक और रेवेन्यू"}
                </span>
              </motion.h1>

              {/* Subheadline and Bio Hook */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-zinc-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                {t("hero.tagline")}
              </motion.p>
            </div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-zinc-600 dark:text-gray-300/80"
            >
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-blue-500 dark:text-cyan-400" />
                <span>{language === "en" ? "Supercharged PageSpeed 95+" : "सुपरचार्ज्ड पेजस्पीड 95+"}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 dark:text-purple-400" />
                <span>{language === "en" ? "AdSense-Friendly Templates" : "एडसेंस-फ्रेंडली टेम्पलेट्स"}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 dark:text-yellow-400 dark:fill-yellow-400" />
                <span>{language === "en" ? "30+ Freelance Projects Done" : "30+ से अधिक सफल प्रोजेक्ट्स"}</span>
              </div>
            </motion.div>

            {/* Action Buttons Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 w-full"
            >
              {/* Primary: Hire Me */}
              <button
                id="hero-hire-me-cta"
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition duration-300 cursor-pointer text-center flex items-center justify-center gap-2 group overflow-hidden"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Hire Me" : "हायर करें"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-[-30deg] -translate-x-full group-hover:animate-shine" style={{ transition: "none" }} />
              </button>

              {/* Secondary: Download Resume */}
              <button
                id="hero-download-resume-cta"
                onClick={triggerDownload}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:dark:bg-white/10 hover:dark:text-white backdrop-blur-sm transition duration-300 text-center cursor-pointer flex items-center justify-center gap-2"
                title="View & Download Rohit's professional resume"
              >
                <Download className="w-3.5 h-3.5 text-blue-500" />
                <span>{language === "en" ? "Download Resume" : "बायोडाटा डाउनलोड करें"}</span>
              </button>

              {/* Tertiary: Contact Me */}
              <button
                id="hero-contact-me-cta"
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 bg-transparent border border-zinc-300 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-600 transition duration-300 text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Contact Me" : "संपर्क करें"}</span>
              </button>

              {/* Quaternary: View Projects */}
              <button
                id="hero-view-projects-cta"
                onClick={() => scrollToSection("portfolio")}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:dark:bg-white/10 hover:dark:text-white backdrop-blur-sm transition duration-300 text-center cursor-pointer flex items-center justify-center gap-1.5"
                title="View Rohit's portfolio of work"
              >
                <Zap className="w-3.5 h-3.5 text-yellow-500" />
                <span>{language === "en" ? "View Projects" : "प्रोजेक्ट्स देखें"}</span>
              </button>
            </motion.div>
          </div>

          {/* Hologram Glassmorphic 3D Card Area with Tabs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 h-full relative"
            id="hero-3d-console-holder"
          >
            {/* Glowing background halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-75" />

            {/* Simulated 3D Card Shell */}
            <div
              className="relative p-6 rounded-2xl bg-white/70 dark:bg-[#0b0c13]/80 border border-zinc-200 dark:border-purple-500/20 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
            >
              {/* Card topbar with TABS */}
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                {/* Visual Segmented Tabs */}
                <div className="flex bg-zinc-100 dark:bg-black/60 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800/80">
                  <button
                    onClick={() => setActiveCardTab("profile")}
                    className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCardTab === "profile"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    }`}
                  >
                    {language === "en" ? "Profile Photo" : "प्रोफ़ाइल फोटो"}
                  </button>
                  <button
                    onClick={() => setActiveCardTab("console")}
                    className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCardTab === "console"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    }`}
                  >
                    {language === "en" ? "Dev Console" : "डेवलपर कंसोल"}
                  </button>
                </div>
              </div>

              {/* TAB 1 CONTENT: PROFESSIONAL PROFILE IMAGE */}
              {activeCardTab === "profile" && (
                <div className="flex flex-col items-center py-4 space-y-5 animate-fadeIn">
                  
                  {/* Avatar Container with Glowing Pulsing Borders */}
                  <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(147,51,234,0.4)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-black/10 flex items-center justify-center">
                      <img 
                        src={profilePic} 
                        alt="Rohit Kumar Nagar" 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Pulsing Active Hub Node */}
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-[2.5px] border-white dark:border-[#0c0c12] animate-pulse shadow-md" title={language === "en" ? "Online & Remote Available" : "ऑनलाइन और उपलब्ध"} />
                  </div>

                  {/* Core Personal Quick Stats */}
                  <div className="text-center">
                    <h3 className="text-zinc-900 dark:text-white font-sans font-bold text-lg tracking-tight">
                      Rohit Kumar Nagar
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>{language === "en" ? "Kota, Rajasthan, India" : "कोटा, राजस्थान, भारत"}</span>
                    </div>
                  </div>

                  {/* Floating Micro Pills of Credibility */}
                  <div className="grid grid-cols-2 gap-2 w-full pt-1">
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">{language === "en" ? "Freelance Scale" : "फ्रीलांस स्केल"}</span>
                      <span className="text-xs font-black text-blue-600 dark:text-cyan-400 mt-0.5">{language === "en" ? "30+ Completed" : "30+ पूरे किए"}</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">{language === "en" ? "Response Rate" : "प्रतिक्रिया दर"}</span>
                      <span className="text-xs font-black text-indigo-600 dark:text-purple-400 mt-0.5">{language === "en" ? "< 1 Hour Avg" : "< 1 घंटा औसत"}</span>
                    </div>
                  </div>

                </div>
              )}

              {/* TAB 2 CONTENT: INTERACTIVE SERVER CONSOLE */}
              {activeCardTab === "console" && (
                <div className="space-y-4 font-mono text-[11px] leading-relaxed text-left select-none animate-fadeIn min-h-[250px]">
                  <div className="text-zinc-400 dark:text-zinc-500">
                    {"#"} Accessing Rohit Kumar Nagar database... [OK]
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-indigo-600 dark:text-purple-400 font-bold">&gt; rohit --skillset</p>
                    <div className="pl-4 text-zinc-700 dark:text-purple-200">
                      <div>{language === "en" ? "[ 'AI Training & Annotation', 'Full-Stack React' ]" : "[ 'एआई ट्रेनिंग और एनोटेशन', 'फुल-स्टैक रिएक्ट' ]"}</div>
                      <div>{language === "en" ? "[ 'SEO Optimization & On-Page Architecture' ]" : "[ 'एसईओ ऑप्टिमाइजेशन और ऑन-पेज आर्किटेक्चर' ]"}</div>
                      <div>{language === "en" ? "[ 'Click-Magnet Thumbnails & Poster Layout' ]" : "[ 'क्लिक-मैग्नेट थंबनेल्स और पोस्टर लेआउट' ]"}</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-blue-600 dark:text-blue-400 font-bold">&gt; rohit --location</p>
                    <p className="pl-4 text-emerald-600 dark:text-emerald-300">
                      {language === "en" ? '"Kota, Rajasthan, India • Remote Working Ready"' : '"कोटा, राजस्थान, भारत • रिमोट वर्क के लिए तैयार"'}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-pink-600 dark:text-pink-400 font-bold">&gt; rohit --ambition</p>
                    <p className="pl-4 text-amber-600 dark:text-yellow-300">
                      {language === "en" 
                        ? '"Building world-class high-speed interfaces & digital content with AI acceleration."'
                        : '"एआई त्वरण के साथ विश्व स्तरीय हाई-स्पीड इंटरफेस और डिजिटल सामग्री का निर्माण।"'}
                    </p>
                  </div>

                  <div className="h-[1px] bg-zinc-200 dark:bg-zinc-800 my-4" />

                  {/* Simulated Metrics */}
                  <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                    <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80">
                      <span className="block font-black text-blue-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-300 text-lg sm:text-xl">
                        98%
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                        {language === "en" ? "SEO Score Avg" : "औसत एसईओ स्कोर"}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80">
                      <span className="block font-black text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-300 text-lg sm:text-xl">
                        +400%
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                        {language === "en" ? "Client Traffic" : "क्लाइंट ट्रैफिक बढ़त"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>

        {/* Animated Statistics Counters Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-zinc-200/10 dark:border-zinc-800/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { 
              value: "30+", 
              label: language === "en" ? "Completed Gigs" : "सफल प्रोजेक्ट्स", 
              desc: language === "en" ? "WordPress, Blogger & React apps" : "वर्डप्रेस, ब्लॉगर और रिएक्ट ऐप्स" 
            },
            { 
              value: "100%", 
              label: language === "en" ? "Client Satisfaction" : "संतुष्ट क्लाइंट्स", 
              desc: language === "en" ? "Verified 5-star ratings" : "सत्यापित 5-स्टार रेटिंग्स" 
            },
            { 
              value: "1.2M+", 
              label: language === "en" ? "Views Generated" : "व्यूज जनरेट किए", 
              desc: language === "en" ? "Through graphic CTR & SEO content" : "एसईओ कंटेंट और बेहतरीन थंबनेल्स से" 
            },
            { 
              value: "99%", 
              label: language === "en" ? "Speed Lighthouse" : "लाइटहाउस पेजस्पीड", 
              desc: language === "en" ? "Instant mobile index pass" : "इंस्टेंट मोबाइल इंडेक्स पास" 
            }
          ].map((stat, i) => (
            <div key={i} className="space-y-1 group">
              <div className="font-sans text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 group-hover:scale-105 transition-transform duration-300 inline-block">
                {stat.value}
              </div>
              <div className="font-sans text-xs font-bold text-zinc-900 dark:text-zinc-200 tracking-wide uppercase">
                {stat.label}
              </div>
              <div className="font-sans text-[10px] text-zinc-500 dark:text-zinc-500 font-medium">
                {stat.desc}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* INTERACTIVE PREMIUM CV RESUME POPUP MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-3xl bg-white dark:bg-[#09090d] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl text-zinc-900 dark:text-white my-8 print-modal-container"
            >
              {/* CSS Overrides for Premium Printing */}
              <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                  body * {
                    visibility: hidden;
                  }
                  .print-modal-container, .print-modal-container * {
                    visibility: visible;
                  }
                  .print-modal-container {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    max-width: 100% !important;
                    border: none !important;
                    box-shadow: none !important;
                    background: white !important;
                    color: black !important;
                    padding: 0 !important;
                    margin: 0 !important;
                  }
                  .print-hide {
                    display: none !important;
                  }
                  .print-text-dark {
                    color: #000000 !important;
                  }
                  .print-text-muted {
                    color: #4b5563 !important;
                  }
                  .print-border {
                    border-color: #d1d5db !important;
                  }
                  .print-bg-none {
                    background: none !important;
                    border: 1px solid #d1d5db !important;
                  }
                  .print-grid {
                    display: grid !important;
                    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                    gap: 1.5rem !important;
                  }
                }
              `}} />

              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer print-hide z-20"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Body Wrapper */}
              <div className="p-6 sm:p-10 max-h-[85vh] overflow-y-auto scrollbar-thin space-y-8">
                
                {/* CV Header */}
                <div className="border-b border-zinc-200 dark:border-zinc-800/80 pb-6 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 print-text-dark">
                        ROHIT KUMAR NAGAR
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-mono text-xs font-black tracking-wider uppercase mt-1.5 print-text-dark">
                        AI Training Specialist | Web Developer | Content Writer | SEO & Graphic Designer
                      </p>
                    </div>
                    
                    {/* Quick Contacts */}
                    <div className="text-xs space-y-1 text-zinc-500 dark:text-zinc-400 font-medium sm:text-right">
                      <div className="flex sm:justify-end items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 print-text-muted" />
                        <span>Kota, Rajasthan, India</span>
                      </div>
                      <div className="flex sm:justify-end items-center gap-1.5">
                        <PhoneCall className="w-3.5 h-3.5 text-blue-500 print-text-muted" />
                        <a href="tel:+917424874912" className="hover:underline">+91 7424874912</a>
                      </div>
                      <div className="flex sm:justify-end items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-purple-500 print-text-muted" />
                        <a href="mailto:rohitdhakaddhoti143@gmail.com" className="hover:underline">rohitdhakaddhoti143@gmail.com</a>
                      </div>
                      <div className="flex sm:justify-end items-center gap-1.5 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                        <ExternalLink className="w-3 h-3 text-zinc-400" />
                        <span>Portfolios: aaryankelvin.online | dhakad-ra-chora.vercel.app</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CV Content Section */}
                <div className="space-y-6 text-left text-zinc-700 dark:text-zinc-300">
                  
                  {/* Professional Summary */}
                  <div className="space-y-2">
                    <h4 className="font-sans font-black uppercase text-zinc-900 dark:text-white tracking-widest text-xs flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Professional Summary
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                      Versatile and detail-oriented professional with 30+ completed freelance projects spanning content writing, SEO, 
                      graphic design, web development, and digital trend research. Hands-on experience building websites from 
                      scratch using HTML, CSS, and JavaScript, with growing proficiency in AI-assisted app development using tools 
                      like ChatGPT and Claude. Strong written and verbal communication skills with a solid technical foundation from 
                      ITI (Electronics Mechanic) and a Bachelor of Arts degree. Quick learner, highly adaptable, and comfortable 
                      working independently in remote, deadline-driven environments — well suited for AI training, content evaluation,
                      data annotation, web development, and writing-based projects.
                    </p>
                  </div>

                  {/* Core Skills */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-sans font-black uppercase text-zinc-900 dark:text-white tracking-widest text-xs flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" /> Core Skills
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs">
                      {[
                        "Web Development — HTML, CSS, JavaScript (building websites from scratch)",
                        "AI-Assisted App Building — using ChatGPT, Claude, and other AI tools",
                        "Content Writing & Blog Writing (SEO-optimized)",
                        "Search Engine Optimization (SEO) — keyword research, on-page SEO",
                        "Graphic Designing — Photoshop, Canva, and other design tools",
                        "YouTube Thumbnail Design",
                        "Trend Research & Content Analysis",
                        "WordPress — website content management",
                        "Hindi-to-English & English-to-Hindi Translation",
                        "AI Tools Proficiency — ChatGPT, Claude, and other AI platforms",
                        "Typing & Data Entry",
                        "Basic Computer Operations & MS Office",
                        "Strong Written & Verbal Communication (English & Hindi)",
                        "Electronics & Technical Troubleshooting (ITI background)"
                      ].map((skill, index) => (
                        <div key={index} className="flex items-start gap-1.5 py-0.5">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span className="text-zinc-600 dark:text-zinc-400">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Freelance Experience */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900 pb-1">
                      <h4 className="font-sans font-black uppercase text-zinc-900 dark:text-white tracking-widest text-xs flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-500" /> Freelance Experience
                      </h4>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">Remote • 2022 - Present</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-xs sm:text-sm font-extrabold text-zinc-900 dark:text-white">
                        Freelance Web Developer, Content Writer, SEO & Graphic Designer
                      </div>
                      
                      <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 pl-1 leading-relaxed">
                        <li>Completed 30+ freelance projects spanning web development, content writing, SEO, and graphic design.</li>
                        <li>Built personal websites and a freelance portfolio (<span className="text-indigo-500 dark:text-indigo-400">dhakad-ra-chora.vercel.app</span>) from scratch using HTML, CSS, and JavaScript, showcasing web design, SEO, and YouTube thumbnail services offered to clients.</li>
                        <li>Explored AI-assisted app development using tools like ChatGPT and Claude to design, plan, and build functional app prototypes.</li>
                        <li>Built and manage a self-run blog (<span className="text-indigo-500 dark:text-indigo-400">aaryankelvin.online</span>) on celebrity/influencer biography and Instagram growth content, drawing ~100 visitors daily through organic SEO.</li>
                        <li>Wrote SEO-optimized blog articles and designed YouTube thumbnails aligned with trends to boost search visibility and click-through rates.</li>
                        <li>Conducted ongoing trend research across YouTube and social platforms to identify content opportunities for clients.</li>
                        <li>Created and managed WordPress website content, ensuring consistent formatting and SEO best practices, using Photoshop and Canva for graphics.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-sans font-black uppercase text-zinc-900 dark:text-white tracking-widest text-xs flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Education & Credentials
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/60 print-bg-none">
                        <div className="font-bold text-zinc-900 dark:text-white">Bachelor of Arts (B.A.)</div>
                        <div className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] mt-0.5">Kota, Rajasthan, India</div>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[11px] leading-relaxed">
                          Developed deep foundation in communications and critical thinking.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/60 print-bg-none">
                        <div className="font-bold text-zinc-900 dark:text-white flex justify-between items-center">
                          <span>ITI — Electronics Mechanic</span>
                          <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded print-hide">Pass Out: 2024</span>
                        </div>
                        <div className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] mt-0.5">Sangod, Kota, Rajasthan, India</div>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[11px] leading-relaxed">
                          Troubleshooting circuit schematics, hardware diagnostics, and technical maintenance.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/60 print-bg-none">
                        <div className="font-bold text-zinc-900 dark:text-white">Senior Secondary (Class 12)</div>
                        <div className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] mt-0.5">Govt. Sr. Sec. School, Dhoti, Kota</div>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[11px]">Pass Out: 2022 • RBSE Board — 61% (First Division)</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800/60 print-bg-none">
                        <div className="font-bold text-zinc-900 dark:text-white">Secondary (Class 10)</div>
                        <div className="text-zinc-500 dark:text-zinc-500 font-mono text-[10px] mt-0.5">Dhoti, Kota, Rajasthan, India</div>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-1 text-[11px]">RBSE Board • Focus on Science and Mathematics foundations.</p>
                      </div>
                    </div>
                  </div>

                  {/* Languages & Additional Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1.5">
                      <h5 className="font-sans font-bold uppercase text-zinc-800 dark:text-zinc-200 text-xs tracking-wider">Languages</h5>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400">
                        English (Professional) | Hindi (Native Speaker)
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <h5 className="font-sans font-bold uppercase text-zinc-800 dark:text-zinc-200 text-xs tracking-wider">Additional Information</h5>
                      <ul className="list-disc list-inside text-xs text-zinc-600 dark:text-zinc-400 space-y-0.5">
                        <li>Comfortable with remote collaboration tools & deadline-based deliverables.</li>
                        <li>Available for flexible/part-time projects & remote hiring opportunities.</li>
                        <li>Open to AI training, content review, writing, and annotation-based roles.</li>
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Modal Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-6 mt-4 print-hide">
                  <div className="text-zinc-500 dark:text-zinc-500 text-[10px] font-semibold text-center sm:text-left">
                    * Tip: Use your browser's print options to save directly as a clean PDF document.
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        window.print();
                      }}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition duration-300 text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Print / Save CV as PDF</span>
                    </button>
                    <button
                      onClick={() => setShowResumeModal(false)}
                      className="w-full sm:w-auto px-5 py-3 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-xl transition duration-300 text-xs flex items-center justify-center cursor-pointer"
                    >
                      <span>Close</span>
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

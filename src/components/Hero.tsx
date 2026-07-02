import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Star, User, Download, Send, PhoneCall, Check, ExternalLink, X, MapPin } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeCardTab, setActiveCardTab] = useState<"profile" | "console">("profile");
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Custom high-performance typing animation hook
  const roles = [
    "AI Training Specialist",
    "Web Developer",
    "SEO Specialist",
    "Content Writer",
    "Graphic Designer"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[currentRoleIndex];
    
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
  }, [displayedText, isDeleting, currentRoleIndex]);

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
                <Sparkles className="w-3 h-3 text-yellow-400" /> Open for Remote Hiring & Gig Contracts
              </span>
            </motion.div>

            {/* Giant Futuristic Neon Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-sans text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-zinc-900 dark:text-white"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 drop-shadow-[0_0_20px_rgba(147,51,234,0.15)]">
                  Rohit Kumar Nagar
                </span>
                <span className="block mt-3 text-xl sm:text-2xl md:text-3xl tracking-normal text-zinc-600 dark:text-zinc-300 min-h-[40px]">
                  Professional <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400">{displayedText}</span>
                  <span className="animate-pulse text-blue-500 dark:text-blue-400 ml-1">|</span>
                </span>
              </motion.h1>

              {/* Subheadline and Bio Hook */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-zinc-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                Known online as <span className="text-zinc-900 dark:text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-purple-400 dark:to-pink-400">Rohit Kumar Nagar (Dhakad)</span>, I specialize in high-speed web interfaces, SEO-optimized blogs, high-CTR YouTube thumbnails, and training advanced AI models.
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
                <span>Supercharged PageSpeed 95+</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 dark:text-purple-400" />
                <span>AdSense-Friendly Templates</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500 dark:text-yellow-400 dark:fill-yellow-400" />
                <span>30+ Freelance Projects Done</span>
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
                <span>Hire Me</span>
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
                <span>Download Resume</span>
              </button>

              {/* Tertiary: Contact Me */}
              <button
                id="hero-contact-me-cta"
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 bg-transparent border border-zinc-300 hover:border-zinc-500 dark:border-zinc-800 dark:hover:border-zinc-600 transition duration-300 text-center cursor-pointer flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </button>

              {/* Quaternary: View Projects */}
              <button
                id="hero-view-projects-cta"
                onClick={() => scrollToSection("aesthetic-portfolio")}
                className="px-6 py-3.5 rounded-xl font-sans text-xs font-bold tracking-wider text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:dark:bg-white/10 hover:dark:text-white backdrop-blur-sm transition duration-300 text-center cursor-pointer flex items-center justify-center gap-1.5"
                title="View Rohit's portfolio of work"
              >
                <Zap className="w-3.5 h-3.5 text-yellow-500" />
                <span>View Projects</span>
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
                    Profile Photo
                  </button>
                  <button
                    onClick={() => setActiveCardTab("console")}
                    className={`px-2.5 py-1 rounded text-[9px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeCardTab === "console"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                    }`}
                  >
                    Dev Console
                  </button>
                </div>
              </div>

              {/* TAB 1 CONTENT: PROFESSIONAL PROFILE IMAGE PLACEHOLDER */}
              {activeCardTab === "profile" && (
                <div className="flex flex-col items-center py-4 space-y-5 animate-fadeIn">
                  
                  {/* Avatar Container with Glowing Pulsing Borders */}
                  <div className="relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] dark:shadow-[0_0_25px_rgba(147,51,234,0.4)]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-black/10 flex items-center justify-center">
                      {/* Premium RKN monogram */}
                      <span className="text-white font-sans font-black text-4xl tracking-tight select-none">RKN</span>
                    </div>
                    {/* Pulsing Active Hub Node */}
                    <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full bg-emerald-500 border-[2.5px] border-white dark:border-[#0c0c12] animate-pulse shadow-md" title="Online & Remote Available" />
                  </div>

                  {/* Core Personal Quick Stats */}
                  <div className="text-center">
                    <h3 className="text-zinc-900 dark:text-white font-sans font-bold text-lg tracking-tight">
                      Rohit Kumar Nagar
                    </h3>
                    <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-500" />
                      <span>Kota, Rajasthan, India</span>
                    </div>
                  </div>

                  {/* Floating Micro Pills of Credibility */}
                  <div className="grid grid-cols-2 gap-2 w-full pt-1">
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">Freelance Scale</span>
                      <span className="text-xs font-black text-blue-600 dark:text-cyan-400 mt-0.5">30+ Completed</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/80">
                      <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">Response Rate</span>
                      <span className="text-xs font-black text-indigo-600 dark:text-purple-400 mt-0.5">&lt; 1 Hour Avg</span>
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
                      <div>[ 'AI Training & Annotation', 'Full-Stack React' ]</div>
                      <div>[ 'SEO Optimization & On-Page Architecture' ]</div>
                      <div>[ 'Click-Magnet Thumbnails & Poster Layout' ]</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <p className="text-blue-600 dark:text-blue-400 font-bold">&gt; rohit --location</p>
                    <p className="pl-4 text-emerald-600 dark:text-emerald-300">
                      "Kota, Rajasthan, India • Remote Working Ready"
                    </p>
                  </div>

                  <div className="space-y-1">
                    <p className="text-pink-600 dark:text-pink-400 font-bold">&gt; rohit --ambition</p>
                    <p className="pl-4 text-amber-600 dark:text-yellow-300">
                      "Building world-class high-speed interfaces & digital content with AI acceleration."
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
                        SEO Score Avg
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80">
                      <span className="block font-black text-indigo-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-purple-400 dark:to-pink-300 text-lg sm:text-xl">
                        +400%
                      </span>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                        Client Traffic
                      </span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </div>

      {/* INTERACTIVE PREMIUM CV RESUME POPUP MODAL */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#0c0c12] border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-zinc-900 dark:text-white p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-5 mb-5 text-left">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  Rohit Kumar Nagar
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono tracking-wide uppercase mt-1">
                  AI Training Specialist • Web Developer • Graphic & SEO Expert
                </p>
              </div>

              {/* Scrollable CV Details */}
              <div className="max-h-[60vh] overflow-y-auto space-y-6 text-left pr-2 font-sans text-sm scrollbar-thin">
                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 tracking-tight text-base mb-2">Professional Summary</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-xs">
                    Highly motivated and detail-oriented professional combining an ITI background in Electronics Mechanic with hands-on freelance experience in digital content creation, blogging, and basic SEO. Skilled in managing online content and digital platforms, with a strong record of delivering accurate work on time. Seeking opportunities in remote work, content writing, data entry, digital services, or technical/electronics roles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-zinc-800 dark:text-zinc-200 tracking-tight text-base mb-2">Education</h4>
                    <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                      <li>
                        <strong className="text-zinc-800 dark:text-zinc-200">Bachelor of Arts (BA)</strong>
                        <div className="text-[10px] text-zinc-500">Kota University, Rajasthan</div>
                      </li>
                      <li>
                        <strong className="text-zinc-800 dark:text-zinc-200">ITI Electronics Mechanic</strong>
                        <div className="text-[10px] text-zinc-500">NCVT Certified Board</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-zinc-800 dark:text-zinc-200 tracking-tight text-base mb-2">Key Core Skills</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["HTML & CSS", "JavaScript", "WordPress", "On-Page SEO", "Blog Writing", "Canva Thumbnail Design", "ChatGPT & Claude", "AI Prompt Engineering", "Circuit Testing", "Electronics Repair"].map((skill) => (
                        <span key={skill} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-[10px] font-mono font-bold text-zinc-600 dark:text-zinc-400">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 tracking-tight text-base mb-2">Experience & Gigs (30+ Projects)</h4>
                  <ul className="space-y-3 text-xs text-zinc-600 dark:text-zinc-400">
                    <li>
                      <div className="flex justify-between font-bold text-zinc-800 dark:text-zinc-200">
                        <span>Freelance Digital Content Creator</span>
                        <span>2022 - Present</span>
                      </div>
                      <p className="mt-1 text-[11px]">
                        Built and maintained premium WordPress blogs, managed keyword search engine optimization, and designed high-clickthrough custom thumbnails. Successfully delivered 30+ custom orders for clients worldwide.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action bar inside modal */}
              <div className="flex flex-col sm:flex-row items-center gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-5 mt-5">
                <button
                  onClick={() => {
                    window.print();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Print / Save CV as PDF</span>
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-lg transition duration-300 text-xs flex items-center justify-center cursor-pointer"
                >
                  <span>Close Window</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

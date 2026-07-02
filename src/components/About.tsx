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
  Cpu
} from "lucide-react";
export default function About() {
  const skills = [
    {
      title: "Website Design",
      subtitle: "Blogger / WordPress & Landing Pages",
      icon: Monitor,
      progress: "98%",
      color: "from-blue-500 to-cyan-400",
      accent: "rgba(59, 130, 246, 0.4)",
      description: "Fast-loading templates custom-engineered for maximum user engagement. Specializing in high-fidelity glassmorphic designs, lightweight blogger setups, and seamless WordPress customization."
    },
    {
      title: "SEO Optimization",
      subtitle: "Google Ranking & Indexing Dominance",
      icon: Search,
      progress: "95%",
      color: "from-purple-500 to-pink-400",
      accent: "rgba(168, 85, 247, 0.4)",
      description: "Advanced semantic on-page schema layouts, key phrase cluster mapping, speed improvements, and XML indexing audits to skyrocket search visibility organically."
    },
    {
      title: "YouTube Thumbnails & Growth",
      subtitle: "High CTR Designs with 3D Pop",
      icon: Youtube,
      progress: "92%",
      color: "from-red-500 to-orange-400",
      accent: "rgba(239, 68, 68, 0.4)",
      description: "Eye-catching visual designs using custom saturation matrices, high-contrast glow text, and character composites that drive instantaneous clicks."
    },
    {
      title: "Blog & Content Writing",
      subtitle: "AdSense-Friendly Copywriting",
      icon: PenTool,
      progress: "90%",
      color: "from-emerald-500 to-teal-400",
      accent: "rgba(16, 185, 129, 0.4)",
      description: "Informative, engaging, and 100% human-crafted articles structured for high-intent search queries to clear AdSense approval checks easily."
    },
    {
      title: "AI Training & Evaluation",
      subtitle: "Data Annotation & Model Tuning",
      icon: Cpu,
      progress: "96%",
      color: "from-amber-500 to-yellow-400",
      accent: "rgba(245, 158, 11, 0.4)",
      description: "High-quality model responses tuning, reinforcement learning from human feedback (RLHF), precise prompt engineering, and semantic data annotation."
    },
    {
      title: "Digital Marketing & Branding",
      subtitle: "Beginner-Friendly Business Scaling",
      icon: Megaphone,
      progress: "88%",
      color: "from-pink-500 to-rose-400",
      accent: "rgba(244, 63, 94, 0.4)",
      description: "Comprehensive branding funnels and high-conversion post assets created to position brand authority and get qualified prospects easily."
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
            <Zap className="w-3.5 h-3.5" /> Core Biography
          </motion.div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            The Digital Maverick Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Your Growth
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Engineered with modern Apple and Vercel-inspired designs, I deliver pixel-perfect digital experiences, advanced search engine optimizations, and high-impact custom assets for brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography Pitch Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900/80 backdrop-blur-sm space-y-6">
              
              {/* Profile Bio Headshot Monogram Badge */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 p-[1.5px] shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-sans font-black text-white text-3xl tracking-tight uppercase rounded-[14px]">
                  RKN
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 pointer-events-none z-10">
                  <span className="text-[8px] font-bold text-[#10b981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse" /> Active
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans font-black text-xl text-white">
                  Rohit Kumar Nagar
                </h3>
                <p className="font-mono text-xs text-purple-400 uppercase tracking-widest leading-none">
                  AI Specialist & Growth Architect
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                As a high-speed digital growth architect, I deliver top-tier platforms that rank number one, drive high-CTR clicks, and optimize custom AI algorithms. Combining an analytical engineering mindset with high-conversion creative strategy, I provide remote-ready execution, problem-solving speed, and fast learning capabilities for clients worldwide.
              </p>

              {/* Core Executive Highlights Badge Grid */}
              <div className="pt-2">
                <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-black mb-2.5">Core Executive Profile Highlights</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
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
                  ].map((highlight, idx) => (
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
                    <div className="font-bold text-white">5-Star Standards</div>
                    <div className="text-zinc-500 text-[10px]">Client satisfaction focus</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-zinc-900 text-blue-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">24-Hour Deliveries</div>
                    <div className="text-zinc-500 text-[10px]">On thumbnails & design specs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-zinc-900 text-green-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-white">100% Custom Work</div>
                    <div className="text-zinc-500 text-[10px]">No lazy copy-paste templates</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Skills Cards Grid Column */}
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-sans text-xs font-black uppercase text-zinc-500 tracking-widest pl-2 mb-2">
              Rohit's core skill expertise
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
                          <div className="font-mono text-xs font-bold text-gray-300">Expertise Level</div>
                          <div className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Perfected</div>
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
              <Award className="w-3.5 h-3.5" /> Verified Qualifications
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-black text-white tracking-tight">
              Professional Resume & Education
            </h3>
            <p className="font-sans text-zinc-400 text-xs sm:text-sm">
              An optimal blend of technical electronics discipline and digital marketing expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
            
            {/* COLUMN 1: REMOTE FREELANCE EXPERIENCE */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-900">
                <Briefcase className="w-5 h-5 text-purple-400" />
                <h4 className="font-sans font-black text-white text-lg">Freelance Milestones</h4>
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
                    <h5 className="font-sans font-bold text-white text-sm">Completed Freelance Projects</h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      Executed a versatile portfolio of remote client contracts covering high-conversion landing page design, WordPress/Blogger optimization, and custom graphic layouts.
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
                      Self-Run SEO Blog (<a href="https://aaryankelvin.online" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">aaryankelvin.online</a>)
                    </h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      Independently publish biography articles and Instagram optimization guides. Harnesses technical SEO silos to secure over 100+ organic visitors every single day.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-blue-500/10 text-blue-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 text-left">
                    <h5 className="font-sans font-bold text-white text-sm">AI-Assisted App Building & Prototyping</h5>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      Pioneered state-of-the-art prompt workflows using Claude and ChatGPT to plan, structure, and bootstrap interactive application interfaces for remote project contracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: ACADEMIC & TECHNICAL EDUCATION */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-zinc-900">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <h4 className="font-sans font-black text-white text-lg">Academic History</h4>
                <span className="ml-auto text-[10px] font-mono font-bold bg-emerald-500/10 text-[#10b981] px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified Records
                </span>
              </div>

              <div className="space-y-4">
                {/* Edu 1: B.A */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">Bachelor of Arts (B.A.)</h5>
                      <span className="font-mono text-[10px] text-zinc-500">Graduated</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">Kota, Rajasthan, India</p>
                    <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                      Developed advanced verbal, written, and cross-cultural communication skills in Hindi & English, laying a deep foundation for high-converting blog copywriting.
                    </p>
                  </div>
                </div>

                {/* Edu 2: ITI Electronics */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">ITI — Electronics Mechanic</h5>
                      <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">Pass Out: 2024</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">Government ITI, Sangod, Rajasthan, India</p>
                    <p className="font-sans text-[11px] text-zinc-500 leading-normal">
                      Mastered electronics repair, troubleshooting circuit schematics, multimeter testing, precision soldering/desoldering, and hardware debugging.
                    </p>
                  </div>
                </div>

                {/* Edu 3: School */}
                <div className="p-5 rounded-2xl bg-[#0a0d14]/60 border border-zinc-900 flex gap-4 text-left">
                  <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h5 className="font-sans font-extrabold text-white text-sm">Senior Secondary (12th RBSE)</h5>
                      <span className="font-mono text-[10px] text-zinc-500">Pass Out: 2022</span>
                    </div>
                    <p className="font-sans text-xs text-zinc-400">Govt. Sr. Sec. School, Dhoti, Kota – 61.00% (First Division)</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ADDITIONAL METRICS BAR */}
          <div className="mt-8 p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">
                Additional Personal Specifications
              </span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>Dhoti, Kota, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hindi (Native) | English (Professional)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Honest & Responsible", "Hardworking & Dedicated", "Independent remote worker", "Adaptive Learner"].map((tag, i) => (
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

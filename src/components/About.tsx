import React from "react";
import { motion } from "motion/react";
import { Monitor, Search, Youtube, PenTool, Megaphone, Clock, Star, Zap, Users } from "lucide-react";
const rohitImg = "/src/assets/images/rohit_founder_1781870842914.jpg";

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
            Dhakar Ra Chora represents premium design execution, advanced SEO algorithms, and viral creator growth. I turn static ideas into high-converting revenue streams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography Pitch Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900/80 backdrop-blur-sm space-y-6">
              
              {/* Profile Bio Headshot Mockup Asset */}
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-500 to-purple-500 p-[1.5px] shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <img
                  src={rohitImg}
                  alt="Rohit - Dhakad Ra Chora Profile"
                  className="w-full h-full object-cover rounded-[14px]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget.parentElement?.querySelector(".avatar-fallback");
                    if (fallback) {
                      fallback.classList.remove("hidden");
                      fallback.classList.add("flex");
                    }
                  }}
                />
                <div className="avatar-fallback hidden absolute inset-0 bg-gradient-to-tr from-purple-600 via-[#10b981] to-emerald-500 items-center justify-center font-sans font-black text-white text-2xl uppercase rounded-[14px]">
                  RD
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 pointer-events-none z-10">
                  <span className="text-[8px] font-bold text-[#10b981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse" /> Active
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans font-black text-xl text-white">
                  Rohit (Dhakad)
                </h3>
                <p className="font-mono text-xs text-purple-400 uppercase tracking-widest leading-none">
                  Founder & Principal Lead
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                As a passionate modern growth mechanic, I understand that beginners and small brands struggle with exorbitant web design quotes. My mission is to build beautiful, functional, ultra-high-speed platforms that fit your budget, but perform alongside massive corporation sites. We scale together.
              </p>

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
              Dhakad core skill expertise
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
      </div>
    </section>
  );
}

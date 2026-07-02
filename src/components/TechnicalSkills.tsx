import React from "react";
import { motion } from "motion/react";
import { 
  Code, 
  Globe, 
  Search, 
  PenTool, 
  Palette, 
  Sparkles, 
  Cpu, 
  FileText, 
  Laptop, 
  Layers, 
  BookOpen, 
  Terminal, 
  CheckCircle, 
  CheckCircle2, 
  Target, 
  Heart,
  Briefcase
} from "lucide-react";

interface SkillItem {
  name: string;
  level: number;
  category: "dev" | "seo_content" | "design" | "ai" | "admin_lang";
  icon: any;
  color: string;
  badge: string;
}

export default function TechnicalSkills() {
  const categories = [
    { id: "dev", label: "Web & Core Development", icon: Code, gradient: "from-blue-500 to-indigo-500" },
    { id: "ai", label: "Advanced AI & Prompt Engineering", icon: Cpu, gradient: "from-purple-500 to-pink-500" },
    { id: "seo_content", label: "SEO & Growth Copywriting", icon: Search, gradient: "from-emerald-500 to-teal-500" },
    { id: "design", label: "Creative & Graphic Design", icon: Palette, gradient: "from-amber-500 to-rose-500" },
    { id: "admin_lang", label: "Office Admin & Languages", icon: FileText, gradient: "from-cyan-500 to-blue-500" }
  ];

  const skillsList: SkillItem[] = [
    // Dev
    { name: "HTML", level: 98, category: "dev", icon: Code, color: "from-orange-500 to-red-500", badge: "Expert" },
    { name: "CSS", level: 95, category: "dev", icon: Layers, color: "from-blue-400 to-indigo-500", badge: "Expert" },
    { name: "JavaScript", level: 90, category: "dev", icon: Terminal, color: "from-yellow-400 to-amber-500", badge: "Advanced" },
    { name: "WordPress", level: 96, category: "dev", icon: Globe, color: "from-cyan-500 to-blue-600", badge: "Expert" },

    // AI
    { name: "ChatGPT", level: 97, category: "ai", icon: Sparkles, color: "from-emerald-500 to-teal-600", badge: "Master" },
    { name: "Claude", level: 98, category: "ai", icon: Sparkles, color: "from-orange-400 to-amber-500", badge: "Master" },
    { name: "Prompt Engineering", level: 99, category: "ai", icon: Cpu, color: "from-purple-500 to-pink-500", badge: "Architect" },
    { name: "AI Research", level: 94, category: "ai", icon: Target, color: "from-indigo-500 to-purple-600", badge: "Advanced" },
    { name: "AI Training", level: 96, category: "ai", icon: Cpu, color: "from-fuchsia-500 to-rose-500", badge: "Specialist" },

    // SEO
    { name: "SEO", level: 95, category: "seo_content", icon: Search, color: "from-emerald-500 to-teal-500", badge: "Expert" },
    { name: "Content Writing", level: 92, category: "seo_content", icon: PenTool, color: "from-blue-500 to-cyan-500", badge: "Pro" },

    // Design
    { name: "Adobe Photoshop", level: 94, category: "design", icon: Palette, color: "from-blue-600 to-cyan-500", badge: "Elite" },
    { name: "Canva", level: 98, category: "design", icon: Laptop, color: "from-pink-500 to-purple-500", badge: "Pro" },
    { name: "Graphic Design", level: 95, category: "design", icon: Palette, color: "from-rose-500 to-orange-500", badge: "Elite" },

    // Admin
    { name: "Data Entry", level: 96, category: "admin_lang", icon: FileText, color: "from-cyan-400 to-teal-500", badge: "Rapid" },
    { name: "MS Office", level: 92, category: "admin_lang", icon: FileText, color: "from-blue-500 to-indigo-500", badge: "Advanced" },
    { name: "English", level: 88, category: "admin_lang", icon: BookOpen, color: "from-purple-400 to-indigo-500", badge: "Fluent" },
    { name: "Hindi", level: 100, category: "admin_lang", icon: BookOpen, color: "from-red-500 to-rose-500", badge: "Native" }
  ];

  return (
    <section 
      id="technical-skills" 
      className="relative py-24 bg-[#0a0d14]/70"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.03),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[10px] uppercase tracking-widest font-black">
            <Cpu className="w-3.5 h-3.5" /> Core Capabilities
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Technical Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Inventory</span>
          </h2>
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Detailed breakdown of Rohit Kumar Nagar's professional toolsets, verified execution levels, and core domain masteries.
          </p>
        </div>

        {/* Category-based Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            const catSkills = skillsList.filter(s => s.category === cat.id);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-6 rounded-3xl bg-zinc-950/40 border border-zinc-900 hover:border-zinc-800/80 backdrop-blur-md flex flex-col justify-between shadow-xl group overflow-hidden"
              >
                {/* Visual Glow Effect */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-6 border-b border-zinc-900">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cat.gradient} text-zinc-950 shadow-md`}>
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-sans font-black text-sm text-white tracking-wide uppercase">
                        {cat.label}
                      </h4>
                      <span className="font-mono text-[9px] text-zinc-500">
                        {catSkills.length} Verified Skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Progress List */}
                  <div className="space-y-5">
                    {catSkills.map((skill, idx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={idx} className="space-y-1.5 text-left">
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <div className="flex items-center gap-1.5 text-zinc-300">
                              <SkillIcon className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                              <span className="font-sans font-extrabold text-zinc-200">
                                {skill.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-1.5 font-mono text-[10px]">
                              <span className="text-zinc-500 font-bold bg-zinc-900 border border-zinc-800/40 px-1.5 py-0.5 rounded scale-90">
                                {skill.badge}
                              </span>
                              <span className="text-white font-black">{skill.level}%</span>
                            </div>
                          </div>

                          {/* Progress bar wrapper */}
                          <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-900/50">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.05 }}
                              className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sub-card Trust Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500">
                  <span className="font-mono">STATUS: ACTIVE & VALIDATED</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

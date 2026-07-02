import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Eye, ArrowRightLeft, Sparkles, TrendingUp, CheckCircle, ShieldAlert } from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0].id);

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
    // We can allow click-to-move and mouse-move on drag
    if (e.buttons === 1 || isDragging) {
      handleSliderMove(projectId, e.clientX);
    }
  };

  // Pre-load positions
  const activeProjDetails = PROJECTS.find((p) => p.id === activeProject) || PROJECTS[0];

  return (
    <section id="portfolio" className="relative py-20 bg-black/60">
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <TrendingUp className="w-3.5 h-3.5" /> High-Conversion Proof 
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Case Studies &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              Transformations
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Don't take my word for it. Slide through real-world "Before / After" client overhauls and see the actual Google rank & CTR transformations first-hand.
          </p>
        </div>

        {/* Project Selector Tab Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {PROJECTS.map((proj) => {
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
          {PROJECTS.map((project) => {
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
                
                {/* Column left: Interactive Before / After Image Split Slider */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white leading-none">
                          Interactive Visual Sweep
                        </h3>
                      </div>
                      
                      {/* Explaining instruction */}
                      <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded">
                        <ArrowRightLeft className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                        Move mouse over image
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
                        After Upgrade
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
                          Before
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
                    <div className="p-2 rounded bg-emerald-500/15 text-emerald-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-xs text-zinc-400">
                      <strong>Rohit's Standard:</strong> We eliminate visual bloat, optimize image loads, integrate custom scripts, and inject high contrast callouts.
                    </span>
                  </div>
                </div>

                {/* Column right: Client case outcomes */}
                <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0f1018]/60 border border-zinc-900">
                  <div className="space-y-6">
                    <div>
                      <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block">
                        Project Sponsor
                      </span>
                      <h4 className="font-sans font-black text-2xl text-white">
                        {project.clientName}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="h-[1px] bg-zinc-900" />

                    {/* Key Results list */}
                    <div className="space-y-4">
                      <span className="block font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                        Business metrics improvement
                      </span>
                      
                      <div className="space-y-3.5">
                        {project.results.map((result, rIndex) => (
                          <div key={rIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                            <span className="font-sans text-xs sm:text-sm text-zinc-300">
                              {result}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Gigantic ROI Highlight box */}
                  <div className="mt-8 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[8px] font-mono text-zinc-500 uppercase font-black">
                        Validated Output
                      </span>
                      <span className="block text-sm font-black text-white uppercase tracking-wider">
                        Growth Achieved
                      </span>
                    </div>
                    
                    <div className="text-right px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 font-sans font-black text-emerald-300 text-sm">
                      {project.metrics}
                    </div>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}

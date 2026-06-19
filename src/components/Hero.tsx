import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Zap, Star } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Calculate values normalized around 0
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
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
                <Sparkles className="w-3 h-3 text-yellow-400" /> Open for High-Ticket Freelance Orders
              </span>
            </motion.div>

            {/* Giant Futuristic Neon Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-sans text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 drop-shadow-[0_0_20px_rgba(147,51,234,0.3)]">
                  Dhakad Ra Chora
                </span>
                <span className="block mt-2 font-light text-3xl sm:text-4xl md:text-5xl tracking-normal text-zinc-300">
                  Digital Crafting Agency
                </span>
              </motion.h1>

              {/* Subheadline and Bio Hook */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                I Build <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Websites</span>, Grow{" "}
                <span className="text-white font-bold underline decoration-purple-500 underline-offset-4">Brands</span>, and Deliver High-Conversion Digital Solutions that instantly convert prospects.
              </motion.p>
            </div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-300/80"
            >
              <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Supercharged PageSpeed 95+</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>AdSense-Friendly Templates</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span>100% Five-Star Reviews</span>
              </div>
            </motion.div>

            {/* Action Buttons Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              {/* Primary Call to Action */}
              <button
                id="hero-primary-cta"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto relative px-8 py-4 rounded-xl font-sans text-sm font-bold tracking-wider text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition duration-300 cursor-pointer text-center flex items-center justify-center gap-2 group overflow-hidden"
              >
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-[-30deg] -translate-x-full group-hover:animate-shine" style={{ transition: "none" }} />
              </button>

              {/* Secondary Call to Action */}
              <button
                id="hero-secondary-cta"
                onClick={() => scrollToSection("services")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans text-sm font-bold tracking-wider text-zinc-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white backdrop-blur-sm transition duration-300 text-center cursor-pointer flex items-center justify-center gap-2 group"
                title="View what services Dhakad Ra Chora delivers to clients"
              >
                <span>Explore Services</span>
              </button>
            </motion.div>
          </div>

          {/* Hologram Glassmorphic 3D Card Area */}
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
              className="relative p-6 rounded-2xl bg-[#0b0c13]/80 border border-purple-500/20 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
            >
              {/* Card topbar simulation */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-5">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 border border-zinc-800/80 px-3 py-1 rounded bg-black/40 font-mono text-[9px] text-zinc-400">
                  <Terminal className="w-3 h-3 text-purple-400" />
                  <span>DhakadCraftSystem.sh</span>
                </div>
              </div>

              {/* Dynamic Console Code Lines */}
              <div className="space-y-4 font-mono text-[11px] leading-relaxed select-none">
                <div className="text-zinc-500">
                  {"#"} Accessing Dhakad Ra Chora servers... [OK]
                </div>
                
                <div className="space-y-1">
                  <p className="text-purple-400">&gt; rohit --skillset</p>
                  <div className="pl-4 text-purple-200">
                    <div>[ 'WordPress Designer', 'Blogger Templates' ]</div>
                    <div>[ 'Technical Google SEO Lead' ]</div>
                    <div>[ 'Click-Magnet YouTube Thumbnails' ]</div>
                    <div>[ 'Viral Marketing Integrator' ]</div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-blue-400">&gt; rohit --philosophy</p>
                  <p className="pl-4 text-emerald-300">
                    "Ultra premium, beautiful aesthetics for high brand trusts, keeping prices accessible so startups scale fast."
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-pink-400">&gt; pricing --target</p>
                  <p className="pl-4 text-yellow-300">
                    "Low starting fees. Scalable plans matching business growth metrics."
                  </p>
                </div>

                <div className="h-[1px] bg-zinc-800 my-4" />

                {/* Simulated Growth Dashboard Stats */}
                <div className="grid grid-cols-2 gap-3 mt-4 text-center">
                  <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-lg sm:text-xl">
                      98%
                    </span>
                    <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                      SEO Score avg
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
                    <span className="block font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-lg sm:text-xl">
                      +400%
                    </span>
                    <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-widest mt-1">
                      client traffic
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, MessageSquareCode, Quote, UserCheck, Heart } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-black/40">
      {/* Decorative background light lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Heart className="w-3.5 h-3.5" /> Client Happiness
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Loved By Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              Creators & Brands
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Honest feedback from founders, blog operators, and creators who scaled their operations after trusting Rohit with their digital systems.
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((review, index) => {
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#090a10]/70 border border-zinc-900/80 shadow-xl overflow-hidden transition-all duration-300 group"
              >
                {/* Floating quote watermark vector icon */}
                <div className="absolute -top-3 -right-3 text-zinc-900/30 font-sans text-8xl font-black select-none pointer-events-none group-hover:text-purple-500/5 transition-colors duration-300">
                  <Quote className="w-16 h-16 opacity-30 mt-4 mr-4" />
                </div>

                <div className="space-y-6 relative z-10">
                  {/* Star review stars indicator */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Feedback written body copy */}
                  <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {/* Client Avatar Information line */}
                <div className="mt-8 pt-5 border-t border-zinc-900/80 flex items-center gap-3 relative z-10">
                  <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-zinc-900 p-[1px] border border-zinc-800 flex items-center justify-center">
                    <img
                      src={review.avatar}
                      alt={`${review.author} avatar`}
                      className="w-full h-full object-cover rounded-[7px]"
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
                    <div className="avatar-fallback hidden absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 items-center justify-center font-sans font-extrabold text-[11px] text-white uppercase rounded-[7px]">
                      {review.author.slice(0, 2)}
                    </div>
                  </div>
                  
                  <div>
                    <span className="block font-sans font-bold text-white text-xs sm:text-sm">
                      {review.author}
                    </span>
                    <span className="block font-sans text-[10px] text-zinc-500 font-semibold leading-none mt-1">
                      {review.role}, <strong className="text-purple-400 font-semibold">{review.company}</strong>
                    </span>
                    <span className="block font-mono text-[8px] text-zinc-600 mt-1 uppercase">
                      {review.date}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global review aggregator trust summary */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 p-5 rounded-2xl bg-zinc-950/40 border border-zinc-900/60 max-w-2xl mx-auto">
          <div className="flex items-center -space-x-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-zinc-900 border border-black flex items-center justify-center text-[9px] font-black text-rose-300">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Client thumbnail"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              AV
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-zinc-900 border border-black flex items-center justify-center text-[9px] font-black text-[#10b981]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Client thumbnail"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              SV
            </div>
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-zinc-900 border border-black flex items-center justify-center text-[9px] font-black text-purple-300">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80"
                alt="Client thumbnail"
                referrerPolicy="no-referrer"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              PS
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <span className="font-sans font-black text-white text-sm sm:text-base block">
              Join 40+ Happy Creators & Ventures
            </span>
            <span className="font-sans text-xs text-zinc-500">
              Validated overall satisfaction average score is 4.98 from global projects
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

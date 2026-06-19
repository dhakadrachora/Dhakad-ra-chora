import React from "react";
import { motion } from "motion/react";
import { PRICING_PACKAGES } from "../data";
import { Check, Flame, MessageSquare, DollarSign, Calendar, RefreshCw, Zap } from "lucide-react";

interface PricingProps {
  currency: "USD" | "INR";
  setCurrency: (currency: "USD" | "INR") => void;
  setSelectedPlan: (planName: string) => void;
  scrollToSection: (id: string) => void;
}

export default function Pricing({
  currency,
  setCurrency,
  setSelectedPlan,
  scrollToSection
}: PricingProps) {

  const handlePlanSelect = (packageName: string, price: string) => {
    setSelectedPlan(`${packageName} (${price})`);
    scrollToSection("contact");
  };

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-transparent to-[#05060a]">
      {/* Visual neon light separators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Zap className="w-3.5 h-3.5" /> Affordable Scale
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Transparent Pricing,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              Zero Hidden Fees
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Premium development with an honest, beginner-friendly cost strategy. Pay once or choose modular milestones. Switch currency anytime below.
          </p>

          {/* Section Currency Toggle Bar */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center gap-1.5 bg-[#0b0c13] border border-zinc-800 p-1.5 rounded-xl text-xs font-semibold">
              <span className="text-zinc-400 font-sans mr-2">Pricing Currency:</span>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                  currency === "USD"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-950/40"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all ${
                  currency === "INR"
                    ? "bg-purple-600 text-white shadow-md shadow-purple-950/40"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                INR (₹)
              </button>
            </div>
          </div>
        </div>

        {/* Special Introductory Flash Offers Header & Grid */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950/20 via-blue-950/10 to-purple-950/25 border border-purple-500/20 shadow-[0_0_25px_rgba(147,51,234,0.08)]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-900 pb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[9px] uppercase tracking-wider font-extrabold mb-2 text-left">
                ⚡ Limited Time Introductory Trial Deals
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-sans text-left">
                Dhakad Starter Gateway Offers
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm text-left mt-1">
                Risk-Free sample packages. Experience Rohit's premium design precision and copy optimizations before upgrading to higher scales.
              </p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right bg-zinc-900/60 px-4 py-2 rounded-xl border border-zinc-800">
              <span className="block text-[8px] tracking-widest uppercase text-zinc-500 font-mono font-bold">Offer availability status</span>
              <span className="text-xs text-emerald-400 font-sans font-black flex items-center gap-1.5 mt-0.5">
                <span className="scale-75 inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Active Booking slots (3 Left)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Offer Card 1 */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-5.5 rounded-xl bg-zinc-950/90 border border-zinc-900/65 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] font-bold">
                    CONTENT WRITING
                  </span>
                  <span className="text-2xl font-black text-white font-sans">
                    {currency === "USD" ? "$10" : "₹799"}
                  </span>
                </div>
                <h4 className="text-md font-bold text-white font-sans">
                  1x Google-Optimized SEO Article (500 Words)
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                  Get a complete, 100% human-crafted article structured precisely for Google rankings and Instant AdSense Approval. Complete with H1-H4 headings, custom targeted keyword silos, and plagiarism-free copies. Perfect blog asset.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/65 flex items-center justify-between gap-4">
                <span className="text-[9px] text-zinc-500 font-mono leading-none">
                  ⚡ 24-48 HOUR TURNOUT
                </span>
                <button
                  onClick={() => handlePlanSelect("SEO Article 500 Words Trial Package", currency === "USD" ? "$10" : "₹799")}
                  className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-550 text-black text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Order $10 Article Deal
                </button>
              </div>
            </motion.div>

            {/* Offer Card 2 */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-5.5 rounded-xl bg-zinc-950/90 border border-zinc-900/65 hover:border-purple-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[9px] font-bold">
                    DESIGN CRAFT
                  </span>
                  <span className="text-2xl font-black text-white font-sans">
                    {currency === "USD" ? "$10" : "₹799"}
                  </span>
                </div>
                <h4 className="text-md font-bold text-white font-sans">
                  1x Premium Click-Magnet YouTube Thumbnail
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                  A high-end click-inducing video thumbnail built using professional color contrasts, neon frames, glowing edge borders, and readable strong typography that boosts click rates by thousands of views. Includes editable asset layers.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-900/65 flex items-center justify-between gap-4">
                <span className="text-[9px] text-zinc-500 font-mono leading-none">
                  ⚡ 24 HOUR RAPID PASS
                </span>
                <button
                  onClick={() => handlePlanSelect("YouTube Thumbnail Trial Pack", currency === "USD" ? "$10" : "₹799")}
                  className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-550 text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Order $10 Thumbnail Deal
                </button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Pricing Layout Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {PRICING_PACKAGES.map((pack) => {
            // Determine active localized price tags: $99 or INR conversion
            let localizedPrice = pack.price;
            if (currency === "INR") {
              if (pack.id === "pack-basic") localizedPrice = "₹7,999";
              else if (pack.id === "pack-std") localizedPrice = "₹19,999";
              else if (pack.id === "pack-prem") localizedPrice = "₹39,999";
            }

            return (
              <motion.div
                key={pack.id}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                  pack.isPopular
                    ? "bg-[#0c0d17] border-2 border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.15)] ring-1 ring-purple-400/20"
                    : "bg-[#08090f]/80 border border-zinc-900 shadow-xl"
                }`}
              >
                
                {/* Popularity Badge Overlay */}
                {pack.isPopular && (
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border border-purple-400 text-white text-[10px] uppercase font-black tracking-widest shadow-lg shadow-purple-950/60">
                    <Flame className="w-3.5 h-3.5 animate-pulse" />
                    <span>Best Seller</span>
                  </div>
                )}

                {/* Top Side Meta Info */}
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase font-black">
                      {pack.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white font-sans">
                      {pack.name}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm italic">
                      {pack.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 py-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
                      {localizedPrice}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono">/ setup fee</span>
                  </div>

                  <div className="h-[1px] bg-zinc-900" />

                  {/* Bullet points mapping */}
                  <div className="space-y-4">
                    <span className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                      Plan Inclusions:
                    </span>
                    
                    <ul className="space-y-3">
                      {pack.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <div className="p-0.5 rounded-full bg-purple-500/10 text-purple-400 flex-shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-zinc-300 text-xs sm:text-sm">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan bottom action bars */}
                <div className="mt-10 pt-6 border-t border-zinc-900 space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono text-zinc-400 bg-zinc-950/80 p-2.5 rounded-xl border border-zinc-900">
                    <div className="border-r border-zinc-900/80">
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">
                        <Calendar className="w-2.5 h-2.5 inline mr-1 text-blue-400" /> Delivery
                      </span>
                      <span className="font-extrabold text-zinc-200">{pack.deliveryTime}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">
                        <RefreshCw className="w-2.5 h-2.5 inline mr-1 text-purple-400" /> Revisions
                      </span>
                      <span className="font-extrabold text-zinc-200">{pack.revisions}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlanSelect(pack.name, localizedPrice)}
                    className={`w-full py-4 rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                      pack.isPopular
                        ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
                        : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-zinc-800"
                    }`}
                  >
                    <span>{pack.ctaText}</span>
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Dynamic customized billing disclaimer */}
        <div className="mt-10 text-center max-w-xl mx-auto rounded-xl p-4 bg-zinc-950/40 border border-zinc-900/60 font-sans text-[11px] text-zinc-500 leading-relaxed">
          Need a completely tailored contract or dynamic corporate scaling module? I write customized packages based on specific deliverables. Contact me below for custom terms!
        </div>

      </div>
    </section>
  );
}

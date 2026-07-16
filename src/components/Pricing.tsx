import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { Check, Flame, MessageSquare, DollarSign, Calendar, RefreshCw, Zap } from "lucide-react";
import Tilt from "./Tilt";

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
  const { language, t } = useLanguage();

  const handlePlanSelect = (packageName: string, price: string) => {
    setSelectedPlan(`${packageName} (${price})`);
    scrollToSection("contact");
  };

  const PACKAGES = [
    {
      id: "pack-basic",
      badge: "Snooze & Grow",
      name: "Starter Spark Plan",
      description: "Ideal for basic blogs or personal portfolios seeking instant organic lift.",
      price: "$99",
      features: [
        "1x Standard Blogger Customization or Simple Landing Page",
        "3x High-CTR YouTube Thumbnails",
        "2x SEO Optimized Content Articles (1000 words each)",
        "Core Google Search Console Setup",
        "24/7 Email & Chat Support Integration"
      ],
      deliveryTime: "3-5 Days",
      revisions: "Unlimited",
      ctaText: "Begin Starter Pack",
      isPopular: false
    },
    {
      id: "pack-std",
      badge: "Market Domination",
      name: "Pro Digital Architect",
      description: "Perfect package for growing agencies or active YouTube content channels.",
      price: "$249",
      features: [
        "Full Multi-Page WordPress Setup with Elementor Pro",
        "8x Premium Click-Magnet YouTube Thumbnails",
        "5x Highly Rankable Blog Articles (Safe Keyword Mapping)",
        "Complete Advanced On-Page SEO Audit & Fixes",
        "Basic Google Analytics (GA4) Tracking Metrics"
      ],
      deliveryTime: "7-10 Days",
      revisions: "Unlimited",
      ctaText: "Go Professional",
      isPopular: true
    },
    {
      id: "pack-prem",
      badge: "Ultimate Acceleration",
      name: "Elite Growth Machine",
      description: "Unleash high-conversion systems. Fast loading speed and top SEO ranks.",
      price: "$499",
      features: [
        "High-Speed Glassmorphic Vite/React Portfolio Landing page",
        "Unlimited Custom Graphic Assets & Reel Covers for 1 Month",
        "10x SEO Content Writing Silos (Topical Coverage)",
        "Advanced JSON-LD Schemas & Core Web Vitals Optimization",
        "Dedicated Custom ChatGPT/Claude Prompt Automation Setup"
      ],
      deliveryTime: "14-20 Days",
      revisions: "Unlimited",
      ctaText: "Unleash Elite Scale",
      isPopular: false
    },
    {
      id: "pack-ent",
      badge: "Infinite Customization",
      name: "Custom Enterprise Hub",
      description: "Tailored for large portals or businesses needing advanced bespoke features.",
      price: "$999",
      features: [
        "Complex WordPress/Shopify Multi-Functional Web Platform",
        "Comprehensive Complete Digital Assets Suite (Thumbnail & UI Assets)",
        "Bulk SEO Content Architecture (20+ Strategic Articles)",
        "Advanced Organic Strategy & Competing Keyword Domination",
        "Full Automation Integrations & Custom Webhooks Connection"
      ],
      deliveryTime: "Bespoke Timing",
      revisions: "Unlimited",
      ctaText: "Acquire Custom Hub",
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-transparent to-[#05060a]">
      {/* Visual neon light separators */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Zap className="w-3.5 h-3.5" /> {language === "en" ? "Affordable Scale" : "किफायती पैकेज"}
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === "en" ? "Transparent Pricing," : "पारदर्शी मूल्य निर्धारण,"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              {language === "en" ? "Zero Hidden Fees" : "बिना किसी छिपे शुल्क के"}
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            {language === "en" 
              ? "Premium development with an honest, beginner-friendly cost strategy. Pay once or choose modular milestones. Switch currency anytime below."
              : "एक ईमानदार, शुरुआती-अनुकूल लागत रणनीति के साथ प्रीमियम सेवाएं। एक बार भुगतान करें या मॉड्यूलर माइलस्टोन्स चुनें। नीचे कभी भी करेंसी बदलें।"}
          </p>

          {/* Section Currency Toggle Bar */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex items-center gap-1.5 bg-[#0b0c13] border border-zinc-800 p-1.5 rounded-xl text-xs font-semibold">
              <span className="text-zinc-400 font-sans mr-2">{language === "en" ? "Pricing Currency:" : "मूल्य करेंसी:"}</span>
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
                {language === "en" ? "⚡ Limited Time Introductory Trial Deals" : "⚡ सीमित समय के लिए ट्रायल ऑफर्स"}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white font-sans text-left">
                {language === "en" ? "Rohit's Starter Gateway Offers" : "रोहित के विशेष स्टार्टर ऑफर्स"}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm text-left mt-1">
                {language === "en"
                  ? "Risk-Free sample packages. Experience Rohit's premium design precision and copy optimizations before upgrading to higher scales."
                  : "रिस्क-फ्री सैंपल पैकेजेस। बड़ी स्केल पर काम शुरू करने से पहले रोहित की प्रीमियम डिज़ाइन और लेखन गुणवत्ता का खुद अनुभव करें।"}
              </p>
            </div>
            <div className="flex-shrink-0 text-left md:text-right bg-zinc-900/60 px-4 py-2 rounded-xl border border-zinc-800">
              <span className="block text-[8px] tracking-widest uppercase text-zinc-500 font-mono font-bold">{language === "en" ? "Offer availability status" : "ऑफ़र उपलब्धता स्थिति"}</span>
              <span className="text-xs text-emerald-400 font-sans font-black flex items-center gap-1.5 mt-0.5">
                <span className="scale-75 inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                {language === "en" ? "Active Booking slots (3 Left)" : "बुकिंग स्लॉट सक्रिय (केवल 3 बचे हैं)"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Offer Card 1 */}
            <Tilt className="rounded-xl h-full" max={5} scale={1.01} glowColor="rgba(6, 182, 212, 0.1)">
              <motion.div
                className="p-5.5 rounded-xl bg-zinc-950/90 border border-zinc-900/65 hover:border-cyan-500/30 transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[9px] font-bold">
                      {language === "en" ? "CONTENT WRITING" : "कंटेंट लेखन"}
                    </span>
                    <span className="text-2xl font-black text-white font-sans">
                      {currency === "USD" ? "$10" : "₹799"}
                    </span>
                  </div>
                  <h4 className="text-md font-bold text-white font-sans">
                    {language === "en" ? "1x Google-Optimized SEO Article (500 Words)" : "1x गूगल-अनुकूलित एसईओ लेख (500 शब्द)"}
                  </h4>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                    {language === "en"
                      ? "Get a complete, 100% human-crafted article structured precisely for Google rankings and Instant AdSense Approval. Complete with H1-H4 headings, custom targeted keyword silos, and plagiarism-free copies. Perfect blog asset."
                      : "गूगल रैंकिंग और इंस्टेंट एडसेंस अप्रूवल के लिए 100% मानव-लिखित उत्कृष्ट लेख प्राप्त करें। H1-H4 हेडिंग्स, लक्षित कीवर्ड और प्लेगरिज्म-मुक्त कंटेंट के साथ।"}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/65 flex items-center justify-between gap-4">
                  <span className="text-[9px] text-zinc-500 font-mono leading-none">
                    {language === "en" ? "⚡ 24-48 HOUR TURNOUT" : "⚡ 24-48 घंटे में डिलीवरी"}
                  </span>
                  <button
                    onClick={() => handlePlanSelect(language === "en" ? "SEO Article 500 Words Trial Package" : "एसईओ आर्टिकल 500 शब्द ट्रायल पैकेज", currency === "USD" ? "$10" : "₹799")}
                    className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-550 text-black text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                  >
                    {language === "en" ? "Order $10 Article Deal" : "$10 आर्टिकल डील ऑर्डर करें"}
                  </button>
                </div>
              </motion.div>
            </Tilt>

            {/* Offer Card 2 */}
            <Tilt className="rounded-xl h-full" max={5} scale={1.01} glowColor="rgba(168, 85, 247, 0.1)">
              <motion.div
                className="p-5.5 rounded-xl bg-zinc-950/90 border border-zinc-900/65 hover:border-purple-500/30 transition-all flex flex-col justify-between h-full"
              >
                <div className="space-y-3 text-left">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[9px] font-bold">
                      {language === "en" ? "DESIGN CRAFT" : "डिज़ाइन ग्राफ़िक"}
                    </span>
                    <span className="text-2xl font-black text-white font-sans">
                      {currency === "USD" ? "$10" : "₹799"}
                    </span>
                  </div>
                  <h4 className="text-md font-bold text-white font-sans">
                    {language === "en" ? "1x Premium Click-Magnet YouTube Thumbnail" : "1x प्रीमियम क्लिक-मैग्नेट यूट्यूब थंबनेल"}
                  </h4>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                    {language === "en"
                      ? "A high-end click-inducing video thumbnail built using professional color contrasts, neon frames, glowing edge borders, and readable strong typography that boosts click rates by thousands of views. Includes editable asset layers."
                      : "उच्च गुणवत्ता वाला आकर्षक वीडियो थंबनेल जो प्रोफेशनल कलर कंट्रास्ट, नियोन फ्रेम्स, और मजबूत टाइपोग्राफी के साथ आपके वीडियो व्यूज को बढ़ाता है।"}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-900/65 flex items-center justify-between gap-4">
                  <span className="text-[9px] text-zinc-500 font-mono leading-none">
                    {language === "en" ? "⚡ 24 HOUR RAPID PASS" : "⚡ 24 घंटे एक्सप्रेस डेलिवरी"}
                  </span>
                  <button
                    onClick={() => handlePlanSelect(language === "en" ? "YouTube Thumbnail Trial Pack" : "यूट्यूब थंबनेल ट्रायल पैक", currency === "USD" ? "$10" : "₹799")}
                    className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-550 text-white text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                  >
                    {language === "en" ? "Order $10 Thumbnail Deal" : "$10 थंबनेल डील ऑर्डर करें"}
                  </button>
                </div>
              </motion.div>
            </Tilt>

          </div>
        </div>

        {/* Pricing Layout Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          {PACKAGES.map((pack) => {
            // Determine active localized price tags: $99 or INR conversion
            let localizedPrice = pack.price;
            if (currency === "INR") {
              if (pack.id === "pack-basic") localizedPrice = "₹7,999";
              else if (pack.id === "pack-std") localizedPrice = "₹19,999";
              else if (pack.id === "pack-prem") localizedPrice = "₹39,999";
              else if (pack.id === "pack-ent") localizedPrice = "₹79,999";
            }

            return (
              <Tilt 
                key={pack.id} 
                className="h-full rounded-2xl" 
                max={8} 
                scale={1.02} 
                glowColor={pack.isPopular ? "rgba(147, 51, 234, 0.15)" : "rgba(59, 130, 246, 0.08)"}
              >
                <motion.div
                  className={`relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                    pack.isPopular
                      ? "bg-[#0c0d17] border-2 border-purple-500/50 shadow-[0_0_30px_rgba(147,51,234,0.15)] ring-1 ring-purple-400/20"
                      : "bg-[#08090f]/80 border border-zinc-900 shadow-xl"
                  }`}
                >
                  
                  {/* Popularity Badge Overlay */}
                  {pack.isPopular && (
                    <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border border-purple-400 text-white text-[10px] uppercase font-black tracking-widest shadow-lg shadow-purple-950/60 z-10">
                      <Flame className="w-3.5 h-3.5 animate-pulse" />
                      <span>{language === "en" ? "Best Seller" : "लोकप्रिय"}</span>
                    </div>
                  )}

                  {/* Top Side Meta Info */}
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <span className="text-[10px] text-purple-400 font-mono tracking-widest uppercase font-black">
                        {pack.badge}
                      </span>
                      <h3 className="text-2xl font-black text-white font-sans text-left">
                        {pack.name}
                      </h3>
                      <p className="text-zinc-400 text-xs sm:text-sm italic text-left">
                        {pack.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-2 py-2">
                      <span className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
                        {localizedPrice}
                      </span>
                      <span className="text-zinc-500 text-xs font-mono">{language === "en" ? "/ setup fee" : "/ सेटअप शुल्क"}</span>
                    </div>

                    <div className="h-[1px] bg-zinc-900" />

                    {/* Bullet points mapping */}
                    <div className="space-y-4 text-left">
                      <span className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                        {language === "en" ? "Plan Inclusions:" : "प्लान में शामिल सेवाएँ:"}
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
                          <Calendar className="w-2.5 h-2.5 inline mr-1 text-blue-400" /> {language === "en" ? "Delivery" : "डिलीवरी"}
                        </span>
                        <span className="font-extrabold text-zinc-200">{pack.deliveryTime}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5">
                          <RefreshCw className="w-2.5 h-2.5 inline mr-1 text-purple-400" /> {language === "en" ? "Revisions" : "संशोधन"}
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
              </Tilt>
            );
          })}
        </div>

        {/* Dynamic customized billing disclaimer */}
        <div className="mt-10 text-center max-w-xl mx-auto rounded-xl p-4 bg-zinc-950/40 border border-zinc-900/60 font-sans text-[11px] text-zinc-500 leading-relaxed">
          {language === "en"
            ? "Need a completely tailored contract or dynamic corporate scaling module? I write customized packages based on specific deliverables. Contact me below for custom terms!"
            : "क्या आपको पूरी तरह से कस्टमाइज्ड कॉन्ट्रैक्ट या बड़े पैमाने पर डिजिटल सेवा की आवश्यकता है? मैं आपकी विशेष आवश्यकताओं के अनुसार कस्टम पैकेज बनाता हूँ। कस्टम टर्म्स के लिए नीचे संपर्क करें!"}
        </div>

      </div>
    </section>
  );
}

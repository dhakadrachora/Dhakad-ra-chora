import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { useLanguage, TRANSLATED_SERVICES } from "./LanguageContext";
import { Layout, Search, Youtube, FileText, Zap, TrendingUp, CircleAlert, ArrowRight } from "lucide-react";
import Tilt from "./Tilt";

interface ServicesProps {
  currency: "USD" | "INR";
  setSelectedService: (serviceName: string) => void;
  scrollToSection: (id: string) => void;
}

// Map service icon IDs with beautiful exact Lucide icons fallback
const dynamicIconMap: Record<string, any> = {
  Layout: Layout,
  SearchCode: Search,
  Youtube: Youtube,
  FileText: FileText,
  Zap: Zap,
  TrendingUp: TrendingUp
};

export default function Services({
  currency,
  setSelectedService,
  scrollToSection
}: ServicesProps) {
  const { language, t } = useLanguage();

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection("contact");
  };

  const currentServices = TRANSLATED_SERVICES[language] || TRANSLATED_SERVICES["en"];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-transparent to-[#090a10]">
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Zap className="w-3.5 h-3.5" /> {t("services.badge")}
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Premium Services Built To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
              Convert Traffic
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            {t("services.desc")}
          </p>
        </div>

        {/* Services Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentServices.map((service, index) => {
            // Retrieve computed Icon key, with search as generic fallback
            // In the localized files, we can match titles to our fallback icons or map by service ID
            const serviceIconKey = service.id === "web-design" ? "Layout" : 
                                   service.id === "seo-optimization" ? "SearchCode" :
                                   service.id === "yt-thumbnails" ? "Youtube" :
                                   service.id === "blog-writing" ? "FileText" :
                                   service.id === "landing-pages" ? "Zap" : "TrendingUp";
            
            const IconComponent = dynamicIconMap[serviceIconKey] || Search;

            // Handle dual-pricing tags dynamically based on active selection state
            const pricingTag = currency === "USD" 
              ? service.priceEst.split("/")[0].trim() 
              : service.priceEst.split("/")[1]?.trim() || service.priceEst;

            return (
              <Tilt 
                key={service.id} 
                className="h-full rounded-2xl" 
                max={10} 
                scale={1.02} 
                glowColor="rgba(147, 51, 234, 0.12)"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-8 rounded-2xl bg-[#0e0f18]/60 border border-zinc-900 hover:border-purple-500/20 shadow-2xl overflow-hidden transition-colors duration-300"
                >
                  {/* Neon bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  
                  {/* Ambient glow accent that floats inside cards */}
                  <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all duration-500" />

                  {/* Head Card Row: Icon & Tag */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(147,51,234,0.4)] transition-all duration-300">
                        <IconComponent className="w-5.5 h-5.5" />
                      </div>
                      <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                        {service.tag}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-black text-xl text-white group-hover:text-purple-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed min-h-[4rem]">
                        {service.description}
                      </p>
                    </div>

                    <div className="h-[1px] bg-zinc-900/60 my-4" />

                    {/* Bullet Benefits list */}
                    <div className="space-y-2.5">
                      <span className="block font-mono text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                        {language === "en" ? "Deliverables included:" : "शामिल डेलिवरेबल्स:"}
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {service.benefits.map((benefit: string, bIndex: number) => (
                          <li key={bIndex} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0 animate-pulse" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Card Row: Estimates & Action */}
                  <div className="mt-8 pt-5 border-t border-zinc-900/80 space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="block text-[8px] text-zinc-500 uppercase font-black">
                          {language === "en" ? "Timeline" : "समय-सीमा"}
                        </span>
                        <span className="text-zinc-200 font-extrabold">{service.timeEst}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[8px] text-zinc-500 uppercase font-black">
                          {language === "en" ? "Estimate Cost" : "अनुमानित लागत"}
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-md">
                          {pricingTag}
                        </span>
                      </div>
                    </div>

                    {/* Ordering CTA */}
                    <button
                      onClick={() => handleServiceSelect(service.title)}
                      className="w-full py-3.5 px-4 rounded-xl font-sans text-xs font-bold tracking-wider text-center text-white bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 border border-white/10 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1.5 group/btn"
                      title={`Order ${service.title} plan`}
                    >
                      <span>{language === "en" ? "Inquire Offer" : "ऑफ़र के लिए संपर्क करें"}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
}

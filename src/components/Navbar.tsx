import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Star, Mail, PhoneCall, Layers, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  currency: "USD" | "INR";
  setCurrency: (currency: "USD" | "INR") => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({
  currency,
  setCurrency,
  activeSection,
  setActiveSection
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "pricing", label: "Pricing" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      setIsScrolled(window.scrollY > 30);

      // Scroll progress percentage math
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Check current active section by bounding rects
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07070a]/80 backdrop-blur-md border-b border-purple-500/10 py-3 shadow-lg shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Indicator Line */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Freelancer Brand Logo Header */}
          <div
            id="brand-logo"
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[1.5px] overflow-hidden shadow-[0_0_15px_rgba(147,51,234,0.3)] group-hover:shadow-[0_0_20px_rgba(147,51,234,0.6)] transition-all">
              <div className="w-full h-full rounded-[10px] bg-[#0c0c12] flex items-center justify-center">
                <span className="font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 text-lg">
                  DR
                </span>
              </div>
              {/* Spinning active indicator ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 mix-blend-color-dodge animate-spin [animation-duration:8s] -z-10" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-tight text-white text-lg leading-none group-hover:text-purple-300 transition-colors">
                Dhakad Ra Chora
              </span>
              <span className="font-mono text-[9px] text-purple-400/80 tracking-widest uppercase">
                Premium Digital Craftsman
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 rounded-full font-sans text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-white shadow-[0_2px_10px_rgba(147,51,234,0.25)]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-purple-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Config Controls & Call-to-action button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Currency Selector Toggle */}
            <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-lg">
              <button
                onClick={() => setCurrency("USD")}
                className={`flex items-center gap-0.5 px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  currency === "USD"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                title="Switch pricing to USD"
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency("INR")}
                className={`flex items-center gap-0.5 px-2 py-1 rounded text-[10px] font-mono font-bold transition-all ${
                  currency === "INR"
                    ? "bg-purple-600 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                title="Switch pricing to Indian Rupee"
              >
                INR (₹)
              </button>
            </div>

            {/* Instant Contact CTA */}
            <button
              id="header-cta-button"
              onClick={() => scrollTo("contact")}
              className="relative px-4.5 py-1.8 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white text-xs font-bold tracking-wider rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition duration-300 group overflow-hidden flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-200 animate-pulse" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 w-1/2 bg-white/20 skew-x-[-30deg] -translate-x-full group-hover:animate-shine" style={{ transition: "none" }} />
            </button>
          </div>

          {/* Mobile Right Controls: Currency + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Quick Currency Selector for mobile */}
            <button
              onClick={() => setCurrency(currency === "USD" ? "INR" : "USD")}
              className="flex items-center gap-1 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-lg font-mono text-[10px] font-bold text-zinc-300 hover:border-purple-500/50"
            >
              <Globe className="w-3 h-3 text-purple-400" />
              <span>{currency === "USD" ? "$" : "₹"}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-navigation-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-purple-500/10 bg-[#07070a]/95 backdrop-blur-lg overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="h-[1px] bg-zinc-800 my-2" />
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-purple-500"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
              <div className="h-[1px] bg-zinc-800 my-3" />
              <div className="px-4">
                <button
                  onClick={() => {
                    scrollTo("contact");
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm tracking-widest rounded-xl hover:shadow-[0_0_15px_rgba(147,51,234,0.4)]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Hire Me Now</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

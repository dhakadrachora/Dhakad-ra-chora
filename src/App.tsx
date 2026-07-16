import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Loader3D from "./components/Loader3D";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import AiSeoDivision from "./components/AiSeoDivision";
import PremiumWorkflow from "./components/PremiumWorkflow";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import AestheticShowcase from "./components/AestheticShowcase";
import VerifiedProofHub from "./components/VerifiedProofHub";
import InteractivePlayground from "./components/InteractivePlayground";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  // State to hold prefilled selections for the Contact Form
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const handleSetSelectedPlan = (plan: string) => {
    setSelectedService(""); // reset service
    setSelectedPlan(plan);
  };

  const handleSetSelectedService = (service: string) => {
    setSelectedPlan(""); // reset plan
    setSelectedService(service);
  };

  // Subtle fadeInUp settings for premium scroll choreography
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  return (
    <div className={`relative min-h-screen selection:bg-purple-600 selection:text-white font-sans antialiased overflow-hidden transition-colors duration-300 ${
      isDarkMode ? "bg-[#060608] text-white" : "bg-[#f4f4f7] text-zinc-900"
    }`}>
      
      {/* Luxury Cinematic Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-black/10 z-[9999] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 via-purple-500 to-pink-500 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(139,92,246,0.6)]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Cinematic 3D Spinner Intro Preloader */}
      <Loader3D />

      {/* Floating 3D Node Mesh Interactive Canvas */}
      <Background3D isDarkMode={isDarkMode} />

      {/* Primary Sticky Header */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Full-Screen Content Layout Section Columns */}
      <main className="relative z-10 w-full space-y-12 sm:space-y-20">
        
        {/* 1. Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Hero scrollToSection={scrollToSection} />
        </motion.div>

        {/* 2. Biography About Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <About />
        </motion.div>

        {/* 2.5 Technical Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <TechnicalSkills />
        </motion.div>

        {/* 3. High Fidelity Services Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Services
            currency={currency}
            setSelectedService={handleSetSelectedService}
            scrollToSection={scrollToSection}
          />
        </motion.div>

        {/* 3.5 AI & SEO Specialized Divisions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <AiSeoDivision />
        </motion.div>

        {/* Premium Project Lifecycle Workflow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <PremiumWorkflow />
        </motion.div>

        {/* 4. Portfolio Before-After Case Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Portfolio />
        </motion.div>

        {/* 10 bespoke projects, 20 thumbnails & Vector Graphics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <AestheticShowcase isDarkMode={isDarkMode} />
        </motion.div>

        {/* Real Verified Proof & Audit Dashboards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <VerifiedProofHub />
        </motion.div>

        {/* Real Live Demo Playground Zone */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <InteractivePlayground
            setSelectedService={handleSetSelectedService}
            setSelectedPlan={handleSetSelectedPlan}
            scrollToSection={scrollToSection}
          />
        </motion.div>

        {/* 5. Pricing Cards Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Pricing
            currency={currency}
            setCurrency={setCurrency}
            setSelectedPlan={handleSetSelectedPlan}
            scrollToSection={scrollToSection}
          />
        </motion.div>

        {/* 6. Client Feedback Star Testimonial Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Testimonials />
        </motion.div>

        {/* 7. Action Contact Intake Portal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUpVariants}
        >
          <Contact
            selectedPlan={selectedPlan}
            selectedService={selectedService}
          />
        </motion.div>

      </main>

      {/* Clean Aesthetic Footer Row */}
      <Footer />

    </div>
  );
}

import React, { useState, useEffect } from "react";
import Loader3D from "./components/Loader3D";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechnicalSkills from "./components/TechnicalSkills";
import AiSeoDivision from "./components/AiSeoDivision";
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

  // State to hold prefilled selections for the Contact Form
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedService, setSelectedService] = useState("");

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

  return (
    <div className={`relative min-h-screen selection:bg-purple-600 selection:text-white font-sans antialiased overflow-hidden transition-colors duration-300 ${
      isDarkMode ? "bg-[#060608] text-white" : "bg-[#f4f4f7] text-zinc-900"
    }`}>
      
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
      <main className="relative z-10 w-full">
        
        {/* 1. Hero Section */}
        <Hero scrollToSection={scrollToSection} />

        {/* 2. Biography About Section */}
        <About />

        {/* 2.5 Technical Skills Section */}
        <TechnicalSkills />

        {/* 3. High Fidelity Services Section */}
        <Services
          currency={currency}
          setSelectedService={handleSetSelectedService}
          scrollToSection={scrollToSection}
        />

        {/* 3.5 AI & SEO Specialized Divisions */}
        <AiSeoDivision />

        {/* 4. Portfolio Before-After Case Section */}
        <Portfolio />

        {/* 10 bespoke projects, 20 thumbnails & Vector Graphics */}
        <AestheticShowcase isDarkMode={isDarkMode} />

        {/* Real Verified Proof & Audit Dashboards */}
        <VerifiedProofHub />

        {/* Real Live Demo Playground Zone */}
        <InteractivePlayground
          setSelectedService={handleSetSelectedService}
          setSelectedPlan={handleSetSelectedPlan}
          scrollToSection={scrollToSection}
        />

        {/* 5. Pricing Cards Section */}
        <Pricing
          currency={currency}
          setCurrency={setCurrency}
          setSelectedPlan={handleSetSelectedPlan}
          scrollToSection={scrollToSection}
        />

        {/* 6. Client Feedback Star Testimonial Section */}
        <Testimonials />

        {/* 7. Action Contact Intake Portal */}
        <Contact
          selectedPlan={selectedPlan}
          selectedService={selectedService}
        />

      </main>

      {/* Clean Aesthetic Footer Row */}
      <Footer />

    </div>
  );
}

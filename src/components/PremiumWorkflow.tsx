import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import { 
  Compass, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Rocket, 
  Plus, 
  Minus, 
  ArrowRight, 
  Sparkles,
  Award,
  Clock,
  Settings,
  Flame,
  ShieldAlert,
  Terminal,
  Activity
} from "lucide-react";
import Tilt from "./Tilt";

interface WorkflowStep {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: any;
  color: string;
  glowColor: string;
  duration: string;
  deliverables: string[];
  tools: string[];
  metrics: { label: string; value: string }[];
  accentBorder: string;
}

const WORKFLOW_STEPS_EN: WorkflowStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery & Strategic Audit",
    shortDesc: "Deconstruct your target ecosystem, perform competitor audits, and map out structured keyword silos.",
    longDesc: "Every premium product begins with thorough intelligence gathering. We analyze domain authority gaps, keyword volume clusters, and direct competitor source code. We map your audience's intent structure, allowing us to build an absolute blueprint for SEO dominant architecture.",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.2)",
    duration: "24-48 Hours",
    deliverables: [
      "Audience Intent Mapping Report",
      "Competitor Performance Breakdown",
      "High-Target Keyword Silo Architecture",
      "Technical Debt Audit List"
    ],
    tools: ["SEMrush", "Google Lighthouse", "Ahrefs", "Screaming Frog"],
    metrics: [
      { label: "Audit Depth", value: "100%" },
      { label: "Target ROI", value: "4.5x" }
    ],
    accentBorder: "border-cyan-500/30 group-hover:border-cyan-400"
  },
  {
    id: "architecture",
    number: "02",
    title: "High-Fidelity Blueprinting",
    shortDesc: "Architect clean schema designs, relational entity relations, and gorgeous pixel-perfect wireframes.",
    longDesc: "We design robust, low-latency client state mechanisms and high-converting typography structures before writing a single line of production code. This stage defines the user experience framework, absolute font tracking tables, and data models.",
    icon: Layers,
    color: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.2)",
    duration: "2-3 Days",
    deliverables: [
      "Interactive High-Fidelity Prototypes",
      "Relational DB Schema Diagrams",
      "Font Tracking & Typography Matrix",
      "Tailwind Color Palette Mapping"
    ],
    tools: ["Figma", "dbdiagram.io", "Whimsical", "TailwindCSS"],
    metrics: [
      { label: "Layout Precision", value: "Pixel-Perfect" },
      { label: "User Flow", value: "3-Click Max" }
    ],
    accentBorder: "border-blue-500/30 group-hover:border-blue-400"
  },
  {
    id: "crafting",
    number: "03",
    title: "Optimized Logic & Coding",
    shortDesc: "Perform server-side React crafting, prompt engineering, and low-latency API integration.",
    longDesc: "Using next-gen React design patterns combined with extreme bundle optimization, we craft lightweight, modular, self-healing codebases. We integrate advanced AI reasoning using Google Gemini API proxies to deliver live intelligence without slowing down the initial page render.",
    icon: Cpu,
    color: "from-purple-500 to-fuchsia-600",
    glowColor: "rgba(168, 85, 247, 0.2)",
    duration: "4-6 Days",
    deliverables: [
      "Modular clean-compiled codebase",
      "Secure server-side API Gateway proxies",
      "Lazy-loaded dynamic route structures",
      "Custom Gemini model configurations"
    ],
    tools: ["React 18+", "GSAP", "Vite", "Gemini SDK", "TypeScript"],
    metrics: [
      { label: "Bundle Size", value: "<45KB Gzipped" },
      { label: "Framerates", value: "60 FPS Locked" }
    ],
    accentBorder: "border-purple-500/30 group-hover:border-purple-400"
  },
  {
    id: "auditing",
    number: "04",
    title: "Rigorous Testing & Audits",
    shortDesc: "Validate absolute performance speeds, cross-browser responsiveness, and structural accessibility.",
    longDesc: "We subject the application to intense stress testing and automated validators. Every static page is optimized to satisfy Google's strict Core Web Vitals, ensuring near-instant loading on poor network connections.",
    icon: CheckCircle2,
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.2)",
    duration: "24 Hours",
    deliverables: [
      "Lighthouse 100/100 Core Metrics",
      "Cross-Device Adaptability Report",
      "Automated Linter Verification Logs",
      "W3C & WCAG Accessibility Compliance"
    ],
    tools: ["Playwright", "Lighthouse CI", "ESLint", "W3C Validator"],
    metrics: [
      { label: "FCP Speed", value: "0.4s" },
      { label: "SEO Score", value: "100%" }
    ],
    accentBorder: "border-pink-500/30 group-hover:border-pink-400"
  },
  {
    id: "launch",
    number: "05",
    title: "Polished Launch & Scale",
    shortDesc: "Deploy to highly available Cloud containers, secure SSL channels, and establish Google Indexing pipelines.",
    longDesc: "Your application is delivered to premium production environments with automatic scale-to-zero pricing to minimize hosting overheads. We configure search console sitemaps, enabling immediate discovery by Google's rank crawling bots.",
    icon: Rocket,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.2)",
    duration: "Instant",
    deliverables: [
      "Zero-downtime container deploy",
      "SSL Certificate & DNS Setup",
      "Instant indexing search sitemaps",
      "24/7 Security Health Shield"
    ],
    tools: ["GCP Cloud Run", "Vercel", "Google Search Console", "Cloudflare"],
    metrics: [
      { label: "Global Uptime", value: "99.99%" },
      { label: "Server Cost", value: "Pay-As-You-Go" }
    ],
    accentBorder: "border-emerald-500/30 group-hover:border-emerald-400"
  }
];

const WORKFLOW_STEPS_HI: WorkflowStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "खोज और रणनीतिक ऑडिट",
    shortDesc: "अपने प्रतिस्पर्धियों का विश्लेषण करें, डोमेन गैप्स की पहचान करें और व्यवस्थित कीवर्ड साइलो का नक्शा बनाएं।",
    longDesc: "हर प्रीमियम प्रोजेक्ट की शुरुआत गहन शोध और डेटा विश्लेषण से होती है। हम डोमेन अथॉरिटी गैप्स, कीवर्ड वॉल्यूम और प्रतिस्पर्धियों के सोर्स कोड का विश्लेषण करते हैं ताकि सर्च रैंकिंग में शीर्ष स्थान प्राप्त करने के लिए सटीक रूपरेखा तैयार की जा सके।",
    icon: Compass,
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.2)",
    duration: "24-48 घंटे",
    deliverables: [
      "दर्शक उद्देश्य मैपिंग रिपोर्ट",
      "प्रतिस्पर्धी प्रदर्शन विश्लेषण",
      "उच्च-लक्षित कीवर्ड साइलो आर्किटेक्चर",
      "तकनीकी ऑडिट सूची"
    ],
    tools: ["SEMrush", "Google Lighthouse", "Ahrefs", "Screaming Frog"],
    metrics: [
      { label: "ऑडिट गहराई", value: "100%" },
      { label: "लक्षित ROI", value: "4.5 गुना" }
    ],
    accentBorder: "border-cyan-500/30 group-hover:border-cyan-400"
  },
  {
    id: "architecture",
    number: "02",
    title: "उच्च-सटीकता ब्लूप्रिंटिंग",
    shortDesc: "मजबूत स्कीमा डिजाइन, डेटाबेस संबंध और पिक्सेल-परफेक्ट वायरफ्रेम का निर्माण करें।",
    longDesc: "हम कोडिंग शुरू करने से पहले ही मजबूत यूजर एक्सपीरियंस फ्रेमवर्क, डेटाबेस संबंध और आकर्षक टाइपोग्राफी डिजाइन तैयार करते हैं। यह चरण प्रोजेक्ट की नींव को पिक्सेल-परफेक्ट सटीकता के साथ मजबूती प्रदान करता है।",
    icon: Layers,
    color: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.2)",
    duration: "2-3 दिन",
    deliverables: [
      "इंटरैक्टिव हाई-फिडेलिटी प्रोटोटाइप",
      "रिलेशनल डेटाबेस स्कीमा आरेख",
      "फॉन्ट और टाइपोग्राफी मैट्रिक्स",
      "Tailwind कलर पैलेट मैपिंग"
    ],
    tools: ["Figma", "dbdiagram.io", "Whimsical", "TailwindCSS"],
    metrics: [
      { label: "लेआउट सटीकता", value: "पिक्सेल-परफेक्ट" },
      { label: "यूजर फ्लो", value: "अधिकतम 3 क्लिक" }
    ],
    accentBorder: "border-blue-500/30 group-hover:border-blue-400"
  },
  {
    id: "crafting",
    number: "03",
    title: "अनुकूलित लॉजिक और कोडिंग",
    shortDesc: "रिएक्ट (React) कोडिंग, प्रॉम्प्ट इंजीनियरिंग और कम-लेटेंसी एपीआई एकीकरण।",
    longDesc: "बेहतर बंडल ऑप्टिमाइज़ेशन और मॉडर्न रिएक्ट डिज़ाइन पैटर्न का उपयोग करके हम बेहद सुरक्षित और मजबूत कोडबेस तैयार करते हैं। हम वेबसाइट की गति से समझौता किए बिना गूगल जेमिनी एआई का एकीकरण भी प्रदान करते हैं।",
    icon: Cpu,
    color: "from-purple-500 to-fuchsia-600",
    glowColor: "rgba(168, 85, 247, 0.2)",
    duration: "4-6 दिन",
    deliverables: [
      "मॉड्यूलर क्लीन-कंपाइल्ड कोडबेस",
      "सुरक्षित सर्वर-साइड एपीआई प्रॉक्सी",
      "लेजी-लोडेड डायनेमिक राउट्स",
      "कस्टम जेमिनी मॉडल कॉन्फ़िगरेशन"
    ],
    tools: ["React 18+", "GSAP", "Vite", "Gemini SDK", "TypeScript"],
    metrics: [
      { label: "बंडल साइज", value: "<45KB Gzipped" },
      { label: "फ्रेमरेट", value: "60 FPS लॉक्ड" }
    ],
    accentBorder: "border-purple-500/30 group-hover:border-purple-400"
  },
  {
    id: "auditing",
    number: "04",
    title: "कठिन परीक्षण और ऑडिट",
    shortDesc: "प्रदर्शन की गति, विभिन्न ब्राउज़रों पर अनुकूलता और सुगमता (Accessibility) का सत्यापन।",
    longDesc: "हम तैयार एप्लिकेशन का गहन और कड़ा परीक्षण करते हैं। हर एक पेज को गूगल कोर वेब विटल्स (Core Web Vitals) के अनुकूल बनाया जाता है, जिससे धीमी इंटरनेट स्पीड पर भी वेबसाइट तुरंत लोड हो।",
    icon: CheckCircle2,
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.2)",
    duration: "24 घंटे",
    deliverables: [
      "Lighthouse 100/100 कोर स्कोर",
      "क्रॉस-डिवाइस रिस्पॉन्सिवनेस रिपोर्ट",
      "स्वचालक लिन्टर वेरिफिकेशन लॉग्स",
      "W3C और WCAG एक्सेसिबिलिटी अनुपालन"
    ],
    tools: ["Playwright", "Lighthouse CI", "ESLint", "W3C Validator"],
    metrics: [
      { label: "FCP स्पीड", value: "0.4 सेकंड" },
      { label: "SEO स्कोर", value: "100%" }
    ],
    accentBorder: "border-pink-500/30 group-hover:border-pink-400"
  },
  {
    id: "launch",
    number: "05",
    title: "सफल लॉन्च और स्केलिंग",
    shortDesc: "सुरक्षित क्लाउड कंटेनर पर परिनियोजन (Deployment), एसएसएल सुरक्षा और गूगल इंडेक्सिंग सेटअप।",
    longDesc: "आपकी वेबसाइट को सुरक्षित और उन्नत क्लाउड सर्वर पर डिप्लॉय किया जाता है, जिसमें ऑटो-स्केलिंग की सुविधा होती है। हम गूगल सर्च कंसोल (Search Console) और साइटमैप भी सेटअप करते हैं ताकि आपकी साइट तुरंत गूगल सर्च में दिखने लगे।",
    icon: Rocket,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.2)",
    duration: "त्वरित",
    deliverables: [
      "ज़ीरो-डाउनटाइम कंटेनर डिप्लॉय",
      "SSL सर्टिफिकेट और DNS सेटअप",
      "त्वरित सर्च साइटमैप इंडेक्सिंग",
      "24/7 सुरक्षा स्वास्थ्य शील्ड"
    ],
    tools: ["GCP Cloud Run", "Vercel", "Google Search Console", "Cloudflare"],
    metrics: [
      { label: "वैश्विक अपटाइम", value: "99.99%" },
      { label: "सर्वर लागत", value: "Pay-As-You-Go" }
    ],
    accentBorder: "border-emerald-500/30 group-hover:border-emerald-400"
  }
];

export default function PremiumWorkflow() {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState<string>("discovery");
  const [completedSteps, setCompletedSteps] = useState<string[]>(["discovery"]);
  const [simulatedProgress, setSimulatedProgress] = useState<number>(20);
  
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const steps = language === "hi" ? WORKFLOW_STEPS_HI : WORKFLOW_STEPS_EN;

  // Toggle step completion in the premium interactive simulator
  const selectStep = (stepId: string) => {
    setActiveStep(stepId);
    
    // Animate active step state details utilizing GSAP
    const targetElement = document.getElementById(`detail-${stepId}`);
    if (targetElement) {
      gsap.fromTo(targetElement, 
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    // Update progress tracker
    const index = steps.findIndex(s => s.id === stepId);
    const percentage = ((index + 1) / steps.length) * 100;
    
    const progressObj = { val: simulatedProgress };
    gsap.to(progressObj, {
      val: percentage,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        setSimulatedProgress(Math.round(progressObj.val));
      }
    });

    // Populate completed steps list
    const newCompleted = steps.slice(0, index + 1).map(s => s.id);
    setCompletedSteps(newCompleted);
  };

  useEffect(() => {
    // Initial entrance animation for workflow timeline cards
    if (stepsContainerRef.current) {
      gsap.fromTo(
        stepsContainerRef.current.children,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.12, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: stepsContainerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  return (
    <section id="workflow" className="relative py-24 sm:py-32 overflow-hidden bg-[#060608]/40 border-t border-b border-zinc-900">
      
      {/* Decorative vector background accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Component Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-[10px] font-bold tracking-widest uppercase animate-pulse">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>{language === "en" ? "EXCEPTIONAL FREELANCE STANDARDS" : "उत्कृष्ट फ्रीलांस मानक"}</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white font-sans tracking-tight leading-none uppercase">
            {language === "en" ? "The Premium" : "प्रीमियम"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
              {language === "en" ? "Project Workflow" : "प्रोजेक्ट वर्कफ़्लो"}
            </span>
          </h2>
          
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === "en"
              ? "Our execution methodology is engineered to maximize technical clarity, security compliance, and direct business results. Explore our step-by-step launch framework below."
              : "हमारी कार्यप्रणाली तकनीकी स्पष्टता, सुरक्षा अनुपालन और प्रत्यक्ष व्यावसायिक परिणामों को अधिकतम करने के लिए तैयार की गई है। नीचे हमारे चरण-दर-चरण लॉन्च फ्रेमवर्क का पता लगाएं।"}
          </p>
        </div>

        {/* Dynamic Workflow Progress Visual Indicator */}
        <div className="hidden lg:block relative mb-12 bg-zinc-950/80 border border-zinc-900 rounded-2xl p-6 shadow-xl max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-4 text-xs font-mono">
            <span className="text-zinc-500 font-bold uppercase tracking-wider">
              {language === "en" ? "Project Lifecycle Progress:" : "प्रोजेक्ट लाइफसाइकिल प्रगति:"}
            </span>
            <span className="text-emerald-400 font-extrabold">
              {language === "en" 
                ? `${simulatedProgress}% (Phase ${steps.findIndex(s => s.id === activeStep) + 1}/5 Active)` 
                : `${simulatedProgress}% (चरण ${steps.findIndex(s => s.id === activeStep) + 1}/5 सक्रिय)`}
            </span>
          </div>
          
          <div className="relative h-2 bg-zinc-900 rounded-full overflow-hidden">
            {/* Glowing Progress Line */}
            <div 
              ref={progressBarRef}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 transition-all duration-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]"
              style={{ width: `${simulatedProgress}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-2 mt-4">
            {steps.map((step, idx) => {
              const isComp = completedSteps.includes(step.id);
              const isActive = activeStep === step.id;
              const StepIcon = step.icon;
              return (
                <button
                  key={step.id}
                  onClick={() => selectStep(step.id)}
                  className={`text-left p-2.5 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "bg-zinc-900 border-l-4 border-purple-500 shadow-md"
                      : isComp
                        ? "bg-zinc-950 hover:bg-zinc-900/60"
                        : "opacity-40 hover:opacity-75"
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className={`p-1.5 rounded-md ${isActive ? "bg-purple-500 text-black" : "bg-zinc-900 text-zinc-400"}`}>
                      <StepIcon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 leading-none">
                      {language === "en" ? `Phase ${step.number}` : `चरण ${step.number}`}
                    </span>
                  </div>
                  <span className="block text-[11px] font-bold text-white truncate">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Interactive Steps Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Steps Selection List (Left Column) */}
          <div ref={stepsContainerRef} className="lg:col-span-5 space-y-4">
            <span className="block text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black mb-2 text-left">
              {language === "en" ? "Click any phase to expand deliverables:" : "विवरण देखने के लिए किसी भी चरण पर क्लिक करें:"}
            </span>
            
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isComp = completedSteps.includes(step.id);
              const StepIcon = step.icon;

              return (
                <Tilt 
                  key={step.id}
                  className="rounded-2xl overflow-hidden" 
                  max={6} 
                  scale={1.01} 
                  glowColor={step.glowColor}
                >
                  <div
                    onClick={() => selectStep(step.id)}
                    className={`group p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                      isActive
                        ? `bg-zinc-950/90 border-purple-500/40 shadow-xl shadow-purple-950/20`
                        : `bg-zinc-950/40 border-zinc-900 hover:bg-zinc-950/80 hover:border-zinc-800`
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-tr ${step.color} text-white shadow-lg`}>
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">
                              {language === "en" ? "STAGE" : "चरण"} {step.number} • {step.duration}
                            </span>
                            {isComp && (
                              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" title="Completed Phase" />
                            )}
                          </div>
                          <h3 className="font-sans font-black text-sm sm:text-base text-white group-hover:text-purple-400 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors shrink-0">
                        {isActive ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    {/* Collapsible Mobile Short Description (Smooth fade) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-zinc-900/60 pt-3"
                        >
                          <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-3">
                            {step.shortDesc}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-purple-400 font-bold">
                            <span>{language === "en" ? "Explore Deliverables Checklist" : "गारंटीकृत डिलिवरेबल्स की जांच करें"}</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Tilt>
              );
            })}
          </div>

          {/* Detailed Specifications Board & Live Tracker (Right Column) */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-zinc-950/80 border border-zinc-900 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-left h-full flex flex-col justify-between">
              
              {/* Dynamic Tech Decorative Watermark */}
              <div className="absolute top-4 right-6 font-mono text-[90px] font-black text-white/[0.01] pointer-events-none select-none">
                PHASE
              </div>

              {steps.map((step) => {
                if (step.id !== activeStep) return null;
                const StepIcon = step.icon;

                return (
                  <div key={step.id} id={`detail-${step.id}`} className="space-y-6 animate-fade-in">
                    
                    {/* Header Specification */}
                    <div className="flex items-center justify-between border-b border-zinc-900/80 pb-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${step.color} text-white`}>
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[9px] font-black tracking-widest text-zinc-500 uppercase">
                            {language === "en" ? `SPECIFICATION PROTOCOL #${step.number}` : `विशेष विवरण प्रोटोकॉल #${step.number}`}
                          </span>
                          <h4 className="font-sans font-black text-xl text-white">
                            {step.title}
                          </h4>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest">
                          {language === "en" ? "ESTIMATED VELOCITY" : "अनुमानित समय"}
                        </span>
                        <span className="font-mono text-xs font-black text-emerald-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 inline" /> {step.duration}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Paragraph Breakdown */}
                    <div className="space-y-2">
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                        {language === "en" ? "Detailed Description & Architecture Strategy" : "विस्तृत विवरण और वास्तुकला रणनीति"}
                      </span>
                      <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-900/35 p-4 rounded-xl border border-zinc-900">
                        {step.longDesc}
                      </p>
                    </div>

                    {/* Deliverables Checklist with custom interactive checks */}
                    <div className="space-y-3">
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">
                        {language === "en" ? "Guaranteed Deliverables Checklist:" : "गारंटीकृत डिलिवरेबल्स चेकलिस्ट:"}
                      </span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-900/80 hover:border-zinc-800 transition-colors"
                          >
                            <div className="p-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-zinc-300 text-xs leading-snug">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack & System Tools */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-900">
                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold mb-2">
                          {language === "en" ? "Utilized System Tools" : "उपयोग किए गए सिस्टम टूल्स"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {step.tools.map((tool, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 rounded bg-zinc-900 text-zinc-400 text-[10px] font-mono border border-zinc-900 hover:text-white transition-colors"
                            >
                              ⚙️ {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold mb-2">
                          {language === "en" ? "Core Performance Benchmarks" : "कोर प्रदर्शन बेंचमार्क"}
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {step.metrics.map((m, idx) => (
                            <div key={idx} className="p-2 rounded bg-zinc-900/50 border border-zinc-900/40">
                              <span className="block text-[8px] text-zinc-500 leading-none">{m.label}</span>
                              <span className="text-xs font-black text-white font-mono mt-1 block">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

              {/* Secure Trust Bottom Disclaimer */}
              <div className="mt-8 pt-4 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-purple-400" />
                  <span>{language === "en" ? "Verified 100% Client Collaboration Channels" : "100% सत्यापित क्लाइंट सहयोग माध्यम"}</span>
                </span>
                <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/10 px-2 py-0.5 rounded">
                  {language === "en" ? "🟢 DIRECT COLLABORATION VIA WHATSAPP" : "🟢 व्हाट्सएप के माध्यम से सीधा सहयोग"}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { Mail, MessageSquare, Send, CheckCircle, Copy, Check, MessageCircle, ArrowUpRight, Github, PhoneCall } from "lucide-react";

interface ContactProps {
  selectedPlan: string;
  selectedService: string;
}

export default function Contact({ selectedPlan, selectedService }: ContactProps) {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Freelance Project Inquiry",
    message: ""
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const ourEmail = "rohitdhakaddhoti143@gmail.com";

  // Auto-prefill form data when users click pricing or service CTAs
  useEffect(() => {
    let generatedMsg = "";
    if (selectedPlan) {
      if (language === "en") {
        generatedMsg += `Hi Rohit, I would like to order your "${selectedPlan}" package. Let's discuss details!`;
      } else {
        generatedMsg += `नमस्ते रोहित, मैं आपका "${selectedPlan}" पैकेज आर्डर करना चाहता हूँ। चलिए प्रोजेक्ट डिटेल्स पर चर्चा करते हैं!`;
      }
      setFormData((prev) => ({
        ...prev,
        subject: language === "en" ? `Order Package: ${selectedPlan}` : `पैकेज ऑर्डर: ${selectedPlan}`,
        message: generatedMsg
      }));
    } else if (selectedService) {
      if (language === "en") {
        generatedMsg += `Hi Rohit, I am interested in your "${selectedService}" service. Let me know your availability and timeline terms!`;
      } else {
        generatedMsg += `नमस्ते रोहित, मुझे आपकी "${selectedService}" सेवा में रुचि है। मुझे काम शुरू करने की टाइमलाइन के बारे में बताएं!`;
      }
      setFormData((prev) => ({
        ...prev,
        subject: language === "en" ? `Inquiry: ${selectedService}` : `पूछताछ सेवा: ${selectedService}`,
        message: generatedMsg
      }));
    }
  }, [selectedPlan, selectedService, language]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(ourEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage(
        language === "en"
          ? "Please complete all required fields so we can connect promptly."
          : "कृपया संपर्क शुरू करने के लिए सभी आवश्यक फ़ील्ड भरें।"
      );
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    // Prepare highly readable, structured WhatsApp message layout
    const textPayload = `⚡ *NEW FREELANCE BRIEF* ⚡\n\n*Client Name:* ${formData.name}\n*Work Email:* ${formData.email}\n*Subject:* ${formData.subject}\n\n*Detailed Requirements:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/917424874912?text=${encodeURIComponent(textPayload)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Launch WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Reset form state
      setFormData({
        name: "",
        email: "",
        subject: language === "en" ? "Freelance Project Inquiry" : "फ्रीलांस प्रोजेक्ट पूछताछ",
        message: ""
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-transparent to-[#07070a]">
      {/* Decorative neon gradient glow in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <MessageSquare className="w-3.5 h-3.5" /> {language === "en" ? "Client Intake" : "क्लाइंट संपर्क"}
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {language === "en" ? "Launch Your Next" : "अपने नए विचार को"}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-450">
              {language === "en" ? "Big Idea" : "हकीकत में बदलें"}
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            {language === "en" 
              ? "Ready to rank higher, convert and attract more viewers with premium code assets? Send a direct brief or use our instant channels to secure project slot priority."
              : "क्या आप प्रीमियम कोड एसेट्स के साथ सर्च रैंकिंग, कन्वर्शन और व्यूज बढ़ाना चाहते हैं? डायरेक्ट प्रोजेक्ट ब्रीफ भेजें या तुरंत संपर्क चैनल का उपयोग करें।"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Column Left: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <h3 className="font-sans font-black text-2xl text-white">
                {language === "en" ? "Contact Channels" : "संपर्क के माध्यम"}
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {language === "en"
                  ? "Connect with Rohit Kumar Nagar (Dhakad) directly. We communicate exclusively via WhatsApp to guarantee lightning-fast response times, live draft reviews, and instant project start coordination."
                  : "रोहित कुमार नागर (धाकड़) से सीधे संपर्क करें। हम विशेष रूप से व्हाट्सएप के माध्यम से बात करते हैं ताकि तुरंत जवाब, लाइव ड्राफ्ट रिव्यू और त्वरित काम शुरू करना सुनिश्चित हो सके।"}
              </p>

              {/* Direct WhatsApp Call and Chat display block */}
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden text-left">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase font-bold tracking-wider leading-none mb-1">
                      {language === "en" ? "Direct WhatsApp Call / Mobile" : "डायरेक्ट व्हाट्सएप कॉल / मोबाइल"}
                    </span>
                    <a href="https://wa.me/917424874912" target="_blank" rel="noopener noreferrer" className="font-sans font-extrabold text-white text-xs sm:text-sm hover:text-emerald-400 transition-colors">
                      +91 7424874912
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/917424874912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-[10px] font-bold transition-all cursor-pointer"
                >
                  {language === "en" ? "Call on WhatsApp" : "व्हाट्सएप पर कॉल करें"}
                </a>
              </div>

              {/* Direct WhatsApp display block */}
              <div className="relative p-5 rounded-2xl bg-zinc-950/90 border-2 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden text-left">
                {/* Visual pulse for exclusive active status */}
                <span className="absolute top-3 right-4 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <MessageCircle className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-emerald-400 uppercase font-black tracking-widest leading-none mb-1">
                      {language === "en" ? "🟢 EXCLUSIVE CHANNEL • ACTIVE NOW" : "🟢 विशेष चैनल • अभी सक्रिय"}
                    </span>
                    <span className="font-sans font-black text-white text-sm sm:text-base">
                      {language === "en" ? "Official WhatsApp Chat" : "आधिकारिक व्हाट्सएप चैट"}
                    </span>
                    <p className="text-[10px] text-zinc-500 leading-none mt-1">
                      {language === "en" ? "Typical Response: < 5 minutes" : "औसत रिस्पांस: < 5 मिनट"}
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/917424874912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold transition-all cursor-pointer shadow-lg shadow-emerald-950/40 shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === "en" ? "Chat Now" : "अभी चैट करें"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Secure Execution Roadmap trust panel */}
              <div className="p-5.5 rounded-2xl bg-zinc-950/65 border border-zinc-900/80 space-y-4">
                <span className="block text-[9.5px] font-mono text-purple-400 font-black uppercase tracking-widest leading-none">
                  {language === "en" ? "💎 WHAT HAPPENS ONCE YOU TRANSMIT BRIEF:" : "💎 ब्रीफ भेजने के बाद आगे की प्रक्रिया:"}
                </span>
                
                <ul className="space-y-3 font-sans text-xs text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{language === "en" ? "Rapid Evaluation:" : "त्वरित मूल्यांकन:"}</strong>
                      {language === "en"
                        ? " Rohit analyzes your specific requirements, keyword niche, or layout parameters immediately."
                        : " रोहित तुरंत आपकी आवश्यकताओं, कीवर्ड्स या लेआउट का विश्लेषण करते हैं।"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{language === "en" ? "Email Proposition:" : "ईमेल प्रस्ताव:"}</strong>
                      {language === "en"
                        ? " Within 2-4 hours, you receive a custom structured milestone layout list in your inbox."
                        : " 2-4 घंटे के भीतर, आपको अपने इनबॉक्स में एक कस्टम संरचित माइलस्टोन लेआउट प्राप्त होगा।"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>{language === "en" ? "Milestone Coding:" : "माइलस्टोन कोडिंग:"}</strong>
                      {language === "en"
                        ? " Coding assets trigger. Zero upfront performance risks for introductory starter deals!"
                        : " कोडिंग शुरू होती है। हमारे स्पेशल स्टार्टर पैकेजेस के साथ कोई शुरुआती जोखिम नहीं है!"}
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Standard guarantee block */}
            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-start gap-3 mt-6 lg:mt-0">
              <span className="h-2 w-2 rounded-full bg-orange-400 mt-1.5 animate-ping flex-shrink-0" />
              <div className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                <strong>{language === "en" ? "Attention:" : "ध्यान दें:"}</strong>{" "}
                {language === "en"
                  ? "Current booking slots are filling up. Typical wait priority queue turnaround is 2 days unless selecting Standard or Premium packs!"
                  : "बुकिंग स्लॉट तेजी से भर रहे हैं। जब तक आप स्टैंडर्ड या प्रीमियम पैक नहीं चुनते, तब तक काम शुरू होने में 2 दिन का समय लग सकता है!"}
              </div>
            </div>

          </div>

          {/* Column Right: Custom Intake Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0c13]/80 border border-zinc-900 shadow-2xl relative">
              
              {/* Floating indicators for prefilled intent state */}
              {(selectedPlan || selectedService) && (
                <div className="mb-6 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                  <div className="text-xs font-sans text-purple-300">
                    <span className="font-extrabold uppercase text-[9px] mr-2 block text-purple-400">
                      {language === "en" ? "Active Prefilled Intent:" : "सक्रिय पूर्व-चयनित जानकारी:"}
                    </span>
                    {selectedPlan 
                      ? `${language === "en" ? "Ordered:" : "ऑर्डर:"} ${selectedPlan}` 
                      : `${language === "en" ? "Inquired:" : "पूछताछ:"} ${selectedService}`}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Input Name field */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-none">
                  <div className="space-y-1.5">
                    <label htmlFor="user-form-name" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      {language === "en" ? "Your Full Name" : "आपका पूरा नाम"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="user-form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === "en" ? "e.g. Parth Patel" : "जैसे- पार्थ पटेल"}
                      className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                    />
                  </div>

                  {/* Input Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-form-email" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      {language === "en" ? "Work Email address" : "कार्य ईमेल पता"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="user-form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === "en" ? "e.g. name@company.com" : "जैसे- name@company.com"}
                      className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                    />
                  </div>
                </div>

                {/* Input Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="user-form-subject" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {language === "en" ? "Inquiry Subject" : "पूछताछ का विषय"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="user-form-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === "en" ? "e.g. Custom Blogger Template & Technical SEO Work" : "जैसे- ब्लॉग डिजाइन और एसईओ काम"}
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                  />
                </div>

                {/* Input Message Text Area */}
                <div className="space-y-1.5">
                  <label htmlFor="user-form-message" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    {language === "en" ? "Project details & instructions" : "प्रोजेक्ट का विवरण और निर्देश"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="user-form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      language === "en"
                        ? "Briefly explain what you need (website layout, target market, YouTube channel details, blogging niche, etc.)..."
                        : "अपनी आवश्यकताएं संक्षेप में समझाएं (वेबसाइट लेआउट, यूट्यूब चैनल विवरण, ब्लॉगिंग श्रेणी, आदि)..."
                    }
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3.5 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700 resize-none"
                  />
                </div>

                {/* Error Banner section */}
                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 font-sans text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Action Block */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-sans text-xs font-bold tracking-widest uppercase rounded-xl hover:shadow-[0_4px_25px_rgba(147,51,234,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{language === "en" ? "Transmitting Brief..." : "ब्रीफ भेजा जा रहा है..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "Transmit Inbound Brief" : "व्हाट्सएप पर ब्रीफ भेजें"}</span>
                    </>
                  )}
                </button>

              </form>

              {/* Dynamic Success Dialog Overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-x-4 inset-y-4 rounded-xl bg-[#090a10] border border-emerald-500/20 p-6 flex flex-col justify-center items-center text-center space-y-4 z-20"
                  >
                    <div className="p-4 rounded-full bg-emerald-500/15 text-emerald-400 animate-bounce">
                      <MessageCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-sans font-black text-xl text-white">
                      {language === "en" ? "Opening WhatsApp Chat..." : "व्हाट्सएप चैट खोली जा रही है..."}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
                      {language === "en"
                        ? "Your freelance intake has been compiled! We are routing you directly to Rohit Kumar Nagar on WhatsApp to review your project timeline and coordinate instantly."
                        : "आपका प्रोजेक्ट ब्रीफ तैयार कर लिया गया है! हम आपको सीधे व्हाट्सएप पर रोहित कुमार नागर के पास भेज रहे हैं ताकि प्रोजेक्ट टाइमलाइन पर तुरंत चर्चा की जा सके।"}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <a
                        href="https://wa.me/917424874912"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{language === "en" ? "Open Chat Manually" : "मैन्युअल रूप से चैट खोलें"}</span>
                      </a>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold rounded-lg hover:text-white"
                      >
                        {language === "en" ? "Dismiss Overlay" : "ओवरले बंद करें"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

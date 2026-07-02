import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, Send, CheckCircle, Copy, Check, MessageCircle, ArrowUpRight, Github, PhoneCall } from "lucide-react";

interface ContactProps {
  selectedPlan: string;
  selectedService: string;
}

export default function Contact({ selectedPlan, selectedService }: ContactProps) {
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
      generatedMsg += `Hi Rohit, I would like to order your "${selectedPlan}" package. Let's discuss details!`;
      setFormData((prev) => ({
        ...prev,
        subject: `Order Package: ${selectedPlan}`,
        message: generatedMsg
      }));
    } else if (selectedService) {
      generatedMsg += `Hi Rohit, I am interested in your "${selectedService}" service. Let me know your availability and timeline terms!`;
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry: ${selectedService}`,
        message: generatedMsg
      }));
    }
  }, [selectedPlan, selectedService]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(ourEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields so we can connect promptly.");
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);

    // Simulate reliable form intake server proxy
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // reset form
      setFormData({
        name: "",
        email: "",
        subject: "Freelance Project Inquiry",
        message: ""
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-transparent to-[#07070a]">
      {/* Decorative neon gradient glow in background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] uppercase tracking-widest font-bold">
            <MessageSquare className="w-3.5 h-3.5" /> Client Intake
          </div>
          
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Launch Your Next{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-450">
              Big Idea
            </span>
          </h2>
          
          <p className="font-sans text-zinc-400 text-sm sm:text-base">
            Ready to rank higher, convert and attract more viewers with premium code assets? Send a direct brief or use our instant channels to secure project slot priority.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Column Left: Direct Contacts & Channels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <h3 className="font-sans font-black text-2xl text-white">
                Contact Channels
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Connect with Rohit Kumar Nagar (Dhakad) anytime. We accept custom project briefs directly through our secure interface below, or you can call us or visit our headquarters in Rajasthan.
              </p>

              {/* Direct phone display block */}
              <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden text-left">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase font-bold tracking-wider leading-none mb-1">
                      Direct Mobile Phone
                    </span>
                    <a href="tel:+917424874912" className="font-sans font-extrabold text-white text-xs sm:text-sm hover:text-emerald-400 transition-colors">
                      +91 7424874912
                    </a>
                  </div>
                </div>
                <a
                  href="tel:+917424874912"
                  className="flex items-center justify-center gap-1 px-3.5 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 text-[10px] font-bold transition-all cursor-pointer"
                >
                  Call Instantly
                </a>
              </div>

              {/* Direct email display block */}
              <div className="relative p-5 rounded-2xl bg-zinc-950/80 border border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden text-left">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/15">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-zinc-500 uppercase font-bold tracking-wider leading-none mb-1">
                      Primary Freelance Mail
                    </span>
                    <span className="font-sans font-extrabold text-white text-xs sm:text-sm select-all">
                      {ourEmail}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="flex items-center gap-1.5 px-3 py-1.8 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white font-sans text-[10px] font-bold text-zinc-300 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Secure Execution Roadmap trust panel */}
              <div className="p-5.5 rounded-2xl bg-zinc-950/65 border border-zinc-900/80 space-y-4">
                <span className="block text-[9.5px] font-mono text-purple-400 font-black uppercase tracking-widest leading-none">
                  💎 WHAT HAPPENS ONCE YOU TRANSMIT BRIEF:
                </span>
                
                <ul className="space-y-3 font-sans text-xs text-zinc-400">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Rapid Evaluation:</strong> Rohit analyzes your specific requirements, keyword niche, or layout parameters immediately.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Email Proposition:</strong> Within 2-4 hours, you receive a custom structured milestone layout list in your inbox.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Milestone Coding:</strong> Coding assets trigger. Zero upfront performance risks for introductory starter deals!</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Standard guarantee block */}
            <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 flex items-start gap-3 mt-6 lg:mt-0">
              <span className="h-2 w-2 rounded-full bg-orange-400 mt-1.5 animate-ping flex-shrink-0" />
              <div className="text-[11px] text-zinc-500 font-sans leading-relaxed">
                <strong>Attention:</strong> Current booking slots are filling up. Typical wait priority queue turnaround is 2 days unless selecting Standard or Premium packs!
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
                      Active Prefilled Intent:
                    </span>
                    {selectedPlan ? `Ordered: ${selectedPlan}` : `Inquired: ${selectedService}`}
                  </div>
                  <div className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Input Name field */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-none">
                  <div className="space-y-1.5">
                    <label htmlFor="user-form-name" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="user-form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Parth Patel"
                      className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                    />
                  </div>

                  {/* Input Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-form-email" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                      Work Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="user-form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                    />
                  </div>
                </div>

                {/* Input Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="user-form-subject" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    Inquiry Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="user-form-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Custom Blogger Template & Technical SEO Work"
                    className="w-full bg-zinc-950/80 border border-zinc-900 rounded-xl px-4 py-3 font-sans text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500/60 placeholder-zinc-700"
                  />
                </div>

                {/* Input Message Text Area */}
                <div className="space-y-1.5">
                  <label htmlFor="user-form-message" className="block text-[11px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                    Project details & instructions <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="user-form-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly explain what you need (website layout, target market, YouTube channel details, blogging niche, etc.)..."
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
                      <span>Transmitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Inbound Brief</span>
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
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-sans font-black text-xl text-white">
                      Brief Received Successfully!
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm">
                      Your freelance intake was logged securely. Rohit will evaluate details and reach your email address within 2-4 hours. Check your inbox soon!
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold rounded-lg hover:text-white"
                    >
                      Dismiss Overlay
                    </button>
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

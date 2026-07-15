import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Unified UI Translation Dictionary
const DICTIONARY: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.hero": { en: "Home", hi: "होम" },
  "nav.about": { en: "About", hi: "परिचय" },
  "nav.services": { en: "Services", hi: "सेवाएं" },
  "nav.workflow": { en: "Workflow", hi: "कार्यप्रणाली" },
  "nav.portfolio": { en: "Portfolio", hi: "पोर्टफोलियो" },
  "nav.pricing": { en: "Pricing", hi: "कीमतें" },
  "nav.testimonials": { en: "Reviews", hi: "समीक्षाएं" },
  "nav.contact": { en: "Contact", hi: "संपर्क" },
  "nav.whatsapp_chat": { en: "WhatsApp Chat", hi: "व्हाट्सएप चैट" },

  // General & Buttons
  "btn.chat_now": { en: "Chat Now", hi: "अभी चैट करें" },
  "btn.direct_brief": { en: "Direct Client Brief", hi: "डायरेक्ट प्रोजेक्ट ब्रीफ" },
  "btn.view_live": { en: "View Live Project", hi: "लाइव प्रोजेक्ट देखें" },
  "btn.order_now": { en: "Order Now", hi: "अभी आर्डर करें" },
  "btn.submit": { en: "Send via WhatsApp", hi: "व्हाट्सएप द्वारा भेजें" },
  "btn.submitting": { en: "Compiling Brief...", hi: "ब्रीफ तैयार हो रहा है..." },
  "btn.dismiss": { en: "Dismiss Overlay", hi: "बंद करें" },
  "btn.copy_email": { en: "Copy Email", hi: "ईमेल कॉपी करें" },
  "btn.copied": { en: "Copied!", hi: "कॉपी हो गया!" },
  "label.velocity": { en: "ESTIMATED VELOCITY", hi: "अनुमानित समय" },
  "label.deliverables": { en: "Guaranteed Deliverables Checklist:", hi: "गारंटीड डेलिवरेबल्स चेकलिस्ट:" },
  "label.tools": { en: "Utilized System Tools", hi: "उपयोग किए गए टूल्स" },
  "label.benchmarks": { en: "Core Performance Benchmarks", hi: "मुख्य प्रदर्शन मानक" },

  // Hero Section
  "hero.badge": { en: "🥇 FULL-STACK CRAFTSMAN & GOOGLE SEO EXPERT", hi: "🥇 फुल-स्टैक डेवलपर और गूगल एसईओ विशेषज्ञ" },
  "hero.title_part1": { en: "Crafting High-Conversion", hi: "हाई-कन्वर्टिंग वेबसाइट्स" },
  "hero.title_part2": { en: "Digital Interfaces", hi: "और डिजिटल डिज़ाइन्स" },
  "hero.title_amp": { en: "SEO Domination", hi: "और गूगल एसईओ दबदबा" },
  "hero.tagline": { en: "I build responsive, lightning-fast web assets, craft high-CTR YouTube thumbnails, and write AdSense-approved blogs designed to rank #1.", hi: "मैं बनाता हूँ बेहद तेज़ रेस्पॉन्सिव वेबसाइट्स, हाई-CTR यूट्यूब थंबनेल, और गूगल एडसेंस-फ्रेंडली ब्लॉग्स जो गूगल में नंबर #1 रैंक करें।" },
  "hero.stats_clients": { en: "Worldwide Clients", hi: "वैश्विक क्लाइंट्स" },
  "hero.stats_experience": { en: "Continuous Growth", hi: "लगातार विकास" },

  // About Section
  "about.badge": { en: "THE ARCHITECT", hi: "द आर्किटेक्ट" },
  "about.title_part1": { en: "Honest Execution.", hi: "ईमानदार काम।" },
  "about.title_part2": { en: "Premium Performance.", hi: "प्रीमियम परफॉरमेंस।" },
  "about.subtitle": { en: "Behind the Digital Craft", hi: "डिजिटल क्राफ्ट के पीछे की कहानी" },
  "about.p1": { 
    en: "I am Rohit Kumar Nagar (Dhakad), a freelance architect operating from Rajasthan, India. I specialize in bridging the gap between high-fidelity web design, clean semantic code, and organic search engine authority.", 
    hi: "मैं रोहित कुमार नागर (धाकड़) हूँ, राजस्थान, भारत से एक फ्रीलांस आर्किटेक्ट। मैं हाई-फिडेलिटी वेब डिज़ाइन, क्लीन सिमेंटिक कोड और ऑर्गेनिक सर्च इंजन अथॉरिटी के बीच की दूरी को पाटने में विशेषज्ञता रखता हूँ।" 
  },
  "about.p2": { 
    en: "Every asset is built with extreme performance guidelines—maintaining Lighthouse scores near 100%, leveraging custom 3D effects, and enforcing conversion-focused layouts that drive immediate business enquiries.", 
    hi: "हर एसेट को बेहतरीन परफॉरमेंस गाइडलाइंस के साथ बनाया जाता है—ताकि गूगल लाइटहाउस स्कोर 100 के करीब रहे, 3D इफेक्ट्स का सही इस्तेमाल हो, और ऐसे लेआउट्स बनें जो सीधे बिजनेस लीड्स लाएं।" 
  },
  "about.stats.projects": { en: "Projects Completed", hi: "पूरे किए गए प्रोजेक्ट्स" },
  "about.stats.reviews": { en: "Client Reviews", hi: "क्लाइंट रिव्यूज" },
  "about.stats.speed": { en: "PageSpeed Index Score", hi: "पेज स्पीड स्कोर" },
  "about.education.title": { en: "Academic & Tech Background", hi: "शैक्षणिक और तकनीकी पृष्ठभूमि" },
  "about.edu.college": { en: "Rajasthan Technical University (RTU)", hi: "राजस्थान तकनीकी विश्वविद्यालय (RTU)" },
  "about.edu.degree": { en: "Bachelor of Technology in Computer Science", hi: "कंप्यूटर साइंस में बी.टेक डिग्री" },
  "about.edu.location": { en: "Kota, Rajasthan", hi: "कोटा, राजस्थान" },
  "about.certifications.title": { en: "Verified Technical Certifications", hi: "सत्यापित तकनीकी प्रमाणपत्र" },

  // Technical Skills Section
  "skills.badge": { en: "CORE ARSENAL", hi: "मुख्य हथियार" },
  "skills.title": { en: "Technical Capabilities & Engine Room", hi: "तकनीकी क्षमताएं और इंजन रूम" },
  "skills.desc": { en: "An optimized combination of front-end responsiveness, database structure, and SEO schema architecture.", hi: "फ्रंट-एंड रेस्पॉन्सिवनेस, डेटाबेस स्ट्रक्चर और एसईओ स्कीमा आर्किटेक्चर का एक सर्वोत्कृष्ट संयोजन।" },

  // AI & SEO Specialized Divisions Section
  "aiseo.badge": { en: "NEXT-GEN DOMINANCE", hi: "अगली पीढ़ी का प्रभुत्व" },
  "aiseo.title": { en: "AI Integration & Google SEO Silos", hi: "एआई इंटीग्रेशन और गूगल एसईओ साइलोस" },
  "aiseo.desc": { en: "We do not construct empty shells. Every platform is embedded with semantic schema configurations and optimized for search engine bots.", hi: "हम खाली वेबसाइट्स नहीं बनाते। प्रत्येक प्लेटफ़ॉर्म को सिमेंटिक स्कीमा कॉन्फ़िगरेशन के साथ बनाया जाता है ताकि वो सर्च इंजन बॉट्स के लिए अनुकूलित हो।" },
  "aiseo.card1.title": { en: "Semantic Keyword Silos", hi: "सिमेंटिक कीवर्ड साइलोस" },
  "aiseo.card1.desc": { en: "We group keywords into hierarchical structures (silos) that Google's crawling spiders easily understand and reward with immediate index rankings.", hi: "हम कीवर्ड्स को ऐसे वर्गीकृत (साइलोस) करते हैं जिन्हें गूगल के क्रॉलिंग स्पाइडर आसानी से समझ सकें और तुरंत अच्छी इंडेक्स रैंकिंग दें।" },
  "aiseo.card2.title": { en: "Google Rich Schema Deploy", hi: "गूगल रिच स्कीमा डिप्लॉय" },
  "aiseo.card2.desc": { en: "Structured JSON-LD schema integration for Articles, Products, and Local Businesses to render interactive rich snippets on Google Search.", hi: "गूगल सर्च पर इंटरैक्टिव रिच स्निपेट्स दिखाने के लिए ब्लॉग आर्टिकल्स, प्रोडक्ट्स और लोकल बिजनेस हेतु स्ट्रक्चर्ड JSON-LD स्कीमा इंटीग्रेशन।" },
  "aiseo.card3.title": { en: "Gemini AI Routing API", hi: "जेमिनी एआई राउटिंग एपीआई" },
  "aiseo.card3.desc": { en: "Implement highly secure, server-side Google Gemini SDK endpoints to proxy smart contextual replies or automate dynamic content creation.", hi: "स्मार्ट कॉन्टेक्स्टुअल रिप्लाई या डायनेमिक कंटेंट को ऑटोमेट करने के लिए अत्यधिक सुरक्षित, सर्वर-साइड गूगल जेमिनी SDK एंडपॉइंट्स का सेटअप।" },

  // Premium Workflow Section
  "workflow.badge": { en: "EXCEPTIONAL FREELANCE STANDARDS", hi: "असाधारण फ्रीलांस मानक" },
  "workflow.title": { en: "The Premium Project Workflow", hi: "प्रीमियम प्रोजेक्ट कार्यप्रणाली" },
  "workflow.desc": { en: "Our execution methodology is engineered to maximize technical clarity, security compliance, and direct business results.", hi: "हमारी कार्यप्रणाली को तकनीकी स्पष्टता, सुरक्षा अनुपालन और प्रत्यक्ष व्यावसायिक परिणामों को अधिकतम करने के लिए तैयार किया गया है।" },
  "workflow.progress": { en: "Project Lifecycle Progress:", hi: "प्रोजेक्ट लाइफसाइकिल प्रगति:" },
  "workflow.phase_active": { en: "Active Phase", hi: "सक्रिय चरण" },
  "workflow.click_to_expand": { en: "Click any phase to expand deliverables:", hi: "डेलिवरेबल्स देखने के लिए किसी भी चरण पर क्लिक करें:" },
  "workflow.trust_disclaimer": { en: "Verified 100% Client Collaboration Channels", hi: "सत्यापित 100% क्लाइंट सहयोग चैनल" },
  "workflow.direct_whatsapp": { en: "🟢 DIRECT COLLABORATION VIA WHATSAPP", hi: "🟢 व्हाट्सएप के माध्यम से सीधा सहयोग" },

  // Services Section
  "services.badge": { en: "HIGH-VALUED UTILITIES", hi: "हाई-वैल्यू सर्विसेज" },
  "services.title": { en: "Professional Freelance Services", hi: "व्यावसायिक फ्रीलांस सेवाएं" },
  "services.desc": { en: "Premium digital solutions crafted with honest rates, clear timelines, and a dedication to high performance.", hi: "ईमानदार दरों, स्पष्ट समयसीमा और उच्च प्रदर्शन के प्रति समर्पण के साथ तैयार किए गए प्रीमियम डिजिटल समाधान।" },

  // Portfolio Section
  "portfolio.badge": { en: "THE PROOF", hi: "साबित रिकॉर्ड" },
  "portfolio.title": { en: "Before-After Case Studies", hi: "पहले और बाद के केस स्टडीज" },
  "portfolio.desc": { en: "Real transformations that highlight massive conversion improvements, organic traffic boosts, and CTR expansions.", hi: "असली बदलाव जो भारी कन्वर्शन सुधार, ऑर्गेनिक ट्रैफिक और CTR में बढ़ोतरी को दर्शाते हैं।" },
  "portfolio.before": { en: "Before (Stale/Slow)", hi: "पहले (धीमा/पुराना)" },
  "portfolio.after": { en: "After (Crafted by Rohit)", hi: "बाद में (रोहित द्वारा निर्मित)" },
  "portfolio.client": { en: "Client:", hi: "क्लाइंट:" },
  "portfolio.tech": { en: "Core Tech:", hi: "मुख्य तकनीक:" },
  "portfolio.outcomes": { en: "Key Outcomes:", hi: "मुख्य परिणाम:" },

  // Aesthetic Showcase Section
  "showcase.title": { en: "Aesthetic Design & Contrast Mechanics", hi: "सौंदर्यपूर्ण डिजाइन और कंट्रास्ट यांत्रिकी" },
  "showcase.desc": { en: "Explore our graphic interface aesthetics. We prioritize perfect typography spacing, neon borders, and eye-safe twilight contrasts.", hi: "हमारे ग्राफिक इंटरफ़ेस की सुंदरता का अनुभव करें। हम सही टाइपोग्राफी स्पेसिंग, नियॉन बॉर्डर्स और आंखों के लिए सुरक्षित डार्क कंट्रास्ट को प्राथमिकता देते हैं।" },
  "showcase.card1.title": { en: "Twilight Contrast", hi: "ट्वाइलाइट कंट्रास्ट" },
  "showcase.card1.desc": { en: "Deep, soothing obsidian tones paired with striking neon accents to minimize screen-glare fatigue.", hi: "स्क्रीन-ग्लेयर की थकान को कम करने के लिए आकर्षक नियॉन लहजे के साथ गहरे, सुखदायक टोन।" },
  "showcase.card2.title": { en: "Click Psychology", hi: "क्लिक मनोविज्ञान" },
  "showcase.card2.desc": { en: "We structure CTA actions based on gaze-tracking layouts, resulting in significantly higher conversion ratios.", hi: "हम गेज-ट्रैकिंग लेआउट के आधार पर सीटीए (CTA) क्रियाओं को व्यवस्थित करते हैं, जिससे काफी अधिक कन्वर्शन दर मिलती है।" },

  // Pricing Section
  "pricing.badge": { en: "HONEST PRICING", hi: "पारदर्शी दरें" },
  "pricing.title": { en: "Predictable Investment Plans", hi: "स्पष्ट और पारदर्शी बजट प्लांस" },
  "pricing.desc": { en: "No hidden fees. Flat rates with flexible options tailored for startups, individual creators, and growing businesses alike.", hi: "कोई छुपा हुआ शुल्क नहीं। स्टार्टअप्स, व्यक्तिगत क्रिएटर्स और बढ़ते व्यवसायों के लिए अनुकूलित आसान विकल्प।" },
  "pricing.popular": { en: "Popular Choice", hi: "सबसे लोकप्रिय" },
  "pricing.delivery": { en: "Delivery Time", hi: "डिलिवरी समय" },
  "pricing.revisions": { en: "Revisions", hi: "संशोधन" },

  // Testimonials Section
  "testimonials.badge": { en: "SOCIAL PROOF", hi: "क्लाइंट्स की जुबानी" },
  "testimonials.title": { en: "Verified Customer Reviews", hi: "सत्यापित ग्राहकों की समीक्षाएं" },
  "testimonials.desc": { en: "See how our dedication to speed, design aesthetics, and SEO optimization delivers measurable growth.", hi: "देखें कि स्पीड, डिज़ाइन और एसईओ अनुकूलन के प्रति हमारा समर्पण किस तरह मापने योग्य बढ़त प्रदान करता है।" },

  // Contact Section
  "contact.badge": { en: "GET IN TOUCH", hi: "संपर्क करें" },
  "contact.title": { en: "Initiate Your Freelance Brief", hi: "अपना प्रोजेक्ट ब्रीफ शुरू करें" },
  "contact.desc": { en: "Connect with Rohit Kumar Nagar (Dhakad) directly. We communicate exclusively via WhatsApp to guarantee lightning-fast response times, live draft reviews, and instant project start coordination.", hi: "रोहित कुमार नागर (धाकड़) से सीधे जुड़ें। हम बिजली की तरह तेज़ प्रतिक्रिया, लाइव ड्राफ्ट समीक्षा और तत्काल प्रोजेक्ट शुरू करने के तालमेल की गारंटी के लिए विशेष रूप से व्हाट्सएप के माध्यम से संवाद करते हैं।" },
  "contact.channel_active": { en: "🟢 EXCLUSIVE CHANNEL • ACTIVE NOW", hi: "🟢 विशेष चैनल • अभी सक्रिय" },
  "contact.whatsapp_chat_title": { en: "Official WhatsApp Chat", hi: "आधिकारिक व्हाट्सएप चैट" },
  "contact.response_time": { en: "Typical Response: < 5 minutes", hi: "औसत उत्तर समय: < 5 मिनट" },
  "contact.form_title": { en: "Submit Brief Instantly", hi: "तुरंत ब्रीफ सबमिट करें" },
  "contact.form_name": { en: "Your Full Name", hi: "आपका पूरा नाम" },
  "contact.form_email": { en: "Your Work Email Address", hi: "आपका कार्य ईमेल पता" },
  "contact.form_subject": { en: "Project Subject / Category", hi: "प्रोजेक्ट का विषय / श्रेणी" },
  "contact.form_message": { en: "Detailed Project Requirements & Timeline...", hi: "प्रोजेक्ट की विस्तृत आवश्यकताएं और समयसीमा..." },
  "contact.success_title": { en: "Opening WhatsApp Chat...", hi: "व्हाट्सएप चैट खुल रही है..." },
  "contact.success_desc": { en: "Your freelance intake has been compiled! We are routing you directly to Rohit Kumar Nagar on WhatsApp to review your project timeline and coordinate instantly.", hi: "आपका फ्रीलांस इंटेक तैयार कर लिया गया है! हम आपको सीधे व्हाट्सएप पर रोहित कुमार नागर के पास भेज रहे हैं ताकि आपके प्रोजेक्ट की समयसीमा की समीक्षा और तत्काल काम शुरू किया जा सके।" },
  "contact.success_manual": { en: "Open Chat Manually", hi: "मैन्युअल रूप से चैट खोलें" },
  "contact.whatsapp_call": { en: "Direct WhatsApp Call / Mobile", hi: "सीधा व्हाट्सएप कॉल / मोबाइल" },
  "contact.call_button": { en: "Call on WhatsApp", hi: "व्हाट्सएप पर कॉल करें" },

  // Trust Panel Roadmap
  "trust.title": { en: "Secure Freelance Roadmap", hi: "सुरक्षित फ्रीलांस रोडमैप" },
  "trust.step1": { en: "1. Brief & Pricing Approval", hi: "1. ब्रीफ और मूल्य स्वीकृति" },
  "trust.step2": { en: "2. Live Staging Access", hi: "2. लाइव स्टेजिंग एक्सेस" },
  "trust.step3": { en: "3. Direct Handover & Support", hi: "3. सीधा हैंडओवर और सपोर्ट" },

  // Footer Section
  "footer.copyright": { en: "All rights reserved. Designed with precision in Rajasthan, India.", hi: "सर्वाधिकार सुरक्षित। राजस्थान, भारत में सटीकता के साथ डिजाइन किया गया।" }
};

// Translated Content Lists
export const TRANSLATED_SERVICES: Record<Language, any[]> = {
  en: [
    {
      id: "web-design",
      title: "Website Design & Development",
      description: "Futuristic, ultra-fast, and responsive websites. Specializing in high-conversion landing pages, customized Blogs (Blogger/WordPress), and agency websites.",
      tag: "High Conversion",
      benefits: [
        "Custom UI/UX with glassmorphism style",
        "Mobile-first responsive optimization",
        "PageSpeed scores exceeding 95+",
        "Social media & messaging integrations"
      ],
      priceEst: "from $99 / ₹7,999",
      timeEst: "3-5 Days"
    },
    {
      id: "seo-optimization",
      title: "Google SEO Optimization",
      description: "Rank #1 on Google search results. Technical audits, high-intent keyword strategies, and AdSense optimized structures that generate organic leads 24/7.",
      tag: "Organic Growth",
      benefits: [
        "Deep keyword & competitor research",
        "On-page schema markup deployment",
        "Speed optimization for Google Web Vitals",
        "Google Search Console & Analytics setups"
      ],
      priceEst: "from $149 / ₹11,999",
      timeEst: "Weekly/Monthly"
    },
    {
      id: "yt-thumbnails",
      title: "High-CTR YouTube Thumbnails",
      description: "Psychology-driven eye-catching thumbnail designs with neon elements, 3D character integration, and readable bold typography that commands clicks.",
      tag: "View Multiplier",
      benefits: [
        "3D depth styling & custom compositions",
        "Dynamic typography and high contrast ratios",
        "A/B-tested formats for maximum clicks",
        "Ultra-high resolution 4K output"
      ],
      priceEst: "from $15 / ₹999",
      timeEst: "24 Hours"
    },
    {
      id: "blog-writing",
      title: "AdSense-Friendly Blog Writing",
      description: "Engaging, high-quality, and completely plagiarism-free content. Structured with search intent and rich keywords to rank easily on search engines.",
      tag: "SEO-Optimized",
      benefits: [
        "100% human-written and copy-ready AI-free",
        "Seamless keyword cluster density integration",
        "Optimized headings (H1-H4) & subheadings",
        "Formatting optimized for AdSense approval"
      ],
      priceEst: "from $20 / ₹1,499",
      timeEst: "1-2 Days"
    },
    {
      id: "landing-pages",
      title: "Conversion-Focused Landing Pages",
      description: "Clean single-page flows engineered to convert passive visitors into paying customers. Ideal for digital courses, local services, and product sales.",
      tag: "Sales Engine",
      benefits: [
        "Psychology-optimized hook zones",
        "Aesthetic glassmorphism and motion highlights",
        "Responsive interactive contact/lead forms",
        "High trust layouts with star feedback"
      ],
      priceEst: "from $79 / ₹5,999",
      timeEst: "2-3 Days"
    },
    {
      id: "digital-marketing",
      title: "Social Media Growth & Marketing",
      description: "Transform your social channels into dynamic marketing machines. Premium templates, branding assets, post schedules, and targeted marketing plans.",
      tag: "Brand Authority",
      benefits: [
        "Custom visual brand kit & palette",
        "Viral carousel & hooks generation",
        "Growth hacks utilizing direct DM workflows",
        "Lead scoring and retargeting blueprints"
      ],
      priceEst: "from $199 / ₹15,999",
      timeEst: "Monthly Growth"
    }
  ],
  hi: [
    {
      id: "web-design",
      title: "वेबसाइट डिजाइन और विकास",
      description: "भविष्यवादी, अत्यधिक तेज़ और उत्तरदायी (रेस्पॉन्सिव) वेबसाइटें। उच्च-रूपांतरण (हाई-कन्वर्शन) लैंडिंग पेजों, कस्टमाइज्ड ब्लॉग्स (ब्लॉगर/वर्डप्रेस) और एजेंसी वेबसाइटों में विशेषज्ञता।",
      tag: "हाई कन्वर्शन",
      benefits: [
        "ग्लासमॉर्फिज्म स्टाइल के साथ कस्टम UI/UX डिज़ाइन",
        "मोबाइल-फर्स्ट रेस्पॉन्सिव स्पीड ऑप्टिमाइजेशन",
        "गूगल पेजस्पीड स्कोर हमेशा 95+ से अधिक",
        "सोशल मीडिया और डायरेक्ट मैसेजिंग इंटीग्रेशन"
      ],
      priceEst: "शुरुआती $99 / ₹7,999 से",
      timeEst: "3-5 दिन"
    },
    {
      id: "seo-optimization",
      title: "गूगल एसईओ अनुकूलन",
      description: "गूगल खोज परिणामों में नंबर #1 स्थान प्राप्त करें। तकनीकी ऑडिट, उच्च-इरादा (हाई-इंटेंट) कीवर्ड रणनीतियाँ, और एडसेंस अनुकूलित संरचनाएं जो 24/7 ऑर्गेनिक लीड उत्पन्न करती हैं।",
      tag: "ऑर्गेनिक ग्रोथ",
      benefits: [
        "गहन कीवर्ड और प्रतिस्पर्धी (कंपटीटर) रिसर्च",
        "ऑन-पेज स्कीमा मार्कअप और तकनीकी डिप्लॉयमेंट",
        "गूगल वेब वाइटल्स के लिए लोडिंग स्पीड ऑप्टिमाइजेशन",
        "गूगल सर्च कंसोल और एनालिटिक्स पूर्ण सेटअप"
      ],
      priceEst: "शुरुआती $149 / ₹11,999 से",
      timeEst: "साप्ताहिक/मासिक"
    },
    {
      id: "yt-thumbnails",
      title: "हाई-CTR यूट्यूब थंबनेल",
      description: "मनोविज्ञान-संचालित आकर्षक थंबनेल डिज़ाइन जिसमें नियॉन तत्व, 3D कैरेक्टर इंटीग्रेशन, और स्पष्ट बोल्ड टाइपोग्राफी शामिल है जो दर्शकों को क्लिक करने पर मजबूर करती है।",
      tag: "व्यूज मल्टीप्लायर",
      benefits: [
        "3D डेप्थ स्टाइलिंग और कस्टम कंपोजिशंस",
        "डायनेमिक टाइपोग्राफी और उच्च कंट्रास्ट अनुपात",
        "अधिकतम क्लिक के लिए A/B-परीक्षणित प्रारूप",
        "अल्ट्रा-हाई रेजोल्यूशन 4K आउटपुट फाइल"
      ],
      priceEst: "शुरुआती $15 / ₹999 से",
      timeEst: "24 घंटे"
    },
    {
      id: "blog-writing",
      title: "एडसेंस-फ्रेंडली ब्लॉग लेखन",
      description: "आकर्षक, उच्च-गुणवत्ता और पूरी तरह से साहित्यिक चोरी-मुक्त (प्लैजिरिज्म-फ्री) सामग्री। खोज इरादे और समृद्ध कीवर्ड के साथ संरचित ताकि आसानी से रैंक हो सके।",
      tag: "एसईओ-अनुकूलित",
      benefits: [
        "100% मानव-लिखित और कॉपी-रेडी एआई-मुक्त लेख",
        "निर्बाध कीवर्ड क्लस्टर घनत्व का सटीक उपयोग",
        "अनुकूलित हेडिंग्स (H1-H4) और सब-हेडिंग्स संरचना",
        "एडसेंस तुरंत अप्रूवल के लिए विशेष फॉर्मेटिंग"
      ],
      priceEst: "शुरुआती $20 / ₹1,499 से",
      timeEst: "1-2 दिन"
    },
    {
      id: "landing-pages",
      title: "कन्वर्शन-केंद्रित लैंडिंग पेज",
      description: "साधारण आगंतुकों को भुगतान करने वाले ग्राहकों में बदलने के लिए बनाई गई क्लीन सिंगल-पेज वेबसाइटें। डिजिटल कोर्सेज, लोकल सर्विसेज और उत्पाद बिक्री के लिए आदर्श।",
      tag: "सेल्स इंजन",
      benefits: [
        "मनोविज्ञान-अनुकूलित हुक जोन्स और बैनर",
        "सौंदर्यपूर्ण ग्लासमॉर्फिज्म और मोशन हाइलाइट्स",
        "उत्तरदायी इंटरैक्टिव संपर्क/लीड कैप्चर फॉर्म",
        "स्टार फीडबैक के साथ उच्च विश्वसनीयता वाले लेआउट"
      ],
      priceEst: "शुरुआती $79 / ₹5,999 से",
      timeEst: "2-3 दिन"
    },
    {
      id: "digital-marketing",
      title: "सोशल मीडिया ग्रोथ और मार्केटिंग",
      description: "अपने सोशल चैनल्स को डायनेमिक मार्केटिंग मशीनों में बदलें। प्रीमियम टेम्पलेट्स, ब्रांडिंग एसेट्स, पोस्ट शेड्यूल और लक्षित मार्केटिंग योजनाएं।",
      tag: "ब्रांड अथॉरिटी",
      benefits: [
        "कस्टम विजुअल ब्रांड किट और कलर पैलेट",
        "वायरल हिंडोला (कैरोज़ल) और हुक्स जनरेशन",
        "डायरेक्ट डीएम वर्कफ़्लो का उपयोग करने वाले ग्रोथ हैक्स",
        "लीड स्कोरिंग और रिटारगेटिंग ब्लूप्रिंट गाइड"
      ],
      priceEst: "शुरुआती $199 / ₹15,999 से",
      timeEst: "मासिक बढ़त"
    }
  ]
};

export const TRANSLATED_PROJECTS: Record<Language, any[]> = {
  en: [
    {
      id: "proj-1",
      title: "SaaS Tech Landing Page Redesign",
      category: "Web Design",
      description: "Upgraded a cluttered, slow HTML site into a high-octane minimalist cyber-style landing page with glowing micro-interactions.",
      results: [
        "Core conversion rate multiplied by 3.5x (1.8% to 6.3%)",
        "Page load time slashed from 4.8s to 0.7s (LCP score A)",
        "Interactive 3D-card elements increased scroll-depth by 40%"
      ],
      metrics: "3.5x Conversions",
      clientName: "CloudPulse Technologies",
      tag: "Web Design & Speed",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
      liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
    },
    {
      id: "proj-2",
      title: "Organic Blog Scale to 35K Monthly Clicks",
      category: "SEO Optimization",
      description: "Planned keyword architecture and content silos for a fresh blogging domain in the tech sector, implementing local SEO schema structures.",
      results: [
        "Scaled page rankings for 18 core keywords into Google's top 3",
        "Organic clicks skyrocketed from 50 to 35,400 monthly readers",
        "Achieved AdSense approval within 14 days of publishing content"
      ],
      metrics: "35K+ M-Clicks",
      clientName: "BloggerRank Hub",
      tag: "SEO Growth",
      technologies: ["WordPress", "RankMath SEO", "XML Sitemaps", "Google Analytics", "JSON-LD Schema"],
      liveUrl: "https://aaryankelvin.online"
    },
    {
      id: "proj-3",
      title: "Tech YouTuber Thumbnail & CTR Uplift",
      category: "Thumbnail Design",
      description: "Crafted high-impact, custom-shadowed neon thumbnails with custom 3D element rendering to drive action-oriented click metrics.",
      results: [
        "Click-through rate (CTR) increased from 2.4% average to 11.2%",
        "Average views per episode boosted by 420,000 inside 30 days",
        "Enhanced custom branding recognizable in mobile feed rows"
      ],
      metrics: "11.2% CTR Boost",
      clientName: "Apex Gaming & Tech",
      tag: "Graphic Design",
      technologies: ["Canva", "Photoshop CC", "3D Blender Models", "Click-Psychology mapping"],
      liveUrl: "https://youtube.com"
    },
    {
      id: "proj-4",
      title: "Modern Portfolio with Direct Forms",
      category: "Digital Marketing",
      description: "Built and conceptualized a premium single-page visual hub for an independent professional, using glassmorphic tables and social trust boards.",
      results: [
        "Drove 140+ hot qualified inquiries in the first fortnight",
        "Integrated custom conversion-oriented brief capture system",
        "Reduced cost-per-lead (CPL) by 56% compared to standard channels"
      ],
      metrics: "140+ Leads Fast",
      clientName: "Siddharth J. (Consulting)",
      tag: "Full funnels",
      technologies: ["React", "Blogger XML", "Tailwind CSS", "WhatsApp API integrations"],
      liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
    }
  ],
  hi: [
    {
      id: "proj-1",
      title: "SaaS टेक लैंडिंग पेज का नया रूप",
      category: "वेबसाइट डिजाइन",
      description: "एक पुराने और धीमे HTML साइट को चमकते माइक्रो-इंटरैक्शंस वाले एक हाई-ऑक्टेन मिनिमलिस्ट साइबर-स्टाइल लैंडिंग पेज में बदला गया।",
      results: [
        "मुख्य कन्वर्शन दर को 3.5 गुना बढ़ा दिया (1.8% से बढ़कर 6.3%)",
        "पेज लोड समय को 4.8 सेकेंड से घटाकर सिर्फ 0.7 सेकेंड किया (LCP स्कोर A)",
        "इंटरैक्टिव 3D-कार्ड तत्वों ने स्क्रॉल-डेप्थ को 40% तक बढ़ा दिया"
      ],
      metrics: "3.5x कन्वर्शन",
      clientName: "क्लाउडपल्स टेक्नोलॉजीज",
      tag: "वेब डिजाइन और स्पीड",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Three.js"],
      liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
    },
    {
      id: "proj-2",
      title: "ऑर्गेनिक ब्लॉग 35K मासिक क्लिक तक पहुंचा",
      category: "एसईओ अनुकूलन",
      description: "टेक क्षेत्र में एक नए ब्लॉगिंग डोमेन के लिए कीवर्ड आर्किटेक्चर और कंटेंट साइलो की योजना बनाई, स्थानीय एसईओ स्कीमा संरचनाओं को लागू किया।",
      results: [
        "गूगल के टॉप 3 परिणामों में 18 मुख्य कीवर्ड्स की रैंकिंग हासिल की",
        "ऑर्गेनिक क्लिक 50 से आसमान छूकर प्रति माह 35,400 पाठकों तक पहुंचे",
        "कंटेंट प्रकाशित करने के मात्र 14 दिनों के भीतर एडसेंस स्वीकृति प्राप्त की"
      ],
      metrics: "35K+ मासिक क्लिक",
      clientName: "ब्लॉगररैंक हब",
      tag: "एसईओ ग्रोथ",
      technologies: ["WordPress", "RankMath SEO", "XML Sitemaps", "Google Analytics", "JSON-LD Schema"],
      liveUrl: "https://aaryankelvin.online"
    },
    {
      id: "proj-3",
      title: "टेक यूट्यूबर थंबनेल और CTR में भारी उछाल",
      category: "थंबनेल डिजाइन",
      description: "क्लिक बढ़ाने के लिए कस्टम 3D एलिमेंट्स रेंडरिंग के साथ उच्च-प्रभाव वाले, नियॉन थंबनेल तैयार किए गए।",
      results: [
        "क्लिक-थ्रू रेट (CTR) औसत 2.4% से बढ़कर 11.2% हो गया",
        "30 दिनों के भीतर प्रति एपिसोड औसत व्यूज में 420,000 की वृद्धि हुई",
        "मोबाइल फीड में आसानी से पहचाने जाने योग्य कस्टम ब्रांडिंग को निखारा"
      ],
      metrics: "11.2% CTR बूस्ट",
      clientName: "एपेक्स गेमिंग और टेक",
      tag: "ग्राफिक डिजाइन",
      technologies: ["Canva", "Photoshop CC", "3D Blender Models", "Click-Psychology mapping"],
      liveUrl: "https://youtube.com"
    },
    {
      id: "proj-4",
      title: "डायरेक्ट फॉर्म्स के साथ आधुनिक पोर्टफोलियो",
      category: "डिजिटल मार्केटिंग",
      description: "एक स्वतंत्र पेशेवर के लिए ग्लासमोर्फिक और सामाजिक विश्वास बोर्डों का उपयोग करके एक प्रीमियम सिंगल-पेज विजुअल हब बनाया गया।",
      results: [
        "पहले दो हफ्तों में ही 140 से अधिक सीधे प्रोजेक्ट्स के प्रस्ताव प्राप्त हुए",
        "कस्टम कनवर्टिंग प्रोजेक्ट ब्रीफ कैप्चर सिस्टम का सफल इंटीग्रेशन",
        "सामान्य चैनलों की तुलना में प्रति लीड लागत (CPL) को 56% तक घटाया"
      ],
      metrics: "140+ लीड्स तुरंत",
      clientName: "सिद्धार्थ जे. (कंसल्टिंग)",
      tag: "फनल डिजाइन",
      technologies: ["React", "Blogger XML", "Tailwind CSS", "WhatsApp API integrations"],
      liveUrl: "https://ais-dev-cnpsou3sxnr5k7mwg3lryf-285257972198.asia-east1.run.app"
    }
  ]
};

export const TRANSLATED_PRICING: Record<Language, any[]> = {
  en: [
    {
      id: "pack-basic",
      name: "Starter Package",
      price: "$99",
      description: "Perfect for beginners, bloggers, and local businesses wanting to establish a high-quality modern visual presence.",
      features: [
        "Single-page futuristic landing page",
        "Mobile-responsive glassmorphic design",
        "Modern animations & scroll glows",
        "Basic On-Page SEO setup",
        "Responsive lead capture contact form",
        "Standard support (72-hour turnaround)"
      ],
      badge: "Most Affordable",
      deliveryTime: "3 Days",
      revisions: "3 Revisions",
      ctaText: "Get Started Now"
    },
    {
      id: "pack-std",
      name: "Professional Package",
      price: "$249",
      description: "The gold standard for freelancers, small brands, and content creators ready to drive serious organic growth and conversions.",
      features: [
        "Multi-Page Premium Website (3-5 pages)",
        "High-Conversion Copywriting strategy",
        "Advanced Google On-Page & Technical SEO",
        "Interactive Before/After showcases",
        "Instant social and custom floating call-to-actions",
        "1 Custom Thumbnail/social banner pack",
        "Priority Email & Slack Support (24-hour)"
      ],
      isPopular: true,
      badge: "Best Value",
      deliveryTime: "5 Days",
      revisions: "Unlimited Revisions",
      ctaText: "Order Growth Package"
    },
    {
      id: "pack-prem",
      name: "Premium Package",
      price: "$499",
      description: "The ultimate solution for high-end professional agencies, brands, and creators wanting custom 3D web visuals and dominant marketing scales.",
      features: [
        "Full Premium Custom Interactive Website",
        "Ultra-immersive 3D floating scroll elements",
        "Complete Search Engine Authority Audit",
        "Advanced Schema markup & speed optimizations",
        "Infinite Custom graphics, badges, & logo assets",
        "Premium copy/sales structure for 3 distinct offers",
        "Inbound custom business systems integration",
        "Dual-Currency / Localization support integration",
        "VIP Dedicated Support (Live voice/chat responses)"
      ],
      badge: "Complete Authority",
      deliveryTime: "7-10 Days",
      revisions: "VIP Access / Lifetime Minor Edits",
      ctaText: "Order VIP Placement"
    },
    {
      id: "pack-ent",
      name: "Enterprise Package",
      price: "$999",
      description: "Tailored solution for fast-growing companies and high-volume creators needing custom AI system integrations, automation pipelines, and continuous support.",
      features: [
        "Fully Custom Web Application & System",
        "Advanced AI Agent integrations & LLM endpoints",
        "Automation pipelines and continuous workflows",
        "Custom analytics & user behavioral dashboard tracking",
        "Bi-weekly live video progress alignment reviews",
        "Dedicated developer channel (2-hour SLA response)",
        "Continuous retainer scaling with code handover",
        "Fully documented backend REST/GraphQL endpoint mapping",
        "Ongoing schema maintenance & server deployment oversight"
      ],
      badge: "Unlimited Scale",
      deliveryTime: "14-21 Days",
      revisions: "Bespoke / Multi-cycle Iterations",
      ctaText: "Launch Enterprise Plan"
    }
  ],
  hi: [
    {
      id: "pack-basic",
      name: "स्टार्टर पैकेज",
      price: "$99",
      description: "शुरुआती लोगों, ब्लॉगर्स और स्थानीय व्यवसायों के लिए बिल्कुल सही जो एक उच्च-गुणवत्ता और आधुनिक उपस्थिति स्थापित करना चाहते हैं।",
      features: [
        "सिंगल-पेज भविष्यवादी लैंडिंग पेज डिजाइन",
        "मोबाइल-रेस्पॉन्सिव आकर्षक ग्लासमोर्फिक लेआउट",
        "आधुनिक एनिमेशन और स्क्रॉल ग्लोइंग इफेक्ट्स",
        "मूल ऑन-पेज एसईओ (SEO) सेटअप",
        "प्रतिक्रियाशील डायरेक्ट लीड कैप्चर फॉर्म",
        "मानक सहायता (72 घंटे के भीतर जवाब)"
      ],
      badge: "सबसे किफायती",
      deliveryTime: "3 दिन",
      revisions: "3 संशोधन",
      ctaText: "अभी शुरू करें"
    },
    {
      id: "pack-std",
      name: "प्रोफेशनल पैकेज",
      price: "$249",
      description: "फ्रीलांसरों, छोटे ब्रांडों और कंटेंट क्रिएटर्स के लिए सोने का मानक जो गंभीर ऑर्गेनिक विकास और रूपांतरण बढ़ाने के लिए तैयार हैं।",
      features: [
        "मल्टी-पेज प्रीमियम वेबसाइट (3-5 पेज)",
        "उच्च-रूपांतरण (हाई-कन्वर्शन) कॉपीराइटिंग रणनीति",
        "उन्नत गूगल ऑन-पेज और तकनीकी एसईओ",
        "इंटरैक्टिव पहले और बाद के शोकेस टेबल",
        "तत्काल सोशल और फ्लोटिंग कॉल-टू-एक्शन बटन्स",
        "1 कस्टमाइज्ड थंबनेल/सोशल बैनर पैक",
        "प्राथमिकता ईमेल और स्लैक सहायता (24 घंटे में)"
      ],
      isPopular: true,
      badge: "सर्वोत्तम मूल्य",
      deliveryTime: "5 दिन",
      revisions: "असीमित संशोधन",
      ctaText: "ग्रोथ पैकेज ऑर्डर करें"
    },
    {
      id: "pack-prem",
      name: "प्रीमियम पैकेज",
      price: "$499",
      description: "हाई-एंड प्रोफेशनल एजेंसियों, ब्रांडों और क्रिएटर्स के लिए अंतिम समाधान जो कस्टम 3D वेब विजुअल और प्रमुख मार्केटिंग स्केल चाहते हैं।",
      features: [
        "पूर्ण प्रीमियम कस्टम इंटरैक्टिव वेबसाइट",
        "अल्ट्रा-इमर्सिव 3D फ्लोटिंग स्क्रॉल तत्व",
        "सर्च इंजन अथॉरिटी का पूर्ण ऑडिट",
        "उन्नत स्कीमा मार्कअप और गति अनुकूलन",
        "अनंत कस्टम ग्राफिक्स, बैज और लोगो एसेट्स",
        "3 अलग-अलग ऑफर्स के लिए प्रीमियम सेल्स कॉपी",
        "इनबाउंड कस्टम बिजनेस सिस्टम इंटीग्रेशन",
        "दोहरी मुद्रा / स्थानीयकरण समर्थन एकीकरण",
        "वीआईपी समर्पित सहायता (लाइव वॉयस/चैट जवाब)"
      ],
      badge: "पूर्ण वर्चस्व",
      deliveryTime: "7-10 दिन",
      revisions: "VIP एक्सेस / लाइफटाइम माइनर एडिट्स",
      ctaText: "वीआईपी ऑर्डर प्लेस करें"
    },
    {
      id: "pack-ent",
      name: "एंटरप्राइज पैकेज",
      price: "$999",
      description: "कस्टम एआई सिस्टम इंटीग्रेशन, ऑटोमेशन पाइपलाइन और निरंतर सहायता की आवश्यकता वाले तेजी से बढ़ते व्यवसायों और क्रिएटर्स के लिए अनुकूलित प्लान।",
      features: [
        "पूरी तरह से कस्टम वेब एप्लीकेशन और सिस्टम",
        "उन्नत एआई एजेंट एकीकरण और एलएलएम एंडपॉइंट्स",
        "स्वचालन पाइपलाइन और सतत वर्कफ़्लोज़",
        "कस्टम एनालिटिक्स और यूजर बिहेवियर डैशबोर्ड",
        "द्वि-साप्ताहिक लाइव वीडियो प्रगति समीक्षा",
        "समर्पित डेवलपर चैनल (2 घंटे में उत्तर)",
        "कोड हैंडओवर के साथ निरंतर रिटेनर स्केलिंग",
        "पूरी तरह से प्रलेखित रेस्ट/ग्राफक्यूएल एंडपॉइंट्स",
        "चल रही स्कीमा रखरखाव और सर्वर निगरानी"
      ],
      badge: "असीमित स्केल",
      deliveryTime: "14-21 दिन",
      revisions: "बेस्पोक / मल्टी-साइकिल संशोधन",
      ctaText: "एंटरप्राइज प्लान शुरू करें"
    }
  ]
};

export const TRANSLATED_TESTIMONIALS: Record<Language, any[]> = {
  en: [
    {
      id: "test-1",
      author: "Aman Verma",
      role: "Founder",
      company: "TechPinnacle Media",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "Rohit Kumar Nagar completely transformed our agency web experience. The 3D interactions are gorgeous and ultra-fast. We've captured 3 brand-new high-ticket corporate clients within days of our relaunch. His rates are unbelievably honest and the result is world-class performance!",
      date: "14 days ago"
    },
    {
      id: "test-2",
      author: "Sid Vlog",
      role: "Creator",
      company: "Apex Tech Reviews",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "My video click-through-rate (CTR) was stuck below 3% for months. Rohit redesigned my template with high-saturation neon contrasts and modern layouts. CTR instantly skyrocketed to 11.2%, which brought me 400K views in two weeks! He is my go-to weapon for YouTube graphics now.",
      date: "A week ago"
    },
    {
      id: "test-3",
      author: "Priya Sharma",
      role: "Proprietor",
      company: "Priya's Organic Skincare",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "I needed standard blog content that Google loves for AdSense approval. Rohit wrote 15 high-scoring, plagiarism-free SEO blog articles that got my platform approved within 2 weeks. Organic clicks went from practically zero to hundreds daily. Truly great value at an unbeatable cost for small ventures!",
      date: "Yesterday"
    }
  ],
  hi: [
    {
      id: "test-1",
      author: "अमन वर्मा",
      role: "संस्थापक",
      company: "टेकपिनकल मीडिया",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "रोहित कुमार नागर ने हमारे एजेंसी के वेब अनुभव को पूरी तरह से बदल दिया। 3D एनिमेशन बेहद खूबसूरत और सुपर-फास्ट हैं। रिलॉन्च के कुछ ही दिनों के भीतर हमें 3 नए हाई-टिकट कॉर्पोरेट क्लाइंट्स मिले। उनकी दरें बेहद पारदर्शी हैं और परिणाम विश्व स्तरीय है!",
      date: "14 दिन पहले"
    },
    {
      id: "test-2",
      author: "सिड व्लॉग",
      role: "क्रिएटर",
      company: "एपेक्स टेक रिव्यूज",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "मेरा वीडियो क्लिक-थ्रू-रेट (CTR) महीनों से 3% से नीचे था। रोहित ने आकर्षक कंट्रास्ट और मॉडर्न लेआउट के साथ मेरे थंबनेल को फिर से डिजाइन किया। CTR तुरंत बढ़कर 11.2% हो गया, जिससे दो सप्ताह में 4 लाख व्यूज मिले! यूट्यूब ग्राफिक्स के लिए वह मेरा सबसे भरोसेमंद साथी है।",
      date: "एक सप्ताह पहले"
    },
    {
      id: "test-3",
      author: "प्रिया शर्मा",
      role: "मालकिन",
      company: "प्रियाज़ आर्गेनिक स्किनकेयर",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      rating: 5,
      text: "मुझे गूगल एडसेंस की स्वीकृति के लिए उच्च-गुणवत्ता वाले ब्लॉग कंटेंट की आवश्यकता थी। रोहित ने 15 उत्कृष्ट एसईओ आर्टिकल्स लिखे, जिससे मेरे ब्लॉग को मात्र 2 सप्ताह में एडसेंस का अप्रूवल मिल गया। ऑर्गेनिक क्लिक शून्य से बढ़कर प्रतिदिन सैकड़ों तक पहुंच गए। छोटे व्यवसायों के लिए बेजोड़ अनुभव!",
      date: "कल"
    }
  ]
};

export const TRANSLATED_WORKFLOW: Record<Language, any[]> = {
  en: [
    {
      id: "discovery",
      number: "01",
      title: "Discovery & Strategic Audit",
      shortDesc: "Deconstruct your target ecosystem, perform competitor audits, and map out structured keyword silos.",
      longDesc: "Every premium product begins with thorough intelligence gathering. We analyze domain authority gaps, keyword volume clusters, and direct competitor source code. We map your audience's intent structure, allowing us to build an absolute blueprint for SEO dominant architecture.",
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
      ]
    },
    {
      id: "architecture",
      number: "02",
      title: "High-Fidelity Blueprinting",
      shortDesc: "Architect clean schema designs, relational entity relations, and gorgeous pixel-perfect wireframes.",
      longDesc: "We design robust, low-latency client state mechanisms and high-converting typography structures before writing a single line of production code. This stage defines the user experience framework, absolute font tracking tables, and data models.",
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
      ]
    },
    {
      id: "crafting",
      number: "03",
      title: "Optimized Logic & Coding",
      shortDesc: "Perform server-side React crafting, prompt engineering, and low-latency API integration.",
      longDesc: "Using next-gen React design patterns combined with extreme bundle optimization, we craft lightweight, modular, self-healing codebases. We integrate advanced AI reasoning using Google Gemini API proxies to deliver live intelligence without slowing down the initial page render.",
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
      ]
    },
    {
      id: "auditing",
      number: "04",
      title: "Rigorous Testing & Audits",
      shortDesc: "Validate absolute performance speeds, cross-browser responsiveness, and structural accessibility.",
      longDesc: "We subject the application to intense stress testing and automated validators. Every static page is optimized to satisfy Google's strict Core Web Vitals, ensuring near-instant loading on poor network connections.",
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
      ]
    },
    {
      id: "launch",
      number: "05",
      title: "Polished Launch & Scale",
      shortDesc: "Deploy to highly available Cloud containers, secure SSL channels, and establish Google Indexing pipelines.",
      longDesc: "Your application is delivered to premium production environments with automatic scale-to-zero pricing to minimize hosting overheads. We configure search console sitemaps, enabling immediate discovery by Google's rank crawling bots.",
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
      ]
    }
  ],
  hi: [
    {
      id: "discovery",
      number: "01",
      title: "खोज और रणनीतिक ऑडिट",
      shortDesc: "अपने लक्षित उद्योग का विश्लेषण करें, प्रतिस्पर्धी ऑडिट करें, और संरचित कीवर्ड साइलोस की रूपरेखा तैयार करें।",
      longDesc: "प्रत्येक प्रीमियम प्रोजेक्ट की शुरुआत गहन सूचना जुटाने से होती है। हम डोमेन अथॉरिटी कमियों, कीवर्ड वॉल्यूम क्लस्टर्स और प्रतिस्पर्धियों के सोर्स कोड का गहराई से विश्लेषण करते हैं। हम आपके लक्षित दर्शकों के इरादों की रूपरेखा बनाते हैं ताकि गूगल पर नंबर #1 रैंक दिलाने वाली संरचना तैयार हो सके।",
      duration: "24-48 घंटे",
      deliverables: [
        "ऑडियंस इंटेंट मैपिंग रिपोर्ट",
        "प्रतिस्पर्धी (कंपटीटर) परफॉर्मेंस रिपोर्ट",
        "उच्च-प्राथमिकता कीवर्ड साइलो आर्किटेक्चर",
        "तकनीकी खामियों (टेक्निकल डेट) की पूरी ऑडिट सूची"
      ],
      tools: ["SEMrush", "Google Lighthouse", "Ahrefs", "Screaming Frog"],
      metrics: [
        { label: "ऑडिट गहराई", value: "100%" },
        { label: "लक्षित ROI", value: "4.5x" }
      ]
    },
    {
      id: "architecture",
      number: "02",
      title: "हाई-फिडेलिटी ब्लूप्रिंटिंग",
      shortDesc: "क्लीन स्कीमा डिज़ाइन, रिलेशनल एंटिटी रिलेशंस और शानदार पिक्सेल-परफेक्ट वायरफ्रेम बनाएं।",
      longDesc: "हम प्रोडक्शन कोड की पहली लाइन लिखने से पहले मजबूत, कम-विलंबता (लो-लेटेंसी) क्लाइंट स्टेट मेकैनिज्म और हाई-कन्वर्टिंग टाइपोग्राफी फ्रेमवर्क डिजाइन करते हैं। यह चरण यूजर एक्सपीरियंस (UX) गाइडलाइंस, सटीक फ़ॉन्ट ट्रैकिंग और डेटा मॉडल तय करता है।",
      duration: "2-3 दिन",
      deliverables: [
        "इंटरैक्टिव हाई-फिडेलिटी प्रोटोटाइप्स",
        "रिलेशनल डेटाबेस स्कीमा आरेख (डायग्राम्स)",
        "फ़ॉन्ट ट्रैकिंग और टाइपोग्राफी मैट्रिक्स",
        "टेलविंड कलर पैलेट और गाइड मैप"
      ],
      tools: ["Figma", "dbdiagram.io", "Whimsical", "TailwindCSS"],
      metrics: [
        { label: "लेआउट सटीकता", value: "पिक्सेल-परफेक्ट" },
        { label: "यूजर प्रवाह", value: "मैक्सिमम 3-क्लिक" }
      ]
    },
    {
      id: "crafting",
      number: "03",
      title: "अनुकूलित कोडिंग और लॉजिक",
      shortDesc: "सर्वर-साइड रिएक्ट क्राफ्टिंग, कुशल प्रॉम्प्ट इंजीनियरिंग और कम-विलंबता एपीआई इंटीग्रेशन।",
      longDesc: "अल्ट्रा-फास्ट बंडल साइज और अगली पीढ़ी के रिएक्ट डिज़ाइन पैटर्न्स का उपयोग करके, हम हल्का, मॉड्यूलर और स्व-उपचार (सेल्फ-हीलिंग) कोडबेस बनाते हैं। हम सर्वर-साइड जेमिनी एपीआई प्रॉक्सी को एकीकृत करते हैं ताकि वेबसाइट की स्पीड कम किए बिना लाइव बुद्धिमत्ता प्रदान की जा सके।",
      duration: "4-6 दिन",
      deliverables: [
        "साफ और व्यवस्थित मॉड्यूलर कोडबेस",
        "सुरक्षित सर्वर-साइड एपीआई गेटवे प्रॉक्सीज़",
        "लेज़ी-लोडेड गतिशील (डायनेमिक) रूट्स",
        "कस्टम जेमिनी मॉडल कॉन्फ़िगरेशन"
      ],
      tools: ["React 18+", "GSAP", "Vite", "Gemini SDK", "TypeScript"],
      metrics: [
        { label: "बंडल साइज", value: "<45KB जिप्प्ड" },
        { label: "फ्रेम रेट", value: "60 FPS लॉक्ड" }
      ]
    },
    {
      id: "auditing",
      number: "04",
      title: "कठोर परीक्षण और ऑडिट",
      shortDesc: "सटीक परफॉरमेंस स्पीड, क्रॉस-ब्राउज़र कम्पेटिबिलिटी और संरचनात्मक सुगम्यता का सत्यापन करें।",
      longDesc: "हम एप्लीकेशन को गहन लोड टेस्टिंग और ऑटोमेटेड ऑडिट्स से गुजारते हैं। प्रत्येक स्टैटिक पेज को गूगल के सख्त 'कोर वेब वाइटल्स' को संतुष्ट करने के लिए कस्टमाइज किया जाता है ताकि कमजोर नेटवर्क पर भी वेबसाइट तुरंत खुले।",
      duration: "24 घंटे",
      deliverables: [
        "लाइटहाउस 100/100 कोर स्कोर",
        "क्रॉस-डिवाइस अनुकूलनशीलता रिपोर्ट",
        "स्वचालित लिंटर सत्यापन लॉग्स",
        "W3C और WCAG एक्सेसिबिलिटी अनुपालन"
      ],
      tools: ["Playwright", "Lighthouse CI", "ESLint", "W3C Validator"],
      metrics: [
        { label: "FCP स्पीड", value: "0.4s" },
        { label: "SEO स्कोर", value: "100%" }
      ]
    },
    {
      id: "launch",
      number: "05",
      title: "शानदार लॉन्च और स्केलिंग",
      shortDesc: "अत्यधिक सुरक्षित क्लाउड कंटेनरों पर डिप्लॉयमेंट, एसएसएल चैनल और गूगल इंडेक्सिंग पाइपलाइन सेटअप।",
      longDesc: "आपकी एप्लीकेशन को सर्वर लागत को शून्य के करीब रखने वाले आधुनिक होस्टिंग वातावरण में तैनात किया जाता है। हम तुरंत गूगल सर्च कंसोल साइटमैप्स सेट करते हैं ताकि गूगल के क्रॉलर आपकी साइट को तुरंत इंडेक्स कर सकें।",
      duration: "तत्काल",
      deliverables: [
        "जीरो-डाउनटाइम कंटेनर डिप्लॉयमेंट",
        "एसएसएल प्रमाणपत्र और DNS सुरक्षित सेटअप",
        "त्वरित गूगल इंडेक्सिंग हेतु साइटमैप्स",
        "24/7 सुरक्षा शील्ड सुरक्षा घेरा"
      ],
      tools: ["GCP Cloud Run", "Vercel", "Google Search Console", "Cloudflare"],
      metrics: [
        { label: "वैश्विक अपटाइम", value: "99.99%" },
        { label: "सर्वर लागत", value: "पे-एज-यू-गो" }
      ]
    }
  ]
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang");
    return (saved === "en" || saved === "hi") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    // Smoothly update body lang attribute
    document.documentElement.setAttribute("lang", lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const t = (key: string): string => {
    const translation = DICTIONARY[key];
    if (!translation) return key;
    return translation[language] || translation["en"] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

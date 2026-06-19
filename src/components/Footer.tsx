import React from "react";
import { Youtube, Twitter, Github, Instagram, Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer-section" className="relative bg-[#050508] border-t border-zinc-900 overflow-hidden py-12">
      {/* Visual top border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo & Slogan Column */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-sans font-black text-xl tracking-tight text-white">
                Dhakad Ra Chora
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[#c084fc] font-mono text-[8px] uppercase tracking-wider font-extrabold">
                Pro
              </span>
            </div>
            <p className="font-sans text-[11px] text-zinc-500 max-w-sm">
              Designing premium websites, optimizing Google SEO rankings, and constructing high-conversion assets. Making massive agency results accessible for beginner budgets.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-red-500 hover:border-red-500/40 transition-colors"
              title="Visit Dhakad Ra Chora on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-blue-400 hover:border-blue-400/40 transition-colors"
              title="Visit Dhakad Ra Chora on Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-purple-400 hover:border-purple-400/40 transition-colors"
              title="Visit Dhakad Ra Chora on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-900 text-zinc-400 hover:text-pink-400 hover:border-pink-401/40 transition-colors"
              title="Visit Dhakad Ra Chora on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] bg-zinc-900 my-8" />

        {/* Lower Row Copyright & Contact Details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <div className="space-y-1">
            <div>
              &copy; {currentYear} <strong>Dhakad Ra Chora</strong>. All Rights Reserved.
            </div>
            <div className="text-[10px] text-zinc-650 flex items-center justify-center sm:justify-start gap-1">
              <span>Made with love for high-converting startups</span>
              <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-500">
            <a
              href="mailto:rohitdhakaddhoti143@gmail.com"
              className="hover:text-purple-400 transition-colors flex items-center gap-1 font-semibold"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>rohitdhakaddhoti143@gmail.com</span>
            </a>
            <span className="hidden sm:inline text-zinc-800">|</span>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SSL Secured Operations</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

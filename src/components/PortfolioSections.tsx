import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Clean inline SVGs for brand icons
function GithubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/[0.06]">
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-sm font-semibold tracking-wider text-white">
            SHIV JETHI
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-1.5 py-0.5 rounded-full font-mono group-hover:border-white/30 transition-colors">
            Portfolio
          </span>
        </Link>

        {/* Center navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-white/60">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#timeline-colossus" className="hover:text-white transition-colors">Timeline</a>
          <a href="#systems" className="hover:text-white transition-colors">Systems</a>
          <a href="mailto:contact@shivjethi.com" className="hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/sjqwerty04/shivjethi-com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/80 hover:text-white hover:border-white/40 transition-colors"
          >
            <GithubIcon className="size-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="mailto:contact@shivjethi.com"
            className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-white/90 transition-colors"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

export function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 border-b border-white/[0.06] bg-grid-pattern">
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-6 relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 mb-6 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>shivjethi.com</span>
          <span className="text-white/30">•</span>
          <span className="text-white/50">Engineering & Systems</span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
          Building frontier scale systems and web software.
        </h1>

        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
          Full-stack software engineer obsessed with high-performance distributed systems, 
          clean aesthetics, and engineering execution speed. 
        </p>

        {/* Quick Stats Grid matching Colossus Style */}
        <div id="systems" className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.05] sm:grid-cols-4">
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Domain</p>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold text-white">shivjethi.com</p>
            <p className="mt-1 text-xs text-white/50">Production portfolio</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Focus</p>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Systems & AI</p>
            <p className="mt-1 text-xs text-white/50">Full-stack & telemetry</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Component</p>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Pixel-Perfect</p>
            <p className="mt-1 text-xs text-white/50">x.ai/colossus timeline</p>
          </div>
          <div className="bg-[#0a0a0a] p-6 sm:p-8">
            <p className="text-xs font-mono uppercase tracking-wider text-white/40">Execution</p>
            <p className="mt-2 text-2xl sm:text-3xl font-semibold text-white">Relentless</p>
            <p className="mt-1 text-xs text-white/50">Iterative shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="w-full border-t border-white/[0.08] py-12 bg-[#0a0a0a]">
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between gap-6 px-4 lg:px-6 text-xs text-white/40">
        <div className="flex items-center gap-2">
          <span className="font-mono text-white/80">SHIV JETHI</span>
          <span>© 2026 shivjethi.com</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/sjqwerty04" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://x.ai/colossus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            x.ai/colossus Source
          </a>
        </div>
      </div>
    </footer>
  );
}

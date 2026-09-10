"use client";

import { useState } from "react";
import { PortfolioHeader, PortfolioHero, PortfolioFooter } from "@/components/PortfolioSections";
import { ColossusTimeline, COLOSSUS_MILESTONES, TimelineMilestone } from "@/components/ColossusTimeline";
import { Sparkles, Layers, Sliders, ExternalLink, Code2 } from "lucide-react";

// Portfolio Career/Projects Milestones customized for Shiv Jethi
const SHIV_PORTFOLIO_MILESTONES: TimelineMilestone[] = [
  {
    date: "2023-01-01",
    title: "Foundations in Systems & Web",
    description: "Deep-dived into distributed infrastructure, React/Next.js systems architecture, and high-concurrency backend services.",
  },
  {
    date: "2023-08-01",
    title: "Full-Stack & Cloud Workloads",
    description: "Architected microservices and interactive data visualizations. Deployed resilient serverless applications at scale.",
  },
  {
    date: "2024-03-01",
    title: "AI & Model Engineering Tools",
    description: "Engineered high-throughput inference interfaces, prompt evaluation pipelines, and streaming agent frontends.",
  },
  {
    date: "2024-11-01",
    title: "Performance & Micro-Interactions",
    description: "Mastered sub-millisecond interaction design, GPU-accelerated rendering, and sleek dark-mode aesthetics.",
  },
  {
    date: "2025-06-01",
    title: "Supercomputing & Production Scales",
    description: "Inspired by groundbreaking feats like x.ai Colossus: engineering robust frontends capable of visualizing complex telemetry.",
  },
  {
    date: "2026-03-01",
    title: "shivjethi.com Reimagined",
    description: "Launched the new flagship portfolio website at shivjethi.com featuring pixel-perfect replica engineering.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<"portfolio" | "colossus">("colossus");

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      {/* Site Header */}
      <PortfolioHeader />

      {/* Hero Section */}
      <PortfolioHero />

      {/* Mode Switcher / Timeline Controls */}
      <section className="mx-auto w-full max-w-7xl px-4 lg:px-6 pt-12 pb-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Interactive Feature</span>
              <span className="text-white/30">•</span>
              <span className="text-xs text-white/50">Pixel-Perfect Replica</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-white mt-1">
              {activeTab === "colossus" ? "x.ai Colossus Timeline Replica" : "Shiv Jethi Engineering Milestones"}
            </h2>
            <p className="text-xs sm:text-sm text-white/50 mt-1">
              Features continuous scrub-on-hover, spring motion width indicator, and @number-flow dynamic counter.
            </p>
          </div>

          <div className="flex items-center bg-white/[0.05] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("colossus")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "colossus"
                  ? "bg-white text-black shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sparkles className="size-3.5" />
              <span>Colossus (x.ai)</span>
            </button>
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === "portfolio"
                  ? "bg-white text-black shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Code2 className="size-3.5" />
              <span>Career Journey</span>
            </button>
          </div>
        </div>
      </section>

      {/* Primary Timeline Component */}
      <div id="timeline-colossus">
        {activeTab === "colossus" ? (
          <ColossusTimeline
            key="colossus"
            milestones={COLOSSUS_MILESTONES}
            startDate="2024-05-01"
            sectionLabel="Timeline"
            headlineSuffix="days from groundbreak"
          />
        ) : (
          <ColossusTimeline
            key="portfolio"
            milestones={SHIV_PORTFOLIO_MILESTONES}
            startDate="2023-01-01"
            sectionLabel="Shiv Jethi's Journey"
            headlineSuffix="days of relentless engineering"
          />
        )}
      </div>

      {/* Deep-dive Architecture / Tech Spec matching x.ai design */}
      <section className="mx-auto w-full max-w-7xl px-4 lg:px-6 py-20 border-t border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">Technical Fidelity</p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              An exact 1:1 reproduction of the x.ai/colossus timeline
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed text-sm sm:text-base">
              Every detail was reverse-engineered directly from the production bundle on{" "}
              <a href="https://x.ai/colossus" target="_blank" rel="noreferrer" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
                x.ai/colossus
              </a>:
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 rounded-full bg-white/80 mt-2" />
                <span>
                  <strong className="text-white">Fluid mouse scrub:</strong> Continuous scrubbing with <code className="text-xs font-mono bg-white/10 px-1 py-0.5 rounded">onMouseMove</code> mapping bounding client rect ratio to milestone steps.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 rounded-full bg-white/80 mt-2" />
                <span>
                  <strong className="text-white">Spring-damped progress bar:</strong> Exact spring configuration (<code className="text-xs font-mono bg-white/10 px-1 py-0.5 rounded">stiffness: 300, damping: 30</code>) via Framer Motion.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 rounded-full bg-white/80 mt-2" />
                <span>
                  <strong className="text-white">Dynamic numeral morphing:</strong> Powered by <code className="text-xs font-mono bg-white/10 px-1 py-0.5 rounded">@number-flow/react</code> with 600ms ease-out character-level digit rolls.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 rounded-full bg-white/80 mt-2" />
                <span>
                  <strong className="text-white">ResizeObserver width transition:</strong> Dynamic heading container adjustment using cubic-bezier(0.16, 1, 0.3, 1).
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#111111] p-6 font-mono text-xs text-white/80 overflow-x-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] text-white/40">
              <span>timeline-spec.ts</span>
              <span>x.ai replica</span>
            </div>
            <pre className="pt-4 text-emerald-300 leading-relaxed">
{`// Extracted milestone schema from x.ai
const milestones = [
  { date: "2024-05-01", title: "Rapid construction" },
  { date: "2024-06-01", title: "GPUs start arriving" },
  { date: "2024-07-01", title: "Bottlenecks & breakthroughs" },
  { date: "2024-08-01", title: "25K GPUs delivered weekly" },
  { date: "2024-09-01", title: "Training begins" },
  { date: "2025-01-01", title: "Grok 3 trained" },
  { date: "2025-02-01", title: "Full scale (200K GPUs)" }
];

// Continuous scrubbing mapping
const onMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const index = Math.round(
    ((e.clientX - rect.left) / rect.width) * (len - 1)
  );
  setActiveIndex(Math.max(0, Math.min(len - 1, index)));
};`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PortfolioFooter />
    </div>
  );
}

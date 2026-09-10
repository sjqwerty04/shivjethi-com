"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NumberFlow from "@number-flow/react";

export interface TimelineMilestone {
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
  tag?: string;
}

interface TimelineProps {
  milestones?: TimelineMilestone[];
  startDate?: string;
  sectionLabel?: string;
  headlineSuffix?: string;
}

// Default x.ai Colossus milestones as extracted from x.ai/colossus
export const COLOSSUS_MILESTONES: TimelineMilestone[] = [
  {
    date: "2024-05-01",
    title: "Rapid construction",
    description: "Construction starts, gear arriving. Floor, piping, and structure stood up. Power plant online.",
  },
  {
    date: "2024-06-01",
    title: "GPUs start arriving",
    description: "First production racks arrive. Datahall 1 power and cooling ready. Two datahalls powered, 50% of GPUs onsite.",
  },
  {
    date: "2024-07-01",
    title: "Bottlenecks and breakthroughs",
    description: "Fiber connections holding us up. Power flux issue discovered and resolved. Megapacks stabilize the power plant.",
  },
  {
    date: "2024-08-01",
    title: "25K GPUs delivered weekly",
    description: "First 25K used for useful workloads. First job ran across all 4 datahalls.",
  },
  {
    date: "2024-09-01",
    title: "Training begins",
    description: "42K-GPU job with elastic training, running across 4 data halls.",
  },
  {
    date: "2025-01-01",
    title: "Grok 3 trained",
    description: "Training finished with 80K+ GPUs. 122 days from groundbreak to training.",
  },
  {
    date: "2025-02-01",
    title: "Full scale",
    description: "Doubled to 200K GPUs.",
  },
];

// Smooth width animator matching x.ai width resize observer
function AutoWidth({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w > 0) setWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      className="inline-flex"
      style={{
        width: width ?? "auto",
        transition: width !== null ? "width 0.5s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
        clipPath: "inset(-10px -10px)",
      }}
    >
      <span ref={containerRef} className="inline-flex whitespace-nowrap">
        {children}
      </span>
    </span>
  );
}

export function ColossusTimeline({
  milestones = COLOSSUS_MILESTONES,
  startDate = "2024-05-01",
  sectionLabel = "Timeline",
  headlineSuffix = "days from groundbreak",
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1);
  const activeMilestone = milestones[activeIndex] || milestones[0];
  const parseLocalDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, (month || 1) - 1, day || 1);
  };
  const startDateTime = parseLocalDate(startDate);

  // Calculate percentage along timeline
  const progressPercent =
    milestones.length > 1 ? (activeIndex / (milestones.length - 1)) * 100 : 100;

  // Calculate day difference
  const currentDays = Math.round(
    (parseLocalDate(activeMilestone.date).getTime() - startDateTime.getTime()) / 864e5
  );

  // Scrubbing handler (matching x.ai client behavior)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (milestones.length - 1));
    const clampedIndex = Math.max(0, Math.min(milestones.length - 1, index));
    setActiveIndex(clampedIndex);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.touches[0].clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (milestones.length - 1));
    const clampedIndex = Math.max(0, Math.min(milestones.length - 1, index));
    setActiveIndex(clampedIndex);
  };

  // Parse UTC or explicit date parts to avoid timezone shifting
  
  const formatDateLabel = (dateStr: string) => {
    return parseLocalDate(dateStr).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const formatActiveDate = (dateStr: string) => {
    return parseLocalDate(dateStr).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const firstDateLabel = milestones.length > 0 ? formatDateLabel(milestones[0].date) : "";
  const lastDateLabel =
    milestones.length > 1 ? formatDateLabel(milestones[milestones.length - 1].date) : "";

  return (
    <section className="relative w-full py-16 sm:py-24 border-t border-white/[0.06]">
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <p className="text-white/40 text-sm font-medium tracking-wide">{sectionLabel}</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl flex items-baseline gap-2">
            <AutoWidth>
              <NumberFlow
                value={currentDays}
                transformTiming={{ duration: 600, easing: "ease-out" }}
                spinTiming={{ duration: 600, easing: "ease-out" }}
                willChange
              />
            </AutoWidth>
            <span className="text-white/90 font-normal text-2xl sm:text-3xl lg:text-4xl">
              {headlineSuffix}
            </span>
          </h2>
        </div>

        {/* Interactive Timeline Bar */}
        <div
          className="relative h-10 cursor-pointer select-none group"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Track background */}
          <div className="bg-white/10 absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full" />

          {/* Active progress fill */}
          <motion.div
            className="bg-white/40 absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full"
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Milestone Dots */}
          {milestones.map((milestone, idx) => {
            const isSelected = idx === activeIndex;
            const dotPosition =
              milestones.length > 1 ? (idx / (milestones.length - 1)) * 100 : 0;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`${milestone.title} (${milestone.date})`}
                className="absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                style={{ left: `${dotPosition}%` }}
              >
                <div
                  className={`bg-white rounded-full transition-all duration-200 ${
                    isSelected ? "size-3 shadow-[0_0_12px_rgba(255,255,255,0.7)]" : "size-[6px] opacity-70 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Start / End Date labels */}
        <div className="text-white/30 mt-4 flex justify-between text-xs font-mono">
          <span>{firstDateLabel}</span>
          <span>{lastDateLabel}</span>
        </div>

        {/* Active Milestone Card (Centered display) */}
        <div className="mx-auto mt-10 h-[140px] max-w-2xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="text-white/40 text-sm font-medium tracking-wide">
                {formatActiveDate(activeMilestone.date)}
              </div>
              <h3 className="mt-3 text-balance text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {activeMilestone.title}
              </h3>
              <p className="text-white/60 mt-3 text-base leading-7 max-w-xl mx-auto">
                {activeMilestone.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

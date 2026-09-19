"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import NumberFlow from "@number-flow/react";

export interface TimelineMilestone {
  date: string;
  headlineValue: number;
  headlineSuffix: string;
  title: string;
  description: string;
  company: string;
  companyAbout: string;
  logoSrc: string;
  logoSrcs?: string[];
  logoAlts?: string[];
  tag?: string;
}

interface TimelineProps {
  milestones: TimelineMilestone[];
  startDate?: string;
  sectionLabel?: string;
  className?: string;
}

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
  milestones,
  startDate,
  sectionLabel = "Timeline",
  className = "",
}: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(milestones.length - 1);
  const activeMilestone = milestones[activeIndex] || milestones[0];

  const parseLocalDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, (month || 1) - 1, day || 1);
  };

  const progressPercent =
    milestones.length > 1 ? (activeIndex / (milestones.length - 1)) * 100 : 100;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (milestones.length - 1));
    setActiveIndex(Math.max(0, Math.min(milestones.length - 1, index)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.touches[0].clientX - rect.left) / rect.width;
    const index = Math.round(ratio * (milestones.length - 1));
    setActiveIndex(Math.max(0, Math.min(milestones.length - 1, index)));
  };

  const MONTHS_SHORT = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const MONTHS_LONG = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const formatDateLabel = (dateStr: string) => {
    const d = parseLocalDate(dateStr);
    return `${MONTHS_SHORT[d.getMonth()]} ${d.getFullYear()}`;
  };

  const formatActiveDate = (dateStr: string) => {
    const d = parseLocalDate(dateStr);
    return `${MONTHS_LONG[d.getMonth()]} ${d.getFullYear()}`;
  };

  const firstDateLabel = milestones[0] ? formatDateLabel(milestones[0].date) : "";
  const lastDateLabel =
    milestones.length > 1
      ? formatDateLabel(milestones[milestones.length - 1].date)
      : "";

  void startDate;

  return (
    <section className={`relative w-full ${className}`}>
      <div className="mx-auto w-full px-4 lg:px-6 xl:max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-white/40 text-sm font-medium tracking-wide">{sectionLabel}</p>
          <h2 className="mt-4 min-h-[4.75rem] sm:min-h-[5.5rem] lg:min-h-[6.25rem] text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <AutoWidth>
              <NumberFlow
                value={activeMilestone.headlineValue}
                transformTiming={{ duration: 600, easing: "ease-out" }}
                spinTiming={{ duration: 600, easing: "ease-out" }}
                willChange
              />
            </AutoWidth>
            <span className="text-white/90 font-normal text-2xl sm:text-3xl lg:text-4xl">
              {activeMilestone.headlineSuffix}
            </span>
          </h2>
        </div>

        <div
          className="relative h-10 cursor-pointer select-none group"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          <div className="bg-white/10 absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full" />
          <motion.div
            className="bg-white/40 absolute left-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full"
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {milestones.map((milestone, idx) => {
            const isSelected = idx === activeIndex;
            const dotPosition =
              milestones.length > 1 ? (idx / (milestones.length - 1)) * 100 : 0;
            return (
              <button
                key={`${milestone.date}-${milestone.title}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`${milestone.title} (${milestone.company})`}
                className="absolute top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center outline-none focus-visible:ring-1 focus-visible:ring-white/50"
                style={{ left: `${dotPosition}%` }}
              >
                <div
                  className={`bg-white rounded-full transition-all duration-200 ${
                    isSelected
                      ? "size-3 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                      : "size-[6px] opacity-70 group-hover:opacity-100"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="text-white/30 mt-4 flex justify-between text-xs font-mono">
          <span>{firstDateLabel}</span>
          <span>{lastDateLabel}</span>
        </div>

        <div className="mx-auto mt-10 h-[22rem] sm:h-[24rem] max-w-2xl overflow-hidden text-center">
          <motion.div
            key={activeMilestone.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex h-full flex-col items-center"
          >
              <div className="flex items-center justify-center gap-3">
                {(activeMilestone.logoSrcs ?? [activeMilestone.logoSrc]).map(
                  (src, i) => (
                    <img
                      key={`${src}-${i}`}
                      src={src}
                      alt={
                        activeMilestone.logoAlts?.[i] ??
                        activeMilestone.company
                      }
                      width={48}
                      height={48}
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                    />
                  ),
                )}
              </div>
              <div className="text-white/40 text-sm font-medium tracking-wide mt-4">
                {formatActiveDate(activeMilestone.date)}
              </div>
              <h3 className="mt-3 text-balance text-2xl font-medium tracking-tight text-white sm:text-3xl">
                {activeMilestone.title}
              </h3>
              <p className="text-white/45 mt-3 text-sm leading-6 max-w-xl mx-auto">
                {activeMilestone.companyAbout}
              </p>
              <p className="text-white/60 mt-3 text-base leading-7 max-w-xl mx-auto">
                {activeMilestone.description}
              </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

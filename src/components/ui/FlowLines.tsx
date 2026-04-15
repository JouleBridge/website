"use client";

import { cn } from "@/lib/cn";
import { motion, MotionValue } from "framer-motion";

const transition = {
  duration: 0,
  ease: "linear" as const,
};

const stageMeta = [
  { label: "Site Signals", sub: "Asset Agent", color: "text-white/70" },
  { label: "Route Intent", sub: "Site Router", color: "text-white/50" },
  { label: "Proof Record", sub: "Proof Chain", color: "text-white/30" },
  { label: "Review Surface", sub: "Cloud Review", color: "text-white/60" },
];

export function FlowLines({
  pathLengths,
  className,
}: {
  pathLengths: MotionValue[];
  className?: string;
}) {
  return (
    <div className={cn("jb-theme-shell relative w-full overflow-hidden p-6", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:140px_140px] opacity-40" />

      <div className="relative z-10 mb-8 flex justify-between gap-3 px-2 md:px-10">
        {stageMeta.map((stage) => (
          <div key={stage.label} className="text-center">
            <div className={`font-mono text-[10px] uppercase tracking-[0.18em] md:text-xs ${stage.color}`}>
              {stage.label}
            </div>
            <div className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-jb-text-muted/70 md:text-[10px]">
              {stage.sub}
            </div>
          </div>
        ))}
      </div>

      <svg width="1440" height="320" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="relative z-10 h-auto w-full" preserveAspectRatio="none">
        <motion.path d="M0 246C160 246 246 245 340 212C406 188 448 140 528 140C592 140 634 186 714 186C808 186 836 144 922 144C1010 144 1048 220 1140 234C1228 247 1321 246 1440 246" stroke="rgba(244,245,247,0.7)" strokeWidth="2.2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLengths[0] }} transition={transition} />
        <motion.path d="M0 170C140 170 232 170 342 166C466 162 512 132 624 132C724 132 770 165 876 165C992 165 1040 128 1148 128C1248 128 1324 169 1440 169" stroke="rgba(210,213,219,0.5)" strokeWidth="2.2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLengths[1] }} transition={transition} />
        <motion.path d="M0 108C156 108 262 108 372 108C478 108 548 106 660 106C770 106 818 118 924 118C1034 118 1116 108 1226 108C1318 108 1386 108 1440 108" stroke="rgba(180,188,199,0.3)" strokeWidth="2.2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLengths[2] }} transition={transition} />
        <motion.path d="M0 62C170 62 254 86 336 110C418 136 470 180 556 180C650 180 708 92 818 92C930 92 980 150 1092 150C1230 150 1318 74 1440 74" stroke="rgba(156,163,173,0.6)" strokeWidth="2.2" fill="none" initial={{ pathLength: 0 }} style={{ pathLength: pathLengths[3] }} transition={transition} />
      </svg>
    </div>
  );
}

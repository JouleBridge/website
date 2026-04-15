"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

interface MetricConfig {
  id: string;
  label: string;
  value: number;
  peak?: number;
  prefix?: string;
  suffix?: string;
  /** how many decimal places to display */
  decimals?: number;
  subLabel: string;
  status: "nominal" | "warn" | "accent";
  sparkValues: number[]; // 16 normalised 0–1 values for the sparkline
}

// ─── Metric definitions ───────────────────────────────────────────────────────

const METRICS: MetricConfig[] = [
  {
    id: "events",
    label: "Events Verified",
    value: 1_284_019,
    prefix: "",
    suffix: "",
    decimals: 0,
    subLabel: "All time | cumulative",
    status: "accent",
    sparkValues: [0.3, 0.4, 0.38, 0.55, 0.62, 0.58, 0.7, 0.75, 0.68, 0.8, 0.85, 0.78, 0.9, 0.88, 0.95, 1],
  },
  {
    id: "latency",
    label: "Proof Latency",
    value: 48,
    suffix: "ms",
    decimals: 0,
    subLabel: "p99 | last 24 h",
    status: "nominal",
    sparkValues: [0.6, 0.55, 0.62, 0.58, 0.5, 0.48, 0.52, 0.45, 0.5, 0.47, 0.42, 0.44, 0.4, 0.38, 0.41, 0.35],
  },
  {
    id: "signature",
    label: "Signature Health",
    value: 99.97,
    suffix: "%",
    decimals: 2,
    subLabel: "Key rotation OK",
    status: "nominal",
    sparkValues: [0.99, 1, 0.99, 1, 1, 0.98, 1, 1, 0.99, 1, 1, 1, 0.99, 1, 1, 1],
  },
  {
    id: "uptime",
    label: "Uptime",
    value: 99.99,
    suffix: "%",
    decimals: 2,
    subLabel: "Rolling 90 days",
    status: "nominal",
    sparkValues: [1, 1, 1, 1, 0.99, 1, 1, 1, 1, 1, 1, 0.99, 1, 1, 1, 1],
  },
];

const ACCENT = "#D06120";
const STATUS_COLOR: Record<MetricConfig["status"], string> = {
  accent: ACCENT,
  nominal: "rgba(255,255,255,0.55)",
  warn: "#b08030",
};

// ─── Sparkline ────────────────────────────────────────────────────────────────

function Sparkline({
  values,
  color,
  width = 80,
  height = 28,
}: {
  values: number[];
  color: string;
  width?: number;
  height?: number;
}) {
  const pad = 2;
  const stepX = (width - pad * 2) / (values.length - 1);

  const points = values.map((v, i) => ({
    x: pad + i * stepX,
    y: pad + (1 - v) * (height - pad * 2),
  }));

  const polyline = points.map((p) => `${p.x},${p.y}`).join(" ");

  // Area fill path
  const area = [
    `M ${points[0].x} ${height}`,
    ...points.map((p) => `L ${p.x} ${p.y}`),
    `L ${points[points.length - 1].x} ${height}`,
    "Z",
  ].join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <defs>
        <linearGradient id={`spark-fill-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.18} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <path
        d={area}
        fill={`url(#spark-fill-${color.replace("#", "")})`}
      />
      <polyline
        points={polyline}
        fill="none"
        stroke={color}
        strokeWidth={1.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Last point dot (square) */}
      <rect
        x={points[points.length - 1].x - 2}
        y={points[points.length - 1].y - 2}
        width={4}
        height={4}
        fill={color}
      />
    </svg>
  );
}

// ─── Animated number ──────────────────────────────────────────────────────────

function AnimatedValue({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  isInView,
  className,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  isInView: boolean;
  className?: string;
}) {
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) {
      motionVal.set(0);
      return;
    }
    const ctrl = animate(motionVal, target, {
      duration: 2.2,
      ease: "easeOut",
    });
    return ctrl.stop;
  }, [isInView, target, motionVal]);

  useEffect(() => {
    return motionVal.on("change", (v) => {
      setDisplay(
        decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()
      );
    });
  }, [motionVal, decimals]);

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// ─── Single metric card ───────────────────────────────────────────────────────

function MetricCard({
  metric,
  isInView,
  index,
}: {
  metric: MetricConfig;
  isInView: boolean;
  index: number;
}) {
  const color = STATUS_COLOR[metric.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ delay: 0.15 + index * 0.12, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative flex flex-col justify-between gap-4 border border-white/10 bg-jb-card p-4",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]",
        metric.status === "accent" && "border-jb-signal/30"
      )}
    >
      {/* Corner square accents */}
      <span
        className="pointer-events-none absolute left-0 top-0 block h-2 w-2 border-l border-t"
        style={{ borderColor: color }}
      />
      <span
        className="pointer-events-none absolute right-0 top-0 block h-2 w-2 border-r border-t"
        style={{ borderColor: color }}
      />
      <span
        className="pointer-events-none absolute bottom-0 left-0 block h-2 w-2 border-b border-l"
        style={{ borderColor: color }}
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 block h-2 w-2 border-b border-r"
        style={{ borderColor: color }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          {metric.label}
        </span>
        {/* Status indicator (square dot) */}
        <span
          className="mt-[2px] block h-2 w-2 shrink-0"
          style={{ background: color }}
          aria-label={metric.status}
        />
      </div>

      {/* Value */}
      <div
        className="font-mono text-2xl font-bold leading-none"
        style={{ color }}
      >
        <AnimatedValue
          target={metric.value}
          prefix={metric.prefix}
          suffix={metric.suffix}
          decimals={metric.decimals}
          isInView={isInView}
        />
      </div>

      {/* Sparkline + sub-label row */}
      <div className="flex items-end justify-between gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/25">
          {metric.subLabel}
        </span>
        <Sparkline values={metric.sparkValues} color={color} />
      </div>
    </motion.div>
  );
}

// ─── Status bar ───────────────────────────────────────────────────────────────

function StatusBar({ isInView }: { isInView: boolean }) {
  // Animated fill bar (percentage probe)
  const barWidth = useMotionValue(0);
  const widthPct = useTransform(barWidth, (v) => `${v}%`);

  useEffect(() => {
    if (!isInView) {
      barWidth.set(0);
      return;
    }
    const ctrl = animate(barWidth, 97.4, { duration: 2.5, delay: 0.6, ease: "easeOut" });
    return ctrl.stop;
  }, [isInView, barWidth]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
      className="mt-4 border border-white/8 bg-jb-card p-4"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
          Verification Throughput
        </span>
        <span className="font-mono text-[10px] text-white/40">97.4%</span>
      </div>
      <div className="relative h-[3px] w-full bg-white/8">
        <motion.div
          className="absolute inset-y-0 left-0 h-full"
          style={{ width: widthPct, background: ACCENT }}
        />
      </div>
      <div className="mt-3 flex items-center gap-4">
        {["Observe", "Prove", "Review"].map((stage, i) => (
          <span key={stage} className="flex items-center gap-1.5">
            <span
              className="block h-2 w-2"
              style={{
                background: i === 1 ? ACCENT : "rgba(255,255,255,0.25)",
              }}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
              {stage}
            </span>
          </span>
        ))}
        <span className="ml-auto font-mono text-[9px] tracking-[0.12em] text-white/20">
          last updated | just now
        </span>
      </div>
    </motion.div>
  );
}

// ─── Header bar ───────────────────────────────────────────────────────────────

function DashboardHeader({ isInView }: { isInView: boolean }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const id = setInterval(() => setTick((t) => (t + 1) % 3), 800);
    return () => clearInterval(id);
  }, [isInView]);

  return (
    <div className="mb-4 flex items-center justify-between border-b border-white/8 pb-3">
      <div className="flex items-center gap-3">
        <span
          className="block h-2 w-2"
          style={{ background: isInView ? ACCENT : "rgba(255,255,255,0.15)" }}
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/60">
          Verification Monitor
        </span>
      </div>
      <div className="flex items-center gap-2">
        {/* Animated "heartbeat" dots */}
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-1.5 w-1.5 transition-colors duration-300"
            style={{
              background:
                isInView && tick === i
                  ? ACCENT
                  : "rgba(255,255,255,0.12)",
            }}
          />
        ))}
        <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
          Live
        </span>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface VerificationMetricsProps {
  className?: string;
}

export function VerificationMetrics({ className }: VerificationMetricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
    >
      {/* Outer border frame */}
      <div className="relative border border-white/10 bg-jb-card p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_64px_rgba(0,0,0,0.35)]">

        {/* Outer corner square dots */}
        <span className="pointer-events-none absolute left-0 top-0 block h-3 w-3 border-l border-t border-white/20" />
        <span className="pointer-events-none absolute right-0 top-0 block h-3 w-3 border-r border-t border-white/20" />
        <span className="pointer-events-none absolute bottom-0 left-0 block h-3 w-3 border-b border-l border-white/20" />
        <span className="pointer-events-none absolute bottom-0 right-0 block h-3 w-3 border-b border-r border-white/20" />

        {/* Subtle dot-grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10">
          <DashboardHeader isInView={isInView} />

          {/* Metric cards grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, i) => (
              <MetricCard
                key={metric.id}
                metric={metric}
                isInView={isInView}
                index={i}
              />
            ))}
          </div>

          {/* Throughput bar */}
          <StatusBar isInView={isInView} />

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/20">
              joulebridge | proof engine
            </span>
            <div className="flex items-center gap-3">
              {["Ed25519", "SHA-256", "ISO 50001"].map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/25"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

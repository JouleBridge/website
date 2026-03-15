"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/cn";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Packet {
  id: number;
  /** 0–1 progress along the full three-stage track */
  progress: number;
  /** which stage lane (0 = top, 1 = mid, 2 = bottom) */
  lane: number;
  opacity: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const STAGES = [
  {
    id: "capture",
    label: "CAPTURE",
    sub: "Raw Telemetry",
    desc: "Edge / File / Webhook",
  },
  {
    id: "prove",
    label: "PROVE",
    sub: "Canonical Proof",
    desc: "SHA-256 + Ed25519",
  },
  {
    id: "govern",
    label: "GOVERN",
    sub: "Audit Ledger",
    desc: "Review Ready",
  },
] as const;

const ACCENT = "#D06120";
const LANE_Y = [68, 108, 148]; // SVG y-coordinates for three packet lanes
const STAGE_X = [60, 340, 620]; // centre-x of each stage node box

// Box half-dimensions
const BOX_W = 100;
const BOX_H = 48;

// ─── Utility: lerp ────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// ─── Packet dot ───────────────────────────────────────────────────────────────

function PacketDot({ x, y, opacity }: { x: number; y: number; opacity: number }) {
  return (
    <rect
      x={x - 3}
      y={y - 3}
      width={6}
      height={6}
      fill={ACCENT}
      opacity={opacity}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

interface DataFlowVisualizationProps {
  className?: string;
}

export function DataFlowVisualization({ className }: DataFlowVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });

  // Animated entrance for stage nodes (staggered)
  const nodeVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.18, duration: 0.5, ease: "easeOut" as const },
    }),
  };

  // Track path entrance progress (0→1) per connector segment
  const seg0 = useMotionValue(0);
  const seg1 = useMotionValue(0);

  useEffect(() => {
    if (!isInView) {
      seg0.set(0);
      seg1.set(0);
      return;
    }
    const a0 = animate(seg0, 1, { duration: 0.9, delay: 0.35, ease: "easeOut" });
    const a1 = animate(seg1, 1, { duration: 0.9, delay: 0.6, ease: "easeOut" });
    return () => {
      a0.stop();
      a1.stop();
    };
  }, [isInView, seg0, seg1]);

  // ── Packet animation ──────────────────────────────────────────────────────

  const [packets, setPackets] = useState<Packet[]>([]);
  const frameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const nextIdRef = useRef(0);
  const spawnTimerRef = useRef(0);

  useEffect(() => {
    if (!isInView) {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      setPackets([]);
      return;
    }

    const SPEED = 0.22; // progress units per second
    const SPAWN_INTERVAL = 0.55; // seconds between spawns

    function tick(time: number) {
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = time;
      spawnTimerRef.current += dt;

      setPackets((prev) => {
        let next = prev
          .map((p) => ({
            ...p,
            progress: p.progress + SPEED * dt,
            opacity:
              p.progress > 0.85
                ? lerp(1, 0, (p.progress - 0.85) / 0.15)
                : p.progress < 0.05
                ? p.progress / 0.05
                : 1,
          }))
          .filter((p) => p.progress < 1);

        if (spawnTimerRef.current >= SPAWN_INTERVAL) {
          spawnTimerRef.current = 0;
          next = [
            ...next,
            {
              id: nextIdRef.current++,
              progress: 0,
              lane: Math.floor(Math.random() * 3),
              opacity: 0,
            },
          ];
        }
        return next;
      });

      frameRef.current = requestAnimationFrame(tick);
    }

    lastTimeRef.current = performance.now();
    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [isInView]);

  // Map packet progress (0–1) to SVG x position along the three-segment track:
  //   0–0.5  → stage 0 centre to stage 1 centre
  //   0.5–1  → stage 1 centre to stage 2 centre
  function packetX(progress: number): number {
    if (progress <= 0.5) {
      return lerp(STAGE_X[0], STAGE_X[1], progress / 0.5);
    }
    return lerp(STAGE_X[1], STAGE_X[2], (progress - 0.5) / 0.5);
  }

  // ── SVG geometry ──────────────────────────────────────────────────────────

  // Connector path from right edge of box[i] to left edge of box[i+1]
  // Track spans the middle of the lane band (y ≈ 108)
  const trackY = 108;
  const connectorPath = (fromIdx: number) => {
    const x0 = STAGE_X[fromIdx] + BOX_W / 2;
    const x1 = STAGE_X[fromIdx + 1] - BOX_W / 2;
    return `M ${x0} ${trackY} L ${x1} ${trackY}`;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden border border-white/10 bg-jb-card",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_16px_48px_rgba(0,0,0,0.3)]",
        className
      )}
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.025) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Corner bracket accents */}
      <span className="pointer-events-none absolute left-0 top-0 block h-3 w-3 border-l border-t border-white/20" />
      <span className="pointer-events-none absolute right-0 top-0 block h-3 w-3 border-r border-t border-white/20" />
      <span className="pointer-events-none absolute bottom-0 left-0 block h-3 w-3 border-b border-l border-white/20" />
      <span className="pointer-events-none absolute bottom-0 right-0 block h-3 w-3 border-b border-r border-white/20" />

      {/* Header row */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/8 px-5 py-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          data flow
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-jb-signal">
          live
        </span>
      </div>

      {/* Main SVG canvas */}
      <div className="relative z-10 px-4 pb-6 pt-4">
        <svg
          viewBox="0 0 720 216"
          width="100%"
          className="overflow-visible"
          aria-label="Data flow: Capture → Prove → Govern"
        >
          {/* ── Connector tracks ── */}
          {/* Background static track lines */}
          <line
            x1={STAGE_X[0] + BOX_W / 2}
            y1={trackY}
            x2={STAGE_X[1] - BOX_W / 2}
            y2={trackY}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />
          <line
            x1={STAGE_X[1] + BOX_W / 2}
            y1={trackY}
            x2={STAGE_X[2] - BOX_W / 2}
            y2={trackY}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={1}
          />

          {/* Animated foreground connector lines (draw on entrance) */}
          <motion.path
            d={connectorPath(0)}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1.5}
            fill="none"
            strokeDasharray="4 4"
            style={{ pathLength: seg0 }}
          />
          <motion.path
            d={connectorPath(1)}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1.5}
            fill="none"
            strokeDasharray="4 4"
            style={{ pathLength: seg1 }}
          />

          {/* Arrow heads */}
          <defs>
            <marker
              id="dfv-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <polygon points="0,0 8,4 0,8" fill="rgba(255,255,255,0.35)" />
            </marker>
          </defs>
          <line
            x1={STAGE_X[0] + BOX_W / 2}
            y1={trackY}
            x2={STAGE_X[1] - BOX_W / 2}
            y2={trackY}
            stroke="transparent"
            strokeWidth={1}
            markerEnd="url(#dfv-arrow)"
          />
          <line
            x1={STAGE_X[1] + BOX_W / 2}
            y1={trackY}
            x2={STAGE_X[2] - BOX_W / 2}
            y2={trackY}
            stroke="transparent"
            strokeWidth={1}
            markerEnd="url(#dfv-arrow)"
          />

          {/* ── Animated packets ── */}
          {packets.map((p) => (
            <PacketDot
              key={p.id}
              x={packetX(p.progress)}
              y={LANE_Y[p.lane]}
              opacity={p.opacity}
            />
          ))}

          {/* ── Stage node boxes ── */}
          {STAGES.map((stage, i) => {
            const cx = STAGE_X[i];
            const cy = trackY;
            const isAccent = i === 1;
            return (
              <motion.g
                key={stage.id}
                custom={i}
                variants={nodeVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {/* Outer glow for accent node */}
                {isAccent && (
                  <rect
                    x={cx - BOX_W / 2 - 4}
                    y={cy - BOX_H / 2 - 4}
                    width={BOX_W + 8}
                    height={BOX_H + 8}
                    fill="none"
                    stroke="rgba(208,97,32,0.18)"
                    strokeWidth={1}
                  />
                )}

                {/* Main box */}
                <rect
                  x={cx - BOX_W / 2}
                  y={cy - BOX_H / 2}
                  width={BOX_W}
                  height={BOX_H}
                  fill={isAccent ? "rgba(208,97,32,0.1)" : "rgba(18,20,22,0.95)"}
                  stroke={isAccent ? ACCENT : "rgba(255,255,255,0.18)"}
                  strokeWidth={isAccent ? 1.5 : 1}
                />

                {/* Corner square dots */}
                {[
                  [cx - BOX_W / 2, cy - BOX_H / 2],
                  [cx + BOX_W / 2 - 4, cy - BOX_H / 2],
                  [cx - BOX_W / 2, cy + BOX_H / 2 - 4],
                  [cx + BOX_W / 2 - 4, cy + BOX_H / 2 - 4],
                ].map(([dx, dy], dotIdx) => (
                  <rect
                    key={dotIdx}
                    x={dx}
                    y={dy}
                    width={4}
                    height={4}
                    fill={isAccent ? ACCENT : "rgba(255,255,255,0.3)"}
                  />
                ))}

                {/* Stage label */}
                <text
                  x={cx}
                  y={cy - 8}
                  textAnchor="middle"
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize={10}
                  fontWeight={700}
                  letterSpacing="0.18em"
                  fill={isAccent ? ACCENT : "#f4f5f7"}
                >
                  {stage.label}
                </text>

                {/* Sub-label */}
                <text
                  x={cx}
                  y={cy + 8}
                  textAnchor="middle"
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize={8}
                  letterSpacing="0.12em"
                  fill={isAccent ? "rgba(208,97,32,0.7)" : "rgba(255,255,255,0.4)"}
                >
                  {stage.sub}
                </text>

                {/* Description below box */}
                <text
                  x={cx}
                  y={cy + BOX_H / 2 + 18}
                  textAnchor="middle"
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize={7.5}
                  letterSpacing="0.1em"
                  fill="rgba(255,255,255,0.25)"
                >
                  {stage.desc}
                </text>

                {/* Stage index pill */}
                <rect
                  x={cx - 8}
                  y={cy - BOX_H / 2 - 16}
                  width={16}
                  height={12}
                  fill={isAccent ? ACCENT : "rgba(255,255,255,0.07)"}
                />
                <text
                  x={cx}
                  y={cy - BOX_H / 2 - 7}
                  textAnchor="middle"
                  fontFamily="'IBM Plex Mono', monospace"
                  fontSize={7}
                  fontWeight={700}
                  fill={isAccent ? "#fff" : "rgba(255,255,255,0.5)"}
                >
                  {String(i + 1).padStart(2, "0")}
                </text>
              </motion.g>
            );
          })}

          {/* ── Bottom status bar ── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {/* tick mark trail */}
            {Array.from({ length: 18 }).map((_, i) => (
              <rect
                key={i}
                x={60 + i * 34}
                y={196}
                width={2}
                height={i % 3 === 0 ? 7 : 4}
                fill="rgba(255,255,255,0.12)"
              />
            ))}
            {/* active marker */}
            <rect x={60 + 8 * 34} y={193} width={2} height={10} fill={ACCENT} />
          </motion.g>
        </svg>
      </div>

      {/* Footer row */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/8 px-5 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
          joulebridge proof pipeline
        </span>
        <span className="font-mono text-[9px] tracking-[0.15em] text-white/25">
          v2
        </span>
      </div>
    </div>
  );
}

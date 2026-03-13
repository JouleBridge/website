"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TerminalLine {
  text: string;
  type: "command" | "output" | "success" | "info" | "error";
  delay: number;
}

const script: TerminalLine[] = [
  { text: "$ bridge-kernel init --adapter webhook --site demo-site", type: "command", delay: 0 },
  { text: "  created signing identity [site-gw-01]", type: "success", delay: 560 },
  { text: "  wrote config: ./bridge-kernel.toml", type: "success", delay: 220 },
  { text: "  opened ledger: ./data/ledger.db", type: "success", delay: 220 },
  { text: "", type: "output", delay: 360 },
  { text: "$ bridge-kernel start", type: "command", delay: 440 },
  { text: "  runtime ready on localhost:8787", type: "info", delay: 620 },
  { text: "  ingesting telemetry stream", type: "info", delay: 260 },
  { text: "  proof engine online [ed25519]", type: "info", delay: 220 },
  { text: "", type: "output", delay: 420 },
  { text: "  event #1  power_kw=47.2  voltage_v=231.4", type: "output", delay: 340 },
  { text: "  proof digest=8af3c2...  status=accepted", type: "success", delay: 220 },
  { text: "  policy DER-04 passed  ledger append #1", type: "success", delay: 220 },
  { text: "", type: "output", delay: 520 },
  { text: "  event #2  power_kw=512.7  voltage_v=229.1", type: "output", delay: 340 },
  { text: "  proof digest=f1d2e3...  status=quarantined", type: "error", delay: 220 },
  { text: "  policy DER-04 failed  operator review required", type: "error", delay: 260 },
  { text: "", type: "output", delay: 520 },
  { text: "$ bridge-kernel ledger stats", type: "command", delay: 420 },
  { text: "  verified=1  quarantined=1  sync=idle", type: "info", delay: 220 },
  { text: "  uptime=4.2s  queue_depth=0", type: "info", delay: 220 },
];

const colorMap: Record<TerminalLine["type"], string> = {
  command: "text-white",
  output: "text-jb-white/50",
  success: "text-[#fbbf24]",
  info: "text-[#f59e0b]",
  error: "text-[#f97316]",
};

export function DemoTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    let lineIndex = 0;
    const showNext = () => {
      if (lineIndex >= script.length) return;
      lineIndex++;
      setVisibleLines(lineIndex);
      if (lineIndex < script.length) {
        setTimeout(showNext, script[lineIndex].delay);
      }
    };
    setTimeout(showNext, 420);
  }, [isInView]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(16,18,20,0.98),rgba(9,10,11,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_32px_90px_rgba(0,0,0,0.36)]"
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-4 py-3">
        <div className="h-2.5 w-2.5 bg-white/20" />
        <div className="h-2.5 w-2.5 bg-white/12" />
        <div className="h-2.5 w-2.5 bg-white/8" />
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-jb-text-muted">bridge-kernel runtime</span>
      </div>

      <div
        ref={scrollContainerRef}
        className="h-[360px] overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(210,213,219,0.05),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] p-4 font-mono text-xs leading-relaxed md:h-[400px] md:p-6 md:text-sm"
      >
        {script.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${colorMap[line.type]} ${line.text === "" ? "h-3" : ""}`}>
            {line.text}
          </div>
        ))}
        {visibleLines < script.length && visibleLines > 0 && (
          <span className="inline-block h-4 w-2 animate-pulse bg-[#f59e0b]" />
        )}
      </div>
    </motion.div>
  );
}

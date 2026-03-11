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
  { text: "  [OK] Generated Ed25519 keypair (key_id: demo-site)", type: "success", delay: 600 },
  { text: "  [OK] Created config at ./bridge-kernel.toml", type: "success", delay: 300 },
  { text: "  [OK] Initialized ledger at ./data/ledger.db", type: "success", delay: 300 },
  { text: "", type: "output", delay: 400 },
  { text: "$ bridge-kernel start", type: "command", delay: 500 },
  { text: "  [INFO] adapter: webhook-drop ready on localhost:8787", type: "info", delay: 800 },
  { text: "  [INFO] ingesting structured telemetry payload", type: "info", delay: 400 },
  { text: "  [INFO] proof: Ed25519 signing active (key v1)", type: "info", delay: 300 },
  { text: "  [INFO] ledger: append-only, WAL enabled", type: "info", delay: 300 },
  { text: "", type: "output", delay: 600 },
  { text: "  -> event #1 | power_kw: 47.2 | voltage_v: 231.4", type: "output", delay: 400 },
  { text: "    hash: 8af3c2b1e9d4f7a2...  sign: OK", type: "success", delay: 250 },
  { text: "    policy [DER-04]: PASSED  -> ledger append #1", type: "success", delay: 250 },
  { text: "", type: "output", delay: 800 },
  { text: "  -> event #2 | power_kw: 48.1 | voltage_v: 230.8", type: "output", delay: 400 },
  { text: "    hash: c4e7f9a2d1b3e8c5...  sign: OK", type: "success", delay: 250 },
  { text: "    policy [DER-04]: PASSED  -> ledger append #2", type: "success", delay: 250 },
  { text: "", type: "output", delay: 800 },
  { text: "  -> event #3 | power_kw: 512.7 | voltage_v: 229.1", type: "output", delay: 400 },
  { text: "    hash: f1d2e3c4b5a6f7e8...  sign: OK", type: "success", delay: 250 },
  { text: "    policy [DER-04]: FAILED (max_power_kw <= 500)", type: "error", delay: 250 },
  { text: "    event quarantined - requires review", type: "error", delay: 300 },
  { text: "", type: "output", delay: 600 },
  { text: "$ bridge-kernel ledger stats", type: "command", delay: 500 },
  { text: "  events: 2 verified, 1 quarantined", type: "info", delay: 400 },
  { text: "  proofs: 3 generated, 3 valid", type: "info", delay: 200 },
  { text: "  peers: 0 synced", type: "info", delay: 200 },
  { text: "  uptime: 4.2s", type: "info", delay: 200 },
];

const colorMap: Record<TerminalLine["type"], string> = {
  command: "text-white",
  output: "text-jb-white/50",
  success: "text-jb-green/80",
  info: "text-jb-accent/70",
  error: "text-jb-red/80",
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
    setTimeout(showNext, 500);
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
      className="border border-jb-mid-gray bg-jb-dark rounded-lg overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-jb-dark-gray bg-jb-card/50">
        <div className="w-2.5 h-2.5 rounded-full bg-jb-red" />
        <div className="w-2.5 h-2.5 rounded-full bg-jb-yellow" />
        <div className="w-2.5 h-2.5 rounded-full bg-jb-green" />
        <span className="ml-auto font-mono text-[10px] text-jb-text-muted">bridge-kernel demo</span>
      </div>

      <div
        ref={scrollContainerRef}
        className="h-[360px] overflow-y-auto p-4 font-mono text-xs leading-relaxed md:h-[400px] md:p-6 md:text-sm"
      >
        {script.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${colorMap[line.type]} ${line.text === "" ? "h-3" : ""}`}>
            {line.text}
          </div>
        ))}
        {visibleLines < script.length && visibleLines > 0 && (
          <span className="inline-block w-2 h-4 bg-jb-accent/60 animate-pulse" />
        )}
      </div>
    </motion.div>
  );
}

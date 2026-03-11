"use client";

import { motion } from "framer-motion";

export function IsometricPipeline() {
  const layers = [
    { label: "INGEST", sublabel: "Protocol Adapters", color: "#6466f1", y: 0 },
    { label: "PROVE", sublabel: "Cryptographic Signing", color: "#ed77f8", y: 1 },
    { label: "GATE", sublabel: "Policy Engine", color: "#ffff61", y: 2 },
    { label: "SETTLE", sublabel: "Immutable Ledger", color: "#85f78f", y: 3 },
  ];

  return (
    <div className="w-full relative max-h-[500px]" style={{ perspective: "1200px" }}>
      <style>{`
        @keyframes iso-line-flow {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes iso-pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        @keyframes iso-dot-travel {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        .iso-flow-line {
          stroke-dasharray: 8 12;
          animation: iso-line-flow 1.2s linear infinite;
        }
        .iso-plane-pulse {
          animation: iso-pulse 3s ease-in-out infinite;
        }
      `}</style>

      <div
        className="relative mx-auto"
        style={{
          width: "100%",
          maxWidth: "600px",
          transformStyle: "preserve-3d",
          transform: "rotateX(55deg) rotateZ(-45deg)",
          transformOrigin: "center center",
        }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative mb-6"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Layer plane */}
            <div
              className="relative w-full aspect-[2/1] border"
              style={{
                borderColor: `${layer.color}40`,
                background: `linear-gradient(135deg, ${layer.color}08, ${layer.color}03)`,
              }}
            >
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(5)].map((_, j) => (
                  <div
                    key={`v-${j}`}
                    className="absolute top-0 bottom-0 w-px"
                    style={{
                      left: `${(j + 1) * 16.66}%`,
                      background: layer.color,
                      opacity: 0.3,
                    }}
                  />
                ))}
                {[...Array(3)].map((_, j) => (
                  <div
                    key={`h-${j}`}
                    className="absolute left-0 right-0 h-px"
                    style={{
                      top: `${(j + 1) * 25}%`,
                      background: layer.color,
                      opacity: 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Active cell highlight */}
              <div
                className="absolute iso-plane-pulse"
                style={{
                  width: "16.66%",
                  height: "25%",
                  left: `${16.66 * (i + 1)}%`,
                  top: `${25 * (i % 3)}%`,
                  background: layer.color,
                  opacity: 0.2,
                }}
              />

              {/* Corner dots */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5" style={{ background: layer.color }} />
              <div className="absolute top-0 right-0 w-1.5 h-1.5" style={{ background: layer.color }} />
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5" style={{ background: layer.color }} />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5" style={{ background: layer.color }} />

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ transform: "rotateZ(45deg) rotateX(-55deg)" }}>
                  <div
                    className="font-mono text-sm font-bold tracking-[0.2em]"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </div>
                  <div className="font-mono text-[10px] text-white/40 mt-1 tracking-wider">
                    {layer.sublabel}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Animated vertical flow lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 600 800"
          preserveAspectRatio="none"
          style={{ transform: "rotateZ(45deg) rotateX(-55deg)" }}
        >
          {[150, 300, 450].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1="0"
              x2={x}
              y2="800"
              stroke={layers[i].color}
              strokeWidth="1.5"
              className="iso-flow-line"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Legend below */}
      <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
        {layers.map((layer) => (
          <div key={layer.label} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} />
            <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
              {layer.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

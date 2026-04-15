"use client";

import { motion } from "framer-motion";

export function ProofCycleDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560" width="100%" height="100%" className="max-h-[350px] mx-auto">
        <defs>
          <marker id="pc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#555" />
          </marker>
          <linearGradient id="pc-fadeL" x1="340" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pc-fadeR" x1="460" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pc-fadeU" x1="0" y1="80" x2="0" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="pc-fadeD" x1="0" y1="200" x2="0" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes pc-dash-flow {
            from { stroke-dashoffset: 20; }
            to { stroke-dashoffset: 0; }
          }
          .pc-flow-path {
            stroke-dasharray: 5 5;
            animation: pc-dash-flow 1.5s linear infinite;
          }
        `}</style>

        {/* Dashed flow arrows with animation */}
        <g fill="none" stroke="#555" strokeWidth="2" markerEnd="url(#pc-arrow)">
          <path className="pc-flow-path" d="M 320 140 L 170 140 Q 150 140 150 160 L 150 330" />
          <path className="pc-flow-path" d="M 230 440 L 320 440" />
          <path className="pc-flow-path" d="M 480 440 L 570 440" />
          <path className="pc-flow-path" d="M 650 330 L 650 160 Q 650 140 630 140 L 480 140" />
        </g>

        {/* CANONICALIZE - top center (accent purple filled) */}
        <rect x="340" y="80" width="120" height="120" fill="#FFFFFF" rx="2" />

        {/* INGEST - bottom left (accent purple filled) */}
        <rect x="90" y="380" width="120" height="120" fill="#FFFFFF" rx="2" />

        {/* SIGN - bottom center (grid pattern = structured data) */}
        <rect x="340" y="380" width="120" height="120" fill="#141418" stroke="#333" strokeWidth="1" rx="2" />
        <line x1="380" y1="380" x2="380" y2="500" stroke="#333" strokeWidth="1" />
        <line x1="420" y1="380" x2="420" y2="500" stroke="#333" strokeWidth="1" />
        <line x1="340" y1="420" x2="460" y2="420" stroke="#333" strokeWidth="1" />
        <line x1="340" y1="460" x2="460" y2="460" stroke="#333" strokeWidth="1" />

        {/* VERIFY - bottom right (circle = complete) */}
        <circle cx="650" cy="440" r="60" fill="#141418" stroke="#333" strokeWidth="1" />
        {/* Checkmark inside verify circle */}
        <path d="M 625 440 L 640 455 L 675 425" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Corner glow lines on CANONICALIZE box */}
        <g strokeWidth="2">
          <line x1="340" y1="80" x2="300" y2="80" stroke="url(#pc-fadeL)" />
          <line x1="340" y1="80" x2="340" y2="40" stroke="url(#pc-fadeU)" />
          <line x1="460" y1="80" x2="500" y2="80" stroke="url(#pc-fadeR)" />
          <line x1="460" y1="80" x2="460" y2="40" stroke="url(#pc-fadeU)" />
          <line x1="340" y1="200" x2="300" y2="200" stroke="url(#pc-fadeL)" />
          <line x1="340" y1="200" x2="340" y2="240" stroke="url(#pc-fadeD)" />
          <line x1="460" y1="200" x2="500" y2="200" stroke="url(#pc-fadeR)" />
          <line x1="460" y1="200" x2="460" y2="240" stroke="url(#pc-fadeD)" />
        </g>

        {/* Corner dots */}
        <g fill="#9ca3af">
          {/* CANONICALIZE corners */}
          <circle cx="340" cy="80" r="3" fill="#FFFFFF" />
          <circle cx="460" cy="80" r="3" fill="#FFFFFF" />
          <circle cx="340" cy="200" r="3" fill="#FFFFFF" />
          <circle cx="460" cy="200" r="3" fill="#FFFFFF" />

          {/* INGEST corners */}
          <rect x="87" y="377" width="6" height="6" />
          <rect x="207" y="377" width="6" height="6" />
          <rect x="87" y="497" width="6" height="6" />
          <rect x="207" y="497" width="6" height="6" />

          {/* SIGN grid dots */}
          <rect x="337" y="377" width="6" height="6" />
          <rect x="377" y="377" width="6" height="6" />
          <rect x="417" y="377" width="6" height="6" />
          <rect x="457" y="377" width="6" height="6" />
          <rect x="337" y="417" width="6" height="6" />
          <rect x="377" y="417" width="6" height="6" />
          <rect x="417" y="417" width="6" height="6" />
          <rect x="457" y="417" width="6" height="6" />
          <rect x="337" y="457" width="6" height="6" />
          <rect x="377" y="457" width="6" height="6" />
          <rect x="417" y="457" width="6" height="6" />
          <rect x="457" y="457" width="6" height="6" />
          <rect x="337" y="497" width="6" height="6" />
          <rect x="377" y="497" width="6" height="6" />
          <rect x="417" y="497" width="6" height="6" />
          <rect x="457" y="497" width="6" height="6" />

          {/* VERIFY circle dots */}
          <rect x="647" y="377" width="6" height="6" />
          <rect x="707" y="437" width="6" height="6" />
          <rect x="647" y="497" width="6" height="6" />
          <rect x="587" y="437" width="6" height="6" />
        </g>

        {/* Labels */}
        <g fontFamily="'Inter', 'IBM Plex Mono', monospace" fontSize="16" fontWeight="600" fill="#e0e0e0" letterSpacing="1" textAnchor="middle">
          <text x="400" y="60" fill="#FFFFFF" fontSize="13" letterSpacing="2">CANONICALIZE</text>
          <text x="150" y="360" fill="#FFFFFF" fontSize="13" letterSpacing="2">OBSERVE</text>
          <text x="400" y="360" fill="#9ca3af" fontSize="13" letterSpacing="2">SIGN</text>
          <text x="650" y="360" fill="#FFFFFF" fontSize="13" letterSpacing="2">VERIFY</text>
        </g>

        {/* Sublabels */}
        <g fontFamily="'Inter', monospace" fontSize="10" fill="#666" textAnchor="middle" letterSpacing="1">
          <text x="400" y="150" fill="rgba(255,255,255,0.7)">SHA-256 Hash</text>
          <text x="150" y="450" fill="rgba(255,255,255,0.7)">Site Signals</text>
          <text x="400" y="450" fill="#9ca3af">Ed25519 + Proof Metadata</text>
          <text x="650" y="520" fill="#FFFFFF">Review Ready</text>
        </g>
      </svg>
    </motion.div>
  );
}

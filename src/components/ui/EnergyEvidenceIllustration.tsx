"use client";

import { motion } from "framer-motion";

type EnergyEvidenceIllustrationProps = {
  compact?: boolean;
};

export function EnergyEvidenceIllustration({
  compact = false,
}: EnergyEvidenceIllustrationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="jb-theme-shell relative overflow-hidden p-4 md:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50" />

      <div className="relative z-10 mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-white/8 pb-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/80">
            JouleBridge Runtime Architecture
          </div>
          <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white md:text-xl">
            Trusted flow from site signal to verified proof chain
          </div>
        </div>
        <div className="border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#b7bbca]">
          Operational baseline
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 560"
        fill="none"
        className="relative z-10 w-full"
        aria-label="JouleBridge runtime architecture"
      >
        <style>{`
          .flowing-line path {
            stroke-dasharray: 4 6;
            animation: flow-dash 2s linear infinite;
          }

          @keyframes flow-dash {
            from { stroke-dashoffset: 10; }
            to { stroke-dashoffset: 0; }
          }

          @keyframes r-src { 0%, 3.2% {stroke:#9ca3ad} 3.3%, 6.6% {stroke:#d2d5db} 6.7%, 100% {stroke:#9ca3ad} }
          @keyframes t-src { 0%, 3.2% {fill:#f4f5f7} 3.3%, 6.6% {fill:#d2d5db} 6.7%, 100% {fill:#f4f5f7} }

          @keyframes r-gw { 0%, 6.5% {stroke:#7c8091} 6.6%, 13.3% {stroke:#d2d5db} 13.4%, 100% {stroke:#7c8091} }
          @keyframes t-gw { 0%, 6.5% {fill:#f4f5f7} 6.6%, 13.3% {fill:#d2d5db} 13.4%, 100% {fill:#f4f5f7} }

          @keyframes t-ing-txt { 0%, 13.2% {fill:#aab0bf} 13.3%, 20% {fill:#f4f5f7} 20.1%, 100% {fill:#aab0bf} }
          @keyframes t-mesh { 0%, 36.5% {fill:#aab0bf} 36.6%, 43.3% {fill:#d2d5db} 43.4%, 100% {fill:#aab0bf} }

          @keyframes r-ing { 0%, 19.9% {stroke:#7c8091} 20%, 30% {stroke:#d2d5db} 30.1%, 59.9% {stroke:#7c8091} 60%, 66.6% {stroke:#d2d5db} 66.7%, 100% {stroke:#7c8091} }
          @keyframes t-ing { 0%, 19.9% {fill:#f4f5f7} 20%, 30% {fill:#d2d5db} 30.1%, 59.9% {fill:#f4f5f7} 60%, 66.6% {fill:#d2d5db} 66.7%, 100% {fill:#f4f5f7} }

          @keyframes r-norm { 0%, 19.9% {stroke:#7c8091} 20%, 22.5% {stroke:#d2d5db} 22.6%, 24.9% {stroke:#7c8091} 25%, 30% {stroke:#d2d5db} 30.1%, 59.9% {stroke:#7c8091} 60%, 66.6% {stroke:#d2d5db} 66.7%, 100% {stroke:#7c8091} }
          @keyframes t-norm { 0%, 19.9% {fill:#f4f5f7} 20%, 22.5% {fill:#d2d5db} 22.6%, 24.9% {fill:#f4f5f7} 25%, 30% {fill:#d2d5db} 30.1%, 59.9% {fill:#f4f5f7} 60%, 66.6% {fill:#d2d5db} 66.7%, 100% {fill:#f4f5f7} }

          @keyframes r-prove { 0%, 19.9% {stroke:#7c8091} 20%, 25% {stroke:#b0b8c4} 25.1%, 29.9% {stroke:#7c8091} 30%, 35% {stroke:#b0b8c4} 35.1%, 59.9% {stroke:#7c8091} 60%, 66.6% {stroke:#b0b8c4} 66.7%, 100% {stroke:#7c8091} }
          @keyframes t-prove { 0%, 19.9% {fill:#f4f5f7} 20%, 25% {fill:#d2d5db} 25.1%, 29.9% {fill:#f4f5f7} 30%, 35% {fill:#d2d5db} 35.1%, 59.9% {fill:#f4f5f7} 60%, 66.6% {fill:#d2d5db} 66.7%, 100% {fill:#f4f5f7} }

          @keyframes r-sync { 0%, 43.2% {stroke:#7c8091} 43.3%, 50% {stroke:#d2d5db} 50.1%, 100% {stroke:#7c8091} }
          @keyframes t-sync { 0%, 43.2% {fill:#f4f5f7} 43.3%, 50% {fill:#d2d5db} 50.1%, 100% {fill:#f4f5f7} }

          @keyframes r-ledger {
            0%, 43.2% {stroke:#9ca3ad; stroke-width:1.2px; fill:#141820}
            43.3%, 48% {stroke:#f4f5f7; stroke-width:3px; fill:#1c2028}
            48.1%, 53.2% {stroke:#9ca3ad; stroke-width:1.2px; fill:#141820}
            53.3%, 63.3% {stroke:#f4f5f7; stroke-width:3px; fill:#1c2028}
            63.4%, 100% {stroke:#9ca3ad; stroke-width:1.2px; fill:#141820}
          }
          @keyframes t-ledger { 0%, 43.2% {fill:#f4f5f7} 43.3%, 48% {fill:#d2d5db} 48.1%, 53.2% {fill:#f4f5f7} 53.3%, 63.3% {fill:#d2d5db} 63.4%, 100% {fill:#f4f5f7} }

          @keyframes r-recon { 0%, 43.2% {stroke:#7c8091} 43.3%, 48% {stroke:#d2d5db} 48.1%, 53.2% {stroke:#7c8091} 53.3%, 63.3% {stroke:#d2d5db} 63.4%, 100% {stroke:#7c8091} }
          @keyframes t-recon { 0%, 43.2% {fill:#f4f5f7} 43.3%, 48% {fill:#d2d5db} 48.1%, 53.2% {fill:#f4f5f7} 53.3%, 63.3% {fill:#d2d5db} 63.4%, 100% {fill:#f4f5f7} }

          @keyframes r-settle { 0%, 43.2% {stroke:#7c8091} 43.3%, 53.3% {stroke:#b0b8c4} 53.4%, 100% {stroke:#7c8091} }
          @keyframes t-settle { 0%, 43.2% {fill:#f4f5f7} 43.3%, 53.3% {fill:#d2d5db} 53.4%, 100% {fill:#f4f5f7} }

          .r-src { animation: r-src 12s infinite; } .t-src { animation: t-src 12s infinite; }
          .r-gw { animation: r-gw 12s infinite; } .t-gw { animation: t-gw 12s infinite; }
          .r-ing { animation: r-ing 12s infinite; } .t-ing { animation: t-ing 12s infinite; }
          .r-norm { animation: r-norm 12s infinite; } .t-norm { animation: t-norm 12s infinite; }
          .r-prove { animation: r-prove 12s infinite; } .t-prove { animation: t-prove 12s infinite; }
          .r-sync { animation: r-sync 12s infinite; } .t-sync { animation: t-sync 12s infinite; }
          .r-ledger { animation: r-ledger 12s infinite; } .t-ledger { animation: t-ledger 12s infinite; }
          .r-recon { animation: r-recon 12s infinite; } .t-recon { animation: t-recon 12s infinite; }
          .r-settle { animation: r-settle 12s infinite; } .t-settle { animation: t-settle 12s infinite; }
          .t-ing-txt { animation: t-ing-txt 12s infinite; } .t-mesh { animation: t-mesh 12s infinite; }
        `}</style>

        <defs>
          <marker id="a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10z" fill="#7c8091" />
          </marker>
          <filter id="gB" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.14">
          <line x1="0" y1="0" x2="280" y2="560" stroke="#d2d5db" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="400" y1="0" x2="680" y2="560" stroke="#9ca3ad" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="5.5s" repeatCount="indefinite" />
          </line>
        </g>

        <rect x="50" y="20" width="900" height="210" stroke="#6d7385" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        <rect x="50" y="240" width="900" height="140" fill="#d2d5db" fillOpacity=".08" />
        <rect x="50" y="390" width="900" height="140" fill="#9ca3ad" fillOpacity=".06" />

        <g className="flowing-line" stroke="#7c8091" strokeWidth="1.2" markerEnd="url(#a)">
          <path d="M180,196 V300" /> <path d="M250,196 V300" /> <path d="M320,196 V300" />
          <path d="M750,300 V196" /> <path d="M250,114 V145" />
          <path d="M350,325 H395" /> <path d="M600,325 H645" />
          <path d="M650,485 H605" /> <path d="M400,485 H355" />
          <path d="M240,350 V455" /> <path d="M260,460 V355" />
          <path d="M490,350 V395 M490,430 V455" /> <path d="M510,460 V430 M510,395 V355" />
          <path d="M740,350 V455" /> <path d="M760,460 V355" />
          <path d="M500,196 V245 M500,280 V300" />
        </g>

        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0; 0.066; 0.067; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M250,114 V145" keyPoints="0;1;1" keyTimes="0; 0.066; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M180,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M250,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M320,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M500,196 V245 M500,280 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#d2d5db" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.199; 0.200; 0.250; 0.251; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M350,325 H395" keyPoints="0;0;1;1" keyTimes="0; 0.200; 0.250; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#ef4444" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.249; 0.250; 0.300; 0.301; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M600,325 H645" keyPoints="0;0;1;1" keyTimes="0; 0.250; 0.300; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#9ca3ad" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M240,350 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#9ca3ad" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M490,350 V395 M490,430 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#9ca3ad" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M740,350 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#f4f5f7" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M750,300 V196" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#ef4444" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.432; 0.433; 0.483; 0.484; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M650,485 H605" keyPoints="0;0;1;1" keyTimes="0; 0.433; 0.483; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#ef4444" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.482; 0.483; 0.533; 0.534; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M400,485 H355" keyPoints="0;0;1;1" keyTimes="0; 0.483; 0.533; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#f4f5f7" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M260,460 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#f4f5f7" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M510,460 V430 M510,395 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#f4f5f7" filter="url(#gB)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M760,460 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>

        <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" fontWeight="600">
          <rect x="145" y="248" width="70" height="32" fill="#141820" />
          <text className="t-ing-txt" x="180" y="260" textAnchor="middle">OCPP</text>
          <text className="t-ing-txt" x="180" y="274" textAnchor="middle">ADAPTER</text>

          <rect x="215" y="248" width="70" height="32" fill="#141820" />
          <text className="t-ing-txt" x="250" y="260" textAnchor="middle">MODBUS</text>
          <text className="t-ing-txt" x="250" y="274" textAnchor="middle">ADAPTER</text>

          <rect x="285" y="248" width="70" height="32" fill="#141820" />
          <text className="t-ing-txt" x="320" y="260" textAnchor="middle">REST API</text>
          <text className="t-ing-txt" x="320" y="274" textAnchor="middle">ADAPTER</text>

          <rect x="710" y="248" width="80" height="32" fill="#141820" />
          <text className="t-mesh" x="750" y="260" textAnchor="middle">POLICY, HINTS,</text>
          <text className="t-mesh" x="750" y="274" textAnchor="middle">PROOF SYNC</text>
        </g>

        <text x="500" y="45" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="16" fontWeight="700" letterSpacing="2" fill="#e8ebf3">
          EXISTING SITE SIGNALS
        </text>
        <text x="500" y="265" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#f4f5f7">
          JOULEBRIDGE PIPELINE
        </text>
        <text x="500" y="415" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#9ca3ad">
          PROOF + REVIEW
        </text>

        <g fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
          <rect className="r-src" x="158" y="60" width="200" height="46" fill="#141820" stroke="#9ca3ad" strokeWidth="0.8" />
          <rect className="r-src" x="154" y="64" width="200" height="46" fill="#141820" stroke="#9ca3ad" strokeWidth="0.8" />
          <rect className="r-src" x="150" y="68" width="200" height="46" fill="#141820" strokeWidth="1.5" />
          <text className="t-src" x="250" y="96" textAnchor="middle" fontSize="15">SITE ASSETS</text>

          <rect className="r-gw" x="150" y="150" width="200" height="46" fill="#11141a" strokeWidth="1.2" />
          <text className="t-gw" x="250" y="178" textAnchor="middle" fontSize="15">ASSET AGENT</text>

          <rect className="r-gw" x="400" y="150" width="200" height="46" fill="#11141a" strokeWidth="1.2" />
          <text className="t-gw" x="500" y="178" textAnchor="middle" fontSize="15">SITE ROUTER</text>

          <rect className="r-sync" x="650" y="150" width="200" height="46" fill="#11141a" strokeWidth="1.2" />
          <text className="t-sync" x="750" y="178" textAnchor="middle" fontSize="15">CLOUD SYNC</text>

          <rect className="r-ing" x="150" y="300" width="200" height="50" fill="#11141a" strokeWidth="1.2" />
          <text className="t-ing" x="250" y="330" textAnchor="middle" fontSize="16">OBSERVE</text>

          <rect className="r-norm" x="400" y="300" width="200" height="50" fill="#11141a" strokeWidth="1.2" />
          <text className="t-norm" x="500" y="330" textAnchor="middle" fontSize="16">ROUTE</text>

          <rect className="r-prove" x="650" y="300" width="200" height="50" fill="#11141a" strokeWidth="1.2" />
          <text className="t-prove" x="750" y="330" textAnchor="middle" fontSize="16">PROVE</text>

          <rect className="r-ledger" x="150" y="460" width="200" height="50" fill="#141820" />
          <text className="t-ledger" x="250" y="490" textAnchor="middle" fontSize="16">RECORD</text>

          <rect className="r-recon" x="400" y="460" width="200" height="50" fill="#11141a" strokeWidth="1.2" />
          <text className="t-recon" x="500" y="490" textAnchor="middle" fontSize="16">REVIEW</text>

          <rect className="r-settle" x="650" y="460" width="200" height="50" fill="#11141a" strokeWidth="1.2" />
          <text className="t-settle" x="750" y="490" textAnchor="middle" fontSize="16">EXPORT</text>
        </g>

        {compact && (
          <rect x="50" y="20" width="900" height="510" fill="transparent" stroke="rgba(255,255,255,0.14)" />
        )}
      </svg>
    </motion.div>
  );
}

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
      className="relative overflow-hidden border border-[#d8e0e8] bg-white p-4 shadow-[0_24px_80px_rgba(15,23,35,0.08)] md:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,20,25,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,20,25,0.025)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="relative z-10 mb-5 flex flex-wrap items-start justify-between gap-4 border-b border-[#e7edf3] pb-4">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#148d86]">
            Bridge Kernel Architecture
          </div>
          <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-[#101419] md:text-xl">
            Trusted flow from energy source to settlement surface
          </div>
        </div>
        <div className="border border-[#d8e0e8] bg-[#f5f8fb] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#556273]">
          Operational baseline
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-60 -60 1120 680"
        fill="none"
        className="relative z-10 w-full"
        aria-label="Bridge Kernel architecture"
      >
        <style>{`
          @keyframes flow-dash {
            from { stroke-dashoffset: 10; }
            to { stroke-dashoffset: 0; }
          }
          .flowing-line path {
            stroke-dasharray: 4 6;
            animation: flow-dash 2s linear infinite;
          }
          @keyframes circuit-flow {
            from { stroke-dashoffset: 12; }
            to { stroke-dashoffset: 0; }
          }
          .circuit path {
            stroke: #22c55e;
            stroke-width: 1.5;
            fill: none;
            stroke-dasharray: 6 6;
            animation: circuit-flow 0.6s linear infinite;
          }
          @keyframes r-src { 0%, 3.2% {stroke:#d81b90} 3.3%, 6.6% {stroke:#5a54ef} 6.7%, 100% {stroke:#d81b90} }
          @keyframes t-src { 0%, 3.2% {fill:#272727} 3.3%, 6.6% {fill:#5a54ef} 6.7%, 100% {fill:#272727} }
          @keyframes r-gw { 0%, 6.5% {stroke:#555} 6.6%, 13.3% {stroke:#5a54ef} 13.4%, 100% {stroke:#555} }
          @keyframes t-gw { 0%, 6.5% {fill:#272727} 6.6%, 13.3% {fill:#5a54ef} 13.4%, 100% {fill:#272727} }
          @keyframes t-ing-txt { 0%, 13.2% {fill:#666} 13.3%, 20% {fill:#5a54ef} 20.1%, 100% {fill:#666} }
          @keyframes t-mesh { 0%, 36.5% {fill:#666} 36.6%, 43.3% {fill:#5a54ef} 43.4%, 100% {fill:#666} }
          @keyframes r-ing { 0%, 19.9% {stroke:#555} 20%, 30% {stroke:#5a54ef} 30.1%, 59.9% {stroke:#555} 60%, 66.6% {stroke:#5a54ef} 66.7%, 100% {stroke:#555} }
          @keyframes t-ing { 0%, 19.9% {fill:#272727} 20%, 30% {fill:#5a54ef} 30.1%, 59.9% {fill:#272727} 60%, 66.6% {fill:#5a54ef} 66.7%, 100% {fill:#272727} }
          @keyframes r-norm { 0%, 19.9% {stroke:#555} 20%, 22.5% {stroke:#5a54ef} 22.6%, 24.9% {stroke:#555} 25%, 30% {stroke:#5a54ef} 30.1%, 59.9% {stroke:#555} 60%, 66.6% {stroke:#5a54ef} 66.7%, 100% {stroke:#555} }
          @keyframes t-norm { 0%, 19.9% {fill:#272727} 20%, 22.5% {fill:#5a54ef} 22.6%, 24.9% {fill:#272727} 25%, 30% {fill:#5a54ef} 30.1%, 59.9% {fill:#272727} 60%, 66.6% {fill:#5a54ef} 66.7%, 100% {fill:#272727} }
          @keyframes r-prove { 0%, 19.9% {stroke:#555} 20%, 25% {stroke:#5a54ef} 25.1%, 29.9% {stroke:#555} 30%, 35% {stroke:#5a54ef} 35.1%, 59.9% {stroke:#555} 60%, 66.6% {stroke:#5a54ef} 66.7%, 100% {stroke:#555} }
          @keyframes t-prove { 0%, 19.9% {fill:#272727} 20%, 25% {fill:#5a54ef} 25.1%, 29.9% {fill:#272727} 30%, 35% {fill:#5a54ef} 35.1%, 59.9% {fill:#272727} 60%, 66.6% {fill:#5a54ef} 66.7%, 100% {fill:#272727} }
          @keyframes r-sync { 0%, 43.2% {stroke:#555} 43.3%, 50% {stroke:#5a54ef} 50.1%, 100% {stroke:#555} }
          @keyframes t-sync { 0%, 43.2% {fill:#272727} 43.3%, 50% {fill:#5a54ef} 50.1%, 100% {fill:#272727} }
          @keyframes r-ledger {
            0%, 43.2% {stroke:#d81b90; stroke-width:1.2px; fill:#fce4ec}
            43.3%, 48% {stroke:#ff007f; stroke-width:3px; fill:#fbcfe8}
            48.1%, 53.2% {stroke:#d81b90; stroke-width:1.2px; fill:#fce4ec}
            53.3%, 63.3% {stroke:#ff007f; stroke-width:3px; fill:#fbcfe8}
            63.4%, 100% {stroke:#d81b90; stroke-width:1.2px; fill:#fce4ec}
          }
          @keyframes t-ledger { 0%, 43.2% {fill:#272727} 43.3%, 48% {fill:#ff007f} 48.1%, 53.2% {fill:#272727} 53.3%, 63.3% {fill:#ff007f} 63.4%, 100% {fill:#272727} }
          @keyframes r-recon { 0%, 43.2% {stroke:#555} 43.3%, 48% {stroke:#d81b90} 48.1%, 53.2% {stroke:#555} 53.3%, 63.3% {stroke:#d81b90} 63.4%, 100% {stroke:#555} }
          @keyframes t-recon { 0%, 43.2% {fill:#272727} 43.3%, 48% {fill:#d81b90} 48.1%, 53.2% {fill:#272727} 53.3%, 63.3% {fill:#d81b90} 63.4%, 100% {fill:#272727} }
          @keyframes r-settle { 0%, 43.2% {stroke:#555} 43.3%, 53.3% {stroke:#d81b90} 53.4%, 100% {stroke:#555} }
          @keyframes t-settle { 0%, 43.2% {fill:#272727} 43.3%, 53.3% {fill:#d81b90} 53.4%, 100% {fill:#272727} }
          .r-src { animation: r-src 12s infinite; }
          .t-src { animation: t-src 12s infinite; }
          .r-gw { animation: r-gw 12s infinite; }
          .t-gw { animation: t-gw 12s infinite; }
          .r-ing { animation: r-ing 12s infinite; }
          .t-ing { animation: t-ing 12s infinite; }
          .r-norm { animation: r-norm 12s infinite; }
          .t-norm { animation: t-norm 12s infinite; }
          .r-prove { animation: r-prove 12s infinite; }
          .t-prove { animation: t-prove 12s infinite; }
          .r-sync { animation: r-sync 12s infinite; }
          .t-sync { animation: t-sync 12s infinite; }
          .r-ledger { animation: r-ledger 12s infinite; }
          .t-ledger { animation: t-ledger 12s infinite; }
          .r-recon { animation: r-recon 12s infinite; }
          .t-recon { animation: t-recon 12s infinite; }
          .r-settle { animation: r-settle 12s infinite; }
          .t-settle { animation: t-settle 12s infinite; }
          .t-ing-txt { animation: t-ing-txt 12s infinite; }
          .t-mesh { animation: t-mesh 12s infinite; }
        `}</style>

        <defs>
          <marker id="a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10z" fill="#555" />
          </marker>
          <filter id="gB" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.08">
          <line x1="-60" y1="-60" x2="350" y2="680" stroke="#22c55e" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="-60" x2="750" y2="680" stroke="#22c55e" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="5.5s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="-60" x2="1100" y2="680" stroke="#22c55e" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="4.8s" repeatCount="indefinite" />
          </line>
        </g>

        <g className="circuit">
          <path d="M -40, 50 L -15, 50 Q 0,50 0,65 L 0, 68 Q 0,83 15,83 L 150, 83" />
          <path d="M 150, 173 L 5, 173 Q -10,173 -10,188 L -10, 310 Q -10,325 5,325 L 150, 325" />
          <path d="M 150, 485 L -5, 485 Q -20,485 -20,500 L -20, 620" />
          <path d="M 1040, 50 L 1035, 50 Q 1020,50 1020,65 L 1020, 158 Q 1020,173 1005,173 L 850, 173" />
          <path d="M 850, 325 L 995, 325 Q 1010,325 1010,340 L 1010, 470 Q 1010,485 995,485 L 850, 485" />
          <path d="M 850, 500 L 1015, 500 Q 1030,500 1030,485 L 1030, -40" />
          <path d="M 500, -40 V 150" />
          <path d="M 750, -40 V 150" />
          <path d="M 250, 530 V 620" />
          <path d="M 500, 530 V 620" />
          <path d="M 750, 530 V 620" />
        </g>

        <rect x="49" y="19" width="902" height="512" fill="#ffffff" />
        <rect x="50" y="20" width="900" height="210" stroke="#888" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        <rect x="50" y="240" width="900" height="140" fill="#c9c5ff" fillOpacity=".35" />
        <rect x="50" y="390" width="900" height="140" fill="#c9c5ff" fillOpacity=".2" />

        <g className="flowing-line" stroke="#888" strokeWidth="1.2" markerEnd="url(#a)">
          <path d="M180,196 V300" />
          <path d="M250,196 V300" />
          <path d="M320,196 V300" />
          <path d="M750,300 V196" />
          <path d="M250,114 V145" />
          <path d="M350,325 H395" />
          <path d="M600,325 H645" />
          <path d="M650,485 H605" />
          <path d="M400,485 H355" />
          <path d="M240,350 V455" />
          <path d="M260,460 V355" />
          <path d="M490,350 V395 M490,430 V455" />
          <path d="M510,460 V430 M510,395 V355" />
          <path d="M740,350 V455" />
          <path d="M760,460 V355" />
          <path d="M500,196 V245 M500,280 V300" />
        </g>

        <AnimatedCircle fill="#5a54ef" path="M250,114 V145" opacityValues="1;1;0;0" keyTimes="0; 0.066; 0.067; 1" />
        <AnimatedCircle fill="#5a54ef" path="M180,196 V300" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" />
        <AnimatedCircle fill="#5a54ef" path="M250,196 V300" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" />
        <AnimatedCircle fill="#5a54ef" path="M320,196 V300" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" />
        <AnimatedCircle fill="#5a54ef" path="M500,196 V245 M500,280 V300" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" />
        <AnimatedCircle fill="#5a54ef" path="M350,325 H395" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.199; 0.200; 0.250; 0.251; 1" />
        <AnimatedCircle fill="#5a54ef" path="M600,325 H645" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.249; 0.250; 0.300; 0.301; 1" />
        <AnimatedCircle fill="#d81b90" path="M240,350 V455" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" />
        <AnimatedCircle fill="#d81b90" path="M490,350 V395 M490,430 V455" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" />
        <AnimatedCircle fill="#d81b90" path="M740,350 V455" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" />
        <AnimatedCircle fill="#5a54ef" path="M750,300 V196" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" />
        <AnimatedCircle fill="#d81b90" path="M650,485 H605" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.432; 0.433; 0.483; 0.484; 1" />
        <AnimatedCircle fill="#d81b90" path="M400,485 H355" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.482; 0.483; 0.533; 0.534; 1" />
        <AnimatedCircle fill="#5a54ef" path="M260,460 V355" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" />
        <AnimatedCircle fill="#5a54ef" path="M510,460 V430 M510,395 V355" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" />
        <AnimatedCircle fill="#5a54ef" path="M760,460 V355" opacityValues="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" />

        <g fontFamily="'IBM Plex Mono', monospace" fontSize="11" fontWeight="600">
          <rect x="145" y="248" width="70" height="32" fill="#eceaff" />
          <text className="t-ing-txt" x="180" y="260" textAnchor="middle">OCPP</text>
          <text className="t-ing-txt" x="180" y="274" textAnchor="middle">INGESTION</text>

          <rect x="215" y="248" width="70" height="32" fill="#eceaff" />
          <text className="t-ing-txt" x="250" y="260" textAnchor="middle">MODBUS</text>
          <text className="t-ing-txt" x="250" y="274" textAnchor="middle">INGESTION</text>

          <rect x="285" y="248" width="70" height="32" fill="#eceaff" />
          <text className="t-ing-txt" x="320" y="260" textAnchor="middle">REST API</text>
          <text className="t-ing-txt" x="320" y="274" textAnchor="middle">INGESTION</text>

          <rect x="710" y="248" width="80" height="32" fill="#eceaff" />
          <text className="t-mesh" x="750" y="260" textAnchor="middle">MESH, P2P,</text>
          <text className="t-mesh" x="750" y="274" textAnchor="middle">WEBHOOKS</text>
        </g>

        <text x="500" y="45" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="16" fontWeight="700" letterSpacing="2" fill="#2a2a2a">
          EXISTING ENERGY INFRASTRUCTURE
        </text>
        <text x="500" y="265" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#5a54ef">
          BRIDGE KERNEL PIPELINE
        </text>
        <text x="500" y="415" textAnchor="middle" fontFamily="'IBM Plex Mono', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#5a54ef">
          BRIDGE KERNEL SETTLEMENT
        </text>

        <g fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
          <rect className="r-src" x="158" y="60" width="200" height="46" fill="#fce4ec" stroke="#d81b90" strokeWidth="0.8" />
          <rect className="r-src" x="154" y="64" width="200" height="46" fill="#fce4ec" stroke="#d81b90" strokeWidth="0.8" />
          <rect className="r-src" x="150" y="68" width="200" height="46" fill="#fce4ec" strokeWidth="1.5" />
          <text className="t-src" x="250" y="96" textAnchor="middle" fontSize="15">ENERGY SOURCE(S)</text>

          <rect className="r-gw" x="150" y="150" width="200" height="46" fill="#fff" strokeWidth="1.2" />
          <text className="t-gw" x="250" y="178" textAnchor="middle" fontSize="15">ADAPTER GATEWAY</text>

          <rect className="r-gw" x="400" y="150" width="200" height="46" fill="#fff" strokeWidth="1.2" />
          <text className="t-gw" x="500" y="178" textAnchor="middle" fontSize="15">POLICY ENGINE</text>

          <rect className="r-sync" x="650" y="150" width="200" height="46" fill="#fff" strokeWidth="1.2" />
          <text className="t-sync" x="750" y="178" textAnchor="middle" fontSize="15">PEER SYNC</text>

          <rect className="r-ing" x="150" y="300" width="200" height="50" fill="#fff" strokeWidth="1.2" />
          <text className="t-ing" x="250" y="330" textAnchor="middle" fontSize="16">INGEST</text>

          <rect className="r-norm" x="400" y="300" width="200" height="50" fill="#fff" strokeWidth="1.2" />
          <text className="t-norm" x="500" y="330" textAnchor="middle" fontSize="16">NORMALIZE</text>

          <rect className="r-prove" x="650" y="300" width="200" height="50" fill="#fff" strokeWidth="1.2" />
          <text className="t-prove" x="750" y="330" textAnchor="middle" fontSize="16">PROVE</text>

          <rect className="r-ledger" x="150" y="460" width="200" height="50" fill="#fce4ec" />
          <text className="t-ledger" x="250" y="490" textAnchor="middle" fontSize="16">LEDGER</text>

          <rect className="r-recon" x="400" y="460" width="200" height="50" fill="#fff" strokeWidth="1.2" />
          <text className="t-recon" x="500" y="490" textAnchor="middle" fontSize="16">RECONCILE</text>

          <rect className="r-settle" x="650" y="460" width="200" height="50" fill="#fff" strokeWidth="1.2" />
          <text className="t-settle" x="750" y="490" textAnchor="middle" fontSize="16">SETTLE</text>
        </g>

        {!compact && (
          <g>
            <rect x="120" y="556" width="220" height="42" fill="#f8fbfe" stroke="#dbe3ea" />
            <rect x="390" y="556" width="220" height="42" fill="#f8fbfe" stroke="#dbe3ea" />
            <rect x="660" y="556" width="220" height="42" fill="#f8fbfe" stroke="#dbe3ea" />
            <text x="134" y="572" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="600" letterSpacing="1.3" fill="#556273">EDGE CAPTURE</text>
            <text x="404" y="572" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="600" letterSpacing="1.3" fill="#556273">PROOF PIPELINE</text>
            <text x="674" y="572" fontFamily="'IBM Plex Mono', monospace" fontSize="10" fontWeight="600" letterSpacing="1.3" fill="#556273">ENTERPRISE USE</text>
            <text x="134" y="585" fontSize="11" fill="#5c6978">
              <tspan x="134" dy="0">Adapters bring telemetry into</tspan>
              <tspan x="134" dy="12">a deterministic path.</tspan>
            </text>
            <text x="404" y="585" fontSize="11" fill="#5c6978">
              <tspan x="404" dy="0">Policy, proof, and sync prepare</tspan>
              <tspan x="404" dy="12">trusted records.</tspan>
            </text>
            <text x="674" y="585" fontSize="11" fill="#5c6978">
              <tspan x="674" dy="0">Ledger-backed outputs support</tspan>
              <tspan x="674" dy="12">audit and settlement.</tspan>
            </text>
          </g>
        )}
      </svg>
    </motion.div>
  );
}

function AnimatedCircle({
  fill,
  path,
  opacityValues,
  keyTimes,
}: {
  fill: string;
  path: string;
  opacityValues: string;
  keyTimes: string;
}) {
  return (
    <circle r="4" fill={fill} filter="url(#gB)" opacity="0">
      <animate attributeName="opacity" values={opacityValues} keyTimes={keyTimes} dur="12s" repeatCount="indefinite" />
      <animateMotion path={path} dur="12s" repeatCount="indefinite" />
    </circle>
  );
}

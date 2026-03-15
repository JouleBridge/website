"use client";

export function ArchitectureFlowSVG() {
  return (
    <div className="w-full overflow-x-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-60 -60 1120 680"
        fill="none"
        className="w-full h-auto min-w-[600px] max-h-[420px] mx-auto"
      >
        <defs>
          <marker
            id="arch-arrow"
            viewBox="0 0 10 10"
            refX="8.5"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10z" fill="#555" />
          </marker>
          <filter id="arch-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.5" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <style>{`
          @keyframes arch-flow-dash {
            from { stroke-dashoffset: 10; }
            to { stroke-dashoffset: 0; }
          }
          .arch-flowing-line path {
            stroke-dasharray: 4 6;
            animation: arch-flow-dash 2s linear infinite;
          }
          @keyframes arch-circuit-flow {
            from { stroke-dashoffset: 12; }
            to { stroke-dashoffset: 0; }
          }
          .arch-circuit path {
            stroke: #FFFFFF;
            stroke-width: 1.5;
            fill: none;
            stroke-dasharray: 6 6;
            animation: arch-circuit-flow 0.6s linear infinite;
          }

          /* 12s synchronized color pulses - JouleBridge tokens */
          @keyframes ar-src { 0%, 3.2% {stroke:#D06120} 3.3%, 6.6% {stroke:#FFFFFF} 6.7%, 100% {stroke:#D06120} }
          @keyframes at-src { 0%, 3.2% {fill:#a0a0a0} 3.3%, 6.6% {fill:#FFFFFF} 6.7%, 100% {fill:#a0a0a0} }

          @keyframes ar-gw { 0%, 6.5% {stroke:#444} 6.6%, 13.3% {stroke:#FFFFFF} 13.4%, 100% {stroke:#444} }
          @keyframes at-gw { 0%, 6.5% {fill:#a0a0a0} 6.6%, 13.3% {fill:#FFFFFF} 13.4%, 100% {fill:#a0a0a0} }

          @keyframes at-ing-txt { 0%, 13.2% {fill:#666} 13.3%, 20% {fill:#FFFFFF} 20.1%, 100% {fill:#666} }
          @keyframes at-mesh { 0%, 36.5% {fill:#666} 36.6%, 43.3% {fill:#FFFFFF} 43.4%, 100% {fill:#666} }

          @keyframes ar-ing { 0%, 19.9% {stroke:#444} 20%, 30% {stroke:#FFFFFF} 30.1%, 59.9% {stroke:#444} 60%, 66.6% {stroke:#FFFFFF} 66.7%, 100% {stroke:#444} }
          @keyframes at-ing { 0%, 19.9% {fill:#a0a0a0} 20%, 30% {fill:#FFFFFF} 30.1%, 59.9% {fill:#a0a0a0} 60%, 66.6% {fill:#FFFFFF} 66.7%, 100% {fill:#a0a0a0} }

          @keyframes ar-norm { 0%, 19.9% {stroke:#444} 20%, 22.5% {stroke:#FFFFFF} 22.6%, 24.9% {stroke:#444} 25%, 30% {stroke:#FFFFFF} 30.1%, 59.9% {stroke:#444} 60%, 66.6% {stroke:#FFFFFF} 66.7%, 100% {stroke:#444} }
          @keyframes at-norm { 0%, 19.9% {fill:#a0a0a0} 20%, 22.5% {fill:#FFFFFF} 22.6%, 24.9% {fill:#a0a0a0} 25%, 30% {fill:#FFFFFF} 30.1%, 59.9% {fill:#a0a0a0} 60%, 66.6% {fill:#FFFFFF} 66.7%, 100% {fill:#a0a0a0} }

          @keyframes ar-prove { 0%, 19.9% {stroke:#444} 20%, 25% {stroke:#FFFFFF} 25.1%, 29.9% {stroke:#444} 30%, 35% {stroke:#FFFFFF} 35.1%, 59.9% {stroke:#444} 60%, 66.6% {stroke:#FFFFFF} 66.7%, 100% {stroke:#444} }
          @keyframes at-prove { 0%, 19.9% {fill:#a0a0a0} 20%, 25% {fill:#FFFFFF} 25.1%, 29.9% {fill:#a0a0a0} 30%, 35% {fill:#FFFFFF} 35.1%, 59.9% {fill:#a0a0a0} 60%, 66.6% {fill:#FFFFFF} 66.7%, 100% {fill:#a0a0a0} }

          @keyframes ar-sync { 0%, 43.2% {stroke:#444} 43.3%, 50% {stroke:#FFFFFF} 50.1%, 100% {stroke:#444} }
          @keyframes at-sync { 0%, 43.2% {fill:#a0a0a0} 43.3%, 50% {fill:#FFFFFF} 50.1%, 100% {fill:#a0a0a0} }

          @keyframes ar-ledger {
            0%, 43.2% {stroke:#D06120; stroke-width:1.2px; fill:#111}
            43.3%, 48% {stroke:#FFFFFF; stroke-width:3px; fill:#1a1a1a}
            48.1%, 53.2% {stroke:#D06120; stroke-width:1.2px; fill:#111}
            53.3%, 63.3% {stroke:#FFFFFF; stroke-width:3px; fill:#1a1a1a}
            63.4%, 100% {stroke:#D06120; stroke-width:1.2px; fill:#111}
          }
          @keyframes at-ledger { 0%, 43.2% {fill:#a0a0a0} 43.3%, 48% {fill:#FFFFFF} 48.1%, 53.2% {fill:#a0a0a0} 53.3%, 63.3% {fill:#FFFFFF} 63.4%, 100% {fill:#a0a0a0} }

          @keyframes ar-recon { 0%, 43.2% {stroke:#444} 43.3%, 48% {stroke:#D06120} 48.1%, 53.2% {stroke:#444} 53.3%, 63.3% {stroke:#D06120} 63.4%, 100% {stroke:#444} }
          @keyframes at-recon { 0%, 43.2% {fill:#a0a0a0} 43.3%, 48% {fill:#D06120} 48.1%, 53.2% {fill:#a0a0a0} 53.3%, 63.3% {fill:#D06120} 63.4%, 100% {fill:#a0a0a0} }

          @keyframes ar-settle { 0%, 43.2% {stroke:#444} 43.3%, 53.3% {stroke:#FFFFFF} 53.4%, 100% {stroke:#444} }
          @keyframes at-settle { 0%, 43.2% {fill:#a0a0a0} 43.3%, 53.3% {fill:#FFFFFF} 53.4%, 100% {fill:#a0a0a0} }

          .ar-src { animation: ar-src 12s infinite; } .at-src { animation: at-src 12s infinite; }
          .ar-gw { animation: ar-gw 12s infinite; } .at-gw { animation: at-gw 12s infinite; }
          .ar-ing { animation: ar-ing 12s infinite; } .at-ing { animation: at-ing 12s infinite; }
          .ar-norm { animation: ar-norm 12s infinite; } .at-norm { animation: at-norm 12s infinite; }
          .ar-prove { animation: ar-prove 12s infinite; } .at-prove { animation: at-prove 12s infinite; }
          .ar-sync { animation: ar-sync 12s infinite; } .at-sync { animation: at-sync 12s infinite; }
          .ar-ledger { animation: ar-ledger 12s infinite; } .at-ledger { animation: at-ledger 12s infinite; }
          .ar-recon { animation: ar-recon 12s infinite; } .at-recon { animation: at-recon 12s infinite; }
          .ar-settle { animation: ar-settle 12s infinite; } .at-settle { animation: at-settle 12s infinite; }
          .at-ing-txt { animation: at-ing-txt 12s infinite; } .at-mesh { animation: at-mesh 12s infinite; }
        `}</style>

        {/* Background diagonal lines */}
        <g opacity="0.06">
          <line x1="-60" y1="-60" x2="350" y2="680" stroke="#FFFFFF" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="300" y1="-60" x2="750" y2="680" stroke="#FFFFFF" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="5.5s" repeatCount="indefinite" />
          </line>
          <line x1="700" y1="-60" x2="1100" y2="680" stroke="#FFFFFF" strokeWidth=".6" strokeDasharray="3 14">
            <animate attributeName="stroke-dashoffset" from="0" to="-34" dur="4.8s" repeatCount="indefinite" />
          </line>
        </g>

        {/* Circuit paths */}
        <g className="arch-circuit">
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

        {/* Main background */}
        <rect x="49" y="19" width="902" height="512" fill="#0a0a0b" />

        {/* Layer backgrounds */}
        <rect x="50" y="20" width="900" height="210" stroke="#333" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
        <rect x="50" y="240" width="900" height="140" fill="#FFFFFF" fillOpacity=".08" />
        <rect x="50" y="390" width="900" height="140" fill="#FFFFFF" fillOpacity=".04" />

        {/* Flowing connection lines */}
        <g className="arch-flowing-line" stroke="#555" strokeWidth="1.2" markerEnd="url(#arch-arrow)">
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

        {/* Animated traveling dots */}
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0; 0.066; 0.067; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M250,114 V145" keyPoints="0;1;1" keyTimes="0; 0.066; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M180,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M250,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M320,196 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.065; 0.066; 0.200; 0.201; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M500,196 V245 M500,280 V300" keyPoints="0;0;1;1" keyTimes="0; 0.066; 0.200; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.199; 0.200; 0.250; 0.251; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M350,325 H395" keyPoints="0;0;1;1" keyTimes="0; 0.200; 0.250; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.249; 0.250; 0.300; 0.301; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M600,325 H645" keyPoints="0;0;1;1" keyTimes="0; 0.250; 0.300; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        {/* Settlement dots - pink/green */}
        <circle r="4" fill="#D06120" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M240,350 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#D06120" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M490,350 V395 M490,430 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#D06120" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M740,350 V455" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.299; 0.300; 0.433; 0.434; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M750,300 V196" keyPoints="0;0;1;1" keyTimes="0; 0.300; 0.433; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.432; 0.433; 0.483; 0.484; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M650,485 H605" keyPoints="0;0;1;1" keyTimes="0; 0.433; 0.483; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.482; 0.483; 0.533; 0.534; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M400,485 H355" keyPoints="0;0;1;1" keyTimes="0; 0.483; 0.533; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        {/* Return flow dots */}
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M260,460 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M510,460 V430 M510,395 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="#FFFFFF" filter="url(#arch-glow)" opacity="0">
          <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0; 0.532; 0.533; 0.666; 0.667; 1" dur="12s" repeatCount="indefinite" />
          <animateMotion path="M760,460 V355" keyPoints="0;0;1;1" keyTimes="0; 0.533; 0.666; 1" calcMode="linear" dur="12s" repeatCount="indefinite" />
        </circle>

        {/* Ingestion labels */}
        <g fontFamily="'Inter', monospace" fontSize="11" fontWeight="600">
          <rect x="145" y="248" width="70" height="32" fill="#1a1a2e" />
          <text className="at-ing-txt" x="180" y="260" textAnchor="middle">WEBHOOK</text>
          <text className="at-ing-txt" x="180" y="274" textAnchor="middle">ADAPTER</text>

          <rect x="215" y="248" width="70" height="32" fill="#1a1a2e" />
          <text className="at-ing-txt" x="250" y="260" textAnchor="middle">FILE</text>
          <text className="at-ing-txt" x="250" y="274" textAnchor="middle">INGEST</text>

          <rect x="285" y="248" width="70" height="32" fill="#1a1a2e" />
          <text className="at-ing-txt" x="320" y="260" textAnchor="middle">SCANNER</text>
          <text className="at-ing-txt" x="320" y="274" textAnchor="middle">INPUT</text>

          <rect x="710" y="248" width="80" height="32" fill="#1a1a2e" />
          <text className="at-mesh" x="750" y="260" textAnchor="middle">P2P MESH</text>
          <text className="at-mesh" x="750" y="274" textAnchor="middle">SYNC</text>
        </g>

        {/* Section titles */}
        <text x="500" y="45" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="16" fontWeight="700" letterSpacing="2" fill="#9ca3af">DEVICE TELEMETRY</text>
        <text x="500" y="265" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#FFFFFF">BRIDGE KERNEL PIPELINE</text>
        <text x="500" y="415" textAnchor="middle" fontFamily="'Inter', monospace" fontSize="14" fontWeight="700" letterSpacing="2.5" fill="#FFFFFF">BRIDGE KERNEL SETTLEMENT</text>

        {/* Boxes */}
        <g fontFamily="'Inter', monospace" fontWeight="600">
          {/* Energy Sources - stacked */}
          <rect className="ar-src" x="158" y="60" width="200" height="46" fill="#111" stroke="#D06120" strokeWidth="0.8" />
          <rect className="ar-src" x="154" y="64" width="200" height="46" fill="#111" stroke="#D06120" strokeWidth="0.8" />
          <rect className="ar-src" x="150" y="68" width="200" height="46" fill="#111" strokeWidth="1.5" />
          <text className="at-src" x="250" y="96" textAnchor="middle" fontSize="15">ENERGY DEVICES</text>

          {/* Top row */}
          <rect className="ar-gw" x="150" y="150" width="200" height="46" fill="#111" strokeWidth="1.2" />
          <text className="at-gw" x="250" y="178" textAnchor="middle" fontSize="15">PROTOCOL ADAPTERS</text>

          <rect className="ar-gw" x="400" y="150" width="200" height="46" fill="#111" strokeWidth="1.2" />
          <text className="at-gw" x="500" y="178" textAnchor="middle" fontSize="15">POLICY ENGINE</text>

          <rect className="ar-sync" x="650" y="150" width="200" height="46" fill="#111" strokeWidth="1.2" />
          <text className="at-sync" x="750" y="178" textAnchor="middle" fontSize="15">PEER SYNC</text>

          {/* Pipeline row */}
          <rect className="ar-ing" x="150" y="300" width="200" height="50" fill="#111" strokeWidth="1.2" />
          <text className="at-ing" x="250" y="330" textAnchor="middle" fontSize="16">INGEST</text>

          <rect className="ar-norm" x="400" y="300" width="200" height="50" fill="#111" strokeWidth="1.2" />
          <text className="at-norm" x="500" y="330" textAnchor="middle" fontSize="16">CANONICALIZE</text>

          <rect className="ar-prove" x="650" y="300" width="200" height="50" fill="#111" strokeWidth="1.2" />
          <text className="at-prove" x="750" y="330" textAnchor="middle" fontSize="16">PROVE</text>

          {/* Settlement row */}
          <rect className="ar-ledger" x="150" y="460" width="200" height="50" fill="#111" />
          <text className="at-ledger" x="250" y="490" textAnchor="middle" fontSize="16">LEDGER</text>

          <rect className="ar-recon" x="400" y="460" width="200" height="50" fill="#111" strokeWidth="1.2" />
          <text className="at-recon" x="500" y="490" textAnchor="middle" fontSize="16">RECONCILE</text>

          <rect className="ar-settle" x="650" y="460" width="200" height="50" fill="#111" strokeWidth="1.2" />
          <text className="at-settle" x="750" y="490" textAnchor="middle" fontSize="16">SETTLE</text>
        </g>
      </svg>
    </div>
  );
}

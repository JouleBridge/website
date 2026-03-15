import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "JouleBridge - Verified Data Infrastructure for Energy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#070809",
          fontFamily: "'Chakra Petch', 'Arial Black', system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
        />

        {/* Signal dot top-left */}
        <div style={{ position: "absolute", top: "28px", left: "28px", width: "8px", height: "8px", backgroundColor: "#D06120", boxShadow: "0 0 12px rgba(208,97,32,0.5)" }} />

        {/* Corner dots */}
        <div style={{ position: "absolute", top: "28px", right: "28px", width: "4px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)" }} />
        <div style={{ position: "absolute", bottom: "28px", left: "28px", width: "4px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)" }} />
        <div style={{ position: "absolute", bottom: "28px", right: "28px", width: "4px", height: "4px", backgroundColor: "rgba(255,255,255,0.3)" }} />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: "32px",
          }}
        >
          <span style={{ color: "#D06120" }}>Joule</span>
          <span style={{ color: "#FFFFFF" }}>Bridge</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.08,
            marginBottom: "24px",
            maxWidth: "900px",
            letterSpacing: "-1px",
          }}
        >
          Verified data infrastructure for energy
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Bridge Kernel signs every meter reading at the edge and delivers audit-ready evidence before disputes start.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div style={{ width: "6px", height: "6px", backgroundColor: "#D06120", boxShadow: "0 0 8px rgba(208,97,32,0.4)" }} />
          <div
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Pilot Program Open
          </div>
          <div style={{ width: "1px", height: "14px", backgroundColor: "rgba(255,255,255,0.15)" }} />
          <div
            style={{
              fontSize: "12px",
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.1em",
            }}
          >
            joulebridge.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

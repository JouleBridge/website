import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "JouleBridge - The Settlement Layer for Energy";
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
          backgroundColor: "#0a0a0b",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6466f1, #85f78f, #6466f1)",
          }}
        />

        {/* Corner dots */}
        <div style={{ position: "absolute", top: "24px", left: "24px", width: "4px", height: "4px", backgroundColor: "#6466f1", borderRadius: "1px" }} />
        <div style={{ position: "absolute", top: "24px", right: "24px", width: "4px", height: "4px", backgroundColor: "#6466f1", borderRadius: "1px" }} />
        <div style={{ position: "absolute", bottom: "24px", left: "24px", width: "4px", height: "4px", backgroundColor: "#6466f1", borderRadius: "1px" }} />
        <div style={{ position: "absolute", bottom: "24px", right: "24px", width: "4px", height: "4px", backgroundColor: "#6466f1", borderRadius: "1px" }} />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6466f1",
            marginBottom: "24px",
            fontFamily: "monospace",
          }}
        >
          JouleBridge
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "#fafafa",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          The settlement layer for energy
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#9ca3af",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Cryptographically signed, settlement-ready evidence for every energy transaction.
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#85f78f",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Bridge Kernel 2.0 Live
          </div>
          <div style={{ width: "1px", height: "16px", backgroundColor: "#323233" }} />
          <div
            style={{
              fontSize: "13px",
              fontFamily: "monospace",
              color: "#9ca3af",
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

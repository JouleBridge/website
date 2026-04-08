"use client";

import Script from "next/script";
import { Copy, Download } from "lucide-react";
import { useMemo, useState } from "react";

type QrFactory = (typeNumber: number, errorCorrectionLevel: string) => {
  addData: (data: string) => void;
  make: () => void;
  createSvgTag: (
    cellSize?: number,
    margin?: number,
    alt?: { text?: string; id?: string | null },
    title?: { text?: string; id?: string | null }
  ) => string;
};

declare global {
  interface Window {
    qrcode?: QrFactory;
  }
}

interface BusinessCardQrProps {
  fallbackUrl: string;
  label: string;
}

export function BusinessCardQr({ fallbackUrl, label }: BusinessCardQrProps) {
  const [resolvedUrl, setResolvedUrl] = useState(fallbackUrl);
  const [svgMarkup, setSvgMarkup] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "done">("idle");

  const handleScriptReady = () => {
    if (typeof window === "undefined" || !window.qrcode) {
      return;
    }

    const nextUrl = `${window.location.origin}${window.location.pathname}`;
    const qr = window.qrcode(0, "M");
    qr.addData(nextUrl);
    qr.make();

    const markup = qr.createSvgTag(
      10,
      2,
      { text: `QR code for ${label}` },
      { text: `${label} QR` }
    );

    setResolvedUrl(nextUrl);
    setSvgMarkup(markup);
  };

  const downloadHref = useMemo(() => {
    if (!svgMarkup) {
      return "";
    }

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgMarkup)}`;
  }, [svgMarkup]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resolvedUrl);
      setCopyState("done");
      window.setTimeout(() => setCopyState("idle"), 1800);
    } catch {
      setCopyState("idle");
    }
  };

  return (
    <>
      <Script
        src="/vendor/qrcode.js"
        strategy="afterInteractive"
        onReady={handleScriptReady}
      />

      <div className="border border-white/10 bg-[#0b0d0f] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
        <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#D06120]">
              Scan To Open
            </p>
            <h2 className="mt-2 font-display text-2xl text-white">Business Card QR</h2>
          </div>
          <div className="flex h-3 w-3 bg-[#D06120] shadow-[0_0_12px_rgba(208,97,32,0.55)]" />
        </div>

        <div className="mt-5 border border-white/8 bg-white p-4">
          {svgMarkup ? (
            <div
              className="aspect-square w-full [&>svg]:h-full [&>svg]:w-full"
              dangerouslySetInnerHTML={{ __html: svgMarkup }}
            />
          ) : (
            <div className="flex aspect-square w-full items-center justify-center bg-[linear-gradient(135deg,#f6f7f8,#dde1e6)] p-6 text-center">
              <div className="space-y-3">
                <div className="mx-auto h-12 w-12 border border-[#D06120] bg-[#111315]" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#111315]">
                  Preparing QR
                </p>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-sm leading-6 text-jb-white/62">
          Use this QR on a business card, proposal footer, or event badge. It opens the same
          branded page with direct WhatsApp, X, LinkedIn, and website links.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={handleCopy}
            className="btn-jb btn-jb-secondary inline-flex min-h-12 items-center justify-center gap-2 border border-white/12 bg-white/4 px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/8"
          >
            <Copy className="h-4 w-4" />
            {copyState === "done" ? "Link Copied" : "Copy Page Link"}
            <span className="btn-corners" aria-hidden="true" />
          </button>

          <a
            href={downloadHref || undefined}
            download="joulebridge-tarun-qr.svg"
            className="btn-jb btn-jb-primary inline-flex min-h-12 items-center justify-center gap-2 border border-[#D06120] bg-[#D06120] px-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(208,97,32,0.24)] transition-colors hover:bg-[#b4551d]"
          >
            <Download className="h-4 w-4" />
            Download QR
            <span className="btn-corners" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-5 border border-white/8 bg-white/[0.03] p-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
            Destination
          </div>
          <p className="mt-2 break-all text-sm text-jb-white/74">{resolvedUrl}</p>
        </div>
      </div>
    </>
  );
}

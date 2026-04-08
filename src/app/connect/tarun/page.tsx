import type { Metadata } from "next";
import {
  ArrowUpRight,
  Globe,
  Linkedin,
  MessageCircleMore,
  QrCode,
} from "lucide-react";
import { BusinessCardQr } from "@/components/connect/BusinessCardQr";
import { Logo } from "@/components/ui/Logo";

const pageUrl = "https://tarun.joulebridge.in";

function XIcon() {
  return (
    <svg viewBox="0 0 18 16" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M14.176 0H16.936L10.906 6.777L18 16H12.446L8.095 10.407L3.117 16H0.355L6.805 8.751L0 0H5.695L9.628 5.113L14.176 0ZM13.207 14.375H14.737L4.864 1.539H3.223L13.207 14.375Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  {
    title: "WhatsApp",
    href: "https://wa.me/918050647585",
    detail: "+91 80506 47585",
    icon: "whatsapp",
    accent: "Direct chat",
  },
  {
    title: "X",
    href: "https://x.com/taruntrilokesh",
    detail: "@taruntrilokesh",
    icon: "x",
    accent: "Updates and threads",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tarunreddy28/",
    detail: "Professional profile",
    icon: "linkedin",
    accent: "Network and company context",
  },
  {
    title: "Website",
    href: "https://www.joulebridge.in/",
    detail: "joulebridge.in",
    icon: "website",
    accent: "Product and company overview",
  },
] as const;

export const metadata: Metadata = {
  title: "Tarun Trilokesh",
  description:
    "Direct business-card page for Tarun Trilokesh at JouleBridge with WhatsApp, X, LinkedIn, website, and a QR surface for sharing.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Tarun Trilokesh | JouleBridge",
    description:
      "Scan once and reach Tarun Trilokesh across WhatsApp, X, LinkedIn, and the JouleBridge website.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tarun Trilokesh | JouleBridge",
    description:
      "Direct business-card page for Tarun Trilokesh with a self-serve QR and business links.",
  },
};

export default function TarunConnectPage() {
  return (
    <main className="relative min-h-screen bg-jb-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,245,247,0.08),transparent_24%),linear-gradient(180deg,#090a0b_0%,#060708_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <section className="grid flex-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_26rem] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex">
              <Logo className="text-3xl" />
            </div>

            <div className="inline-flex items-center gap-3 border border-[#D06120]/35 bg-[#D06120]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#D06120]">
              <span className="h-2 w-2 bg-[#D06120] shadow-[0_0_10px_rgba(208,97,32,0.45)]" />
              Business Card Profile
            </div>

            <div className="max-w-3xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-jb-text-muted">
                JouleBridge
              </p>
              <h1 className="mt-4 font-display text-[clamp(3rem,8vw,5.8rem)] leading-[0.95] tracking-[-0.05em] text-white">
                Tarun <span className="text-[#D06120]">Trilokesh</span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-jb-white/72">
                Verified data infrastructure for energy. This page is built for quick business-card
                scans, direct outreach, and fast access to the core JouleBridge surfaces.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((item) => {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#D06120]/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-[#0d1012] text-[#D06120]">
                        {item.icon === "whatsapp" && <MessageCircleMore className="h-5 w-5" />}
                        {item.icon === "x" && <XIcon />}
                        {item.icon === "linkedin" && <Linkedin className="h-5 w-5" />}
                        {item.icon === "website" && <Globe className="h-5 w-5" />}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-jb-white/38 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>

                    <div className="mt-5">
                      <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-jb-text-muted">
                        {item.accent}
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{item.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-jb-white/62">{item.detail}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="grid gap-4 border border-white/10 bg-[#0a0c0e] p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#D06120]">
                  Best For
                </p>
                <p className="mt-3 text-base leading-7 text-jb-white/70">
                  Conferences, pitch decks, signatures, business cards, and founder outreach where
                  one scan should open every important channel.
                </p>
              </div>
              <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-jb-white/74">
                <QrCode className="h-4 w-4 text-[#D06120]" />
                Ready For Print
              </div>
            </div>
          </div>

          <BusinessCardQr fallbackUrl={pageUrl} label="Tarun Trilokesh at JouleBridge" />
        </section>
      </div>
    </main>
  );
}

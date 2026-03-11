import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-jb-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-jb-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joulebridge.com"),
  title: {
    default: "JouleBridge | Verified Data Infrastructure for Energy",
    template: "%s | JouleBridge",
  },
  description:
    "JouleBridge turns operational energy telemetry into deterministic records, cryptographic proofs, and stronger audit trails for settlement, compliance, and infrastructure operations.",
  keywords: [
    "energy telemetry verification",
    "energy evidence infrastructure",
    "energy settlement",
    "cryptographic proof",
    "bridge kernel",
    "tamper-evident ledger",
    "Ed25519",
    "energy audit trail",
  ],
  authors: [{ name: "JouleBridge" }],
  creator: "JouleBridge",
  openGraph: {
    title: "JouleBridge | Verified Data Infrastructure for Energy",
    description:
      "JouleBridge turns operational energy telemetry into deterministic records, cryptographic proofs, and stronger audit trails for settlement, compliance, and infrastructure operations.",
    type: "website",
    siteName: "JouleBridge",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JouleBridge | Verified Data Infrastructure for Energy",
    description:
      "JouleBridge turns operational energy telemetry into deterministic records, cryptographic proofs, and stronger audit trails for settlement, compliance, and infrastructure operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-sans antialiased">
        <RootProvider>
          <LenisProvider>{children}</LenisProvider>
        </RootProvider>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}

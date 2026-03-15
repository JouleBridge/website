import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Mono, Manrope, Chakra_Petch } from "next/font/google";
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

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  variable: "--font-jb-display",
  weight: ["400", "500", "600", "700"],
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
  icons: {
    icon: "/brand/jb-favicon.svg",
    shortcut: "/brand/jb-favicon.svg",
    apple: "/brand/jb-favicon.svg",
  },
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable} ${chakraPetch.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "JouleBridge",
                url: "https://joulebridge.com",
                description:
                  "Verification infrastructure for energy — turning operational telemetry into deterministic records, cryptographic proofs, and stronger audit trails.",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "JouleBridge",
                url: "https://joulebridge.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://joulebridge.com/docs?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                name: "Bridge Kernel",
                description:
                  "Deterministic verification kernel that transforms raw energy telemetry into cryptographically signed, tamper-evident records for settlement and compliance.",
                brand: {
                  "@type": "Organization",
                  name: "JouleBridge",
                },
              },
            ]),
          }}
        />
      </head>
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

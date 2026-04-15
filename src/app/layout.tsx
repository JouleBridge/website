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
    default: "JouleBridge | The runtime for distributed energy",
    template: "%s | JouleBridge",
  },
  description:
    "JouleBridge helps industrial sites and EV depots coordinate mixed-vendor energy assets on-site, keep control local, and produce audit-ready records for dispatch and review.",
  keywords: [
    "distributed energy runtime",
    "edge ML for energy",
    "mixed-vendor site control",
    "open-access industrial energy software",
    "local-first DERMS",
    "audit-ready energy operations",
    "signed proof records",
    "asset agent",
    "site router",
    "multi-site energy operations",
    "bridge kernel",
    "forecast-aware dispatch",
  ],
  authors: [{ name: "JouleBridge" }],
  creator: "JouleBridge",
  icons: {
    icon: "/brand/jb-favicon.svg",
    shortcut: "/brand/jb-favicon.svg",
    apple: "/brand/jb-favicon.svg",
  },
  openGraph: {
    title: "JouleBridge | The runtime for distributed energy",
    description:
      "Control mixed-vendor energy assets on-site, keep operating when the cloud fails, and produce audit-ready records for every important decision.",
    type: "website",
    siteName: "JouleBridge",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JouleBridge | The runtime for distributed energy",
    description:
      "Control mixed-vendor energy assets on-site, keep operating when the cloud fails, and produce audit-ready records for every important decision.",
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
    <html
      lang="en"
      className={`${manrope.variable} ${plexMono.variable} ${chakraPetch.variable}`}
      suppressHydrationWarning
    >
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
                  "An on-site runtime for distributed energy operations that helps industrial sites and EV depots coordinate mixed-vendor assets, keep control local, and maintain audit-ready records.",
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
                  "An on-site runtime for mixed-vendor energy sites. Bridge Kernel supports local control, on-device forecasting and anomaly detection, and audit-ready records for dispatch and review.",
                brand: {
                  "@type": "Organization",
                  name: "JouleBridge",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
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

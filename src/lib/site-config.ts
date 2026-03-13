export const siteConfig = {
  name: "JouleBridge",
  tagline: "Verified Data Infrastructure for Energy",
  description:
    "JouleBridge turns raw energy and device telemetry into deterministic records, cryptographic proofs, and audit-ready evidence for high-trust energy workflows.",
  docsUrl: "https://docs.joulebridge.com",
  contactEmail: "contact@joulebridge.com",
  contactPhone: "+91 8050647585",
  social: {
    linkedin: "https://www.linkedin.com/company/joulebridge",
    x: "https://x.com/joulebridge",
    youtube: "https://www.youtube.com/@joulebridge",
  },
  nav: {
    main: [
      { label: "Product", href: "/product" },
      { label: "Solutions", href: "/solutions" },
      { label: "Docs", href: "/docs" },
      { label: "Pricing", href: "/pricing" },
      { label: "Company", href: "/company" },
      { label: "Resources", href: "/resources/blog" },
    ],
    solutions: [
      { label: "Energy Settlement", href: "/solutions#energy-settlement" },
      { label: "EV Charging", href: "/solutions#ev-charging" },
      { label: "Grid Audit", href: "/solutions#grid-audit" },
    ],
    company: [
      { label: "About", href: "/company" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Video", href: "/resources/video" },
      { label: "News", href: "/resources/news" },
    ],
  },
  footer: {
    product: [
      { label: "Bridge Kernel", href: "/product/bridge-kernel" },
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: "/docs" },
    ],
    resources: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Videos", href: "/resources/video" },
      { label: "News", href: "/resources/news" },
    ],
    company: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

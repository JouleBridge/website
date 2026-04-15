export const siteConfig = {
  name: "JouleBridge",
  tagline: "On-site runtime for distributed energy operations",
  description:
    "JouleBridge helps industrial sites and EV depots coordinate mixed-vendor energy assets on-site, keep control local, and produce audit-ready records for dispatch and review.",
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
      { label: "Platform", href: "/product" },
      { label: "Applications", href: "/solutions" },
      { label: "Docs", href: "/docs" },
      { label: "Pilot Program", href: "/pricing" },
      { label: "Company", href: "/company" },
      { label: "Resources", href: "/resources/blog" },
    ],
    solutions: [
      { label: "Open-Access Industrial Sites", href: "/solutions#energy-settlement" },
      { label: "EV Fleet Depots", href: "/solutions#ev-charging" },
      { label: "Multi-Site Rollout", href: "/solutions#grid-audit" },
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
      { label: "Platform", href: "/product" },
      { label: "Asset Agent Runtime", href: "/product/bridge-kernel" },
      { label: "Cloud Coordination", href: "/product/cloud" },
      { label: "Hardware", href: "/product/hardware" },
      { label: "Documentation", href: "/docs" },
    ],
    resources: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Papers", href: "/resources/papers" },
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

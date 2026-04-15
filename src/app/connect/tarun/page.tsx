import type { Metadata } from "next";
import { ArrowUpRight, Globe, Mail, Phone } from "lucide-react";
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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 0C0.672 0 0 0.672 0 1.5V16.5C0 17.328 0.672 18 1.5 18H16.5C17.328 18 18 17.328 18 16.5V1.5C18 0.672 17.328 0 16.5 0H1.5ZM5.521 4.003C5.526 4.959 4.811 5.548 3.961 5.544C3.161 5.54 2.464 4.903 2.468 4.004C2.472 3.159 3.14 2.48 4.008 2.5C4.888 2.52 5.526 3.165 5.521 4.003ZM9.28 6.762H6.76V15.322H9.422V15.122C9.422 14.742 9.421 14.362 9.421 13.982C9.42 12.968 9.419 11.953 9.425 10.94C9.426 10.694 9.437 10.438 9.501 10.203C9.738 9.325 10.527 8.759 11.407 8.898C11.973 8.986 12.347 9.314 12.504 9.847C12.601 10.18 12.645 10.539 12.649 10.886C12.661 11.934 12.659 12.982 12.657 14.029C12.657 14.399 12.656 14.769 12.656 15.139V15.32H15.328V15.115C15.328 14.663 15.328 14.211 15.328 13.759C15.327 12.63 15.326 11.5 15.329 10.37C15.331 9.86 15.276 9.356 15.151 8.863C14.964 8.129 14.577 7.521 13.949 7.082C13.503 6.77 13.013 6.569 12.466 6.547C12.404 6.544 12.341 6.541 12.278 6.537C11.998 6.522 11.714 6.507 11.447 6.561C10.682 6.714 10.01 7.064 9.502 7.681C9.443 7.752 9.385 7.824 9.299 7.931L9.28 7.956V6.762ZM2.682 15.324H5.332V6.767H2.682V15.324Z"
        fill="currentColor"
      />
    </svg>
  );
}

const contactLinks = [
  {
    title: "Email",
    href: "mailto:tarun.trilokesh@joulebridge.in",
    detail: "tarun.trilokesh@joulebridge.in",
    icon: "email",
  },
  {
    title: "Phone",
    href: "https://wa.me/918050647585",
    detail: "+91 80506 47585",
    icon: "phone",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/tarunreddy28/",
    detail: "linkedin.com/in/tarunreddy28",
    icon: "linkedin",
  },
  {
    title: "Website",
    href: "https://www.joulebridge.in/",
    detail: "joulebridge.in",
    icon: "website",
  },
  {
    title: "X",
    href: "https://x.com/taruntrilokesh",
    detail: "@taruntrilokesh",
    icon: "x",
  },
] as const;

export const metadata: Metadata = {
  title: "Tarun Trilokesh",
  description:
    "Direct contact card for Tarun Trilokesh at JouleBridge with email, phone, LinkedIn, website, and X.",
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
    description: "Direct contact card for Tarun Trilokesh at JouleBridge.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tarun Trilokesh | JouleBridge",
    description: "Direct contact card for Tarun Trilokesh at JouleBridge.",
  },
};

export default function TarunConnectPage() {
  return (
    <main className="relative h-[100dvh] overflow-hidden bg-jb-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,245,247,0.08),transparent_24%),linear-gradient(180deg,#090a0b_0%,#060708_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />
      <div className="absolute right-[8%] top-0 hidden h-full w-px bg-white/6 lg:block" />

      <div className="relative mx-auto flex h-full w-full max-w-md items-center px-4 py-4 sm:px-5 sm:py-5">
        <section className="flex h-full w-full flex-col justify-between border border-white/10 bg-black/18 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:p-6">
          <div className="space-y-5">
            <div className="inline-flex">
              <Logo className="text-3xl" />
            </div>

            <div>
              <h1 className="mt-3 font-display text-[clamp(2.5rem,9vw,4.8rem)] leading-[0.96] tracking-[-0.05em] text-white">
                Tarun <span className="text-[#D06120]">Trilokesh</span>
              </h1>
              <p className="mt-3 text-sm font-mono uppercase tracking-[0.2em] text-white/72">
                CEO & Founder
              </p>
              <p className="mt-3 text-sm font-mono uppercase tracking-[0.2em] text-jb-white/58">
                Distributed Energy Coordination Runtime
              </p>
            </div>

            <div className="space-y-2.5">
              {contactLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") || item.href.startsWith("tel:") ? undefined : "noreferrer"}
                  className="group flex min-h-16 items-center gap-4 border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#D06120]/40 hover:bg-white/[0.05]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/10 bg-jb-card text-[#D06120]">
                    {item.icon === "email" && <Mail className="h-5 w-5" />}
                    {item.icon === "phone" && <Phone className="h-5 w-5" />}
                    {item.icon === "linkedin" && <LinkedInIcon />}
                    {item.icon === "website" && <Globe className="h-5 w-5" />}
                    {item.icon === "x" && <XIcon />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-jb-text-muted">
                      {item.title}
                    </div>
                    <p className="mt-1 truncate text-sm text-jb-white/78 sm:text-[15px]">
                      {item.detail}
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-jb-white/38 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8 pt-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-jb-text-muted">
              tarun.joulebridge.in
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

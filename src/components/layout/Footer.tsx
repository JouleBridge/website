import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site-config";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { readonly label: string; readonly href: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-jb-white/60 mb-4">
        {title}
      </div>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-jb-white/80 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-jb-white/60 hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-jb-dark border-t border-jb-mid-gray/50 section-lines">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12">
          {/* Logo side */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex">
              <Logo color="white" className="h-8 w-auto" />
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-jb-white/65">
              JouleBridge builds verification-oriented infrastructure for the energy
              workflows where audit quality, reconciliation speed, and operational trust
              matter.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Bridge Kernel", "Evidence Packs", "Pilot Workflows", "Operator Review"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-jb-mid-gray/70 bg-jb-card/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-jb-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <FooterColumn title="Product" links={siteConfig.footer.product} />
            <FooterColumn title="Resources" links={siteConfig.footer.resources} />
            <FooterColumn title="Company" links={siteConfig.footer.company} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-jb-mid-gray/30">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-jb-white/40">
              <span>Copyright &copy;{new Date().getFullYear()} JouleBridge</span>
              {siteConfig.footer.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-jb-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-6">
              <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="w-4 h-4">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 0C0.672 0 0 0.672 0 1.5V16.5C0 17.328 0.672 18 1.5 18H16.5C17.328 18 18 17.328 18 16.5V1.5C18 0.672 17.328 0 16.5 0H1.5ZM5.521 4.003C5.526 4.959 4.811 5.548 3.961 5.544C3.161 5.54 2.464 4.903 2.468 4.004C2.472 3.159 3.14 2.48 4.008 2.5C4.888 2.52 5.526 3.165 5.521 4.003ZM9.28 6.762H6.76V15.322H9.422V15.122C9.422 14.742 9.421 14.362 9.421 13.982C9.42 12.968 9.419 11.953 9.425 10.94C9.426 10.694 9.437 10.438 9.501 10.203C9.738 9.325 10.527 8.759 11.407 8.898C11.973 8.986 12.347 9.314 12.504 9.847C12.601 10.18 12.645 10.539 12.649 10.886C12.661 11.934 12.659 12.982 12.657 14.029C12.657 14.399 12.656 14.769 12.656 15.139V15.32H15.328V15.115C15.328 14.663 15.328 14.211 15.328 13.759C15.327 12.63 15.326 11.5 15.329 10.37C15.331 9.86 15.276 9.356 15.151 8.863C14.964 8.129 14.577 7.521 13.949 7.082C13.503 6.77 13.013 6.569 12.466 6.547C12.404 6.544 12.341 6.541 12.278 6.537C11.998 6.522 11.714 6.507 11.447 6.561C10.682 6.714 10.01 7.064 9.502 7.681C9.443 7.752 9.385 7.824 9.299 7.931L9.28 7.956V6.762ZM2.682 15.324H5.332V6.767H2.682V15.324Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href={siteConfig.social.x} label="X / Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" fill="none" className="w-4 h-4">
                  <path
                    d="M14.176 0H16.936L10.906 6.777L18 16H12.446L8.095 10.407L3.117 16H0.355L6.805 8.751L0 0H5.695L9.628 5.113L14.176 0ZM13.207 14.375H14.737L4.864 1.539H3.223L13.207 14.375Z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
              <SocialIcon href={siteConfig.social.youtube} label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 20" fill="none" className="w-5 h-4">
                  <path
                    d="M27.415 3.123C27.093 1.894 26.144 0.926 24.939 0.597C22.756 0 14 0 14 0C14 0 5.244 0 3.061 0.597C1.856 0.926 0.907 1.894 0.585 3.123C0 5.351 0 10 0 10C0 10 0 14.649 0.585 16.877C0.907 18.106 1.856 19.074 3.061 19.403C5.244 20 14 20 14 20C14 20 22.756 20 24.939 19.403C26.144 19.074 27.093 18.106 27.415 16.877C28 14.649 28 10 28 10C28 10 28 5.351 27.415 3.123Z"
                    fill="currentColor"
                  />
                  <path d="M11.137 14.221L18.455 10L11.137 5.779V14.221Z" fill="var(--color-jb-dark)" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

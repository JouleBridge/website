"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

function DesktopDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { readonly label: string; readonly href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 220);
  };

  return (
    <div
      className="relative -mb-6 pb-6"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={scheduleClose}
    >
      <button
        className={cn(
          "group inline-flex items-center gap-2 border-b border-transparent px-1 py-6 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-200",
          open
            ? "border-white/22 text-white"
            : "text-jb-white/72 hover:border-white/16 hover:text-white"
        )}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        >
          <path
            d="M16.293 9.293L12 13.586L7.707 9.293L6.293 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        className={cn(
          "jb-nav-dropdown absolute left-1/2 top-full z-50 mt-0 w-[320px] -translate-x-1/2 p-2 backdrop-blur-xl transition-all duration-200",
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
      >
        <div className="border border-white/8 bg-white/[0.03] p-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center justify-between gap-4 border-b border-white/6 px-4 py-3 transition-colors last:border-b-0 hover:bg-white/[0.04]"
              onClick={() => setOpen(false)}
            >
              <div className="text-sm font-medium text-white/90">{item.label}</div>
              <div className="text-[11px] uppercase tracking-[0.16em] text-jb-text-muted transition-transform duration-200 group-hover:translate-x-0.5">
                View
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        scrolled ? "jb-nav-shell-scrolled" : "jb-nav-shell"
      )}
    >
      <div className="container mx-auto flex min-h-[68px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:min-h-[76px] lg:gap-6 lg:px-8">
        <Link href="/" className="shrink-0">
          <Logo className="text-2xl" />
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-center gap-8 xl:gap-10">
            <Link href="/product" className="border-b border-transparent px-1 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-jb-white/72 transition-colors hover:border-white/16 hover:text-white">Platform</Link>
            <DesktopDropdown label="Applications" items={siteConfig.nav.solutions} />
            <Link href="/docs" className="border-b border-transparent px-1 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-jb-white/72 transition-colors hover:border-white/16 hover:text-white">Docs</Link>
            <Link href="/pricing" className="border-b border-transparent px-1 py-6 text-[11px] font-medium uppercase tracking-[0.18em] text-jb-white/72 transition-colors hover:border-white/16 hover:text-white">Pilot Program</Link>
            <DesktopDropdown label="Company" items={siteConfig.nav.company} />
            <DesktopDropdown label="Resources" items={siteConfig.nav.resources} />
          </div>
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Button href="/contact" variant="tertiary" className="px-5 text-[11px] tracking-[0.18em]">Scope a Pilot</Button>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <button
            className="jb-icon-button flex h-11 w-11 items-center justify-center transition-colors hover:border-white/22 hover:bg-black/44"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={cn(
                  "block h-[2.5px] w-6 bg-white transition-transform duration-200",
                  mobileOpen && "translate-y-[8px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[2.5px] w-6 bg-white/92 transition-opacity duration-200",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-[2.5px] w-6 bg-white transition-transform duration-200",
                  mobileOpen && "-translate-y-[8px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="jb-mobile-menu max-h-[calc(100svh-68px)] overflow-y-auto px-4 py-5 sm:px-6 lg:hidden"
        >
          <div className="space-y-2">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-jb-white/84 transition-colors hover:bg-white/5"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-5 border border-white/8 bg-white/[0.03] p-3">
            <div className="px-2 pb-2 text-[11px] uppercase tracking-[0.18em] text-jb-text-muted">More links</div>
            {[...siteConfig.nav.solutions, ...siteConfig.nav.company, ...siteConfig.nav.resources].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm text-jb-white/64 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-5">
            <Button href="/contact" variant="primary" className="w-full">Scope a Pilot</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

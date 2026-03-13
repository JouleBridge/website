"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "white" | "tertiary";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-white/10 bg-[linear-gradient(180deg,rgba(226,229,235,0.22),rgba(164,172,183,0.12))] text-white hover:bg-[linear-gradient(180deg,rgba(226,229,235,0.28),rgba(164,172,183,0.16))] btn-jb-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_18px_45px_rgba(0,0,0,0.24)]",
  secondary:
    "bg-transparent text-jb-white border border-white/12 hover:bg-white/[0.04] btn-jb-secondary",
  white:
    "bg-transparent text-white border border-white/18 hover:bg-white/[0.05] btn-jb-secondary",
  tertiary:
    "bg-transparent text-jb-white/84 hover:text-white btn-jb-secondary",
};

export function Button({
  children,
  href,
  variant = "primary",
  external,
  className,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--btn-w", `${rect.width}px`);
    el.style.setProperty("--btn-h", `${rect.height}px`);
  }, []);

  const shared = cn(
    "btn-jb relative inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm tracking-widest uppercase font-semibold transition-all duration-300",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={shared}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <span className="btn-corners" />
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={shared}
      onClick={onClick}
    >
      {children}
      <span className="btn-corners" />
    </button>
  );
}

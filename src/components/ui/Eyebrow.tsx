import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg";
}

export function Eyebrow({ children, className, size = "sm" }: EyebrowProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-mono uppercase tracking-[0.2em]",
        size === "sm" ? "text-xs text-jb-text-muted" : "text-sm font-semibold text-jb-white",
        className
      )}
    >
      <span className="inline-block h-1.5 w-1.5 bg-[#D06120] shadow-[0_0_6px_rgba(208,97,32,0.4)]" />
      {children}
    </div>
  );
}

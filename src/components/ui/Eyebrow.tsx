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
        "font-mono uppercase tracking-[0.2em]",
        size === "sm" ? "text-xs text-jb-text-muted" : "text-sm font-semibold text-jb-white",
        className
      )}
    >
      {children}
    </div>
  );
}

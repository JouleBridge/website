import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center leading-none font-display font-bold tracking-tight text-lg",
        className
      )}
      aria-label="JouleBridge wordmark"
      role="img"
    >
      <span className="text-[#D06120]">Joule</span>
      <span className="text-white">Bridge</span>
    </span>
  );
}

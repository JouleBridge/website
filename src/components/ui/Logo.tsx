import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/cn";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className, color = "currentColor" }: LogoProps) {
  return (
    <span
      className={cn(
        spaceGrotesk.className,
        "inline-flex items-center leading-none uppercase",
        className
      )}
      aria-label="JouleBridge wordmark"
      role="img"
      style={{ color }}
    >
      <span className="text-[0.98rem] font-bold tracking-[0.16em] text-current sm:text-[1.04rem]">
        JouleBridge
      </span>
    </span>
  );
}

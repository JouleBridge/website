import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
  color?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center leading-none",
        className
      )}
      aria-label="JouleBridge wordmark"
      role="img"
    >
      <Image
        src="/brand/joulebridge-wordmark.svg"
        alt="JouleBridge"
        width={256}
        height={32}
        className="h-5 w-auto sm:h-6"
      />
    </span>
  );
}

import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  lines?: boolean;
  linesLight?: boolean;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  lines = true,
  linesLight = false,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 md:py-20",
        lines && "section-lines",
        linesLight && "section-lines-light",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

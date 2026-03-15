"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

interface TextRevealProps {
  text: string;
  highlightWords?: string[];
  className?: string;
}

export function TextReveal({
  text,
  highlightWords = [],
  className,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  const words = text.split(/\s+/).filter(Boolean);
  const highlightSet = new Set(highlightWords.map((w) => w.toLowerCase()));

  return (
    <div ref={containerRef} className={cn("py-16 md:py-20", className)}>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-snug tracking-tight flex flex-wrap max-w-4xl">
        {words.map((word, i) => {
          const isHighlight = highlightSet.has(word.toLowerCase());
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0.12, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.12, y: 8 }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "inline-block mr-[0.3em]",
                isHighlight ? "text-[#D06120]" : "text-white"
              )}
            >
              {word}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}

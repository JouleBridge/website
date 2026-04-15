"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/cn";

interface TypewriterCodeProps {
  lines: string[];
  typingSpeed?: number; // ms per character
  lineDelay?: number; // ms delay between lines
  className?: string;
}

export function TypewriterCode({
  lines,
  typingSpeed = 40,
  lineDelay = 300,
  className,
}: TypewriterCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // completedLines: lines fully typed
  // currentLine: index of line currently being typed
  // currentChars: characters typed so far in currentLine
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentChars, setCurrentChars] = useState(0);
  const started = isInView;
  const done = currentLineIndex >= lines.length;

  useEffect(() => {
    if (!started || done) return;

    const currentLine = lines[currentLineIndex];

    if (currentChars < currentLine.length) {
      const timer = setTimeout(() => {
        setCurrentChars((count) => count + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCompletedLines((previous) => [...previous, currentLine]);
      setCurrentLineIndex((index) => index + 1);
      setCurrentChars(0);
    }, lineDelay);

    return () => clearTimeout(timer);
  }, [started, done, currentLineIndex, currentChars, lines, typingSpeed, lineDelay]);

  const currentLine =
    currentLineIndex < lines.length
      ? lines[currentLineIndex].slice(0, currentChars)
      : null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "jb-theme-shell font-mono text-sm leading-6 p-4 overflow-x-auto",
        className
      )}
    >
      {completedLines.map((line, index) => (
        <div key={index} className="text-white/80 whitespace-pre">
          {line || "\u00A0"}
        </div>
      ))}

      {currentLine !== null && (
        <div className="text-jb-white whitespace-pre flex items-center">
          <span>{currentLine}</span>
          {/* Blinking square cursor; the brand rule is square dots, never circles. */}
          <span
            className="ml-[1px] inline-block h-[1em] w-[0.55em] bg-[#D06120]"
            style={{
              animation: "joulebridge-cursor-blink 1s step-start infinite",
            }}
          />
        </div>
      )}

      {done && (
        <div className="text-jb-white whitespace-pre flex items-center">
          <span
            className="ml-[1px] inline-block h-[1em] w-[0.55em] bg-[#D06120]"
            style={{
              animation: "joulebridge-cursor-blink 1s step-start infinite",
            }}
          />
        </div>
      )}

      {/* Inject the cursor keyframes locally so no Tailwind config is needed. */}
      <style>{`
        @keyframes joulebridge-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

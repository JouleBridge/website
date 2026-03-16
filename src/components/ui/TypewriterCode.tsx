"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/cn";

interface TypewriterCodeProps {
  lines: string[];
  typingSpeed?: number; // ms per character
  lineDelay?: number;   // ms delay between lines
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
      // Type next character
      const timer = setTimeout(() => {
        setCurrentChars((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      // Line complete — move to next after delay
      const timer = setTimeout(() => {
        setCompletedLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((i) => i + 1);
        setCurrentChars(0);
      }, lineDelay);
      return () => clearTimeout(timer);
    }
  }, [started, done, currentLineIndex, currentChars, lines, typingSpeed, lineDelay]);

  const currentLine =
    currentLineIndex < lines.length
      ? lines[currentLineIndex].slice(0, currentChars)
      : null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "font-mono text-sm leading-6 bg-black border border-white/10 p-4 overflow-x-auto",
        className
      )}
    >
      {/* Completed lines */}
      {completedLines.map((line, i) => (
        <div key={i} className="text-white/80 whitespace-pre">
          {line || "\u00A0"}
        </div>
      ))}

      {/* Currently typing line */}
      {currentLine !== null && (
        <div className="text-white whitespace-pre flex items-center">
          <span>{currentLine}</span>
          {/* Blinking square cursor — brand rule: square dots, never circles */}
          <span
            className="inline-block w-[0.55em] h-[1em] bg-[#D06120] ml-[1px]"
            style={{
              animation: "joulebridge-cursor-blink 1s step-start infinite",
            }}
          />
        </div>
      )}

      {/* After all lines typed, show idle cursor on an empty final line */}
      {done && (
        <div className="text-white whitespace-pre flex items-center">
          <span className="inline-block w-[0.55em] h-[1em] bg-[#D06120] ml-[1px]"
            style={{
              animation: "joulebridge-cursor-blink 1s step-start infinite",
            }}
          />
        </div>
      )}

      {/* Cursor blink keyframes — injected as a style tag so no Tailwind config needed */}
      <style>{`
        @keyframes joulebridge-cursor-blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

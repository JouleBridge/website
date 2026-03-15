"use client";

import { useRef, useState, useCallback, MouseEvent } from "react";
import { cn } from "@/lib/cn";

interface ParallaxCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // RGB triple, e.g. "208, 97, 32"
}

const MAX_TILT = 8; // degrees

export function ParallaxCard({
  children,
  className,
  glowColor = "208, 97, 32",
}: ParallaxCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [transform, setTransform] = useState(
    "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glowStyle, setGlowStyle] = useState<React.CSSProperties>({
    opacity: 0,
    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(${glowColor}, 0.15) 0%, transparent 70%)`,
  });

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();

      // Cursor position relative to card center, normalised to [-1, 1]
      const relX = (e.clientX - rect.left) / rect.width;   // [0, 1]
      const relY = (e.clientY - rect.top) / rect.height;   // [0, 1]
      const normX = relX * 2 - 1; // [-1, 1]
      const normY = relY * 2 - 1; // [-1, 1]

      // Tilt: moving cursor right tilts card right (positive rotateY),
      // moving cursor up tilts card back (negative rotateX).
      const rotateY = normX * MAX_TILT;
      const rotateX = -normY * MAX_TILT;

      setTransform(
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
      );

      // Glow follows cursor as a percentage position within the card
      setGlowStyle({
        opacity: 1,
        backgroundImage: `radial-gradient(circle at ${relX * 100}% ${relY * 100}%, rgba(${glowColor}, 0.18) 0%, transparent 65%)`,
        transition: "opacity 0.15s ease",
      });
    },
    [glowColor]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform(
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setGlowStyle((prev) => ({
      ...prev,
      opacity: 0,
      transition: "opacity 0.4s ease",
    }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative overflow-hidden", className)}
      style={{
        transform,
        // Smooth return to flat when cursor leaves; fast response while hovering
        transition: transform.includes("0deg")
          ? "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
          : "transform 0.1s linear",
        willChange: "transform",
        // Enforce sharp corners — brand rule
        borderRadius: 0,
      }}
    >
      {/* Glow overlay — pointer-events:none so it does not interfere with children */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-10"
        style={glowStyle}
      />

      {children}
    </div>
  );
}

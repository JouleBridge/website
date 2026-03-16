"use client";

import { useEffect, useRef, useCallback } from "react";

interface DotGridBackgroundProps {
  className?: string;
  gridSpacing?: number;
  dotColor?: string;
  dotBaseOpacity?: number;
}

export function DotGridBackground({
  className,
  gridSpacing = 35,
  dotColor = "208, 97, 32",
  dotBaseOpacity = 0.22,
}: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      timeRef.current += 0.02;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let x = gridSpacing / 2; x < w; x += gridSpacing) {
        for (let y = gridSpacing / 2; y < h; y += gridSpacing) {
          const dist = Math.hypot(x - mx, y - my);
          const wave = Math.sin(dist * 0.025 - timeRef.current * 2);
          const proximity = Math.max(0, 1 - dist / 380);
          const opacity = dotBaseOpacity + Math.max(0, wave) * proximity * 0.9;
          const size = 1.5 + Math.max(0, wave) * proximity * 2.5;

          ctx.beginPath();
          ctx.rect(x - size / 2, y - size / 2, size, size); // Square dots, not circles
          ctx.fillStyle = `rgba(${dotColor}, ${opacity})`;
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, [gridSpacing, dotColor, dotBaseOpacity, handleMouseMove]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

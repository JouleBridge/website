"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

interface NeuralBackgroundProps {
  className?: string;
  color?: string;
  trailOpacity?: number;
  particleCount?: number;
  speed?: number;
}

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
};

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: 0,
    vy: 0,
    age: 0,
    life: Math.random() * 200 + 100,
  };
}

function resetParticle(particle: Particle, width: number, height: number) {
  particle.x = Math.random() * width;
  particle.y = Math.random() * height;
  particle.vx = 0;
  particle.vy = 0;
  particle.age = 0;
  particle.life = Math.random() * 200 + 100;
}

function updateParticle(
  particle: Particle,
  width: number,
  height: number,
  speed: number,
  mouse: { x: number; y: number },
) {
  const angle =
    (Math.cos(particle.x * 0.005) + Math.sin(particle.y * 0.005)) * Math.PI;

  particle.vx += Math.cos(angle) * 0.2 * speed;
  particle.vy += Math.sin(angle) * 0.2 * speed;

  const dx = mouse.x - particle.x;
  const dy = mouse.y - particle.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const interactionRadius = 150;

  if (distance < interactionRadius) {
    const force = (interactionRadius - distance) / interactionRadius;
    particle.vx -= dx * force * 0.05;
    particle.vy -= dy * force * 0.05;
  }

  particle.x += particle.vx;
  particle.y += particle.vy;
  particle.vx *= 0.95;
  particle.vy *= 0.95;

  particle.age += 1;
  if (particle.age > particle.life) {
    resetParticle(particle, width, height);
  }

  if (particle.x < 0) particle.x = width;
  if (particle.x > width) particle.x = 0;
  if (particle.y < 0) particle.y = height;
  if (particle.y > height) particle.y = 0;
}

function drawParticle(
  particle: Particle,
  context: CanvasRenderingContext2D,
  color: string,
) {
  const alpha = 1 - Math.abs(particle.age / particle.life - 0.5) * 2;
  context.fillStyle = color;
  context.globalAlpha = alpha;
  context.fillRect(particle.x, particle.y, 1.5, 1.5);
}

export default function NeuralBackground({
  className,
  color = "#f59e0b",
  trailOpacity = 0.12,
  particleCount = 520,
  speed = 1,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId = 0;
    const mouse = { x: -1000, y: -1000 };

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      particles = Array.from({ length: particleCount }, () =>
        createParticle(width, height),
      );
    };

    const animate = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);

      for (const particle of particles) {
        updateParticle(particle, width, height, speed, mouse);
        drawParticle(particle, ctx, color);
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleResize = () => init();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color, particleCount, speed, trailOpacity]);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full w-full overflow-hidden bg-black", className)}
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}

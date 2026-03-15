"use client";

import { useEffect, useRef } from "react";

interface ProofChainAnimationProps {
  className?: string;
}

export function ProofChainAnimation({ className }: ProofChainAnimationProps) {
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
    let animationFrameId: number;
    let time = 0;

    const dpr = window.devicePixelRatio || 1;

    const stages = [
      { label: "TELEMETRY", color: "#6b7280", x: 0.08 },
      { label: "CANONICAL", color: "#FFFFFF", x: 0.28 },
      { label: "SHA-256", color: "#FFFFFF", x: 0.48 },
      { label: "Ed25519", color: "#D06120", x: 0.68 },
      { label: "VERIFIED", color: "#FFFFFF", x: 0.88 },
    ];

    const init = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const drawNode = (
      x: number,
      y: number,
      radius: number,
      color: string,
      label: string,
      progress: number
    ) => {
      // Outer ring
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.3 + progress * 0.7;
      ctx.stroke();

      // Inner fill
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.1 + progress * 0.3;
      ctx.fill();

      // Center dot
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = progress;
      ctx.fill();

      // Label
      ctx.font = "10px monospace";
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.5 + progress * 0.5;
      ctx.textAlign = "center";
      ctx.fillText(label, x, y + radius + 16);
      ctx.globalAlpha = 1;
    };

    const drawConnection = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      color: string,
      progress: number
    ) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      const endX = x1 + dx * progress;
      const endY = y1 + dy * progress;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;

      // Traveling dot
      if (progress > 0 && progress < 1) {
        ctx.beginPath();
        ctx.arc(endX, endY, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.9;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    };

    const drawHashText = (x: number, y: number, progress: number) => {
      if (progress < 0.3) return;
      const alpha = Math.min((progress - 0.3) / 0.3, 1);
      ctx.font = "9px monospace";
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.globalAlpha = alpha * 0.4;
      ctx.textAlign = "center";
      ctx.fillText("8af3c2b1e9d4...", x, y - 30);
      ctx.globalAlpha = 1;
    };

    const drawSignatureBadge = (x: number, y: number, progress: number) => {
      if (progress < 0.5) return;
      const alpha = Math.min((progress - 0.5) / 0.3, 1);
      const badgeW = 60;
      const badgeH = 18;

      ctx.globalAlpha = alpha * 0.8;
      ctx.strokeStyle = "#D06120";
      ctx.lineWidth = 1;
      ctx.strokeRect(x - badgeW / 2, y - 38 - badgeH / 2, badgeW, badgeH);
      ctx.font = "8px monospace";
      ctx.fillStyle = "#D06120";
      ctx.textAlign = "center";
      ctx.fillText("SIGNED", x, y - 34);
      ctx.globalAlpha = 1;
    };

    // Floating particles in background
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * 600,
        y: Math.random() * 400,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        life: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      // Background particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 0.08;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      const cycleTime = time % 1;
      const centerY = height * 0.5;
      const radius = Math.min(width * 0.04, 20);

      // Draw connections and nodes
      for (let i = 0; i < stages.length; i++) {
        const stage = stages[i];
        const sx = width * stage.x;
        const stageDelay = i * 0.18;
        const nodeProgress = Math.max(0, Math.min(1, (cycleTime - stageDelay) / 0.15));

        // Connection to next stage
        if (i < stages.length - 1) {
          const next = stages[i + 1];
          const connDelay = stageDelay + 0.08;
          const connProgress = Math.max(0, Math.min(1, (cycleTime - connDelay) / 0.12));
          drawConnection(
            sx + radius,
            centerY,
            width * next.x - radius,
            centerY,
            stage.color,
            connProgress
          );
        }

        // Hash text between canonical and SHA-256
        if (i === 2) {
          drawHashText(sx, centerY, nodeProgress);
        }

        // Signature badge on Ed25519
        if (i === 3) {
          drawSignatureBadge(sx, centerY, nodeProgress);
        }

        // Verified glow
        if (i === 4 && nodeProgress > 0.8) {
          ctx.beginPath();
          ctx.arc(sx, centerY, radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = (nodeProgress - 0.8) * 0.15;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        drawNode(sx, centerY, radius, stage.color, stage.label, nodeProgress);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => init();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

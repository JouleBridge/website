"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { cn } from "@/lib/cn";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, prefix = "", suffix = "", className, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration, ease: "easeOut" });
      return animation.stop;
    }
  }, [isInView, value, count, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

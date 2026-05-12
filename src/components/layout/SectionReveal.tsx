"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Fade-up distance in px */
  yOffset?: number;
  /** Scale-down amount when section enters (e.g. 0.95) */
  scaleFrom?: number;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

/**
 * Lightweight section reveal wrapper.
 * Uses GPU-accelerated CSS transforms only — no per-frame JS scroll listeners.
 */
export function SectionReveal({
  children,
  className,
  yOffset = 50,
  scaleFrom = 0.98,
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" as `${number}px` });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, scale: scaleFrom }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: yOffset, scale: scaleFrom }
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

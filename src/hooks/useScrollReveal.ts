"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  start?: string;
}

/**
 * Hook to animate an element with a fade-up reveal on scroll.
 * GSAP logic lives here, not in components.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.8,
      delay = 0,
      ease = "power2.out",
      start = "top 85%",
    } = options;

    gsap.set(el, { y, opacity });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => {
        gsap.to(el, { y: 0, opacity: 1, duration, delay, ease });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return ref;
}

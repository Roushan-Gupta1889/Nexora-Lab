"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface StaggerOptions {
  childSelector: string;
  y?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  start?: string;
}

/**
 * Hook to stagger-animate children of a parent element on scroll.
 * Targets children via a CSS selector.
 */
export function useStaggerAnimation<T extends HTMLElement>(
  options: StaggerOptions
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const parent = ref.current;
    if (!parent) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const {
      childSelector,
      y = 40,
      opacity = 0,
      duration = 0.6,
      stagger = 0.12,
      ease = "power2.out",
      start = "top 85%",
    } = options;

    const children = parent.querySelectorAll(childSelector);
    if (!children.length) return;

    gsap.set(children, { y, opacity });

    const trigger = ScrollTrigger.create({
      trigger: parent,
      start,
      onEnter: () => {
        gsap.to(children, { y: 0, opacity: 1, duration, stagger, ease });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return ref;
}

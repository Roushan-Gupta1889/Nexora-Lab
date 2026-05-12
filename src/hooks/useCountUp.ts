"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Hook to animate a number counting up from 0 to target on scroll.
 * Used by StatsStrip component.
 */
export function useCountUp<T extends HTMLElement>(
  targetText: string,
  duration: number = 2
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = targetText;
      return;
    }

    // Extract numbers and non-numbers
    const numericPart = targetText.match(/[\d.]+/)?.[0] || "0";
    const targetNumber = parseFloat(numericPart);
    const prefix = targetText.split(numericPart)[0] || "";
    const suffix = targetText.split(numericPart)[1] || "";

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        gsap.to(obj, {
          value: targetNumber,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
          },
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [targetText, duration]);

  return ref;
}

"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Hook to animate a number counting up from 0 to target on scroll.
 * Used by StatsStrip component.
 */
export function useCountUp<T extends HTMLElement>(
  target: number,
  duration: number = 2
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = String(target);
      return;
    }

    const obj = { value: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [target, duration]);

  return ref;
}

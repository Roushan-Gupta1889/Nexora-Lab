"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MarqueeOptions {
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

/**
 * Hook to create an infinite horizontal marquee scroll.
 * Clones content to create seamless loop effect.
 */
export function useMarquee<T extends HTMLElement>(
  options: MarqueeOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const {
      speed = 30,
      direction = "left",
      pauseOnHover = true,
    } = options;

    // Clone content for seamless loop
    const content = el.innerHTML;
    el.innerHTML = content + content;

    const totalWidth = el.scrollWidth / 2;
    const directionValue = direction === "left" ? -totalWidth : totalWidth;

    const tween = gsap.to(el, {
      x: directionValue,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => {
          return parseFloat(String(x)) % totalWidth;
        }),
      },
    });

    if (pauseOnHover) {
      const parent = el.parentElement;
      if (parent) {
        parent.addEventListener("mouseenter", () => tween.pause());
        parent.addEventListener("mouseleave", () => tween.resume());
      }
    }

    return () => {
      tween.kill();
    };
  }, [options]);

  return ref;
}

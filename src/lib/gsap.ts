"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default ScrollTrigger settings
ScrollTrigger.defaults({
  start: "top 85%",
  toggleActions: "play none none none",
});

// Export for use in hooks and components
export { gsap, ScrollTrigger };

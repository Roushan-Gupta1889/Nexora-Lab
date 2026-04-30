"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic import to avoid SSR issues with react-animated-cursor
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

/**
 * Custom cursor with gold dot + ring that scales on interactive elements.
 * Only renders after hydration to avoid hydration mismatch.
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render on touch devices
  if (!mounted) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.8}
      outerAlpha={0.3}
      innerStyle={{
        backgroundColor: "#E6A520",
      }}
      outerStyle={{
        border: "2px solid #E6A520",
        backgroundColor: "transparent",
      }}
      clickables={[
        "a",
        "button",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        "textarea",
        "select",
        "label[for]",
        ".link",
        ".clickable",
      ]}
    />
  );
}

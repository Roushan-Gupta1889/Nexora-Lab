"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Custom cursor with gold dot + ring that matches react-animated-cursor behavior.
 * Pure React 19-compatible implementation with smooth animations.
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [innerPos, setInnerPos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const outerPos_ref = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const clickables = [
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
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = clickables.some(
        (selector) =>
          target.matches(selector) ||
          target.closest(selector)
      );

      if (isClickable) {
        setIsHoveringInteractive(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = clickables.some(
        (selector) =>
          target.matches(selector) ||
          target.closest(selector)
      );

      if (isClickable) {
        setIsHoveringInteractive(false);
      }
    };

    // Smooth animation loop
    const animate = () => {
      // Update inner cursor position immediately
      setInnerPos({ x: mousePos.current.x, y: mousePos.current.y });

      // Update outer cursor with lag effect
      outerPos_ref.current.x += (mousePos.current.x - outerPos_ref.current.x) * 0.2;
      outerPos_ref.current.y += (mousePos.current.y - outerPos_ref.current.y) * 0.2;
      
      setOuterPos({ x: outerPos_ref.current.x, y: outerPos_ref.current.y });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Inner dot - immediate follow */}
      <div
        ref={innerRef}
        className="pointer-events-none fixed w-2 h-2 rounded-full bg-[#E6A520] z-[9999]"
        style={{
          left: `${innerPos.x}px`,
          top: `${innerPos.y}px`,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px rgba(230, 165, 32, 0.6), 0 0 24px rgba(230, 165, 32, 0.3)",
          transition: isHoveringInteractive ? "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          scale: isHoveringInteractive ? 1.5 : 1,
        }}
      />

      {/* Outer ring - follows with lag */}
      <div
        ref={outerRef}
        className="pointer-events-none fixed rounded-full border-[2px] border-[#E6A520] z-[9999]"
        style={{
          left: `${outerPos.x}px`,
          top: `${outerPos.y}px`,
          width: "35px",
          height: "35px",
          transform: "translate(-50%, -50%)",
          opacity: isHoveringInteractive ? 0.5 : 0.3,
          transition: isHoveringInteractive ? "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
          scale: isHoveringInteractive ? 1.8 : 1,
        }}
      />
    </>
  );
}

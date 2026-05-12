"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoverEffectItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CardHoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
}

/**
 * Aceternity-style card hover effect adapted for Nexora Labs gold theme.
 * When hovering a card, a gold spotlight background animates behind it
 * while sibling cards subtly dim.
 */
export function CardHoverEffect({ items, className }: CardHoverEffectProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated spotlight background */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary-gold/[0.08] to-secondary-gold/[0.12] block rounded-[20px]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card */}
          <div
            className={cn(
              "relative z-10 h-full rounded-2xl overflow-hidden",
              "bg-white border border-black/[0.06]",
              "p-7 md:p-8 flex flex-col",
              "transition-all duration-300",
              hoveredIndex === idx
                ? "border-primary-gold/30 shadow-[0_20px_40px_rgba(230,165,32,0.1)] -translate-y-1"
                : hoveredIndex !== null
                  ? "opacity-75"
                  : ""
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center mb-7",
                "bg-[#FFF8E7] text-primary-gold",
                "transition-all duration-300",
                hoveredIndex === idx && "scale-110 shadow-[0_0_20px_rgba(230,165,32,0.3)]"
              )}
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3
              className={cn(
                "font-heading text-xl md:text-2xl font-semibold mb-4 transition-colors duration-300",
                hoveredIndex === idx ? "text-primary-gold" : "text-text-dark"
              )}
            >
              {item.title}
            </h3>

            {/* Gold line */}
            <div
              className={cn(
                "h-0.5 rounded-full mb-5 transition-all duration-300",
                "bg-gradient-to-r from-primary-gold to-secondary-gold",
                hoveredIndex === idx ? "w-16" : "w-12"
              )}
            />

            {/* Description */}
            <p className="text-text-light leading-relaxed text-[15px]">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  [
    "rounded-[20px] p-7",
    "transition-all duration-300 ease-out",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-card-bg",
          "border border-black/[0.04]",
          "shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
          "hover:-translate-y-2",
          "hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)]",
        ],
        bordered: [
          "bg-card-bg",
          "border border-black/[0.06]",
          "shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
          "hover:-translate-y-2",
          "hover:shadow-[0_16px_48px_rgba(0,0,0,0.07)]",
          "hover:border-primary-gold/25",
        ],
        featured: [
          "bg-card-bg",
          "border border-primary-gold/20",
          "shadow-[0_4px_24px_rgba(230,165,32,0.08)]",
          "hover:-translate-y-2",
          "hover:shadow-[0_20px_56px_rgba(230,165,32,0.14)]",
          "hover:border-primary-gold/35",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

import * as React from "react";

/**
 * Reusable card component with CVA variants.
 * Supports default, bordered, and featured styles with hover elevation.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };

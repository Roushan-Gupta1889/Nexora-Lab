"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2.5",
    "font-body font-semibold",
    "rounded-full",
    "transition-all duration-200 ease-out",
    "cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-cream",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "btn-gold-gradient text-white font-semibold",
          "shadow-[0_4px_16px_rgba(230,165,32,0.25)]",
          "hover:shadow-[0_8px_32px_rgba(230,165,32,0.4)]",
          "hover:scale-[1.03]",
          "active:scale-[0.98] active:shadow-[0_2px_8px_rgba(230,165,32,0.2)]",
        ],
        outline: [
          "bg-transparent border border-border/60 text-text-dark",
          "shadow-[0_2px_8px_rgba(0,0,0,0.03)]",
          "hover:border-primary-gold/50 hover:text-dark-gold",
          "hover:shadow-[0_6px_24px_rgba(230,165,32,0.12)]",
          "hover:scale-[1.03]",
          "active:scale-[0.98]",
        ],
        ghost: [
          "bg-transparent text-primary-gold",
          "hover:text-dark-gold",
          "hover:bg-primary-gold/5",
          "active:scale-[0.98]",
        ],
      },
      size: {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-[15px]",
        lg: "px-9 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

/**
 * Primary UI button with CVA variants.
 * Supports primary (gold gradient), outline, and ghost styles.
 * Includes icon slot with arrow default.
 */
export function Button({
  children,
  variant,
  size,
  icon,
  iconPosition = "right",
  className,
  ...props
}: ButtonProps) {
  const defaultIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const renderIcon = icon !== undefined ? icon : defaultIcon;

  return (
    <button
      className={cn("group", buttonVariants({ variant, size }), className)}
      {...props}
    >
      {iconPosition === "left" && renderIcon}
      {children}
      {iconPosition === "right" && renderIcon}
    </button>
  );
}

export { buttonVariants };

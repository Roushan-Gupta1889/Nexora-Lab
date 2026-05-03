import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const iconCircleVariants = cva(
  [
    "inline-flex items-center justify-center rounded-full shrink-0",
    "bg-gradient-to-br from-[#FFF8E7] to-[#FFF0D0]",
    "text-primary-gold",
    "shadow-[0_3px_12px_rgba(230,165,32,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]",
    "border border-primary-gold/8",
  ],
  {
    variants: {
      size: {
        sm: "w-11 h-11 text-base",
        md: "w-14 h-14 text-xl",
        lg: "w-[72px] h-[72px] text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface IconCircleProps extends VariantProps<typeof iconCircleVariants> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Circular icon container with gradient background,
 * subtle shadow for depth, and inner highlight for glass effect.
 */
export function IconCircle({ children, size, className }: IconCircleProps) {
  return (
    <div className={cn(iconCircleVariants({ size }), className)}>
      {children}
    </div>
  );
}

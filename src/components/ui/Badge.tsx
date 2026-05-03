import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * Premium pill-shaped badge with frosted gold background,
 * subtle border, and uppercase tracking.
 * Used as section labels (e.g., "WHAT WE DO", "OUR WORK").
 */
export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2",
        "px-5 py-2",
        "bg-gradient-to-r from-[#FFF8E7] to-[#FFF3D6]",
        "border border-primary-gold/15",
        "rounded-pill",
        "text-xs font-semibold tracking-[2px] uppercase",
        "text-dark-gold",
        "shadow-[0_2px_8px_rgba(230,165,32,0.06)]",       
        className
      )}
    >
      {icon && <span className="text-primary-gold">{icon}</span>}
      {children}
    </span>
  );
}

import { cn } from "@/lib/utils";

interface GoldTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Inline gradient gold italic text using Playfair Display.
 * Used ONLY inside headings for highlighted words.
 * Uses CSS gradient text for a premium shimmer effect.
 */
export function GoldText({ children, className }: GoldTextProps) {
  return (
    <span
      className={cn(
        "gold-gradient-text",
        className
      )}
    >
      {children}
    </span>
  );
}

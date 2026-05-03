import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Reusable section header with Badge + Heading + Description.
 * Used at the top of every major section.
 * Title supports inline <GoldText> for highlighted words.
 */
export function SectionHeading({
  badge,
  badgeIcon,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-18",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-5", align === "center" && "flex justify-center")}>
          <Badge icon={badgeIcon}>{badge}</Badge>
        </div>
      )}
      <h2 className="font-heading text-text-dark leading-tight mb-5">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-text-light text-base md:text-lg leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

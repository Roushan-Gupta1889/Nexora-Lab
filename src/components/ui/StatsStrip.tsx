import { cn } from "@/lib/utils";
import { type Stat } from "@/data/stats";
import { useCountUp } from "@/hooks/useCountUp";
import { IconCircle } from "./IconCircle";
import {
  Users,
  Briefcase,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={22} />,
  briefcase: <Briefcase size={22} />,
  "trending-up": <TrendingUp size={22} />,
  "shield-check": <ShieldCheck size={22} />,
};

interface StatsStripProps {
  data: Stat[];
  className?: string;
}

/**
 * Horizontal stats strip showing key metrics.
 * Accepts data array from /data/stats.ts — no hardcoded content.
 * Premium design with bigger numbers and refined spacing.
 */
export function StatsStrip({ data, className }: StatsStripProps) {
  return (
    <div
      className={cn(
        "w-full rounded-[20px]",
        "bg-card-bg",
        "border border-black/[0.04]",
        "shadow-[0_2px_16px_rgba(0,0,0,0.04)]",
        "grid grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {data.map((stat, index) => (
        <StatItem key={stat.id} stat={stat} index={index} />
      ))}
    </div>
  );
}

function StatItem({ stat, index }: { stat: Stat; index: number }) {
  const countRef = useCountUp<HTMLParagraphElement>(stat.value);

  return (
    <div
      className={cn(
        "flex items-center gap-4 px-7 py-6 justify-center",
        /* Vertical divider on desktop between items */
        index > 0 && "md:border-l md:border-black/[0.04]",
        /* Horizontal divider on mobile for bottom row */
        index >= 2 && "border-t md:border-t-0 border-black/[0.04]"
      )}
    >
      <IconCircle size="sm">
        {iconMap[stat.icon] || <Users size={22} />}
      </IconCircle>
      <div>
        <p
          ref={countRef}
          className="text-2xl md:text-[28px] font-bold text-primary-gold font-heading leading-none tracking-tight"
        >
          0
        </p>
        <p className="text-xs md:text-[13px] text-text-light mt-1 whitespace-nowrap">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

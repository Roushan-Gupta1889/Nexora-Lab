"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Zap, Smartphone, Shield, Sparkles } from "lucide-react";
import { SectionHeading, GoldText } from "@/components/ui";
import { CardHoverEffect } from "@/components/ui/CardHoverEffect";
import { whyChooseUsFeatures } from "@/data/features";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={24} />,
  zap: <Zap size={24} />,
  smartphone: <Smartphone size={24} />,
  shield: <Shield size={24} />,
};

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" as `${number}px` });

  // Map features data into the format CardHoverEffect expects
  const hoverItems = whyChooseUsFeatures.map((feature) => ({
    id: feature.id,
    icon: iconMap[feature.icon],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            badge="HOW WE HELP YOU GROW"
            badgeIcon={<Sparkles size={14} />}
            title={
              <>
                Why Businesses Choose <GoldText>Nexora Labs</GoldText>
              </>
            }
            description="We combine strategic thinking with technical excellence to build digital experiences that deliver measurable results."
            align="center"
            className="mb-16 md:mb-24"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <CardHoverEffect items={hoverItems} />
        </motion.div>
      </div>
    </section>
  );
}

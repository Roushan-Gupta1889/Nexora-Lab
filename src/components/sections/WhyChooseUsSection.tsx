"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Target, Zap, Smartphone, Shield, Sparkles } from "lucide-react";
import { SectionHeading, GoldText, IconCircle, Card } from "@/components/ui";
import { whyChooseUsFeatures } from "@/data/features";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  target: <Target size={24} />,
  zap: <Zap size={24} />,
  smartphone: <Smartphone size={24} />,
  shield: <Shield size={24} />,
};

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {whyChooseUsFeatures.map((feature) => (
            <motion.div key={feature.id} variants={cardVariants}>
              <Card
                variant="bordered"
                className={cn(
                  "h-full p-8 group transition-all duration-300",
                  "hover:-translate-y-[10px] hover:shadow-[0_20px_40px_rgba(230,165,32,0.08)] hover:border-primary-gold/30"
                )}
              >
                <IconCircle
                  size="lg"
                  className="mb-8 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(230,165,32,0.3)]"
                >
                  {iconMap[feature.icon]}
                </IconCircle>

                <h3 className="font-heading text-xl md:text-2xl font-semibold text-text-dark mb-4">
                  {feature.title}
                </h3>

                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-gold to-secondary-gold mb-5 rounded-full" />

                <p className="text-text-light leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

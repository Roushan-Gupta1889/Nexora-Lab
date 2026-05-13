"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  MessageCircle,
  FileText,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { SectionHeading, GoldText } from "@/components/ui";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  message: <MessageCircle size={22} />,
  file: <FileText size={22} />,
  code: <Code2 size={22} />,
  rocket: <Rocket size={22} />,
};

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.3 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-warm overflow-hidden" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionHeading
            badge="OUR PROCESS"
            badgeIcon={<Sparkles size={14} />}
            title={
              <>
                A <GoldText>Simple</GoldText> Process.{"\n"}
                Built Around Results.
              </>
            }
            description="We keep things clear, collaborative, and focused on delivering websites that drive real business growth."
            align="center"
            className="mb-16 md:mb-20"
          />
        </motion.div>

        {/* Decorative Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 -mt-10 mb-12"
        >
          <div className="w-12 h-[2px] bg-primary-gold/30" />
          <div className="w-2 h-2 rounded-full bg-primary-gold" />
          <div className="w-12 h-[2px] bg-primary-gold/30" />
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="relative"
            >
              {/* Dashed Connector (between cards, not after last) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-[28px] -right-[1px] w-[2px] h-[calc(100%-56px)] z-10">
                  <div className="w-full h-full border-r-[2px] border-dashed border-primary-gold/40" />
                </div>
              )}

              {/* Card */}
              <div
                className={cn(
                  "relative bg-white border border-black/[0.06] p-6 lg:p-8 h-full",
                  "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(230,165,32,0.08)] hover:border-primary-gold/20",
                  index === 0 && "rounded-l-2xl",
                  index === processSteps.length - 1 && "rounded-r-2xl",
                  // Mobile: round all cards
                  "max-lg:rounded-2xl"
                )}
              >
                {/* Step Number Circle */}
                <div className="w-12 h-12 rounded-full border-[1.5px] border-primary-gold/50 flex items-center justify-center mb-6">
                  <span className="text-primary-gold font-heading font-bold text-base">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-primary-gold mb-6">
                  {iconMap[step.icon]}
                </div>

                {/* Title */}
                <h4 className="font-heading text-xl font-bold text-text-dark mb-4">
                  {step.title}
                </h4>

                {/* Divider */}
                <div className="w-8 h-[2px] bg-primary-gold/40 mb-4" />

                {/* Description */}
                <p className="text-text-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

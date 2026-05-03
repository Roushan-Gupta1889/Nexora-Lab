"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { 
  Layout, 
  Code2, 
  ShoppingCart, 
  BarChart3, 
  Rocket, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { SectionHeading, GoldText, IconCircle, Card, Badge, Button } from "@/components/ui";
import { services, type Service } from "@/data/services";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  layout: <Layout size={24} />,
  code: <Code2 size={24} />,
  "shopping-cart": <ShoppingCart size={24} />,
  "bar-chart": <BarChart3 size={24} />,
  rocket: <Rocket size={24} />,
  headphones: <Headphones size={24} />,
};

function ServiceCard({ service }: { service: Service }) {
  const cardRef = useTiltEffect<HTMLDivElement>(5); // 5 degrees max tilt

  return (
    <Card
      ref={cardRef}
      variant="bordered"
      className={cn(
        "relative h-full p-8 group overflow-hidden cursor-pointer",
        "hover:border-primary-gold/30 hover:shadow-[0_20px_56px_rgba(230,165,32,0.1)]"
      )}
    >
      <IconCircle
        size="lg"
        className="mb-8 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(230,165,32,0.3)]"
      >
        {iconMap[service.icon]}
      </IconCircle>

      <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4 transition-colors group-hover:text-primary-gold">
        {service.title}
      </h3>

      <div className="w-12 h-0.5 bg-gradient-to-r from-primary-gold to-secondary-gold mb-5 rounded-full" />

      <p className="text-text-light mb-6">
        {service.description}
      </p>

      <ul className="space-y-3 mb-10">
        {service.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-text-dark font-medium">
            <CheckCircle2 size={16} className="text-primary-gold mt-0.5 shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 mt-auto text-sm font-semibold text-text-dark group-hover:text-primary-gold transition-colors">
        Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </div>

      {/* Large Watermark Number */}
      <div className="absolute -bottom-4 -right-2 text-[100px] font-heading font-bold text-black/[0.02] transition-colors duration-300 group-hover:text-primary-gold/[0.05] pointer-events-none select-none">
        {service.number}
      </div>
    </Card>
  );
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-cream" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <SectionHeading
          badge="WHAT WE DO"
          badgeIcon={<Sparkles size={14} />}
          title={
            <>
              Digital Solutions That <GoldText>Drive Real Business Results</GoldText>
            </>
          }
          description="We provide end-to-end services tailored to help your brand stand out, attract more traffic, and convert visitors into loyal customers."
          align="center"
          className="mb-16 md:mb-24"
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 md:mb-20"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className={cn(
            "w-full rounded-2xl bg-white p-6 md:p-8",
            "border border-black/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.04)]",
            "flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8"
          )}
        >
          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-heading font-semibold text-text-dark mb-4 md:mb-2 text-center md:text-left">
              Have a project in mind? Let's build something great.
            </h4>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2 text-sm text-text-light font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-gold" /> Free Consultation</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-gold" /> Expert Team</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-primary-gold" /> Rapid Delivery</span>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Button variant="primary" size="lg" className="w-full md:w-auto">
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

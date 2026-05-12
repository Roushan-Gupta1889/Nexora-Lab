"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SectionHeading, GoldText, StatsStrip } from "@/components/ui";
import { ShieldCheck } from "lucide-react";
import { stats } from "@/data/stats";
import { useMarquee } from "@/hooks/useMarquee";
import { cn } from "@/lib/utils";

const clientLogos = [
  { name: "Homey", src: "/images/logos/logo-homey.svg" },
  { name: "FitFuel", src: "/images/logos/logo-fitfuel.svg" },
  { name: "SaaSly", src: "/images/logos/logo-saasly.svg" },
  { name: "Apexivo", src: "/images/logos/logo-apexivo.svg" },
  { name: "Payro", src: "/images/logos/logo-payro.svg" },
  { name: "Brewora", src: "/images/logos/logo-brewora.svg" },
];

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" as `${number}px` });

  const marqueeRef = useMarquee<HTMLDivElement>({
    speed: 40,
    direction: "left",
    pauseOnHover: true,
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-warm overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            badge="TRUSTED BY GROWING BUSINESSES"
            badgeIcon={<ShieldCheck size={14} />}
            title={
              <>
                Trusted by Startups and <GoldText>Growing Businesses Worldwide</GoldText>
              </>
            }
            align="center"
            className="mb-12"
          />
        </motion.div>

        {/* Marquee Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative w-full overflow-hidden mb-16 md:mb-20"
        >
          {/* Fading edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-bg-warm to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-bg-warm to-transparent z-10 pointer-events-none" />

          {/* Marquee Content */}
          <div className="flex w-fit">
            <div ref={marqueeRef} className="flex shrink-0 items-center gap-6 pr-6">
              {clientLogos.map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className={cn(
                    "w-[200px] h-[80px] shrink-0",
                    "flex items-center justify-center",
                    "bg-white border border-black/[0.06] rounded-2xl",
                    "transition-all duration-300 ease-out cursor-pointer",
                    "grayscale hover:grayscale-0 hover:scale-105 hover:shadow-[0_8px_30px_rgba(230,165,32,0.12)]"
                  )}
                >
                  <div className="relative w-[140px] h-[40px]">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain"
                      sizes="140px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="w-full mt-4"
        >
          <StatsStrip data={stats} />
        </motion.div>
      </div>
    </section>
  );
}

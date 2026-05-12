"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading, GoldText, Card } from "@/components/ui";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function TeamSection() {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="team">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="MEET THE EXPERTS"
          badgeIcon={<Sparkles size={14} />}
          title={
            <>
              The Minds Behind <GoldText>Nexora Labs</GoldText>
            </>
          }
          description="A team of passionate designers, developers, and strategists dedicated to helping your business grow."
          align="center"
          className="mb-16 md:mb-24"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {team.map((member, index) => (
            <motion.div 
              key={member.id} 
              variants={cardVariants} 
              className={cn(
                "relative w-full h-[350px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden group cursor-pointer",
                index % 2 !== 0 ? "lg:translate-y-12" : ""
              )}
            >
              {/* Background Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Default Overlay (Gradient at Bottom) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 z-10" />

              {/* Hover Overlay (Full Dark Tint) */}
              <div className="absolute inset-0 bg-text-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              <div className="absolute top-6 right-6 w-8 h-8 border-t-[1.5px] border-r-[1.5px] border-primary-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 z-20 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[1.5px] border-l-[1.5px] border-primary-gold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 z-20 pointer-events-none" />

              {/* Content Container */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end transition-all duration-500">
                
                {/* Header (Role & Name) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                  <p className="text-primary-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-1.5 drop-shadow-sm">
                    {member.role}
                  </p>
                  <h3 className="font-cormorant italic text-2xl sm:text-[32px] font-medium text-white drop-shadow-md">
                    {member.name}
                  </h3>
                </div>

                {/* Expanded Details (Revealed on Hover) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <div className="overflow-hidden">
                    <div className="w-full h-[1px] bg-primary-gold/30 my-4 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-100" />
                    
                    <p className="text-white/90 text-[13px] md:text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {member.bio}
                    </p>

                    {member.quote && (
                      <p className="font-cormorant italic text-primary-gold/90 text-sm md:text-[15px] leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-250">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    )}

                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 transform translate-y-4 group-hover:translate-y-0">
                      <Link 
                        href={member.linkedin}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-primary-gold hover:border-primary-gold text-white text-[13px] font-medium transition-colors"
                      >
                        <LinkedinIcon size={14} />
                        LinkedIn
                      </Link>

                      {member.portfolio && (
                        <Link 
                          href={member.portfolio}
                          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-primary-gold hover:border-primary-gold text-white transition-colors"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.333 8h9.334M8.667 4l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

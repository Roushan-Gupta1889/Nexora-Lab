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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={cardVariants} className="h-full">
              <Card
                variant="bordered"
                className="h-full p-6 flex flex-col group overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-bg-warm mb-6">
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-primary-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                  
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  {/* LinkedIn Button floats up on hover */}
                  <Link
                    href={member.linkedin}
                    className={cn(
                      "absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full",
                      "bg-white shadow-lg flex items-center justify-center text-primary-gold",
                      "opacity-0 translate-y-4 transition-all duration-300 ease-out",
                      "group-hover:opacity-100 group-hover:translate-y-0",
                      "hover:bg-primary-gold hover:text-white"
                    )}
                    aria-label={`LinkedIn profile for ${member.name}`}
                  >
                    <LinkedinIcon size={18} />
                  </Link>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h4 className="font-heading text-xl font-bold text-text-dark mb-1">
                    {member.name}
                  </h4>
                  <p className="text-sm font-medium text-primary-gold mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  
                  <div className="w-10 h-0.5 bg-black/[0.04] mb-4 group-hover:bg-primary-gold/30 transition-colors" />
                  
                  <p className="text-sm text-text-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

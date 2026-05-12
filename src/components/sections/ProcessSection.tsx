"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "@/lib/gsap";
import {
  Users,
  PenTool,
  Code2,
  Settings,
  Rocket,
  Headphones,
  Target,
  MessageSquare,
  Award,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { SectionHeading, GoldText, IconCircle, Card } from "@/components/ui";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={20} />,
  edit: <PenTool size={20} />,
  code: <Code2 size={20} />,
  settings: <Settings size={20} />,
  rocket: <Rocket size={20} />,
  headphones: <Headphones size={20} />,
};



export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);



  useGSAP(
    () => {
      if (!timelineRef.current || !lineRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(lineRef.current, { width: "100%", height: "100%" });
        gsap.set(stepsRef.current, { opacity: 1, scale: 1, y: 0 });
        return;
      }

      // Check if mobile (vertical layout) or desktop (horizontal layout)
      const isDesktop = window.innerWidth >= 1024;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          end: "bottom 50%",
          // If we want scrub, we can use scrub: 1. But the plan says "draws on scroll" and "Steps appear".
          // A one-time play with duration is smoother than scrub for entering.
          toggleActions: "play none none none",
        },
      });

      // Animate line
      if (isDesktop) {
        tl.fromTo(
          lineRef.current,
          { width: "0%" },
          { width: "100%", duration: 2, ease: "power1.inOut" }
        );
      } else {
        tl.fromTo(
          lineRef.current,
          { height: "0%" },
          { height: "100%", duration: 2, ease: "power1.inOut" }
        );
      }

      // Animate steps appearing along the line
      // Calculate stagger based on the line drawing time
      const staggerTime = 2 / processSteps.length;
      
      tl.fromTo(
        stepsRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: staggerTime,
          ease: "back.out(1.7)",
        },
        // Start staggering steps slightly after the line starts drawing
        "-=1.9"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-bg-warm overflow-hidden" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="OUR PROCESS"
          badgeIcon={<Sparkles size={14} />}
          title={
            <>
              <GoldText>Our Proven Process.</GoldText> Your Success Roadmap.
            </>
          }
          description="A clear, transparent, and collaborative approach to bringing your vision to life, from initial concept to final launch."
          align="center"
          className="mb-16 md:mb-24"
        />

        {/* Timeline Area */}
        <div ref={timelineRef} className="relative mt-8 md:mt-12">
          {/* Desktop Line (Horizontal) */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-black/[0.06]">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-gold to-secondary-gold w-0"
            />
          </div>

          {/* Mobile Line (Vertical) */}
          <div className="lg:hidden absolute top-[5%] bottom-[5%] left-[44px] w-[2px] bg-black/[0.06]">
            <div
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-gold to-secondary-gold h-0"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative group"
              >
                {/* Circle Marker */}
                <div className="shrink-0 w-[88px] flex flex-col items-center mr-6 lg:mr-0 lg:mb-6">
                  <div className="w-[88px] h-[88px] rounded-full bg-white border border-black/[0.08] shadow-sm flex items-center justify-center mb-3 group-hover:border-primary-gold/40 group-hover:shadow-[0_0_20px_rgba(230,165,32,0.15)] transition-all duration-300 relative z-10">
                    <span className="absolute top-2 right-2 text-xs font-bold text-primary-gold">
                      {step.number}
                    </span>
                    <div className="text-primary-gold/80 group-hover:text-primary-gold transition-colors duration-300">
                      {iconMap[step.icon]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 lg:w-full lg:px-2 pt-2 lg:pt-0">
                  <h4 className="font-heading text-lg font-bold text-text-dark mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
